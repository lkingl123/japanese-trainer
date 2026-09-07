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

  { id: 'v-agarimasu', level: 'N4', sound: 'A-GA-RI', masu: 'agarimasu', japanese: '上がります', english: 'go up', hook: 'Aegis GAined, RIght up the ladder — go up', hookKind: 'dota' },
  { id: 'v-atsumarimasu', level: 'N4', sound: 'A-TSU-MA-RI', masu: 'atsumarimasu', japanese: '集まります', english: 'gather (intr)', hook: 'All TSUpports MAke the RIver — they gather', hookKind: 'dota' },
  { id: 'v-atsumemasu', level: 'N4', sound: 'A-TSU-ME', masu: 'atsumemasu', japanese: '集めます', english: 'collect', hook: 'All TSUpports, ME too — collect the wards', hookKind: 'dota' },
  { id: 'v-fuemasu', level: 'N4', sound: 'FU-E', masu: 'fuemasu', japanese: '増えます', english: 'increase', hook: 'FUrion\'s Everywhere — the treants increase', hookKind: 'dota' },
  { id: 'v-fumimasu', level: 'N4', sound: 'FU-MI', masu: 'fumimasu', japanese: '踏みます', english: 'step on', hook: 'FUry MIne — you step on it', hookKind: 'dota' },
  { id: 'v-furidashimasu', level: 'N4', sound: 'FU-RI-DA-SHI', masu: 'furidashimasu', japanese: '降り出します', english: 'start raining', hook: 'FUry RIses, DArk SHIes — it starts raining', hookKind: 'general' },
  { id: 'v-futorimasu', level: 'N4', sound: 'FU-TO-RI', masu: 'futorimasu', japanese: '太ります', english: 'gain weight', hook: 'FUll TOast, RIce too — you gain weight', hookKind: 'general' },
  { id: 'v-ganbarimasu', level: 'N4', sound: 'GA-N-BA-RI', masu: 'ganbarimasu', japanese: '頑張ります', english: 'do one\'s best', hook: 'GAnk oN, BAck RIght in — do your best', hookKind: 'dota' },
  { id: 'v-haraimasu', level: 'N4', sound: 'HA-RA-I', masu: 'haraimasu', japanese: '払います', english: 'pay', hook: 'HAnd over the RAnsom, I pay', hookKind: 'general' },
  { id: 'v-hiemasu', level: 'N4', sound: 'HI-E', masu: 'hiemasu', japanese: '冷えます', english: 'get cold', hook: 'HIgh Elevation — it gets cold', hookKind: 'general' },
  { id: 'v-hikarimasu', level: 'N4', sound: 'HI-KA-RI', masu: 'hikarimasu', japanese: '光ります', english: 'shine', hook: 'HIgh KArat RIng — it shines', hookKind: 'general' },
  { id: 'v-hikidashimasu', level: 'N4', sound: 'HI-KI-DA-SHI', masu: 'hikidashimasu', japanese: '引き出します', english: 'withdraw', hook: 'HIt KIosk, DAsh the cash — withdraw it', hookKind: 'general' },
  { id: 'v-hikkoshimasu', level: 'N4', sound: 'HI-KKO-SHI', masu: 'hikkoshimasu', japanese: '引っ越します', english: 'move house', hook: 'HIt the boKKO, SHIp the boxes — move house', hookKind: 'general' },
  { id: 'v-hirakimasu', level: 'N4', sound: 'HI-RA-KI', masu: 'hirakimasu', japanese: '開きます', english: 'open, hold (event)', hook: 'HIgh RAnked KIckoff — open the event', hookKind: 'dota' },
  { id: 'v-hiroimasu', level: 'N4', sound: 'HI-RO-I', masu: 'hiroimasu', japanese: '拾います', english: 'pick up', hook: 'HIgh ROad, I pick it up', hookKind: 'general' },
  { id: 'v-ijimemasu', level: 'N4', sound: 'I-JI-ME', masu: 'ijimemasu', japanese: 'いじめます', english: 'bully', hook: 'Invoker JInxes ME — he bullies', hookKind: 'dota' },
  { id: 'v-inorimasu', level: 'N4', sound: 'I-NO-RI', masu: 'inorimasu', japanese: '祈ります', english: 'pray', hook: 'I NO RIsk — so I pray', hookKind: 'general' },
  { id: 'v-irasshaimasu', level: 'N4', sound: 'I-RA-SSHA-I', masu: 'irasshaimasu', japanese: 'いらっしゃいます', english: 'be, go, come (respectful)', hook: 'I RAise the SHAde, I welcome you in', hookKind: 'general' },
  { id: 'v-isogimasu', level: 'N4', sound: 'I-SO-GI', masu: 'isogimasu', japanese: '急ぎます', english: 'hurry', hook: 'Io SOars, GIves haste — hurry', hookKind: 'dota' },
  { id: 'v-itadakimasu', level: 'N4', sound: 'I-TA-DA-KI', masu: 'itadakimasu', japanese: '頂きます', english: 'receive (humble)', hook: 'I TAke the DAgger, KIndly received', hookKind: 'general' },
  { id: 'v-itashimasu', level: 'N4', sound: 'I-TA-SHI', masu: 'itashimasu', japanese: '致します', english: 'do (humble)', hook: 'I TAke the SHIft, humbly do it', hookKind: 'general' },
  { id: 'v-kaemasu', level: 'N4', sound: 'KA-E', masu: 'kaemasu', japanese: '変えます', english: 'change (tr)', hook: 'KAy, Everything swapped — change it', hookKind: 'general' },
  { id: 'v-kamaimasu', level: 'N4', sound: 'KA-MA-I', masu: 'kamaimasu', japanese: '構います', english: 'mind, care', hook: 'KAy, MAybe I mind — or maybe not', hookKind: 'general' },
  { id: 'v-kamimasu', level: 'N4', sound: 'KA-MI', masu: 'kamimasu', japanese: '噛みます', english: 'bite, chew', hook: 'KAy, MInce it — you bite and chew', hookKind: 'general' },
  { id: 'v-kangaemasu', level: 'N4', sound: 'KA-N-GA-E', masu: 'kangaemasu', japanese: '考えます', english: 'think, consider', hook: 'KAos kNight GAnks — Everyone thinks first', hookKind: 'dota' },
  { id: 'v-katazukemasu', level: 'N4', sound: 'KA-TA-ZU-KE', masu: 'katazukemasu', japanese: '片付けます', english: 'tidy up', hook: 'KAy, TAke the ZUne, KEep it tidy', hookKind: 'general' },
  { id: 'v-kawakimasu', level: 'N4', sound: 'KA-WA-KI', masu: 'kawakimasu', japanese: '乾きます', english: 'dry', hook: 'KAy, WAter KIcked off — it dries', hookKind: 'general' },
  { id: 'v-kawarimasu', level: 'N4', sound: 'KA-WA-RI', masu: 'kawarimasu', japanese: '変わります', english: 'change (intr)', hook: 'KAy, WAve RIses — the lane changes', hookKind: 'dota' },
  { id: 'v-kayoimasu', level: 'N4', sound: 'KA-YO-I', masu: 'kayoimasu', japanese: '通います', english: 'commute', hook: 'KAy, YOu and I commute to lane', hookKind: 'general' },
  { id: 'v-kazarimasu', level: 'N4', sound: 'KA-ZA-RI', masu: 'kazarimasu', japanese: '飾ります', english: 'decorate', hook: 'KAy, ZAp the RIm with lights — decorate', hookKind: 'general' },
  { id: 'v-kikoemasu', level: 'N4', sound: 'KI-KO-E', masu: 'kikoemasu', japanese: '聞こえます', english: 'be audible', hook: 'KIll on KOurier — Everyone can hear it', hookKind: 'dota' },
  { id: 'v-kimarimasu', level: 'N4', sound: 'KI-MA-RI', masu: 'kimarimasu', japanese: '決まります', english: 'be decided', hook: 'KIll MArgin RIght there — it is decided', hookKind: 'dota' },
  { id: 'v-komimasu', level: 'N4', sound: 'KO-MI', masu: 'komimasu', japanese: '込みます', english: 'be crowded', hook: 'KOurier MInes the lane — it gets crowded', hookKind: 'dota' },
  { id: 'v-kowaremasu', level: 'N4', sound: 'KO-WA-RE', masu: 'kowaremasu', japanese: '壊れます', english: 'be broken', hook: 'KOurier WAs REkt — it is broken', hookKind: 'dota' },
  { id: 'v-kudasaimasu', level: 'N4', sound: 'KU-DA-SA-I', masu: 'kudasaimasu', japanese: '下さいます', english: 'give (respectful)', hook: 'KUrier DAshes, SAys here, I give it to you', hookKind: 'general' },
  { id: 'v-kurabemasu', level: 'N4', sound: 'KU-RA-BE', masu: 'kurabemasu', japanese: '比べます', english: 'compare', hook: 'KUrier RAce, BEst one wins — compare', hookKind: 'dota' },
  { id: 'v-kuremasu', level: 'N4', sound: 'KU-RE', masu: 'kuremasu', japanese: 'くれます', english: 'give (to me)', hook: 'KUrier REaches me — he gives it to me', hookKind: 'dota' },
  { id: 'v-machigaemasu', level: 'N4', sound: 'MA-CHI-GA-E', masu: 'machigaemasu', japanese: '間違えます', english: 'make a mistake', hook: 'MAgnus CHIlls, GAnks Early — a mistake', hookKind: 'dota' },
  { id: 'v-mairimasu', level: 'N4', sound: 'MA-I-RI', masu: 'mairimasu', japanese: '参ります', english: 'go, come (humble)', hook: 'MAy I RIse and humbly come', hookKind: 'general' },
  { id: 'v-maniaimasu', level: 'N4', sound: 'MA-NI-A-I', masu: 'maniaimasu', japanese: '間に合います', english: 'be in time', hook: 'MAgnus NIcks the Arrow, I made it in time', hookKind: 'dota' },
  { id: 'v-mawarimasu', level: 'N4', sound: 'MA-WA-RI', masu: 'mawarimasu', japanese: '回ります', english: 'go around', hook: 'MAgnus WArps aRound — he goes around', hookKind: 'dota' },
  { id: 'v-meshiagarimasu', level: 'N4', sound: 'ME-SHI-A-GA', masu: 'meshiagarimasu', japanese: '召し上がります', english: 'eat (respectful)', hook: 'ME? SHIeld And GAme — please eat first', hookKind: 'general' },
  { id: 'v-miemasu', level: 'N4', sound: 'MI-E', masu: 'miemasu', japanese: '見えます', english: 'be visible', hook: 'MIrana\'s Eye — she is visible', hookKind: 'dota' },
  { id: 'v-mitsukarimasu', level: 'N4', sound: 'MI-TSU-KA-RI', masu: 'mitsukarimasu', japanese: '見つかります', english: 'be found', hook: 'MIrana\'s TSUnami KAme RIght — you are found', hookKind: 'dota' },
  { id: 'v-modorimasu', level: 'N4', sound: 'MO-DO-RI', masu: 'modorimasu', japanese: '戻ります', english: 'go back', hook: 'MOre DOts, RIght back to base — return', hookKind: 'dota' },
  { id: 'v-moushiagemasu', level: 'N4', sound: 'MO-U-SHI-A', masu: 'moushiagemasu', japanese: '申し上げます', english: 'state respectfully', hook: 'MOre Ur SHIeld, humbly I say it', hookKind: 'general' },
  { id: 'v-moushimasu', level: 'N4', sound: 'MO-U-SHI', masu: 'moushimasu', japanese: '申します', english: 'say (humble)', hook: 'MOre Ur SHIft — humbly, I say', hookKind: 'general' },
  { id: 'v-mukaemasu', level: 'N4', sound: 'MU-KA-E', masu: 'mukaemasu', japanese: '迎えます', english: 'greet, meet', hook: 'MUst KAtch and grEet them at the gate', hookKind: 'general' },
  { id: 'v-mukaimasu', level: 'N4', sound: 'MU-KA-I', masu: 'mukaimasu', japanese: '向かいます', english: 'head towards', hook: 'MUst KAge, I head towards mid', hookKind: 'dota' },
  { id: 'v-nagemasu', level: 'N4', sound: 'NA-GE', masu: 'nagemasu', japanese: '投げます', english: 'throw', hook: 'NAga GEts the spear off — she throws', hookKind: 'dota' },
  { id: 'v-nakunarimasu', level: 'N4', sound: 'NA-KU-NA-RI', masu: 'nakunarimasu', japanese: '亡くなります', english: 'pass away', hook: 'NAga KUt, NAught RIses — he passed away', hookKind: 'dota' },
  { id: 'v-naorimasu', level: 'N4', sound: 'NA-O-RI', masu: 'naorimasu', japanese: '治ります', english: 'be cured', hook: 'NAil Off, RIght as rain — it is cured', hookKind: 'general' },
  { id: 'v-naremasu', level: 'N4', sound: 'NA-RE', masu: 'naremasu', japanese: '慣れます', english: 'get used to', hook: 'NAga REpeats — you get used to it', hookKind: 'dota' },
  { id: 'v-nasaimasu', level: 'N4', sound: 'NA-SA-I', masu: 'nasaimasu', japanese: 'なさいます', english: 'do (respectful)', hook: 'NAga SAys so, I respectfully do it', hookKind: 'general' },
  { id: 'v-nemurimasu', level: 'N4', sound: 'NE-MU-RI', masu: 'nemurimasu', japanese: '眠ります', english: 'fall asleep', hook: 'NEed MUte, RIght — you want to sleep', hookKind: 'general' },
  { id: 'v-nimasu', level: 'N4', sound: 'NI', masu: 'nimasu', japanese: '似ます', english: 'resemble', hook: 'NIght stalker at NIght — they resemble', hookKind: 'dota' },
  { id: 'v-nokorimasu', level: 'N4', sound: 'NO-KO-RI', masu: 'nokorimasu', japanese: '残ります', english: 'remain', hook: 'NO KOurier, RIght there — one remains', hookKind: 'dota' },
  { id: 'v-norikaemasu', level: 'N4', sound: 'NO-RI-KA-E', masu: 'norikaemasu', japanese: '乗り換えます', english: 'transfer (trains)', hook: 'NO RIde? KAtch the nExt one — transfer', hookKind: 'general' },
  { id: 'v-nuremasu', level: 'N4', sound: 'NU-RE', masu: 'nuremasu', japanese: '濡れます', english: 'get wet', hook: 'NUke in the REef — you get wet', hookKind: 'general' },
  { id: 'v-nurimasu', level: 'N4', sound: 'NU-RI', masu: 'nurimasu', japanese: '塗ります', english: 'paint', hook: 'NUdge the RIm with a brush — paint it', hookKind: 'general' },
  { id: 'v-ochimasu', level: 'N4', sound: 'O-CHI', masu: 'ochimasu', japanese: '落ちます', english: 'fall', hook: 'Over the CHIff — you fall', hookKind: 'general' },
  { id: 'v-odorimasu', level: 'N4', sound: 'O-DO-RI', masu: 'odorimasu', japanese: '踊ります', english: 'dance', hook: 'Ogre DOes the RIver dance', hookKind: 'dota' },
  { id: 'v-odorokimasu', level: 'N4', sound: 'O-DO-RO-KI', masu: 'odorokimasu', japanese: '驚きます', english: 'be surprised', hook: 'Ogre DOes a ROshan KIll — you are surprised', hookKind: 'dota' },
  { id: 'v-okonaimasu', level: 'N4', sound: 'O-KO-NA-I', masu: 'okonaimasu', japanese: '行います', english: 'carry out', hook: 'Omni KOmmands, NAga And I carry it out', hookKind: 'dota' },
  { id: 'v-okorimasu', level: 'N4', sound: 'O-KO-RI', masu: 'okorimasu', japanese: '怒ります', english: 'get angry', hook: 'Omni KOurier RIpped — he gets angry', hookKind: 'dota' },
  { id: 'v-okoshimasu', level: 'N4', sound: 'O-KO-SHI', masu: 'okoshimasu', japanese: '起こします', english: 'wake, cause', hook: 'Omni KOurier SHIpped — wake him, cause it', hookKind: 'dota' },
  { id: 'v-okuremasu', level: 'N4', sound: 'O-KU-RE', masu: 'okuremasu', japanese: '遅れます', english: 'be late', hook: 'Omni KUrier REtreats — he is late', hookKind: 'dota' },
  { id: 'v-omoidashimasu', level: 'N4', sound: 'O-MO-I-DA', masu: 'omoidashimasu', japanese: '思い出します', english: 'recall', hook: 'Obs ward, MOre Info, DAwns on you — recall', hookKind: 'dota' },
  { id: 'v-omoimasu', level: 'N4', sound: 'O-MO-I', masu: 'omoimasu', japanese: '思います', english: 'think', hook: 'Obs ward, MOre Info — you think', hookKind: 'dota' },
  { id: 'v-oremasu', level: 'N4', sound: 'O-RE', masu: 'oremasu', japanese: '折れます', english: 'break, snap', hook: 'Orchid REnt in half — it snaps', hookKind: 'dota' },
  { id: 'v-osshaimasu', level: 'N4', sound: 'O-SSHA-I', masu: 'osshaimasu', japanese: 'おっしゃいます', english: 'say (respectful)', hook: 'Oracle SHAres — I respectfully say it', hookKind: 'dota' },
  { id: 'v-otoshimasu', level: 'N4', sound: 'O-TO-SHI', masu: 'otoshimasu', japanese: '落とします', english: 'drop', hook: 'Off the TOwer, SHIeld dropped', hookKind: 'dota' },
  { id: 'v-sagarimasu', level: 'N4', sound: 'SA-GA-RI', masu: 'sagarimasu', japanese: '下がります', english: 'go down', hook: 'SAfe lane GAnked, RIght down — go down', hookKind: 'dota' },
  { id: 'v-sagemasu', level: 'N4', sound: 'SA-GE', masu: 'sagemasu', japanese: '下げます', english: 'lower', hook: 'SAge GEts it down — lower it', hookKind: 'general' },
  { id: 'v-sashiagemasu', level: 'N4', sound: 'SA-SHI-A-GE', masu: 'sashiagemasu', japanese: '差し上げます', english: 'give (humble)', hook: 'SAy SHIeld And GEt it — humbly I give', hookKind: 'general' },
  { id: 'v-sawagimasu', level: 'N4', sound: 'SA-WA-GI', masu: 'sawagimasu', japanese: '騒ぎます', english: 'make noise', hook: 'SAy WArd, GIve noise — everyone makes noise', hookKind: 'dota' },
  { id: 'v-sawarimasu', level: 'N4', sound: 'SA-WA-RI', masu: 'sawarimasu', japanese: '触ります', english: 'touch', hook: 'SAy WArd, RIght here — touch it', hookKind: 'dota' },
  { id: 'v-shikarimasu', level: 'N4', sound: 'SHI-KA-RI', masu: 'shikarimasu', japanese: '叱ります', english: 'scold', hook: 'SHIeld KAput, RIght — you scold him', hookKind: 'dota' },
  { id: 'v-shirasemasu', level: 'N4', sound: 'SHI-RA-SE', masu: 'shirasemasu', japanese: '知らせます', english: 'notify', hook: 'SHIeld RAised, SEnd word — notify', hookKind: 'dota' },
  { id: 'v-suberimasu', level: 'N4', sound: 'SU-BE-RI', masu: 'suberimasu', japanese: '滑ります', english: 'slip, slide', hook: 'SUre, BEnd the RIver ice — you slip', hookKind: 'general' },
  { id: 'v-sugimasu', level: 'N4', sound: 'SU-GI', masu: 'sugimasu', japanese: '過ぎます', english: 'exceed', hook: 'SUre, GIve more — that exceeds it', hookKind: 'general' },
  { id: 'v-susumimasu', level: 'N4', sound: 'SU-SU-MI', masu: 'susumimasu', japanese: '進みます', english: 'advance', hook: 'SUre, SUpport MId — advance together', hookKind: 'dota' },
  { id: 'v-sutemasu', level: 'N4', sound: 'SU-TE', masu: 'sutemasu', japanese: '捨てます', english: 'throw away', hook: 'SUre, TEar it up — throw it away', hookKind: 'general' },
  { id: 'v-tanoshimimasu', level: 'N4', sound: 'TA-NO-SHI-MI', masu: 'tanoshimimasu', japanese: '楽しみます', english: 'enjoy', hook: 'TAngo? NO? SHIeld ME — still enjoy it', hookKind: 'dota' },
  { id: 'v-taoremasu', level: 'N4', sound: 'TA-O-RE', masu: 'taoremasu', japanese: '倒れます', english: 'collapse', hook: 'TAken Out, REeling — he collapses', hookKind: 'dota' },
  { id: 'v-tarimasu', level: 'N4', sound: 'TA-RI', masu: 'tarimasu', japanese: '足ります', english: 'be enough', hook: 'TAngo RIght here — that is enough', hookKind: 'dota' },
  { id: 'v-tashimasu', level: 'N4', sound: 'TA-SHI', masu: 'tashimasu', japanese: '足します', english: 'add', hook: 'TAke a SHIeld more — add it on', hookKind: 'dota' },
  { id: 'v-tatemasu', level: 'N4', sound: 'TA-TE', masu: 'tatemasu', japanese: '建てます', english: 'build', hook: 'TAke the TEnt up — build it', hookKind: 'general' },
  { id: 'v-tazunemasu', level: 'N4', sound: 'TA-ZU-NE', masu: 'tazunemasu', japanese: '尋ねます', english: 'ask', hook: 'TAke the ZUne — NEed to ask about it', hookKind: 'general' },
  { id: 'v-todokemasu', level: 'N4', sound: 'TO-DO-KE', masu: 'todokemasu', japanese: '届けます', english: 'deliver', hook: 'TOwer DOwn, KOurier delivers', hookKind: 'dota' },
  { id: 'v-tomemasu', level: 'N4', sound: 'TO-ME', masu: 'tomemasu', japanese: '止めます', english: 'stop (tr)', hook: 'TOwer stops ME — stop it', hookKind: 'dota' },
  { id: 'v-toorimasu', level: 'N4', sound: 'TO-O-RI', masu: 'toorimasu', japanese: '通ります', english: 'pass through', hook: 'TOwer Off, RIght through — pass through', hookKind: 'dota' },
  { id: 'v-torikaemasu', level: 'N4', sound: 'TO-RI-KA-E', masu: 'torikaemasu', japanese: '取り替えます', english: 'exchange', hook: 'TOwer RIng, KAy, Exchange it', hookKind: 'general' },
  { id: 'v-tsukamaemasu', level: 'N4', sound: 'TSU-KA-MA-E', masu: 'tsukamaemasu', japanese: '捕まえます', english: 'catch', hook: 'TSUpport KAtches MAgnus — Early catch', hookKind: 'dota' },
  { id: 'v-tsuremasu', level: 'N4', sound: 'TSU-RE', masu: 'tsuremasu', japanese: '連れます', english: 'take along', hook: 'TSUpport REady — take him along', hookKind: 'dota' },
  { id: 'v-tsurimasu', level: 'N4', sound: 'TSU-RI', masu: 'tsurimasu', japanese: '釣ります', english: 'fish', hook: 'TSUnami RIver — you go fishing', hookKind: 'general' },
  { id: 'v-tsutaemasu', level: 'N4', sound: 'TSU-TA-E', masu: 'tsutaemasu', japanese: '伝えます', english: 'convey', hook: 'TSUpport TAlks — Everyone gets the message', hookKind: 'dota' },
  { id: 'v-tsutsumimasu', level: 'N4', sound: 'TSU-TSU-MI', masu: 'tsutsumimasu', japanese: '包みます', english: 'wrap', hook: 'TSUpport TSUpport ME — they wrap around', hookKind: 'dota' },
  { id: 'v-tsuzukimasu', level: 'N4', sound: 'TSU-ZU-KI', masu: 'tsuzukimasu', japanese: '続きます', english: 'continue (intr)', hook: 'TSUnami ZUms on, KIcks again — it continues', hookKind: 'dota' },
  { id: 'v-uchimasu', level: 'N4', sound: 'U-CHI', masu: 'uchimasu', japanese: '打ちます', english: 'hit', hook: 'Ursa CHIps in — he hits', hookKind: 'dota' },
  { id: 'v-uemasu', level: 'N4', sound: 'U-E', masu: 'uemasu', japanese: '植えます', english: 'plant', hook: 'Ursa Eats the sapling — plant another', hookKind: 'general' },
  { id: 'v-ugokimasu', level: 'N4', sound: 'U-GO-KI', masu: 'ugokimasu', japanese: '動きます', english: 'move (intr)', hook: 'Ursa GOes, KIcks off — he moves', hookKind: 'dota' },
  { id: 'v-ukagaimasu', level: 'N4', sound: 'U-KA-GA-I', masu: 'ukagaimasu', japanese: '伺います', english: 'visit, ask (humble)', hook: 'Ur KAge GAte — I humbly visit and ask', hookKind: 'general' },
  { id: 'v-uketorimasu', level: 'N4', sound: 'U-KE-TO-RI', masu: 'uketorimasu', japanese: '受け取ります', english: 'accept delivery', hook: 'Ursa KEeps the TOwer RIng — he receives it', hookKind: 'dota' },
  { id: 'v-utsurimasu', level: 'N4', sound: 'U-TSU-RI', masu: 'utsurimasu', japanese: '移ります', english: 'move, shift', hook: 'Ursa TSUrns the RIver — he moves, shifts', hookKind: 'dota' },
  { id: 'v-utsushimasu', level: 'N4', sound: 'U-TSU-SHI', masu: 'utsushimasu', japanese: '写します', english: 'copy, photograph', hook: 'Ursa TSUnami SHOt — copy, photograph it', hookKind: 'dota' },
  { id: 'v-wakaremasu', level: 'N4', sound: 'WA-KA-RE', masu: 'wakaremasu', japanese: '別れます', english: 'part, separate', hook: 'WArd KAput, REtreat apart — you separate', hookKind: 'dota' },
  { id: 'v-wakashimasu', level: 'N4', sound: 'WA-KA-SHI', masu: 'wakashimasu', japanese: '沸かします', english: 'boil (tr)', hook: 'WAter KAn, SHIeld the flame — boil it', hookKind: 'general' },
  { id: 'v-wakimasu', level: 'N4', sound: 'WA-KI', masu: 'wakimasu', japanese: '沸きます', english: 'boil (intr)', hook: 'WAter KIcks up — it boils', hookKind: 'general' },
  { id: 'v-waraimasu', level: 'N4', sound: 'WA-RA-I', masu: 'waraimasu', japanese: '笑います', english: 'laugh', hook: 'WArd RAge, I laugh at it', hookKind: 'dota' },
  { id: 'v-waremasu', level: 'N4', sound: 'WA-RE', masu: 'waremasu', japanese: '割れます', english: 'break (intr)', hook: 'WArd REkt — it breaks', hookKind: 'dota' },
  { id: 'v-yakemasu', level: 'N4', sound: 'YA-KE', masu: 'yakemasu', japanese: '焼けます', english: 'be baked, burn', hook: 'YA, KEttle too hot — it burns', hookKind: 'general' },
  { id: 'v-yakimasu', level: 'N4', sound: 'YA-KI', masu: 'yakimasu', japanese: '焼きます', english: 'bake, grill', hook: 'YA, KIck the grill on — bake it', hookKind: 'general' },
  { id: 'v-yamimasu', level: 'N4', sound: 'YA-MI', masu: 'yamimasu', japanese: '止みます', english: 'cease', hook: 'YA, MInus the rain — it ceases', hookKind: 'general' },
  { id: 'v-yasemasu', level: 'N4', sound: 'YA-SE', masu: 'yasemasu', japanese: '痩せます', english: 'lose weight', hook: 'YA, SEt the diet — lose weight', hookKind: 'general' },
  { id: 'v-yogoremasu', level: 'N4', sound: 'YO-GO-RE', masu: 'yogoremasu', japanese: '汚れます', english: 'get dirty', hook: 'YOu GO in the REef — you get dirty', hookKind: 'general' },
  { id: 'v-yorimasu', level: 'N4', sound: 'YO-RI', masu: 'yorimasu', japanese: '寄ります', english: 'drop by', hook: 'YO, RIght by here — drop by', hookKind: 'general' },
  { id: 'v-yorokobimasu', level: 'N4', sound: 'YO-RO-KO-BI', masu: 'yorokobimasu', japanese: '喜びます', english: 'be delighted', hook: 'YO! ROshan KOurier BIg win — delighted', hookKind: 'dota' },
  { id: 'v-yuremasu', level: 'N4', sound: 'YU-RE', masu: 'yuremasu', japanese: '揺れます', english: 'shake', hook: 'YU REel — it shakes', hookKind: 'general' },
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
  { id: 'v-aishimasu', level: 'N3', sound: 'A-I', masu: 'ai shimasu', japanese: 'あいします', english: 'love', hook: 'Anti-mage And I — that is love', hookKind: 'dota' },
  { id: 'v-aisatsushimasu', level: 'N3', sound: 'A-I-SA-TSU', masu: 'aisatsu shimasu', japanese: 'あいさつします', english: 'greet', hook: 'Anti-mage And I SAy TSUp — a greeting', hookKind: 'dota' },
  { id: 'v-arawaremasu', level: 'N3', sound: 'A-RA-WA-RE', masu: 'arawaremasu', japanese: 'あらわれます', english: 'appear', hook: 'Aegis RAce, WArd REveals — they appear', hookKind: 'dota' },
  { id: 'v-arawashimasu', level: 'N3', sound: 'A-RA-WA-SHI', masu: 'arawashimasu', japanese: 'あらわします', english: 'express', hook: 'Aegis RAge, WArd SHOwn — express it', hookKind: 'dota' },
  { id: 'v-ataemasu', level: 'N3', sound: 'A-TA-E', masu: 'ataemasu', japanese: 'あたえます', english: 'grant', hook: 'Abaddon TAkes it, thEn gives it away', hookKind: 'dota' },
  { id: 'v-atarimasu', level: 'N3', sound: 'A-TA-RI', masu: 'atarimasu', japanese: 'あたります', english: 'be hit', hook: 'Arrow TAken, RIght on — you are hit', hookKind: 'dota' },
  { id: 'v-atemasu', level: 'N3', sound: 'A-TE', masu: 'atemasu', japanese: 'あてます', english: 'strike a target', hook: 'Arrow TEes off — it hits', hookKind: 'dota' },
  { id: 'v-atsukaimasu', level: 'N3', sound: 'A-TSU-KA-I', masu: 'atsukaimasu', japanese: 'あつかいます', english: 'treat', hook: 'All TSUpports KAre — I treat them well', hookKind: 'dota' },
  { id: 'v-awasemasu', level: 'N3', sound: 'A-WA-SE', masu: 'awasemasu', japanese: 'あわせます', english: 'combine', hook: 'Aegis, WArd, SEt together — combine', hookKind: 'dota' },
  { id: 'v-azukemasu', level: 'N3', sound: 'A-ZU-KE', masu: 'azukemasu', japanese: 'あずけます', english: 'deposit with', hook: 'Aegis ZUne KEpt safe — entrust it', hookKind: 'dota' },
  { id: 'v-basshimasu', level: 'N3', sound: 'BA-SSHI', masu: 'basshimasu', japanese: 'ばっします', english: 'punish', hook: 'BAn and SHIp him out — punish', hookKind: 'dota' },
  { id: 'v-benkyoushimasu', level: 'N3', sound: 'BE-N-KYO', masu: 'benkyou shimasu', japanese: 'べんきょうします', english: 'study', hook: 'BEst oN the KaraYOke of replays — study', hookKind: 'general' },
  { id: 'v-buchimasu', level: 'N3', sound: 'BU-CHI', masu: 'buchimasu', japanese: 'ぶちます', english: 'whack', hook: 'BUlldoze the CHIn — you hit him', hookKind: 'general' },
  { id: 'v-damarimasu', level: 'N3', sound: 'DA-MA-RI', masu: 'damarimasu', japanese: 'だまります', english: 'be silent', hook: 'DAzzle MAkes the RIver quiet — be silent', hookKind: 'dota' },
  { id: 'v-deaimasu', level: 'N3', sound: 'DE-A-I', masu: 'deaimasu', japanese: 'であいます', english: 'meet by chance', hook: 'DEep in the jungle, And I meet you by chance', hookKind: 'dota' },
  { id: 'v-egakimasu', level: 'N3', sound: 'E-GA-KI', masu: 'egakimasu', japanese: 'えがきます', english: 'draw', hook: 'Enigma GAve the KIt a sketch — draw', hookKind: 'dota' },
  { id: 'v-emasu', level: 'N3', sound: 'E', masu: 'emasu', japanese: 'えます', english: 'obtain', hook: 'Enigma\'s Eaten black hole gold — obtain', hookKind: 'dota' },
  { id: 'v-fukumimasu', level: 'N3', sound: 'FU-KU-MI', masu: 'fukumimasu', japanese: 'ふくみます', english: 'contain', hook: 'FUll KUp, MIxed in — it contains', hookKind: 'general' },
  { id: 'v-furemasu', level: 'N3', sound: 'FU-RE', masu: 'furemasu', japanese: 'ふれます', english: 'brush against', hook: 'FUry REaches out — he touches it', hookKind: 'dota' },
  { id: 'v-furuemasu', level: 'N3', sound: 'FU-RU-E', masu: 'furuemasu', japanese: 'ふるえます', english: 'shiver', hook: 'FUll RUn in the Ether — you shiver', hookKind: 'general' },
  { id: 'v-fusegimasu', level: 'N3', sound: 'FU-SE-GI', masu: 'fusegimasu', japanese: 'ふせぎます', english: 'defend', hook: 'FUry SEts the GIant wall — defend', hookKind: 'dota' },
  { id: 'v-habukimasu', level: 'N3', sound: 'HA-BU-KI', masu: 'habukimasu', japanese: 'はぶきます', english: 'omit', hook: 'HAve BUt one KIt — omit the rest', hookKind: 'general' },
  { id: 'v-hakarimasu', level: 'N3', sound: 'HA-KA-RI', masu: 'hakarimasu', japanese: 'はかります', english: 'measure', hook: 'HAnd the KAliper RIght — measure it', hookKind: 'general' },
  { id: 'v-hanashiaimasu', level: 'N3', sound: 'HA-NA-SHI-A', masu: 'hanashiaimasu', japanese: 'はなしあいます', english: 'discuss', hook: 'HAve NAga SHIeld? All discuss it', hookKind: 'dota' },
  { id: 'v-hazushimasu', level: 'N3', sound: 'HA-ZU-SHI', masu: 'hazushimasu', japanese: 'はずします', english: 'unfasten', hook: 'HAve the ZUne SHIeld off — unfasten it', hookKind: 'general' },
  { id: 'v-herashimasu', level: 'N3', sound: 'HE-RA-SHI', masu: 'herashimasu', japanese: 'へらします', english: 'reduce', hook: 'HEal RAte SHIed down — reduce it', hookKind: 'general' },
  { id: 'v-herimasu', level: 'N3', sound: 'HE-RI', masu: 'herimasu', japanese: 'へります', english: 'decrease', hook: 'HEalth RIver drops — it decreases', hookKind: 'dota' },
  { id: 'v-hipparimasu', level: 'N3', sound: 'HI-PPA-RI', masu: 'hipparimasu', japanese: 'ひっぱります', english: 'tug', hook: 'HIt the PPArt of the RIver — pull the creeps', hookKind: 'dota' },
  { id: 'v-hirogarimasu', level: 'N3', sound: 'HI-RO-GA-RI', masu: 'hirogarimasu', japanese: 'ひろがります', english: 'spread', hook: 'HIgh ROshan GAme RIsing — word spreads', hookKind: 'dota' },
  { id: 'v-hoemasu', level: 'N3', sound: 'HO-E', masu: 'hoemasu', japanese: 'ほえます', english: 'bark', hook: 'HOund Everywhere — it barks', hookKind: 'general' },
  { id: 'v-hohoemimasu', level: 'N3', sound: 'HO-HO-E-MI', masu: 'hohoemimasu', japanese: 'ほほえみます', english: 'smile', hook: 'HO HO! Everyone MIrth — a smile', hookKind: 'general' },
  { id: 'v-housoushimasu', level: 'N3', sound: 'HO-U-SO', masu: 'housou shimasu', japanese: 'ほうそうします', english: 'broadcast', hook: 'HOw Ur SOlo went — broadcast it', hookKind: 'dota' },
  { id: 'v-idakimasu', level: 'N3', sound: 'I-DA-KI', masu: 'idakimasu', japanese: 'いだきます', english: 'embrace', hook: 'Io DAshes, KIndly embraces you', hookKind: 'dota' },
  { id: 'v-itarimasu', level: 'N3', sound: 'I-TA-RI', masu: 'itarimasu', japanese: 'いたります', english: 'arrive at last', hook: 'Io TAkes the RIver — he arrives', hookKind: 'dota' },
  { id: 'v-iwaimasu', level: 'N3', sound: 'I-WA-I', masu: 'iwaimasu', japanese: 'いわいます', english: 'celebrate', hook: 'I WAve, I celebrate the win', hookKind: 'general' },
  { id: 'v-kagayakimasu', level: 'N3', sound: 'KA-GA-YA-KI', masu: 'kagayakimasu', japanese: 'かがやきます', english: 'sparkle', hook: 'KAy, GAme YA KIlled it — you shine', hookKind: 'dota' },
  { id: 'v-kagirimasu', level: 'N3', sound: 'KA-GI-RI', masu: 'kagirimasu', japanese: 'かぎります', english: 'limit', hook: 'KAy, GIve the RIm a limit', hookKind: 'general' },
  { id: 'v-kakaemasu', level: 'N3', sound: 'KA-KA-E', masu: 'kakaemasu', japanese: 'かかえます', english: 'carry in arms', hook: 'KAy, KAtch it — carry it in your arms', hookKind: 'general' },
  { id: 'v-kakomimasu', level: 'N3', sound: 'KA-KO-MI', masu: 'kakomimasu', japanese: 'かこみます', english: 'surround', hook: 'KAy, KOurier MIssing — they surround it', hookKind: 'dota' },
  { id: 'v-kakuremasu', level: 'N3', sound: 'KA-KU-RE', masu: 'kakuremasu', japanese: 'かくれます', english: 'hide (intr.)', hook: 'KAge KUrls up, REady — he hides', hookKind: 'dota' },
  { id: 'v-kanashimimasu', level: 'N3', sound: 'KA-NA-SHI-MI', masu: 'kanashimimasu', japanese: 'かなしみます', english: 'be sad', hook: 'KAy, NAga SHIeld MIssing — be sad', hookKind: 'dota' },
  { id: 'v-kanshimasu', level: 'N3', sound: 'KA-N-SHI', masu: 'kanshimasu', japanese: 'かんします', english: 'concern', hook: 'KAy, oN the SHIeld — that concerns you', hookKind: 'dota' },
  { id: 'v-kasegimasu', level: 'N3', sound: 'KA-SE-GI', masu: 'kasegimasu', japanese: 'かせぎます', english: 'earn', hook: 'KAy, SEll the GIfts — earn gold', hookKind: 'dota' },
  { id: 'v-katarimasu', level: 'N3', sound: 'KA-TA-RI', masu: 'katarimasu', japanese: 'かたります', english: 'tell', hook: 'KAy, TAke the RIng story — tell it', hookKind: 'general' },
  { id: 'v-kazoemasu', level: 'N3', sound: 'KA-ZO-E', masu: 'kazoemasu', japanese: 'かぞえます', english: 'count', hook: 'KAy, ZOne Every one — count them', hookKind: 'general' },
  { id: 'v-keikakushimasu', level: 'N3', sound: 'KE-I-KA-KU', masu: 'keikaku shimasu', japanese: 'けいかくします', english: 'plan', hook: 'KEep It, KAy, KUrier route — plan it', hookKind: 'dota' },
  { id: 'v-kiniirimasu', level: 'N3', sound: 'KI-NI-I-RI', masu: 'ki ni irimasu', japanese: 'きにいります', english: 'like', hook: 'KIll NIce, I RIde it — I like that', hookKind: 'dota' },
  { id: 'v-kiraimasu', level: 'N3', sound: 'KI-RA-I', masu: 'kiraimasu', japanese: 'きらいます', english: 'hate', hook: 'KIll RAge, I hate it', hookKind: 'dota' },
  { id: 'v-kiremasu', level: 'N3', sound: 'KI-RE', masu: 'kiremasu', japanese: 'きれます', english: 'break off', hook: 'KIte REleased — the rope breaks off', hookKind: 'general' },
  { id: 'v-kizukimasu', level: 'N3', sound: 'KI-ZU-KI', masu: 'kizukimasu', japanese: 'きづきます', english: 'notice', hook: 'KIll on the ZUne, KIck — you notice', hookKind: 'dota' },
  { id: 'v-koemasu', level: 'N3', sound: 'KO-E', masu: 'koemasu', japanese: 'こえます', english: 'go beyond', hook: 'KOurier Everest — it exceeds the cliff', hookKind: 'general' },
  { id: 'v-konomimasu', level: 'N3', sound: 'KO-NO-MI', masu: 'konomimasu', japanese: 'このみます', english: 'prefer', hook: 'KOurier? NO. MId first — you prefer that', hookKind: 'dota' },
  { id: 'v-koorimasu', level: 'N3', sound: 'KO-O-RI', masu: 'koorimasu', japanese: 'こおります', english: 'freeze', hook: 'KOld Over the RIver — it freezes', hookKind: 'dota' },
  { id: 'v-korobimasu', level: 'N3', sound: 'KO-RO-BI', masu: 'korobimasu', japanese: 'ころびます', english: 'fall down', hook: 'KOurier ROlls BIg — it falls down', hookKind: 'dota' },
  { id: 'v-koroshimasu', level: 'N3', sound: 'KO-RO-SHI', masu: 'koroshimasu', japanese: 'ころします', english: 'kill', hook: 'KOurier ROshan SHIpped — killed', hookKind: 'dota' },
  { id: 'v-koshimasu', level: 'N3', sound: 'KO-SHI', masu: 'koshimasu', japanese: 'こします', english: 'go over', hook: 'KOurier SHIps the cliff — go over', hookKind: 'dota' },
  { id: 'v-koshoushimasu', level: 'N3', sound: 'KO-SHO', masu: 'koshou shimasu', japanese: 'こしょうします', english: 'break down', hook: 'KOurier SHOt down — it breaks down', hookKind: 'dota' },
  { id: 'v-kotonarimasu', level: 'N3', sound: 'KO-TO-NA-RI', masu: 'kotonarimasu', japanese: 'ことなります', english: 'be unlike', hook: 'KOurier TOwer NAga RIver — all differ', hookKind: 'dota' },
  { id: 'v-kudasarimasu', level: 'N3', sound: 'KU-DA-SA-RI', masu: 'kudasarimasu', japanese: 'くださります', english: 'give (honorific)', hook: 'KUrier DAshes, SAys RIght here, honoured gift', hookKind: 'dota' },
  { id: 'v-kumimasu', level: 'N3', sound: 'KU-MI', masu: 'kumimasu', japanese: 'くみます', english: 'assemble', hook: 'KUrier MId parts — assemble it', hookKind: 'dota' },
  { id: 'v-kurashimasu', level: 'N3', sound: 'KU-RA-SHI', masu: 'kurashimasu', japanese: 'くらします', english: 'live', hook: 'KUrier RAnch, SHIre — you live there', hookKind: 'general' },
  { id: 'v-kuruimasu', level: 'N3', sound: 'KU-RU-I', masu: 'kuruimasu', japanese: 'くるいます', english: 'go mad', hook: 'KUrier RUns wild, I go mad', hookKind: 'dota' },
  { id: 'v-kurushimimasu', level: 'N3', sound: 'KU-RU-SHI-MI', masu: 'kurushimimasu', japanese: 'くるしみます', english: 'suffer', hook: 'KUrier RUn, SHIeld MIssing — you suffer', hookKind: 'dota' },
  { id: 'v-kusarimasu', level: 'N3', sound: 'KU-SA-RI', masu: 'kusarimasu', japanese: 'くさります', english: 'rot', hook: 'KUp SAt in the RIver — it rots', hookKind: 'general' },
  { id: 'v-kuwaemasu', level: 'N3', sound: 'KU-WA-E', masu: 'kuwaemasu', japanese: 'くわえます', english: 'add on to', hook: 'KUrier WArd, plus Every one — add it', hookKind: 'dota' },
  { id: 'v-kuwawarimasu', level: 'N3', sound: 'KU-WA-WA-RI', masu: 'kuwawarimasu', japanese: 'くわわります', english: 'join in', hook: 'KUrier WArd, WAve RIses — join in', hookKind: 'dota' },
  { id: 'v-makasemasu', level: 'N3', sound: 'MA-KA-SE', masu: 'makasemasu', japanese: 'まかせます', english: 'leave it to', hook: 'MAgnus KAn, SEt him on it — entrust', hookKind: 'dota' },
  { id: 'v-manabimasu', level: 'N3', sound: 'MA-NA-BI', masu: 'manabimasu', japanese: 'まなびます', english: 'study under', hook: 'MAgnus NAils the BIg RP — you learn from it', hookKind: 'dota' },
  { id: 'v-manekimasu', level: 'N3', sound: 'MA-NE-KI', masu: 'manekimasu', japanese: 'まねきます', english: 'summon', hook: 'MAgnus NEeds a KIller — invite one', hookKind: 'dota' },
  { id: 'v-mashimasu', level: 'N3', sound: 'MA-SHI', masu: 'mashimasu', japanese: 'まします', english: 'grow greater', hook: 'MAna SHIeld grows — it increases', hookKind: 'dota' },
  { id: 'v-mawashimasu', level: 'N3', sound: 'MA-WA-SHI', masu: 'mawashimasu', japanese: 'まわします', english: 'spin', hook: 'MAgnus WArps, SHIeld spins — turn it', hookKind: 'dota' },
  { id: 'v-meijimasu', level: 'N3', sound: 'ME-I-JI', masu: 'meijimasu', japanese: 'めいじます', english: 'order', hook: 'ME? I JIngle the order — command it', hookKind: 'general' },
  { id: 'v-michimasu', level: 'N3', sound: 'MI-CHI', masu: 'michimasu', japanese: 'みちます', english: 'be full', hook: 'MIdas CHImes — the bar is full', hookKind: 'dota' },
  { id: 'v-mitomemasu', level: 'N3', sound: 'MI-TO-ME', masu: 'mitomemasu', japanese: 'みとめます', english: 'recognize', hook: 'MIrana TOld ME — I recognize it', hookKind: 'dota' },
  { id: 'v-mochiagemasu', level: 'N3', sound: 'MO-CHI-A-GE', masu: 'mochiagemasu', japanese: 'もちあげます', english: 'lift up', hook: 'MOre CHIcken, All GEt it up — lift', hookKind: 'general' },
  { id: 'v-mochiimasu', level: 'N3', sound: 'MO-CHI-I', masu: 'mochiimasu', japanese: 'もちいます', english: 'employ (a method)', hook: 'MOre CHIcken, I use it', hookKind: 'general' },
  { id: 'v-modoshimasu', level: 'N3', sound: 'MO-DO-SHI', masu: 'modoshimasu', japanese: 'もどします', english: 'return (tr.)', hook: 'MOre DOts, SHIp it back — return it', hookKind: 'dota' },
  { id: 'v-moemasu', level: 'N3', sound: 'MO-E', masu: 'moemasu', japanese: 'もえます', english: 'burn', hook: 'MOre Ember — it burns', hookKind: 'dota' },
  { id: 'v-motomemasu', level: 'N3', sound: 'MO-TO-ME', masu: 'motomemasu', japanese: 'もとめます', english: 'request', hook: 'MOre TOme for ME — request it', hookKind: 'dota' },
  { id: 'v-motozukimasu', level: 'N3', sound: 'MO-TO-ZU-KI', masu: 'motozukimasu', japanese: 'もとづきます', english: 'be based on', hook: 'MOre TOme, ZUne KIt — it is based on that', hookKind: 'dota' },
  { id: 'v-moushikomimasu', level: 'N3', sound: 'MO-U-SHI-KO', masu: 'moushikomimasu', japanese: 'もうしこみます', english: 'apply for', hook: 'MOre Ur SHIeld, KOme apply for it', hookKind: 'dota' },
  { id: 'v-mukemasu', level: 'N3', sound: 'MU-KE', masu: 'mukemasu', japanese: 'むけます', english: 'turn towards', hook: 'MUst KEep facing — turn towards it', hookKind: 'general' },
  { id: 'v-mukimasu', level: 'N3', sound: 'MU-KI', masu: 'mukimasu', japanese: 'むきます', english: 'face', hook: 'MUst KIck forward — face it', hookKind: 'general' },
  { id: 'v-musubimasu', level: 'N3', sound: 'MU-SU-BI', masu: 'musubimasu', japanese: 'むすびます', english: 'tie', hook: 'MUst SUture the BInd — tie it', hookKind: 'general' },
  { id: 'v-nagamemasu', level: 'N3', sound: 'NA-GA-ME', masu: 'nagamemasu', japanese: 'ながめます', english: 'gaze', hook: 'NAga GAzes at ME — she stares', hookKind: 'dota' },
  { id: 'v-nagaremasu', level: 'N3', sound: 'NA-GA-RE', masu: 'nagaremasu', japanese: 'ながれます', english: 'flow', hook: 'NAga\'s GAte REleases — the water flows', hookKind: 'dota' },
  { id: 'v-nagashimasu', level: 'N3', sound: 'NA-GA-SHI', masu: 'nagashimasu', japanese: 'ながします', english: 'let flow', hook: 'NAga GAte SHIfts — she lets it flow', hookKind: 'dota' },
  { id: 'v-namakemasu', level: 'N3', sound: 'NA-MA-KE', masu: 'namakemasu', japanese: 'なまけます', english: 'be idle', hook: 'NAga MAkes ME lazy — be idle', hookKind: 'dota' },
  { id: 'v-negaimasu', level: 'N3', sound: 'NE-GA-I', masu: 'negaimasu', japanese: 'ねがいます', english: 'wish', hook: 'NEed a GAnk, I wish for one', hookKind: 'dota' },
  { id: 'v-niaimasu', level: 'N3', sound: 'NI-A-I', masu: 'niaimasu', japanese: 'にあいます', english: 'suit', hook: 'NIce Armor, I say it suits you', hookKind: 'general' },
  { id: 'v-nigirimasu', level: 'N3', sound: 'NI-GI-RI', masu: 'nigirimasu', japanese: 'にぎります', english: 'grasp', hook: 'NIght GIves the RIm a grip — grasp it', hookKind: 'general' },
  { id: 'v-nobashimasu', level: 'N3', sound: 'NO-BA-SHI', masu: 'nobashimasu', japanese: 'のばします', english: 'extend (tr.)', hook: 'NO BAr? SHIft it longer — extend it', hookKind: 'general' },
  { id: 'v-nobemasu', level: 'N3', sound: 'NO-BE', masu: 'nobemasu', japanese: 'のべます', english: 'state', hook: 'NOte BEfore the vote — state it', hookKind: 'general' },
  { id: 'v-nobimasu', level: 'N3', sound: 'NO-BI', masu: 'nobimasu', japanese: 'のびます', english: 'extend (intr.)', hook: 'NO BIg deal, it stretches on its own', hookKind: 'general' },
  { id: 'v-nokoshimasu', level: 'N3', sound: 'NO-KO-SHI', masu: 'nokoshimasu', japanese: 'のこします', english: 'leave behind', hook: 'NO KOurier, SHIeld left behind', hookKind: 'dota' },
  { id: 'v-nosemasu', level: 'N3', sound: 'NO-SE', masu: 'nosemasu', japanese: 'のせます', english: 'place on', hook: 'NO, SEt it on top — place it on', hookKind: 'general' },
  { id: 'v-nozokimasu', level: 'N3', sound: 'NO-ZO-KI', masu: 'nozokimasu', japanese: 'のぞきます', english: 'remove', hook: 'NO ZOne, KIck it out — remove it', hookKind: 'general' },
  { id: 'v-nozomimasu', level: 'N3', sound: 'NO-ZO-MI', masu: 'nozomimasu', japanese: 'のぞみます', english: 'desire', hook: 'NO ZOne, MIne someday — you desire it', hookKind: 'general' },
  { id: 'v-nukemasu', level: 'N3', sound: 'NU-KE', masu: 'nukemasu', japanese: 'ぬけます', english: 'come out', hook: 'NUt KEeps sliding — it comes out', hookKind: 'general' },
  { id: 'v-nukimasu', level: 'N3', sound: 'NU-KI', masu: 'nukimasu', japanese: 'ぬきます', english: 'extract', hook: 'NUt KIcked loose — extract it', hookKind: 'general' },
  { id: 'v-nyuugakushimasu', level: 'N3', sound: 'NYUU-GA-KU', masu: 'nyuugaku shimasu', japanese: 'にゅうがくします', english: 'enter school', hook: 'NYU GAte, KUme in — enter school', hookKind: 'general' },
  { id: 'v-oboremasu', level: 'N3', sound: 'O-BO-RE', masu: 'oboremasu', japanese: 'おぼれます', english: 'drown', hook: 'Over BOard, REef below — you drown', hookKind: 'general' },
  { id: 'v-oemasu', level: 'N3', sound: 'O-E', masu: 'oemasu', japanese: 'おえます', english: 'complete', hook: 'Omnislash Ends it — finish', hookKind: 'dota' },
  { id: 'v-oimasu', level: 'N3', sound: 'O-I', masu: 'oimasu', japanese: 'おいます', english: 'chase', hook: 'Oi! I chase him down', hookKind: 'general' },
  { id: 'v-oitsukimasu', level: 'N3', sound: 'O-I-TSU-KI', masu: 'oitsukimasu', japanese: 'おいつきます', english: 'catch up', hook: 'Oi! I TSUprint, KIck in — catch up', hookKind: 'dota' },
  { id: 'v-omenikakarimasu', level: 'N3', sound: 'O-ME-NI-KA', masu: 'ome ni kakarimasu', japanese: 'おめにかかります', english: 'meet (humble)', hook: 'Oh, ME? NIce to KAtch you — humbly meet', hookKind: 'general' },
  { id: 'v-ooimasu', level: 'N3', sound: 'O-O-I', masu: 'ooimasu', japanese: 'おおいます', english: 'cover', hook: 'Over and Over, I cover it', hookKind: 'general' },
  { id: 'v-oroshimasu', level: 'N3', sound: 'O-RO-SHI', masu: 'oroshimasu', japanese: 'おろします', english: 'let down', hook: 'Off the ROof, SHIft it down — lower it', hookKind: 'general' },
  { id: 'v-osamemasu', level: 'N3', sound: 'O-SA-ME', masu: 'osamemasu', japanese: 'おさめます', english: 'store', hook: 'Obs ward, SAve it for ME — store it', hookKind: 'dota' },
  { id: 'v-osoremasu', level: 'N3', sound: 'O-SO-RE', masu: 'osoremasu', japanese: 'おそれます', english: 'fear', hook: 'Obs ward SOlo in the REef — you fear it', hookKind: 'dota' },
  { id: 'v-otorimasu', level: 'N3', sound: 'O-TO-RI', masu: 'otorimasu', japanese: 'おとります', english: 'be inferior', hook: 'Off TOwer RIght — that build is inferior', hookKind: 'dota' },
  { id: 'v-oujimasu', level: 'N3', sound: 'O-U-JI', masu: 'oujimasu', japanese: 'おうじます', english: 'respond', hook: 'Oracle Ur JIngle — he responds', hookKind: 'dota' },
  { id: 'v-oyoboshimasu', level: 'N3', sound: 'O-YO-BO-SHI', masu: 'oyoboshimasu', japanese: 'およぼします', english: 'exert', hook: 'Obs ward, YOur BOnus SHIfts — exert influence', hookKind: 'dota' },
  { id: 'v-renshuushimasu', level: 'N3', sound: 'RE-N-SHU', masu: 'renshuu shimasu', japanese: 'れんしゅうします', english: 'practice', hook: 'REpeat oN the SHUffle — practice', hookKind: 'general' },
  { id: 'v-ronjimasu', level: 'N3', sound: 'RO-N-JI', masu: 'ronjimasu', japanese: 'ろんじます', english: 'debate', hook: 'ROshan oN, JIngle the debate — discuss', hookKind: 'dota' },
  { id: 'v-sakaraimasu', level: 'N3', sound: 'SA-KA-RA-I', masu: 'sakaraimasu', japanese: 'さからいます', english: 'oppose', hook: 'SAy KAy? RAge — I oppose it', hookKind: 'general' },
  { id: 'v-sakebimasu', level: 'N3', sound: 'SA-KE-BI', masu: 'sakebimasu', japanese: 'さけびます', english: 'shout', hook: 'SAy KEen and BIg — you shout it', hookKind: 'general' },
  { id: 'v-sakemasu', level: 'N3', sound: 'SA-KE', masu: 'sakemasu', japanese: 'さけます', english: 'avoid', hook: 'SAy KEep away — avoid it', hookKind: 'general' },
  { id: 'v-samashimasu', level: 'N3', sound: 'SA-MA-SHI', masu: 'samashimasu', japanese: 'さまします', english: 'awaken (tr.)', hook: 'SAy MArning, SHIake him — awaken him', hookKind: 'general' },
  { id: 'v-samemasu', level: 'N3', sound: 'SA-ME', masu: 'samemasu', japanese: 'さめます', english: 'wake (intr.)', hook: 'SAy MOrning to ME — I wake', hookKind: 'general' },
  { id: 'v-sarimasu', level: 'N3', sound: 'SA-RI', masu: 'sarimasu', japanese: 'さります', english: 'go away', hook: 'SAy RIght, then leave', hookKind: 'general' },
  { id: 'v-shaberimasu', level: 'N3', sound: 'SHA-BE-RI', masu: 'shaberimasu', japanese: 'しゃべります', english: 'chat', hook: 'SHAre a BEer, RIff on — chat', hookKind: 'general' },
  { id: 'v-shiharaimasu', level: 'N3', sound: 'SHI-HA-RA-I', masu: 'shiharaimasu', japanese: 'しはらいます', english: 'settle a bill', hook: 'SHIeld? HAnd the RAnsom, I pay', hookKind: 'general' },
  { id: 'v-shimeshimasu', level: 'N3', sound: 'SHI-ME-SHI', masu: 'shimeshimasu', japanese: 'しめします', english: 'indicate', hook: 'SHIeld ME, SHOw them how', hookKind: 'dota' },
  { id: 'v-shitagaimasu', level: 'N3', sound: 'SHI-TA-GA-I', masu: 'shitagaimasu', japanese: 'したがいます', english: 'follow', hook: 'SHIeld TAken, GAnk on — I follow', hookKind: 'dota' },
  { id: 'v-shitakushimasu', level: 'N3', sound: 'SHI-TA-KU', masu: 'shitaku shimasu', japanese: 'したくします', english: 'prepare', hook: 'SHIeld TAken, KUrier loaded — prepare', hookKind: 'dota' },
  { id: 'v-shizumimasu', level: 'N3', sound: 'SHI-ZU-MI', masu: 'shizumimasu', japanese: 'しずみます', english: 'sink', hook: 'SHIp ZUnk in the MIre — it sinks', hookKind: 'general' },
  { id: 'v-shoujimasu', level: 'N3', sound: 'SHO-U-JI', masu: 'shoujimasu', japanese: 'しょうじます', english: 'arise', hook: 'SHOck Up, JIngle — a problem arises', hookKind: 'general' },
  { id: 'v-shuppatsushimasu', level: 'N3', sound: 'SHU-PPA-TSU', masu: 'shuppatsu shimasu', japanese: 'しゅっぱつします', english: 'depart', hook: 'SHUffle, PACk, TSUart — depart', hookKind: 'general' },
  { id: 'v-sodachimasu', level: 'N3', sound: 'SO-DA-CHI', masu: 'sodachimasu', japanese: 'そだちます', english: 'grow up', hook: 'SOil, DAys, CHIld — it grows up', hookKind: 'general' },
  { id: 'v-sonaemasu', level: 'N3', sound: 'SO-NA-E', masu: 'sonaemasu', japanese: 'そなえます', english: 'prepare for', hook: 'SOlo? NAga? Every ward — prepare for it', hookKind: 'dota' },
  { id: 'v-sosogimasu', level: 'N3', sound: 'SO-SO-GI', masu: 'sosogimasu', japanese: 'そそぎます', english: 'pour', hook: 'SO SOft, GIve it a pour', hookKind: 'general' },
  { id: 'v-suguremasu', level: 'N3', sound: 'SU-GU-RE', masu: 'suguremasu', japanese: 'すぐれます', english: 'excel', hook: 'SUper GUn, REal skill — he excels', hookKind: 'dota' },
  { id: 'v-sukimasu', level: 'N3', sound: 'SU-KI', masu: 'sukimasu', japanese: 'すきます', english: 'be empty', hook: 'SUre, KIcked everyone out — it is empty', hookKind: 'general' },
  { id: 'v-sukuimasu', level: 'N3', sound: 'SU-KU-I', masu: 'sukuimasu', japanese: 'すくいます', english: 'rescue', hook: 'SUpport KUrier, I rescue it', hookKind: 'dota' },
  { id: 'v-sumasemasu', level: 'N3', sound: 'SU-MA-SE', masu: 'sumasemasu', japanese: 'すませます', english: 'get it over with', hook: 'SUre, MAke the SEt end — finish it', hookKind: 'general' },
  { id: 'v-susumemasu', level: 'N3', sound: 'SU-SU-ME', masu: 'susumemasu', japanese: 'すすめます', english: 'push forward', hook: 'SUpport, SUpport, ME too — advance', hookKind: 'dota' },
  { id: 'v-tachiagarimasu', level: 'N3', sound: 'TA-CHI-A-GA', masu: 'tachiagarimasu', japanese: 'たちあがります', english: 'stand up', hook: 'TAke the CHIld\'s Arm, GAin your feet — stand up', hookKind: 'general' },
  { id: 'v-taishimasu', level: 'N3', sound: 'TA-I-SHI', masu: 'taishimasu', japanese: 'たいします', english: 'confront', hook: 'TAke It, SHIeld up — face him', hookKind: 'dota' },
  { id: 'v-tameshimasu', level: 'N3', sound: 'TA-ME-SHI', masu: 'tameshimasu', japanese: 'ためします', english: 'try', hook: 'TAngo? ME? SHIeld? — try it and see', hookKind: 'dota' },
  { id: 'v-taoshimasu', level: 'N3', sound: 'TA-O-SHI', masu: 'taoshimasu', japanese: 'たおします', english: 'knock down', hook: 'TAken Out, SHIeld gone — knock him down', hookKind: 'dota' },
  { id: 'v-tashikamemasu', level: 'N3', sound: 'TA-SHI-KA-ME', masu: 'tashikamemasu', japanese: 'たしかめます', english: 'ascertain', hook: 'TAke the SHIeld, KAy? Make it certain', hookKind: 'dota' },
  { id: 'v-tasshimasu', level: 'N3', sound: 'TA-SSHI', masu: 'tasshimasu', japanese: 'たっします', english: 'reach', hook: 'TAke the SHIrine — you reach it', hookKind: 'dota' },
  { id: 'v-tasukemasu', level: 'N3', sound: 'TA-SU-KE', masu: 'tasukemasu', japanese: 'たすけます', english: 'come to aid', hook: 'TAngo SUpport KEeps you up — help', hookKind: 'dota' },
  { id: 'v-tatakaimasu', level: 'N3', sound: 'TA-TA-KA-I', masu: 'tatakaimasu', japanese: 'たたかいます', english: 'fight', hook: 'TAke the TAvern, KAy? I fight for it', hookKind: 'dota' },
  { id: 'v-tatakimasu', level: 'N3', sound: 'TA-TA-KI', masu: 'tatakimasu', japanese: 'たたきます', english: 'strike', hook: 'TAke TAlent, KIck hard — strike', hookKind: 'dota' },
  { id: 'v-tayorimasu', level: 'N3', sound: 'TA-YO-RI', masu: 'tayorimasu', japanese: 'たよります', english: 'rely on', hook: 'TAngo? YOur RIng? — I rely on you', hookKind: 'dota' },
  { id: 'v-tekishimasu', level: 'N3', sound: 'TE-KI-SHI', masu: 'tekishimasu', japanese: 'てきします', english: 'fit', hook: 'TEch KIt SHIeld — it fits', hookKind: 'dota' },
  { id: 'v-tobashimasu', level: 'N3', sound: 'TO-BA-SHI', masu: 'tobashimasu', japanese: 'とばします', english: 'let fly', hook: 'TOss BAck, SHIp it — let it fly', hookKind: 'dota' },
  { id: 'v-tobidashimasu', level: 'N3', sound: 'TO-BI-DA-SHI', masu: 'tobidashimasu', japanese: 'とびだします', english: 'jump out', hook: 'TOss BIg, DAsh out — jump out', hookKind: 'dota' },
  { id: 'v-todokimasu', level: 'N3', sound: 'TO-DO-KI', masu: 'todokimasu', japanese: 'とどきます', english: 'get through to', hook: 'TOwer DOwn, KOurier arrives — it reaches', hookKind: 'dota' },
  { id: 'v-tojimasu', level: 'N3', sound: 'TO-JI', masu: 'tojimasu', japanese: 'とじます', english: 'close', hook: 'TOwer JIngle done — close it', hookKind: 'dota' },
  { id: 'v-tokemasu', level: 'N3', sound: 'TO-KE', masu: 'tokemasu', japanese: 'とけます', english: 'come untied', hook: 'TOw rope KEeps loosening — it comes untied', hookKind: 'general' },
  { id: 'v-tokimasu', level: 'N3', sound: 'TO-KI', masu: 'tokimasu', japanese: 'ときます', english: 'untie', hook: 'TOw rope KIcked free — untie it', hookKind: 'general' },
  { id: 'v-toorisugimasu', level: 'N3', sound: 'TO-O-RI-SU', masu: 'toorisugimasu', japanese: 'とおりすぎます', english: 'pass by', hook: 'TOwer Off, RIver SUrpassed — pass by', hookKind: 'dota' },
  { id: 'v-tooshimasu', level: 'N3', sound: 'TO-O-SHI', masu: 'tooshimasu', japanese: 'とおします', english: 'let pass', hook: 'TOwer Off, SHIeld through — let it pass', hookKind: 'dota' },
  { id: 'v-toremasu', level: 'N3', sound: 'TO-RE', masu: 'toremasu', japanese: 'とれます', english: 'come off', hook: 'TOwer REmoved — the plating comes off', hookKind: 'dota' },
  { id: 'v-toriagemasu', level: 'N3', sound: 'TO-RI-A-GE', masu: 'toriagemasu', japanese: 'とりあげます', english: 'take up', hook: 'TOwer RIng, All GEt it — pick it up', hookKind: 'dota' },
  { id: 'v-tsugimasu', level: 'N3', sound: 'TSU-GI', masu: 'tsugimasu', japanese: 'つぎます', english: 'top up', hook: 'TSUpport GIves a pour — fill it', hookKind: 'dota' },
  { id: 'v-tsukamarimasu', level: 'N3', sound: 'TSU-KA-MA-RI', masu: 'tsukamarimasu', japanese: 'つかまります', english: 'be caught', hook: 'TSUpport KAught, MAgnus RIps in — be caught', hookKind: 'dota' },
  { id: 'v-tsukamimasu', level: 'N3', sound: 'TSU-KA-MI', masu: 'tsukamimasu', japanese: 'つかみます', english: 'seize', hook: 'TSUpport KAtches ME — he seizes me', hookKind: 'dota' },
  { id: 'v-tsumemasu', level: 'N3', sound: 'TSU-ME', masu: 'tsumemasu', japanese: 'つめます', english: 'pack', hook: 'TSUpport ME — pack the bag', hookKind: 'dota' },
  { id: 'v-tsumorimasu', level: 'N3', sound: 'TSU-MO-RI', masu: 'tsumorimasu', japanese: 'つもります', english: 'pile up', hook: 'TSUnami MOre RIsing — it piles up', hookKind: 'general' },
  { id: 'v-tsunagimasu', level: 'N3', sound: 'TSU-NA-GI', masu: 'tsunagimasu', japanese: 'つなぎます', english: 'connect', hook: 'TSUpport NAga GIves the link — connect', hookKind: 'dota' },
  { id: 'v-tsuujimasu', level: 'N3', sound: 'TSU-U-JI', masu: 'tsuujimasu', japanese: 'つうじます', english: 'lead to', hook: 'TSUnami Up the JIngle — it leads to a win', hookKind: 'dota' },
  { id: 'v-ubaimasu', level: 'N3', sound: 'U-BA-I', masu: 'ubaimasu', japanese: 'うばいます', english: 'rob', hook: 'Ursa BAshes, I rob him', hookKind: 'dota' },
  { id: 'v-ugokashimasu', level: 'N3', sound: 'U-GO-KA-SHI', masu: 'ugokashimasu', japanese: 'うごかします', english: 'move (tr.)', hook: 'Ursa GOes, KAtch and SHIft it — move it', hookKind: 'dota' },
  { id: 'v-unarimasu', level: 'N3', sound: 'U-NA-RI', masu: 'unarimasu', japanese: 'うなります', english: 'groan', hook: 'Ursa NAils the RIver — he groans', hookKind: 'dota' },
  { id: 'v-undoushimasu', level: 'N3', sound: 'U-N-DO', masu: 'undou shimasu', japanese: 'うんどうします', english: 'exercise', hook: 'Ursa oN the DOts — exercise', hookKind: 'dota' },
  { id: 'v-uragirimasu', level: 'N3', sound: 'U-RA-GI-RI', masu: 'uragirimasu', japanese: 'うらぎります', english: 'betray', hook: 'Ursa RAges, GIves the RIval intel — betray', hookKind: 'dota' },
  { id: 'v-uremasu', level: 'N3', sound: 'U-RE', masu: 'uremasu', japanese: 'うれます', english: 'be sold', hook: 'Ursa REstocks — it is sold', hookKind: 'dota' },
  { id: 'v-ushinaimasu', level: 'N3', sound: 'U-SHI-NA-I', masu: 'ushinaimasu', japanese: 'うしないます', english: 'lose for good', hook: 'Ursa SHIeld, NAught — I lose it', hookKind: 'dota' },
  { id: 'v-utagaimasu', level: 'N3', sound: 'U-TA-GA-I', masu: 'utagaimasu', japanese: 'うたがいます', english: 'doubt', hook: 'Ursa TAkes a GAnk — I doubt it', hookKind: 'dota' },
  { id: 'v-uttaemasu', level: 'N3', sound: 'U-TTA-E', masu: 'uttaemasu', japanese: 'うったえます', english: 'appeal', hook: 'Ursa TTAkes it to Every judge — appeal', hookKind: 'dota' },
  { id: 'v-wakemasu', level: 'N3', sound: 'WA-KE', masu: 'wakemasu', japanese: 'わけます', english: 'divide', hook: 'WArd KEpt in two — divide it', hookKind: 'dota' },
  { id: 'v-warimasu', level: 'N3', sound: 'WA-RI', masu: 'warimasu', japanese: 'わります', english: 'split', hook: 'WArd RIven in half — split it', hookKind: 'dota' },
  { id: 'v-yaburimasu', level: 'N3', sound: 'YA-BU-RI', masu: 'yaburimasu', japanese: 'やぶります', english: 'tear', hook: 'YA, BUst the RIm — tear it', hookKind: 'general' },
  { id: 'v-yatoimasu', level: 'N3', sound: 'YA-TO-I', masu: 'yatoimasu', japanese: 'やといます', english: 'employ', hook: 'YA, TOp lane? I employ you', hookKind: 'dota' },
  { id: 'v-yoimasu', level: 'N3', sound: 'YO-I', masu: 'yoimasu', japanese: 'よいます', english: 'get drunk', hook: 'YO, I had too much — you get drunk', hookKind: 'general' },
  { id: 'v-yokogirimasu', level: 'N3', sound: 'YO-KO-GI-RI', masu: 'yokogirimasu', japanese: 'よこぎります', english: 'cut across', hook: 'YOu KOme, GIve the RIver a cut — cross it', hookKind: 'dota' },
  { id: 'v-yoshimasu', level: 'N3', sound: 'YO-SHI', masu: 'yoshimasu', japanese: 'よします', english: 'quit doing', hook: 'YO, SHIeld down — cease', hookKind: 'dota' },
  { id: 'v-yunyuushimasu', level: 'N3', sound: 'YU-NYU', masu: 'yunyuu shimasu', japanese: 'ゆにゅうします', english: 'import', hook: 'YU NYUdge it in — import it', hookKind: 'general' },
  { id: 'v-yushutsushimasu', level: 'N3', sound: 'YU-SHU-TSU', masu: 'yushutsu shimasu', japanese: 'ゆしゅつします', english: 'export', hook: 'YU SHUt the TSUase out — export it', hookKind: 'general' },
  { id: 'v-yuzurimasu', level: 'N3', sound: 'YU-ZU-RI', masu: 'yuzurimasu', japanese: 'ゆずります', english: 'yield to', hook: 'YU, ZUne RIght here — hand it over', hookKind: 'general' },
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
