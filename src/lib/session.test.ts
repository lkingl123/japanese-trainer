import { describe, it, expect } from 'vitest';
import { buildDailySession, advanceProgress, WEEK_LENGTH } from './session';
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
    ...over,
  };
}

function makeRecord(verbId: string, over: Partial<VerbRecord> = {}): VerbRecord {
  return {
    verbId,
    learnedOn: DATE,
    weekIndex: 0,
    correctCount: 0,
    incorrectCount: 0,
    streak: 0,
    lastTested: null,
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

  it('tests the whole week in both directions', () => {
    const test = session.questions.filter((q) => q.source === 'week-test');
    expect(test).toHaveLength(WEEK_LENGTH * 2);
    expect(new Set(test.map((q) => q.verb.id))).toEqual(
      new Set(getWeekVerbs(0).map((v) => v.id))
    );
  });
});

describe('past-week rotation', () => {
  it('adds no refresher during the very first week', () => {
    const session = buildDailySession(makeProgress({ dayIndex: 3, dayOfWeek: 3 }), DATE);
    expect(session.questions.some((q) => q.source === 'past-week')).toBe(false);
  });

  it('cycles one past week back in, single direction to stay short', () => {
    const session = buildDailySession(
      makeProgress({ dayIndex: WEEK_LENGTH + 2, dayOfWeek: 1, weekIndex: 1, rotationIndex: 0 }),
      DATE
    );
    const past = session.questions.filter((q) => q.source === 'past-week');
    expect(past).toHaveLength(WEEK_LENGTH);
    expect(new Set(past.map((q) => q.direction))).toEqual(new Set(['en-to-jp']));
    expect(new Set(past.map((q) => q.verb.id))).toEqual(
      new Set(getWeekVerbs(0).map((v) => v.id))
    );
  });

  it('rotates through every past week in turn', () => {
    // On week 3, the rotation should visit weeks 0, 1, 2, then wrap.
    const seen = [0, 1, 2, 3].map((rotationIndex) => {
      const session = buildDailySession(
        makeProgress({ dayIndex: 15, dayOfWeek: 1, weekIndex: 3, rotationIndex }),
        DATE
      );
      const past = session.questions.find((q) => q.source === 'past-week');
      return verbs.indexOf(past!.verb) >= 0
        ? Math.floor(verbs.indexOf(past!.verb) / WEEK_LENGTH)
        : -1;
    });
    expect(seen).toEqual([0, 1, 2, 0]);
  });

  it('never draws a refresher from the week being learned now', () => {
    for (let rotationIndex = 0; rotationIndex < 12; rotationIndex++) {
      const session = buildDailySession(
        makeProgress({ dayIndex: 15, dayOfWeek: 1, weekIndex: 2, rotationIndex }),
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

describe('shaky verbs come first', () => {
  it('puts a verb with a broken streak ahead of a solid one', () => {
    // Attention is freshest at the start, so the ones being missed lead.
    const progress = makeProgress({
      dayIndex: 3,
      dayOfWeek: 3,
      records: {
        [verbs[0].id]: makeRecord(verbs[0].id, { streak: 9 }),
        [verbs[1].id]: makeRecord(verbs[1].id, { streak: 0, incorrectCount: 4 }),
      },
    });
    const thisWeek = buildDailySession(progress, DATE).questions.filter(
      (q) => q.source === 'this-week'
    );
    expect(thisWeek[0].verb.id).toBe(verbs[1].id);
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

    // The point of rotating past weeks is that sessions stay bounded as the
    // dictionary grows. Worst case is the day-7 test plus a refresher.
    expect(longest).toBeLessThanOrEqual(WEEK_LENGTH * 3);
  });

  it('never builds a session with no questions', () => {
    let progress = makeProgress();
    for (let i = 0; i < verbs.length + getTotalWeeks() + 5; i++) {
      expect(buildDailySession(progress, DATE).questions.length).toBeGreaterThan(0);
      progress = nextDay(progress);
    }
  });
});
