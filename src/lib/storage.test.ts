import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

const KEY = 'verb-trainer-progress';

/**
 * storage.ts caches the progress in a module-level variable, so every test
 * re-imports it fresh to get a clean cache alongside a clean localStorage.
 */
async function freshStorage() {
  vi.resetModules();
  return import('./storage');
}

function iso(daysFromToday: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const TODAY = iso(0);
const YESTERDAY = iso(-1);

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('first run', () => {
  it('starts at week 1 day 1 with nothing learned', async () => {
    const { getProgress } = await freshStorage();
    const p = await getProgress();
    expect(p).toMatchObject({
      dayIndex: 1,
      dayOfWeek: 1,
      weekIndex: 0,
      currentStreak: 0,
      records: {},
    });
  });
});

describe('recording answers', () => {
  it('creates a record on the first answer', async () => {
    const { getProgress, recordAnswer } = await freshStorage();
    await getProgress();
    recordAnswer('v-test', true, 0);

    const stored = JSON.parse(localStorage.getItem(KEY)!);
    expect(stored.records['v-test']).toMatchObject({
      verbId: 'v-test',
      correctCount: 1,
      incorrectCount: 0,
      streak: 1,
      lastTested: TODAY,
    });
  });

  it('builds a streak on repeated correct answers', async () => {
    const { getProgress, recordAnswer } = await freshStorage();
    await getProgress();
    recordAnswer('v-test', true, 0);
    recordAnswer('v-test', true, 0);

    expect((await getProgress()).records['v-test']).toMatchObject({
      correctCount: 2,
      streak: 2,
    });
  });

  it('resets the streak on a miss but keeps the history', async () => {
    const { getProgress, recordAnswer } = await freshStorage();
    await getProgress();
    recordAnswer('v-test', true, 0);
    recordAnswer('v-test', true, 0);
    recordAnswer('v-test', false, 0);

    expect((await getProgress()).records['v-test']).toMatchObject({
      correctCount: 2,
      incorrectCount: 1,
      streak: 0,
    });
  });

  it('persists across a reload', async () => {
    const first = await freshStorage();
    await first.getProgress();
    first.recordAnswer('v-test', true, 0);

    // A new module instance is a fresh cache — same as reopening the app.
    const second = await freshStorage();
    expect((await second.getProgress()).records['v-test'].correctCount).toBe(1);
  });
});

describe('daily streak', () => {
  it('starts at 1 on the first completed session', async () => {
    const { getProgress, completeSession } = await freshStorage();
    await getProgress();
    const p = await completeSession({ dayIndex: 2, dayOfWeek: 2, weekIndex: 0, rotationIndex: 1 });
    expect(p.currentStreak).toBe(1);
    expect(p.lastSessionDate).toBe(TODAY);
  });

  it('increments when the previous session was yesterday', async () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        dayIndex: 5, dayOfWeek: 5, weekIndex: 0, rotationIndex: 4,
        currentStreak: 4, longestStreak: 4,
        lastActiveDate: YESTERDAY, lastSessionDate: YESTERDAY, records: {},
      })
    );
    const { getProgress, completeSession } = await freshStorage();
    await getProgress();
    const p = await completeSession({ dayIndex: 6, dayOfWeek: 6, weekIndex: 0, rotationIndex: 5 });
    expect(p.currentStreak).toBe(5);
    expect(p.longestStreak).toBe(5);
  });

  it('does not double-count a second session on the same day', async () => {
    const { getProgress, completeSession } = await freshStorage();
    await getProgress();
    await completeSession({ dayIndex: 2, dayOfWeek: 2, weekIndex: 0, rotationIndex: 1 });
    const p = await completeSession({ dayIndex: 3, dayOfWeek: 3, weekIndex: 0, rotationIndex: 2 });
    expect(p.currentStreak).toBe(1);
  });

  it('expires a streak after a missed day', async () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        dayIndex: 9, dayOfWeek: 2, weekIndex: 1, rotationIndex: 8,
        currentStreak: 12, longestStreak: 12,
        lastActiveDate: iso(-3), lastSessionDate: iso(-3), records: {},
      })
    );
    const { getProgress } = await freshStorage();
    const p = await getProgress();
    expect(p.currentStreak).toBe(0);
    // The personal best survives — only the current run is broken.
    expect(p.longestStreak).toBe(12);
  });

  it('keeps a streak that is merely one day old', async () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        dayIndex: 9, dayOfWeek: 2, weekIndex: 1, rotationIndex: 8,
        currentStreak: 12, longestStreak: 12,
        lastActiveDate: YESTERDAY, lastSessionDate: YESTERDAY, records: {},
      })
    );
    const { getProgress } = await freshStorage();
    expect((await getProgress()).currentStreak).toBe(12);
  });

  it('records a new personal best', async () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        dayIndex: 9, dayOfWeek: 2, weekIndex: 1, rotationIndex: 8,
        currentStreak: 7, longestStreak: 7,
        lastActiveDate: YESTERDAY, lastSessionDate: YESTERDAY, records: {},
      })
    );
    const { getProgress, completeSession } = await freshStorage();
    await getProgress();
    const p = await completeSession({ dayIndex: 10, dayOfWeek: 3, weekIndex: 1, rotationIndex: 9 });
    expect(p.longestStreak).toBe(8);
  });
});

