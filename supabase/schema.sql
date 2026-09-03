-- Verb trainer schema.
--
-- Single-user app: each table holds one user's data with no auth, matching the
-- existing deployment. jt_verb_progress is a single row; jt_verb_records has
-- one row per verb the user has been taught.

-- ===== Course progress (single row) =====
create table if not exists jt_verb_progress (
  id uuid primary key default gen_random_uuid(),
  day_index int not null default 1,
  week_index int not null default 0,
  rotation_index int not null default 0,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_active_date date,
  last_session_date date,
  updated_at timestamptz not null default now()
);

-- ===== Per-verb memory records =====
create table if not exists jt_verb_records (
  verb_id text primary key,
  learned_on date not null,
  week_index int not null default 0,
  correct_count int not null default 0,
  incorrect_count int not null default 0,
  streak int not null default 0,
  last_tested date,
  updated_at timestamptz not null default now()
);

-- Single-user app with no auth: the anon key is the only client, so RLS is
-- enabled with permissive policies rather than left off entirely.
alter table jt_verb_progress enable row level security;
alter table jt_verb_records enable row level security;

drop policy if exists "anon full access" on jt_verb_progress;
create policy "anon full access" on jt_verb_progress
  for all using (true) with check (true);

drop policy if exists "anon full access" on jt_verb_records;
create policy "anon full access" on jt_verb_records
  for all using (true) with check (true);

-- Carry over the streak from the previous vocab-based app so a long-running
-- streak is not lost in the rebuild. Safe to re-run: only seeds an empty table.
insert into jt_verb_progress (current_streak, longest_streak, last_active_date)
select
  coalesce(p.current_streak, 0),
  coalesce(p.longest_streak, 0),
  p.last_active_date
from jt_progress p
where not exists (select 1 from jt_verb_progress)
limit 1;

-- Fallback for a fresh install with no prior jt_progress table.
insert into jt_verb_progress default values
  on conflict do nothing;
