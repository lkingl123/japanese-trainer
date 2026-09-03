import { describe, it, expect } from 'vitest';
import { getWeekVerbs } from '@/data/verbs/dictionary';

/**
 * The home screen's week list, extracted so its rules can be tested directly.
 *
 * The subtlety it exists for: `dayOfWeek` names the NEXT session to run, so the
 * moment today's session finishes it already points at tomorrow. Reading it as
 * "today" marks the next verb as learned before it has ever been shown.
 *
 * Records cannot answer the question either — a verb only gets one when it is
 * first *tested*, which for the newest verb is the following day.
 */
function weekListState(dayOfWeek: number, doneToday: boolean, weekIndex = 0) {
  const weekVerbs = getWeekVerbs(weekIndex);
  const isWeekTest = dayOfWeek > weekVerbs.length;
  const taughtCount = isWeekTest ? weekVerbs.length : dayOfWeek - 1;

  return weekVerbs.map((verb, i) => ({
    masu: verb.masu,
    seen: i < taughtCount,
    isToday: !doneToday && !isWeekTest && i === taughtCount,
  }));
}

const WEEK_LENGTH = getWeekVerbs(0).length;

describe('the week list on home', () => {
  it('marks nothing as learned before the first session', () => {
    const rows = weekListState(1, false);
    expect(rows.filter((r) => r.seen)).toHaveLength(0);
    expect(rows[0].isToday).toBe(true);
  });

  it('does not mark tomorrow’s verb as learned when today is done', () => {
    // The reported bug: finishing day 1 showed day 2's verb (AP awatemasu)
    // already completed, because dayOfWeek had advanced to 2 while doneToday
    // was still true.
    const rows = weekListState(2, true);

    expect(rows[0].seen).toBe(true);
    expect(rows[1].seen).toBe(false);
    expect(rows.filter((r) => r.seen)).toHaveLength(1);
  });

  it('shows no "today" marker once the session is finished', () => {
    expect(weekListState(2, true).some((r) => r.isToday)).toBe(false);
  });

  it('points at the right verb when a new day opens', () => {
    const rows = weekListState(2, false);
    expect(rows[0].seen).toBe(true);
    expect(rows[1].isToday).toBe(true);
    expect(rows[1].seen).toBe(false);
  });

  it('counts learned verbs correctly through the week', () => {
    for (let day = 1; day <= WEEK_LENGTH; day++) {
      const rows = weekListState(day, false);
      expect(rows.filter((r) => r.seen)).toHaveLength(day - 1);
      expect(rows[day - 1].isToday).toBe(true);
    }
  });

  it('never marks a verb as learned and current at the same time', () => {
    for (let day = 1; day <= WEEK_LENGTH + 1; day++) {
      for (const done of [true, false]) {
        for (const row of weekListState(day, done)) {
          expect(row.seen && row.isToday).toBe(false);
        }
      }
    }
  });

  it('marks the whole week learned on the test day', () => {
    const rows = weekListState(WEEK_LENGTH + 1, false);
    expect(rows.every((r) => r.seen)).toBe(true);
    expect(rows.some((r) => r.isToday)).toBe(false);
  });

  it('handles the short final week', () => {
    const lastWeek = 8;
    const finalLength = getWeekVerbs(lastWeek).length;
    const rows = weekListState(finalLength + 1, true, lastWeek);
    expect(rows).toHaveLength(finalLength);
    expect(rows.every((r) => r.seen)).toBe(true);
  });
});
