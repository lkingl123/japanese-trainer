import { Verb, JlptLevel } from '@/lib/types';

/**
 * The mnemonic dictionary, in curriculum order: every N5 verb, then N4, then
 * N3. Week slicing is positional, so this ordering *is* the syllabus — the
 * course walks the JLPT levels in sequence, one verb per day.
 *
 * Format follows the method spec:
 *   `sound` — the word chunked into syllables (the `-masu` tail dropped, since
 *             it never varies and so carries no memory load)
 *   `hook`  — one line that pulls those sounds back
 *   `hookKind` — 'dota' where a real hero/item/slang fits both sound and
 *             meaning, 'general' where forcing Dota would produce a weak hook
 *
 * All verbs are in -masu form (polite). Never dictionary/casual form.
 */
export const verbs: Verb[] = [
  // ===== N5 =====
  { id: 'v-agemasu', level: 'N5', sound: 'A-GE', masu: 'agemasu', japanese: 'あげます', english: 'give', hook: 'Abaddon GivEs you the shield', hookKind: 'dota' },
  { id: 'v-aimasu', level: 'N5', sound: 'A-I', masu: 'aimasu', japanese: 'あいます', english: 'meet', hook: 'Anti-mage Is mid — you meet him there', hookKind: 'dota' },
  { id: 'v-demasu', level: 'N5', sound: 'DE', masu: 'demasu', japanese: 'でます', english: 'leave', hook: 'DEad — you leave the fight', hookKind: 'dota' },
  { id: 'v-hairimasu', level: 'N5', sound: 'HA-I-RI', masu: 'hairimasu', japanese: 'はいります', english: 'enter', hook: 'HAve I RIght of way? — entering the jungle', hookKind: 'general' },
  { id: 'v-hajimemasu', level: 'N5', sound: 'HA-JI-ME', masu: 'hajimemasu', japanese: 'はじめます', english: 'begin', hook: 'HAve a Good Game — JIngle at 0:00, the match begins', hookKind: 'dota' },
  { id: 'v-hanashimasu', level: 'N5', sound: 'HA-NA-SHI', masu: 'hanashimasu', japanese: 'はなします', english: 'speak', hook: 'HAve a NAsty SHIt-talk — speak in all-chat', hookKind: 'dota' },
  { id: 'v-hashirimasu', level: 'N5', sound: 'HA-SHI-RI', masu: 'hashirimasu', japanese: 'はしります', english: 'run', hook: 'HAste rune — SHIft into a sprint, you run', hookKind: 'dota' },
  { id: 'v-hatarakimasu', level: 'N5', sound: 'HA-TA-RA-KI', masu: 'hatarakimasu', japanese: 'はたらきます', english: 'work', hook: 'Hand of midas — it TAkes RAdiant KIlls and works for you', hookKind: 'dota' },
  { id: 'v-ikimasu', level: 'N5', sound: 'I-KI', masu: 'ikimasu', japanese: 'いきます', english: 'go', hook: 'Invictus gaming KIcks off — go go go', hookKind: 'dota' },
  { id: 'v-kaerimasu', level: 'N5', sound: 'KA-E-RI', masu: 'kaerimasu', japanese: 'かえります', english: 'return', hook: 'KAyle Exits the RIft — return to base', hookKind: 'general' },
  { id: 'v-kaimasu', level: 'N5', sound: 'KA-I', masu: 'kaimasu', japanese: 'かいます', english: 'buy', hook: 'KAy, I need a BKB — buy it', hookKind: 'dota' },
  { id: 'v-kakimasu', level: 'N5', sound: 'KA-KI', masu: 'kakimasu', japanese: 'かきます', english: 'write', hook: 'KAy KIlled — write it in the log', hookKind: 'dota' },
  { id: 'v-kimasu', level: 'N5', sound: 'KI', masu: 'kimasu', japanese: 'きます', english: 'come', hook: 'Kunkka\'s X — It\'s KIncoming, he comes', hookKind: 'dota' },
  { id: 'v-machimasu', level: 'N5', sound: 'MA-CHI', masu: 'machimasu', japanese: 'まちます', english: 'wait', hook: 'MAgnus CHIlls in the trees — waits for RP', hookKind: 'dota' },
  { id: 'v-moraimasu', level: 'N5', sound: 'MO-RA-I', masu: 'moraimasu', japanese: 'もらいます', english: 'receive', hook: 'MOre RAmpage Incoming — receive the gold', hookKind: 'dota' },
  { id: 'v-naraimasu', level: 'N5', sound: 'NA-RA-I', masu: 'naraimasu', japanese: 'ならいます', english: 'learn', hook: 'NAga RAges, I learn to dodge her song', hookKind: 'dota' },
  { id: 'v-oboemasu', level: 'N5', sound: 'O-BO-E', masu: 'oboemasu', japanese: 'おぼえます', english: 'remember', hook: 'OBs ward placed — remember where it is', hookKind: 'dota' },
  { id: 'v-oshiemasu', level: 'N5', sound: 'O-SHI-E', masu: 'oshiemasu', japanese: 'おしえます', english: 'teach', hook: 'Oracle SHIelds you — teaching you to survive', hookKind: 'dota' },
  { id: 'v-owarimasu', level: 'N5', sound: 'O-WA-RI', masu: 'owarimasu', japanese: 'おわります', english: 'finish', hook: 'Omnislash WArps in — finishes you', hookKind: 'dota' },
  { id: 'v-shimasu', level: 'N5', sound: 'SHI', masu: 'shimasu', japanese: 'します', english: 'do', hook: 'SHadow demon just does it', hookKind: 'dota' },
  { id: 'v-tetsudaimasu', level: 'N5', sound: 'TE-TSU-DA-I', masu: 'tetsudaimasu', japanese: 'てつだいます', english: 'help', hook: 'TrEeant TSUpports the DAmaged — he helps', hookKind: 'dota' },
  { id: 'v-tsukaimasu', level: 'N5', sound: 'TSU-KA-I', masu: 'tsukaimasu', japanese: 'つかいます', english: 'use', hook: 'TP scroll — SUre, KAn I use it? Yes, use it', hookKind: 'dota' },
  { id: 'v-tsukaremasu', level: 'N5', sound: 'TSU-KA-RE', masu: 'tsukaremasu', japanese: 'つかれます', english: 'tired', hook: 'TT the crying face — SUre, KAn\'t REbuy, you\'re tired', hookKind: 'dota' },
  { id: 'v-tsukurimasu', level: 'N5', sound: 'TSU-KU-RI', masu: 'tsukurimasu', japanese: 'つくります', english: 'cook', hook: 'TSUnami of KUrry and RIce — you cook it all', hookKind: 'general' },
  { id: 'v-wakarimasu', level: 'N5', sound: 'WA-KA-RI', masu: 'wakarimasu', japanese: 'わかります', english: 'understand', hook: 'Windranger KAlls the RIght shot — she understands', hookKind: 'dota' },
  { id: 'v-wasuremasu', level: 'N5', sound: 'WA-SU-RE', masu: 'wasuremasu', japanese: 'わすれます', english: 'forget', hook: 'WAnd SUnk in REgret — you forgot to use it', hookKind: 'dota' },

  { id: 'v-abimasu', level: 'N5', sound: 'A-BI', masu: 'abimasu', japanese: '浴びます', english: 'bathe', hook: 'Anti-mage BIathes in the fountain', hookKind: 'dota' },
  { id: 'v-akemasu', level: 'N5', sound: 'A-KE', masu: 'akemasu', japanese: '開けます', english: 'open (tr)', hook: 'Alchemist\'s KEg — he opens it', hookKind: 'dota' },
  { id: 'v-akimasu', level: 'N5', sound: 'A-KI', masu: 'akimasu', japanese: '開きます', english: 'open (intr)', hook: 'Aegis KIcks open on its own', hookKind: 'dota' },
  { id: 'v-araimasu', level: 'N5', sound: 'A-RA-I', masu: 'araimasu', japanese: '洗います', english: 'wash', hook: 'Aegis RAin — I wash it off', hookKind: 'dota' },
  { id: 'v-arimasu', level: 'N5', sound: 'A-RI', masu: 'arimasu', japanese: 'あります', english: 'exist (inanimate)', hook: 'the Aegis RIght there — it exists', hookKind: 'dota' },
  { id: 'v-arukimasu', level: 'N5', sound: 'A-RU-KI', masu: 'arukimasu', japanese: '歩きます', english: 'walk', hook: 'no boots: Alch RUns out of KIck, just walks', hookKind: 'dota' },
  { id: 'v-asobimasu', level: 'N5', sound: 'A-SO-BI', masu: 'asobimasu', japanese: '遊びます', english: 'play', hook: 'Arc warden SOlo BIg game — he plays', hookKind: 'dota' },
  { id: 'v-chigaimasu', level: 'N5', sound: 'CHI-GA-I', masu: 'chigaimasu', japanese: '違います', english: 'differ', hook: 'CHIcken GAme, I differ — that is a courier', hookKind: 'general' },
  { id: 'v-dashimasu', level: 'N5', sound: 'DA-SHI', masu: 'dashimasu', japanese: '出します', english: 'take out', hook: 'DAzzle SHIfts the grave out — takes it out', hookKind: 'dota' },
  { id: 'v-dekakemasu', level: 'N5', sound: 'DE-KA-KE', masu: 'dekakemasu', japanese: '出かけます', english: 'go out', hook: 'DEcide to KAge, KEep going out', hookKind: 'general' },
  { id: 'v-dekimasu', level: 'N5', sound: 'DE-KI', masu: 'dekimasu', japanese: '出来ます', english: 'be able', hook: 'DEep KIll — you are able to do it', hookKind: 'dota' },
  { id: 'v-fukimasu', level: 'N5', sound: 'FU-KI', masu: 'fukimasu', japanese: '吹きます', english: 'blow', hook: 'FUry KIte in the wind — it blows', hookKind: 'general' },
  { id: 'v-furimasu', level: 'N5', sound: 'FU-RI', masu: 'furimasu', japanese: '降ります', english: 'fall (rain/snow)', hook: 'FUry RIses, the rain falls', hookKind: 'general' },
  { id: 'v-hajimarimasu', level: 'N5', sound: 'HA-JI-MA-RI', masu: 'hajimarimasu', japanese: '始まります', english: 'begin (intr)', hook: 'HAve a Good Game — JIngle MARks it, it begins', hookKind: 'dota' },
  { id: 'v-hakimasu', level: 'N5', sound: 'HA-KI', masu: 'hakimasu', japanese: '履きます', english: 'wear (shoes/pants)', hook: 'HAve KIcks on — wear the shoes', hookKind: 'general' },
  { id: 'v-haremasu', level: 'N5', sound: 'HA-RE', masu: 'haremasu', japanese: '晴れます', english: 'clear up', hook: 'HAze REtreats — the sky clears up', hookKind: 'general' },
  { id: 'v-harimasu', level: 'N5', sound: 'HA-RI', masu: 'harimasu', japanese: '貼ります', english: 'stick, paste', hook: 'HAnd the RIver ward — stick it on', hookKind: 'dota' },
  { id: 'v-hikimasu', level: 'N5', sound: 'HI-KI', masu: 'hikimasu', japanese: '引きます', english: 'pull', hook: 'HIt and KIte — you pull the creeps', hookKind: 'dota' },
  { id: 'v-iimasu', level: 'N5', sound: 'I-I', masu: 'iimasu', japanese: '言います', english: 'say', hook: 'II spammed in chat — that is you saying it', hookKind: 'dota' },
  { id: 'v-imasu', level: 'N5', sound: 'I-MA', masu: 'imasu', japanese: '居ます', english: 'exist (animate)', hook: 'IM Alive — you exist', hookKind: 'general' },
  { id: 'v-iremasu', level: 'N5', sound: 'I-RE', masu: 'iremasu', japanese: '入れます', english: 'put in', hook: 'Item REstocked — put it in the stash', hookKind: 'dota' },
  { id: 'v-irimasu', level: 'N5', sound: 'I-RI', masu: 'irimasu', japanese: '要ります', english: 'need', hook: 'Item RIght now — you need it', hookKind: 'dota' },
  { id: 'v-kaburimasu', level: 'N5', sound: 'KA-BU-RI', masu: 'kaburimasu', japanese: '被ります', english: 'wear (on head)', hook: 'KAy, BUy the RIm hat — wear it on your head', hookKind: 'general' },
  { id: 'v-kaeshimasu', level: 'N5', sound: 'KA-E-SHI', masu: 'kaeshimasu', japanese: '返します', english: 'return (something)', hook: 'KAy, Everyone SHIp it back — return it', hookKind: 'general' },
  { id: 'v-kakarimasu', level: 'N5', sound: 'KA-KA-RI', masu: 'kakarimasu', japanese: '掛かります', english: 'take (time/money)', hook: 'KAy, KArma RIsing — it takes time', hookKind: 'general' },
  { id: 'v-kakemasu', level: 'N5', sound: 'KA-KE', masu: 'kakemasu', japanese: '掛けます', english: 'hang, call', hook: 'KAy, KEep him on the line — hang, call', hookKind: 'general' },
  { id: 'v-karimasu', level: 'N5', sound: 'KA-RI', masu: 'karimasu', japanese: '借ります', english: 'borrow', hook: 'KAy, RIng me that item — borrow it', hookKind: 'general' },
  { id: 'v-kashimasu', level: 'N5', sound: 'KA-SHI', masu: 'kashimasu', japanese: '貸します', english: 'lend', hook: 'KAy, SHIp it over — lend it', hookKind: 'general' },
  { id: 'v-keshimasu', level: 'N5', sound: 'KE-SHI', masu: 'keshimasu', japanese: '消します', english: 'turn off', hook: 'KEeper of the light SHIeld off — turn it off', hookKind: 'dota' },
  { id: 'v-kiemasu', level: 'N5', sound: 'KI-E', masu: 'kiemasu', japanese: '消えます', english: 'vanish', hook: 'KIll, then Everything vanishes — smoke gone', hookKind: 'dota' },
  { id: 'v-kikimasu', level: 'N5', sound: 'KI-KI', masu: 'kikimasu', japanese: '聞きます', english: 'listen, ask', hook: 'KIll KIll in chat — you listen for it', hookKind: 'dota' },
  { id: 'v-kirimasu', level: 'N5', sound: 'KI-RI', masu: 'kirimasu', japanese: '切ります', english: 'cut', hook: 'KIll with the RIft blade — cut', hookKind: 'dota' },
  { id: 'v-komarimasu', level: 'N5', sound: 'KO-MA-RI', masu: 'komarimasu', japanese: '困ります', english: 'be troubled', hook: 'KOurier MAssacred RIght away — you are troubled', hookKind: 'dota' },
  { id: 'v-kotaemasu', level: 'N5', sound: 'KO-TA-E', masu: 'kotaemasu', japanese: '答えます', english: 'answer', hook: 'KOurier? TAke it — Every answer is in chat', hookKind: 'general' },
  { id: 'v-kumorimasu', level: 'N5', sound: 'KU-MO-RI', masu: 'kumorimasu', japanese: '曇ります', english: 'become cloudy', hook: 'KUrier MOre RIsky — it has become cloudy', hookKind: 'general' },
  { id: 'v-magarimasu', level: 'N5', sound: 'MA-GA-RI', masu: 'magarimasu', japanese: '曲がります', english: 'turn', hook: 'MAgnus GAnks at the RIver — he turns', hookKind: 'dota' },
  { id: 'v-migakimasu', level: 'N5', sound: 'MI-GA-KI', masu: 'migakimasu', japanese: '磨きます', english: 'polish, brush', hook: 'MIrana GAve the KIt a polish', hookKind: 'dota' },
  { id: 'v-mimasu', level: 'N5', sound: 'MI', masu: 'mimasu', japanese: '見ます', english: 'see', hook: 'MIrana sees you — her arrow found you', hookKind: 'dota' },
  { id: 'v-misemasu', level: 'N5', sound: 'MI-SE', masu: 'misemasu', japanese: '見せます', english: 'show', hook: 'MIrana SEnds the arrow — showing you', hookKind: 'dota' },
  { id: 'v-mochimasu', level: 'N5', sound: 'MO-CHI', masu: 'mochimasu', japanese: '持ちます', english: 'hold', hook: 'MOre CHIckens to hold — you hold them', hookKind: 'general' },
  { id: 'v-nakimasu', level: 'N5', sound: 'NA-KI', masu: 'nakimasu', japanese: '鳴きます', english: 'chirp', hook: 'NAture prophet KIte — the treants chirp', hookKind: 'dota' },
  { id: 'v-nakushimasu', level: 'N5', sound: 'NA-KU-SHI', masu: 'nakushimasu', japanese: '無くします', english: 'misplace', hook: 'NAga KUts the SHIeld loose — you misplace it', hookKind: 'dota' },
  { id: 'v-narabemasu', level: 'N5', sound: 'NA-RA-BE', masu: 'narabemasu', japanese: '並べます', english: 'line up (tr)', hook: 'NAga RAllies the BEasts — lines them up', hookKind: 'dota' },
  { id: 'v-narabimasu', level: 'N5', sound: 'NA-RA-BI', masu: 'narabimasu', japanese: '並びます', english: 'line up (intr)', hook: 'NAga RAnks BIld up — they line up', hookKind: 'dota' },
  { id: 'v-narimasu', level: 'N5', sound: 'NA-RI', masu: 'narimasu', japanese: 'なります', english: 'become', hook: 'NAga RIses — she becomes the illusion army', hookKind: 'dota' },
  { id: 'v-nemasu', level: 'N5', sound: 'NE-MA', masu: 'nemasu', japanese: '寝ます', english: 'sleep', hook: 'NEed MAna — go sleep at fountain', hookKind: 'dota' },
  { id: 'v-noborimasu', level: 'N5', sound: 'NO-BO-RI', masu: 'noborimasu', japanese: '登ります', english: 'climb', hook: 'NO BOots? RIght, you climb the cliff slowly', hookKind: 'general' },
  { id: 'v-nomimasu', level: 'N5', sound: 'NO-MI', masu: 'nomimasu', japanese: '飲みます', english: 'drink', hook: 'NO MIssing bottle — you drink it', hookKind: 'dota' },
  { id: 'v-norimasu', level: 'N5', sound: 'NO-RI', masu: 'norimasu', japanese: '乗ります', english: 'ride', hook: 'NO RIde? take the courier — you ride', hookKind: 'general' },
  { id: 'v-nugimasu', level: 'N5', sound: 'NU-GI', masu: 'nugimasu', japanese: '脱ぎます', english: 'take off (clothes)', hook: 'NUke GIves heat — take the clothes off', hookKind: 'general' },
  { id: 'v-okimasu', level: 'N5', sound: 'O-KI', masu: 'okimasu', japanese: '置きます', english: 'put', hook: 'Obs ward KIt — put it down', hookKind: 'dota' },
  { id: 'v-orimasu', level: 'N5', sound: 'O-RI', masu: 'orimasu', japanese: '降ります', english: 'get off', hook: 'Off the RIver bank — get off', hookKind: 'general' },
  { id: 'v-oshimasu', level: 'N5', sound: 'O-SHI', masu: 'oshimasu', japanese: '押します', english: 'push', hook: 'Omni SHIelds and pushes — push', hookKind: 'dota' },
  { id: 'v-oyogimasu', level: 'N5', sound: 'O-YO-GI', masu: 'oyogimasu', japanese: '泳ぎます', english: 'swim', hook: 'Over YOur GIll — swim the river', hookKind: 'general' },
  { id: 'v-sakimasu', level: 'N5', sound: 'SA-KI', masu: 'sakimasu', japanese: '咲きます', english: 'bloom', hook: 'SAkura KIsses the branch — it blooms', hookKind: 'general' },
  { id: 'v-sashimasu', level: 'N5', sound: 'SA-SHI', masu: 'sashimasu', japanese: '差します', english: 'raise (umbrella)', hook: 'SAy SHIeld up — raise the umbrella', hookKind: 'general' },
  { id: 'v-shimarimasu', level: 'N5', sound: 'SHI-MA-RI', masu: 'shimarimasu', japanese: '閉まります', english: 'close (intr)', hook: 'SHIeld MAkes the RIm close by itself', hookKind: 'general' },
  { id: 'v-shimemasu', level: 'N5', sound: 'SHI-ME', masu: 'shimemasu', japanese: '締めます', english: 'fasten', hook: 'SHIeld ME in — fasten it', hookKind: 'general' },
  { id: 'v-shinimasu', level: 'N5', sound: 'SHI-NI', masu: 'shinimasu', japanese: '死にます', english: 'die', hook: 'SHIeld NIl — you die', hookKind: 'dota' },
  { id: 'v-shirimasu', level: 'N5', sound: 'SHI-RI', masu: 'shirimasu', japanese: '知ります', english: 'know', hook: 'SHIva RIng — you know that item', hookKind: 'dota' },
  { id: 'v-suimasu', level: 'N5', sound: 'SU-I', masu: 'suimasu', japanese: '吸います', english: 'smoke, inhale', hook: 'SUck It in — smoke, inhale', hookKind: 'general' },
  { id: 'v-sumimasu', level: 'N5', sound: 'SU-MI', masu: 'sumimasu', japanese: '住みます', english: 'live, reside', hook: 'SUre, MInes are home — you live there', hookKind: 'general' },
  { id: 'v-suwarimasu', level: 'N5', sound: 'SU-WA-RI', masu: 'suwarimasu', japanese: '座ります', english: 'sit', hook: 'SUre, WArd here and RIde it out — sit down', hookKind: 'dota' },
  { id: 'v-tabemasu', level: 'N5', sound: 'TA-BE', masu: 'tabemasu', japanese: '食べます', english: 'eat', hook: 'TAngo BEfore the fight — eat it', hookKind: 'dota' },
  { id: 'v-tachimasu', level: 'N5', sound: 'TA-CHI', masu: 'tachimasu', japanese: '立ちます', english: 'stand', hook: 'TAke the CHIld stance — stand', hookKind: 'general' },
  { id: 'v-tobimasu', level: 'N5', sound: 'TO-BI', masu: 'tobimasu', japanese: '飛びます', english: 'fly', hook: 'TOss BIg — Tiny sends you flying', hookKind: 'dota' },
  { id: 'v-tomarimasu', level: 'N5', sound: 'TO-MA-RI', masu: 'tomarimasu', japanese: '止まります', english: 'stop (intr)', hook: 'TOwer MAkes the RIver stop — it stops', hookKind: 'dota' },
  { id: 'v-torimasu', level: 'N5', sound: 'TO-RI', masu: 'torimasu', japanese: '取ります', english: 'take', hook: 'TOwer RIght there — take it', hookKind: 'dota' },
  { id: 'v-tsukemasu', level: 'N5', sound: 'TSU-KE', masu: 'tsukemasu', japanese: '点けます', english: 'turn on', hook: 'TSUnami KEttle on — turn it on', hookKind: 'general' },
  { id: 'v-tsukimasu', level: 'N5', sound: 'TSU-KI', masu: 'tsukimasu', japanese: '着きます', english: 'arrive', hook: 'TSUnami KIcks in — you arrive', hookKind: 'general' },
  { id: 'v-tsutomemasu', level: 'N5', sound: 'TSU-TO-ME', masu: 'tsutomemasu', japanese: '勤めます', english: 'work for', hook: 'TSUpport TOld ME — that is who I work for', hookKind: 'dota' },
  { id: 'v-umaremasu', level: 'N5', sound: 'U-MA-RE', masu: 'umaremasu', japanese: '生まれます', english: 'be born', hook: 'Ursa MAde a REspawn — you are born', hookKind: 'dota' },
  { id: 'v-urimasu', level: 'N5', sound: 'U-RI', masu: 'urimasu', japanese: '売ります', english: 'sell', hook: 'Ursa RIngs it up — he sells the item', hookKind: 'dota' },
  { id: 'v-utaimasu', level: 'N5', sound: 'U-TA-I', masu: 'utaimasu', japanese: '歌います', english: 'sing', hook: 'Ursa TAkes the mIc — he sings', hookKind: 'dota' },
  { id: 'v-watarimasu', level: 'N5', sound: 'WA-TA-RI', masu: 'watarimasu', japanese: '渡ります', english: 'cross', hook: 'WAter TAken at the RIver — cross it', hookKind: 'general' },
  { id: 'v-watashimasu', level: 'N5', sound: 'WA-TA-SHI', masu: 'watashimasu', japanese: '渡します', english: 'hand over', hook: 'WArd TAken, SHIpped over — hand it over', hookKind: 'dota' },
  { id: 'v-yarimasu', level: 'N5', sound: 'YA-RI', masu: 'yarimasu', japanese: 'やります', english: 'do, give', hook: 'YA, RIght now — just do it', hookKind: 'general' },
  { id: 'v-yasumimasu', level: 'N5', sound: 'YA-SU-MI', masu: 'yasumimasu', japanese: '休みます', english: 'rest', hook: 'YA, SUre — MInute of rest at fountain', hookKind: 'dota' },
  { id: 'v-yobimasu', level: 'N5', sound: 'YO-BI', masu: 'yobimasu', japanese: '呼びます', english: 'call', hook: 'YO! BIg guy — you call him', hookKind: 'general' },
  { id: 'v-yomimasu', level: 'N5', sound: 'YO-MI', masu: 'yomimasu', japanese: '読みます', english: 'read', hook: 'YOur MInimap — you read it', hookKind: 'dota' },
  // ===== N4 =====
  { id: 'v-ayamarimasu', level: 'N4', sound: 'A-YA-MA-RI', masu: 'ayamarimasu', japanese: 'あやまります', english: 'apologize', hook: 'AYA! MA, so-RRY! — apologizing to Mama', hookKind: 'general' },
  { id: 'v-erabimasu', level: 'N4', sound: 'E-RA-BI', masu: 'erabimasu', japanese: 'えらびます', english: 'choose', hook: 'Enigma: RAdiance or BIkini? — choose the build', hookKind: 'dota' },
  { id: 'v-hakobimasu', level: 'N4', sound: 'HA-KO-BI', masu: 'hakobimasu', japanese: 'はこびます', english: 'transport', hook: 'HAnd the KOurier the BIottle — transport it to mid', hookKind: 'dota' },
  { id: 'v-kachimasu', level: 'N4', sound: 'KA-CHI', masu: 'kachimasu', japanese: 'かちます', english: 'win', hook: 'KAy CHImes in — throne falls, you win', hookKind: 'general' },
  { id: 'v-kakushimasu', level: 'N4', sound: 'KA-KU-SHI', masu: 'kakushimasu', japanese: 'かくします', english: 'hide', hook: 'smoKe: KAy, KUnkka SHIfts into fog — hide', hookKind: 'dota' },
  { id: 'v-kimemasu', level: 'N4', sound: 'KI-ME', masu: 'kimemasu', japanese: 'きめます', english: 'decide', hook: 'your KIll/death — MEasured, it decides the game', hookKind: 'dota' },
  { id: 'v-kowashimasu', level: 'N4', sound: 'KO-WA-SHI', masu: 'kowashimasu', japanese: 'こわします', english: 'break', hook: 'KOurier WAs SHIelded — you break it anyway', hookKind: 'dota' },
  { id: 'v-makemasu', level: 'N4', sound: 'MA-KE', masu: 'makemasu', japanese: 'まけます', english: 'lose', hook: 'MEepo MAKEs one mistake — all die, you lose', hookKind: 'dota' },
  { id: 'v-mitsukemasu', level: 'N4', sound: 'MI-TSU-KE', masu: 'mitsukemasu', japanese: 'みつけます', english: 'find', hook: 'MIrana\'s arrow KEeps hunting — it finds you', hookKind: 'dota' },
  { id: 'v-naoshimasu', level: 'N4', sound: 'NA-O-SHI', masu: 'naoshimasu', japanese: 'なおします', english: 'fix', hook: 'NAil On the SHIngle — fix the roof', hookKind: 'general' },
  { id: 'v-nigemasu', level: 'N4', sound: 'NI-GE', masu: 'nigemasu', japanese: 'にげます', english: 'escape', hook: 'Nature\'s prophet GEts out — escapes by TP', hookKind: 'dota' },
  { id: 'v-nusumimasu', level: 'N4', sound: 'NU-SU-MI', masu: 'nusumimasu', japanese: 'ぬすみます', english: 'steal', hook: 'NYx SUcks MAna out — he steals it', hookKind: 'dota' },
  { id: 'v-okurimasu', level: 'N4', sound: 'O-KU-RI', masu: 'okurimasu', japanese: 'おくります', english: 'send', hook: 'Outworld destroyer — banish, he sends you away', hookKind: 'dota' },
  { id: 'v-sagashimasu', level: 'N4', sound: 'SA-GA-SHI', masu: 'sagashimasu', japanese: 'さがします', english: 'search', hook: 'SAfari GAme — SHIning torch, searching the dark', hookKind: 'general' },
  { id: 'v-sasoimasu', level: 'N4', sound: 'SA-SO-I', masu: 'sasoimasu', japanese: 'さそいます', english: 'invite', hook: 'SAy SO, Invite them to the party', hookKind: 'general' },
  { id: 'v-setsumeishimasu', level: 'N4', sound: 'SE-TSU-ME-I', masu: 'setsumei shimasu', japanese: 'せつめいします', english: 'explain', hook: 'SET, SUe — ME? I\'ll explain it', hookKind: 'general' },
  { id: 'v-shirabemasu', level: 'N4', sound: 'SHI-RA-BE', masu: 'shirabemasu', japanese: 'しらべます', english: 'investigate', hook: 'SHIva\'s RAdiance BEam sweeps the fog — investigate', hookKind: 'dota' },
  { id: 'v-tanomimasu', level: 'N4', sound: 'TA-NO-MI', masu: 'tanomimasu', japanese: 'たのみます', english: 'ask for', hook: 'TAngo? NO? — MInd asking support again', hookKind: 'dota' },
  { id: 'v-tsuzukemasu', level: 'N4', sound: 'TSU-ZU-KE', masu: 'tsuzukemasu', japanese: 'つづけます', english: 'keep going', hook: 'Tinker rearms — SUre, ZUre, KEep going forever', hookKind: 'dota' },
  { id: 'v-yamemasu', level: 'N4', sound: 'YA-ME', masu: 'yamemasu', japanese: 'やめます', english: 'quit', hook: 'YA, ME? — I quit, gg', hookKind: 'dota' },

  // ===== N3 =====
  { id: 'v-akiramemasu', level: 'N3', sound: 'A-KI-RA', masu: 'akiramemasu', japanese: 'あきらめます', english: 'forfeit', hook: 'AFK + RAge quit — you forfeit the game', hookKind: 'dota' },
  { id: 'v-awatemasu', level: 'N3', sound: 'A-WA-TE', masu: 'awatemasu', japanese: 'あわてます', english: 'panic', hook: 'AWAy TEam smoked you — panic', hookKind: 'dota' },
  { id: 'v-homemasu', level: 'N3', sound: 'HO-ME', masu: 'homemasu', japanese: 'ほめます', english: 'commend', hook: 'HOld ME up — commend the support', hookKind: 'general' },
  { id: 'v-kanjimasu', level: 'N3', sound: 'KA-N-JI', masu: 'kanjimasu', japanese: 'かんじます', english: 'feel', hook: 'KAn of JElly — you feel it wobble', hookKind: 'general' },
  { id: 'v-kotowarimasu', level: 'N3', sound: 'KO-TO-WA-RI', masu: 'kotowarimasu', japanese: 'ことわります', english: 'refuse', hook: 'KOat too WARm — you refuse to wear it', hookKind: 'general' },
  { id: 'v-kurikaeshimasu', level: 'N3', sound: 'KU-RI-KA-E', masu: 'kurikaeshimasu', japanese: 'くりかえします', english: 'repeat', hook: 'KUrier RIng, KAy — Every lap the same, repeat', hookKind: 'general' },
  { id: 'v-mamorimasu', level: 'N3', sound: 'MA-MO-RI', masu: 'mamorimasu', japanese: 'まもります', english: 'protect', hook: 'MArs MOves in — protects the team', hookKind: 'dota' },
  { id: 'v-nayamimasu', level: 'N3', sound: 'NA-YA-MI', masu: 'nayamimasu', japanese: 'なやみます', english: 'worry', hook: 'No wArds, YA MIssing — you worry', hookKind: 'dota' },
  { id: 'v-sememasu', level: 'N3', sound: 'SE-ME', masu: 'sememasu', japanese: 'せめます', english: 'attack', hook: 'SVen SEnds ME in — attack', hookKind: 'dota' },
  { id: 'v-shinjimasu', level: 'N3', sound: 'SHI-N-JI', masu: 'shinjimasu', japanese: 'しんじます', english: 'believe', hook: 'Spirit breaker charges blind — SHIeld oN, he believes', hookKind: 'dota' },
  { id: 'v-sodatemasu', level: 'N3', sound: 'SO-DA-TE', masu: 'sodatemasu', japanese: 'そだてます', english: 'raise', hook: 'SOw the DAte TEed — raise the plant', hookKind: 'general' },
  { id: 'v-sugoshimasu', level: 'N3', sound: 'SU-GO-SHI', masu: 'sugoshimasu', japanese: 'すごします', english: 'spend time', hook: 'Spectre\'s SUper GOld farm — she spends 40 min jungling', hookKind: 'dota' },
  { id: 'v-yurushimasu', level: 'N3', sound: 'YU-RU-SHI', masu: 'yurushimasu', japanese: 'ゆるします', english: 'forgive', hook: 'YU RUined the SHIeld — but I forgive you', hookKind: 'general' },
];

