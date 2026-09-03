// ===== Verb Types =====

/**
 * A single verb entry from the mnemonic dictionary.
 *
 * The mnemonic `code` is a two-letter abbreviation King already knows:
 * letter 1 = first letter of the Japanese verb (romaji, -masu form),
 * letter 2 = first letter of the English meaning. `connection` is the
 * one-line hook that ties the code to the meaning.
 *
 * `code` and `connection` are null for entries with no good hook yet —
 * per the method spec, a bad hook is worse than none.
 */
export interface Verb {
  id: string;
  code: string | null;
  masu: string; // romaji, -masu form (polite) — never dictionary/casual form
  japanese: string; // kana/kanji, used for TTS only
  english: string;
  connection: string | null;
}

/** Which way a verb is being tested. */
export type TestDirection =
  | 'en-to-jp' // shown the English meaning, recall the -masu form
  | 'jp-to-en'; // shown the -masu form, recall the English meaning

/** Where a question in today's session came from. */
export type QuestionSource =
  | 'new' // today's new verb, first exposure
  | 'this-week' // an earlier day of the current week
  | 'past-week' // the past week cycled back in rotation
  | 'week-test'; // day 7 — the full week reviewed together

export interface ReviewQuestion {
  verb: Verb;
  direction: TestDirection;
  source: QuestionSource;
  options: string[];
  correctAnswer: string;
}

// ===== Progress Types =====

/**
 * Per-verb memory record. `streak` is consecutive correct answers and drives
 * the dud flag; a verb missed after being learned is worth resurfacing sooner.
 */
export interface VerbRecord {
  verbId: string;
  learnedOn: string; // YYYY-MM-DD, the day it was the new verb
  weekIndex: number; // which week batch it belongs to (0-based)
  correctCount: number;
  incorrectCount: number;
  streak: number;
  lastTested: string | null; // YYYY-MM-DD
}

export interface UserProgress {
  /** Day number in the overall course; day 1 is the first session ever. */
  dayIndex: number;
  /** Which week batch is currently being learned (0-based). */
  weekIndex: number;
  /** Which past week gets cycled into review next (0-based, rotates). */
  rotationIndex: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  lastSessionDate: string | null; // last completed session
  records: Record<string, VerbRecord>; // verbId -> record
}

// ===== Session Types =====

export interface DailySession {
  date: string;
  dayIndex: number;
  dayOfWeek: number; // 1-7 within the current week batch
  isWeekTest: boolean; // day 7 — full-week review
  newVerb: Verb | null; // null on the week-test day
  questions: ReviewQuestion[];
}

export interface SessionResult {
  totalQuestions: number;
  correctAnswers: number;
  missed: Verb[];
  newVerb: Verb | null;
}
