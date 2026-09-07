import { Verb } from '@/lib/types';

/**
 * The mnemonic dictionary, ordered as the course teaches it — one verb per day.
 *
 * Format follows the method spec:
 *   `sound` — the word chunked into syllables (the `-masu` tail dropped, since
 *             it never varies and so carries no memory load)
 *   `hook`  — one line that pulls those sounds back
 *   `hookKind` — 'dota' where a real hero/item/slang fits both sound and
 *             meaning, 'general' where forcing Dota would produce a weak hook
 *
 * Entries with `hook: null` have no honest hook yet and show their sound
 * chunks alone rather than being given a forced one.
 *
 * All verbs are in -masu form (polite). Never dictionary/casual form.
 */
export const verbs: Verb[] = [
  // ===== A =====
  { id: 'v-akiramemasu', sound: 'A-KI-RA', masu: 'akiramemasu', japanese: 'あきらめます', english: 'forfeit', hook: 'AFK + RAge quit — you forfeit the game', hookKind: 'dota' },
  { id: 'v-awatemasu', sound: 'A-WA-TE', masu: 'awatemasu', japanese: 'あわてます', english: 'panic', hook: 'AWAy TEam smoked you — panic', hookKind: 'dota' },
  { id: 'v-aimasu', sound: 'A-I', masu: 'aimasu', japanese: 'あいます', english: 'meet', hook: 'Anti-mage Is mid — you meet him there', hookKind: 'dota' },
  { id: 'v-agemasu', sound: 'A-GE', masu: 'agemasu', japanese: 'あげます', english: 'give', hook: 'Abaddon GivEs you the shield', hookKind: 'dota' },
  { id: 'v-ayamarimasu', sound: 'A-YA-MA-RI', masu: 'ayamarimasu', japanese: 'あやまります', english: 'apologize', hook: 'AYA! MA, so-RRY! — apologizing to Mama', hookKind: 'general' },

  // ===== D =====
  { id: 'v-demasu', sound: 'DE', masu: 'demasu', japanese: 'でます', english: 'leave', hook: 'DEad — you leave the fight', hookKind: 'dota' },

  // ===== E =====
  { id: 'v-erabimasu', sound: 'E-RA-BI', masu: 'erabimasu', japanese: 'えらびます', english: 'choose', hook: 'Enigma: RAdiance or BIkini? — choose the build', hookKind: 'dota' },

  // ===== H =====
  { id: 'v-hairimasu', sound: 'HA-I-RI', masu: 'hairimasu', japanese: 'はいります', english: 'enter', hook: 'HAve I RIght of way? — entering the jungle', hookKind: 'general' },
  { id: 'v-homemasu', sound: 'HO-ME', masu: 'homemasu', japanese: 'ほめます', english: 'commend', hook: 'HOld ME up — commend the support', hookKind: 'general' },
  { id: 'v-hajimemasu', sound: 'HA-JI-ME', masu: 'hajimemasu', japanese: 'はじめます', english: 'begin', hook: 'HAve a Good Game — JIngle at 0:00, the match begins', hookKind: 'dota' },
  { id: 'v-hakobimasu', sound: 'HA-KO-BI', masu: 'hakobimasu', japanese: 'はこびます', english: 'transport', hook: 'HAnd the KOurier the BOttle — transport it to mid', hookKind: 'dota' },
  { id: 'v-hatarakimasu', sound: 'HA-TA-RA-KI', masu: 'hatarakimasu', japanese: 'はたらきます', english: 'work', hook: 'Hand of midas — it TAkes RAdiant KIlls and works for you', hookKind: 'dota' },
  { id: 'v-hashirimasu', sound: 'HA-SHI-RI', masu: 'hashirimasu', japanese: 'はしります', english: 'run', hook: 'HAste rune — SHIft into a sprint, you run', hookKind: 'dota' },
  { id: 'v-hanashimasu', sound: 'HA-NA-SHI', masu: 'hanashimasu', japanese: 'はなします', english: 'speak', hook: 'HAve a NAsty SHIt-talk — speak in all-chat', hookKind: 'dota' },

  // ===== I =====
  { id: 'v-ikimasu', sound: 'I-KI', masu: 'ikimasu', japanese: 'いきます', english: 'go', hook: 'Invictus gaming KIcks off — go go go', hookKind: 'dota' },

  // ===== K =====
  { id: 'v-kimemasu', sound: 'KI-ME', masu: 'kimemasu', japanese: 'きめます', english: 'decide', hook: 'your KIll/death — MEasured, it decides the game', hookKind: 'dota' },
  { id: 'v-kaimasu', sound: 'KA-I', masu: 'kaimasu', japanese: 'かいます', english: 'buy', hook: 'KAy, I need a BKB — buy it', hookKind: 'dota' },
  { id: 'v-kakimasu', sound: 'KA-KI', masu: 'kakimasu', japanese: 'かきます', english: 'write', hook: 'KAy KIlled — write it in the log', hookKind: 'dota' },
  { id: 'v-kimasu', sound: 'KI', masu: 'kimasu', japanese: 'きます', english: 'come', hook: 'Kunkka\'s X — It\'s KIncoming, he comes', hookKind: 'dota' },
  { id: 'v-kaerimasu', sound: 'KA-E-RI', masu: 'kaerimasu', japanese: 'かえります', english: 'return', hook: 'KAyle Exits the RIft — return to base', hookKind: 'general' },
  { id: 'v-kowashimasu', sound: 'KO-WA-SHI', masu: 'kowashimasu', japanese: 'こわします', english: 'break', hook: 'KOurier WAs SHIelded — you break it anyway', hookKind: 'dota' },
  { id: 'v-kachimasu', sound: 'KA-CHI', masu: 'kachimasu', japanese: 'かちます', english: 'win', hook: 'KAy CHImes in — throne falls, you win', hookKind: 'general' },
  { id: 'v-kurikaeshimasu', sound: 'KU-RI-KA-E', masu: 'kurikaeshimasu', japanese: 'くりかえします', english: 'repeat', hook: 'KUrier RIng, KAy — Every lap the same, repeat', hookKind: 'general' },
  { id: 'v-kotowarimasu', sound: 'KO-TO-WA-RI', masu: 'kotowarimasu', japanese: 'ことわります', english: 'refuse', hook: 'KOat too WARm — you refuse to wear it', hookKind: 'general' },
  { id: 'v-kakushimasu', sound: 'KA-KU-SHI', masu: 'kakushimasu', japanese: 'かくします', english: 'hide', hook: 'smoKe: KAy, KUnkka SHIfts into fog — hide', hookKind: 'dota' },
  { id: 'v-kanjimasu', sound: 'KA-N-JI', masu: 'kanjimasu', japanese: 'かんじます', english: 'feel', hook: 'KAn of JElly — you feel it wobble', hookKind: 'general' },

  // ===== M =====
  { id: 'v-mamorimasu', sound: 'MA-MO-RI', masu: 'mamorimasu', japanese: 'まもります', english: 'protect', hook: 'MArs MOves in — protects the team', hookKind: 'dota' },
  { id: 'v-mitsukemasu', sound: 'MI-TSU-KE', masu: 'mitsukemasu', japanese: 'みつけます', english: 'find', hook: 'MIrana\'s arrow KEeps hunting — it finds you', hookKind: 'dota' },
  { id: 'v-makemasu', sound: 'MA-KE', masu: 'makemasu', japanese: 'まけます', english: 'lose', hook: 'MEepo MAKEs one mistake — all die, you lose', hookKind: 'dota' },
  { id: 'v-machimasu', sound: 'MA-CHI', masu: 'machimasu', japanese: 'まちます', english: 'wait', hook: 'MAgnus CHIlls in the trees — waits for RP', hookKind: 'dota' },
  { id: 'v-moraimasu', sound: 'MO-RA-I', masu: 'moraimasu', japanese: 'もらいます', english: 'receive', hook: 'MOre RAmpage Incoming — receive the gold', hookKind: 'dota' },

  // ===== N =====
  { id: 'v-nigemasu', sound: 'NI-GE', masu: 'nigemasu', japanese: 'にげます', english: 'escape', hook: 'Nature\'s prophet GEts out — escapes by TP', hookKind: 'dota' },
  { id: 'v-nayamimasu', sound: 'NA-YA-MI', masu: 'nayamimasu', japanese: 'なやみます', english: 'worry', hook: 'No wArds, YA MIssing — you worry', hookKind: 'dota' },
  { id: 'v-nusumimasu', sound: 'NU-SU-MI', masu: 'nusumimasu', japanese: 'ぬすみます', english: 'steal', hook: 'NYx SUcks MAna out — he steals it', hookKind: 'dota' },
  { id: 'v-naraimasu', sound: 'NA-RA-I', masu: 'naraimasu', japanese: 'ならいます', english: 'learn', hook: 'NAga RAges, I learn to dodge her song', hookKind: 'dota' },
  { id: 'v-naoshimasu', sound: 'NA-O-SHI', masu: 'naoshimasu', japanese: 'なおします', english: 'fix', hook: 'NAil On the SHIngle — fix the roof', hookKind: 'general' },

  // ===== O =====
  { id: 'v-owarimasu', sound: 'O-WA-RI', masu: 'owarimasu', japanese: 'おわります', english: 'finish', hook: 'Omnislash WArps in — finishes you', hookKind: 'dota' },
  { id: 'v-oboemasu', sound: 'O-BO-E', masu: 'oboemasu', japanese: 'おぼえます', english: 'remember', hook: 'OBs ward placed — remember where it is', hookKind: 'dota' },
  { id: 'v-oshiemasu', sound: 'O-SHI-E', masu: 'oshiemasu', japanese: 'おしえます', english: 'teach', hook: 'Oracle SHIelds you — teaching you to survive', hookKind: 'dota' },
  { id: 'v-okurimasu', sound: 'O-KU-RI', masu: 'okurimasu', japanese: 'おくります', english: 'send', hook: 'Outworld destroyer — banish, he sends you away', hookKind: 'dota' },

  // ===== S =====
  { id: 'v-shinjimasu', sound: 'SHI-N-JI', masu: 'shinjimasu', japanese: 'しんじます', english: 'believe', hook: 'Spirit breaker charges blind — SHIeld oN, he believes', hookKind: 'dota' },
  { id: 'v-sememasu', sound: 'SE-ME', masu: 'sememasu', japanese: 'せめます', english: 'attack', hook: 'SVen SEnds ME in — attack', hookKind: 'dota' },
  { id: 'v-sagashimasu', sound: 'SA-GA-SHI', masu: 'sagashimasu', japanese: 'さがします', english: 'search', hook: 'SAfari GAme — SHIning torch, searching the dark', hookKind: 'general' },
  { id: 'v-sugoshimasu', sound: 'SU-GO-SHI', masu: 'sugoshimasu', japanese: 'すごします', english: 'spend time', hook: 'Spectre\'s SUper GOld farm — she spends 40 min jungling', hookKind: 'dota' },
  { id: 'v-sodatemasu', sound: 'SO-DA-TE', masu: 'sodatemasu', japanese: 'そだてます', english: 'raise', hook: 'SOw the DAte TEed — raise the plant', hookKind: 'general' },
  { id: 'v-shimasu', sound: 'SHI', masu: 'shimasu', japanese: 'します', english: 'do', hook: 'SHadow demon just does it', hookKind: 'dota' },
  { id: 'v-setsumeishimasu', sound: 'SE-TSU-ME-I', masu: 'setsumei shimasu', japanese: 'せつめいします', english: 'explain', hook: 'SET, SUe — ME? I\'ll explain it', hookKind: 'general' },
  { id: 'v-sasoimasu', sound: 'SA-SO-I', masu: 'sasoimasu', japanese: 'さそいます', english: 'invite', hook: 'SAy SO, Invite them to the party', hookKind: 'general' },
  { id: 'v-shirabemasu', sound: 'SHI-RA-BE', masu: 'shirabemasu', japanese: 'しらべます', english: 'investigate', hook: 'SHIva\'s RAdiance BEam sweeps the fog — investigate', hookKind: 'dota' },

  // ===== T =====
  { id: 'v-tsukurimasu', sound: 'TSU-KU-RI', masu: 'tsukurimasu', japanese: 'つくります', english: 'cook', hook: 'TSUnami of KUrry and RIce — you cook it all', hookKind: 'general' },
  { id: 'v-tetsudaimasu', sound: 'TE-TSU-DA-I', masu: 'tetsudaimasu', japanese: 'てつだいます', english: 'help', hook: 'TrEeant TSUpports the DAmaged — he helps', hookKind: 'dota' },
  { id: 'v-tsukaremasu', sound: 'TSU-KA-RE', masu: 'tsukaremasu', japanese: 'つかれます', english: 'tired', hook: 'TT the crying face — SUre, KAn\'t REbuy, you\'re tired', hookKind: 'dota' },
  { id: 'v-tanomimasu', sound: 'TA-NO-MI', masu: 'tanomimasu', japanese: 'たのみます', english: 'ask for', hook: 'TAngo? NO? — MInd asking support again', hookKind: 'dota' },
  { id: 'v-tsuzukemasu', sound: 'TSU-ZU-KE', masu: 'tsuzukemasu', japanese: 'つづけます', english: 'keep going', hook: 'Tinker rearms — SUre, ZUre, KEep going forever', hookKind: 'dota' },
  { id: 'v-tsukaimasu', sound: 'TSU-KA-I', masu: 'tsukaimasu', japanese: 'つかいます', english: 'use', hook: 'TP scroll — SUre, KAn I use it? Yes, use it', hookKind: 'dota' },

  // ===== W =====
  { id: 'v-wasuremasu', sound: 'WA-SU-RE', masu: 'wasuremasu', japanese: 'わすれます', english: 'forget', hook: 'WAnd SUnk in REgret — you forgot to use it', hookKind: 'dota' },
  { id: 'v-wakarimasu', sound: 'WA-KA-RI', masu: 'wakarimasu', japanese: 'わかります', english: 'understand', hook: 'Windranger KAlls the RIght shot — she understands', hookKind: 'dota' },

  // ===== Y =====
  { id: 'v-yamemasu', sound: 'YA-ME', masu: 'yamemasu', japanese: 'やめます', english: 'quit', hook: 'YA, ME? — I quit, gg', hookKind: 'dota' },
  { id: 'v-yurushimasu', sound: 'YU-RU-SHI', masu: 'yurushimasu', japanese: 'ゆるします', english: 'forgive', hook: 'YU RUined the SHIeld — but I forgive you', hookKind: 'general' },
];

