'use client';

import { UserProgress } from './types';

/**
 * Cloud sync for progress, so the course can be picked up on any device —
 * a different browser, a phone, another country.
 *
 * The design is offline-first on purpose. localStorage stays the source of
 * truth for a running session and the cloud is a mirror: every read falls back
 * to the local copy, and every write is fire-and-forget. A flight with no wifi,
 * a hotel captive portal, or a Supabase outage must never block a session or
 * lose an answer — the sync catches up on the next successful call.
 *
 * Storage is one row holding the whole progress blob. Progress is small, always
 * read and written as a unit, and only ever has one writer, so splitting it
 * into per-verb rows would buy nothing and cost a schema.
 */

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Which row to use. Single-user app, so this is a constant rather than a
 * login — see docs/sync.md for what that does and does not protect.
 */
export const PROFILE_ID = 'king';

const TABLE = 'progress';
const TIMEOUT_MS = 8000;

/** True when both env vars are present, so callers can skip the network. */
export function isSyncConfigured(): boolean {
  return Boolean(URL && KEY);
}

function headers(): Record<string, string> {
  return {
    apikey: KEY as string,
    Authorization: `Bearer ${KEY}`,
    'Content-Type': 'application/json',
  };
}

/** A fetch that gives up rather than hanging a session on a dead network. */
async function withTimeout(input: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * The saved progress from the cloud, or null if there is none, sync is not
 * configured, or the network failed. Null always means "carry on with the
 * local copy" — never "start over".
 */
export async function fetchRemoteProgress(): Promise<UserProgress | null> {
  if (!isSyncConfigured()) return null;

  try {
    const res = await withTimeout(
      `${URL}/rest/v1/${TABLE}?id=eq.${PROFILE_ID}&select=data`,
      { headers: headers(), cache: 'no-store' }
    );
    if (!res.ok) return null;

    const rows = (await res.json()) as Array<{ data: unknown }>;
    const data = rows[0]?.data;
    if (!data || typeof data !== 'object') return null;

    return data as UserProgress;
  } catch {
    // Offline, timed out, or the table is missing. The local copy stands.
    return null;
  }
}

/**
 * Mirrors progress to the cloud. Never throws and never blocks: callers save
 * locally first and treat this as best-effort.
 *
 * Returns whether the write landed, which the settings screen reports so a
 * silent failure is visible when it matters.
 */
export async function pushRemoteProgress(progress: UserProgress): Promise<boolean> {
  if (!isSyncConfigured()) return false;

  try {
    const res = await withTimeout(`${URL}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: {
        ...headers(),
        // Upsert: one row per profile, replaced wholesale each save.
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify([
        { id: PROFILE_ID, data: progress, updated_at: new Date().toISOString() },
      ]),
    });
    return res.ok;
  } catch {
    return false;
  }
}
