# Japanese Verb Mnemonics — Method Spec

Owner: King. Level: intermediate (Duolingo ~level 27). Skip beginner verbs (eat, drink, go, come, see, etc.).

## The method (the only format to use)

Each verb gets a **two-letter code**:

- Letter 1 = first letter of the Japanese verb (romaji, -masu form)
- Letter 2 = first letter of the English meaning
- The code must be a **real abbreviation King already knows**, and its meaning must **connect to the verb**. Dota 2 abbreviations are preferred (heroes, items, terms, chat slang). Non-Dota is fine if it's obvious (a coworker's initials, a country, a company).

Format per line:

```
CODE  japanese-verb (masu form) → english meaning — one-line connection
```

Examples that work:

```
He  hairimasu → enter — "He" enters (King's original)
TC  tsukurimasu → cook — TC, a coworker's initials (King's original)
KD  kimemasu → decide — your KD decides the game
SB  shinjimasu → believe — Spirit Breaker believes (charges blind)
MP  mamorimasu → protect — Mars Protects
NW  nayamimasu → worry — No Wards, you worry
AF  akiramemasu → forfeit — AFK, you forfeit
```

## Rules

1. **The connection must be obvious.** "Mars Protects" works because that is what Mars does. "Alchemist Apologizes" does not — it's just a name starting with A.
2. **No clever double meanings.** "Urn — doubt whether it heals or hurts" is weird. Keep it literal.
3. **One code per verb.** If two verbs would share a code (e.g. TC for cook and continue), swap the English meaning to a synonym (continue → keep going → TK).
4. **Leave it blank rather than force it.** A bad hook is worse than none. Mark blanks with `—` so King can fill them himself.
5. **Synonyms are allowed for the English side** (give up → forfeit → AF) if it unlocks a real abbreviation.
6. **-masu form always**, romaji, no kanji required (kanji optional in a separate column).
7. **Sound-alikes are only used when they're free and exact** (Witch DOCtor → doko). Don't go looking for them.

## Rejected approaches (don't do these)

- Hero whose *name* starts with the Japanese initial + verb + in-game reason (too many forced ones)
- First two Japanese letters → Dota name starting with that sound
- Pure sound-alike hunting
- Japanese sentences about Dota situations
- Kanji-family / transitive-intransitive grouping as the main method
- Codes that are just two letters with no meaning (SE, KF, NL)

## Why this works (short version)

Keyword-style mnemonics stick for picturable words; the abbreviation + connection gives an abstract verb something to picture. The hook is only scaffolding — after a few quizzes the word should come without it. So: build the code, quiz same day, quiz again 3 days later, then stop relying on the code.

## Quiz protocol

Batches of 5. Prompt with the English meaning or the Dota connection; King answers the Japanese verb. Then reverse. Track duds and replace only those.

## Dictionary file

The dictionary lives in `src/data/verbs/dictionary.ts`, in course order (one verb per day). Add new verbs there in the same format.
