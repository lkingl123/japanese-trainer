# Cloud sync

Progress syncs through Supabase so the course can be picked up on any device —
another browser, a phone, another country.

## Setup

Run this once in the Supabase SQL editor
(<https://supabase.com/dashboard> → this project → SQL Editor):

```sql
create table if not exists progress (
  id         text primary key,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

alter table progress enable row level security;

-- Single-user app with a hardcoded profile id and no login, so the anon key is
-- the only credential. This policy is what makes that work; see the security
-- note below for exactly what it does and does not protect.
create policy "anon read/write progress"
  on progress for all
  using (true)
  with check (true);
```

The `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars are
already set on the Vercel project. Nothing else is needed.

## How it behaves

**Offline-first.** localStorage stays the source of truth for a running session
and the cloud is a mirror. Every cloud read falls back to the local copy and
every write is fire-and-forget, so a flight with no wifi, a hotel captive
portal, or a Supabase outage cannot block a session or lose an answer — the
sync catches up on the next successful call.

- **Startup** (`loadProgressWithSync`) reads both copies and keeps whichever is
  further along.
- **Every save** (`mutate`) writes locally, then mirrors to the cloud.
- **A reset** pushes too, or the next startup would pull the old progress back.

## Conflict rule

Two devices can both move on while offline. Without a per-answer log there is
no way to truly reconcile divergent histories, so the rule is simple and lossy
in one direction only: **keep whichever copy is further along, never let a
stale copy overwrite a fresher one.**

Ordering is by `dayIndex` (sessions actually completed), falling back to the
count of verbs known. `dayIndex` is used rather than a timestamp so a device
with a wrong clock cannot roll the course backwards.

The practical consequence: if you do a session on your phone and a different
one on your PC without syncing between, the shorter one is discarded rather
than merged. For one person studying once a day this effectively never
happens; it is a real limitation, not an oversight.

## Security note

There is no login. The profile id is the constant `king` in `src/lib/sync.ts`,
and the RLS policy above lets the anon key read and write that row.

The anon key ships in the client bundle — that is what it is for, and it is not
a secret. But combined with a permissive policy it means **anyone who has the
key can read or overwrite the progress row.** The key is visible to anyone who
opens the deployed site's JavaScript.

That is a deliberate trade for a single-user verb tracker whose contents are
verb counts and dates. It would not be acceptable for anything private. If this
app ever holds something worth protecting, the fix is real auth (Supabase
`auth.uid()`) and a policy scoped to the signed-in user, not a harder-to-guess
profile id.