/** Days in a week batch — one verb per day. */
export const WEEK_LENGTH = 7;

export function getVerbById(id: string): Verb | undefined {
  return verbs.find((v) => v.id === id);
}

/**
 * The active syllabus: the dictionary minus the verbs marked already known.
 *
 * Weeks are cut from this list rather than the raw dictionary, so skipping a
 * verb re-packs everything after it. A learner who skips three N5 words gets
 * three more real words in the same week, instead of short weeks full of holes.
 */
export function getSyllabus(knownVerbIds: readonly string[] = []): Verb[] {
  if (knownVerbIds.length === 0) return verbs;
  const known = new Set(knownVerbIds);
  return verbs.filter((v) => !known.has(v.id));
}

/** The verbs belonging to week `index` (0-based), in course order. */
export function getWeekVerbs(index: number, knownVerbIds: readonly string[] = []): Verb[] {
  const syllabus = getSyllabus(knownVerbIds);
  return syllabus.slice(index * WEEK_LENGTH, (index + 1) * WEEK_LENGTH);
}

/** Total number of complete or partial weeks the syllabus covers. */
export function getTotalWeeks(knownVerbIds: readonly string[] = []): number {
  // At least one week even when everything is known, so callers that index a
  // week always have a valid range to clamp into.
  return Math.max(1, Math.ceil(getSyllabus(knownVerbIds).length / WEEK_LENGTH));
}

