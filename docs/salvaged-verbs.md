# Salvaged from japanese-verb-trainer-fullstack

That repo (Nov 2025, abandoned same day) was an earlier attempt at the same
idea. Deleted 2026-09-03 to keep one Japanese project. Its 49 verbs overlapped
19 with the current dictionary; the rest were beginner verbs the method spec
says to skip (eat, drink, see, sleep, go) or plain `-suru` forms that break the
-masu rule.

These five are the only ones worth adding. They need mnemonic codes before
going into `src/data/verbs/dictionary.ts`.

| masu form | kana | english |
|---|---|---|
| renshuu shimasu | れんしゅうします | practice |
| rikai shimasu | りかいします | understand¹ |
| tameshimasu | ためします | try / test |
| shippai shimasu | しっぱいします | fail |
| seikou shimasu | せいこうします | succeed |

¹ `wakarimasu` already covers "understand" (WU). Use a different English side
  for this one, per method rule 3.
