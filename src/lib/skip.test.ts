import { describe, it, expect } from 'vitest';
import { UserProgress } from './types';
import { buildDailySession } from './session';
import { markVerbKnown, resetProgress, getCachedProgress } from './storage';
import { verbs, getWeekVerbs, getTotalWeeks, getSyllabus, WEEK_LENGTH } from '@/data/verbs/dictionary';

/**
 * "I already know this" removes a verb from the syllabus rather than marking
 * it learned. These tests pin the two properties that matter: the skipped verb
 * never comes back, and skipping costs the learner nothing.
 */

const DATE = '2026-09-07';

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

describe('skipping a known verb', () => {
  it('drops it from the syllabus', () => {
    const skipped = verbs[0].id;
    const syllabus = getSyllabus([skipped]);
    expect(syllabus.map((v) => v.id)).not.toContain(skipped);
    expect(syllabus).toHaveLength(verbs.length - 1);
  });

  it('pulls the next verb into the same day', () => {
    // The whole point of the button: skipping should reach a new word now,
    // not send the learner away until tomorrow.
    const before = buildDailySession(makeProgress(), DATE);
    const first = before.newVerb!;

    const after = buildDailySession(
      makeProgress({ knownVerbIds: [first.id] }),
      DATE
    );

    expect(after.newVerb).not.toBeNull();
    expect(after.newVerb!.id).not.toBe(first.id);
    // Same slot in the course — the day was not consumed.
    expect(after.dayOfWeek).toBe(before.dayOfWeek);
    expect(after.dayIndex).toBe(before.dayIndex);
  });

  it('never teaches or quizzes a skipped verb', () => {
    const skipped = verbs.slice(0, 3).map((v) => v.id);
    const session = buildDailySession(
      makeProgress({ knownVerbIds: skipped, dayOfWeek: 2 }),
      DATE
    );

    expect(skipped).not.toContain(session.newVerb?.id);
    for (const q of session.questions) {
      expect(skipped).not.toContain(q.verb.id);
    }
  });

  it('re-packs weeks so they stay full', () => {
    // Skipping should not leave short weeks full of holes — the verbs after
    // the skip shift up to fill it.
    const skipped = [verbs[0].id];
    expect(getWeekVerbs(0, skipped)).toHaveLength(WEEK_LENGTH);
    expect(getWeekVerbs(0, skipped)[0].id).toBe(verbs[1].id);
  });

  it('shrinks the course as verbs are skipped', () => {
    const many = verbs.slice(0, WEEK_LENGTH * 2).map((v) => v.id);
    expect(getTotalWeeks(many)).toBeLessThan(getTotalWeeks());
  });

  it('survives skipping every verb', () => {
    // Degenerate but reachable: the learner knows the whole dictionary. This
    // must not divide by zero, index off the end, or throw.
    const all = verbs.map((v) => v.id);
    expect(getSyllabus(all)).toHaveLength(0);
    expect(getTotalWeeks(all)).toBe(1);

    const session = buildDailySession(makeProgress({ knownVerbIds: all }), DATE);
    expect(session.newVerb).toBeNull();
    expect(session.questions).toEqual([]);
  });

  it('leaves the dictionary untouched when nothing is skipped', () => {
    expect(getSyllabus([])).toBe(verbs);
    expect(getSyllabus()).toBe(verbs);
  });
});

describe('screens agree with the session engine', () => {
  it('shows the same week the engine teaches', () => {
    // The home week list and the session must read the same syllabus. When the
    // list read the raw dictionary it showed a skipped verb as the day's
    // lesson while the session taught the next unskipped one.
    const skipped = [verbs[0].id];
    const progress = makeProgress({ knownVerbIds: skipped });

    const listWeek = getWeekVerbs(progress.weekIndex, progress.knownVerbIds);
    const session = buildDailySession(progress, DATE);

    expect(listWeek.map((v) => v.id)).not.toContain(skipped[0]);
    // Day 1 of the list is the verb today's session actually teaches.
    expect(listWeek[0].id).toBe(session.newVerb!.id);
  });
});

describe('resetting the course', () => {
  it('clears skipped verbs along with records', () => {
    // knownVerbIds is an array on DEFAULT_PROGRESS, so a shallow spread would
    // hand out the shared instance and skips would outlive a reset.
    markVerbKnown(verbs[0].id);
    expect(getCachedProgress()?.knownVerbIds).toContain(verbs[0].id);

    resetProgress();
    expect(getCachedProgress()?.knownVerbIds).toEqual([]);

    // The default must not have been mutated by the skip above.
    markVerbKnown(verbs[1].id);
    resetProgress();
    expect(getCachedProgress()?.knownVerbIds).toEqual([]);
  });
});
