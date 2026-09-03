import { describe, it, expect, beforeEach } from 'vitest';
import { buildDailySession, advanceProgress, isCourseComplete } from './session';
import { verbs, getWeekVerbs, getTotalWeeks } from '@/data/verbs/dictionary';
import { UserProgress } from './types';

/**
 * These cover the ways the app can be pushed off its happy path: running past
 * the end of the course, and loading a progress blob that has been edited,
 * truncated, or written by a different version.
 */

function makeProgress(over: Partial<UserProgress> = {}): UserProgress {
  return {
    dayIndex: 1,
    dayOfWeek: 1,
    weekIndex: 0,
    rotationIndex: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: '',
    lastSessionDate: null,
    records: {},
    ...over,
  };
}

const LAST_WEEK = getTotalWeeks() - 1;
const FINAL_WEEK_LENGTH = getWeekVerbs(LAST_WEEK).length;

describe('the end of the course', () => {
  /** The state after every verb has been taught and the last test day is up. */
  function atTheEnd(): UserProgress {
    return makeProgress({
      dayIndex: 200,
      weekIndex: LAST_WEEK,
      dayOfWeek: FINAL_WEEK_LENGTH + 1,
      rotationIndex: 200,
    });
  }

  it('knows the course is finished', () => {
    expect(isCourseComplete(atTheEnd())).toBe(true);
    expect(isCourseComplete(makeProgress())).toBe(false);
  });

  it('never re-teaches a verb once the course is done', () => {
    // The bug this guards: the week pointer used to wrap, so the final few
    // verbs were taught again every four days, forever.
    let progress = atTheEnd();
    for (let i = 0; i < 40; i++) {
      expect(buildDailySession(progress, '2026-09-03').newVerb).toBeNull();
      progress = { ...progress, ...advanceProgress(progress) };
    }
  });

  it('keeps giving the user something to review', () => {
    let progress = atTheEnd();
    for (let i = 0; i < 40; i++) {
      expect(buildDailySession(progress, '2026-09-03').questions.length).toBeGreaterThan(0);
      progress = { ...progress, ...advanceProgress(progress) };
    }
  });

  it('still rotates through past weeks after finishing', () => {
    // Review would be pointless if it showed the same week every day.
    const seen = new Set<string>();
    let progress = atTheEnd();
    for (let i = 0; i < 12; i++) {
      const past = buildDailySession(progress, '2026-09-03').questions.filter(
        (q) => q.source === 'past-week'
      );
      past.forEach((q) => seen.add(q.verb.id));
      progress = { ...progress, ...advanceProgress(progress) };
    }
    expect(seen.size).toBeGreaterThan(FINAL_WEEK_LENGTH);
  });

  it('teaches all 59 verbs on the way there, once each', () => {
    let progress = makeProgress();
    const taught: string[] = [];
    for (let i = 0; i < verbs.length + getTotalWeeks() + 30; i++) {
      const session = buildDailySession(progress, '2026-09-03');
      if (session.newVerb) taught.push(session.newVerb.id);
      progress = { ...progress, ...advanceProgress(progress) };
    }
    expect(taught).toEqual(verbs.map((v) => v.id));
  });
});

describe('a corrupted or hand-edited blob', () => {
  const broken: [string, Partial<UserProgress>][] = [
    ['a week past the end of the dictionary', { weekIndex: 99 }],
    ['a day past the end of the week', { dayOfWeek: 99 }],
    ['a day of zero', { dayOfWeek: 0 }],
    ['a negative day', { dayOfWeek: -5 }],
    ['a negative week', { weekIndex: -3 }],
    ['a negative rotation', { weekIndex: 2, rotationIndex: -7 }],
    ['a huge rotation', { weekIndex: 2, rotationIndex: 9_999_999 }],
    ['NaN counters', { weekIndex: NaN, dayOfWeek: NaN, rotationIndex: NaN }],
  ];

  for (const [name, over] of broken) {
    it(`survives ${name}`, () => {
      const session = buildDailySession(makeProgress(over), '2026-09-03');

      expect(session.questions.length).toBeGreaterThan(0);
      expect(session.dayOfWeek).toBeGreaterThanOrEqual(1);
      // Whatever it decides to do, it must be a real verb or nothing at all.
      if (session.newVerb) {
        expect(verbs).toContain(session.newVerb);
      }
      // And every question must reference a verb that actually exists.
      for (const q of session.questions) {
        expect(verbs).toContain(q.verb);
        expect(q.options).toContain(q.correctAnswer);
      }
    });

    it(`can advance from ${name}`, () => {
      const next = advanceProgress(makeProgress(over));
      expect(Number.isFinite(next.dayIndex)).toBe(true);
      expect(next.dayOfWeek).toBeGreaterThanOrEqual(1);
      expect(next.weekIndex).toBeGreaterThanOrEqual(0);
      expect(next.weekIndex).toBeLessThanOrEqual(LAST_WEEK);
    });
  }
});

describe('storage hardening', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  async function freshStorage() {
    const { resetModules } = await import('vitest').then((m) => ({ resetModules: m.vi.resetModules }));
    resetModules();
    return import('./storage');
  }

  it('completes a day only once', async () => {
    // A double-fire used to advance the course twice, skipping a verb outright.
    const { getProgress, completeSession } = await freshStorage();
    const progress = await getProgress();

    await completeSession(advanceProgress(progress));
    await completeSession(advanceProgress(progress));

    const stored = JSON.parse(localStorage.getItem('verb-trainer-progress')!);
    expect(stored.dayIndex).toBe(2);
    expect(stored.dayOfWeek).toBe(2);
    expect(stored.currentStreak).toBe(1);
  });

  it('repairs out-of-range counters on load', async () => {
    localStorage.setItem(
      'verb-trainer-progress',
      JSON.stringify({ dayIndex: -5, dayOfWeek: 0, weekIndex: -2, rotationIndex: 'nope' })
    );
    const { getProgress } = await freshStorage();
    const p = await getProgress();

    expect(p.dayIndex).toBe(1);
    expect(p.dayOfWeek).toBe(1);
    expect(p.weekIndex).toBe(0);
    expect(p.rotationIndex).toBe(0);
  });

  it('drops records that are not objects', async () => {
    localStorage.setItem(
      'verb-trainer-progress',
      JSON.stringify({ dayIndex: 3, records: { good: { correctCount: 2 }, bad: 'nope', worse: null } })
    );
    const { getProgress } = await freshStorage();
    const p = await getProgress();

    expect(Object.keys(p.records)).toEqual(['good']);
    expect(p.records.good.correctCount).toBe(2);
    expect(p.records.good.streak).toBe(0);
  });

  it('never reports a best streak below the current one', async () => {
    localStorage.setItem(
      'verb-trainer-progress',
      JSON.stringify({ dayIndex: 5, currentStreak: 9, longestStreak: 2, lastActiveDate: '' })
    );
    const { getProgress } = await freshStorage();
    expect((await getProgress()).longestStreak).toBe(9);
  });

  it('ignores a malformed date instead of trusting it', async () => {
    localStorage.setItem(
      'verb-trainer-progress',
      JSON.stringify({ dayIndex: 2, lastSessionDate: 'yesterday', lastActiveDate: '13/45/99' })
    );
    const { getProgress } = await freshStorage();
    const p = await getProgress();
    expect(p.lastSessionDate).toBeNull();
    expect(p.lastActiveDate).toBe('');
  });
});
