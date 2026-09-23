import {
  Verb,
  ReviewQuestion,
  TestDirection,
  QuestionSource,
  UserProgress,
  DailySession,
} from './types';
import { verbs, getWeekVerbs, getTotalWeeks, WEEK_LENGTH } from '@/data/verbs/dictionary';

/**
 * Builds the day's session.
 *
 * The shape of a day, per the method:
 *   - Days 1-6 of a week: learn ONE new verb, then test the earlier days of
 *     this week, topped up with random verbs from past weeks.
 *   - Day 7: no new verb. The whole week is tested together, topped up the
 *     same way.
 *
 * A session is hard-capped at MAX_QUESTIONS no matter where in the course you
 * are. The mnemonic is never shown as part of the prompt — it is revealed only
 * after an answer, as the reminder. The hook is scaffolding, not the answer.
 */

/** Hard ceiling on questions in one session, the new verb included. */
export const MAX_QUESTIONS = 10;

/** Keeps a stored counter inside a usable range. */
function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(Math.trunc(value), min), max);
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function randomDirection(): TestDirection {
  return Math.random() < 0.5 ? 'en-to-jp' : 'jp-to-en';
}

function otherDirection(direction: TestDirection): TestDirection {
  return direction === 'en-to-jp' ? 'jp-to-en' : 'en-to-jp';
}

/**
 * Builds one question. Distractors are drawn from the whole dictionary so the
 * options don't give away which week the answer came from.
 */
function buildQuestion(
  verb: Verb,
  direction: TestDirection,
  source: QuestionSource
): ReviewQuestion {
  const correctAnswer = direction === 'en-to-jp' ? verb.masu : verb.english;

  const distractors = shuffle(verbs.filter((v) => v.id !== verb.id))
    .slice(0, 3)
    .map((v) => (direction === 'en-to-jp' ? v.masu : v.english));

  return {
    verb,
    direction,
    source,
    options: shuffle([correctAnswer, ...distractors]),
    correctAnswer,
  };
}

/** Every verb taught in the weeks before `weekIndex`. */
function getPastVerbs(weekIndex: number, known: readonly string[]): Verb[] {
  const past: Verb[] = [];
  for (let w = 0; w < weekIndex; w++) past.push(...getWeekVerbs(w, known));
  return past;
}

export function buildDailySession(progress: UserProgress, date: string): DailySession {
  // Clamp the stored position before using it. A blob that has been hand-edited,
  // restored from an older version, or half-written can carry a week past the
  // end of the dictionary or a day of 0 — neither should produce a broken
  // session.
  const known = progress.knownVerbIds;
  const weekIndex = clamp(progress.weekIndex, 0, getTotalWeeks(known) - 1);
  const weekVerbs = getWeekVerbs(weekIndex, known);

  // Day within the current week batch.
  //
  // A week is one session per verb plus a test day that teaches nothing.
  // Deriving this from the global dayIndex would drift by a day per week and
  // eventually skip verbs, so it is tracked on its own.
  const dayOfWeek = clamp(progress.dayOfWeek, 1, weekVerbs.length + 1);

  // The test day is the one after the last verb of the week has been taught.
  // A short final week tests as soon as its verbs run out.
  const isWeekTest = dayOfWeek > weekVerbs.length;

  // The new verb for today — index within the week is dayOfWeek - 1.
  const newVerb = isWeekTest ? null : weekVerbs[dayOfWeek - 1] ?? null;

  const thisWeekSource: QuestionSource = isWeekTest ? 'week-test' : 'this-week';
  const thisWeek = isWeekTest ? weekVerbs : weekVerbs.slice(0, dayOfWeek - 1);
  const budget = MAX_QUESTIONS - (newVerb ? 1 : 0);
  const review: ReviewQuestion[] = [];

  // 1. Every verb from this week so far, once each in a random direction —
  //    this is the "next day it tests your memory" part of the method.
  const thisWeekFirst = shuffle(thisWeek)
    .slice(0, budget)
    .map((verb) => buildQuestion(verb, randomDirection(), thisWeekSource));
  review.push(...thisWeekFirst);

  // 2. Fill the remaining slots with random verbs from past weeks.
  const past = shuffle(getPastVerbs(weekIndex, known)).slice(0, budget - review.length);
  review.push(...past.map((verb) => buildQuestion(verb, randomDirection(), 'past-week')));

  // 3. Early on there may be no past weeks yet — use the leftover slots to ask
  //    this week's verbs the other way round.
  for (const q of thisWeekFirst) {
    if (review.length >= budget) break;
    review.push(buildQuestion(q.verb, otherDirection(q.direction), thisWeekSource));
  }

  const questions = shuffle(review);

  // Today's new verb is tested once at the end, after being taught.
  if (newVerb) {
    questions.push(buildQuestion(newVerb, 'en-to-jp', 'new'));
  }

  return {
    date,
    dayIndex: progress.dayIndex,
    dayOfWeek,
    isWeekTest,
    newVerb,
    questions,
  };
}

/**
 * Advances the course after a completed session: day counter forward, the
 * rotation pointer forward, and the week batch forward once day 7 is done.
 */
export function advanceProgress(progress: UserProgress): {
  dayIndex: number;
  dayOfWeek: number;
  weekIndex: number;
  rotationIndex: number;
} {
  const known = progress.knownVerbIds;
  const lastWeek = getTotalWeeks(known) - 1;
  const weekIndex = clamp(progress.weekIndex, 0, lastWeek);
  const weekLength = getWeekVerbs(weekIndex, known).length;
  const dayOfWeek = clamp(progress.dayOfWeek, 1, weekLength + 1);

  // The week ends after its test day, which is the session following the last
  // verb of that week.
  const finishedWeek = dayOfWeek > weekLength;

  // Past the final week's test day there is nothing left to teach. Parking on
  // the test day keeps every learned verb in review instead of wrapping back
  // and re-teaching the last few verbs forever.
  if (finishedWeek && weekIndex === lastWeek) {
    return {
      dayIndex: progress.dayIndex + 1,
      dayOfWeek,
      weekIndex,
      rotationIndex: progress.rotationIndex + 1,
    };
  }

  return {
    dayIndex: progress.dayIndex + 1,
    dayOfWeek: finishedWeek ? 1 : dayOfWeek + 1,
    weekIndex: finishedWeek ? weekIndex + 1 : weekIndex,
    rotationIndex: progress.rotationIndex + 1,
  };
}

/**
 * True once the final week's test day has been reached — every verb has been
 * taught, and the course is now in permanent review.
 */
export function isCourseComplete(progress: UserProgress): boolean {
  const known = progress.knownVerbIds;
  const lastWeek = getTotalWeeks(known) - 1;
  if (progress.weekIndex < lastWeek) return false;
  return progress.dayOfWeek > getWeekVerbs(lastWeek, known).length;
}

export { WEEK_LENGTH };
