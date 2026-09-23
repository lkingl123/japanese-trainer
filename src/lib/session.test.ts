import { describe, it, expect } from 'vitest';
import { buildDailySession, advanceProgress, WEEK_LENGTH, MAX_QUESTIONS } from './session';
import { verbs, getWeekVerbs, getTotalWeeks } from '@/data/verbs/dictionary';
import { UserProgress, VerbRecord } from './types';

const DATE = '2026-09-03';

function makeProgress(over: Partial<UserProgress> = {}): UserProgress {
  return {
    dayIndex: 1,
    weekIndex: 0,
    dayOfWeek: 1,
    rotationIndex: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: '',
    lastSessionDate: null,
    records: {},
    knownVerbIds: [],
    ...over,
  };
}

/** Simulates finishing a session, the way the app does after a quiz. */
function nextDay(progress: UserProgress): UserProgress {
  return { ...progress, ...advanceProgress(progress) };
}

describe('day 1', () => {
  const session = buildDailySession(makeProgress(), DATE);

  it('teaches the first verb of the course', () => {
    expect(session.newVerb).toBe(verbs[0]);
    expect(session.dayOfWeek).toBe(1);
    expect(session.isWeekTest).toBe(false);
  });

  it('asks only about the new verb, since nothing has been learned yet', () => {
    expect(session.questions).toHaveLength(1);
    expect(session.questions[0].source).toBe('new');
    expect(session.questions[0].verb).toBe(verbs[0]);
  });
});

describe('a mid-week day', () => {
  // Day 3: two verbs already learned, one new one today.
  const session = buildDailySession(makeProgress({ dayIndex: 3, dayOfWeek: 3 }), DATE);

  it('teaches the day-3 verb', () => {
    expect(session.newVerb).toBe(verbs[2]);
    expect(session.dayOfWeek).toBe(3);
  });

  it('retests the earlier days of this week in both directions', () => {
    // This is the core of the method: what you learned is tested the next day.
    const thisWeek = session.questions.filter((q) => q.source === 'this-week');
    expect(thisWeek).toHaveLength(4); // 2 verbs x 2 directions
    expect(new Set(thisWeek.map((q) => q.verb.id))).toEqual(
      new Set([verbs[0].id, verbs[1].id])
    );
    expect(new Set(thisWeek.map((q) => q.direction))).toEqual(
      new Set(['en-to-jp', 'jp-to-en'])
    );
  });

  it('never shows a verb from later in the week', () => {
    const future = verbs.slice(3, WEEK_LENGTH).map((v) => v.id);
    expect(session.questions.some((q) => future.includes(q.verb.id))).toBe(false);
  });

  it('asks the new verb last, after it has been taught', () => {
    expect(session.questions.at(-1)?.source).toBe('new');
  });
});

describe('the day-7 week test', () => {
  const session = buildDailySession(makeProgress({ dayIndex: WEEK_LENGTH, dayOfWeek: WEEK_LENGTH + 1 }), DATE);

  it('teaches no new verb', () => {
    expect(session.isWeekTest).toBe(true);
    expect(session.newVerb).toBeNull();
  });

  it('tests every verb of the week, within the cap', () => {
    const test = session.questions.filter((q) => q.source === 'week-test');
    expect(test).toHaveLength(MAX_QUESTIONS);
    expect(new Set(test.map((q) => q.verb.id))).toEqual(
      new Set(getWeekVerbs(0).map((v) => v.id))
    );
  });
});

describe('past-week refreshers', () => {
  it('adds no refresher during the very first week', () => {
    const session = buildDailySession(makeProgress({ dayIndex: 3, dayOfWeek: 3 }), DATE);
    expect(session.questions.some((q) => q.source === 'past-week')).toBe(false);
  });

  it('fills the leftover slots with past verbs', () => {
    // Day 3 of week 4: 2 this-week verbs + the new one, so 7 slots are left.
    const session = buildDailySession(
      makeProgress({ dayIndex: 24, dayOfWeek: 3, weekIndex: 3 }),
      DATE
    );
    const past = session.questions.filter((q) => q.source === 'past-week');
    expect(past).toHaveLength(MAX_QUESTIONS - 3);
    expect(new Set(past.map((q) => q.verb.id)).size).toBe(past.length);
    const earlier = [0, 1, 2].flatMap((w) => getWeekVerbs(w).map((v) => v.id));
    expect(past.every((q) => earlier.includes(q.verb.id))).toBe(true);
  });

  it('draws from every past week, not just one', () => {
    const weeks = new Set<number>();
    for (let i = 0; i < 20; i++) {
      const session = buildDailySession(
        makeProgress({ dayIndex: 24, dayOfWeek: 1, weekIndex: 3 }),
        DATE
      );
      for (const q of session.questions.filter((x) => x.source === 'past-week')) {
        weeks.add(Math.floor(verbs.indexOf(q.verb) / WEEK_LENGTH));
      }
    }
    expect(weeks).toEqual(new Set([0, 1, 2]));
  });

  it('favours past verbs you keep getting wrong', () => {
    // Weeks 0-2 are past (21 verbs), 7 slots on day 3 of week 4. A verb you
    // have never missed turns up about a third of the time; a dud far more.
    const dud = verbs[4].id;
    const fine = verbs[5].id;
    const record = (verbId: string, over: Partial<VerbRecord>): VerbRecord => ({
      verbId,
      learnedOn: DATE,
      weekIndex: 0,
      correctCount: 0,
      incorrectCount: 0,
      streak: 0,
      lastTested: null,
      ...over,
    });
    const progress = makeProgress({
      dayIndex: 24,
      dayOfWeek: 3,
      weekIndex: 3,
      records: {
        [dud]: record(dud, { incorrectCount: 3, streak: 0 }),
        [fine]: record(fine, { correctCount: 5, streak: 5 }),
      },
    });

    let dudHits = 0;
    let fineHits = 0;
    for (let i = 0; i < 300; i++) {
      const ids = buildDailySession(progress, DATE).questions.map((q) => q.verb.id);
      if (ids.includes(dud)) dudHits++;
      if (ids.includes(fine)) fineHits++;
    }
    expect(dudHits).toBeGreaterThan(270);
    expect(fineHits).toBeLessThan(150);
  });

  it('never draws a refresher from the week being learned now', () => {
    for (let i = 0; i < 12; i++) {
      const session = buildDailySession(
        makeProgress({ dayIndex: 15, dayOfWeek: 1, weekIndex: 2 }),
        DATE
      );
      const currentWeek = getWeekVerbs(2).map((v) => v.id);
      const past = session.questions.filter((q) => q.source === 'past-week');
      expect(past.every((q) => !currentWeek.includes(q.verb.id))).toBe(true);
    }
  });
});

