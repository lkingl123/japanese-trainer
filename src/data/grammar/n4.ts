import { GrammarPattern } from '@/lib/types';

export const n4Grammar: GrammarPattern[] = [
  {
    id: 'n4-gram-001',
    pattern: '～てしまう (te shimau)',
    meaning: 'To do something completely / accidentally',
    jlptLevel: 'N4',
    explanation: 'Expresses that an action is done completely, or that something unfortunate or regrettable happened unintentionally. Often contracted to ~chau/~jau in casual speech.',
    structure: '[Verb te-form] + しまう',
    examples: [
      { japanese: '宿題を忘れてしまいました。', romaji: 'Shukudai wo wasurete shimaimashita.', english: 'I accidentally forgot my homework.' },
      { japanese: 'ケーキを全部食べてしまった。', romaji: 'Keeki wo zenbu tabete shimatta.', english: 'I ended up eating all the cake.' },
      { japanese: '電車に乗り遅れてしまいました。', romaji: 'Densha ni noriokurete shimaimashita.', english: 'I unfortunately missed the train.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Shukudai wo wasurete ___.', answer: 'shimaimashita', options: ['shimaimashita', 'okimashita', 'mimashita', 'agemashita'], english: 'I accidentally forgot my homework.' },
      { type: 'multiple-choice', question: 'What nuance does ~te shimau add?', options: ['Regret or completion', 'Desire', 'Permission', 'Obligation'], answer: 'Regret or completion', english: 'Meaning of ~te shimau' },
      { type: 'sentence-build', english: 'I ended up eating all the cake.', words: ['shimatta', 'keeki', 'tabete', 'wo', 'zenbu'], answer: ['keeki', 'wo', 'zenbu', 'tabete', 'shimatta'] },
      { type: 'fill-blank', sentence: 'Densha ni noriokurete ___.', answer: 'shimaimashita', options: ['shimaimashita', 'imashita', 'arimashita', 'kuremashita'], english: 'I unfortunately missed the train.' }
    ]
  },
  {
    id: 'n4-gram-002',
    pattern: '～ておく (te oku)',
    meaning: 'To do something in advance / leave as is',
    jlptLevel: 'N4',
    explanation: 'Indicates doing something in preparation for the future, or leaving something in a certain state intentionally. Often contracted to ~toku in casual speech.',
    structure: '[Verb te-form] + おく',
    examples: [
      { japanese: 'ホテルを予約しておきます。', romaji: 'Hoteru wo yoyaku shite okimasu.', english: 'I will reserve the hotel in advance.' },
      { japanese: '窓を開けておいてください。', romaji: 'Mado wo akete oite kudasai.', english: 'Please leave the window open.' },
      { japanese: '明日のために準備しておきました。', romaji: 'Ashita no tame ni junbi shite okimashita.', english: 'I prepared in advance for tomorrow.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Hoteru wo yoyaku shite ___.', answer: 'okimasu', options: ['okimasu', 'shimaimasu', 'mimasu', 'agemasu'], english: 'I will reserve the hotel in advance.' },
      { type: 'multiple-choice', question: 'What does ~te oku express?', options: ['Preparation for the future', 'Trying something', 'Regret', 'Receiving a favor'], answer: 'Preparation for the future', english: 'Meaning of ~te oku' },
      { type: 'sentence-build', english: 'Please leave the window open.', words: ['kudasai', 'oite', 'akete', 'mado', 'wo'], answer: ['mado', 'wo', 'akete', 'oite', 'kudasai'] },
      { type: 'fill-blank', sentence: 'Ashita no tame ni junbi shite ___.', answer: 'okimashita', options: ['okimashita', 'shimaimashita', 'mimashita', 'imashita'], english: 'I prepared in advance for tomorrow.' }
    ]
  },
  {
    id: 'n4-gram-003',
    pattern: '～てみる (te miru)',
    meaning: 'To try doing something',
    jlptLevel: 'N4',
    explanation: 'Used to express trying something to see what it is like or what happens. It implies the action is being attempted for the first time or experimentally.',
    structure: '[Verb te-form] + みる',
    examples: [
      { japanese: 'この料理を食べてみてください。', romaji: 'Kono ryouri wo tabete mite kudasai.', english: 'Please try eating this dish.' },
      { japanese: '日本語で話してみます。', romaji: 'Nihongo de hanashite mimasu.', english: 'I will try speaking in Japanese.' },
      { japanese: '新しい靴を履いてみました。', romaji: 'Atarashii kutsu wo haite mimashita.', english: 'I tried on the new shoes.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono ryouri wo tabete ___ kudasai.', answer: 'mite', options: ['mite', 'oite', 'shimatte', 'agete'], english: 'Please try eating this dish.' },
      { type: 'multiple-choice', question: 'What does ~te miru express?', options: ['Trying something out', 'Doing in advance', 'Doing completely', 'Giving a favor'], answer: 'Trying something out', english: 'Meaning of ~te miru' },
      { type: 'sentence-build', english: 'I will try speaking in Japanese.', words: ['mimasu', 'hanashite', 'nihongo', 'de'], answer: ['nihongo', 'de', 'hanashite', 'mimasu'] },
      { type: 'fill-blank', sentence: 'Atarashii kutsu wo haite ___.', answer: 'mimashita', options: ['mimashita', 'okimashita', 'shimaimashita', 'kuremashita'], english: 'I tried on the new shoes.' }
    ]
  },
  {
    id: 'n4-gram-004',
    pattern: '～てあげる (te ageru)',
    meaning: 'To do something for someone (as a favor)',
    jlptLevel: 'N4',
    explanation: 'Expresses doing a favor for someone else. The speaker or subject performs the action for the benefit of another person. Can sound condescending if used about superiors.',
    structure: '[Verb te-form] + あげる',
    examples: [
      { japanese: '友達に本を貸してあげました。', romaji: 'Tomodachi ni hon wo kashite agemashita.', english: 'I lent a book to my friend (as a favor).' },
      { japanese: '妹に料理を作ってあげます。', romaji: 'Imouto ni ryouri wo tsukutte agemasu.', english: 'I will cook for my younger sister.' },
      { japanese: '道を教えてあげました。', romaji: 'Michi wo oshiete agemashita.', english: 'I told them the way (as a favor).' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ni hon wo kashite ___.', answer: 'agemashita', options: ['agemashita', 'moraimashita', 'kuremashita', 'shimaimashita'], english: 'I lent a book to my friend (as a favor).' },
      { type: 'multiple-choice', question: 'Who performs the action with ~te ageru?', options: ['The speaker/subject does it for someone', 'Someone does it for the speaker', 'The action happens naturally', 'It is an obligation'], answer: 'The speaker/subject does it for someone', english: 'Direction of ~te ageru' },
      { type: 'sentence-build', english: 'I will cook for my younger sister.', words: ['agemasu', 'ryouri', 'imouto', 'tsukutte', 'wo', 'ni'], answer: ['imouto', 'ni', 'ryouri', 'wo', 'tsukutte', 'agemasu'] },
      { type: 'fill-blank', sentence: 'Michi wo oshiete ___.', answer: 'agemashita', options: ['agemashita', 'kuremashita', 'moraimashita', 'mimashita'], english: 'I told them the way (as a favor).' }
    ]
  },
  {
    id: 'n4-gram-005',
    pattern: '～てもらう (te morau)',
    meaning: 'To have someone do something / receive a favor',
    jlptLevel: 'N4',
    explanation: 'Expresses receiving the benefit of someone else\'s action. The subject receives the favor. Emphasizes gratitude from the receiver\'s perspective.',
    structure: '[Person] に [Verb te-form] + もらう',
    examples: [
      { japanese: '友達に手伝ってもらいました。', romaji: 'Tomodachi ni tetsudatte moraimashita.', english: 'I had my friend help me.' },
      { japanese: '先生に説明してもらいます。', romaji: 'Sensei ni setsumei shite moraimasu.', english: 'I will have the teacher explain it.' },
      { japanese: '母に送ってもらった。', romaji: 'Haha ni okutte moratta.', english: 'I had my mother send me off.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ni tetsudatte ___.', answer: 'moraimashita', options: ['moraimashita', 'agemashita', 'kuremashita', 'okimashita'], english: 'I had my friend help me.' },
      { type: 'multiple-choice', question: 'With ~te morau, who receives the benefit?', options: ['The speaker/subject', 'The person doing the action', 'A third party', 'No one'], answer: 'The speaker/subject', english: 'Direction of ~te morau' },
      { type: 'sentence-build', english: 'I will have the teacher explain it.', words: ['moraimasu', 'sensei', 'setsumei', 'shite', 'ni'], answer: ['sensei', 'ni', 'setsumei', 'shite', 'moraimasu'] },
      { type: 'fill-blank', sentence: 'Haha ni okutte ___.', answer: 'moratta', options: ['moratta', 'ageta', 'kureta', 'oita'], english: 'I had my mother send me off.' }
    ]
  },
  {
    id: 'n4-gram-006',
    pattern: '～てくれる (te kureru)',
    meaning: 'Someone does something for me (as a favor)',
    jlptLevel: 'N4',
    explanation: 'Expresses that someone else does something for the benefit of the speaker or the speaker\'s in-group. Shows gratitude for the action received.',
    structure: '[Person] が [Verb te-form] + くれる',
    examples: [
      { japanese: '友達が助けてくれました。', romaji: 'Tomodachi ga tasukete kuremashita.', english: 'My friend helped me.' },
      { japanese: '母が弁当を作ってくれます。', romaji: 'Haha ga bentou wo tsukutte kuremasu.', english: 'My mother makes me a bento.' },
      { japanese: '先輩が教えてくれた。', romaji: 'Senpai ga oshiete kureta.', english: 'My senior taught me.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ga tasukete ___.', answer: 'kuremashita', options: ['kuremashita', 'agemashita', 'moraimashita', 'shimaimashita'], english: 'My friend helped me.' },
      { type: 'multiple-choice', question: 'With ~te kureru, who does the action?', options: ['Someone else for the speaker', 'The speaker for someone', 'The speaker for themselves', 'No specific direction'], answer: 'Someone else for the speaker', english: 'Direction of ~te kureru' },
      { type: 'sentence-build', english: 'My mother makes me a bento.', words: ['kuremasu', 'haha', 'bentou', 'ga', 'tsukutte', 'wo'], answer: ['haha', 'ga', 'bentou', 'wo', 'tsukutte', 'kuremasu'] },
      { type: 'fill-blank', sentence: 'Senpai ga oshiete ___.', answer: 'kureta', options: ['kureta', 'ageta', 'moratta', 'mita'], english: 'My senior taught me.' }
    ]
  },
  {
    id: 'n4-gram-007',
    pattern: '～ようになる (you ni naru)',
    meaning: 'To come to / to become able to',
    jlptLevel: 'N4',
    explanation: 'Expresses a change in state or ability over time. Often used to describe gaining a new ability or a gradual change in habit or situation.',
    structure: '[Verb dictionary form / nai-form] + ようになる',
    examples: [
      { japanese: '日本語が話せるようになりました。', romaji: 'Nihongo ga hanaseru you ni narimashita.', english: 'I became able to speak Japanese.' },
      { japanese: '毎日運動するようになった。', romaji: 'Mainichi undou suru you ni natta.', english: 'I came to exercise every day.' },
      { japanese: '漢字が読めるようになりたい。', romaji: 'Kanji ga yomeru you ni naritai.', english: 'I want to become able to read kanji.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihongo ga hanaseru ___ narimashita.', answer: 'you ni', options: ['you ni', 'koto ni', 'no ni', 'tame ni'], english: 'I became able to speak Japanese.' },
      { type: 'multiple-choice', question: 'What does ~you ni naru express?', options: ['A gradual change or new ability', 'A sudden decision', 'An obligation', 'Permission'], answer: 'A gradual change or new ability', english: 'Meaning of ~you ni naru' },
      { type: 'sentence-build', english: 'I came to exercise every day.', words: ['natta', 'you ni', 'undou', 'suru', 'mainichi'], answer: ['mainichi', 'undou', 'suru', 'you ni', 'natta'] },
      { type: 'fill-blank', sentence: 'Kanji ga yomeru ___ naritai.', answer: 'you ni', options: ['you ni', 'koto ni', 'no de', 'node'], english: 'I want to become able to read kanji.' }
    ]
  },
  {
    id: 'n4-gram-008',
    pattern: '～ようにする (you ni suru)',
    meaning: 'To make an effort to / to make sure to',
    jlptLevel: 'N4',
    explanation: 'Expresses making a conscious effort or taking steps to ensure something happens. Used for deliberate changes in behavior.',
    structure: '[Verb dictionary form / nai-form] + ようにする',
    examples: [
      { japanese: '毎日野菜を食べるようにしています。', romaji: 'Mainichi yasai wo taberu you ni shite imasu.', english: 'I make sure to eat vegetables every day.' },
      { japanese: '遅刻しないようにします。', romaji: 'Chikoku shinai you ni shimasu.', english: 'I will make sure not to be late.' },
      { japanese: '早く寝るようにしている。', romaji: 'Hayaku neru you ni shite iru.', english: 'I make an effort to go to bed early.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mainichi yasai wo taberu ___ shite imasu.', answer: 'you ni', options: ['you ni', 'koto ni', 'no ni', 'tame ni'], english: 'I make sure to eat vegetables every day.' },
      { type: 'multiple-choice', question: 'What is the difference between ~you ni naru and ~you ni suru?', options: ['Naru is natural change, suru is deliberate effort', 'They are the same', 'Suru is past tense', 'Naru is for requests'], answer: 'Naru is natural change, suru is deliberate effort', english: 'Comparing ~you ni naru/suru' },
      { type: 'sentence-build', english: 'I will make sure not to be late.', words: ['shimasu', 'you ni', 'chikoku', 'shinai'], answer: ['chikoku', 'shinai', 'you ni', 'shimasu'] },
      { type: 'fill-blank', sentence: 'Hayaku neru ___ shite iru.', answer: 'you ni', options: ['you ni', 'koto ga', 'no de', 'tame ni'], english: 'I make an effort to go to bed early.' }
    ]
  },
  {
    id: 'n4-gram-009',
    pattern: '～そう (sou) - Appearance',
    meaning: 'Looks like / appears to be',
    jlptLevel: 'N4',
    explanation: 'Attached to the stem of adjectives or verbs to express that something appears a certain way based on visual observation. Different from hearsay ~sou.',
    structure: '[i-adj stem / na-adj stem / Verb masu-stem] + そう',
    examples: [
      { japanese: 'このケーキはおいしそうです。', romaji: 'Kono keeki wa oishisou desu.', english: 'This cake looks delicious.' },
      { japanese: '雨が降りそうです。', romaji: 'Ame ga furisou desu.', english: 'It looks like it will rain.' },
      { japanese: '彼は元気そうです。', romaji: 'Kare wa genkisou desu.', english: 'He looks healthy.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono keeki wa oishi___ desu.', answer: 'sou', options: ['sou', 'rashii', 'mitai', 'you'], english: 'This cake looks delicious.' },
      { type: 'multiple-choice', question: 'How is appearance ~sou formed with i-adjectives?', options: ['Remove -i and add -sou', 'Add -sou to the full adjective', 'Add -sou da', 'Remove -i and add -rashii'], answer: 'Remove -i and add -sou', english: 'Formation of appearance ~sou' },
      { type: 'sentence-build', english: 'It looks like it will rain.', words: ['desu', 'furisou', 'ame', 'ga'], answer: ['ame', 'ga', 'furisou', 'desu'] },
      { type: 'fill-blank', sentence: 'Kare wa genki___ desu.', answer: 'sou', options: ['sou', 'rashii', 'mitai', 'ppoi'], english: 'He looks healthy.' }
    ]
  },
  {
    id: 'n4-gram-010',
    pattern: '～そうだ (sou da) - Hearsay',
    meaning: 'I heard that / they say that',
    jlptLevel: 'N4',
    explanation: 'Attached to the plain form of verbs, adjectives, or nouns+da to report information heard from another source. Different from appearance ~sou.',
    structure: '[Plain form] + そうだ',
    examples: [
      { japanese: '明日は雨だそうです。', romaji: 'Ashita wa ame da sou desu.', english: 'I heard that it will rain tomorrow.' },
      { japanese: 'あの映画はおもしろいそうです。', romaji: 'Ano eiga wa omoshiroi sou desu.', english: 'I heard that movie is interesting.' },
      { japanese: '田中さんは来ないそうです。', romaji: 'Tanaka-san wa konai sou desu.', english: 'I heard that Tanaka-san is not coming.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ame da ___ desu.', answer: 'sou', options: ['sou', 'rashii', 'mitai', 'hazu'], english: 'I heard that it will rain tomorrow.' },
      { type: 'multiple-choice', question: 'How does hearsay ~sou differ from appearance ~sou?', options: ['Hearsay attaches to plain form, appearance to stem', 'They are formed the same way', 'Hearsay uses masu-form', 'Appearance uses plain form'], answer: 'Hearsay attaches to plain form, appearance to stem', english: 'Hearsay vs appearance ~sou' },
      { type: 'sentence-build', english: 'I heard that movie is interesting.', words: ['sou desu', 'omoshiroi', 'eiga', 'ano', 'wa'], answer: ['ano', 'eiga', 'wa', 'omoshiroi', 'sou desu'] },
      { type: 'fill-blank', sentence: 'Tanaka-san wa konai ___ desu.', answer: 'sou', options: ['sou', 'rashii', 'hazu', 'mitai'], english: 'I heard that Tanaka-san is not coming.' }
    ]
  },
  {
    id: 'n4-gram-011',
    pattern: '～らしい (rashii)',
    meaning: 'It seems like / apparently',
    jlptLevel: 'N4',
    explanation: 'Expresses a conjecture based on information obtained from an external source or evidence. It indicates the speaker has reason to believe something is true.',
    structure: '[Plain form] + らしい',
    examples: [
      { japanese: '彼は病気らしいです。', romaji: 'Kare wa byouki rashii desu.', english: 'It seems like he is sick.' },
      { japanese: '明日は寒いらしい。', romaji: 'Ashita wa samui rashii.', english: 'Apparently it will be cold tomorrow.' },
      { japanese: 'あの店は有名らしいです。', romaji: 'Ano mise wa yuumei rashii desu.', english: 'That store is apparently famous.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kare wa byouki ___ desu.', answer: 'rashii', options: ['rashii', 'sou', 'mitai', 'hazu'], english: 'It seems like he is sick.' },
      { type: 'multiple-choice', question: 'What does ~rashii indicate?', options: ['Conjecture based on evidence or hearsay', 'Direct visual observation', 'Strong certainty', 'Personal desire'], answer: 'Conjecture based on evidence or hearsay', english: 'Meaning of ~rashii' },
      { type: 'sentence-build', english: 'Apparently it will be cold tomorrow.', words: ['rashii', 'samui', 'ashita', 'wa'], answer: ['ashita', 'wa', 'samui', 'rashii'] },
      { type: 'fill-blank', sentence: 'Ano mise wa yuumei ___ desu.', answer: 'rashii', options: ['rashii', 'sou', 'ppoi', 'mitai'], english: 'That store is apparently famous.' }
    ]
  },
  {
    id: 'n4-gram-012',
    pattern: '～みたい (mitai)',
    meaning: 'It seems like / looks like (casual)',
    jlptLevel: 'N4',
    explanation: 'A casual way to express that something appears to be a certain way, based on what the speaker observes or knows. Similar to ~you da but more colloquial.',
    structure: '[Plain form / Noun] + みたい',
    examples: [
      { japanese: '彼は怒っているみたいです。', romaji: 'Kare wa okotte iru mitai desu.', english: 'It seems like he is angry.' },
      { japanese: '雨が止んだみたい。', romaji: 'Ame ga yanda mitai.', english: 'It seems like the rain stopped.' },
      { japanese: 'あの人は学生みたいです。', romaji: 'Ano hito wa gakusei mitai desu.', english: 'That person seems like a student.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kare wa okotte iru ___ desu.', answer: 'mitai', options: ['mitai', 'rashii', 'sou', 'hazu'], english: 'It seems like he is angry.' },
      { type: 'multiple-choice', question: 'What is ~mitai similar to?', options: ['~you da (casual equivalent)', '~sou da (hearsay)', '~hazu da (expectation)', '~kamoshirenai (maybe)'], answer: '~you da (casual equivalent)', english: 'Equivalent of ~mitai' },
      { type: 'sentence-build', english: 'It seems like the rain stopped.', words: ['mitai', 'yanda', 'ga', 'ame'], answer: ['ame', 'ga', 'yanda', 'mitai'] },
      { type: 'fill-blank', sentence: 'Ano hito wa gakusei ___ desu.', answer: 'mitai', options: ['mitai', 'rashii', 'sou', 'ppoi'], english: 'That person seems like a student.' }
    ]
  },
  {
    id: 'n4-gram-013',
    pattern: '～はずだ (hazu da)',
    meaning: 'Should be / is expected to',
    jlptLevel: 'N4',
    explanation: 'Expresses the speaker\'s confident expectation that something is or should be true based on logic, evidence, or schedule.',
    structure: '[Plain form] + はずだ',
    examples: [
      { japanese: '彼はもう着いたはずです。', romaji: 'Kare wa mou tsuita hazu desu.', english: 'He should have arrived already.' },
      { japanese: 'この問題は簡単なはずです。', romaji: 'Kono mondai wa kantan na hazu desu.', english: 'This problem should be easy.' },
      { japanese: '電車は三時に来るはずです。', romaji: 'Densha wa sanji ni kuru hazu desu.', english: 'The train should come at three.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kare wa mou tsuita ___ desu.', answer: 'hazu', options: ['hazu', 'sou', 'rashii', 'mitai'], english: 'He should have arrived already.' },
      { type: 'multiple-choice', question: 'What does ~hazu da express?', options: ['Confident expectation', 'Uncertain guess', 'Hearsay', 'Visual appearance'], answer: 'Confident expectation', english: 'Meaning of ~hazu da' },
      { type: 'sentence-build', english: 'This problem should be easy.', words: ['hazu desu', 'kantan na', 'mondai', 'kono', 'wa'], answer: ['kono', 'mondai', 'wa', 'kantan na', 'hazu desu'] },
      { type: 'fill-blank', sentence: 'Densha wa sanji ni kuru ___ desu.', answer: 'hazu', options: ['hazu', 'sou', 'mitai', 'rashii'], english: 'The train should come at three.' }
    ]
  },
  {
    id: 'n4-gram-014',
    pattern: '～られる (rareru) - Passive',
    meaning: 'Passive voice',
    jlptLevel: 'N4',
    explanation: 'The passive form expresses that an action is done to the subject. In Japanese, it often carries a nuance of being negatively affected. Ichidan verbs add -rareru, godan verbs change to a-column + reru.',
    structure: '[Verb passive form] = Ichidan: stem + られる / Godan: a-stem + れる',
    examples: [
      { japanese: '先生に褒められました。', romaji: 'Sensei ni homeraremashita.', english: 'I was praised by the teacher.' },
      { japanese: '電車で足を踏まれた。', romaji: 'Densha de ashi wo fumareta.', english: 'My foot was stepped on in the train.' },
      { japanese: '雨に降られました。', romaji: 'Ame ni furaremashita.', english: 'I was rained on (adversely affected by rain).' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Sensei ni ___.', answer: 'homeraremashita', options: ['homeraremashita', 'homemashita', 'hometemashita', 'homesasemashita'], english: 'I was praised by the teacher.' },
      { type: 'multiple-choice', question: 'What particle marks the doer in a passive sentence?', options: ['ni', 'ga', 'wo', 'de'], answer: 'ni', english: 'Passive agent marker' },
      { type: 'sentence-build', english: 'My foot was stepped on in the train.', words: ['fumareta', 'densha', 'ashi', 'de', 'wo'], answer: ['densha', 'de', 'ashi', 'wo', 'fumareta'] },
      { type: 'fill-blank', sentence: 'Ame ni ___.', answer: 'furaremashita', options: ['furaremashita', 'furimashita', 'furasemashita', 'futte imashita'], english: 'I was rained on.' }
    ]
  },
  {
    id: 'n4-gram-015',
    pattern: '～させる (saseru) - Causative',
    meaning: 'To make/let someone do',
    jlptLevel: 'N4',
    explanation: 'The causative form expresses making or letting someone do something. Context determines whether it means forcing or permitting. Ichidan: stem + させる, Godan: a-stem + せる.',
    structure: '[Verb causative form] = Ichidan: stem + させる / Godan: a-stem + せる',
    examples: [
      { japanese: '母は子供に野菜を食べさせます。', romaji: 'Haha wa kodomo ni yasai wo tabesasemasu.', english: 'The mother makes her child eat vegetables.' },
      { japanese: '先生は学生を立たせました。', romaji: 'Sensei wa gakusei wo tatasemashita.', english: 'The teacher made the students stand.' },
      { japanese: '好きなことをさせてください。', romaji: 'Suki na koto wo sasete kudasai.', english: 'Please let me do what I like.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Haha wa kodomo ni yasai wo ___.', answer: 'tabesasemasu', options: ['tabesasemasu', 'taberaremasu', 'tabemasu', 'tabetemasu'], english: 'The mother makes her child eat vegetables.' },
      { type: 'multiple-choice', question: 'What does the causative form express?', options: ['Making or letting someone do something', 'Being done to by someone', 'Trying to do something', 'Doing something completely'], answer: 'Making or letting someone do something', english: 'Meaning of causative' },
      { type: 'sentence-build', english: 'The teacher made the students stand.', words: ['tatasemashita', 'gakusei', 'sensei', 'wo', 'wa'], answer: ['sensei', 'wa', 'gakusei', 'wo', 'tatasemashita'] },
      { type: 'fill-blank', sentence: 'Suki na koto wo ___ kudasai.', answer: 'sasete', options: ['sasete', 'sarete', 'shite', 'mite'], english: 'Please let me do what I like.' }
    ]
  },
  {
    id: 'n4-gram-016',
    pattern: '～（ら）れる (rareru) - Potential',
    meaning: 'Can do / be able to',
    jlptLevel: 'N4',
    explanation: 'The potential form expresses ability or possibility. Ichidan: stem + られる (often shortened to れる in casual speech), Godan: e-stem + る. The object takes が instead of を.',
    structure: 'Ichidan: stem + られる / Godan: e-column + る',
    examples: [
      { japanese: '漢字が読めます。', romaji: 'Kanji ga yomemasu.', english: 'I can read kanji.' },
      { japanese: '刺身が食べられますか。', romaji: 'Sashimi ga taberaremasu ka.', english: 'Can you eat sashimi?' },
      { japanese: '明日は来られません。', romaji: 'Ashita wa koraremasen.', english: 'I cannot come tomorrow.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kanji ga ___.', answer: 'yomemasu', options: ['yomemasu', 'yomimasu', 'yomaremasu', 'yomasemasu'], english: 'I can read kanji.' },
      { type: 'multiple-choice', question: 'In potential form, which particle typically marks the object?', options: ['ga', 'wo', 'ni', 'de'], answer: 'ga', english: 'Potential form particle' },
      { type: 'sentence-build', english: 'Can you eat sashimi?', words: ['ka', 'taberaremasu', 'sashimi', 'ga'], answer: ['sashimi', 'ga', 'taberaremasu', 'ka'] },
      { type: 'fill-blank', sentence: 'Ashita wa ___.', answer: 'koraremasen', options: ['koraremasen', 'kimasen', 'kosasemasen', 'koremasen'], english: 'I cannot come tomorrow.' }
    ]
  },
  {
    id: 'n4-gram-017',
    pattern: '～たら (tara)',
    meaning: 'If / when (conditional)',
    jlptLevel: 'N4',
    explanation: 'A conditional form meaning "if" or "when." Formed by adding ら to the ta-form. It implies that the result happens after the condition is fulfilled. Can be used for hypothetical and temporal conditions.',
    structure: '[Verb ta-form / i-adj past / na-adj + dattara / Noun + dattara] + ら',
    examples: [
      { japanese: '雨が降ったら、家にいます。', romaji: 'Ame ga futtara, ie ni imasu.', english: 'If it rains, I will stay home.' },
      { japanese: '安かったら、買います。', romaji: 'Yasukattara, kaimasu.', english: 'If it is cheap, I will buy it.' },
      { japanese: '日本に行ったら、寿司を食べたい。', romaji: 'Nihon ni ittara, sushi wo tabetai.', english: 'When I go to Japan, I want to eat sushi.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ame ga ___, ie ni imasu.', answer: 'futtara', options: ['futtara', 'fureba', 'furu nara', 'furu to'], english: 'If it rains, I will stay home.' },
      { type: 'multiple-choice', question: 'How is ~tara formed?', options: ['Ta-form + ra', 'Dictionary form + ra', 'Masu-stem + tara', 'Nai-form + ra'], answer: 'Ta-form + ra', english: 'Formation of ~tara' },
      { type: 'sentence-build', english: 'If it is cheap, I will buy it.', words: ['kaimasu', 'yasukattara'], answer: ['yasukattara', 'kaimasu'] },
      { type: 'fill-blank', sentence: 'Nihon ni ___, sushi wo tabetai.', answer: 'ittara', options: ['ittara', 'ikeba', 'iku nara', 'iku to'], english: 'When I go to Japan, I want to eat sushi.' }
    ]
  },
  {
    id: 'n4-gram-018',
    pattern: '～ば (ba)',
    meaning: 'If (conditional)',
    jlptLevel: 'N4',
    explanation: 'A conditional form that presents a general or hypothetical condition. Formed by changing the final -u to -eba for verbs, -i to -kereba for i-adjectives. Often used for giving advice or stating general truths.',
    structure: 'Verb: change -u to -eba / i-adj: -i to -kereba / na-adj/Noun: + nara(ba)',
    examples: [
      { japanese: '早く起きれば、間に合います。', romaji: 'Hayaku okireba, ma ni aimasu.', english: 'If you wake up early, you will be on time.' },
      { japanese: '安ければ、買います。', romaji: 'Yasukereba, kaimasu.', english: 'If it is cheap, I will buy it.' },
      { japanese: '練習すれば、上手になります。', romaji: 'Renshuu sureba, jouzu ni narimasu.', english: 'If you practice, you will get good.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Hayaku ___, ma ni aimasu.', answer: 'okireba', options: ['okireba', 'okitara', 'okiru nara', 'okiru to'], english: 'If you wake up early, you will be on time.' },
      { type: 'multiple-choice', question: 'How is the ~ba form of i-adjectives made?', options: ['Change -i to -kereba', 'Change -i to -kuba', 'Add -ba directly', 'Change -i to -tara'], answer: 'Change -i to -kereba', english: 'Formation of i-adj ~ba' },
      { type: 'sentence-build', english: 'If you practice, you will get good.', words: ['narimasu', 'sureba', 'jouzu ni', 'renshuu'], answer: ['renshuu', 'sureba', 'jouzu ni', 'narimasu'] },
      { type: 'fill-blank', sentence: '___, kaimasu.', answer: 'Yasukereba', options: ['Yasukereba', 'Yasukattara', 'Yasui nara', 'Yasuku'], english: 'If it is cheap, I will buy it.' }
    ]
  },
  {
    id: 'n4-gram-019',
    pattern: '～なら (nara)',
    meaning: 'If (contextual conditional)',
    jlptLevel: 'N4',
    explanation: 'A conditional that picks up on something said or known, and adds a comment or suggestion. Often translated as "if it is the case that..." or "if you are talking about...".',
    structure: '[Plain form / Noun] + なら',
    examples: [
      { japanese: '日本に行くなら、京都がいいですよ。', romaji: 'Nihon ni iku nara, Kyouto ga ii desu yo.', english: 'If you are going to Japan, Kyoto is nice.' },
      { japanese: '暇なら、手伝ってください。', romaji: 'Hima nara, tetsudatte kudasai.', english: 'If you are free, please help me.' },
      { japanese: '魚なら、このレストランがおすすめです。', romaji: 'Sakana nara, kono resutoran ga osusume desu.', english: 'If it is fish (you want), I recommend this restaurant.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni iku ___, Kyouto ga ii desu yo.', answer: 'nara', options: ['nara', 'tara', 'ba', 'to'], english: 'If you are going to Japan, Kyoto is nice.' },
      { type: 'multiple-choice', question: 'When is ~nara best used?', options: ['When responding to something someone said', 'For time-based conditions', 'For habitual conditions', 'For past conditions'], answer: 'When responding to something someone said', english: 'Usage of ~nara' },
      { type: 'sentence-build', english: 'If you are free, please help me.', words: ['kudasai', 'tetsudatte', 'nara', 'hima'], answer: ['hima', 'nara', 'tetsudatte', 'kudasai'] },
      { type: 'fill-blank', sentence: 'Sakana ___, kono resutoran ga osusume desu.', answer: 'nara', options: ['nara', 'dattara', 'da to', 'de wa'], english: 'If it is fish, I recommend this restaurant.' }
    ]
  },
  {
    id: 'n4-gram-020',
    pattern: '～ても (temo)',
    meaning: 'Even if / even though',
    jlptLevel: 'N4',
    explanation: 'Expresses that the result in the main clause holds true regardless of the condition. Formed from te-form + mo.',
    structure: '[Verb te-form / i-adj -kute / na-adj + demo / Noun + demo] + も',
    examples: [
      { japanese: '雨が降っても、行きます。', romaji: 'Ame ga futte mo, ikimasu.', english: 'Even if it rains, I will go.' },
      { japanese: '高くても、買いたいです。', romaji: 'Takakute mo, kaitai desu.', english: 'Even if it is expensive, I want to buy it.' },
      { japanese: '何回聞いても、分かりません。', romaji: 'Nankai kiite mo, wakarimasen.', english: 'No matter how many times I listen, I do not understand.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ame ga futte ___, ikimasu.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'Even if it rains, I will go.' },
      { type: 'multiple-choice', question: 'What does ~temo express?', options: ['The result does not change despite the condition', 'A direct consequence', 'A reason', 'A wish'], answer: 'The result does not change despite the condition', english: 'Meaning of ~temo' },
      { type: 'sentence-build', english: 'Even if it is expensive, I want to buy it.', words: ['kaitai desu', 'takakute mo'], answer: ['takakute mo', 'kaitai desu'] },
      { type: 'fill-blank', sentence: 'Nankai kiite ___, wakarimasen.', answer: 'mo', options: ['mo', 'wa', 'ga', 'kara'], english: 'No matter how many times I listen, I do not understand.' }
    ]
  },
  {
    id: 'n4-gram-021',
    pattern: '～おう／よう (ou/you) - Volitional',
    meaning: 'Let\'s / I shall / intend to',
    jlptLevel: 'N4',
    explanation: 'The volitional form expresses the speaker\'s will, intention, or a suggestion to do something together. Godan verbs change -u to -ou, ichidan verbs change -ru to -you.',
    structure: 'Godan: -u → -ou / Ichidan: -ru → -you / suru → shiyou / kuru → koyou',
    examples: [
      { japanese: '映画を見よう。', romaji: 'Eiga wo miyou.', english: 'Let\'s watch a movie.' },
      { japanese: '一緒に帰ろう。', romaji: 'Issho ni kaerou.', english: 'Let\'s go home together.' },
      { japanese: '明日早く起きようと思います。', romaji: 'Ashita hayaku okiyou to omoimasu.', english: 'I think I will wake up early tomorrow.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Eiga wo ___.', answer: 'miyou', options: ['miyou', 'mimasu', 'mite', 'mitai'], english: 'Let\'s watch a movie.' },
      { type: 'multiple-choice', question: 'What is the volitional form of "taberu"?', options: ['tabeyou', 'taberou', 'tabeou', 'tabemou'], answer: 'tabeyou', english: 'Volitional of taberu' },
      { type: 'sentence-build', english: 'Let\'s go home together.', words: ['kaerou', 'issho ni'], answer: ['issho ni', 'kaerou'] },
      { type: 'fill-blank', sentence: 'Ashita hayaku ___ to omoimasu.', answer: 'okiyou', options: ['okiyou', 'okiru', 'okite', 'okinai'], english: 'I think I will wake up early tomorrow.' }
    ]
  },
  {
    id: 'n4-gram-022',
    pattern: '～つもり (tsumori)',
    meaning: 'Plan to / intend to',
    jlptLevel: 'N4',
    explanation: 'Expresses the speaker\'s intention or plan to do something. Used with the dictionary form for positive intentions and nai-form for negative intentions.',
    structure: '[Verb dictionary form / nai-form] + つもりだ',
    examples: [
      { japanese: '来年日本に行くつもりです。', romaji: 'Rainen Nihon ni iku tsumori desu.', english: 'I plan to go to Japan next year.' },
      { japanese: 'もうお酒を飲まないつもりです。', romaji: 'Mou osake wo nomanai tsumori desu.', english: 'I intend not to drink alcohol anymore.' },
      { japanese: '大学院に進むつもりです。', romaji: 'Daigakuin ni susumu tsumori desu.', english: 'I plan to go to graduate school.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Rainen Nihon ni iku ___ desu.', answer: 'tsumori', options: ['tsumori', 'hazu', 'you', 'rashii'], english: 'I plan to go to Japan next year.' },
      { type: 'multiple-choice', question: 'What form of the verb comes before tsumori?', options: ['Dictionary form or nai-form', 'Te-form', 'Ta-form', 'Masu-form'], answer: 'Dictionary form or nai-form', english: 'Verb form before tsumori' },
      { type: 'sentence-build', english: 'I intend not to drink alcohol anymore.', words: ['tsumori desu', 'osake', 'nomanai', 'mou', 'wo'], answer: ['mou', 'osake', 'wo', 'nomanai', 'tsumori desu'] },
      { type: 'fill-blank', sentence: 'Daigakuin ni susumu ___ desu.', answer: 'tsumori', options: ['tsumori', 'hazu', 'sou', 'mitai'], english: 'I plan to go to graduate school.' }
    ]
  },
  {
    id: 'n4-gram-023',
    pattern: '～ことがある (koto ga aru)',
    meaning: 'Sometimes / there are times when',
    jlptLevel: 'N4',
    explanation: 'Used with the dictionary form of a verb to express that something happens occasionally or from time to time.',
    structure: '[Verb dictionary form] + ことがある',
    examples: [
      { japanese: '朝ごはんを食べないことがあります。', romaji: 'Asagohan wo tabenai koto ga arimasu.', english: 'There are times when I do not eat breakfast.' },
      { japanese: '電車が遅れることがあります。', romaji: 'Densha ga okureru koto ga arimasu.', english: 'The train is sometimes late.' },
      { japanese: '夜中に目が覚めることがある。', romaji: 'Yonaka ni me ga sameru koto ga aru.', english: 'I sometimes wake up in the middle of the night.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Asagohan wo tabenai ___ arimasu.', answer: 'koto ga', options: ['koto ga', 'koto wo', 'no ga', 'no wo'], english: 'There are times when I do not eat breakfast.' },
      { type: 'multiple-choice', question: 'What does [dictionary form] + koto ga aru express?', options: ['Something happens sometimes', 'Past experience', 'Ability', 'Obligation'], answer: 'Something happens sometimes', english: 'Meaning of koto ga aru (dict. form)' },
      { type: 'sentence-build', english: 'The train is sometimes late.', words: ['arimasu', 'koto ga', 'okureru', 'densha', 'ga'], answer: ['densha', 'ga', 'okureru', 'koto ga', 'arimasu'] },
      { type: 'fill-blank', sentence: 'Yonaka ni me ga sameru ___ aru.', answer: 'koto ga', options: ['koto ga', 'koto wo', 'no ni', 'wake ga'], english: 'I sometimes wake up in the middle of the night.' }
    ]
  },
  {
    id: 'n4-gram-024',
    pattern: '～たことがある (ta koto ga aru)',
    meaning: 'Have done before (experience)',
    jlptLevel: 'N4',
    explanation: 'Used with the ta-form to express that one has had the experience of doing something at least once in the past.',
    structure: '[Verb ta-form] + ことがある',
    examples: [
      { japanese: '日本に行ったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', english: 'I have been to Japan before.' },
      { japanese: '納豆を食べたことがありますか。', romaji: 'Nattou wo tabeta koto ga arimasu ka.', english: 'Have you ever eaten natto?' },
      { japanese: '富士山に登ったことがありません。', romaji: 'Fujisan ni nobotta koto ga arimasen.', english: 'I have never climbed Mt. Fuji.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni itta ___ arimasu.', answer: 'koto ga', options: ['koto ga', 'koto wo', 'no ga', 'mono ga'], english: 'I have been to Japan before.' },
      { type: 'multiple-choice', question: 'What does [ta-form] + koto ga aru express?', options: ['Past experience', 'Something that sometimes happens', 'Future plans', 'Obligation'], answer: 'Past experience', english: 'Meaning of ta koto ga aru' },
      { type: 'sentence-build', english: 'Have you ever eaten natto?', words: ['ka', 'arimasu', 'koto ga', 'nattou', 'tabeta', 'wo'], answer: ['nattou', 'wo', 'tabeta', 'koto ga', 'arimasu', 'ka'] },
      { type: 'fill-blank', sentence: 'Fujisan ni nobotta ___ arimasen.', answer: 'koto ga', options: ['koto ga', 'koto wo', 'no ga', 'no de'], english: 'I have never climbed Mt. Fuji.' }
    ]
  },
  {
    id: 'n4-gram-025',
    pattern: '～ながら (nagara)',
    meaning: 'While doing',
    jlptLevel: 'N4',
    explanation: 'Expresses two actions happening simultaneously by the same person. The action before nagara is secondary, and the main action comes after.',
    structure: '[Verb masu-stem] + ながら + [Main action]',
    examples: [
      { japanese: '音楽を聞きながら勉強します。', romaji: 'Ongaku wo kikinagara benkyou shimasu.', english: 'I study while listening to music.' },
      { japanese: '歩きながら電話しないでください。', romaji: 'Arukinagara denwa shinaide kudasai.', english: 'Please do not talk on the phone while walking.' },
      { japanese: 'テレビを見ながらご飯を食べた。', romaji: 'Terebi wo minagara gohan wo tabeta.', english: 'I ate while watching TV.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ongaku wo kiki___ benkyou shimasu.', answer: 'nagara', options: ['nagara', 'temo', 'node', 'noni'], english: 'I study while listening to music.' },
      { type: 'multiple-choice', question: 'Which action is the main action with ~nagara?', options: ['The action after nagara', 'The action before nagara', 'Both are equal', 'Neither'], answer: 'The action after nagara', english: 'Main action in ~nagara' },
      { type: 'sentence-build', english: 'I ate while watching TV.', words: ['tabeta', 'gohan', 'minagara', 'terebi', 'wo', 'wo'], answer: ['terebi', 'wo', 'minagara', 'gohan', 'wo', 'tabeta'] },
      { type: 'fill-blank', sentence: 'Aruki___ denwa shinaide kudasai.', answer: 'nagara', options: ['nagara', 'temo', 'node', 'noni'], english: 'Please do not talk on the phone while walking.' }
    ]
  },
  {
    id: 'n4-gram-026',
    pattern: '～し (shi)',
    meaning: 'And also / moreover (listing reasons)',
    jlptLevel: 'N4',
    explanation: 'Used to list multiple reasons or qualities. Often implies there are additional reasons beyond what is stated. Can be used with plain forms.',
    structure: '[Plain form] + し、[Plain form] + し',
    examples: [
      { japanese: 'この店は安いし、おいしいし、最高です。', romaji: 'Kono mise wa yasui shi, oishii shi, saikou desu.', english: 'This restaurant is cheap and delicious — it is the best.' },
      { japanese: '今日は疲れたし、頭も痛いし、帰りたい。', romaji: 'Kyou wa tsukareta shi, atama mo itai shi, kaeritai.', english: 'I am tired today, and my head hurts too, so I want to go home.' },
      { japanese: '彼は優しいし、かっこいいし、人気があります。', romaji: 'Kare wa yasashii shi, kakkoii shi, ninki ga arimasu.', english: 'He is kind and cool, so he is popular.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono mise wa yasui ___, oishii ___, saikou desu.', answer: 'shi', options: ['shi', 'to', 'ga', 'de'], english: 'This restaurant is cheap and delicious — it is the best.' },
      { type: 'multiple-choice', question: 'What does ~shi do in a sentence?', options: ['Lists multiple reasons or qualities', 'Shows contrast', 'Marks a sequence of events', 'Expresses obligation'], answer: 'Lists multiple reasons or qualities', english: 'Function of ~shi' },
      { type: 'sentence-build', english: 'He is kind and cool, so he is popular.', words: ['ninki ga arimasu', 'kakkoii shi', 'kare wa', 'yasashii shi'], answer: ['kare wa', 'yasashii shi', 'kakkoii shi', 'ninki ga arimasu'] },
      { type: 'fill-blank', sentence: 'Kyou wa tsukareta ___, atama mo itai ___, kaeritai.', answer: 'shi', options: ['shi', 'kara', 'node', 'noni'], english: 'I am tired and my head hurts, so I want to go home.' }
    ]
  },
  {
    id: 'n4-gram-027',
    pattern: '～ので (node)',
    meaning: 'Because / since (polite reason)',
    jlptLevel: 'N4',
    explanation: 'A polite way to give a reason or cause. Softer and more objective than kara. Na-adjectives and nouns take na before node.',
    structure: '[Plain form (na-adj/noun + na)] + ので',
    examples: [
      { japanese: '熱があるので、休みます。', romaji: 'Netsu ga aru node, yasumimasu.', english: 'Because I have a fever, I will rest.' },
      { japanese: '道が混んでいたので、遅れました。', romaji: 'Michi ga konde ita node, okuremashita.', english: 'Because the road was congested, I was late.' },
      { japanese: '静かなので、よく眠れます。', romaji: 'Shizuka na node, yoku nemuremasu.', english: 'Because it is quiet, I can sleep well.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Netsu ga aru ___, yasumimasu.', answer: 'node', options: ['node', 'noni', 'kara', 'shi'], english: 'Because I have a fever, I will rest.' },
      { type: 'multiple-choice', question: 'How does ~node differ from ~kara?', options: ['Node is softer and more polite', 'Node is more casual', 'They are the same', 'Node is for questions only'], answer: 'Node is softer and more polite', english: 'Node vs kara' },
      { type: 'sentence-build', english: 'Because the road was congested, I was late.', words: ['okuremashita', 'node', 'michi ga', 'konde ita'], answer: ['michi ga', 'konde ita', 'node', 'okuremashita'] },
      { type: 'fill-blank', sentence: 'Shizuka ___ node, yoku nemuremasu.', answer: 'na', options: ['na', 'no', 'da', 'ni'], english: 'Because it is quiet, I can sleep well.' }
    ]
  },
  {
    id: 'n4-gram-028',
    pattern: '～のに (noni)',
    meaning: 'Even though / despite',
    jlptLevel: 'N4',
    explanation: 'Expresses contrast or frustration — the result is unexpected or contrary to what the condition would suggest. Often carries a nuance of complaint or disappointment.',
    structure: '[Plain form (na-adj/noun + na)] + のに',
    examples: [
      { japanese: '勉強したのに、テストに落ちました。', romaji: 'Benkyou shita noni, tesuto ni ochimashita.', english: 'Even though I studied, I failed the test.' },
      { japanese: '薬を飲んだのに、まだ頭が痛い。', romaji: 'Kusuri wo nonda noni, mada atama ga itai.', english: 'Even though I took medicine, my head still hurts.' },
      { japanese: '約束したのに、来なかった。', romaji: 'Yakusoku shita noni, konakatta.', english: 'Even though they promised, they did not come.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Benkyou shita ___, tesuto ni ochimashita.', answer: 'noni', options: ['noni', 'node', 'kara', 'shi'], english: 'Even though I studied, I failed the test.' },
      { type: 'multiple-choice', question: 'What nuance does ~noni carry?', options: ['Frustration or disappointment', 'Polite reason giving', 'Simultaneous actions', 'Listing reasons'], answer: 'Frustration or disappointment', english: 'Nuance of ~noni' },
      { type: 'sentence-build', english: 'Even though I took medicine, my head still hurts.', words: ['itai', 'noni', 'atama ga', 'nonda', 'kusuri wo', 'mada'], answer: ['kusuri wo', 'nonda', 'noni', 'mada', 'atama ga', 'itai'] },
      { type: 'fill-blank', sentence: 'Yakusoku shita ___, konakatta.', answer: 'noni', options: ['noni', 'node', 'kara', 'temo'], english: 'Even though they promised, they did not come.' }
    ]
  },
  {
    id: 'n4-gram-029',
    pattern: '～とき (toki)',
    meaning: 'When / at the time of',
    jlptLevel: 'N4',
    explanation: 'Indicates the time when something happens. The tense before toki determines whether the action is completed or not at that time.',
    structure: '[Plain form / Noun + の] + とき',
    examples: [
      { japanese: '日本にいるとき、毎日寿司を食べました。', romaji: 'Nihon ni iru toki, mainichi sushi wo tabemashita.', english: 'When I was in Japan, I ate sushi every day.' },
      { japanese: '寝るとき、電気を消します。', romaji: 'Neru toki, denki wo keshimasu.', english: 'When I go to sleep, I turn off the lights.' },
      { japanese: '子供のとき、よく公園で遊びました。', romaji: 'Kodomo no toki, yoku kouen de asobimashita.', english: 'When I was a child, I often played at the park.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni iru ___, mainichi sushi wo tabemashita.', answer: 'toki', options: ['toki', 'mae ni', 'ato de', 'nagara'], english: 'When I was in Japan, I ate sushi every day.' },
      { type: 'multiple-choice', question: 'What particle connects a noun to toki?', options: ['no', 'na', 'ga', 'wo'], answer: 'no', english: 'Noun + toki connection' },
      { type: 'sentence-build', english: 'When I go to sleep, I turn off the lights.', words: ['keshimasu', 'neru', 'denki', 'toki', 'wo'], answer: ['neru', 'toki', 'denki', 'wo', 'keshimasu'] },
      { type: 'fill-blank', sentence: 'Kodomo ___ toki, yoku kouen de asobimashita.', answer: 'no', options: ['no', 'na', 'ga', 'ni'], english: 'When I was a child, I often played at the park.' }
    ]
  },
  {
    id: 'n4-gram-030',
    pattern: '～まえに (mae ni)',
    meaning: 'Before doing',
    jlptLevel: 'N4',
    explanation: 'Indicates that one action happens before another. The verb before mae ni is always in dictionary form, regardless of the overall tense.',
    structure: '[Verb dictionary form / Noun + の] + まえに',
    examples: [
      { japanese: '寝る前に歯を磨きます。', romaji: 'Neru mae ni ha wo migakimasu.', english: 'I brush my teeth before going to bed.' },
      { japanese: '食事の前に手を洗ってください。', romaji: 'Shokuji no mae ni te wo aratte kudasai.', english: 'Please wash your hands before the meal.' },
      { japanese: '出かける前に天気を確認した。', romaji: 'Dekakeru mae ni tenki wo kakunin shita.', english: 'I checked the weather before going out.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Neru ___ ha wo migakimasu.', answer: 'mae ni', options: ['mae ni', 'ato de', 'toki', 'nagara'], english: 'I brush my teeth before going to bed.' },
      { type: 'multiple-choice', question: 'What form of the verb comes before mae ni?', options: ['Dictionary form', 'Ta-form', 'Te-form', 'Masu-form'], answer: 'Dictionary form', english: 'Verb form before mae ni' },
      { type: 'sentence-build', english: 'Please wash your hands before the meal.', words: ['kudasai', 'aratte', 'mae ni', 'shokuji no', 'te wo'], answer: ['shokuji no', 'mae ni', 'te wo', 'aratte', 'kudasai'] },
      { type: 'fill-blank', sentence: 'Dekakeru ___ tenki wo kakunin shita.', answer: 'mae ni', options: ['mae ni', 'ato de', 'toki', 'nagara'], english: 'I checked the weather before going out.' }
    ]
  },
  {
    id: 'n4-gram-031',
    pattern: '～あとで (ato de)',
    meaning: 'After doing',
    jlptLevel: 'N4',
    explanation: 'Indicates that one action happens after another. The verb before ato de is in ta-form, and nouns use no before ato de.',
    structure: '[Verb ta-form / Noun + の] + あとで',
    examples: [
      { japanese: 'ご飯を食べたあとで散歩します。', romaji: 'Gohan wo tabeta ato de sanpo shimasu.', english: 'I will take a walk after eating.' },
      { japanese: '仕事のあとで飲みに行きましょう。', romaji: 'Shigoto no ato de nomi ni ikimashou.', english: 'Let\'s go for drinks after work.' },
      { japanese: 'シャワーを浴びたあとで寝ます。', romaji: 'Shawaa wo abita ato de nemasu.', english: 'I will sleep after taking a shower.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gohan wo tabeta ___ sanpo shimasu.', answer: 'ato de', options: ['ato de', 'mae ni', 'toki', 'nagara'], english: 'I will take a walk after eating.' },
      { type: 'multiple-choice', question: 'What form of the verb comes before ato de?', options: ['Ta-form', 'Dictionary form', 'Te-form', 'Nai-form'], answer: 'Ta-form', english: 'Verb form before ato de' },
      { type: 'sentence-build', english: 'Let\'s go for drinks after work.', words: ['ikimashou', 'ato de', 'shigoto no', 'nomi ni'], answer: ['shigoto no', 'ato de', 'nomi ni', 'ikimashou'] },
      { type: 'fill-blank', sentence: 'Shawaa wo abita ___ nemasu.', answer: 'ato de', options: ['ato de', 'mae ni', 'aida', 'nagara'], english: 'I will sleep after taking a shower.' }
    ]
  },
  {
    id: 'n4-gram-032',
    pattern: '～てある (te aru)',
    meaning: 'Something has been done (resultant state)',
    jlptLevel: 'N4',
    explanation: 'Describes a state resulting from someone having intentionally done something. Used with transitive verbs. The object takes が (not を).',
    structure: '[Object] が [Transitive verb te-form] + ある',
    examples: [
      { japanese: '窓が開けてあります。', romaji: 'Mado ga akete arimasu.', english: 'The window has been opened (and is still open).' },
      { japanese: 'テーブルの上に花が置いてある。', romaji: 'Teeburu no ue ni hana ga oite aru.', english: 'Flowers have been placed on the table.' },
      { japanese: '予約がしてあります。', romaji: 'Yoyaku ga shite arimasu.', english: 'A reservation has been made.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mado ga akete ___.', answer: 'arimasu', options: ['arimasu', 'imasu', 'okimasu', 'shimaimasu'], english: 'The window has been opened.' },
      { type: 'multiple-choice', question: 'What type of verb is used with ~te aru?', options: ['Transitive verbs', 'Intransitive verbs', 'Any verb', 'Only suru verbs'], answer: 'Transitive verbs', english: 'Verb type for ~te aru' },
      { type: 'sentence-build', english: 'Flowers have been placed on the table.', words: ['aru', 'oite', 'hana ga', 'teeburu no ue ni'], answer: ['teeburu no ue ni', 'hana ga', 'oite', 'aru'] },
      { type: 'fill-blank', sentence: 'Yoyaku ga shite ___.', answer: 'arimasu', options: ['arimasu', 'imasu', 'okimasu', 'kuremasu'], english: 'A reservation has been made.' }
    ]
  },
  {
    id: 'n4-gram-033',
    pattern: '～ている (te iru) - Habitual',
    meaning: 'Habitually does / is in a state of',
    jlptLevel: 'N4',
    explanation: 'Beyond the basic progressive meaning, ~te iru can express habitual actions, resulting states, or occupations. This is the N4-level expanded usage.',
    structure: '[Verb te-form] + いる',
    examples: [
      { japanese: '毎朝ジョギングをしている。', romaji: 'Maiasa jogingu wo shite iru.', english: 'I jog every morning (habitually).' },
      { japanese: '兄は東京に住んでいます。', romaji: 'Ani wa Toukyou ni sunde imasu.', english: 'My older brother lives in Tokyo.' },
      { japanese: '彼女は結婚しています。', romaji: 'Kanojo wa kekkon shite imasu.', english: 'She is married.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Maiasa jogingu wo shite ___.', answer: 'iru', options: ['iru', 'aru', 'oku', 'shimau'], english: 'I jog every morning.' },
      { type: 'multiple-choice', question: 'Which is NOT a meaning of ~te iru?', options: ['Intention to do', 'Ongoing action', 'Habitual action', 'Resulting state'], answer: 'Intention to do', english: 'Meanings of ~te iru' },
      { type: 'sentence-build', english: 'My older brother lives in Tokyo.', words: ['imasu', 'sunde', 'Toukyou ni', 'ani wa'], answer: ['ani wa', 'Toukyou ni', 'sunde', 'imasu'] },
      { type: 'fill-blank', sentence: 'Kanojo wa kekkon shite ___.', answer: 'imasu', options: ['imasu', 'arimasu', 'okimasu', 'mimasu'], english: 'She is married.' }
    ]
  },
  {
    id: 'n4-gram-034',
    pattern: '～ことにする (koto ni suru)',
    meaning: 'To decide to',
    jlptLevel: 'N4',
    explanation: 'Expresses a decision made by the speaker. Used with the dictionary form for positive decisions and nai-form for negative ones.',
    structure: '[Verb dictionary form / nai-form] + ことにする',
    examples: [
      { japanese: '来月から運動することにしました。', romaji: 'Raigetsu kara undou suru koto ni shimashita.', english: 'I decided to start exercising from next month.' },
      { japanese: 'タバコを吸わないことにした。', romaji: 'Tabako wo suwanai koto ni shita.', english: 'I decided not to smoke.' },
      { japanese: '毎日日本語を勉強することにします。', romaji: 'Mainichi nihongo wo benkyou suru koto ni shimasu.', english: 'I will decide to study Japanese every day.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Raigetsu kara undou suru ___ shimashita.', answer: 'koto ni', options: ['koto ni', 'you ni', 'tsumori', 'hazu'], english: 'I decided to start exercising from next month.' },
      { type: 'multiple-choice', question: 'What does ~koto ni suru express?', options: ['A deliberate decision', 'A natural change', 'An expectation', 'An obligation'], answer: 'A deliberate decision', english: 'Meaning of ~koto ni suru' },
      { type: 'sentence-build', english: 'I decided not to smoke.', words: ['koto ni shita', 'tabako', 'suwanai', 'wo'], answer: ['tabako', 'wo', 'suwanai', 'koto ni shita'] },
      { type: 'fill-blank', sentence: 'Mainichi nihongo wo benkyou suru ___ shimasu.', answer: 'koto ni', options: ['koto ni', 'you ni', 'no ni', 'tame ni'], english: 'I will decide to study Japanese every day.' }
    ]
  },
  {
    id: 'n4-gram-035',
    pattern: '～ことになる (koto ni naru)',
    meaning: 'It has been decided that',
    jlptLevel: 'N4',
    explanation: 'Expresses a decision made by someone other than the speaker, or a situation that has come about. Often used for external decisions, company policies, or circumstances.',
    structure: '[Verb dictionary form / nai-form] + ことになる',
    examples: [
      { japanese: '来月大阪に転勤することになりました。', romaji: 'Raigetsu Oosaka ni tenkin suru koto ni narimashita.', english: 'It has been decided that I will transfer to Osaka next month.' },
      { japanese: '会議は中止することになった。', romaji: 'Kaigi wa chuushi suru koto ni natta.', english: 'It was decided that the meeting would be canceled.' },
      { japanese: '新しいルールが始まることになりました。', romaji: 'Atarashii ruuru ga hajimaru koto ni narimashita.', english: 'It has been decided that a new rule will start.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Raigetsu Oosaka ni tenkin suru ___ narimashita.', answer: 'koto ni', options: ['koto ni', 'you ni', 'tsumori', 'hazu'], english: 'It has been decided that I will transfer to Osaka.' },
      { type: 'multiple-choice', question: 'How does ~koto ni naru differ from ~koto ni suru?', options: ['Naru implies the decision is external or impersonal', 'They are the same', 'Suru is more polite', 'Naru is for past only'], answer: 'Naru implies the decision is external or impersonal', english: 'Koto ni naru vs suru' },
      { type: 'sentence-build', english: 'It was decided that the meeting would be canceled.', words: ['koto ni natta', 'kaigi wa', 'chuushi suru'], answer: ['kaigi wa', 'chuushi suru', 'koto ni natta'] },
      { type: 'fill-blank', sentence: 'Atarashii ruuru ga hajimaru ___ narimashita.', answer: 'koto ni', options: ['koto ni', 'you ni', 'no ni', 'tame ni'], english: 'It has been decided that a new rule will start.' }
    ]
  },
  {
    id: 'n4-gram-036',
    pattern: '～ために (tame ni) - Purpose',
    meaning: 'In order to / for the sake of',
    jlptLevel: 'N4',
    explanation: 'Expresses purpose or benefit. When used with a verb, it means "in order to." When used with a noun, it means "for the sake of." The verb before tame ni is in dictionary form.',
    structure: '[Verb dictionary form / Noun + の] + ために',
    examples: [
      { japanese: '日本語を勉強するために日本に来ました。', romaji: 'Nihongo wo benkyou suru tame ni Nihon ni kimashita.', english: 'I came to Japan in order to study Japanese.' },
      { japanese: '健康のために野菜を食べます。', romaji: 'Kenkou no tame ni yasai wo tabemasu.', english: 'I eat vegetables for my health.' },
      { japanese: '試験に受かるために毎日勉強しています。', romaji: 'Shiken ni ukaru tame ni mainichi benkyou shite imasu.', english: 'I study every day in order to pass the exam.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihongo wo benkyou suru ___ Nihon ni kimashita.', answer: 'tame ni', options: ['tame ni', 'you ni', 'node', 'noni'], english: 'I came to Japan in order to study Japanese.' },
      { type: 'multiple-choice', question: 'What particle connects a noun to tame ni?', options: ['no', 'na', 'ga', 'wo'], answer: 'no', english: 'Noun + tame ni' },
      { type: 'sentence-build', english: 'I eat vegetables for my health.', words: ['tabemasu', 'tame ni', 'yasai wo', 'kenkou no'], answer: ['kenkou no', 'tame ni', 'yasai wo', 'tabemasu'] },
      { type: 'fill-blank', sentence: 'Shiken ni ukaru ___ mainichi benkyou shite imasu.', answer: 'tame ni', options: ['tame ni', 'you ni', 'node', 'kara'], english: 'I study every day in order to pass the exam.' }
    ]
  },
  {
    id: 'n4-gram-037',
    pattern: '～ために (tame ni) - Cause',
    meaning: 'Because of / due to',
    jlptLevel: 'N4',
    explanation: 'When used with a past-tense verb or a noun, tame ni can express a cause or reason, meaning "because of" or "due to." Distinguished from purpose by context and tense.',
    structure: '[Verb ta-form / Noun + の] + ために',
    examples: [
      { japanese: '台風のために電車が止まりました。', romaji: 'Taifuu no tame ni densha ga tomarimashita.', english: 'The train stopped because of the typhoon.' },
      { japanese: '事故があったために遅れました。', romaji: 'Jiko ga atta tame ni okuremashita.', english: 'I was late because there was an accident.' },
      { japanese: '雪のために学校が休みになった。', romaji: 'Yuki no tame ni gakkou ga yasumi ni natta.', english: 'School was closed due to the snow.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Taifuu no ___ densha ga tomarimashita.', answer: 'tame ni', options: ['tame ni', 'you ni', 'node', 'noni'], english: 'The train stopped because of the typhoon.' },
      { type: 'multiple-choice', question: 'How can you tell if tame ni means "purpose" or "cause"?', options: ['Cause uses past tense or noun; purpose uses dictionary form', 'They always mean the same thing', 'Cause uses dictionary form', 'Purpose uses ta-form'], answer: 'Cause uses past tense or noun; purpose uses dictionary form', english: 'Purpose vs cause tame ni' },
      { type: 'sentence-build', english: 'I was late because there was an accident.', words: ['okuremashita', 'tame ni', 'jiko ga', 'atta'], answer: ['jiko ga', 'atta', 'tame ni', 'okuremashita'] },
      { type: 'fill-blank', sentence: 'Yuki no ___ gakkou ga yasumi ni natta.', answer: 'tame ni', options: ['tame ni', 'you ni', 'noni', 'node'], english: 'School was closed due to the snow.' }
    ]
  },
  {
    id: 'n4-gram-038',
    pattern: '～てほしい (te hoshii)',
    meaning: 'Want someone to do',
    jlptLevel: 'N4',
    explanation: 'Expresses the speaker\'s desire for someone else to do something. The person you want to do the action is marked with に.',
    structure: '[Person] に [Verb te-form] + ほしい',
    examples: [
      { japanese: '先生に説明してほしいです。', romaji: 'Sensei ni setsumei shite hoshii desu.', english: 'I want the teacher to explain.' },
      { japanese: '早く来てほしい。', romaji: 'Hayaku kite hoshii.', english: 'I want you to come quickly.' },
      { japanese: '子供に野菜を食べてほしいです。', romaji: 'Kodomo ni yasai wo tabete hoshii desu.', english: 'I want my child to eat vegetables.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Sensei ni setsumei shite ___ desu.', answer: 'hoshii', options: ['hoshii', 'moraitai', 'kuretai', 'agetai'], english: 'I want the teacher to explain.' },
      { type: 'multiple-choice', question: 'Which particle marks the person you want to do the action?', options: ['ni', 'ga', 'wo', 'de'], answer: 'ni', english: 'Particle for ~te hoshii person' },
      { type: 'sentence-build', english: 'I want you to come quickly.', words: ['hoshii', 'kite', 'hayaku'], answer: ['hayaku', 'kite', 'hoshii'] },
      { type: 'fill-blank', sentence: 'Kodomo ni yasai wo tabete ___ desu.', answer: 'hoshii', options: ['hoshii', 'tai', 'moraitai', 'agetai'], english: 'I want my child to eat vegetables.' }
    ]
  },
  {
    id: 'n4-gram-039',
    pattern: '～すぎる (sugiru)',
    meaning: 'Too much / excessively',
    jlptLevel: 'N4',
    explanation: 'Expresses that something is excessive or overdone. Attached to the masu-stem of verbs and the stem of adjectives.',
    structure: '[Verb masu-stem / i-adj stem / na-adj stem] + すぎる',
    examples: [
      { japanese: '食べすぎました。', romaji: 'Tabesugimashita.', english: 'I ate too much.' },
      { japanese: 'このバッグは高すぎます。', romaji: 'Kono baggu wa takasugimasu.', english: 'This bag is too expensive.' },
      { japanese: '昨日は飲みすぎた。', romaji: 'Kinou wa nomisugita.', english: 'I drank too much yesterday.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tabe___ mashita.', answer: 'sugi', options: ['sugi', 'tai', 'sou', 'kata'], english: 'I ate too much.' },
      { type: 'multiple-choice', question: 'How is ~sugiru attached to i-adjectives?', options: ['Remove -i and add -sugiru', 'Add -sugiru to the full adjective', 'Add -sugiru after -ku', 'Remove -i and add -sou'], answer: 'Remove -i and add -sugiru', english: 'Formation with i-adjectives' },
      { type: 'sentence-build', english: 'This bag is too expensive.', words: ['takasugimasu', 'baggu wa', 'kono'], answer: ['kono', 'baggu wa', 'takasugimasu'] },
      { type: 'fill-blank', sentence: 'Kinou wa nomi___ ta.', answer: 'sugi', options: ['sugi', 'tai', 'sou', 'kata'], english: 'I drank too much yesterday.' }
    ]
  },
  {
    id: 'n4-gram-040',
    pattern: '～やすい (yasui)',
    meaning: 'Easy to do',
    jlptLevel: 'N4',
    explanation: 'Attached to the masu-stem of verbs to express that something is easy to do or tends to happen easily.',
    structure: '[Verb masu-stem] + やすい',
    examples: [
      { japanese: 'この本は読みやすいです。', romaji: 'Kono hon wa yomiyasui desu.', english: 'This book is easy to read.' },
      { japanese: 'このペンは書きやすい。', romaji: 'Kono pen wa kakiyasui.', english: 'This pen is easy to write with.' },
      { japanese: 'ガラスは割れやすいです。', romaji: 'Garasu wa wareyasui desu.', english: 'Glass breaks easily.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono hon wa yomi___ desu.', answer: 'yasui', options: ['yasui', 'nikui', 'sugiru', 'tai'], english: 'This book is easy to read.' },
      { type: 'multiple-choice', question: 'What is the opposite of ~yasui?', options: ['~nikui', '~sugiru', '~tai', '~sou'], answer: '~nikui', english: 'Opposite of ~yasui' },
      { type: 'sentence-build', english: 'This pen is easy to write with.', words: ['kakiyasui', 'pen wa', 'kono'], answer: ['kono', 'pen wa', 'kakiyasui'] },
      { type: 'fill-blank', sentence: 'Garasu wa ware___ desu.', answer: 'yasui', options: ['yasui', 'nikui', 'sugiru', 'sou'], english: 'Glass breaks easily.' }
    ]
  },
  {
    id: 'n4-gram-041',
    pattern: '～にくい (nikui)',
    meaning: 'Hard to do / difficult to',
    jlptLevel: 'N4',
    explanation: 'Attached to the masu-stem of verbs to express that something is difficult to do or unlikely to happen.',
    structure: '[Verb masu-stem] + にくい',
    examples: [
      { japanese: 'この漢字は覚えにくいです。', romaji: 'Kono kanji wa oboenikui desu.', english: 'This kanji is hard to memorize.' },
      { japanese: '彼の話は分かりにくい。', romaji: 'Kare no hanashi wa wakarinikui.', english: 'His explanation is hard to understand.' },
      { japanese: 'この靴は歩きにくいです。', romaji: 'Kono kutsu wa arukiNikui desu.', english: 'These shoes are hard to walk in.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono kanji wa oboe___ desu.', answer: 'nikui', options: ['nikui', 'yasui', 'sugiru', 'tai'], english: 'This kanji is hard to memorize.' },
      { type: 'multiple-choice', question: 'What does ~nikui express?', options: ['Difficulty of doing something', 'Ease of doing something', 'Desire to do something', 'Excessive action'], answer: 'Difficulty of doing something', english: 'Meaning of ~nikui' },
      { type: 'sentence-build', english: 'His explanation is hard to understand.', words: ['wakarinikui', 'hanashi wa', 'kare no'], answer: ['kare no', 'hanashi wa', 'wakarinikui'] },
      { type: 'fill-blank', sentence: 'Kono kutsu wa aruki___ desu.', answer: 'nikui', options: ['nikui', 'yasui', 'sugiru', 'sou'], english: 'These shoes are hard to walk in.' }
    ]
  },
  {
    id: 'n4-gram-042',
    pattern: '～かた (kata)',
    meaning: 'Way of doing / how to',
    jlptLevel: 'N4',
    explanation: 'Attached to the masu-stem of verbs to create a noun meaning "the way of doing" or "how to do." The resulting word is a noun.',
    structure: '[Verb masu-stem] + かた',
    examples: [
      { japanese: '使い方を教えてください。', romaji: 'Tsukaikata wo oshiete kudasai.', english: 'Please teach me how to use it.' },
      { japanese: '食べ方が分かりません。', romaji: 'Tabekata ga wakarimasen.', english: 'I do not know how to eat it.' },
      { japanese: 'この漢字の読み方は何ですか。', romaji: 'Kono kanji no yomikata wa nan desu ka.', english: 'What is the reading of this kanji?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tsukai___ wo oshiete kudasai.', answer: 'kata', options: ['kata', 'you', 'hou', 'mono'], english: 'Please teach me how to use it.' },
      { type: 'multiple-choice', question: 'What part of speech does ~kata create?', options: ['A noun', 'A verb', 'An adjective', 'An adverb'], answer: 'A noun', english: 'Part of speech of ~kata' },
      { type: 'sentence-build', english: 'I do not know how to eat it.', words: ['wakarimasen', 'tabekata', 'ga'], answer: ['tabekata', 'ga', 'wakarimasen'] },
      { type: 'fill-blank', sentence: 'Kono kanji no yomi___ wa nan desu ka.', answer: 'kata', options: ['kata', 'you', 'hou', 'mono'], english: 'What is the reading of this kanji?' }
    ]
  },
  {
    id: 'n4-gram-043',
    pattern: '～ほうがいい (hou ga ii)',
    meaning: 'Had better / should',
    jlptLevel: 'N4',
    explanation: 'Used to give advice or a suggestion. With ta-form it suggests "you had better do X." With nai-form it suggests "you had better not do X."',
    structure: '[Verb ta-form] + ほうがいい / [Verb nai-form] + ほうがいい',
    examples: [
      { japanese: '薬を飲んだほうがいいですよ。', romaji: 'Kusuri wo nonda hou ga ii desu yo.', english: 'You had better take medicine.' },
      { japanese: '早く寝たほうがいい。', romaji: 'Hayaku neta hou ga ii.', english: 'You should go to bed early.' },
      { japanese: 'お酒を飲まないほうがいいです。', romaji: 'Osake wo nomanai hou ga ii desu.', english: 'You had better not drink alcohol.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kusuri wo nonda ___ ii desu yo.', answer: 'hou ga', options: ['hou ga', 'no ga', 'koto ga', 'wake ga'], english: 'You had better take medicine.' },
      { type: 'multiple-choice', question: 'For positive advice, which verb form comes before hou ga ii?', options: ['Ta-form', 'Dictionary form', 'Te-form', 'Masu-form'], answer: 'Ta-form', english: 'Verb form for positive hou ga ii' },
      { type: 'sentence-build', english: 'You should go to bed early.', words: ['hou ga ii', 'neta', 'hayaku'], answer: ['hayaku', 'neta', 'hou ga ii'] },
      { type: 'fill-blank', sentence: 'Osake wo nomanai ___ ii desu.', answer: 'hou ga', options: ['hou ga', 'no ga', 'koto ga', 'mono ga'], english: 'You had better not drink alcohol.' }
    ]
  },
  {
    id: 'n4-gram-044',
    pattern: '～そうにない (sou ni nai)',
    meaning: 'Does not look like / unlikely to',
    jlptLevel: 'N4',
    explanation: 'The negative form of appearance ~sou. Expresses that something does not appear likely to happen or does not look a certain way.',
    structure: '[Verb masu-stem / Adj stem] + そうにない / そうもない',
    examples: [
      { japanese: '雨は止みそうにないです。', romaji: 'Ame wa yamisou ni nai desu.', english: 'The rain does not look like it will stop.' },
      { japanese: 'この仕事は終わりそうにない。', romaji: 'Kono shigoto wa owarisou ni nai.', english: 'This work does not look like it will finish.' },
      { japanese: '彼は来そうもありません。', romaji: 'Kare wa kisou mo arimasen.', english: 'He does not look like he will come.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ame wa yamisou ___ nai desu.', answer: 'ni', options: ['ni', 'mo', 'ga', 'de'], english: 'The rain does not look like it will stop.' },
      { type: 'multiple-choice', question: 'What does ~sou ni nai express?', options: ['Something appears unlikely', 'Something looks certain', 'Hearsay', 'Past experience'], answer: 'Something appears unlikely', english: 'Meaning of ~sou ni nai' },
      { type: 'sentence-build', english: 'This work does not look like it will finish.', words: ['ni nai', 'owarisou', 'shigoto wa', 'kono'], answer: ['kono', 'shigoto wa', 'owarisou', 'ni nai'] },
      { type: 'fill-blank', sentence: 'Kare wa kisou ___ arimasen.', answer: 'mo', options: ['mo', 'ni', 'ga', 'wa'], english: 'He does not look like he will come.' }
    ]
  },
  {
    id: 'n4-gram-045',
    pattern: '～てくる (te kuru)',
    meaning: 'To come to do / to start to / to go and come back',
    jlptLevel: 'N4',
    explanation: 'Expresses an action that moves toward the speaker, a change that has begun, or going somewhere to do something and returning.',
    structure: '[Verb te-form] + くる',
    examples: [
      { japanese: '雨が降ってきました。', romaji: 'Ame ga futte kimashita.', english: 'It started to rain.' },
      { japanese: 'ちょっと買ってきます。', romaji: 'Chotto katte kimasu.', english: 'I will go buy something and come back.' },
      { japanese: '暗くなってきた。', romaji: 'Kuraku natte kita.', english: 'It has started getting dark.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ame ga futte ___.', answer: 'kimashita', options: ['kimashita', 'ikimashita', 'shimaimashita', 'okimashita'], english: 'It started to rain.' },
      { type: 'multiple-choice', question: 'What does ~te kuru indicate about direction?', options: ['Movement toward the speaker or onset of change', 'Movement away from the speaker', 'Completion', 'Preparation'], answer: 'Movement toward the speaker or onset of change', english: 'Direction of ~te kuru' },
      { type: 'sentence-build', english: 'I will go buy something and come back.', words: ['kimasu', 'katte', 'chotto'], answer: ['chotto', 'katte', 'kimasu'] },
      { type: 'fill-blank', sentence: 'Kuraku natte ___.', answer: 'kita', options: ['kita', 'itta', 'shimatta', 'oita'], english: 'It has started getting dark.' }
    ]
  },
  {
    id: 'n4-gram-046',
    pattern: '～ていく (te iku)',
    meaning: 'To go on doing / to continue / to go away',
    jlptLevel: 'N4',
    explanation: 'Expresses an action that moves away from the speaker, a change that will continue into the future, or doing something before leaving.',
    structure: '[Verb te-form] + いく',
    examples: [
      { japanese: 'これからも頑張っていきます。', romaji: 'Kore kara mo ganbatte ikimasu.', english: 'I will continue to do my best from now on.' },
      { japanese: '鳥が飛んでいった。', romaji: 'Tori ga tonde itta.', english: 'The bird flew away.' },
      { japanese: '人口が減っていくでしょう。', romaji: 'Jinkou ga hette iku deshou.', english: 'The population will probably continue to decrease.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kore kara mo ganbatte ___.', answer: 'ikimasu', options: ['ikimasu', 'kimasu', 'shimaimasu', 'okimasu'], english: 'I will continue to do my best.' },
      { type: 'multiple-choice', question: 'What direction does ~te iku indicate?', options: ['Away from the speaker or continuing into the future', 'Toward the speaker', 'Completion', 'Preparation'], answer: 'Away from the speaker or continuing into the future', english: 'Direction of ~te iku' },
      { type: 'sentence-build', english: 'The bird flew away.', words: ['itta', 'tonde', 'tori ga'], answer: ['tori ga', 'tonde', 'itta'] },
      { type: 'fill-blank', sentence: 'Jinkou ga hette ___ deshou.', answer: 'iku', options: ['iku', 'kuru', 'shimau', 'oku'], english: 'The population will probably continue to decrease.' }
    ]
  },
  {
    id: 'n4-gram-047',
    pattern: '～と (to) - Conditional',
    meaning: 'When / if (natural consequence)',
    jlptLevel: 'N4',
    explanation: 'Expresses a natural, habitual, or automatic consequence. When A happens, B naturally follows. Not used for requests, suggestions, or volitional actions in the result clause.',
    structure: '[Verb dictionary form / nai-form] + と',
    examples: [
      { japanese: 'このボタンを押すと、ドアが開きます。', romaji: 'Kono botan wo osu to, doa ga akimasu.', english: 'When you press this button, the door opens.' },
      { japanese: '春になると、桜が咲きます。', romaji: 'Haru ni naru to, sakura ga sakimasu.', english: 'When spring comes, the cherry blossoms bloom.' },
      { japanese: '右に曲がると、駅があります。', romaji: 'Migi ni magaru to, eki ga arimasu.', english: 'If you turn right, there is a station.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono botan wo osu ___, doa ga akimasu.', answer: 'to', options: ['to', 'tara', 'ba', 'nara'], english: 'When you press this button, the door opens.' },
      { type: 'multiple-choice', question: 'Which result clause is NOT appropriate with the ~to conditional?', options: ['A request or suggestion', 'A natural consequence', 'A habitual result', 'An automatic result'], answer: 'A request or suggestion', english: 'Restriction on ~to conditional' },
      { type: 'sentence-build', english: 'When spring comes, the cherry blossoms bloom.', words: ['sakimasu', 'sakura ga', 'naru to', 'haru ni'], answer: ['haru ni', 'naru to', 'sakura ga', 'sakimasu'] },
      { type: 'fill-blank', sentence: 'Migi ni magaru ___, eki ga arimasu.', answer: 'to', options: ['to', 'tara', 'ba', 'nara'], english: 'If you turn right, there is a station.' }
    ]
  },
  {
    id: 'n4-gram-048',
    pattern: 'お～になる (o ~ ni naru)',
    meaning: 'Honorific form (respectful)',
    jlptLevel: 'N4',
    explanation: 'An honorific pattern used to show respect for the actions of others, especially superiors. Formed by placing the verb masu-stem between お and になる.',
    structure: 'お + [Verb masu-stem] + になる',
    examples: [
      { japanese: '先生はもうお帰りになりました。', romaji: 'Sensei wa mou okaeri ni narimashita.', english: 'The teacher has already gone home (respectful).' },
      { japanese: 'どうぞお座りになってください。', romaji: 'Douzo osuwari ni natte kudasai.', english: 'Please have a seat (respectful).' },
      { japanese: '社長はこの本をお読みになりました。', romaji: 'Shachou wa kono hon wo oyomi ni narimashita.', english: 'The president read this book (respectful).' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Sensei wa mou o___ ni narimashita.', answer: 'kaeri', options: ['kaeri', 'kaeru', 'kaette', 'kaetta'], english: 'The teacher has already gone home (respectful).' },
      { type: 'multiple-choice', question: 'When do you use o~ni naru?', options: ['To show respect for someone else\'s actions', 'To humble your own actions', 'For casual speech', 'For self-introduction'], answer: 'To show respect for someone else\'s actions', english: 'Usage of o~ni naru' },
      { type: 'sentence-build', english: 'Please have a seat (respectful).', words: ['kudasai', 'ni natte', 'osuwari', 'douzo'], answer: ['douzo', 'osuwari', 'ni natte', 'kudasai'] },
      { type: 'fill-blank', sentence: 'Shachou wa kono hon wo o___ ni narimashita.', answer: 'yomi', options: ['yomi', 'yomu', 'yonde', 'yonda'], english: 'The president read this book (respectful).' }
    ]
  },
  {
    id: 'n4-gram-049',
    pattern: 'お～する (o ~ suru)',
    meaning: 'Humble form (self-lowering)',
    jlptLevel: 'N4',
    explanation: 'A humble pattern used to lower the speaker\'s own actions when talking to or about a superior. Shows respect by being modest about one\'s own actions.',
    structure: 'お + [Verb masu-stem] + する',
    examples: [
      { japanese: '荷物をお持ちします。', romaji: 'Nimotsu wo omochi shimasu.', english: 'I will carry your luggage (humble).' },
      { japanese: 'お電話をお待ちしております。', romaji: 'Odenwa wo omachi shite orimasu.', english: 'I am waiting for your call (humble).' },
      { japanese: '先生にお会いしました。', romaji: 'Sensei ni oai shimashita.', english: 'I met the teacher (humble).' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nimotsu wo o___ shimasu.', answer: 'mochi', options: ['mochi', 'motsu', 'motte', 'motta'], english: 'I will carry your luggage (humble).' },
      { type: 'multiple-choice', question: 'When do you use o~suru?', options: ['To humble your own actions before a superior', 'To elevate someone else\'s actions', 'For casual speech', 'For commands'], answer: 'To humble your own actions before a superior', english: 'Usage of o~suru' },
      { type: 'sentence-build', english: 'I met the teacher (humble).', words: ['shimashita', 'oai', 'sensei ni'], answer: ['sensei ni', 'oai', 'shimashita'] },
      { type: 'fill-blank', sentence: 'Odenwa wo o___ shite orimasu.', answer: 'machi', options: ['machi', 'matsu', 'matte', 'matta'], english: 'I am waiting for your call (humble).' }
    ]
  },
  {
    id: 'n4-gram-050',
    pattern: '～てすみません (te sumimasen)',
    meaning: 'Sorry for doing',
    jlptLevel: 'N4',
    explanation: 'Used to apologize for an action. The te-form describes what you are sorry about.',
    structure: '[Verb te-form] + すみません',
    examples: [
      { japanese: '遅れてすみません。', romaji: 'Okurete sumimasen.', english: 'Sorry for being late.' },
      { japanese: '待たせてすみませんでした。', romaji: 'Matasete sumimasen deshita.', english: 'Sorry for making you wait.' },
      { japanese: 'うるさくしてすみません。', romaji: 'Urusaku shite sumimasen.', english: 'Sorry for being noisy.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Okurete ___.', answer: 'sumimasen', options: ['sumimasen', 'arigatou', 'kudasai', 'onegaishimasu'], english: 'Sorry for being late.' },
      { type: 'multiple-choice', question: 'What verb form comes before sumimasen in an apology?', options: ['Te-form', 'Dictionary form', 'Nai-form', 'Ta-form'], answer: 'Te-form', english: 'Form before sumimasen' },
      { type: 'sentence-build', english: 'Sorry for making you wait.', words: ['sumimasen deshita', 'matasete'], answer: ['matasete', 'sumimasen deshita'] },
      { type: 'fill-blank', sentence: 'Urusaku shite ___.', answer: 'sumimasen', options: ['sumimasen', 'arigatou', 'kudasai', 'imasu'], english: 'Sorry for being noisy.' }
    ]
  },
  {
    id: 'n4-gram-051',
    pattern: '～ところ (tokoro)',
    meaning: 'About to / in the middle of / just finished',
    jlptLevel: 'N4',
    explanation: 'Expresses the timing of an action. Dictionary form + tokoro = about to do. Te-iru + tokoro = in the middle of. Ta + tokoro = just did.',
    structure: '[Dict. form / te-iru / ta-form] + ところ',
    examples: [
      { japanese: '今から出かけるところです。', romaji: 'Ima kara dekakeru tokoro desu.', english: 'I am about to go out.' },
      { japanese: '今ご飯を食べているところです。', romaji: 'Ima gohan wo tabete iru tokoro desu.', english: 'I am in the middle of eating.' },
      { japanese: '今帰ってきたところです。', romaji: 'Ima kaette kita tokoro desu.', english: 'I just got home.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ima kara dekakeru ___ desu.', answer: 'tokoro', options: ['tokoro', 'toki', 'uchi', 'aida'], english: 'I am about to go out.' },
      { type: 'multiple-choice', question: 'Which form before tokoro means "just finished"?', options: ['Ta-form', 'Dictionary form', 'Te-iru form', 'Nai-form'], answer: 'Ta-form', english: 'Just finished + tokoro' },
      { type: 'sentence-build', english: 'I am in the middle of eating.', words: ['tokoro desu', 'tabete iru', 'gohan wo', 'ima'], answer: ['ima', 'gohan wo', 'tabete iru', 'tokoro desu'] },
      { type: 'fill-blank', sentence: 'Ima kaette kita ___ desu.', answer: 'tokoro', options: ['tokoro', 'toki', 'bakari', 'uchi'], english: 'I just got home.' }
    ]
  },
  {
    id: 'n4-gram-052',
    pattern: '～ばかり (bakari)',
    meaning: 'Just did / nothing but',
    jlptLevel: 'N4',
    explanation: 'With ta-form, expresses that something was done very recently. With dictionary form, expresses that someone does nothing but that action.',
    structure: '[Verb ta-form] + ばかり (just did) / [Verb dict. form] + ばかり (nothing but)',
    examples: [
      { japanese: '日本に来たばかりです。', romaji: 'Nihon ni kita bakari desu.', english: 'I just came to Japan.' },
      { japanese: '彼はゲームをするばかりです。', romaji: 'Kare wa geemu wo suru bakari desu.', english: 'He does nothing but play games.' },
      { japanese: 'さっき起きたばかりです。', romaji: 'Sakki okita bakari desu.', english: 'I just woke up a moment ago.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni kita ___ desu.', answer: 'bakari', options: ['bakari', 'tokoro', 'toki', 'dake'], english: 'I just came to Japan.' },
      { type: 'multiple-choice', question: 'What does [dictionary form] + bakari mean?', options: ['Nothing but / only does', 'Just did recently', 'About to do', 'Trying to do'], answer: 'Nothing but / only does', english: 'Dict. form + bakari' },
      { type: 'sentence-build', english: 'He does nothing but play games.', words: ['bakari desu', 'suru', 'geemu wo', 'kare wa'], answer: ['kare wa', 'geemu wo', 'suru', 'bakari desu'] },
      { type: 'fill-blank', sentence: 'Sakki okita ___ desu.', answer: 'bakari', options: ['bakari', 'tokoro', 'dake', 'made'], english: 'I just woke up a moment ago.' }
    ]
  },
  {
    id: 'n4-gram-053',
    pattern: '～はずがない (hazu ga nai)',
    meaning: 'There is no way that / cannot be',
    jlptLevel: 'N4',
    explanation: 'The negative form of ~hazu. Expresses strong disbelief or conviction that something is impossible or cannot be true.',
    structure: '[Plain form] + はずがない',
    examples: [
      { japanese: '彼がうそをつくはずがない。', romaji: 'Kare ga uso wo tsuku hazu ga nai.', english: 'There is no way he would lie.' },
      { japanese: 'そんなに簡単なはずがありません。', romaji: 'Sonna ni kantan na hazu ga arimasen.', english: 'There is no way it is that easy.' },
      { japanese: '彼女が知らないはずがない。', romaji: 'Kanojo ga shiranai hazu ga nai.', english: 'There is no way she does not know.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kare ga uso wo tsuku ___ nai.', answer: 'hazu ga', options: ['hazu ga', 'wake ga', 'koto ga', 'mono ga'], english: 'There is no way he would lie.' },
      { type: 'multiple-choice', question: 'What does ~hazu ga nai express?', options: ['Strong disbelief that something is true', 'Uncertain guess', 'Polite request', 'Past experience'], answer: 'Strong disbelief that something is true', english: 'Meaning of ~hazu ga nai' },
      { type: 'sentence-build', english: 'There is no way it is that easy.', words: ['arimasen', 'hazu ga', 'kantan na', 'sonna ni'], answer: ['sonna ni', 'kantan na', 'hazu ga', 'arimasen'] },
      { type: 'fill-blank', sentence: 'Kanojo ga shiranai ___ nai.', answer: 'hazu ga', options: ['hazu ga', 'wake ga', 'sou ga', 'no ga'], english: 'There is no way she does not know.' }
    ]
  },
  {
    id: 'n4-gram-054',
    pattern: '～かもしれない (kamoshirenai)',
    meaning: 'Might / maybe / perhaps',
    jlptLevel: 'N4',
    explanation: 'Expresses possibility or uncertainty. The speaker thinks something might be true but is not sure. Less certain than ~deshou.',
    structure: '[Plain form] + かもしれない',
    examples: [
      { japanese: '明日は雨かもしれません。', romaji: 'Ashita wa ame kamoshiremasen.', english: 'It might rain tomorrow.' },
      { japanese: '彼は来ないかもしれない。', romaji: 'Kare wa konai kamoshirenai.', english: 'He might not come.' },
      { japanese: 'この答えは間違っているかもしれません。', romaji: 'Kono kotae wa machigatte iru kamoshiremasen.', english: 'This answer might be wrong.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ame ___.', answer: 'kamoshiremasen', options: ['kamoshiremasen', 'deshou', 'hazu desu', 'rashii desu'], english: 'It might rain tomorrow.' },
      { type: 'multiple-choice', question: 'How certain is the speaker with ~kamoshirenai?', options: ['Not very certain — just a possibility', 'Very certain', 'Completely sure', 'Based on evidence'], answer: 'Not very certain — just a possibility', english: 'Certainty level of kamoshirenai' },
      { type: 'sentence-build', english: 'He might not come.', words: ['kamoshirenai', 'konai', 'kare wa'], answer: ['kare wa', 'konai', 'kamoshirenai'] },
      { type: 'fill-blank', sentence: 'Kono kotae wa machigatte iru ___.', answer: 'kamoshiremasen', options: ['kamoshiremasen', 'hazu desu', 'sou desu', 'deshou'], english: 'This answer might be wrong.' }
    ]
  },
  {
    id: 'n4-gram-055',
    pattern: '～てもいい (temo ii)',
    meaning: 'May / it is okay to',
    jlptLevel: 'N4',
    explanation: 'Expresses permission. Used to ask for or give permission to do something.',
    structure: '[Verb te-form] + もいい',
    examples: [
      { japanese: '写真を撮ってもいいですか。', romaji: 'Shashin wo totte mo ii desu ka.', english: 'May I take a photo?' },
      { japanese: 'ここに座ってもいいですよ。', romaji: 'Koko ni suwatte mo ii desu yo.', english: 'You may sit here.' },
      { japanese: '帰ってもいいですか。', romaji: 'Kaette mo ii desu ka.', english: 'May I go home?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Shashin wo totte ___ ii desu ka.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'May I take a photo?' },
      { type: 'multiple-choice', question: 'What does ~temo ii express?', options: ['Permission', 'Obligation', 'Prohibition', 'Desire'], answer: 'Permission', english: 'Meaning of ~temo ii' },
      { type: 'sentence-build', english: 'You may sit here.', words: ['ii desu yo', 'suwatte mo', 'koko ni'], answer: ['koko ni', 'suwatte mo', 'ii desu yo'] },
      { type: 'fill-blank', sentence: 'Kaette ___ ii desu ka.', answer: 'mo', options: ['mo', 'wa', 'ga', 'to'], english: 'May I go home?' }
    ]
  },
  {
    id: 'n4-gram-056',
    pattern: '～てはいけない (tewa ikenai)',
    meaning: 'Must not / may not',
    jlptLevel: 'N4',
    explanation: 'Expresses prohibition. States that something is not allowed or must not be done.',
    structure: '[Verb te-form] + はいけない',
    examples: [
      { japanese: 'ここでタバコを吸ってはいけません。', romaji: 'Koko de tabako wo sutte wa ikemasen.', english: 'You must not smoke here.' },
      { japanese: '授業中に携帯を使ってはいけない。', romaji: 'Jugyouchuu ni keitai wo tsukatte wa ikenai.', english: 'You must not use your phone during class.' },
      { japanese: 'お酒を飲んで運転してはいけません。', romaji: 'Osake wo nonde unten shite wa ikemasen.', english: 'You must not drink and drive.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko de tabako wo sutte ___ ikemasen.', answer: 'wa', options: ['wa', 'mo', 'ga', 'to'], english: 'You must not smoke here.' },
      { type: 'multiple-choice', question: 'What does ~tewa ikenai express?', options: ['Prohibition', 'Permission', 'Obligation', 'Suggestion'], answer: 'Prohibition', english: 'Meaning of ~tewa ikenai' },
      { type: 'sentence-build', english: 'You must not use your phone during class.', words: ['wa ikenai', 'tsukatte', 'keitai wo', 'jugyouchuu ni'], answer: ['jugyouchuu ni', 'keitai wo', 'tsukatte', 'wa ikenai'] },
      { type: 'fill-blank', sentence: 'Osake wo nonde unten shite ___ ikemasen.', answer: 'wa', options: ['wa', 'mo', 'ga', 'ni'], english: 'You must not drink and drive.' }
    ]
  },
  {
    id: 'n4-gram-057',
    pattern: '～なければならない (nakereba naranai)',
    meaning: 'Must / have to',
    jlptLevel: 'N4',
    explanation: 'Expresses obligation or necessity. Literally means "if one does not do it, it will not do." Has several shorter forms: ~nakucha, ~nakya.',
    structure: '[Verb nai-stem] + なければならない',
    examples: [
      { japanese: '宿題をしなければなりません。', romaji: 'Shukudai wo shinakereba narimasen.', english: 'I must do my homework.' },
      { japanese: '明日早く起きなければならない。', romaji: 'Ashita hayaku okinakereba naranai.', english: 'I have to wake up early tomorrow.' },
      { japanese: '薬を飲まなければなりません。', romaji: 'Kusuri wo nomanakereba narimasen.', english: 'I must take the medicine.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Shukudai wo shi___ narimasen.', answer: 'nakereba', options: ['nakereba', 'nakute wa', 'nai to', 'naide'], english: 'I must do my homework.' },
      { type: 'multiple-choice', question: 'What does ~nakereba naranai express?', options: ['Obligation or necessity', 'Permission', 'Prohibition', 'Desire'], answer: 'Obligation or necessity', english: 'Meaning of ~nakereba naranai' },
      { type: 'sentence-build', english: 'I have to wake up early tomorrow.', words: ['naranai', 'okinakereba', 'hayaku', 'ashita'], answer: ['ashita', 'hayaku', 'okinakereba', 'naranai'] },
      { type: 'fill-blank', sentence: 'Kusuri wo noma___ narimasen.', answer: 'nakereba', options: ['nakereba', 'nakute wa', 'nai to', 'naide wa'], english: 'I must take the medicine.' }
    ]
  },
  {
    id: 'n4-gram-058',
    pattern: '～なくてもいい (nakutemo ii)',
    meaning: 'Do not have to / it is okay not to',
    jlptLevel: 'N4',
    explanation: 'Expresses that something is not necessary. It is the opposite of ~nakereba naranai.',
    structure: '[Verb nai-stem] + なくてもいい',
    examples: [
      { japanese: '明日は来なくてもいいです。', romaji: 'Ashita wa konakutemo ii desu.', english: 'You do not have to come tomorrow.' },
      { japanese: '全部食べなくてもいいですよ。', romaji: 'Zenbu tabenakutemo ii desu yo.', english: 'You do not have to eat everything.' },
      { japanese: '急がなくてもいい。', romaji: 'Isoganakutemo ii.', english: 'You do not have to hurry.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ko___ ii desu.', answer: 'nakutemo', options: ['nakutemo', 'nakereba', 'naide', 'nai to'], english: 'You do not have to come tomorrow.' },
      { type: 'multiple-choice', question: 'What does ~nakutemo ii express?', options: ['Lack of obligation', 'Prohibition', 'Permission', 'Strong obligation'], answer: 'Lack of obligation', english: 'Meaning of ~nakutemo ii' },
      { type: 'sentence-build', english: 'You do not have to eat everything.', words: ['ii desu yo', 'tabenakutemo', 'zenbu'], answer: ['zenbu', 'tabenakutemo', 'ii desu yo'] },
      { type: 'fill-blank', sentence: 'Isoga___ ii.', answer: 'nakutemo', options: ['nakutemo', 'nakereba', 'naide', 'nai to'], english: 'You do not have to hurry.' }
    ]
  },
  {
    id: 'n4-gram-059',
    pattern: '～あいだに (aida ni)',
    meaning: 'While / during',
    jlptLevel: 'N4',
    explanation: 'Expresses that something happens during a period of time. The event in the main clause occurs at some point within the duration described before aida ni.',
    structure: '[Verb te-iru / Noun + の] + あいだに',
    examples: [
      { japanese: '寝ている間に雨が降りました。', romaji: 'Nete iru aida ni ame ga furimashita.', english: 'While I was sleeping, it rained.' },
      { japanese: '夏休みの間に旅行に行きたい。', romaji: 'Natsuyasumi no aida ni ryokou ni ikitai.', english: 'I want to travel during summer vacation.' },
      { japanese: '母が買い物をしている間に掃除した。', romaji: 'Haha ga kaimono wo shite iru aida ni souji shita.', english: 'I cleaned while my mother was shopping.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nete iru ___ ame ga furimashita.', answer: 'aida ni', options: ['aida ni', 'toki', 'nagara', 'uchi ni'], english: 'While I was sleeping, it rained.' },
      { type: 'multiple-choice', question: 'What does aida ni emphasize?', options: ['Something happens at a point during a period', 'Two simultaneous actions by one person', 'A reason', 'A contrast'], answer: 'Something happens at a point during a period', english: 'Meaning of aida ni' },
      { type: 'sentence-build', english: 'I want to travel during summer vacation.', words: ['ikitai', 'ryokou ni', 'aida ni', 'natsuyasumi no'], answer: ['natsuyasumi no', 'aida ni', 'ryokou ni', 'ikitai'] },
      { type: 'fill-blank', sentence: 'Haha ga kaimono wo shite iru ___ souji shita.', answer: 'aida ni', options: ['aida ni', 'toki', 'nagara', 'mae ni'], english: 'I cleaned while my mother was shopping.' }
    ]
  },
  {
    id: 'n4-gram-060',
    pattern: '～ようと思う (you to omou)',
    meaning: 'I think I will / I am thinking of',
    jlptLevel: 'N4',
    explanation: 'Combines the volitional form with to omou to express the speaker\'s intention or plan. ~you to omotte iru indicates an ongoing plan.',
    structure: '[Verb volitional form] + と思う',
    examples: [
      { japanese: '来年留学しようと思っています。', romaji: 'Rainen ryuugaku shiyou to omotte imasu.', english: 'I am thinking of studying abroad next year.' },
      { japanese: 'ダイエットをしようと思います。', romaji: 'Daietto wo shiyou to omoimasu.', english: 'I think I will go on a diet.' },
      { japanese: '新しい仕事を探そうと思っている。', romaji: 'Atarashii shigoto wo sagasou to omotte iru.', english: 'I am thinking of looking for a new job.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Rainen ryuugaku shiyou ___ omotte imasu.', answer: 'to', options: ['to', 'ni', 'ga', 'wo'], english: 'I am thinking of studying abroad next year.' },
      { type: 'multiple-choice', question: 'What is the difference between ~you to omou and ~you to omotte iru?', options: ['Omotte iru indicates an ongoing intention, omou a new one', 'They are the same', 'Omou is more certain', 'Omotte iru is past tense'], answer: 'Omotte iru indicates an ongoing intention, omou a new one', english: 'Omou vs omotte iru' },
      { type: 'sentence-build', english: 'I think I will go on a diet.', words: ['to omoimasu', 'shiyou', 'daietto wo'], answer: ['daietto wo', 'shiyou', 'to omoimasu'] },
      { type: 'fill-blank', sentence: 'Atarashii shigoto wo sagasou ___ omotte iru.', answer: 'to', options: ['to', 'ni', 'ga', 'wo'], english: 'I am thinking of looking for a new job.' }
    ]
  },
];
