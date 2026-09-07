# Japanese Verb Mnemonics — Method Spec

Owner: King. Level: intermediate (Duolingo ~level 27). Skip beginner verbs (eat, drink, go, come, see, etc.).

## The method (the only format to use)

Each verb gets a **hook**: a short, obvious image that pulls the Japanese word
back — not just its first letter. Dota 2 is the default flavor; where no hero,
item, or piece of slang honestly fits, a general mnemonic is used instead.

Three fields:

- **`sound`** — the Japanese word chunked into readable syllables, uppercased,
  hyphen-separated. This is what the hook has to reproduce.
  `mamorimasu` → `MA-MO-RI`. Drop the `-masu` tail; it never varies, so it
  carries no memory load.
- **`hook`** — one line whose sound overlaps the front of the word, describing
  something that does what the verb *means*.
- **`hookKind`** — `dota` or `general`, so the app can tag it and the weaker
  general hooks can be found and rewritten later.

Format per line:

```
japanese-verb (masu form) → english meaning
  SOUND-CHUNKS — one-line hook            [dota|general]
```

Examples that work:

```
mamorimasu → protect
  MA-MO-RI — MArs MOves in to protect                     [dota]

nusumimasu → steal
  NU-SU-MI — NYx SUcks MAna out, stealing it              [dota]

tsukaimasu → use
  TSU-KA-I — TP scroll: SUre, KAn I use it? Yes, use it   [dota]
```

And where Dota does not fit, a general mnemonic rather than a forced hero:

```
kotowarimasu → refuse
  KO-TO-WA-RI — KOat too WARm, you refuse to wear it      [general]

sagashimasu → search
  SA-GA-SHI — SAfari GAme, SHIning torch in the dark      [general]
```

## Rules

1. **The hook must be obvious.** "Mars moves in to protect" works because that
   is what Mars does. "Alchemist Apologizes" does not — it's a name that
   happens to start with A.
2. **Easy beats complete.** The hook does not have to spell out every syllable.
   Covering the first two chunks with a real image is better than a contorted
   line that covers all four. If a natural hook lands the whole word, take it
   — but never bend the image to get there.
2b. **Dota first, general as the honest fallback.** Reach for a hero, item, or
   piece of chat slang whenever one fits the sound *and* the meaning. When none
   does, write a plain sound-alike instead — a forced hero name is exactly the
   failure the old method had. Dota must stay the majority of the dictionary;
   a test enforces this.
2c. **Spell the chunk with the letter the romaji uses.** "CAr" for `KA-E-RI`
   reads back as a C and hands you the wrong first letter. Use "KAyle".
3. **No clever double meanings.** Keep it literal.
4. **One hook per verb.** If two verbs would collide, swap the English side to
   a synonym (continue → keep going).
5. **Leave it blank rather than force it.** A bad hook is worse than none.
   `sound` is always filled in; `hook` may be `null`.
6. **Synonyms are allowed for the English side** (give up → forfeit) if it
   unlocks a better hook.
7. **-masu form always**, romaji. Kanji/kana stays in its own field, for TTS.

## Rejected approaches (don't do these)

- **Two-letter initial codes** (`MP`, `KD`, `SB`). This was the previous method
  and it is why the dictionary got rebuilt: the code only ever encoded the
  first letter of the Japanese word, so it could label a verb you already knew
  but could not get you back to one you didn't. Given "protect", `MP` tells you
  the answer starts with M and leaves the other four syllables to raw memory.
- Forcing a Dota hero onto a verb it does not fit, just to keep the theme pure
  — that is what rule 2b's fallback exists to prevent
- Japanese sentences about Dota situations
- Kanji-family / transitive-intransitive grouping as the main method

## Why this works (short version)

Keyword-style mnemonics stick for picturable words; a Dota image gives an
abstract verb something to picture, and chunked sound gives recall a path back
to the whole word rather than its initial. The hook is only scaffolding —
after a few quizzes the word should come without it. So: build the hook, quiz
same day, quiz again 3 days later, then stop relying on it.

## Quiz protocol

Batches of 5. Prompt with the English meaning; King answers the Japanese verb.
Then reverse. Track duds and replace only those.

## Dictionary file

The dictionary lives in `src/data/verbs/dictionary.ts`, in course order (one
verb per day). Add new verbs there in the same format.
