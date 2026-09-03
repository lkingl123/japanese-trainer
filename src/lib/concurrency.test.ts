import { describe, it, expect, beforeEach, vi } from 'vitest';
import { advanceProgress, buildDailySession, isCourseComplete } from './session';
import { getWeekVerbs, getTotalWeeks } from '@/data/verbs/dictionary';
import { UserProgress } from './types';

const KEY = 'verb-trainer-progress';

/** A separate module instance, standing in for a second tab's own cache. */
async function newTab() {
  vi.resetModules();
  return import('./storage');
}

function stored() {
  return JSON.parse(localStorage.getItem(KEY)!);
}

function iso(daysFromToday: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

beforeEach(() => {
  localStorage.clear();
});

describe('two tabs open at once', () => {
  it('does not let a stale tab erase a finished session', async () => {
    // The bug: every write pushed the whole cached blob, so a tab holding an
    // old snapshot rewound the day counter and dropped the other tab's records.
    const tabA = await newTab();
    await tabA.getProgress();

    const tabB = await newTab();
    const progressB = await tabB.getProgress();
    tabB.recordAnswer('v-demasu', true, 0);
    await tabB.completeSession(advanceProgress(progressB));

    // Tab A now writes, still holding its snapshot from before B ran.
    tabA.recordAnswer('v-aimasu', true, 0);

    const after = stored();
    expect(after.dayIndex).toBe(2);
    expect(after.currentStreak).toBe(1);
    expect(Object.keys(after.records).sort()).toEqual(['v-aimasu', 'v-demasu']);
  });

  it('counts answers from both tabs', async () => {
    const tabA = await newTab();
    await tabA.getProgress();
    const tabB = await newTab();
    await tabB.getProgress();

    tabA.recordAnswer('v-aimasu', true, 0);
    tabB.recordAnswer('v-aimasu', true, 0);

    expect(stored().records['v-aimasu'].correctCount).toBe(2);
  });

  it('lets only one tab complete the day', async () => {
    const tabA = await newTab();
    const progressA = await tabA.getProgress();
    const tabB = await newTab();
    const progressB = await tabB.getProgress();

    await tabA.completeSession(advanceProgress(progressA));
    await tabB.completeSession(advanceProgress(progressB));

    expect(stored().dayIndex).toBe(2);
    expect(stored().currentStreak).toBe(1);
  });
});

describe('crossing midnight mid-session', () => {
  it('stamps the day the session was built for', async () => {
    // Starting at 23:59 and finishing at 00:01 must not consume the new day —
    // that would cost the user a verb they were never taught.
    const storage = await newTab();
    const progress = await storage.getProgress();

    const startedOn = iso(-1);
    await storage.completeSession(advanceProgress(progress), startedOn);

    expect(stored().lastSessionDate).toBe(startedOn);
    // Today is still available, so the new day's verb is not lost.
    expect(await storage.isSessionCompleteToday()).toBe(false);
  });

  it('uses today when no session date is given', async () => {
    const storage = await newTab();
    const progress = await storage.getProgress();
    await storage.completeSession(advanceProgress(progress));

    expect(stored().lastSessionDate).toBe(iso(0));
    expect(await storage.isSessionCompleteToday()).toBe(true);
  });
});

describe('answers before progress is loaded', () => {
  it('still records them', async () => {
    // recordAnswer used to no-op when the cache was empty, discarding the
    // answer with no error at all.
    const storage = await newTab();
    storage.recordAnswer('v-aimasu', true, 0);

    expect(stored().records['v-aimasu'].correctCount).toBe(1);
  });
});

describe('the final week keeps getting reviewed', () => {
  it('appears in the rotation once the course is finished', async () => {
    const lastWeek = getTotalWeeks() - 1;
    const finalVerbs = getWeekVerbs(lastWeek).map((v) => v.id);

    let progress: UserProgress = {
      dayIndex: 200,
      dayOfWeek: getWeekVerbs(lastWeek).length + 1,
      weekIndex: lastWeek,
      rotationIndex: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: '',
      lastSessionDate: null,
      records: {},
    };
    expect(isCourseComplete(progress)).toBe(true);

    // Every week, the final one included, should surface as a refresher.
    const refreshedWeeks = new Set<number>();
    for (let i = 0; i < getTotalWeeks() * 2; i++) {
      const past = buildDailySession(progress, '2026-09-03').questions.filter(
        (q) => q.source === 'past-week'
      );
      if (past.length > 0) {
        const isFinal = finalVerbs.includes(past[0].verb.id);
        refreshedWeeks.add(isFinal ? lastWeek : -1);
      }
      progress = { ...progress, ...advanceProgress(progress) };
    }

    expect(refreshedWeeks.has(lastWeek)).toBe(true);
  });

  it('excludes the current week while still learning', async () => {
    // Mid-course the current week is already drilled by the day's own
    // questions, so spending the refresher slot on it would waste it.
    const progress: UserProgress = {
      dayIndex: 20,
      dayOfWeek: 3,
      weekIndex: 2,
      rotationIndex: 5,
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: '',
      lastSessionDate: null,
      records: {},
    };
    const currentWeek = getWeekVerbs(2).map((v) => v.id);
    const past = buildDailySession(progress, '2026-09-03').questions.filter(
      (q) => q.source === 'past-week'
    );

    expect(past.length).toBeGreaterThan(0);
    expect(past.every((q) => !currentWeek.includes(q.verb.id))).toBe(true);
  });
});

describe('an out-of-range week in storage', () => {
  it('is repaired so every screen agrees', async () => {
    // Home reads progress directly while the session engine clamps; an
    // unbounded week made them disagree ("Week 100" against a real session).
    localStorage.setItem(KEY, JSON.stringify({ dayIndex: 5, weekIndex: 99, dayOfWeek: 1 }));
    const storage = await newTab();
    const progress = await storage.getProgress();

    expect(progress.weekIndex).toBe(getTotalWeeks() - 1);
    expect(getWeekVerbs(progress.weekIndex).length).toBeGreaterThan(0);
  });
});
