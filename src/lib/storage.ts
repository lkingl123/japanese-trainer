'use client';

import { UserProgress, VerbRecord } from './types';
import { getTotalWeeks } from '@/data/verbs/dictionary';

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

/** A finite, whole number at or above `min`, or the fallback. */
function counter(value: unknown, min: number, fallback: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback;
  return Math.max(min, Math.trunc(value));
}

/** A YYYY-MM-DD string, or the fallback. */
function dateField<T extends string | null>(value: unknown, fallback: T): string | T {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? value
    : fallback;
}

/**
 * Coerces whatever was in storage into a usable UserProgress.
 *
 * The blob is user-editable and may have been written by an older version, so
 * every field is checked rather than trusted — a single bad value should not
 * be able to produce a broken session.
 */
function sanitize(parsed: Partial<UserProgress>): UserProgress {
  const records: Record<string, VerbRecord> = {};
  const raw = parsed.records;

  if (raw && typeof raw === 'object') {
    for (const [id, value] of Object.entries(raw)) {
      if (!value || typeof value !== 'object') continue;
      const r = value as Partial<VerbRecord>;
      records[id] = {
        verbId: typeof r.verbId === 'string' ? r.verbId : id,
        learnedOn: dateField(r.learnedOn, getTodayString()),
        weekIndex: counter(r.weekIndex, 0, 0),
        correctCount: counter(r.correctCount, 0, 0),
        incorrectCount: counter(r.incorrectCount, 0, 0),
        streak: counter(r.streak, 0, 0),
        lastTested: dateField(r.lastTested, null),
      };
    }
  }

  const longestStreak = counter(parsed.longestStreak, 0, 0);
  const currentStreak = counter(parsed.currentStreak, 0, 0);

  return {
    dayIndex: counter(parsed.dayIndex, 1, 1),
    dayOfWeek: counter(parsed.dayOfWeek, 1, 1),
    // Bounded above as well: a week past the end of the dictionary would make
    // the home screen render an empty week while the session engine clamps to
    // a real one, so the two screens would disagree.
    weekIndex: Math.min(counter(parsed.weekIndex, 0, 0), getTotalWeeks() - 1),
    rotationIndex: counter(parsed.rotationIndex, 0, 0),
    currentStreak,
    // A best that is lower than the current run is not possible.
    longestStreak: Math.max(longestStreak, currentStreak),
    lastActiveDate: dateField(parsed.lastActiveDate, ''),
    lastSessionDate: dateField(parsed.lastSessionDate, null),
    records,
  };
}

function read(): UserProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    if (!parsed || typeof parsed !== 'object') return { ...DEFAULT_PROGRESS };
    return sanitize(parsed);
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

/**
 * Applies a change on top of whatever is currently in storage.
 *
 * Writing the cached blob wholesale would let a second tab — or a tab left
 * open from yesterday — clobber newer progress with its own stale snapshot.
 * Re-reading first means each write only moves the fields it owns, and the
 * refreshed result becomes the new cache.
 */
function mutate(apply: (current: UserProgress) => UserProgress): UserProgress {
  const merged = apply(read());
  cache = merged;
  write(merged);
  return merged;
}

/** Records one answer. Synchronous — the UI can advance immediately. */
export function recordAnswer(verbId: string, correct: boolean, weekIndex: number): void {
  const today = getTodayString();

  mutate((current) => {
    const existing = current.records[verbId];
    const updated: VerbRecord = existing
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

    return { ...current, records: { ...current.records, [verbId]: updated } };
  });
}

/** Marks today's session done: advances the course and extends the streak. */
export async function completeSession(
  next: {
    dayIndex: number;
    dayOfWeek: number;
    weekIndex: number;
    rotationIndex: number;
  },
  /**
   * The day the session was built for. A session started at 23:59 and finished
   * at 00:01 belongs to the day it started — stamping it with the new date
   * would consume that day without ever teaching its verb.
   */
  sessionDate?: string
): Promise<UserProgress> {
  const today = sessionDate ?? getTodayString();

  return mutate((current) => {
    // One session per day. Without this a double-fire — a double-tap on the
    // last answer, or a remount replaying the handler — advances the course
    // twice and silently skips a verb. Checking against storage also stops a
    // second tab from advancing a day this one already finished.
    if (current.lastSessionDate === today) return current;

    // Only extend the streak on the first session of a day.
    const currentStreak =
      current.lastActiveDate === today
        ? current.currentStreak
        : current.lastActiveDate === getYesterdayString()
          ? current.currentStreak + 1
          : 1;

    return {
      ...current,
      ...next,
      currentStreak,
      longestStreak: Math.max(current.longestStreak, currentStreak),
      lastActiveDate: today,
      lastSessionDate: today,
    };
  });
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
  const progress = sanitize(parsed);
  write(progress);
  cache = progress;
  return progress;
}

/** Wipes all progress and starts the course over. */
export function resetProgress(): void {
  cache = { ...DEFAULT_PROGRESS, records: {} };
  write(cache);
}
