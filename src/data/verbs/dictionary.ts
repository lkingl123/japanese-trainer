import { Verb } from '@/lib/types';

/**
 * The mnemonic dictionary, ordered as the course teaches it — one verb per day.
 *
 * Format follows the method spec: a two-letter CODE (first letter of the
 * Japanese verb + first letter of the English meaning) that is a real
 * abbreviation King already knows, plus a one-line connection tying it to the
 * meaning. Entries with `code: null` have no good hook yet and are shown
 * without one rather than being given a forced mnemonic.
 *
 * All verbs are in -masu form (polite). Never dictionary/casual form.
 */
export const verbs: Verb[] = [
  // ===== A =====
  { id: 'v-akiramemasu', code: 'AF', masu: 'akiramemasu', japanese: 'あきらめます', english: 'forfeit', connection: 'AFK, you forfeit' },
  { id: 'v-awatemasu', code: 'AP', masu: 'awatemasu', japanese: 'あわてます', english: 'panic', connection: 'Ancient under attack, Panic' },
  { id: 'v-aimasu', code: 'AM', masu: 'aimasu', japanese: 'あいます', english: 'meet', connection: 'Anti-Mage Meets you in lane' },
  { id: 'v-agemasu', code: 'AG', masu: 'agemasu', japanese: 'あげます', english: 'give', connection: 'Abaddon Gives (Aphotic Shield)' },
  { id: 'v-ayamarimasu', code: null, masu: 'ayamarimasu', japanese: 'あやまります', english: 'apologize', connection: null },

  // ===== D =====
  { id: 'v-demasu', code: 'DC', masu: 'demasu', japanese: 'でます', english: 'leave', connection: 'Disconnect and Leave' },

  // ===== E =====
  { id: 'v-erabimasu', code: 'EC', masu: 'erabimasu', japanese: 'えらびます', english: 'choose', connection: 'Enigma Chooses who’s in the hole' },

  // ===== H =====
  { id: 'v-hairimasu', code: 'He', masu: 'hairimasu', japanese: 'はいります', english: 'enter', connection: '“He” enters' },
  { id: 'v-homemasu', code: 'HC', masu: 'homemasu', japanese: 'ほめます', english: 'commend', connection: 'Hard Carry gets commended' },
  { id: 'v-hajimemasu', code: 'HB', masu: 'hajimemasu', japanese: 'はじめます', english: 'begin', connection: 'Horn Begins the game' },
  // hakobimasu originally also used HC. Per rule 3, the English side moved to a
  // synonym (carry -> transport) to free a distinct code.
  { id: 'v-hakobimasu', code: 'HT', masu: 'hakobimasu', japanese: 'はこびます', english: 'transport', connection: 'Hard carry Transports the Aegis home' },
  { id: 'v-hatarakimasu', code: 'HW', masu: 'hatarakimasu', japanese: 'はたらきます', english: 'work', connection: 'Hand of midas Works for you' },
  { id: 'v-hashirimasu', code: 'HR', masu: 'hashirimasu', japanese: 'はしります', english: 'run', connection: 'Hoodwink Runs' },
  { id: 'v-hanashimasu', code: 'HS', masu: 'hanashimasu', japanese: 'はなします', english: 'speak', connection: 'Huskar Speaks' },

  // ===== I =====
  { id: 'v-ikimasu', code: 'IG', masu: 'ikimasu', japanese: 'いきます', english: 'go', connection: 'Invictus Gaming' },

  // ===== K =====
  { id: 'v-kimemasu', code: 'KD', masu: 'kimemasu', japanese: 'きめます', english: 'decide', connection: 'your KD decides the game' },
  { id: 'v-kaimasu', code: 'KB', masu: 'kaimasu', japanese: 'かいます', english: 'buy', connection: 'BKB, you Buy it' },
  { id: 'v-kakimasu', code: 'KW', masu: 'kakimasu', japanese: 'かきます', english: 'write', connection: 'Kez Writes' },
  { id: 'v-kimasu', code: 'KC', masu: 'kimasu', japanese: 'きます', english: 'come', connection: 'Kunkka Comes' },
  { id: 'v-kaerimasu', code: null, masu: 'kaerimasu', japanese: 'かえります', english: 'return', connection: null },
  { id: 'v-kowashimasu', code: null, masu: 'kowashimasu', japanese: 'こわします', english: 'break', connection: null },
  { id: 'v-kachimasu', code: null, masu: 'kachimasu', japanese: 'かちます', english: 'win', connection: null },
  { id: 'v-kurikaeshimasu', code: null, masu: 'kurikaeshimasu', japanese: 'くりかえします', english: 'repeat', connection: null },
  { id: 'v-kotowarimasu', code: null, masu: 'kotowarimasu', japanese: 'ことわります', english: 'refuse', connection: null },
  { id: 'v-kakushimasu', code: null, masu: 'kakushimasu', japanese: 'かくします', english: 'hide', connection: null },
  { id: 'v-kanjimasu', code: null, masu: 'kanjimasu', japanese: 'かんじます', english: 'feel', connection: null },

  // ===== M =====
  { id: 'v-mamorimasu', code: 'MP', masu: 'mamorimasu', japanese: 'まもります', english: 'protect', connection: 'Mars Protects' },
  { id: 'v-mitsukemasu', code: 'MF', masu: 'mitsukemasu', japanese: 'みつけます', english: 'find', connection: 'Mirana Finds you (arrow)' },
  { id: 'v-makemasu', code: 'ML', masu: 'makemasu', japanese: 'まけます', english: 'lose', connection: 'Meepo Loses (one dies, all die)' },
  { id: 'v-machimasu', code: 'MW', masu: 'machimasu', japanese: 'まちます', english: 'wait', connection: 'Magnus Waits for the perfect RP' },
  { id: 'v-moraimasu', code: 'MR', masu: 'moraimasu', japanese: 'もらいます', english: 'receive', connection: 'Marci Receives' },

  // ===== N =====
  { id: 'v-nigemasu', code: 'NE', masu: 'nigemasu', japanese: 'にげます', english: 'escape', connection: 'Nature’s prophet Escapes (TP)' },
  { id: 'v-nayamimasu', code: 'NW', masu: 'nayamimasu', japanese: 'なやみます', english: 'worry', connection: 'No Wards, you worry' },
  { id: 'v-nusumimasu', code: 'NS', masu: 'nusumimasu', japanese: 'ぬすみます', english: 'steal', connection: 'Nyx Steals your mana' },
  { id: 'v-naraimasu', code: 'NL', masu: 'naraimasu', japanese: 'ならいます', english: 'learn', connection: 'Nyx Learns' },
  { id: 'v-naoshimasu', code: null, masu: 'naoshimasu', japanese: 'なおします', english: 'fix', connection: null },

  // ===== O =====
  { id: 'v-owarimasu', code: 'OF', masu: 'owarimasu', japanese: 'おわります', english: 'finish', connection: 'Omnislash Finishes' },
  { id: 'v-oboemasu', code: 'OR', masu: 'oboemasu', japanese: 'おぼえます', english: 'remember', connection: 'Obs ward, Remember where it is' },
  { id: 'v-oshiemasu', code: 'OT', masu: 'oshiemasu', japanese: 'おしえます', english: 'teach', connection: 'Oracle Teaches' },
  { id: 'v-okurimasu', code: 'OS', masu: 'okurimasu', japanese: 'おくります', english: 'send', connection: 'OD Sends you to Astral' },

  // ===== S =====
  { id: 'v-shinjimasu', code: 'SB', masu: 'shinjimasu', japanese: 'しんじます', english: 'believe', connection: 'Spirit Breaker believes' },
  { id: 'v-sememasu', code: 'SA', masu: 'sememasu', japanese: 'せめます', english: 'attack', connection: 'Sven Attacks' },
  { id: 'v-sagashimasu', code: 'SS', masu: 'sagashimasu', japanese: 'さがします', english: 'search', connection: 'Sentry Searches for wards' },
  { id: 'v-sugoshimasu', code: 'SP', masu: 'sugoshimasu', japanese: 'すごします', english: 'spend time', connection: 'Spectre Spends 40 min farming' },
  { id: 'v-sodatemasu', code: 'SR', masu: 'sodatemasu', japanese: 'そだてます', english: 'raise', connection: 'Shadow shaman Raises wards' },
  { id: 'v-shimasu', code: 'SD', masu: 'shimasu', japanese: 'します', english: 'do', connection: 'Shadow Demon Does it' },
  { id: 'v-setsumeishimasu', code: null, masu: 'setsumei shimasu', japanese: 'せつめいします', english: 'explain', connection: null },
  { id: 'v-sasoimasu', code: null, masu: 'sasoimasu', japanese: 'さそいます', english: 'invite', connection: null },
  { id: 'v-shirabemasu', code: null, masu: 'shirabemasu', japanese: 'しらべます', english: 'investigate', connection: null },

  // ===== T =====
  { id: 'v-tsukurimasu', code: 'TC', masu: 'tsukurimasu', japanese: 'つくります', english: 'cook', connection: 'TC, coworker’s initials' },
  { id: 'v-tetsudaimasu', code: 'TH', masu: 'tetsudaimasu', japanese: 'てつだいます', english: 'help', connection: 'Treant Helps' },
  { id: 'v-tsukaremasu', code: 'TT', masu: 'tsukaremasu', japanese: 'つかれます', english: 'tired', connection: 'TT, the crying face' },
  { id: 'v-tanomimasu', code: 'TA', masu: 'tanomimasu', japanese: 'たのみます', english: 'ask for', connection: 'Tango, Ask support for one' },
  { id: 'v-tsuzukemasu', code: 'TK', masu: 'tsuzukemasu', japanese: 'つづけます', english: 'keep going', connection: 'Tinker Keeps rearming' },
  { id: 'v-tsukaimasu', code: 'TP', masu: 'tsukaimasu', japanese: 'つかいます', english: 'use', connection: 'you Use a TP scroll' },

  // ===== W =====
  { id: 'v-wasuremasu', code: 'WF', masu: 'wasuremasu', japanese: 'わすれます', english: 'forget', connection: 'Wand Forgotten' },
  { id: 'v-wakarimasu', code: 'WU', masu: 'wakarimasu', japanese: 'わかります', english: 'understand', connection: 'Windranger Understands' },

  // ===== Y =====
  { id: 'v-yamemasu', code: null, masu: 'yamemasu', japanese: 'やめます', english: 'quit', connection: null },
  { id: 'v-yurushimasu', code: null, masu: 'yurushimasu', japanese: 'ゆるします', english: 'forgive', connection: null },
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