/** Days in a week batch — one verb per day. */
export const WEEK_LENGTH = 7;

export function getVerbById(id: string): Verb | undefined {
  return verbs.find((v) => v.id === id);
}

/** The verbs belonging to week `index` (0-based), in course order. */
export function getWeekVerbs(index: number): Verb[] {
  return verbs.slice(index * WEEK_LENGTH, (index + 1) * WEEK_LENGTH);
}

/** Total number of complete or partial weeks the dictionary covers. */
export function getTotalWeeks(): number {
  return Math.ceil(verbs.length / WEEK_LENGTH);
}

/**
 * Guard: every verb in the library must be in -masu form (polite), never
 * dictionary/casual form. This is not a style preference — the whole course
 * teaches polite speech, so a casual entry would teach the wrong register.
 *
 * Throws at import time rather than letting a bad entry reach a quiz.
 */
function assertAllMasuForm(list: Verb[]): void {
  const bad = list.filter(
    (v) => !v.masu.endsWith('masu') || !v.japanese.endsWith('ます')
  );
  if (bad.length > 0) {
    throw new Error(
      `Verbs must be in -masu form. Offending entries: ${bad
        .map((v) => `${v.id} (${v.masu} / ${v.japanese})`)
        .join(', ')}`
    );
  }
}

assertAllMasuForm(verbs);
