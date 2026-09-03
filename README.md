# Verb Trainer

One Japanese verb a day, learned with a mnemonic hook and re-tested until it sticks.

Built on the method in `docs/method.md`: every verb gets a two-letter code that is
a real abbreviation you already know, with a connection tying it to the meaning.

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
- **The mnemonic is never the prompt.** Codes are shown when a verb is first
  taught and revealed *after* an answer as the reminder — never as part of the
  question. The hook is scaffolding.
- **Blanks stay blank.** Verbs with no good hook show `—` rather than a forced
  mnemonic. A bad hook is worse than none.

## Content

59 verbs — 8 weeks at one a day. 46 have codes, 13 are awaiting hooks.

At one verb a day this is about **350 verbs a year**. The dictionary is the
bottleneck, not the app; add new entries to `src/data/verbs/dictionary.ts` in
course order.

## Storage

Everything lives in `localStorage` on the device — no accounts, no database, no
network. Settings has export/restore so a streak can be backed up or moved.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

No environment variables required.

## Layout

```
src/
  app/
    page.tsx          Home — today's card, streak, this week
    today/            The session: learn → quiz → result
    dictionary/       All verbs, searchable, with per-verb accuracy
    stats/            Streak, recall, and the dud list
    settings/         Export / restore / reset
  components/verbs/   VerbLearn, VerbQuiz, SessionResult
  data/verbs/         The dictionary + the -masu guard
  lib/
    session.ts        Builds the day's session; the scheduling rules
    storage.ts        localStorage progress
```
