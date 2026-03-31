'use client';

import { UserProgress, SrsCard, JlptLevel } from './types';
import { supabase } from './supabase';

const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: '',
  dailyChallengeDate: null,
  vocabMastery: {},
  grammarMastery: {},
  unlockedLevels: ['N5'],
};

// ===== Core Progress (jt_progress — single row) =====

let cachedProgressId: string | null = null;

async function getProgressRow(): Promise<{ id: string; data: Omit<UserProgress, 'vocabMastery' | 'grammarMastery'> }> {
  const { data } = await supabase
    .from('jt_progress')
    .select('*')
    .limit(1)
    .single();

  if (!data) {
    // Create default row if none exists
    const { data: created } = await supabase
      .from('jt_progress')
      .insert({})
      .select()
      .single();
    cachedProgressId = created!.id;
    return {
      id: created!.id,
      data: {
        xp: 0, level: 1, currentStreak: 0, longestStreak: 0,
        lastActiveDate: '', dailyChallengeDate: null, unlockedLevels: ['N5'],
      },
    };
  }

  cachedProgressId = data.id;
  return {
    id: data.id,
    data: {
      xp: data.xp,
      level: data.level,
      currentStreak: data.current_streak,
      longestStreak: data.longest_streak,
      lastActiveDate: data.last_active_date,
      dailyChallengeDate: data.daily_challenge_date,
      unlockedLevels: data.unlocked_levels,
    },
  };
}

async function getVocabMasteryMap(): Promise<Record<string, SrsCard>> {
  const { data } = await supabase.from('jt_vocab_mastery').select('*');
  if (!data) return {};
  const map: Record<string, SrsCard> = {};
  for (const row of data) {
    map[row.word_id] = {
      wordId: row.word_id,
      level: row.srs_level,
      nextReview: row.next_review,
      lastReviewed: row.last_reviewed,
      correctCount: row.correct_count,
      incorrectCount: row.incorrect_count,
    };
  }
  return map;
}

async function getGrammarMasteryMap(): Promise<Record<string, { completed: boolean; score: number }>> {
  const { data } = await supabase.from('jt_grammar_mastery').select('*');
  if (!data) return {};
  const map: Record<string, { completed: boolean; score: number }> = {};
  for (const row of data) {
    map[row.pattern_id] = { completed: row.completed, score: row.score };
  }
  return map;
}

export async function getProgress(): Promise<UserProgress> {
  const [progressRow, vocabMastery, grammarMastery] = await Promise.all([
    getProgressRow(),
    getVocabMasteryMap(),
    getGrammarMasteryMap(),
  ]);
  return { ...progressRow.data, vocabMastery, grammarMastery };
}

async function updateProgressFields(fields: Record<string, unknown>): Promise<void> {
  if (!cachedProgressId) {
    const row = await getProgressRow();
    cachedProgressId = row.id;
  }
  await supabase
    .from('jt_progress')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', cachedProgressId);
}

// ===== XP & Streak Helpers =====

export async function addXp(amount: number): Promise<UserProgress> {
  const progress = await getProgress();
  const newXp = progress.xp + amount;
  const { level: newLevel } = calculateLevel(newXp);
  await updateProgressFields({ xp: newXp, level: newLevel });
  return { ...progress, xp: newXp, level: newLevel };
}

export async function updateStreak(): Promise<UserProgress> {
  const progress = await getProgress();
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (progress.lastActiveDate === today) return progress;

  let newStreak = 1;
  if (progress.lastActiveDate === yesterday) {
    newStreak = progress.currentStreak + 1;
  }

  const longestStreak = Math.max(progress.longestStreak, newStreak);
  await updateProgressFields({
    current_streak: newStreak,
    longest_streak: longestStreak,
    last_active_date: today,
  });
  return { ...progress, currentStreak: newStreak, longestStreak, lastActiveDate: today };
}

// ===== SRS Helpers =====

const SRS_INTERVALS = [0, 1, 3, 7, 14, 30];

export async function getVocabCard(wordId: string): Promise<SrsCard | undefined> {
  const { data } = await supabase
    .from('jt_vocab_mastery')
    .select('*')
    .eq('word_id', wordId)
    .maybeSingle();
  if (!data) return undefined;
  return {
    wordId: data.word_id,
    level: data.srs_level,
    nextReview: data.next_review,
    lastReviewed: data.last_reviewed,
    correctCount: data.correct_count,
    incorrectCount: data.incorrect_count,
  };
}

export async function updateVocabCard(wordId: string, correct: boolean): Promise<void> {
  const existing = await getVocabCard(wordId);
  const card = existing || {
    wordId,
    level: 0,
    nextReview: getTodayString(),
    lastReviewed: null,
    correctCount: 0,
    incorrectCount: 0,
  };

  const newLevel = correct
    ? Math.min(card.level + 1, 5)
    : Math.max(card.level - 1, 0);

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + SRS_INTERVALS[newLevel]);

  await supabase.from('jt_vocab_mastery').upsert({
    word_id: wordId,
    srs_level: newLevel,
    next_review: nextDate.toISOString().split('T')[0],
    last_reviewed: getTodayString(),
    correct_count: card.correctCount + (correct ? 1 : 0),
    incorrect_count: card.incorrectCount + (correct ? 0 : 1),
  }, { onConflict: 'word_id' });
}

// ===== Grammar Mastery =====

export async function updateGrammarMastery(patternId: string, score: number): Promise<void> {
  await supabase.from('jt_grammar_mastery').upsert({
    pattern_id: patternId,
    completed: true,
    score,
  }, { onConflict: 'pattern_id' });
}

// ===== Level Unlock =====

export async function unlockLevel(level: JlptLevel): Promise<void> {
  const progress = await getProgress();
  if (progress.unlockedLevels.includes(level)) return;
  await updateProgressFields({
    unlocked_levels: [...progress.unlockedLevels, level],
  });
}

export async function isLevelUnlocked(level: JlptLevel): Promise<boolean> {
  const progress = await getProgress();
  return progress.unlockedLevels.includes(level);
}

// ===== Daily Challenge =====

export async function markDailyChallengeComplete(): Promise<void> {
  await updateProgressFields({ daily_challenge_date: getTodayString() });
}

export async function isDailyChallengeComplete(): Promise<boolean> {
  const progress = await getProgress();
  return progress.dailyChallengeDate === getTodayString();
}

// ===== Level Calculation =====

export function calculateLevel(xp: number): { level: number; xpInLevel: number; xpForNext: number } {
  let remaining = xp;
  let level = 1;

  while (true) {
    const threshold = getXpThreshold(level);
    if (remaining < threshold) {
      return { level, xpInLevel: remaining, xpForNext: threshold };
    }
    remaining -= threshold;
    level++;
  }
}

function getXpThreshold(level: number): number {
  if (level <= 10) return 100;
  if (level <= 25) return 150;
  return 200;
}

// ===== Date Helpers =====

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}