describe('isSessionCompleteToday', () => {
  it('is false before today’s session', async () => {
    const { isSessionCompleteToday } = await freshStorage();
    expect(await isSessionCompleteToday()).toBe(false);
  });

  it('is true once it is done', async () => {
    const { getProgress, completeSession, isSessionCompleteToday } = await freshStorage();
    await getProgress();
    await completeSession({ dayIndex: 2, dayOfWeek: 2, weekIndex: 0, rotationIndex: 1 });
    expect(await isSessionCompleteToday()).toBe(true);
  });
});

describe('corrupt or partial saved data', () => {
  it('starts fresh rather than throwing on unparseable JSON', async () => {
    localStorage.setItem(KEY, '{ not json');
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const { getProgress } = await freshStorage();
    expect((await getProgress()).dayIndex).toBe(1);
  });

  it('fills in fields missing from an older save', async () => {
    // A blob written before dayOfWeek existed must still load.
    localStorage.setItem(KEY, JSON.stringify({ dayIndex: 4, weekIndex: 0 }));
    const { getProgress } = await freshStorage();
    const p = await getProgress();
    expect(p.dayIndex).toBe(4);
    expect(p.dayOfWeek).toBe(1);
    expect(p.records).toEqual({});
  });

  it('keeps working when localStorage refuses to write', async () => {
    const { getProgress, recordAnswer } = await freshStorage();
    await getProgress();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });

    // Private browsing or a full quota: the session should carry on in memory.
    expect(() => recordAnswer('v-test', true, 0)).not.toThrow();
    expect((await getProgress()).records['v-test'].correctCount).toBe(1);
  });
});

describe('backup and restore', () => {
  it('round-trips progress through an export', async () => {
    const { getProgress, recordAnswer, exportProgress } = await freshStorage();
    await getProgress();
    recordAnswer('v-test', true, 0);

    const backup = exportProgress();
    localStorage.clear();

    const restored = await freshStorage();
    restored.importProgress(backup);
    expect((await restored.getProgress()).records['v-test'].correctCount).toBe(1);
  });

  it('rejects a file that is not a progress backup', async () => {
    const { importProgress } = await freshStorage();
    expect(() => importProgress('{"hello":"world"}')).toThrow(/does not look like/i);
  });

  it('rejects malformed JSON', async () => {
    const { importProgress } = await freshStorage();
    expect(() => importProgress('not json at all')).toThrow();
  });

  it('clears everything on reset', async () => {
    const { getProgress, recordAnswer, resetProgress } = await freshStorage();
    await getProgress();
    recordAnswer('v-test', true, 0);
    resetProgress();

    const p = await getProgress();
    expect(p.records).toEqual({});
    expect(p.dayIndex).toBe(1);
  });
});