describe('question construction', () => {
  const session = buildDailySession(makeProgress({ dayIndex: 3, dayOfWeek: 3 }), DATE);

  it('offers four options, including the right one, with no repeats', () => {
    for (const q of session.questions) {
      expect(q.options).toHaveLength(4);
      expect(q.options).toContain(q.correctAnswer);
      expect(new Set(q.options).size).toBe(4);
    }
  });

  it('asks for the -masu form when prompting with English', () => {
    for (const q of session.questions.filter((x) => x.direction === 'en-to-jp')) {
      expect(q.correctAnswer).toBe(q.verb.masu);
      // Every distractor must also be a verb, or the answer is guessable.
      expect(q.options.every((o) => o.endsWith('masu'))).toBe(true);
    }
  });

  it('asks for the meaning when prompting with the verb', () => {
    for (const q of session.questions.filter((x) => x.direction === 'jp-to-en')) {
      expect(q.correctAnswer).toBe(q.verb.english);
      expect(q.options.every((o) => !o.endsWith('masu'))).toBe(true);
    }
  });

  it('never lists the prompted verb as its own distractor', () => {
    for (const q of session.questions) {
      const wrong = q.options.filter((o) => o !== q.correctAnswer);
      const other = q.direction === 'en-to-jp' ? q.verb.english : q.verb.masu;
      expect(wrong).not.toContain(other);
    }
  });
});

describe('advanceProgress', () => {
  it('moves to the next day without changing week mid-week', () => {
    expect(advanceProgress(makeProgress({ dayIndex: 3, dayOfWeek: 3 }))).toMatchObject({
      dayIndex: 4,
      weekIndex: 0,
    });
  });

  it('advances the week only after the test day', () => {
    expect(advanceProgress(makeProgress({ dayIndex: WEEK_LENGTH, dayOfWeek: WEEK_LENGTH + 1 }))).toMatchObject({
      dayIndex: WEEK_LENGTH + 1,
      weekIndex: 1,
    });
  });

  it('advances the rotation every day so refreshers keep moving', () => {
    expect(advanceProgress(makeProgress({ rotationIndex: 5 })).rotationIndex).toBe(6);
  });

  it('stops advancing the week at the end of the dictionary', () => {
    const last = getTotalWeeks() - 1;
    const next = advanceProgress(
      makeProgress({ dayIndex: WEEK_LENGTH, dayOfWeek: WEEK_LENGTH + 1, weekIndex: last })
    );
    expect(next.weekIndex).toBe(last);
  });
});

describe('walking the course day by day', () => {
  it('teaches every verb exactly once, in order', () => {
    let progress = makeProgress();
    const taught: string[] = [];

    // Enough days to cover the whole dictionary plus its week-test days.
    for (let i = 0; i < verbs.length + getTotalWeeks() + 5; i++) {
      const session = buildDailySession(progress, DATE);
      if (session.newVerb) taught.push(session.newVerb.id);
      progress = nextDay(progress);
    }

    const uniqueInOrder = taught.filter((id, i) => taught.indexOf(id) === i);
    expect(uniqueInOrder).toEqual(verbs.map((v) => v.id));
  });

  it('keeps every session small enough to actually do', () => {
    let progress = makeProgress();
    let longest = 0;

    for (let i = 0; i < verbs.length + getTotalWeeks() + 5; i++) {
      longest = Math.max(longest, buildDailySession(progress, DATE).questions.length);
      progress = nextDay(progress);
    }

    // Hard cap, however far into the course.
    expect(longest).toBeLessThanOrEqual(MAX_QUESTIONS);
  });

  it('never builds a session with no questions', () => {
    let progress = makeProgress();
    for (let i = 0; i < verbs.length + getTotalWeeks() + 5; i++) {
      expect(buildDailySession(progress, DATE).questions.length).toBeGreaterThan(0);
      progress = nextDay(progress);
    }
  });
});
