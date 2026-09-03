'use client';

import { UserProgress, VerbRecord } from './types';
import { supabase } from './supabase';

const DEFAULT_PROGRESS: UserProgress = {
  dayIndex: 1,
  weekIndex: 0,
  rotationIndex: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: '',
  lastSessionDate: null,
  records: {},
};

/**
 * In-memory cache of the whole progress object.
 *
 * The previous version re-fetched from Supabase before every single write,
 * which made answering a question wait on a network round-trip and was the
 * root of the "question gets stuck" bugs. Here the client owns the state:
 * reads hit the cache, writes update the cache immediately and push to
 * Supabase in the background.
 */
let cache: UserProgress | null = null;
let rowId: string | null = null;
let loading: Promise<UserProgress> | null = null;

// ===== Date helpers =====

function toDateString(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getTodayString(): string {
  return toDateString(new Date());
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toDateString(d);
}

// ===== Loading =====

async function fetchProgress(): Promise<UserProgress> {
  const [progressRes, recordsRes] = await Promise.all([
    supabase.from('jt_verb_progress').select('*').limit(1).maybeSingle(),
    supabase.from('jt_verb_records').select('*'),
  ]);

  let row = progressRes.data;

  if (!row) {
    const { data: created, error } = await supabase
      .from('jt_verb_progress')
      .insert({})
      .select()
      .single();
    if (error || !created) {
      console.error('Failed to create progress row:', error);
      return { ...DEFAULT_PROGRESS };
    }
    row = created;
  }

  rowId = row.id;

  const records: Record<string, VerbRecord> = {};
  for (const r of recordsRes.data ?? []) {
    records[r.verb_id] = {
      verbId: r.verb_id,
      learnedOn: r.learned_on,
      weekIndex: r.week_index,
      correctCount: r.correct_count,
      incorrectCount: r.incorrect_count,
      streak: r.streak,
      lastTested: r.last_tested,
    };
  }

  const progress: UserProgress = {
    dayIndex: row.day_index,
    weekIndex: row.week_index,
    rotationIndex: row.rotation_index,
    currentStreak: row.current_streak,
    longestStreak: row.longest_streak,
    lastActiveDate: row.last_active_date ?? '',
    lastSessionDate: row.last_session_date,
    records,
  };

  // A stored streak stays valid forever unless it is expired on read —
  // lastActiveDate only moves on activity.
  const today = getTodayString();
  const yesterday = getYesterdayString();
  const stale =
    progress.currentStreak > 0 &&
    progress.lastActiveDate !== '' &&
    progress.lastActiveDate !== today &&
    progress.lastActiveDate !== yesterday;

  if (stale) {
    progress.currentStreak = 0;
    void pushProgressFields({ current_streak: 0 });
  }

  return progress;
}

/** Loads progress once and caches it. Concurrent callers share one request. */
export async function getProgress(): Promise<UserProgress> {
  if (cache) return cache;
  if (!loading) {
    loading = fetchProgress().then((p) => {
      cache = p;
      loading = null;
      return p;
    });
  }
  return loading;
}

/** The cached progress without a fetch, or null if not loaded yet. */
export function getCachedProgress(): UserProgress | null {
  return cache;
}

// ===== Writes (cache-first, network in background) =====

async function pushProgressFields(fields: Record<string, unknown>): Promise<void> {
  if (!rowId) {
    await getProgress();
    if (!rowId) return;
  }
  const { error } = await supabase
    .from('jt_verb_progress')
    .update({ ...fields, updated_at: new Date().toISOString() })
    .eq('id', rowId);
  if (error) console.error('Failed to update progress:', error);
}

/**
 * Records one answer. Updates the cache synchronously so the UI can advance
 * immediately, and writes to Supabase in the background.
 */
export function recordAnswer(
  verbId: string,
  correct: boolean,
  weekIndex: number
): void {
  if (!cache) return;
  const today = getTodayString();

  const existing = cache.records[verbId];
  const record: VerbRecord = existing
    ? {
        ...existing,
        correctCount: existing.correctCount + (correct ? 1 : 0),
        incorrectCount: existing.incorrectCount + (correct ? 0 : 1),
        streak: correct ? existing.streak + 1 : 0,
        lastTested: today,
      }
    : {
        verbId,
        learnedOn: today,
        weekIndex,
        correctCount: correct ? 1 : 0,
        incorrectCount: correct ? 0 : 1,
        streak: correct ? 1 : 0,
        lastTested: today,
      };

  cache.records[verbId] = record;

  void supabase
    .from('jt_verb_records')
    .upsert(
      {
        verb_id: record.verbId,
        learned_on: record.learnedOn,
        week_index: record.weekIndex,
        correct_count: record.correctCount,
        incorrect_count: record.incorrectCount,
        streak: record.streak,
        last_tested: record.lastTested,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'verb_id' }
    )
    .then(({ error }) => {
      if (error) console.error('Failed to save verb record:', error);
    });
}

/** Marks today's session done: advances the course and extends the streak. */
export async function completeSession(next: {
  dayIndex: number;
  weekIndex: number;
  rotationIndex: number;
}): Promise<UserProgress> {
  const progress = await getProgress();
  const today = getTodayString();
  const yesterday = getYesterdayString();

  // Only extend the streak on the first session of a day.
  let currentStreak = progress.currentStreak;
  if (progress.lastActiveDate !== today) {
    currentStreak = progress.lastActiveDate === yesterday ? currentStreak + 1 : 1;
  }
  const longestStreak = Math.max(progress.longestStreak, currentStreak);

  Object.assign(progress, {
    ...next,
    currentStreak,
    longestStreak,
    lastActiveDate: today,
    lastSessionDate: today,
  });

  await pushProgressFields({
    day_index: next.dayIndex,
    week_index: next.weekIndex,
    rotation_index: next.rotationIndex,
    current_streak: currentStreak,
    longest_streak: longestStreak,
    last_active_date: today,
    last_session_date: today,
  });

  return progress;
}

/** True if today's session is already done. */
export async function isSessionCompleteToday(): Promise<boolean> {
  const progress = await getProgress();
  return progress.lastSessionDate === getTodayString();
}
