// ===== Verb Types =====

/**
 * Which memory system a verb's hook is built on. Dota is the default and
 * covers most of the dictionary; `general` is the honest fallback for verbs
 * where no hero, item, or piece of slang fits the sound *and* the meaning.
 * Forcing Dota onto those produced the weak hooks the old method suffered from.
 */
export type HookKind = 'dota' | 'general';

/**
 * JLPT level a verb belongs to. The course teaches in this order, so the level
 * is also the curriculum's sort key — N5 first, then N4, then N3.
 */
export type JlptLevel = 'N5' | 'N4' | 'N3';

/**
 * A single verb entry from the mnemonic dictionary.
 *
 * `sound` is the Japanese word chunked into readable syllables (the `-masu`
 * tail dropped, since it never varies). `hook` is the one-line image that
 * pulls those sounds back, and `hookKind` says which system it came from.
 *
 * `hook` and `hookKind` are null together for entries with no honest hook yet
 * — per the method spec, a bad hook is worse than none. `sound` is always
 * present, so even a hookless verb shows its syllable breakdown.
 */
export interface Verb {
  id: string;
  level: JlptLevel;
  sound: string; // syllable chunks, e.g. 'MA-MO-RI'
  masu: string; // romaji, -masu form (polite) — never dictionary/casual form
  japanese: string; // kana/kanji, used for TTS only
  english: string;
  hook: string | null;
  hookKind: HookKind | null;
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
  /**
   * Day within the current week batch, starting at 1. A week runs one verb per
   * day and then a test day, so this is tracked separately from dayIndex —
   * deriving it from the running day count drifts and skips verbs.
   */
  dayOfWeek: number;
  /** Which past week gets cycled into review next (0-based, rotates). */
  rotationIndex: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  lastSessionDate: string | null; // last completed session
  records: Record<string, VerbRecord>; // verbId -> record
  /**
   * Verbs the learner marked "I already know this". They are dropped from the
   * syllabus entirely — never taught, never quizzed, never counted as due.
   * Distinct from `records`, which tracks verbs actually being learned.
   */
  knownVerbIds: string[];
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
