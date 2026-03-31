# Japanese Fluency Trainer — Implementation Plan

## Context
User is at late N5 level (900+ Duolingo days, knows basic vocab, shaky on grammar/particles, can't read kana). Goal: reach N3 (intermediate) conversational Japanese. Focus on listening/speaking — all content displayed in **romaji**. No auth, localStorage for progress, deploy to Vercel.

**Scaled up:** Full JLPT N5→N3 content pulled from online sources. This is enough content to take the user all the way to intermediate.

## Content Scale

| Level | Vocab Words | Grammar Patterns | Source |
|-------|------------|-----------------|--------|
| N5 | ~800 | 84 | nihongoichiban.com, jlptsensei.com |
| N4 | ~700 | 132 | nihongoichiban.com, jlptsensei.com |
| N3 | ~2,200 | 182+ | jlptsensei.com, tanos.co.uk |
| **Total** | **~3,700** | **~398** | |

## Tech Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Web Speech API for Japanese audio (TTS uses hidden Japanese characters, user sees romaji)
- localStorage for all progress (single user, no auth)
- Vercel deployment

## Design
- **Vibe:** Clean, cute, minimal — soft purple primary (#7c6bea), warm off-white bg (#faf9f7), rounded-2xl cards, emoji icons
- **Layout:** Mobile-first, bottom nav (Home / Vocab / Grammar / Stats), max-w-lg centered on desktop
- **Font:** Inter or system stack

## Vocab Module
- **Organized by JLPT level + themed categories** within each level
- N5 categories: Daily Life, Food & Drink, Travel, People & Family, Time & Numbers, Nature & Weather, Home & Objects, Body & Health, Actions (Verbs), Descriptions (Adjectives)
- N4 categories: Emotions & Personality, Society & Work, Education, Movement & Transport, Communication, Nature & Science, Abstract Concepts, Actions (Verbs), Descriptions (Adjectives)
- N3 categories: Advanced Daily Life, Business & Economy, Culture & Arts, Science & Technology, Abstract & Formal, Advanced Verbs, Advanced Adjectives
- Card view (romaji + audio) and Quiz mode (hear→pick meaning, see English→pick romaji)
- Spaced repetition (SM-2 simplified, 6 levels, fixed intervals: 0/1/3/7/14/30 days)
- Words locked by JLPT level — must complete 80% of N5 vocab to unlock N4, etc.

## Grammar Module
- **N5 (84 patterns):** Particles, basic verb forms, adjectives, desu/masu, question forms, te-form basics, tai, negative forms, counters, etc.
- **N4 (132 patterns):** Conditional forms (ba, tara, nara), honorifics, causative, passive, potential, giving/receiving, volitional, compound particles, etc.
- **N3 (182+ patterns):** Advanced conditionals, formal expressions, compound grammar, nuance markers (koso, sae, bakari), reported speech, etc.
- Each pattern: explanation → 3-4 example sentences with audio → 4-6 exercises (fill-blank, sentence build, multiple choice)
- Patterns locked by level progression

## Progression
- Levels 1-10 (N5): 100 XP/level | 11-25 (N4): 150 XP/level | 26-40 (N3): 200 XP/level
- XP: +10 vocab correct, +15 grammar correct, +50 daily challenge, +25 perfect quiz
- Daily challenge: 5 vocab + 2 grammar questions, seeded by date
- Streak tracking with longest streak record

## Key Architecture Decisions
- **Japanese field hidden from user:** Each word has a `japanese` field (kanji/kana) used only by Web Speech API for correct pronunciation. User only sees romaji
- **localStorage abstraction:** `storage.ts` wraps all state so swapping to Supabase later is one-file change
- **Modified Hepburn romanization** consistently (shi not si, chi not ti, tsu not tu)
- **Data files are large but static:** All ~3,700 words and ~398 grammar patterns are hardcoded TypeScript arrays. No database needed. Tree-shaking + code splitting keeps bundle manageable.
- **Dynamic imports per JLPT level:** Each level's data loads on demand, not upfront

---

## Implementation Order

### Phase 1: Scaffold + Core Libraries ✅
- [x] Create PLAN.md
- [x] create-next-app, tailwind config with custom colors
- [x] `src/lib/types.ts` — all TypeScript interfaces
- [x] `src/lib/storage.ts` — localStorage abstraction
- [x] `src/lib/speech.ts` — Web Speech API wrapper
- [x] `src/lib/srs.ts` — spaced repetition algorithm
- [x] `src/lib/xp.ts` — XP/level calculations
- [x] UI primitives: Button, Card, ProgressBar, Badge, AudioButton
- [x] Layout: Nav (bottom tabs)
- [x] Dashboard page with real data

### Phase 2: Vocab Data + Module ✅
- [x] Seed vocab data: N5 (800), N4 (650), N3 (1,652) = 3,102 total words
- [x] Each word: `{ id, romaji, japanese, english, category, jlptLevel, partOfSpeech }`
- [x] Vocab browser page — grid of category cards, filtered by unlocked JLPT level
- [x] VocabCard component — romaji, audio button, tap to reveal English
- [x] VocabQuiz component — 10-question rounds, 4 options each
- [x] AudioButton, ResultScreen components
- [x] Individual set page with Browse / Quiz tabs
- [x] Wire up SRS + mastery tracking

### Phase 3: Grammar Data + Module ✅
- [x] Seed grammar patterns: N5 (84), N4 (60), N3 (182) = 326 total patterns
- [x] Each pattern: `{ id, pattern, meaning, jlptLevel, explanation, structure, examples[], exercises[] }`
- [x] Grammar browser page — list of patterns grouped by JLPT level
- [x] PatternLearn component — explanation + examples with audio
- [x] FillBlank component — fill-in-the-blank exercises
- [x] SentenceBuild component — arrange words in correct order
- [x] Individual pattern page with Learn / Practice tabs
- [x] Wire up mastery tracking

### Phase 4: Progression + Daily Challenge + Stats ✅
- [x] Daily challenge generator (seeded by date)
- [x] Challenge page — mixed quiz from both modules
- [x] Stats page — level, XP, streak, weak areas, completion %
- [x] StreakDisplay, DailyChallenge card on dashboard
- [x] Wire up full progression system + dashboard with real data

### Phase 5: Polish + Deploy ⬜
- [x] Subtle animations (CSS transitions for card flips, slide-ins, XP pop)
- [x] Loading/empty states
- [x] Meta tags
- [ ] Deploy to Vercel

---

## Verification Checklist
1. `npm run dev` — navigate all pages, no errors
2. Vocab quiz: answer questions, verify XP increments, check SRS scheduling in localStorage
3. Grammar exercises: fill-blank and sentence build work correctly
4. Audio: Web Speech API plays Japanese pronunciation on Chrome
5. Daily challenge: same questions on refresh, different next day
6. Progression: level up after hitting XP threshold, unlock N4 content
7. `vercel deploy` — test on mobile Chrome

## Critical Files
- `src/lib/types.ts` — all interfaces
- `src/lib/storage.ts` — localStorage abstraction (core state)
- `src/lib/speech.ts` — Web Speech API wrapper
- `src/lib/srs.ts` — spaced repetition algorithm
- `src/lib/xp.ts` — XP/level calculations
- `src/data/vocab/n5/*.ts` — N5 vocab (~800 words across ~10 category files)
- `src/data/vocab/n4/*.ts` — N4 vocab (~700 words across ~10 category files)
- `src/data/vocab/n3/*.ts` — N3 vocab (~2,200 words across ~10 category files)
- `src/data/grammar/n5.ts` — 84 N5 grammar patterns
- `src/data/grammar/n4.ts` — 132 N4 grammar patterns
- `src/data/grammar/n3.ts` — 182+ N3 grammar patterns
