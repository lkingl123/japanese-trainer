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
 *     this week, plus one past week cycled in by rotation.
 *   - Day 7: no new verb. The whole week is tested together, plus the rotated
 *     past week.
 *
 * Every verb is tested in both directions across a session where possible, and
 * the mnemonic is never shown as part of the prompt — it is revealed only after
 * an answer, as the reminder. The hook is scaffolding, not the answer.
 */

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
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

/**
 * Tests a set of verbs in both directions. Verbs the user has been getting
 * wrong lead the list so they are seen while attention is freshest.
 */
function buildQuestionsFor(
  list: Verb[],
  source: QuestionSource,
  progress: UserProgress,
  bothDirections: boolean
): ReviewQuestion[] {
  const ordered = [...list].sort((a, b) => {
    const ra = progress.records[a.id];
    const rb = progress.records[b.id];
    return (ra?.streak ?? 0) - (rb?.streak ?? 0);
  });

  const questions: ReviewQuestion[] = [];
  for (const verb of ordered) {
    questions.push(buildQuestion(verb, 'en-to-jp', source));
    if (bothDirections) {
      questions.push(buildQuestion(verb, 'jp-to-en', source));
    }
  }
  return questions;
}

/**
 * Which past week to cycle in today. Weeks rotate so every previously learned
 * verb resurfaces on a predictable cadence no matter how large the dictionary
 * grows — the session length stays bounded.
 *
 * Returns null while still in week 1, when there is no past week yet.
 */
function getRotatedWeek(progress: UserProgress): number | null {
  if (progress.weekIndex === 0) return null;
  return progress.rotationIndex % progress.weekIndex;
}

export function buildDailySession(progress: UserProgress, date: string): DailySession {
  const { weekIndex } = progress;
  const weekVerbs = getWeekVerbs(weekIndex);

  // Day within the current week batch.
  //
  // A week is WEEK_LENGTH + 1 sessions long: one per verb, then a test day that
  // teaches nothing. Deriving this from the global dayIndex would drift by a
  // day per week and eventually skip verbs, so it is tracked on its own.
  const dayOfWeek = progress.dayOfWeek;

  // The test day is the one after the last verb of the week has been taught.
  // A short final week tests as soon as its verbs run out.
  const isWeekTest = dayOfWeek > weekVerbs.length;

  const questions: ReviewQuestion[] = [];

  // The new verb for today — index within the week is dayOfWeek - 1.
  const newVerb = isWeekTest ? null : weekVerbs[dayOfWeek - 1] ?? null;

  if (isWeekTest) {
    // Day 7: the full week reviewed together, both directions.
    questions.push(...buildQuestionsFor(weekVerbs, 'week-test', progress, true));
  } else {
    // Earlier days of this week get retested — this is the "next day it tests
    // your memory" part. Both directions, since the set is small.
    const earlier = weekVerbs.slice(0, dayOfWeek - 1);
    questions.push(...buildQuestionsFor(earlier, 'this-week', progress, true));

    // Today's new verb is tested once at the end, after being taught.
    if (newVerb) {
      questions.push(buildQuestion(newVerb, 'en-to-jp', 'new'));
    }
  }

  // One past week cycled back in — single direction to keep the session short.
  const rotated = getRotatedWeek(progress);
  if (rotated !== null) {
    const pastVerbs = getWeekVerbs(rotated);
    questions.push(...buildQuestionsFor(pastVerbs, 'past-week', progress, false));
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
  // The week ends after its test day, which is the session following the last
  // verb of that week.
  const finishedWeek = progress.dayOfWeek > getWeekVerbs(progress.weekIndex).length;
  const lastWeek = getTotalWeeks() - 1;

  return {
    dayIndex: progress.dayIndex + 1,
    dayOfWeek: finishedWeek ? 1 : progress.dayOfWeek + 1,
    weekIndex: finishedWeek
      ? Math.min(progress.weekIndex + 1, lastWeek)
      : progress.weekIndex,
    rotationIndex: progress.rotationIndex + 1,
  };
}

/** True once every verb in the dictionary has been learned. */
export function isCourseComplete(progress: UserProgress): boolean {
  return progress.dayIndex > verbs.length + getTotalWeeks();
}

export { WEEK_LENGTH };
