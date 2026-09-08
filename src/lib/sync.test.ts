import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { UserProgress } from './types';

/**
 * Sync must never cost the learner a session. These tests cover the two ways
 * that could happen: a stale copy overwriting a fresher one, and a network
 * failure being treated as "no progress" rather than "use what we have".
 */

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

describe('fetchRemoteProgress', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'test-key');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('returns null when the network fails', async () => {
    // Offline on a plane. Null means "carry on with the local copy" — the
    // caller must never read this as "no progress, start over".
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    const { fetchRemoteProgress } = await import('./sync');
    await expect(fetchRemoteProgress()).resolves.toBeNull();
  });

  it('returns null when the row does not exist yet', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: async () => [] })
    );
    const { fetchRemoteProgress } = await import('./sync');
    await expect(fetchRemoteProgress()).resolves.toBeNull();
  });

  it('returns null on an error status rather than throwing', async () => {
    // A missing table gives 404. That must degrade to local-only, not crash
    // the app on startup.
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, status: 404, json: async () => ({}) })
    );
    const { fetchRemoteProgress } = await import('./sync');
    await expect(fetchRemoteProgress()).resolves.toBeNull();
  });

  it('returns the stored progress when the row is there', async () => {
    const stored = makeProgress({ dayIndex: 12 });
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: async () => [{ data: stored }] })
    );
    const { fetchRemoteProgress } = await import('./sync');
    await expect(fetchRemoteProgress()).resolves.toMatchObject({ dayIndex: 12 });
  });
});

describe('pushRemoteProgress', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'test-key');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('reports failure instead of throwing when offline', async () => {
    // mutate() calls this without awaiting; a rejection here would surface as
    // an unhandled rejection mid-session.
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    const { pushRemoteProgress } = await import('./sync');
    await expect(pushRemoteProgress(makeProgress())).resolves.toBe(false);
  });

  it('upserts a single row keyed by profile', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    const { pushRemoteProgress, PROFILE_ID } = await import('./sync');
    await expect(pushRemoteProgress(makeProgress({ dayIndex: 4 }))).resolves.toBe(true);

    const [, init] = fetchMock.mock.calls[0];
    expect(init.method).toBe('POST');
    // Upsert, or a second session would fail on the primary key.
    expect(init.headers.Prefer).toContain('merge-duplicates');

    const body = JSON.parse(init.body);
    expect(body[0].id).toBe(PROFILE_ID);
    expect(body[0].data.dayIndex).toBe(4);
  });
});

describe('when sync is not configured', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('skips the network entirely', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const { fetchRemoteProgress, pushRemoteProgress, isSyncConfigured } =
      await import('./sync');

    expect(isSyncConfigured()).toBe(false);
    await expect(fetchRemoteProgress()).resolves.toBeNull();
    await expect(pushRemoteProgress(makeProgress())).resolves.toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('the conflict rule', () => {
  it('keeps the copy that has done more sessions', async () => {
    const { furtherAlong } = await import('./storage');
    const behind = makeProgress({ dayIndex: 3 });
    const ahead = makeProgress({ dayIndex: 9 });

    // Whichever way round they arrive, the fresher one survives.
    expect(furtherAlong(behind, ahead)).toBe(ahead);
    expect(furtherAlong(ahead, behind)).toBe(ahead);
  });

  it('never lets a stale cloud copy roll the course backwards', async () => {
    // The failure that would actually hurt: study on the phone, open the PC
    // which last synced days ago, and lose the newer sessions.
    const { furtherAlong } = await import('./storage');
    const staleCloud = makeProgress({ dayIndex: 2, weekIndex: 0 });
    const freshLocal = makeProgress({ dayIndex: 20, weekIndex: 2 });

    expect(furtherAlong(freshLocal, staleCloud).dayIndex).toBe(20);
  });

  it('breaks a same-day tie on verbs known', async () => {
    const { furtherAlong } = await import('./storage');
    const idle = makeProgress({ dayIndex: 5 });
    const worked = makeProgress({
      dayIndex: 5,
      knownVerbIds: ['v-a', 'v-b'],
    });

    expect(furtherAlong(idle, worked)).toBe(worked);
  });

  it('counts learned verbs toward the tiebreak too', async () => {
    const { furtherAlong } = await import('./storage');
    const idle = makeProgress({ dayIndex: 5 });
    const worked = makeProgress({
      dayIndex: 5,
      records: {
        'v-a': {
          verbId: 'v-a',
          learnedOn: '2026-09-08',
          weekIndex: 0,
          correctCount: 1,
          incorrectCount: 0,
          streak: 1,
          lastTested: '2026-09-08',
        },
      },
    });

    expect(furtherAlong(idle, worked)).toBe(worked);
  });

  it('prefers the local copy when the two are equivalent', async () => {
    // Avoids a pointless write back to the cloud on every startup.
    const { furtherAlong } = await import('./storage');
    const local = makeProgress({ dayIndex: 5 });
    const remote = makeProgress({ dayIndex: 5 });

    expect(furtherAlong(local, remote)).toBe(local);
  });
});