/**
 * Curriculum order: N5 first, then N4, then N3. `verbs` is stored in this
 * order, so week slicing walks the levels naturally without extra sorting.
 */
export const LEVEL_ORDER: JlptLevel[] = ['N5', 'N4', 'N3'];

/** Every verb at one JLPT level, in course order. */
export function getVerbsByLevel(level: JlptLevel): Verb[] {
  return verbs.filter((v) => v.level === level);
}

/** How many verbs sit at each level. */
export function getLevelCounts(): Record<JlptLevel, number> {
  return {
    N5: getVerbsByLevel('N5').length,
    N4: getVerbsByLevel('N4').length,
    N3: getVerbsByLevel('N3').length,
  };
}

/**
 * The JLPT level a given week teaches. A week can straddle a level boundary;
 * the level of its first verb is the one reported, since that is the level the
 * week is mostly working through.
 */
export function getWeekLevel(index: number): JlptLevel | null {
  return getWeekVerbs(index)[0]?.level ?? null;
}

/**
 * Guard: the library must stay grouped in curriculum order — every N5 verb,
 * then every N4, then every N3. Week slicing is positional, so a verb filed
 * out of order would silently teach an N3 word inside week 1.
 */
function assertLevelOrder(list: Verb[]): void {
  let furthest = 0;
  for (const v of list) {
    const rank = LEVEL_ORDER.indexOf(v.level);
    if (rank < furthest) {
      throw new Error(
        `Verbs must be grouped N5 -> N4 -> N3. ${v.id} (${v.level}) appears ` +
          `after a ${LEVEL_ORDER[furthest]} verb.`
      );
    }
    furthest = rank;
  }
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
assertLevelOrder(verbs);
