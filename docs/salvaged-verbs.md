# Salvaged from japanese-verb-trainer-fullstack

That repo (Nov 2025, abandoned same day) was an earlier attempt at the same
idea. Deleted 2026-09-03 to keep one Japanese project. Its 49 verbs overlapped
19 with the then-current dictionary; the rest were beginner verbs the method spec
says to skip (eat, drink, see, sleep, go) or plain `-suru` forms.

Five were worth keeping. The JLPT import (2026-09-07) has since picked up two of
them on its own:

| masu form | kana | english | status |
|---|---|---|---|
| renshuu shimasu | れんしゅうします | practice | ✅ in the dictionary (N3) |
| tameshimasu | ためします | try | ✅ in the dictionary (N3) |
| rikai shimasu | りかいします | comprehend¹ | still missing |
| shippai shimasu | しっぱいします | fail | still missing |
| seikou shimasu | せいこうします | succeed | still missing |

¹ `wakarimasu` already covers "understand". Use a different English side for
  this one — no two verbs may share a gloss, or a quiz question would have two
  correct answers.

## Why the last three are still out

They are noun+`suru` compounds, which the JLPT verb research deliberately
excluded as not being verbs in the strict sense. The dictionary does carry some
anyway (`benkyou shimasu`, `setsumei shimasu`, `renshuu shimasu`), so this is a
judgement call rather than a rule — add them if you want the coverage, with a
`sound` and `hook` per `method.md`.
