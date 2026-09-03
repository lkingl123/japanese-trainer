'use client';

import { UserProgress, VerbRecord } from './types';

/**
 * Progress lives in localStorage as a single JSON blob.
 *
 * This is a single-user app on one device, so there is nothing a database
 * buys us here — and going local removes the whole class of bugs where
 * answering a question waited on a network round-trip. Reads and writes are
 * synchronous; the UI never blocks.
 */

const STORAGE_KEY = 'verb-trainer-progress';

const DEFAULT_PROGRESS: UserProgress = {
  dayIndex: 1,
  weekIndex: 0,
  dayOfWeek: 1,
  rotationIndex: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: '',
  lastSessionDate: null,
  records: {},
};

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

// ===== Read / write =====

let cache: UserProgress | null = null;

function read(): UserProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    // Merge onto the defaults so a blob written by an older version that is
    // missing newer fields still loads instead of throwing.
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return { ...DEFAULT_PROGRESS, ...parsed, records: parsed.records ?? {} };
  } catch (e) {
    console.error('Could not read saved progress, starting fresh:', e);
    return { ...DEFAULT_PROGRESS };
  }
}

function write(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    // Private browsing or a full quota — keep the in-memory copy so the
    // session still works, it just won't survive a reload.
    console.error('Could not save progress:', e);
  }
}

/**
 * Loads progress, expiring a stale streak on the way out.
 *
 * Async only so callers don't all have to change; it never actually waits.
 */
export async function getProgress(): Promise<UserProgress> {
  if (cache) return cache;

  const progress = read();

  // lastActiveDate only moves on activity, so a stored streak would stay valid
  // forever unless it's expired here on read.
  const stale =
    progress.currentStreak > 0 &&
    progress.lastActiveDate !== '' &&
    progress.lastActiveDate !== getTodayString() &&
    progress.lastActiveDate !== getYesterdayString();

  if (stale) {
    progress.currentStreak = 0;
    write(progress);
  }

  cache = progress;
  return progress;
}

/** The cached progress without a load, or null if not loaded yet. */
export function getCachedProgress(): UserProgress | null {
  return cache;
}

// ===== Mutations =====

/** Records one answer. Synchronous — the UI can advance immediately. */
export function recordAnswer(verbId: string, correct: boolean, weekIndex: number): void {
  if (!cache) return;
  const today = getTodayString();

  const existing = cache.records[verbId];
  cache.records[verbId] = existing
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

  write(cache);
}

/** Marks today's session done: advances the course and extends the streak. */
export async function completeSession(next: {
  dayIndex: number;
  dayOfWeek: number;
  weekIndex: number;
  rotationIndex: number;
}): Promise<UserProgress> {
  const progress = await getProgress();
  const today = getTodayString();

  // Only extend the streak on the first session of a day.
  let currentStreak = progress.currentStreak;
  if (progress.lastActiveDate !== today) {
    currentStreak =
      progress.lastActiveDate === getYesterdayString() ? currentStreak + 1 : 1;
  }

  Object.assign(progress, {
    ...next,
    currentStreak,
    longestStreak: Math.max(progress.longestStreak, currentStreak),
    lastActiveDate: today,
    lastSessionDate: today,
  });

  write(progress);
  return progress;
}

/** True if today's session is already done. */
export async function isSessionCompleteToday(): Promise<boolean> {
  const progress = await getProgress();
  return progress.lastSessionDate === getTodayString();
}

// ===== Backup / restore =====

/** The full progress blob as JSON, for backing up or moving devices. */
export function exportProgress(): string {
  return JSON.stringify(read(), null, 2);
}

/** Restores from an exported blob. Throws if the JSON is not valid progress. */
export function importProgress(json: string): UserProgress {
  const parsed = JSON.parse(json) as Partial<UserProgress>;
  if (typeof parsed.dayIndex !== 'number' || typeof parsed.records !== 'object') {
    throw new Error('That does not look like a progress backup.');
  }
  const progress: UserProgress = {
    ...DEFAULT_PROGRESS,
    ...parsed,
    records: (parsed.records ?? {}) as Record<string, VerbRecord>,
  };
  write(progress);
  cache = progress;
  return progress;
}

/** Wipes all progress and starts the course over. */
export function resetProgress(): void {
  cache = { ...DEFAULT_PROGRESS, records: {} };
  write(cache);
}
