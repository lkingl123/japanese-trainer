# Verb Trainer

One Japanese verb a day, learned with a mnemonic hook and re-tested until it sticks.

Live at **<https://nihongo-trainer.vercel.app>**.

Built on the method in `docs/method.md`: every verb is chunked into syllables
(`sound`) and paired with a one-line image (`hook`) that reproduces those sounds
doing what the verb means. Dota 2 is the default flavour; where no hero or item
honestly fits, a general mnemonic is used instead of a forced one.

```
mamorimasu → protect
  MA-MO-RI — MArs MOves in, protects the team        [dota]

kotowarimasu → refuse
  KO-TO-WA-RI — KOat too WARm, you refuse to wear it [general]
```

## The daily cycle

| Day | What happens |
|-----|--------------|
| 1–6 | Learn **1 new verb**, then get re-tested on the earlier days of this week (both directions) |
| 7 | No new verb — the **whole week** is tested together, both directions |
| Every day | Plus **one past week** cycled back in on rotation |

A session is roughly 14 questions and stays that size no matter how large the
dictionary grows — past weeks rotate rather than all being tested every day.

## Rules baked into the app

- **-masu form only.** Every verb is polite form, never dictionary/casual. An
  import-time guard in `src/data/verbs/dictionary.ts` throws if an entry's romaji
  doesn't end in `masu` or its kana doesn't end in `ます`.
- **Curriculum order.** The dictionary is stored grouped N5 → N4 → N3, and week
  slicing is positional, so that ordering *is* the syllabus. A second guard
  throws if a verb is ever filed out of level order.
- **The mnemonic is never the prompt.** Hooks are shown when a verb is first
  taught and revealed *after* an answer as the reminder — never as part of the
  question. The hook is scaffolding.
- **Unique meanings.** No two verbs may share an English gloss, or a quiz
  question would have two correct answers. Near-synonyms get glosses that name
  the real distinction (`koemasu` "go beyond" vs `sugimasu` "exceed").

## Content

**442 verbs** — 106 N5, 139 N4, 197 N3. At one a day plus a weekly test that is
about **16 months** of sessions. Every verb has a hook: 276 Dota, 166 general.

Sourced from Nihongo Ichiban, JLPT Sensei and the Tanos/Waller lists, with every
`-masu` form machine-derived from the kana plus verb group rather than typed by
hand, and ru-ending verbs checked against Jisho for godan-vs-ichidan.

Add new entries to `src/data/verbs/dictionary.ts` in course order.

## Already knowing a verb

The dictionary spans N5 to N3, so it necessarily contains verbs you already have.
**"I already know this"** on the learn screen drops a verb from the syllabus and
counts it toward verbs known.

Skipping does not consume the day — weeks are cut from the filtered syllabus, so
the same day index lands on the next unknown verb and you reach something new in
the same sitting. Undo it from the dictionary with "teach it anyway".

## Storage

Progress lives in `localStorage` and is mirrored to Supabase, so the course can
be picked up on any device — another browser, a phone, another country.

**Offline-first**: localStorage is the source of truth for a running session and
the cloud is a mirror. Every read falls back to the local copy and every write is
fire-and-forget, so no network cannot block a session or lose an answer.

See `docs/sync.md` for setup, the conflict rule, and the security trade-off
(there is no login — the profile id is a constant).

Settings also has export/restore for a manual backup.

## Running it

```bash
npm install
vercel env pull .env.local   # Supabase URL + anon key, for sync
npm run dev                  # http://localhost:3000
npm run build
npm test                     # unit tests
npm run test:coverage
```

Without `.env.local` the app still runs — sync simply stays off and everything
is local, which is also what happens if Supabase is unreachable.

## Tests

`npm test` covers the places a bug would be silent:

- **`dictionary.test.ts`** — the method's rules as executable checks: -masu form,
  unique ids/verbs/meanings, sound chunks that are a real prefix of the romaji,
  every hook grounded in its own first chunk, and Dota staying the majority.
- **`session.test.ts`** — the scheduling. Walks the entire course day by day and
  asserts every verb is taught exactly once in order, sessions stay bounded, and
  the past-week rotation never repeats the week being learned.
- **`skip.test.ts`** — that a skipped verb leaves the lessons but still counts as
  vocabulary, that skipping costs no day, and that the home screen and the
  session engine read the same syllabus.
- **`sync.test.ts`** — that a network failure degrades to the local copy rather
  than looking like "no progress", and that a stale copy never overwrites a
  fresher one.
- **`storage.test.ts`** — streak arithmetic across day boundaries, and recovery
  from corrupt, partial, or unwritable localStorage.

## Layout

```
src/
  app/
    page.tsx          Home — today's card, streak, this week
    today/            The session: learn → quiz → result
    dictionary/       All verbs, searchable, with per-verb accuracy
    stats/            Streak, recall, and the dud list
    settings/         Export / restore / reset
  components/verbs/   VerbLearn, VerbQuiz, SessionResult, HookNote
  data/verbs/         The dictionary + the -masu and level-order guards
  lib/
    session.ts        Builds the day's session; the scheduling rules
    storage.ts        Progress, the local/cloud merge rule
    sync.ts           Supabase read/write; offline-safe
```
