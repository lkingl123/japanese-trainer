import { GrammarPattern } from '@/lib/types';

export const n5Grammar: GrammarPattern[] = [
  {
    id: 'n5-gram-001',
    pattern: 'は (wa)',
    meaning: 'Topic marker particle',
    jlptLevel: 'N5',
    explanation: 'The particle は (pronounced "wa") marks the topic of a sentence. It tells the listener what you are talking about.',
    structure: '[Topic] は [Comment]',
    examples: [
      { japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
      { japanese: 'これは本です。', romaji: 'Kore wa hon desu.', english: 'This is a book.' },
      { japanese: '田中さんは先生です。', romaji: 'Tanaka-san wa sensei desu.', english: 'Mr. Tanaka is a teacher.' },
      { japanese: '東京は大きいです。', romaji: 'Toukyou wa ookii desu.', english: 'Tokyo is big.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Watashi ___ gakusei desu.', answer: 'wa', options: ['wa', 'ga', 'wo', 'ni'], english: 'I am a student.' },
      { type: 'fill-blank', sentence: 'Kore ___ hon desu.', answer: 'wa', options: ['wa', 'de', 'no', 'to'], english: 'This is a book.' },
      { type: 'sentence-build', english: 'Mr. Tanaka is a teacher.', words: ['desu', 'wa', 'sensei', 'Tanaka-san'], answer: ['Tanaka-san', 'wa', 'sensei', 'desu'] },
      { type: 'multiple-choice', question: 'Which particle marks the topic of a sentence?', options: ['wa', 'ga', 'wo', 'ni'], answer: 'wa', english: 'Topic marker particle' },
      { type: 'fill-blank', sentence: 'Toukyou ___ ookii desu.', answer: 'wa', options: ['wa', 'ga', 'de', 'mo'], english: 'Tokyo is big.' }
    ]
  },
  {
    id: 'n5-gram-002',
    pattern: 'が (ga)',
    meaning: 'Subject marker particle',
    jlptLevel: 'N5',
    explanation: 'The particle が marks the grammatical subject of a sentence. It emphasizes what or who performs the action or exists. Often used with existence verbs (iru/aru), adjectives of desire, and ability.',
    structure: '[Subject] が [Predicate]',
    examples: [
      { japanese: '猫がいます。', romaji: 'Neko ga imasu.', english: 'There is a cat.' },
      { japanese: '水が欲しいです。', romaji: 'Mizu ga hoshii desu.', english: 'I want water.' },
      { japanese: '誰が来ましたか。', romaji: 'Dare ga kimashita ka.', english: 'Who came?' },
      { japanese: '日本語が分かります。', romaji: 'Nihongo ga wakarimasu.', english: 'I understand Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Neko ___ imasu.', answer: 'ga', options: ['wa', 'ga', 'wo', 'ni'], english: 'There is a cat.' },
      { type: 'fill-blank', sentence: 'Mizu ___ hoshii desu.', answer: 'ga', options: ['wa', 'ga', 'wo', 'de'], english: 'I want water.' },
      { type: 'multiple-choice', question: 'Which particle is used with "wakarimasu" (understand)?', options: ['ga', 'wo', 'wa', 'ni'], answer: 'ga', english: 'I understand ~' },
      { type: 'sentence-build', english: 'Who came?', words: ['ka', 'ga', 'dare', 'kimashita'], answer: ['dare', 'ga', 'kimashita', 'ka'] },
      { type: 'fill-blank', sentence: 'Nihongo ___ wakarimasu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'de'], english: 'I understand Japanese.' }
    ]
  },
  {
    id: 'n5-gram-003',
    pattern: 'を (wo)',
    meaning: 'Direct object marker particle',
    jlptLevel: 'N5',
    explanation: 'The particle を (pronounced "o") marks the direct object of a verb — the thing that receives the action.',
    structure: '[Object] を [Verb]',
    examples: [
      { japanese: 'パンを食べます。', romaji: 'Pan wo tabemasu.', english: 'I eat bread.' },
      { japanese: '水を飲みます。', romaji: 'Mizu wo nomimasu.', english: 'I drink water.' },
      { japanese: '本を読みます。', romaji: 'Hon wo yomimasu.', english: 'I read a book.' },
      { japanese: '映画を見ます。', romaji: 'Eiga wo mimasu.', english: 'I watch a movie.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Pan ___ tabemasu.', answer: 'wo', options: ['wo', 'wa', 'ga', 'ni'], english: 'I eat bread.' },
      { type: 'fill-blank', sentence: 'Hon ___ yomimasu.', answer: 'wo', options: ['wo', 'ga', 'de', 'to'], english: 'I read a book.' },
      { type: 'sentence-build', english: 'I drink water.', words: ['nomimasu', 'wo', 'mizu'], answer: ['mizu', 'wo', 'nomimasu'] },
      { type: 'multiple-choice', question: 'What does the particle を mark?', options: ['Direct object', 'Topic', 'Location', 'Direction'], answer: 'Direct object', english: 'Object marker particle' },
      { type: 'sentence-build', english: 'I watch a movie.', words: ['mimasu', 'eiga', 'wo'], answer: ['eiga', 'wo', 'mimasu'] }
    ]
  },
  {
    id: 'n5-gram-004',
    pattern: 'に (ni) - Location/Time',
    meaning: 'Location of existence / Specific time',
    jlptLevel: 'N5',
    explanation: 'The particle に indicates where something or someone exists (with imasu/arimasu), or marks a specific point in time.',
    structure: '[Place] に [imasu/arimasu] / [Time] に [Verb]',
    examples: [
      { japanese: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', english: 'I go to school.' },
      { japanese: '七時に起きます。', romaji: 'Shichiji ni okimasu.', english: 'I wake up at seven o\'clock.' },
      { japanese: '部屋に猫がいます。', romaji: 'Heya ni neko ga imasu.', english: 'There is a cat in the room.' },
      { japanese: '月曜日に会いましょう。', romaji: 'Getsuyoubi ni aimashou.', english: 'Let\'s meet on Monday.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gakkou ___ ikimasu.', answer: 'ni', options: ['ni', 'de', 'wo', 'wa'], english: 'I go to school.' },
      { type: 'fill-blank', sentence: 'Shichiji ___ okimasu.', answer: 'ni', options: ['ni', 'de', 'wa', 'ga'], english: 'I wake up at seven o\'clock.' },
      { type: 'sentence-build', english: 'There is a cat in the room.', words: ['imasu', 'ni', 'ga', 'heya', 'neko'], answer: ['heya', 'ni', 'neko', 'ga', 'imasu'] },
      { type: 'multiple-choice', question: 'Which particle marks a specific time?', options: ['ni', 'de', 'wa', 'wo'], answer: 'ni', english: 'Time marker' },
      { type: 'fill-blank', sentence: 'Heya ___ neko ga imasu.', answer: 'ni', options: ['ni', 'de', 'wa', 'e'], english: 'There is a cat in the room.' }
    ]
  },
  {
    id: 'n5-gram-005',
    pattern: 'で (de)',
    meaning: 'Location of action / Means / Reason',
    jlptLevel: 'N5',
    explanation: 'The particle で marks where an action takes place (not existence), the means or tool used, or a reason.',
    structure: '[Place] で [Action verb] / [Means] で [Verb]',
    examples: [
      { japanese: '学校で勉強します。', romaji: 'Gakkou de benkyou shimasu.', english: 'I study at school.' },
      { japanese: 'バスで行きます。', romaji: 'Basu de ikimasu.', english: 'I go by bus.' },
      { japanese: '箸で食べます。', romaji: 'Hashi de tabemasu.', english: 'I eat with chopsticks.' },
      { japanese: '日本語で話します。', romaji: 'Nihongo de hanashimasu.', english: 'I speak in Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gakkou ___ benkyou shimasu.', answer: 'de', options: ['de', 'ni', 'wa', 'wo'], english: 'I study at school.' },
      { type: 'fill-blank', sentence: 'Basu ___ ikimasu.', answer: 'de', options: ['de', 'ni', 'wo', 'wa'], english: 'I go by bus.' },
      { type: 'multiple-choice', question: 'Which particle marks the location where an ACTION happens?', options: ['de', 'ni', 'wa', 'ga'], answer: 'de', english: 'Action location marker' },
      { type: 'sentence-build', english: 'I eat with chopsticks.', words: ['tabemasu', 'de', 'hashi'], answer: ['hashi', 'de', 'tabemasu'] },
      { type: 'fill-blank', sentence: 'Nihongo ___ hanashimasu.', answer: 'de', options: ['de', 'wo', 'ga', 'ni'], english: 'I speak in Japanese.' }
    ]
  },
  {
    id: 'n5-gram-006',
    pattern: 'へ (e)',
    meaning: 'Direction particle',
    jlptLevel: 'N5',
    explanation: 'The particle へ (pronounced "e") indicates the direction of movement. It is often interchangeable with に for destination, but emphasizes the direction rather than the arrival point.',
    structure: '[Destination] へ [Movement verb]',
    examples: [
      { japanese: '日本へ行きます。', romaji: 'Nihon e ikimasu.', english: 'I go to Japan.' },
      { japanese: '家へ帰ります。', romaji: 'Ie e kaerimasu.', english: 'I return home.' },
      { japanese: '右へ曲がってください。', romaji: 'Migi e magatte kudasai.', english: 'Please turn right.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ___ ikimasu.', answer: 'e', options: ['e', 'de', 'wo', 'wa'], english: 'I go to Japan.' },
      { type: 'fill-blank', sentence: 'Ie ___ kaerimasu.', answer: 'e', options: ['e', 'de', 'ni', 'wa'], english: 'I return home.' },
      { type: 'multiple-choice', question: 'The particle へ emphasizes what?', options: ['Direction of movement', 'Location of action', 'Direct object', 'Topic'], answer: 'Direction of movement', english: 'Direction particle' },
      { type: 'sentence-build', english: 'Please turn right.', words: ['kudasai', 'migi', 'magatte', 'e'], answer: ['migi', 'e', 'magatte', 'kudasai'] }
    ]
  },
  {
    id: 'n5-gram-007',
    pattern: 'か (ka)',
    meaning: 'Question particle',
    jlptLevel: 'N5',
    explanation: 'The particle か is placed at the end of a sentence to turn it into a question. In polite speech, the intonation rises naturally with か.',
    structure: '[Statement] か',
    examples: [
      { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
      { japanese: '日本人ですか。', romaji: 'Nihonjin desu ka.', english: 'Are you Japanese?' },
      { japanese: '明日来ますか。', romaji: 'Ashita kimasu ka.', english: 'Will you come tomorrow?' },
      { japanese: 'コーヒーを飲みますか。', romaji: 'Koohii wo nomimasu ka.', english: 'Do you drink coffee?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kore wa nan desu ___.', answer: 'ka', options: ['ka', 'yo', 'ne', 'wa'], english: 'What is this?' },
      { type: 'sentence-build', english: 'Are you Japanese?', words: ['ka', 'desu', 'nihonjin'], answer: ['nihonjin', 'desu', 'ka'] },
      { type: 'multiple-choice', question: 'Where is か placed in a question?', options: ['End of sentence', 'Beginning of sentence', 'Before the verb', 'After the subject'], answer: 'End of sentence', english: 'Question particle placement' },
      { type: 'fill-blank', sentence: 'Ashita kimasu ___.', answer: 'ka', options: ['ka', 'yo', 'ne', 'na'], english: 'Will you come tomorrow?' },
      { type: 'sentence-build', english: 'Do you drink coffee?', words: ['ka', 'nomimasu', 'koohii', 'wo'], answer: ['koohii', 'wo', 'nomimasu', 'ka'] }
    ]
  },
  {
    id: 'n5-gram-008',
    pattern: 'も (mo)',
    meaning: 'Also / Too',
    jlptLevel: 'N5',
    explanation: 'The particle も replaces は, が, or を to mean "also" or "too". It indicates that the same predicate applies to another item.',
    structure: '[Noun] も [Predicate]',
    examples: [
      { japanese: '私も学生です。', romaji: 'Watashi mo gakusei desu.', english: 'I am also a student.' },
      { japanese: 'これも美味しいです。', romaji: 'Kore mo oishii desu.', english: 'This is also delicious.' },
      { japanese: '猫も好きです。', romaji: 'Neko mo suki desu.', english: 'I also like cats.' },
      { japanese: '田中さんも来ました。', romaji: 'Tanaka-san mo kimashita.', english: 'Mr. Tanaka also came.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Watashi ___ gakusei desu.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'I am also a student.' },
      { type: 'fill-blank', sentence: 'Neko ___ suki desu.', answer: 'mo', options: ['mo', 'wa', 'wo', 'ga'], english: 'I also like cats.' },
      { type: 'multiple-choice', question: 'Which particle means "also"?', options: ['mo', 'wa', 'ga', 'to'], answer: 'mo', english: 'Also particle' },
      { type: 'sentence-build', english: 'This is also delicious.', words: ['desu', 'oishii', 'mo', 'kore'], answer: ['kore', 'mo', 'oishii', 'desu'] },
      { type: 'fill-blank', sentence: 'Tanaka-san ___ kimashita.', answer: 'mo', options: ['mo', 'wa', 'ga', 'wo'], english: 'Mr. Tanaka also came.' }
    ]
  },
  {
    id: 'n5-gram-009',
    pattern: 'の (no)',
    meaning: 'Possessive / Modifier particle',
    jlptLevel: 'N5',
    explanation: 'The particle の connects two nouns, showing possession, attribution, or modification. The first noun modifies the second.',
    structure: '[Noun A] の [Noun B]',
    examples: [
      { japanese: '私の本です。', romaji: 'Watashi no hon desu.', english: 'It is my book.' },
      { japanese: '日本の車は良いです。', romaji: 'Nihon no kuruma wa yoi desu.', english: 'Japanese cars are good.' },
      { japanese: '大学の先生です。', romaji: 'Daigaku no sensei desu.', english: 'He is a university teacher.' },
      { japanese: '友達の名前は何ですか。', romaji: 'Tomodachi no namae wa nan desu ka.', english: 'What is your friend\'s name?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Watashi ___ hon desu.', answer: 'no', options: ['no', 'wa', 'ga', 'ni'], english: 'It is my book.' },
      { type: 'fill-blank', sentence: 'Nihon ___ kuruma wa yoi desu.', answer: 'no', options: ['no', 'wa', 'de', 'ni'], english: 'Japanese cars are good.' },
      { type: 'sentence-build', english: 'He is a university teacher.', words: ['desu', 'no', 'sensei', 'daigaku'], answer: ['daigaku', 'no', 'sensei', 'desu'] },
      { type: 'multiple-choice', question: 'What does の do between two nouns?', options: ['Shows possession or modification', 'Marks the topic', 'Indicates location', 'Marks the object'], answer: 'Shows possession or modification', english: 'Possessive particle' },
      { type: 'fill-blank', sentence: 'Tomodachi ___ namae wa nan desu ka.', answer: 'no', options: ['no', 'wa', 'ga', 'mo'], english: 'What is your friend\'s name?' }
    ]
  },
  {
    id: 'n5-gram-010',
    pattern: 'と (to)',
    meaning: 'And (exhaustive) / With',
    jlptLevel: 'N5',
    explanation: 'The particle と connects nouns exhaustively (listing all items) and also means "with" when indicating a partner for an action.',
    structure: '[Noun A] と [Noun B] / [Person] と [Verb]',
    examples: [
      { japanese: 'パンとコーヒーを買います。', romaji: 'Pan to koohii wo kaimasu.', english: 'I buy bread and coffee.' },
      { japanese: '友達と遊びます。', romaji: 'Tomodachi to asobimasu.', english: 'I hang out with a friend.' },
      { japanese: '犬と猫がいます。', romaji: 'Inu to neko ga imasu.', english: 'There is a dog and a cat.' },
      { japanese: '先生と話しました。', romaji: 'Sensei to hanashimashita.', english: 'I talked with the teacher.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Pan ___ koohii wo kaimasu.', answer: 'to', options: ['to', 'ya', 'mo', 'ka'], english: 'I buy bread and coffee.' },
      { type: 'fill-blank', sentence: 'Tomodachi ___ asobimasu.', answer: 'to', options: ['to', 'ni', 'de', 'wo'], english: 'I hang out with a friend.' },
      { type: 'sentence-build', english: 'There is a dog and a cat.', words: ['imasu', 'to', 'ga', 'inu', 'neko'], answer: ['inu', 'to', 'neko', 'ga', 'imasu'] },
      { type: 'multiple-choice', question: 'と lists nouns in what way?', options: ['Exhaustively (all items)', 'Non-exhaustively (some items)', 'Randomly', 'Conditionally'], answer: 'Exhaustively (all items)', english: 'Exhaustive listing' },
      { type: 'fill-blank', sentence: 'Sensei ___ hanashimashita.', answer: 'to', options: ['to', 'ni', 'de', 'wo'], english: 'I talked with the teacher.' }
    ]
  },
  {
    id: 'n5-gram-011',
    pattern: 'や (ya)',
    meaning: 'And (non-exhaustive listing)',
    jlptLevel: 'N5',
    explanation: 'The particle や connects nouns non-exhaustively, implying there are more items not mentioned. Often paired with など (nado) meaning "etc."',
    structure: '[Noun A] や [Noun B] (など)',
    examples: [
      { japanese: 'りんごやみかんを買いました。', romaji: 'Ringo ya mikan wo kaimashita.', english: 'I bought apples and oranges (among other things).' },
      { japanese: '東京や大阪に行きました。', romaji: 'Toukyou ya Oosaka ni ikimashita.', english: 'I went to Tokyo and Osaka (among other places).' },
      { japanese: '本やノートなどがあります。', romaji: 'Hon ya nooto nado ga arimasu.', english: 'There are books, notebooks, etc.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ringo ___ mikan wo kaimashita.', answer: 'ya', options: ['ya', 'to', 'mo', 'ka'], english: 'I bought apples and oranges (among other things).' },
      { type: 'multiple-choice', question: 'How does や differ from と?', options: ['ya implies more items exist', 'ya lists all items', 'ya means with', 'ya is more formal'], answer: 'ya implies more items exist', english: 'Non-exhaustive listing' },
      { type: 'sentence-build', english: 'There are books, notebooks, etc.', words: ['arimasu', 'nooto', 'ya', 'nado', 'ga', 'hon'], answer: ['hon', 'ya', 'nooto', 'nado', 'ga', 'arimasu'] },
      { type: 'fill-blank', sentence: 'Toukyou ___ Oosaka ni ikimashita.', answer: 'ya', options: ['ya', 'to', 'mo', 'de'], english: 'I went to Tokyo and Osaka (among other places).' }
    ]
  },
  {
    id: 'n5-gram-012',
    pattern: 'から (kara)',
    meaning: 'From (time/place) / Because',
    jlptLevel: 'N5',
    explanation: 'The particle から indicates a starting point in time or space. It can also mean "because" when placed after a clause.',
    structure: '[Starting point] から / [Reason] から',
    examples: [
      { japanese: '九時から働きます。', romaji: 'Kuji kara hatarakimasu.', english: 'I work from nine o\'clock.' },
      { japanese: '東京から来ました。', romaji: 'Toukyou kara kimashita.', english: 'I came from Tokyo.' },
      { japanese: '暑いですから、窓を開けます。', romaji: 'Atsui desu kara, mado wo akemasu.', english: 'Because it is hot, I open the window.' },
      { japanese: '駅から歩きます。', romaji: 'Eki kara arukimasu.', english: 'I walk from the station.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kuji ___ hatarakimasu.', answer: 'kara', options: ['kara', 'made', 'ni', 'de'], english: 'I work from nine o\'clock.' },
      { type: 'fill-blank', sentence: 'Toukyou ___ kimashita.', answer: 'kara', options: ['kara', 'made', 'e', 'ni'], english: 'I came from Tokyo.' },
      { type: 'sentence-build', english: 'I walk from the station.', words: ['arukimasu', 'eki', 'kara'], answer: ['eki', 'kara', 'arukimasu'] },
      { type: 'multiple-choice', question: 'から can mean which of the following?', options: ['Both "from" and "because"', 'Only "from"', 'Only "because"', '"Until"'], answer: 'Both "from" and "because"', english: 'From / Because' },
      { type: 'fill-blank', sentence: 'Atsui desu ___, mado wo akemasu.', answer: 'kara', options: ['kara', 'made', 'node', 'ga'], english: 'Because it is hot, I open the window.' }
    ]
  },
  {
    id: 'n5-gram-013',
    pattern: 'まで (made)',
    meaning: 'Until / To (endpoint)',
    jlptLevel: 'N5',
    explanation: 'The particle まで indicates an ending point in time or space. Often paired with から to show a range.',
    structure: '[Endpoint] まで',
    examples: [
      { japanese: '五時まで働きます。', romaji: 'Goji made hatarakimasu.', english: 'I work until five o\'clock.' },
      { japanese: '駅まで歩きます。', romaji: 'Eki made arukimasu.', english: 'I walk to the station.' },
      { japanese: '九時から五時まで勉強します。', romaji: 'Kuji kara goji made benkyou shimasu.', english: 'I study from nine to five.' },
      { japanese: '東京まで二時間です。', romaji: 'Toukyou made nijikan desu.', english: 'It is two hours to Tokyo.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Goji ___ hatarakimasu.', answer: 'made', options: ['made', 'kara', 'ni', 'de'], english: 'I work until five o\'clock.' },
      { type: 'fill-blank', sentence: 'Eki ___ arukimasu.', answer: 'made', options: ['made', 'kara', 'e', 'ni'], english: 'I walk to the station.' },
      { type: 'sentence-build', english: 'I study from nine to five.', words: ['benkyou shimasu', 'kara', 'kuji', 'made', 'goji'], answer: ['kuji', 'kara', 'goji', 'made', 'benkyou shimasu'] },
      { type: 'multiple-choice', question: 'What does まで indicate?', options: ['An endpoint', 'A starting point', 'A location of action', 'A reason'], answer: 'An endpoint', english: 'Until / To' }
    ]
  },
  {
    id: 'n5-gram-014',
    pattern: 'です (desu)',
    meaning: 'Copula (polite)',
    jlptLevel: 'N5',
    explanation: 'です is the polite copula, equivalent to "is/am/are" in English. It is placed at the end of sentences to express identity, state, or description politely.',
    structure: '[Noun/Adjective] です',
    examples: [
      { japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
      { japanese: 'これは猫です。', romaji: 'Kore wa neko desu.', english: 'This is a cat.' },
      { japanese: '元気です。', romaji: 'Genki desu.', english: 'I am fine.' },
      { japanese: '今日は暑いです。', romaji: 'Kyou wa atsui desu.', english: 'Today is hot.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Watashi wa gakusei ___.', answer: 'desu', options: ['desu', 'masu', 'da', 'deshita'], english: 'I am a student.' },
      { type: 'sentence-build', english: 'This is a cat.', words: ['desu', 'neko', 'wa', 'kore'], answer: ['kore', 'wa', 'neko', 'desu'] },
      { type: 'multiple-choice', question: 'What is です?', options: ['Polite copula (is/am/are)', 'Verb ending', 'Past tense marker', 'Question marker'], answer: 'Polite copula (is/am/are)', english: 'Copula' },
      { type: 'fill-blank', sentence: 'Genki ___.', answer: 'desu', options: ['desu', 'masu', 'da', 'deshita'], english: 'I am fine.' }
    ]
  },
  {
    id: 'n5-gram-015',
    pattern: 'じゃないです (ja nai desu)',
    meaning: 'Is not (polite negative copula)',
    jlptLevel: 'N5',
    explanation: 'じゃないです is the polite negative form of です. It negates nouns and na-adjectives. じゃありません is a more formal alternative.',
    structure: '[Noun/Na-adjective] じゃないです / じゃありません',
    examples: [
      { japanese: '学生じゃないです。', romaji: 'Gakusei ja nai desu.', english: 'I am not a student.' },
      { japanese: 'これは犬じゃないです。', romaji: 'Kore wa inu ja nai desu.', english: 'This is not a dog.' },
      { japanese: '静かじゃないです。', romaji: 'Shizuka ja nai desu.', english: 'It is not quiet.' },
      { japanese: '日本人じゃありません。', romaji: 'Nihonjin ja arimasen.', english: 'I am not Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gakusei ___.', answer: 'ja nai desu', options: ['ja nai desu', 'desu', 'deshita', 'ja arimasen deshita'], english: 'I am not a student.' },
      { type: 'sentence-build', english: 'This is not a dog.', words: ['ja nai desu', 'wa', 'inu', 'kore'], answer: ['kore', 'wa', 'inu', 'ja nai desu'] },
      { type: 'multiple-choice', question: 'Which is the negative of です?', options: ['ja nai desu', 'masen', 'deshita', 'nakatta'], answer: 'ja nai desu', english: 'Negative copula' },
      { type: 'fill-blank', sentence: 'Shizuka ___.', answer: 'ja nai desu', options: ['ja nai desu', 'desu', 'deshita', 'ja arimasen deshita'], english: 'It is not quiet.' },
      { type: 'multiple-choice', question: 'What is the more formal version of じゃないです?', options: ['ja arimasen', 'ja nai', 'dewa nai desu', 'masen'], answer: 'ja arimasen', english: 'Formal negative copula' }
    ]
  },
  {
    id: 'n5-gram-016',
    pattern: 'でした (deshita)',
    meaning: 'Was / Were (past copula)',
    jlptLevel: 'N5',
    explanation: 'でした is the past tense of です. It expresses that something was a certain way in the past.',
    structure: '[Noun/Na-adjective] でした',
    examples: [
      { japanese: '昨日は暑かったです。', romaji: 'Kinou wa atsukatta desu.', english: 'Yesterday was hot.' },
      { japanese: '学生でした。', romaji: 'Gakusei deshita.', english: 'I was a student.' },
      { japanese: 'いい天気でした。', romaji: 'Ii tenki deshita.', english: 'It was nice weather.' },
      { japanese: 'テストは簡単でした。', romaji: 'Tesuto wa kantan deshita.', english: 'The test was easy.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gakusei ___.', answer: 'deshita', options: ['deshita', 'desu', 'ja nai desu', 'masu'], english: 'I was a student.' },
      { type: 'fill-blank', sentence: 'Ii tenki ___.', answer: 'deshita', options: ['deshita', 'desu', 'da', 'datta'], english: 'It was nice weather.' },
      { type: 'sentence-build', english: 'The test was easy.', words: ['deshita', 'kantan', 'wa', 'tesuto'], answer: ['tesuto', 'wa', 'kantan', 'deshita'] },
      { type: 'multiple-choice', question: 'What is the past tense of です?', options: ['deshita', 'mashita', 'ja nai desu', 'deshou'], answer: 'deshita', english: 'Past copula' }
    ]
  },
  {
    id: 'n5-gram-017',
    pattern: 'ます (masu)',
    meaning: 'Polite verb ending (present/future)',
    jlptLevel: 'N5',
    explanation: 'ます is the polite present/future verb ending. It expresses habitual actions or future intentions politely.',
    structure: '[Verb stem] ます',
    examples: [
      { japanese: '毎日勉強します。', romaji: 'Mainichi benkyou shimasu.', english: 'I study every day.' },
      { japanese: '明日行きます。', romaji: 'Ashita ikimasu.', english: 'I will go tomorrow.' },
      { japanese: '朝ご飯を食べます。', romaji: 'Asagohan wo tabemasu.', english: 'I eat breakfast.' },
      { japanese: '日本語を話します。', romaji: 'Nihongo wo hanashimasu.', english: 'I speak Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mainichi benkyou shi___.', answer: 'masu', options: ['masu', 'masen', 'mashita', 'tai'], english: 'I study every day.' },
      { type: 'multiple-choice', question: 'ます form is used for what?', options: ['Polite present/future tense', 'Casual past tense', 'Negative form', 'Command form'], answer: 'Polite present/future tense', english: 'Polite verb ending' },
      { type: 'sentence-build', english: 'I eat breakfast.', words: ['tabemasu', 'wo', 'asagohan'], answer: ['asagohan', 'wo', 'tabemasu'] },
      { type: 'fill-blank', sentence: 'Ashita iki___.', answer: 'masu', options: ['masu', 'masen', 'mashita', 'mashou'], english: 'I will go tomorrow.' }
    ]
  },
  {
    id: 'n5-gram-018',
    pattern: 'ません (masen)',
    meaning: 'Polite negative verb ending',
    jlptLevel: 'N5',
    explanation: 'ません is the polite negative of ます. It expresses that one does not do something.',
    structure: '[Verb stem] ません',
    examples: [
      { japanese: '肉を食べません。', romaji: 'Niku wo tabemasen.', english: 'I do not eat meat.' },
      { japanese: 'お酒を飲みません。', romaji: 'Osake wo nomimasen.', english: 'I do not drink alcohol.' },
      { japanese: '明日は行きません。', romaji: 'Ashita wa ikimasen.', english: 'I will not go tomorrow.' },
      { japanese: 'テレビを見ません。', romaji: 'Terebi wo mimasen.', english: 'I do not watch TV.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Niku wo tabe___.', answer: 'masen', options: ['masen', 'masu', 'mashita', 'tai'], english: 'I do not eat meat.' },
      { type: 'fill-blank', sentence: 'Ashita wa iki___.', answer: 'masen', options: ['masen', 'masu', 'mashita', 'mashou'], english: 'I will not go tomorrow.' },
      { type: 'sentence-build', english: 'I do not drink alcohol.', words: ['nomimasen', 'osake', 'wo'], answer: ['osake', 'wo', 'nomimasen'] },
      { type: 'multiple-choice', question: 'What is the negative of ます?', options: ['masen', 'mashita', 'masu', 'mashou'], answer: 'masen', english: 'Negative verb ending' }
    ]
  },
  {
    id: 'n5-gram-019',
    pattern: 'ました (mashita)',
    meaning: 'Polite past verb ending',
    jlptLevel: 'N5',
    explanation: 'ました is the polite past tense of ます. It expresses that an action was completed in the past.',
    structure: '[Verb stem] ました',
    examples: [
      { japanese: '昨日映画を見ました。', romaji: 'Kinou eiga wo mimashita.', english: 'I watched a movie yesterday.' },
      { japanese: '日本に行きました。', romaji: 'Nihon ni ikimashita.', english: 'I went to Japan.' },
      { japanese: '朝ご飯を食べました。', romaji: 'Asagohan wo tabemashita.', english: 'I ate breakfast.' },
      { japanese: '本を読みました。', romaji: 'Hon wo yomimashita.', english: 'I read a book.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kinou eiga wo mi___.', answer: 'mashita', options: ['mashita', 'masu', 'masen', 'mashou'], english: 'I watched a movie yesterday.' },
      { type: 'sentence-build', english: 'I went to Japan.', words: ['ikimashita', 'ni', 'nihon'], answer: ['nihon', 'ni', 'ikimashita'] },
      { type: 'fill-blank', sentence: 'Hon wo yomi___.', answer: 'mashita', options: ['mashita', 'masu', 'masen', 'tai'], english: 'I read a book.' },
      { type: 'multiple-choice', question: 'ました indicates what tense?', options: ['Polite past', 'Polite present', 'Polite negative', 'Polite future'], answer: 'Polite past', english: 'Past verb ending' }
    ]
  },
  {
    id: 'n5-gram-020',
    pattern: 'ませんでした (masen deshita)',
    meaning: 'Polite negative past verb ending',
    jlptLevel: 'N5',
    explanation: 'ませんでした is the polite negative past form. It expresses that one did not do something in the past.',
    structure: '[Verb stem] ませんでした',
    examples: [
      { japanese: '昨日勉強しませんでした。', romaji: 'Kinou benkyou shimasen deshita.', english: 'I did not study yesterday.' },
      { japanese: '朝ご飯を食べませんでした。', romaji: 'Asagohan wo tabemasen deshita.', english: 'I did not eat breakfast.' },
      { japanese: '映画を見ませんでした。', romaji: 'Eiga wo mimasen deshita.', english: 'I did not watch the movie.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kinou benkyou shi___.', answer: 'masen deshita', options: ['masen deshita', 'mashita', 'masen', 'masu'], english: 'I did not study yesterday.' },
      { type: 'sentence-build', english: 'I did not eat breakfast.', words: ['tabemasen deshita', 'wo', 'asagohan'], answer: ['asagohan', 'wo', 'tabemasen deshita'] },
      { type: 'multiple-choice', question: 'How do you say "did not do" politely?', options: ['masen deshita', 'masen', 'mashita', 'nakatta'], answer: 'masen deshita', english: 'Negative past' },
      { type: 'fill-blank', sentence: 'Eiga wo mi___.', answer: 'masen deshita', options: ['masen deshita', 'mashita', 'masen', 'masu'], english: 'I did not watch the movie.' }
    ]
  },
  {
    id: 'n5-gram-021',
    pattern: 'い-adjective (present)',
    meaning: 'i-adjective present tense',
    jlptLevel: 'N5',
    explanation: 'i-adjectives end in い and can directly modify nouns or act as predicates. In present tense they take です for politeness.',
    structure: '[i-adjective] です / [i-adjective] + [Noun]',
    examples: [
      { japanese: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', english: 'This book is interesting.' },
      { japanese: '大きい犬がいます。', romaji: 'Ookii inu ga imasu.', english: 'There is a big dog.' },
      { japanese: '今日は寒いです。', romaji: 'Kyou wa samui desu.', english: 'Today is cold.' },
      { japanese: '高い山が見えます。', romaji: 'Takai yama ga miemasu.', english: 'I can see a tall mountain.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono hon wa ___ desu.', answer: 'omoshiroi', options: ['omoshiroi', 'omoshiroku', 'omoshirokute', 'omoshirokatta'], english: 'This book is interesting.' },
      { type: 'sentence-build', english: 'There is a big dog.', words: ['imasu', 'inu', 'ga', 'ookii'], answer: ['ookii', 'inu', 'ga', 'imasu'] },
      { type: 'multiple-choice', question: 'How do i-adjectives end?', options: ['い (i)', 'な (na)', 'く (ku)', 'だ (da)'], answer: 'い (i)', english: 'i-adjective ending' },
      { type: 'fill-blank', sentence: 'Kyou wa ___ desu.', answer: 'samui', options: ['samui', 'samuku', 'samukatta', 'samuku nai'], english: 'Today is cold.' }
    ]
  },
  {
    id: 'n5-gram-022',
    pattern: 'い-adjective (negative)',
    meaning: 'i-adjective negative form',
    jlptLevel: 'N5',
    explanation: 'To negate an i-adjective, remove the final い and add くない. Add です for politeness.',
    structure: '[i-adj stem] くないです',
    examples: [
      { japanese: 'この映画は面白くないです。', romaji: 'Kono eiga wa omoshirokunai desu.', english: 'This movie is not interesting.' },
      { japanese: '今日は暑くないです。', romaji: 'Kyou wa atsukunai desu.', english: 'Today is not hot.' },
      { japanese: 'あの店は高くないです。', romaji: 'Ano mise wa takakunai desu.', english: 'That shop is not expensive.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono eiga wa ___ desu.', answer: 'omoshirokunai', options: ['omoshirokunai', 'omoshiroi', 'omoshirokatta', 'omoshiroku'], english: 'This movie is not interesting.' },
      { type: 'multiple-choice', question: 'How do you negate an i-adjective?', options: ['Remove い, add くない', 'Add じゃない', 'Add ません', 'Remove い, add たい'], answer: 'Remove い, add くない', english: 'i-adjective negation' },
      { type: 'fill-blank', sentence: 'Kyou wa ___ desu.', answer: 'atsukunai', options: ['atsukunai', 'atsui', 'atsukatta', 'atsuku'], english: 'Today is not hot.' },
      { type: 'sentence-build', english: 'That shop is not expensive.', words: ['desu', 'takakunai', 'wa', 'ano mise'], answer: ['ano mise', 'wa', 'takakunai', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-023',
    pattern: 'い-adjective (past)',
    meaning: 'i-adjective past tense',
    jlptLevel: 'N5',
    explanation: 'For past tense i-adjectives, remove the final い and add かった. Add です for politeness.',
    structure: '[i-adj stem] かったです',
    examples: [
      { japanese: '映画は面白かったです。', romaji: 'Eiga wa omoshirokatta desu.', english: 'The movie was interesting.' },
      { japanese: '昨日は寒かったです。', romaji: 'Kinou wa samukatta desu.', english: 'Yesterday was cold.' },
      { japanese: 'テストは難しかったです。', romaji: 'Tesuto wa muzukashikatta desu.', english: 'The test was difficult.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Eiga wa ___ desu.', answer: 'omoshirokatta', options: ['omoshirokatta', 'omoshiroi', 'omoshirokunai', 'omoshirokunakatta'], english: 'The movie was interesting.' },
      { type: 'fill-blank', sentence: 'Kinou wa ___ desu.', answer: 'samukatta', options: ['samukatta', 'samui', 'samuku', 'samuku nakatta'], english: 'Yesterday was cold.' },
      { type: 'multiple-choice', question: 'How do you form past tense i-adjective?', options: ['Remove い, add かった', 'Add でした', 'Remove い, add くない', 'Add ました'], answer: 'Remove い, add かった', english: 'i-adj past tense' },
      { type: 'sentence-build', english: 'The test was difficult.', words: ['desu', 'muzukashikatta', 'wa', 'tesuto'], answer: ['tesuto', 'wa', 'muzukashikatta', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-024',
    pattern: 'い-adjective (negative past)',
    meaning: 'i-adjective negative past',
    jlptLevel: 'N5',
    explanation: 'For negative past i-adjective, remove い, add くなかった. Add です for politeness.',
    structure: '[i-adj stem] くなかったです',
    examples: [
      { japanese: '映画は面白くなかったです。', romaji: 'Eiga wa omoshirokunakatta desu.', english: 'The movie was not interesting.' },
      { japanese: '昨日は暑くなかったです。', romaji: 'Kinou wa atsukunakatta desu.', english: 'Yesterday was not hot.' },
      { japanese: 'テストは難しくなかったです。', romaji: 'Tesuto wa muzukashikunakatta desu.', english: 'The test was not difficult.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Eiga wa ___ desu.', answer: 'omoshirokunakatta', options: ['omoshirokunakatta', 'omoshirokatta', 'omoshirokunai', 'omoshiroi'], english: 'The movie was not interesting.' },
      { type: 'multiple-choice', question: 'What is the negative past of "atsui"?', options: ['atsukunakatta', 'atsukatta', 'atsukunai', 'atsui'], answer: 'atsukunakatta', english: 'Negative past i-adj' },
      { type: 'fill-blank', sentence: 'Tesuto wa ___ desu.', answer: 'muzukashikunakatta', options: ['muzukashikunakatta', 'muzukashikatta', 'muzukashikunai', 'muzukashii'], english: 'The test was not difficult.' },
      { type: 'sentence-build', english: 'Yesterday was not hot.', words: ['desu', 'atsukunakatta', 'wa', 'kinou'], answer: ['kinou', 'wa', 'atsukunakatta', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-025',
    pattern: 'な-adjective (present)',
    meaning: 'na-adjective present tense',
    jlptLevel: 'N5',
    explanation: 'na-adjectives use な when directly modifying a noun. As predicates, they use です. Unlike i-adjectives, they conjugate like nouns.',
    structure: '[na-adj] な [Noun] / [na-adj] です',
    examples: [
      { japanese: 'この部屋は静かです。', romaji: 'Kono heya wa shizuka desu.', english: 'This room is quiet.' },
      { japanese: '元気な子供です。', romaji: 'Genki na kodomo desu.', english: 'It is an energetic child.' },
      { japanese: '日本語は大変です。', romaji: 'Nihongo wa taihen desu.', english: 'Japanese is tough.' },
      { japanese: '有名なレストランです。', romaji: 'Yuumei na resutoran desu.', english: 'It is a famous restaurant.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono heya wa shizuka ___.', answer: 'desu', options: ['desu', 'na', 'da', 'ni'], english: 'This room is quiet.' },
      { type: 'fill-blank', sentence: 'Genki ___ kodomo desu.', answer: 'na', options: ['na', 'no', 'ni', 'de'], english: 'It is an energetic child.' },
      { type: 'multiple-choice', question: 'What particle do na-adjectives use before nouns?', options: ['na', 'no', 'ni', 'de'], answer: 'na', english: 'na-adjective modifier' },
      { type: 'sentence-build', english: 'It is a famous restaurant.', words: ['desu', 'na', 'resutoran', 'yuumei'], answer: ['yuumei', 'na', 'resutoran', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-026',
    pattern: 'な-adjective (negative/past)',
    meaning: 'na-adjective negative and past forms',
    jlptLevel: 'N5',
    explanation: 'na-adjectives conjugate like nouns: negative = ja nai desu, past = deshita, negative past = ja nakatta desu.',
    structure: '[na-adj] じゃないです / [na-adj] でした / [na-adj] じゃなかったです',
    examples: [
      { japanese: 'ここは静かじゃないです。', romaji: 'Koko wa shizuka ja nai desu.', english: 'This place is not quiet.' },
      { japanese: 'この町は有名でした。', romaji: 'Kono machi wa yuumei deshita.', english: 'This town was famous.' },
      { japanese: 'テストは簡単じゃなかったです。', romaji: 'Tesuto wa kantan ja nakatta desu.', english: 'The test was not easy.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko wa shizuka ___.', answer: 'ja nai desu', options: ['ja nai desu', 'desu', 'deshita', 'ja nakatta desu'], english: 'This place is not quiet.' },
      { type: 'fill-blank', sentence: 'Kono machi wa yuumei ___.', answer: 'deshita', options: ['deshita', 'desu', 'ja nai desu', 'ja nakatta desu'], english: 'This town was famous.' },
      { type: 'multiple-choice', question: 'What is the negative past of a na-adjective?', options: ['ja nakatta desu', 'ja nai desu', 'kunakatta desu', 'deshita'], answer: 'ja nakatta desu', english: 'na-adj negative past' },
      { type: 'fill-blank', sentence: 'Tesuto wa kantan ___.', answer: 'ja nakatta desu', options: ['ja nakatta desu', 'deshita', 'ja nai desu', 'desu'], english: 'The test was not easy.' }
    ]
  },
  {
    id: 'n5-gram-027',
    pattern: 'が好きです (ga suki desu)',
    meaning: 'Like ~',
    jlptLevel: 'N5',
    explanation: 'The pattern [noun] が好きです expresses liking something. 好き (suki) is a na-adjective. The liked thing takes が.',
    structure: '[Noun] が 好きです',
    examples: [
      { japanese: '音楽が好きです。', romaji: 'Ongaku ga suki desu.', english: 'I like music.' },
      { japanese: '猫が好きです。', romaji: 'Neko ga suki desu.', english: 'I like cats.' },
      { japanese: '日本料理が大好きです。', romaji: 'Nihon ryouri ga daisuki desu.', english: 'I love Japanese food.' },
      { japanese: '勉強が好きじゃないです。', romaji: 'Benkyou ga suki ja nai desu.', english: 'I don\'t like studying.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ongaku ___ suki desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'ni'], english: 'I like music.' },
      { type: 'sentence-build', english: 'I like cats.', words: ['desu', 'suki', 'ga', 'neko'], answer: ['neko', 'ga', 'suki', 'desu'] },
      { type: 'multiple-choice', question: 'Which particle is used with 好き?', options: ['ga', 'wo', 'wa', 'de'], answer: 'ga', english: 'Like particle' },
      { type: 'fill-blank', sentence: 'Nihon ryouri ___ daisuki desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'ni'], english: 'I love Japanese food.' },
      { type: 'sentence-build', english: 'I don\'t like studying.', words: ['ja nai desu', 'ga', 'suki', 'benkyou'], answer: ['benkyou', 'ga', 'suki', 'ja nai desu'] }
    ]
  },
  {
    id: 'n5-gram-028',
    pattern: 'が上手/下手です (ga jouzu/heta desu)',
    meaning: 'Good at / Bad at ~',
    jlptLevel: 'N5',
    explanation: '上手 (jouzu) means skillful/good at, 下手 (heta) means unskillful/bad at. Both are na-adjectives used with が.',
    structure: '[Noun] が 上手/下手 です',
    examples: [
      { japanese: '田中さんは料理が上手です。', romaji: 'Tanaka-san wa ryouri ga jouzu desu.', english: 'Mr. Tanaka is good at cooking.' },
      { japanese: '私は歌が下手です。', romaji: 'Watashi wa uta ga heta desu.', english: 'I am bad at singing.' },
      { japanese: '彼女は英語が上手です。', romaji: 'Kanojo wa eigo ga jouzu desu.', english: 'She is good at English.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tanaka-san wa ryouri ___ jouzu desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'ni'], english: 'Mr. Tanaka is good at cooking.' },
      { type: 'sentence-build', english: 'I am bad at singing.', words: ['desu', 'heta', 'ga', 'uta', 'wa', 'watashi'], answer: ['watashi', 'wa', 'uta', 'ga', 'heta', 'desu'] },
      { type: 'multiple-choice', question: 'What does 上手 (jouzu) mean?', options: ['Skillful / Good at', 'Bad at', 'Like', 'Want'], answer: 'Skillful / Good at', english: 'Good at' },
      { type: 'fill-blank', sentence: 'Kanojo wa eigo ___ jouzu desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'de'], english: 'She is good at English.' }
    ]
  },
  {
    id: 'n5-gram-029',
    pattern: 'があります/がいます (ga arimasu/ga imasu)',
    meaning: 'There is/are (existence)',
    jlptLevel: 'N5',
    explanation: 'あります is for inanimate objects; います is for animate beings (people, animals). The thing that exists takes が.',
    structure: '[Place] に [Thing] が あります/います',
    examples: [
      { japanese: '机の上に本があります。', romaji: 'Tsukue no ue ni hon ga arimasu.', english: 'There is a book on the desk.' },
      { japanese: '庭に猫がいます。', romaji: 'Niwa ni neko ga imasu.', english: 'There is a cat in the garden.' },
      { japanese: 'コンビニがありますか。', romaji: 'Konbini ga arimasu ka.', english: 'Is there a convenience store?' },
      { japanese: '教室に学生がいます。', romaji: 'Kyoushitsu ni gakusei ga imasu.', english: 'There are students in the classroom.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tsukue no ue ni hon ga ___.', answer: 'arimasu', options: ['arimasu', 'imasu', 'shimasu', 'ikimasu'], english: 'There is a book on the desk.' },
      { type: 'fill-blank', sentence: 'Niwa ni neko ga ___.', answer: 'imasu', options: ['imasu', 'arimasu', 'shimasu', 'kimasu'], english: 'There is a cat in the garden.' },
      { type: 'multiple-choice', question: 'Which verb is for living things?', options: ['imasu', 'arimasu', 'shimasu', 'narimasu'], answer: 'imasu', english: 'Existence verbs' },
      { type: 'sentence-build', english: 'There are students in the classroom.', words: ['imasu', 'ni', 'ga', 'gakusei', 'kyoushitsu'], answer: ['kyoushitsu', 'ni', 'gakusei', 'ga', 'imasu'] },
      { type: 'fill-blank', sentence: 'Konbini ga ___ ka.', answer: 'arimasu', options: ['arimasu', 'imasu', 'shimasu', 'desu'], english: 'Is there a convenience store?' }
    ]
  },
  {
    id: 'n5-gram-030',
    pattern: 'たいです (tai desu)',
    meaning: 'Want to do ~',
    jlptLevel: 'N5',
    explanation: 'たい is attached to the verb stem (masu-stem) to express desire. It conjugates like an i-adjective.',
    structure: '[Verb stem] たいです',
    examples: [
      { japanese: '日本に行きたいです。', romaji: 'Nihon ni ikitai desu.', english: 'I want to go to Japan.' },
      { japanese: '水が飲みたいです。', romaji: 'Mizu ga nomitai desu.', english: 'I want to drink water.' },
      { japanese: '映画が見たいです。', romaji: 'Eiga ga mitai desu.', english: 'I want to watch a movie.' },
      { japanese: '寿司を食べたいです。', romaji: 'Sushi wo tabetai desu.', english: 'I want to eat sushi.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni iki___ desu.', answer: 'tai', options: ['tai', 'masu', 'masen', 'mashita'], english: 'I want to go to Japan.' },
      { type: 'fill-blank', sentence: 'Sushi wo tabe___ desu.', answer: 'tai', options: ['tai', 'masu', 'te', 'nai'], english: 'I want to eat sushi.' },
      { type: 'sentence-build', english: 'I want to watch a movie.', words: ['desu', 'mitai', 'ga', 'eiga'], answer: ['eiga', 'ga', 'mitai', 'desu'] },
      { type: 'multiple-choice', question: 'たい conjugates like what?', options: ['i-adjective', 'na-adjective', 'Verb', 'Noun'], answer: 'i-adjective', english: 'tai conjugation' },
      { type: 'fill-blank', sentence: 'Mizu ga nomi___ desu.', answer: 'tai', options: ['tai', 'masu', 'masen', 'te'], english: 'I want to drink water.' }
    ]
  },
  {
    id: 'n5-gram-031',
    pattern: 'ないでください (naide kudasai)',
    meaning: 'Please don\'t ~',
    jlptLevel: 'N5',
    explanation: 'ないでください is used to politely ask someone not to do something. Attach ないで to the verb\'s negative stem.',
    structure: '[Verb nai-form] で ください',
    examples: [
      { japanese: 'ここで写真を撮らないでください。', romaji: 'Koko de shashin wo toranaide kudasai.', english: 'Please don\'t take photos here.' },
      { japanese: '走らないでください。', romaji: 'Hashiranaide kudasai.', english: 'Please don\'t run.' },
      { japanese: '忘れないでください。', romaji: 'Wasurenaide kudasai.', english: 'Please don\'t forget.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko de shashin wo toranaide ___.', answer: 'kudasai', options: ['kudasai', 'desu', 'masu', 'mashita'], english: 'Please don\'t take photos here.' },
      { type: 'multiple-choice', question: 'What does ないでください express?', options: ['Polite negative request', 'Polite request', 'Permission', 'Ability'], answer: 'Polite negative request', english: 'Please don\'t' },
      { type: 'sentence-build', english: 'Please don\'t run.', words: ['kudasai', 'hashiranaide'], answer: ['hashiranaide', 'kudasai'] },
      { type: 'fill-blank', sentence: '___ kudasai.', answer: 'wasurenaide', options: ['wasurenaide', 'wasurete', 'wasuremasen', 'wasuremashita'], english: 'Please don\'t forget.' }
    ]
  },
  {
    id: 'n5-gram-032',
    pattern: 'てください (te kudasai)',
    meaning: 'Please do ~',
    jlptLevel: 'N5',
    explanation: 'てください is used to politely request someone to do something. Use the te-form of the verb + kudasai.',
    structure: '[Verb te-form] ください',
    examples: [
      { japanese: 'ここに座ってください。', romaji: 'Koko ni suwatte kudasai.', english: 'Please sit here.' },
      { japanese: '名前を書いてください。', romaji: 'Namae wo kaite kudasai.', english: 'Please write your name.' },
      { japanese: 'ゆっくり話してください。', romaji: 'Yukkuri hanashite kudasai.', english: 'Please speak slowly.' },
      { japanese: '窓を開けてください。', romaji: 'Mado wo akete kudasai.', english: 'Please open the window.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko ni suwatte ___.', answer: 'kudasai', options: ['kudasai', 'desu', 'masu', 'imasu'], english: 'Please sit here.' },
      { type: 'sentence-build', english: 'Please write your name.', words: ['kudasai', 'kaite', 'wo', 'namae'], answer: ['namae', 'wo', 'kaite', 'kudasai'] },
      { type: 'multiple-choice', question: 'てください is formed with what verb form?', options: ['te-form', 'masu-form', 'dictionary form', 'nai-form'], answer: 'te-form', english: 'Polite request form' },
      { type: 'fill-blank', sentence: 'Yukkuri ___ kudasai.', answer: 'hanashite', options: ['hanashite', 'hanashimasu', 'hanasanaide', 'hanashimashita'], english: 'Please speak slowly.' },
      { type: 'sentence-build', english: 'Please open the window.', words: ['kudasai', 'akete', 'wo', 'mado'], answer: ['mado', 'wo', 'akete', 'kudasai'] }
    ]
  },
  {
    id: 'n5-gram-033',
    pattern: 'ている (te iru)',
    meaning: 'Ongoing action / Resultant state',
    jlptLevel: 'N5',
    explanation: 'ている (polite: ています) expresses an ongoing action (like English "-ing") or a resultant state from a completed action.',
    structure: '[Verb te-form] います',
    examples: [
      { japanese: '本を読んでいます。', romaji: 'Hon wo yonde imasu.', english: 'I am reading a book.' },
      { japanese: '東京に住んでいます。', romaji: 'Toukyou ni sunde imasu.', english: 'I live in Tokyo.' },
      { japanese: '田中さんを知っていますか。', romaji: 'Tanaka-san wo shitte imasu ka.', english: 'Do you know Mr. Tanaka?' },
      { japanese: '雨が降っています。', romaji: 'Ame ga futte imasu.', english: 'It is raining.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Hon wo yonde ___.', answer: 'imasu', options: ['imasu', 'arimasu', 'shimasu', 'ikimasu'], english: 'I am reading a book.' },
      { type: 'sentence-build', english: 'I live in Tokyo.', words: ['imasu', 'sunde', 'ni', 'toukyou'], answer: ['toukyou', 'ni', 'sunde', 'imasu'] },
      { type: 'multiple-choice', question: 'ている can express which meanings?', options: ['Both ongoing action and state', 'Only ongoing action', 'Only past action', 'Future action'], answer: 'Both ongoing action and state', english: 'te iru meanings' },
      { type: 'fill-blank', sentence: 'Ame ga futte ___.', answer: 'imasu', options: ['imasu', 'arimasu', 'shimasu', 'mashita'], english: 'It is raining.' }
    ]
  },
  {
    id: 'n5-gram-034',
    pattern: 'てもいいです (te mo ii desu)',
    meaning: 'May I ~ / It\'s okay to ~',
    jlptLevel: 'N5',
    explanation: 'てもいいです is used to give or ask for permission. Te-form + mo ii desu.',
    structure: '[Verb te-form] も いいです (か)',
    examples: [
      { japanese: 'ここで食べてもいいですか。', romaji: 'Koko de tabete mo ii desu ka.', english: 'May I eat here?' },
      { japanese: '写真を撮ってもいいですか。', romaji: 'Shashin wo totte mo ii desu ka.', english: 'May I take a photo?' },
      { japanese: '帰ってもいいですよ。', romaji: 'Kaette mo ii desu yo.', english: 'You may go home.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko de tabete ___ ii desu ka.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'May I eat here?' },
      { type: 'sentence-build', english: 'May I take a photo?', words: ['ka', 'desu', 'ii', 'mo', 'totte', 'wo', 'shashin'], answer: ['shashin', 'wo', 'totte', 'mo', 'ii', 'desu', 'ka'] },
      { type: 'multiple-choice', question: 'てもいいですか is used to do what?', options: ['Ask permission', 'Give a command', 'Express desire', 'State ability'], answer: 'Ask permission', english: 'Permission pattern' },
      { type: 'fill-blank', sentence: 'Kaette ___ ii desu yo.', answer: 'mo', options: ['mo', 'wa', 'ga', 'to'], english: 'You may go home.' }
    ]
  },
  {
    id: 'n5-gram-035',
    pattern: 'てはいけません (te wa ikemasen)',
    meaning: 'Must not ~ / Not allowed to ~',
    jlptLevel: 'N5',
    explanation: 'てはいけません expresses prohibition — something is not allowed or must not be done.',
    structure: '[Verb te-form] は いけません',
    examples: [
      { japanese: 'ここで泳いではいけません。', romaji: 'Koko de oyoide wa ikemasen.', english: 'You must not swim here.' },
      { japanese: 'たばこを吸ってはいけません。', romaji: 'Tabako wo sutte wa ikemasen.', english: 'You must not smoke.' },
      { japanese: '教室で食べてはいけません。', romaji: 'Kyoushitsu de tabete wa ikemasen.', english: 'You must not eat in the classroom.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koko de oyoide ___ ikemasen.', answer: 'wa', options: ['wa', 'mo', 'ga', 'de'], english: 'You must not swim here.' },
      { type: 'multiple-choice', question: 'てはいけません expresses what?', options: ['Prohibition', 'Permission', 'Desire', 'Ability'], answer: 'Prohibition', english: 'Must not' },
      { type: 'sentence-build', english: 'You must not smoke.', words: ['ikemasen', 'wa', 'sutte', 'wo', 'tabako'], answer: ['tabako', 'wo', 'sutte', 'wa', 'ikemasen'] },
      { type: 'fill-blank', sentence: 'Kyoushitsu de tabete ___ ikemasen.', answer: 'wa', options: ['wa', 'mo', 'ga', 'ni'], english: 'You must not eat in the classroom.' }
    ]
  },
  {
    id: 'n5-gram-036',
    pattern: 'ましょう (mashou)',
    meaning: 'Let\'s ~ / Shall we ~',
    jlptLevel: 'N5',
    explanation: 'ましょう is the volitional form of ます. It is used to suggest doing something together or to offer to do something.',
    structure: '[Verb stem] ましょう',
    examples: [
      { japanese: '一緒に行きましょう。', romaji: 'Issho ni ikimashou.', english: 'Let\'s go together.' },
      { japanese: '昼ご飯を食べましょう。', romaji: 'Hirugohan wo tabemashou.', english: 'Let\'s eat lunch.' },
      { japanese: '日本語を勉強しましょう。', romaji: 'Nihongo wo benkyou shimashou.', english: 'Let\'s study Japanese.' },
      { japanese: '休みましょう。', romaji: 'Yasumimashou.', english: 'Let\'s take a break.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Issho ni iki___.', answer: 'mashou', options: ['mashou', 'masu', 'masen', 'mashita'], english: 'Let\'s go together.' },
      { type: 'sentence-build', english: 'Let\'s eat lunch.', words: ['tabemashou', 'wo', 'hirugohan'], answer: ['hirugohan', 'wo', 'tabemashou'] },
      { type: 'multiple-choice', question: 'ましょう is used to express what?', options: ['Suggestion (let\'s)', 'Prohibition', 'Desire', 'Past action'], answer: 'Suggestion (let\'s)', english: 'Volitional' },
      { type: 'fill-blank', sentence: 'Nihongo wo benkyou shi___.', answer: 'mashou', options: ['mashou', 'masu', 'masen', 'tai'], english: 'Let\'s study Japanese.' }
    ]
  },
  {
    id: 'n5-gram-037',
    pattern: 'ましょうか (mashou ka)',
    meaning: 'Shall I ~ ? (offer)',
    jlptLevel: 'N5',
    explanation: 'ましょうか is used to offer help or make a suggestion in question form.',
    structure: '[Verb stem] ましょうか',
    examples: [
      { japanese: '窓を開けましょうか。', romaji: 'Mado wo akemashou ka.', english: 'Shall I open the window?' },
      { japanese: '手伝いましょうか。', romaji: 'Tetsudaimashou ka.', english: 'Shall I help?' },
      { japanese: '何を食べましょうか。', romaji: 'Nani wo tabemashou ka.', english: 'What shall we eat?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mado wo akemashou ___.', answer: 'ka', options: ['ka', 'yo', 'ne', 'wa'], english: 'Shall I open the window?' },
      { type: 'multiple-choice', question: 'ましょうか is used to what?', options: ['Offer help or make suggestions', 'Give commands', 'Express desire', 'State facts'], answer: 'Offer help or make suggestions', english: 'Offer/suggestion' },
      { type: 'sentence-build', english: 'Shall I help?', words: ['ka', 'tetsudaimashou'], answer: ['tetsudaimashou', 'ka'] },
      { type: 'fill-blank', sentence: 'Nani wo tabe___ ka.', answer: 'mashou', options: ['mashou', 'masu', 'tai', 'masen'], english: 'What shall we eat?' }
    ]
  },
  {
    id: 'n5-gram-038',
    pattern: 'ないform (nai-form)',
    meaning: 'Negative verb form (informal)',
    jlptLevel: 'N5',
    explanation: 'The nai-form is the informal negative of verbs. For u-verbs, change the final -u to -anai. For ru-verbs, replace -ru with -nai. する→しない, くる→こない.',
    structure: '[Verb negative stem] ない',
    examples: [
      { japanese: '食べない。', romaji: 'Tabenai.', english: 'I don\'t eat.' },
      { japanese: '行かない。', romaji: 'Ikanai.', english: 'I don\'t go.' },
      { japanese: '飲まない。', romaji: 'Nomanai.', english: 'I don\'t drink.' },
      { japanese: 'しない。', romaji: 'Shinai.', english: 'I don\'t do it.' }
    ],
    exercises: [
      { type: 'multiple-choice', question: 'What is the nai-form of 飲む (nomu)?', options: ['nomanai', 'nominai', 'nomunai', 'nomanai'], answer: 'nomanai', english: 'Negative of nomu' },
      { type: 'multiple-choice', question: 'What is the nai-form of 食べる (taberu)?', options: ['tabenai', 'taberanai', 'tabunai', 'tabinai'], answer: 'tabenai', english: 'Negative of taberu' },
      { type: 'fill-blank', sentence: 'Ashita wa ___. (not go)', answer: 'ikanai', options: ['ikanai', 'ikinai', 'iku nai', 'ikumasen'], english: 'I won\'t go tomorrow.' },
      { type: 'multiple-choice', question: 'What is the nai-form of する (suru)?', options: ['shinai', 'sunai', 'saranai', 'seranai'], answer: 'shinai', english: 'Negative of suru' }
    ]
  },
  {
    id: 'n5-gram-039',
    pattern: 'て-form (te-form)',
    meaning: 'Connective verb form',
    jlptLevel: 'N5',
    explanation: 'The te-form connects verbs, requests, and ongoing actions. Formation depends on verb group: ru-verbs drop -ru, add -te. U-verbs vary by ending.',
    structure: '[Verb te-form]',
    examples: [
      { japanese: '食べて飲みます。', romaji: 'Tabete nomimasu.', english: 'I eat and drink.' },
      { japanese: '起きて顔を洗います。', romaji: 'Okite kao wo araimasu.', english: 'I wake up and wash my face.' },
      { japanese: '本を読んで寝ます。', romaji: 'Hon wo yonde nemasu.', english: 'I read a book and go to sleep.' },
      { japanese: '買い物をして帰ります。', romaji: 'Kaimono wo shite kaerimasu.', english: 'I go shopping and go home.' }
    ],
    exercises: [
      { type: 'multiple-choice', question: 'What is the te-form of 飲む (nomu)?', options: ['nonde', 'nomite', 'nomte', 'nonte'], answer: 'nonde', english: 'te-form of nomu' },
      { type: 'multiple-choice', question: 'What is the te-form of 食べる (taberu)?', options: ['tabete', 'tabete', 'tabite', 'tabtte'], answer: 'tabete', english: 'te-form of taberu' },
      { type: 'sentence-build', english: 'I eat and drink.', words: ['nomimasu', 'tabete'], answer: ['tabete', 'nomimasu'] },
      { type: 'multiple-choice', question: 'What is the te-form of 書く (kaku)?', options: ['kaite', 'kakute', 'kakite', 'kaite'], answer: 'kaite', english: 'te-form of kaku' },
      { type: 'fill-blank', sentence: 'Kaimono wo ___ kaerimasu.', answer: 'shite', options: ['shite', 'shitte', 'sutte', 'sarete'], english: 'I go shopping and go home.' }
    ]
  },
  {
    id: 'n5-gram-040',
    pattern: 'に行く (ni iku)',
    meaning: 'Go to do ~',
    jlptLevel: 'N5',
    explanation: 'Verb masu-stem + に行く expresses going somewhere in order to do something.',
    structure: '[Verb masu-stem] に 行きます',
    examples: [
      { japanese: '映画を見に行きます。', romaji: 'Eiga wo mi ni ikimasu.', english: 'I go to watch a movie.' },
      { japanese: '買い物に行きます。', romaji: 'Kaimono ni ikimasu.', english: 'I go shopping.' },
      { japanese: '食べに行きましょう。', romaji: 'Tabe ni ikimashou.', english: 'Let\'s go eat.' },
      { japanese: '友達に会いに行きます。', romaji: 'Tomodachi ni ai ni ikimasu.', english: 'I go to meet my friend.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Eiga wo mi ___ ikimasu.', answer: 'ni', options: ['ni', 'wo', 'de', 'e'], english: 'I go to watch a movie.' },
      { type: 'sentence-build', english: 'Let\'s go eat.', words: ['ikimashou', 'ni', 'tabe'], answer: ['tabe', 'ni', 'ikimashou'] },
      { type: 'multiple-choice', question: 'In "verb stem + ni iku", what does ni indicate?', options: ['Purpose of going', 'Location', 'Time', 'Means'], answer: 'Purpose of going', english: 'Purpose particle' },
      { type: 'fill-blank', sentence: 'Kaimono ___ ikimasu.', answer: 'ni', options: ['ni', 'wo', 'de', 'wa'], english: 'I go shopping.' }
    ]
  },
  {
    id: 'n5-gram-041',
    pattern: 'だれ/なに/どこ/いつ',
    meaning: 'Who / What / Where / When',
    jlptLevel: 'N5',
    explanation: 'These are basic question words. だれ (dare) = who, 何 (nani/nan) = what, どこ (doko) = where, いつ (itsu) = when.',
    structure: 'Question word + particle + verb',
    examples: [
      { japanese: 'だれが来ましたか。', romaji: 'Dare ga kimashita ka.', english: 'Who came?' },
      { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
      { japanese: 'トイレはどこですか。', romaji: 'Toire wa doko desu ka.', english: 'Where is the toilet?' },
      { japanese: 'いつ日本に行きますか。', romaji: 'Itsu nihon ni ikimasu ka.', english: 'When will you go to Japan?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ ga kimashita ka.', answer: 'dare', options: ['dare', 'nani', 'doko', 'itsu'], english: 'Who came?' },
      { type: 'fill-blank', sentence: 'Toire wa ___ desu ka.', answer: 'doko', options: ['doko', 'dare', 'nani', 'itsu'], english: 'Where is the toilet?' },
      { type: 'fill-blank', sentence: '___ nihon ni ikimasu ka.', answer: 'itsu', options: ['itsu', 'dare', 'doko', 'nani'], english: 'When will you go to Japan?' },
      { type: 'sentence-build', english: 'What is this?', words: ['ka', 'desu', 'nan', 'wa', 'kore'], answer: ['kore', 'wa', 'nan', 'desu', 'ka'] },
      { type: 'multiple-choice', question: 'What does どこ mean?', options: ['Where', 'When', 'Who', 'What'], answer: 'Where', english: 'Question word: where' }
    ]
  },
  {
    id: 'n5-gram-042',
    pattern: 'どう/どんな',
    meaning: 'How / What kind of',
    jlptLevel: 'N5',
    explanation: 'どう (dou) asks about manner or opinion ("how"). どんな (donna) asks about the type or nature ("what kind of").',
    structure: 'どう ですか / どんな [Noun]',
    examples: [
      { japanese: '日本はどうですか。', romaji: 'Nihon wa dou desu ka.', english: 'How is Japan?' },
      { japanese: 'どんな音楽が好きですか。', romaji: 'Donna ongaku ga suki desu ka.', english: 'What kind of music do you like?' },
      { japanese: '天気はどうですか。', romaji: 'Tenki wa dou desu ka.', english: 'How is the weather?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon wa ___ desu ka.', answer: 'dou', options: ['dou', 'donna', 'dare', 'doko'], english: 'How is Japan?' },
      { type: 'fill-blank', sentence: '___ ongaku ga suki desu ka.', answer: 'donna', options: ['donna', 'dou', 'dore', 'doko'], english: 'What kind of music do you like?' },
      { type: 'multiple-choice', question: 'What is the difference between どう and どんな?', options: ['dou asks how, donna asks what kind', 'They are the same', 'dou asks what kind, donna asks how', 'dou is formal, donna is casual'], answer: 'dou asks how, donna asks what kind', english: 'How vs What kind' },
      { type: 'sentence-build', english: 'How is the weather?', words: ['ka', 'desu', 'dou', 'wa', 'tenki'], answer: ['tenki', 'wa', 'dou', 'desu', 'ka'] }
    ]
  },
  {
    id: 'n5-gram-043',
    pattern: 'この/その/あの/どの',
    meaning: 'This / That / That (far) / Which',
    jlptLevel: 'N5',
    explanation: 'These demonstrative adjectives modify nouns. この (near speaker), その (near listener), あの (far from both), どの (which).',
    structure: 'この/その/あの/どの + [Noun]',
    examples: [
      { japanese: 'この本は面白いです。', romaji: 'Kono hon wa omoshiroi desu.', english: 'This book is interesting.' },
      { japanese: 'その鍵をください。', romaji: 'Sono kagi wo kudasai.', english: 'Please give me that key.' },
      { japanese: 'あの人はだれですか。', romaji: 'Ano hito wa dare desu ka.', english: 'Who is that person (over there)?' },
      { japanese: 'どの色が好きですか。', romaji: 'Dono iro ga suki desu ka.', english: 'Which color do you like?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ hon wa omoshiroi desu.', answer: 'kono', options: ['kono', 'sono', 'ano', 'dono'], english: 'This book is interesting.' },
      { type: 'fill-blank', sentence: '___ hito wa dare desu ka.', answer: 'ano', options: ['ano', 'kono', 'sono', 'dono'], english: 'Who is that person (over there)?' },
      { type: 'multiple-choice', question: 'Which word refers to something near the listener?', options: ['sono', 'kono', 'ano', 'dono'], answer: 'sono', english: 'Near listener' },
      { type: 'fill-blank', sentence: '___ iro ga suki desu ka.', answer: 'dono', options: ['dono', 'kono', 'sono', 'ano'], english: 'Which color do you like?' },
      { type: 'sentence-build', english: 'Please give me that key.', words: ['kudasai', 'wo', 'kagi', 'sono'], answer: ['sono', 'kagi', 'wo', 'kudasai'] }
    ]
  },
  {
    id: 'n5-gram-044',
    pattern: 'これ/それ/あれ/どれ',
    meaning: 'This one / That one / That one (far) / Which one',
    jlptLevel: 'N5',
    explanation: 'These are demonstrative pronouns (stand alone, no noun needed). これ (near speaker), それ (near listener), あれ (far), どれ (which one).',
    structure: 'これ/それ/あれ/どれ + particle',
    examples: [
      { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka.', english: 'What is this?' },
      { japanese: 'それは私のです。', romaji: 'Sore wa watashi no desu.', english: 'That is mine.' },
      { japanese: 'あれは学校です。', romaji: 'Are wa gakkou desu.', english: 'That (over there) is a school.' },
      { japanese: 'どれがいいですか。', romaji: 'Dore ga ii desu ka.', english: 'Which one is good?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ wa nan desu ka.', answer: 'kore', options: ['kore', 'sore', 'are', 'dore'], english: 'What is this?' },
      { type: 'fill-blank', sentence: '___ ga ii desu ka.', answer: 'dore', options: ['dore', 'kore', 'sore', 'are'], english: 'Which one is good?' },
      { type: 'multiple-choice', question: 'What is the difference between この and これ?', options: ['kono modifies a noun, kore stands alone', 'They are identical', 'kore modifies a noun, kono stands alone', 'kono is formal'], answer: 'kono modifies a noun, kore stands alone', english: 'Demonstrative adj vs pronoun' },
      { type: 'sentence-build', english: 'That is mine.', words: ['desu', 'no', 'watashi', 'wa', 'sore'], answer: ['sore', 'wa', 'watashi', 'no', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-045',
    pattern: 'ここ/そこ/あそこ/どこ',
    meaning: 'Here / There / Over there / Where',
    jlptLevel: 'N5',
    explanation: 'Location demonstratives. ここ (here, near speaker), そこ (there, near listener), あそこ (over there, far), どこ (where).',
    structure: 'ここ/そこ/あそこ/どこ + particle',
    examples: [
      { japanese: 'ここに座ってください。', romaji: 'Koko ni suwatte kudasai.', english: 'Please sit here.' },
      { japanese: 'そこに置いてください。', romaji: 'Soko ni oite kudasai.', english: 'Please put it there.' },
      { japanese: 'あそこにコンビニがあります。', romaji: 'Asoko ni konbini ga arimasu.', english: 'There is a convenience store over there.' },
      { japanese: '駅はどこですか。', romaji: 'Eki wa doko desu ka.', english: 'Where is the station?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ ni suwatte kudasai.', answer: 'koko', options: ['koko', 'soko', 'asoko', 'doko'], english: 'Please sit here.' },
      { type: 'fill-blank', sentence: 'Eki wa ___ desu ka.', answer: 'doko', options: ['doko', 'koko', 'soko', 'asoko'], english: 'Where is the station?' },
      { type: 'sentence-build', english: 'There is a convenience store over there.', words: ['arimasu', 'ga', 'konbini', 'ni', 'asoko'], answer: ['asoko', 'ni', 'konbini', 'ga', 'arimasu'] },
      { type: 'multiple-choice', question: 'Which word means "there" (near listener)?', options: ['soko', 'koko', 'asoko', 'doko'], answer: 'soko', english: 'Location: there' }
    ]
  },
  {
    id: 'n5-gram-046',
    pattern: 'よ (yo)',
    meaning: 'Sentence-ending emphasis particle',
    jlptLevel: 'N5',
    explanation: 'The particle よ at the end of a sentence adds emphasis or conveys new information to the listener. It can sound assertive.',
    structure: '[Sentence] よ',
    examples: [
      { japanese: 'これは美味しいですよ。', romaji: 'Kore wa oishii desu yo.', english: 'This is delicious, you know!' },
      { japanese: '明日テストがありますよ。', romaji: 'Ashita tesuto ga arimasu yo.', english: 'There is a test tomorrow!' },
      { japanese: '危ないですよ。', romaji: 'Abunai desu yo.', english: 'It\'s dangerous!' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kore wa oishii desu ___.', answer: 'yo', options: ['yo', 'ne', 'ka', 'wa'], english: 'This is delicious, you know!' },
      { type: 'multiple-choice', question: 'What does よ convey?', options: ['New information or emphasis', 'Agreement', 'A question', 'Uncertainty'], answer: 'New information or emphasis', english: 'Emphasis particle' },
      { type: 'fill-blank', sentence: 'Abunai desu ___.', answer: 'yo', options: ['yo', 'ne', 'ka', 'na'], english: 'It\'s dangerous!' },
      { type: 'sentence-build', english: 'There is a test tomorrow!', words: ['yo', 'arimasu', 'tesuto', 'ga', 'ashita'], answer: ['ashita', 'tesuto', 'ga', 'arimasu', 'yo'] }
    ]
  },
  {
    id: 'n5-gram-047',
    pattern: 'ね (ne)',
    meaning: 'Sentence-ending confirmation particle',
    jlptLevel: 'N5',
    explanation: 'The particle ね seeks agreement or confirmation, like "right?" or "isn\'t it?" in English.',
    structure: '[Sentence] ね',
    examples: [
      { japanese: 'いい天気ですね。', romaji: 'Ii tenki desu ne.', english: 'Nice weather, isn\'t it?' },
      { japanese: 'この料理は美味しいですね。', romaji: 'Kono ryouri wa oishii desu ne.', english: 'This food is delicious, right?' },
      { japanese: '日本語は難しいですね。', romaji: 'Nihongo wa muzukashii desu ne.', english: 'Japanese is difficult, isn\'t it?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ii tenki desu ___.', answer: 'ne', options: ['ne', 'yo', 'ka', 'wa'], english: 'Nice weather, isn\'t it?' },
      { type: 'multiple-choice', question: 'ね is used to seek what?', options: ['Agreement or confirmation', 'New information', 'A question', 'Emphasis'], answer: 'Agreement or confirmation', english: 'Confirmation particle' },
      { type: 'fill-blank', sentence: 'Nihongo wa muzukashii desu ___.', answer: 'ne', options: ['ne', 'yo', 'ka', 'na'], english: 'Japanese is difficult, isn\'t it?' },
      { type: 'sentence-build', english: 'This food is delicious, right?', words: ['ne', 'desu', 'oishii', 'wa', 'kono ryouri'], answer: ['kono ryouri', 'wa', 'oishii', 'desu', 'ne'] }
    ]
  },
  {
    id: 'n5-gram-048',
    pattern: 'より (yori)',
    meaning: 'More than ~ (comparison)',
    jlptLevel: 'N5',
    explanation: 'より marks the item being compared against (the lesser item). "A wa B yori [adjective]" = "A is more [adj] than B."',
    structure: '[A] は [B] より [Adjective] です',
    examples: [
      { japanese: '東京は大阪より大きいです。', romaji: 'Toukyou wa Oosaka yori ookii desu.', english: 'Tokyo is bigger than Osaka.' },
      { japanese: '夏は冬より暑いです。', romaji: 'Natsu wa fuyu yori atsui desu.', english: 'Summer is hotter than winter.' },
      { japanese: '電車はバスより速いです。', romaji: 'Densha wa basu yori hayai desu.', english: 'Trains are faster than buses.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Toukyou wa Oosaka ___ ookii desu.', answer: 'yori', options: ['yori', 'hodo', 'made', 'kara'], english: 'Tokyo is bigger than Osaka.' },
      { type: 'sentence-build', english: 'Summer is hotter than winter.', words: ['desu', 'atsui', 'yori', 'fuyu', 'wa', 'natsu'], answer: ['natsu', 'wa', 'fuyu', 'yori', 'atsui', 'desu'] },
      { type: 'multiple-choice', question: 'In "A wa B yori adjective", which is greater?', options: ['A', 'B', 'Both equal', 'Neither'], answer: 'A', english: 'Comparison: greater item' },
      { type: 'fill-blank', sentence: 'Densha wa basu ___ hayai desu.', answer: 'yori', options: ['yori', 'hodo', 'to', 'ga'], english: 'Trains are faster than buses.' }
    ]
  },
  {
    id: 'n5-gram-049',
    pattern: 'ほど〜ない (hodo ~ nai)',
    meaning: 'Not as ~ as',
    jlptLevel: 'N5',
    explanation: 'ほど〜ない means "not as much as." "A wa B hodo [adj]-kunai" = "A is not as [adj] as B."',
    structure: '[A] は [B] ほど [Adj negative] です',
    examples: [
      { japanese: '大阪は東京ほど大きくないです。', romaji: 'Oosaka wa Toukyou hodo ookikunai desu.', english: 'Osaka is not as big as Tokyo.' },
      { japanese: '今日は昨日ほど寒くないです。', romaji: 'Kyou wa kinou hodo samukunai desu.', english: 'Today is not as cold as yesterday.' },
      { japanese: 'バスは電車ほど速くないです。', romaji: 'Basu wa densha hodo hayakunai desu.', english: 'Buses are not as fast as trains.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Oosaka wa Toukyou ___ ookikunai desu.', answer: 'hodo', options: ['hodo', 'yori', 'made', 'kara'], english: 'Osaka is not as big as Tokyo.' },
      { type: 'multiple-choice', question: 'ほど～ない means what?', options: ['Not as ~ as', 'More than', 'The same as', 'The most'], answer: 'Not as ~ as', english: 'Negative comparison' },
      { type: 'sentence-build', english: 'Today is not as cold as yesterday.', words: ['desu', 'samukunai', 'hodo', 'kinou', 'wa', 'kyou'], answer: ['kyou', 'wa', 'kinou', 'hodo', 'samukunai', 'desu'] },
      { type: 'fill-blank', sentence: 'Basu wa densha ___ hayakunai desu.', answer: 'hodo', options: ['hodo', 'yori', 'to', 'ga'], english: 'Buses are not as fast as trains.' }
    ]
  },
  {
    id: 'n5-gram-050',
    pattern: 'いちばん (ichiban)',
    meaning: 'The most / Number one',
    jlptLevel: 'N5',
    explanation: 'いちばん means "the most" or "number one." Used for superlatives. Often with の中で (no naka de) to define the group.',
    structure: '[Group] の中で [Noun] が いちばん [Adjective] です',
    examples: [
      { japanese: '日本でいちばん高い山は富士山です。', romaji: 'Nihon de ichiban takai yama wa Fujisan desu.', english: 'The tallest mountain in Japan is Mt. Fuji.' },
      { japanese: '果物の中でいちばん好きなのはりんごです。', romaji: 'Kudamono no naka de ichiban suki na no wa ringo desu.', english: 'Among fruits, my favorite is apples.' },
      { japanese: 'クラスでいちばん背が高いです。', romaji: 'Kurasu de ichiban se ga takai desu.', english: 'I am the tallest in the class.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon de ___ takai yama wa Fujisan desu.', answer: 'ichiban', options: ['ichiban', 'motto', 'totemo', 'yori'], english: 'The tallest mountain in Japan is Mt. Fuji.' },
      { type: 'multiple-choice', question: 'いちばん is used for what?', options: ['Superlatives (the most)', 'Comparatives (more than)', 'Negatives (not as)', 'Questions'], answer: 'Superlatives (the most)', english: 'Superlative' },
      { type: 'sentence-build', english: 'I am the tallest in the class.', words: ['desu', 'takai', 'ga', 'se', 'ichiban', 'de', 'kurasu'], answer: ['kurasu', 'de', 'ichiban', 'se', 'ga', 'takai', 'desu'] },
      { type: 'fill-blank', sentence: 'Kudamono no naka de ___ suki na no wa ringo desu.', answer: 'ichiban', options: ['ichiban', 'motto', 'totemo', 'amari'], english: 'Among fruits, my favorite is apples.' }
    ]
  },
  {
    id: 'n5-gram-051',
    pattern: 'まだ (mada)',
    meaning: 'Still / Not yet',
    jlptLevel: 'N5',
    explanation: 'まだ means "still" with affirmative verbs, and "not yet" with negative verbs. まだです can answer "not yet."',
    structure: 'まだ [Verb] / まだ [Verb negative]',
    examples: [
      { japanese: 'まだ食べていません。', romaji: 'Mada tabete imasen.', english: 'I haven\'t eaten yet.' },
      { japanese: 'まだ雨が降っています。', romaji: 'Mada ame ga futte imasu.', english: 'It is still raining.' },
      { japanese: 'まだ早いです。', romaji: 'Mada hayai desu.', english: 'It is still early.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ tabete imasen.', answer: 'mada', options: ['mada', 'mou', 'motto', 'totemo'], english: 'I haven\'t eaten yet.' },
      { type: 'multiple-choice', question: 'まだ + negative verb means what?', options: ['Not yet', 'Already', 'Always', 'Never'], answer: 'Not yet', english: 'Not yet' },
      { type: 'fill-blank', sentence: '___ ame ga futte imasu.', answer: 'mada', options: ['mada', 'mou', 'motto', 'itsumo'], english: 'It is still raining.' },
      { type: 'sentence-build', english: 'It is still early.', words: ['desu', 'hayai', 'mada'], answer: ['mada', 'hayai', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-052',
    pattern: 'もう (mou)',
    meaning: 'Already / Not anymore',
    jlptLevel: 'N5',
    explanation: 'もう means "already" with past/affirmative and "not anymore" with negative. Often paired with まだ.',
    structure: 'もう [Verb past] / もう [Verb negative]',
    examples: [
      { japanese: 'もう食べました。', romaji: 'Mou tabemashita.', english: 'I already ate.' },
      { japanese: 'もう帰りましたか。', romaji: 'Mou kaerimashita ka.', english: 'Did you go home already?' },
      { japanese: 'もう要りません。', romaji: 'Mou irimasen.', english: 'I don\'t need it anymore.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ tabemashita.', answer: 'mou', options: ['mou', 'mada', 'motto', 'totemo'], english: 'I already ate.' },
      { type: 'multiple-choice', question: 'もう + past verb means what?', options: ['Already', 'Not yet', 'Still', 'Never'], answer: 'Already', english: 'Already' },
      { type: 'fill-blank', sentence: '___ irimasen.', answer: 'mou', options: ['mou', 'mada', 'motto', 'amari'], english: 'I don\'t need it anymore.' },
      { type: 'sentence-build', english: 'Did you go home already?', words: ['ka', 'kaerimashita', 'mou'], answer: ['mou', 'kaerimashita', 'ka'] }
    ]
  },
  {
    id: 'n5-gram-053',
    pattern: 'とても/すごく',
    meaning: 'Very / Extremely',
    jlptLevel: 'N5',
    explanation: 'とても and すごく are adverbs meaning "very." とても is standard; すごく is more casual.',
    structure: 'とても/すごく [Adjective/Verb]',
    examples: [
      { japanese: 'この映画はとても面白いです。', romaji: 'Kono eiga wa totemo omoshiroi desu.', english: 'This movie is very interesting.' },
      { japanese: 'とても疲れました。', romaji: 'Totemo tsukaremashita.', english: 'I am very tired.' },
      { japanese: '日本語はとても難しいです。', romaji: 'Nihongo wa totemo muzukashii desu.', english: 'Japanese is very difficult.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kono eiga wa ___ omoshiroi desu.', answer: 'totemo', options: ['totemo', 'amari', 'chotto', 'mada'], english: 'This movie is very interesting.' },
      { type: 'multiple-choice', question: 'What does とても mean?', options: ['Very', 'A little', 'Not very', 'Sometimes'], answer: 'Very', english: 'Very' },
      { type: 'fill-blank', sentence: '___ tsukaremashita.', answer: 'totemo', options: ['totemo', 'amari', 'chotto', 'mou'], english: 'I am very tired.' },
      { type: 'sentence-build', english: 'Japanese is very difficult.', words: ['desu', 'muzukashii', 'totemo', 'wa', 'nihongo'], answer: ['nihongo', 'wa', 'totemo', 'muzukashii', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-054',
    pattern: 'あまり〜ない (amari ~ nai)',
    meaning: 'Not very / Not much',
    jlptLevel: 'N5',
    explanation: 'あまり is used with negative forms to mean "not very" or "not much."',
    structure: 'あまり [Negative verb/adjective]',
    examples: [
      { japanese: 'あまり食べません。', romaji: 'Amari tabemasen.', english: 'I don\'t eat much.' },
      { japanese: 'あまり高くないです。', romaji: 'Amari takakunai desu.', english: 'It is not very expensive.' },
      { japanese: 'あまり好きじゃないです。', romaji: 'Amari suki ja nai desu.', english: 'I don\'t like it very much.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ tabemasen.', answer: 'amari', options: ['amari', 'totemo', 'motto', 'ichiban'], english: 'I don\'t eat much.' },
      { type: 'multiple-choice', question: 'あまり is always used with what?', options: ['Negative forms', 'Positive forms', 'Past tense', 'Questions'], answer: 'Negative forms', english: 'Not very' },
      { type: 'fill-blank', sentence: '___ takakunai desu.', answer: 'amari', options: ['amari', 'totemo', 'sugoku', 'ichiban'], english: 'It is not very expensive.' },
      { type: 'sentence-build', english: 'I don\'t like it very much.', words: ['desu', 'ja nai', 'suki', 'amari'], answer: ['amari', 'suki', 'ja nai', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-055',
    pattern: 'ちょっと (chotto)',
    meaning: 'A little / Slightly',
    jlptLevel: 'N5',
    explanation: 'ちょっと means "a little" or "slightly." It can also be used to soften refusals or get attention.',
    structure: 'ちょっと [Adjective/Verb]',
    examples: [
      { japanese: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', english: 'Please wait a moment.' },
      { japanese: 'ちょっと高いです。', romaji: 'Chotto takai desu.', english: 'It is a little expensive.' },
      { japanese: 'ちょっと難しいです。', romaji: 'Chotto muzukashii desu.', english: 'It is a little difficult.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: '___ matte kudasai.', answer: 'chotto', options: ['chotto', 'totemo', 'amari', 'motto'], english: 'Please wait a moment.' },
      { type: 'fill-blank', sentence: '___ takai desu.', answer: 'chotto', options: ['chotto', 'totemo', 'amari', 'ichiban'], english: 'It is a little expensive.' },
      { type: 'multiple-choice', question: 'What does ちょっと mean?', options: ['A little', 'Very', 'Not at all', 'Always'], answer: 'A little', english: 'A little' },
      { type: 'sentence-build', english: 'It is a little difficult.', words: ['desu', 'muzukashii', 'chotto'], answer: ['chotto', 'muzukashii', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-056',
    pattern: 'がほしい (ga hoshii)',
    meaning: 'Want (something)',
    jlptLevel: 'N5',
    explanation: 'ほしい is an i-adjective meaning "wanted/desired." The desired thing takes が. Only used for the speaker\'s wants.',
    structure: '[Noun] が ほしいです',
    examples: [
      { japanese: '新しい車がほしいです。', romaji: 'Atarashii kuruma ga hoshii desu.', english: 'I want a new car.' },
      { japanese: '水がほしいです。', romaji: 'Mizu ga hoshii desu.', english: 'I want water.' },
      { japanese: '何がほしいですか。', romaji: 'Nani ga hoshii desu ka.', english: 'What do you want?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Atarashii kuruma ___ hoshii desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'ni'], english: 'I want a new car.' },
      { type: 'sentence-build', english: 'What do you want?', words: ['ka', 'desu', 'hoshii', 'ga', 'nani'], answer: ['nani', 'ga', 'hoshii', 'desu', 'ka'] },
      { type: 'multiple-choice', question: 'ほしい conjugates as what type?', options: ['i-adjective', 'na-adjective', 'Verb', 'Noun'], answer: 'i-adjective', english: 'hoshii type' },
      { type: 'fill-blank', sentence: 'Mizu ___ hoshii desu.', answer: 'ga', options: ['ga', 'wo', 'wa', 'de'], english: 'I want water.' }
    ]
  },
  {
    id: 'n5-gram-057',
    pattern: 'なる (naru)',
    meaning: 'To become',
    jlptLevel: 'N5',
    explanation: 'なる means "to become." With i-adjectives: remove い, add くなる. With na-adjectives/nouns: add になる.',
    structure: '[i-adj stem] く なります / [na-adj/noun] に なります',
    examples: [
      { japanese: '暖かくなりました。', romaji: 'Atatakaku narimashita.', english: 'It became warm.' },
      { japanese: '元気になりました。', romaji: 'Genki ni narimashita.', english: 'I became well.' },
      { japanese: '医者になりたいです。', romaji: 'Isha ni naritai desu.', english: 'I want to become a doctor.' },
      { japanese: '日本語が上手になりました。', romaji: 'Nihongo ga jouzu ni narimashita.', english: 'My Japanese got better.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Atataka___ narimashita.', answer: 'ku', options: ['ku', 'ni', 'de', 'i'], english: 'It became warm.' },
      { type: 'fill-blank', sentence: 'Genki ___ narimashita.', answer: 'ni', options: ['ni', 'ku', 'de', 'ga'], english: 'I became well.' },
      { type: 'multiple-choice', question: 'With na-adjectives, なる takes which particle?', options: ['ni', 'ku', 'de', 'ga'], answer: 'ni', english: 'Become + na-adj' },
      { type: 'sentence-build', english: 'I want to become a doctor.', words: ['desu', 'naritai', 'ni', 'isha'], answer: ['isha', 'ni', 'naritai', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-058',
    pattern: 'する (suru)',
    meaning: 'To do (irregular verb)',
    jlptLevel: 'N5',
    explanation: 'する is an irregular verb meaning "to do." Many nouns become verbs when combined with する (e.g., benkyou suru = to study).',
    structure: '[Noun] を/が します',
    examples: [
      { japanese: '勉強をします。', romaji: 'Benkyou wo shimasu.', english: 'I study.' },
      { japanese: '料理をします。', romaji: 'Ryouri wo shimasu.', english: 'I cook.' },
      { japanese: '買い物をします。', romaji: 'Kaimono wo shimasu.', english: 'I go shopping.' },
      { japanese: 'サッカーをします。', romaji: 'Sakkaa wo shimasu.', english: 'I play soccer.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Benkyou wo ___.', answer: 'shimasu', options: ['shimasu', 'kimasu', 'imasu', 'arimasu'], english: 'I study.' },
      { type: 'sentence-build', english: 'I cook.', words: ['shimasu', 'wo', 'ryouri'], answer: ['ryouri', 'wo', 'shimasu'] },
      { type: 'multiple-choice', question: 'What is the te-form of する?', options: ['shite', 'sutte', 'shinde', 'sarete'], answer: 'shite', english: 'te-form of suru' },
      { type: 'fill-blank', sentence: 'Sakkaa wo ___.', answer: 'shimasu', options: ['shimasu', 'kimasu', 'arimasu', 'mimasu'], english: 'I play soccer.' }
    ]
  },
  {
    id: 'n5-gram-059',
    pattern: 'くる (kuru)',
    meaning: 'To come (irregular verb)',
    jlptLevel: 'N5',
    explanation: 'くる is an irregular verb meaning "to come." Polite form: きます. Te-form: きて. Negative: こない.',
    structure: '[Place] に/へ きます',
    examples: [
      { japanese: '友達が来ます。', romaji: 'Tomodachi ga kimasu.', english: 'A friend is coming.' },
      { japanese: '日本に来ました。', romaji: 'Nihon ni kimashita.', english: 'I came to Japan.' },
      { japanese: '明日来てください。', romaji: 'Ashita kite kudasai.', english: 'Please come tomorrow.' },
      { japanese: 'バスが来ません。', romaji: 'Basu ga kimasen.', english: 'The bus isn\'t coming.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ga ___.', answer: 'kimasu', options: ['kimasu', 'ikimasu', 'shimasu', 'imasu'], english: 'A friend is coming.' },
      { type: 'multiple-choice', question: 'What is the te-form of くる?', options: ['kite', 'kutte', 'konde', 'koite'], answer: 'kite', english: 'te-form of kuru' },
      { type: 'sentence-build', english: 'Please come tomorrow.', words: ['kudasai', 'kite', 'ashita'], answer: ['ashita', 'kite', 'kudasai'] },
      { type: 'fill-blank', sentence: 'Basu ga ___.', answer: 'kimasen', options: ['kimasen', 'ikimasen', 'shimasen', 'imasen'], english: 'The bus isn\'t coming.' }
    ]
  },
  {
    id: 'n5-gram-060',
    pattern: 'ことができる (koto ga dekiru)',
    meaning: 'Can do ~ / Be able to ~',
    jlptLevel: 'N5',
    explanation: 'Dictionary form + ことができます expresses ability or possibility.',
    structure: '[Verb dictionary form] ことが できます',
    examples: [
      { japanese: '日本語を話すことができます。', romaji: 'Nihongo wo hanasu koto ga dekimasu.', english: 'I can speak Japanese.' },
      { japanese: '漢字を読むことができます。', romaji: 'Kanji wo yomu koto ga dekimasu.', english: 'I can read kanji.' },
      { japanese: '泳ぐことができません。', romaji: 'Oyogu koto ga dekimasen.', english: 'I cannot swim.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihongo wo hanasu ___ ga dekimasu.', answer: 'koto', options: ['koto', 'mono', 'no', 'hazu'], english: 'I can speak Japanese.' },
      { type: 'sentence-build', english: 'I can read kanji.', words: ['dekimasu', 'ga', 'koto', 'yomu', 'wo', 'kanji'], answer: ['kanji', 'wo', 'yomu', 'koto', 'ga', 'dekimasu'] },
      { type: 'multiple-choice', question: 'What verb form comes before ことができる?', options: ['Dictionary form', 'te-form', 'masu-form', 'nai-form'], answer: 'Dictionary form', english: 'Ability pattern' },
      { type: 'fill-blank', sentence: 'Oyogu koto ga ___.', answer: 'dekimasen', options: ['dekimasen', 'dekimasu', 'shimasen', 'arimasen'], english: 'I cannot swim.' }
    ]
  },
  {
    id: 'n5-gram-061',
    pattern: 'つもりです (tsumori desu)',
    meaning: 'Plan to / Intend to',
    jlptLevel: 'N5',
    explanation: 'つもりです expresses intention or a plan to do something. Uses dictionary form for affirmative, ない form for negative.',
    structure: '[Verb dictionary form] つもりです',
    examples: [
      { japanese: '来年日本に行くつもりです。', romaji: 'Rainen nihon ni iku tsumori desu.', english: 'I plan to go to Japan next year.' },
      { japanese: '大学に入るつもりです。', romaji: 'Daigaku ni hairu tsumori desu.', english: 'I intend to enter university.' },
      { japanese: '明日は勉強しないつもりです。', romaji: 'Ashita wa benkyou shinai tsumori desu.', english: 'I don\'t plan to study tomorrow.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Rainen nihon ni iku ___ desu.', answer: 'tsumori', options: ['tsumori', 'koto', 'hazu', 'you'], english: 'I plan to go to Japan next year.' },
      { type: 'sentence-build', english: 'I intend to enter university.', words: ['desu', 'tsumori', 'hairu', 'ni', 'daigaku'], answer: ['daigaku', 'ni', 'hairu', 'tsumori', 'desu'] },
      { type: 'multiple-choice', question: 'つもりです expresses what?', options: ['Intention or plan', 'Ability', 'Obligation', 'Permission'], answer: 'Intention or plan', english: 'Intention' },
      { type: 'fill-blank', sentence: 'Ashita wa benkyou shinai ___ desu.', answer: 'tsumori', options: ['tsumori', 'koto', 'hazu', 'you'], english: 'I don\'t plan to study tomorrow.' }
    ]
  },
  {
    id: 'n5-gram-062',
    pattern: 'でしょう (deshou)',
    meaning: 'Probably / I think',
    jlptLevel: 'N5',
    explanation: 'でしょう expresses probability or conjecture. It is softer than です and used for guesses or weather forecasts.',
    structure: '[Sentence] でしょう',
    examples: [
      { japanese: '明日は雨でしょう。', romaji: 'Ashita wa ame deshou.', english: 'It will probably rain tomorrow.' },
      { japanese: 'あの人は日本人でしょう。', romaji: 'Ano hito wa nihonjin deshou.', english: 'That person is probably Japanese.' },
      { japanese: 'テストは難しいでしょう。', romaji: 'Tesuto wa muzukashii deshou.', english: 'The test will probably be difficult.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ame ___.', answer: 'deshou', options: ['deshou', 'desu', 'deshita', 'ja nai'], english: 'It will probably rain tomorrow.' },
      { type: 'multiple-choice', question: 'でしょう expresses what?', options: ['Probability or conjecture', 'Certainty', 'Past tense', 'Desire'], answer: 'Probability or conjecture', english: 'Probably' },
      { type: 'fill-blank', sentence: 'Tesuto wa muzukashii ___.', answer: 'deshou', options: ['deshou', 'desu', 'deshita', 'mashita'], english: 'The test will probably be difficult.' },
      { type: 'sentence-build', english: 'That person is probably Japanese.', words: ['deshou', 'nihonjin', 'wa', 'ano hito'], answer: ['ano hito', 'wa', 'nihonjin', 'deshou'] }
    ]
  },
  {
    id: 'n5-gram-063',
    pattern: 'と思います (to omoimasu)',
    meaning: 'I think that ~',
    jlptLevel: 'N5',
    explanation: 'と思います is used to express one\'s opinion or thoughts. The clause before と is in plain form.',
    structure: '[Plain form] と 思います',
    examples: [
      { japanese: '日本は美しいと思います。', romaji: 'Nihon wa utsukushii to omoimasu.', english: 'I think Japan is beautiful.' },
      { japanese: '明日は雨だと思います。', romaji: 'Ashita wa ame da to omoimasu.', english: 'I think it will rain tomorrow.' },
      { japanese: 'この本は面白いと思います。', romaji: 'Kono hon wa omoshiroi to omoimasu.', english: 'I think this book is interesting.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon wa utsukushii ___ omoimasu.', answer: 'to', options: ['to', 'ga', 'wo', 'ni'], english: 'I think Japan is beautiful.' },
      { type: 'multiple-choice', question: 'What form is used before と思います?', options: ['Plain form', 'Polite form', 'te-form', 'Passive form'], answer: 'Plain form', english: 'Plain form + to omoimasu' },
      { type: 'sentence-build', english: 'I think this book is interesting.', words: ['omoimasu', 'to', 'omoshiroi', 'wa', 'kono hon'], answer: ['kono hon', 'wa', 'omoshiroi', 'to', 'omoimasu'] },
      { type: 'fill-blank', sentence: 'Ashita wa ame da ___ omoimasu.', answer: 'to', options: ['to', 'ga', 'wo', 'ni'], english: 'I think it will rain tomorrow.' }
    ]
  },
  {
    id: 'n5-gram-064',
    pattern: 'から/ので (kara/node)',
    meaning: 'Because / Since (reason)',
    jlptLevel: 'N5',
    explanation: 'から and ので both express reason. から is more direct/casual; ので is softer/more polite. から follows plain or polite form; ので follows plain form (na-adj/noun + な + ので).',
    structure: '[Reason] から/ので [Result]',
    examples: [
      { japanese: '疲れたから、寝ます。', romaji: 'Tsukareta kara, nemasu.', english: 'Because I\'m tired, I will sleep.' },
      { japanese: '雨なので、出かけません。', romaji: 'Ame nanode, dekakemasen.', english: 'Since it\'s raining, I won\'t go out.' },
      { japanese: '忙しいから、行けません。', romaji: 'Isogashii kara, ikemasen.', english: 'Because I\'m busy, I can\'t go.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tsukareta ___, nemasu.', answer: 'kara', options: ['kara', 'node', 'made', 'ga'], english: 'Because I\'m tired, I will sleep.' },
      { type: 'fill-blank', sentence: 'Ame ___, dekakemasen.', answer: 'nanode', options: ['nanode', 'kara', 'dake', 'made'], english: 'Since it\'s raining, I won\'t go out.' },
      { type: 'multiple-choice', question: 'Which is softer and more polite?', options: ['node', 'kara', 'Both the same', 'Neither'], answer: 'node', english: 'kara vs node' },
      { type: 'sentence-build', english: 'Because I\'m busy, I can\'t go.', words: ['ikemasen', 'kara', 'isogashii'], answer: ['isogashii', 'kara', 'ikemasen'] }
    ]
  },
  {
    id: 'n5-gram-065',
    pattern: 'けど/が (kedo/ga)',
    meaning: 'But / However',
    jlptLevel: 'N5',
    explanation: 'けど (casual) and が (polite) connect two contrasting clauses. They mean "but" or "however."',
    structure: '[Clause A] けど/が [Clause B]',
    examples: [
      { japanese: '日本語は難しいですが、面白いです。', romaji: 'Nihongo wa muzukashii desu ga, omoshiroi desu.', english: 'Japanese is difficult, but interesting.' },
      { japanese: '高いけど、買います。', romaji: 'Takai kedo, kaimasu.', english: 'It\'s expensive, but I\'ll buy it.' },
      { japanese: '疲れましたが、まだ頑張ります。', romaji: 'Tsukaremashita ga, mada ganbarimasu.', english: 'I\'m tired, but I\'ll still do my best.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihongo wa muzukashii desu ___, omoshiroi desu.', answer: 'ga', options: ['ga', 'kara', 'node', 'to'], english: 'Japanese is difficult, but interesting.' },
      { type: 'fill-blank', sentence: 'Takai ___, kaimasu.', answer: 'kedo', options: ['kedo', 'kara', 'node', 'to'], english: 'It\'s expensive, but I\'ll buy it.' },
      { type: 'multiple-choice', question: 'Which is more polite: けど or が?', options: ['ga', 'kedo', 'Both the same', 'Neither'], answer: 'ga', english: 'Polite "but"' },
      { type: 'sentence-build', english: 'I\'m tired, but I\'ll still do my best.', words: ['ganbarimasu', 'mada', 'ga', 'tsukaremashita'], answer: ['tsukaremashita', 'ga', 'mada', 'ganbarimasu'] }
    ]
  },
  {
    id: 'n5-gram-066',
    pattern: 'とき (toki)',
    meaning: 'When / At the time of',
    jlptLevel: 'N5',
    explanation: 'とき means "when" or "at the time of." It follows plain form verbs, adjectives, or nouns (+ の).',
    structure: '[Plain form] とき / [Noun] の とき',
    examples: [
      { japanese: '日本に行ったとき、寿司を食べました。', romaji: 'Nihon ni itta toki, sushi wo tabemashita.', english: 'When I went to Japan, I ate sushi.' },
      { japanese: '暇なとき、本を読みます。', romaji: 'Hima na toki, hon wo yomimasu.', english: 'When I\'m free, I read books.' },
      { japanese: '子供のとき、よく遊びました。', romaji: 'Kodomo no toki, yoku asobimashita.', english: 'When I was a child, I played a lot.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni itta ___, sushi wo tabemashita.', answer: 'toki', options: ['toki', 'kara', 'node', 'made'], english: 'When I went to Japan, I ate sushi.' },
      { type: 'fill-blank', sentence: 'Hima ___ toki, hon wo yomimasu.', answer: 'na', options: ['na', 'no', 'ni', 'de'], english: 'When I\'m free, I read books.' },
      { type: 'multiple-choice', question: 'What particle connects a noun to とき?', options: ['no', 'na', 'ni', 'de'], answer: 'no', english: 'Noun + no + toki' },
      { type: 'sentence-build', english: 'When I was a child, I played a lot.', words: ['asobimashita', 'yoku', 'toki', 'no', 'kodomo'], answer: ['kodomo', 'no', 'toki', 'yoku', 'asobimashita'] }
    ]
  },
  {
    id: 'n5-gram-067',
    pattern: '前に/後で (mae ni / ato de)',
    meaning: 'Before / After',
    jlptLevel: 'N5',
    explanation: '前に (mae ni) means "before" and 後で (ato de) means "after." 前に uses dictionary form; 後で uses ta-form.',
    structure: '[Verb dict.] 前に / [Verb ta-form] 後で',
    examples: [
      { japanese: '食べる前に手を洗います。', romaji: 'Taberu mae ni te wo araimasu.', english: 'I wash my hands before eating.' },
      { japanese: '食べた後で散歩します。', romaji: 'Tabeta ato de sanpo shimasu.', english: 'I take a walk after eating.' },
      { japanese: '寝る前に本を読みます。', romaji: 'Neru mae ni hon wo yomimasu.', english: 'I read a book before sleeping.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Taberu ___ ni te wo araimasu.', answer: 'mae', options: ['mae', 'ato', 'naka', 'ue'], english: 'I wash my hands before eating.' },
      { type: 'fill-blank', sentence: 'Tabeta ___ de sanpo shimasu.', answer: 'ato', options: ['ato', 'mae', 'naka', 'shita'], english: 'I take a walk after eating.' },
      { type: 'multiple-choice', question: 'Which verb form comes before 前に?', options: ['Dictionary form', 'ta-form', 'te-form', 'nai-form'], answer: 'Dictionary form', english: 'Before: verb form' },
      { type: 'sentence-build', english: 'I read a book before sleeping.', words: ['yomimasu', 'wo', 'hon', 'ni', 'mae', 'neru'], answer: ['neru', 'mae', 'ni', 'hon', 'wo', 'yomimasu'] }
    ]
  },
  {
    id: 'n5-gram-068',
    pattern: 'ながら (nagara)',
    meaning: 'While doing ~',
    jlptLevel: 'N5',
    explanation: 'ながら indicates two simultaneous actions. Attach to the masu-stem of the secondary action. The main action is the second verb.',
    structure: '[Verb masu-stem] ながら [Main verb]',
    examples: [
      { japanese: '音楽を聞きながら勉強します。', romaji: 'Ongaku wo kikinagara benkyou shimasu.', english: 'I study while listening to music.' },
      { japanese: '歩きながら話します。', romaji: 'Arukinagara hanashimasu.', english: 'I talk while walking.' },
      { japanese: 'テレビを見ながら食べます。', romaji: 'Terebi wo minagara tabemasu.', english: 'I eat while watching TV.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ongaku wo kiki___ benkyou shimasu.', answer: 'nagara', options: ['nagara', 'mashita', 'masu', 'tai'], english: 'I study while listening to music.' },
      { type: 'sentence-build', english: 'I talk while walking.', words: ['hanashimasu', 'arukinagara'], answer: ['arukinagara', 'hanashimasu'] },
      { type: 'multiple-choice', question: 'In A nagara B, which is the main action?', options: ['B (second verb)', 'A (first verb)', 'Both equally', 'Neither'], answer: 'B (second verb)', english: 'Main action in nagara' },
      { type: 'fill-blank', sentence: 'Terebi wo mi___ tabemasu.', answer: 'nagara', options: ['nagara', 'mashita', 'te', 'tai'], english: 'I eat while watching TV.' }
    ]
  },
  {
    id: 'n5-gram-069',
    pattern: 'てから (te kara)',
    meaning: 'After doing ~',
    jlptLevel: 'N5',
    explanation: 'てから means "after doing ~." It emphasizes the sequence — the first action must be completed before the second.',
    structure: '[Verb te-form] から [Verb]',
    examples: [
      { japanese: 'ご飯を食べてから出かけます。', romaji: 'Gohan wo tabete kara dekakemasu.', english: 'I go out after eating.' },
      { japanese: 'シャワーを浴びてから寝ます。', romaji: 'Shawaa wo abite kara nemasu.', english: 'I sleep after taking a shower.' },
      { japanese: '宿題をしてから遊びます。', romaji: 'Shukudai wo shite kara asobimasu.', english: 'I play after doing homework.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Gohan wo tabete ___ dekakemasu.', answer: 'kara', options: ['kara', 'made', 'node', 'ga'], english: 'I go out after eating.' },
      { type: 'sentence-build', english: 'I sleep after taking a shower.', words: ['nemasu', 'kara', 'abite', 'wo', 'shawaa'], answer: ['shawaa', 'wo', 'abite', 'kara', 'nemasu'] },
      { type: 'multiple-choice', question: 'What verb form comes before から in てから?', options: ['te-form', 'Dictionary form', 'masu-form', 'nai-form'], answer: 'te-form', english: 'te kara verb form' },
      { type: 'fill-blank', sentence: 'Shukudai wo shite ___ asobimasu.', answer: 'kara', options: ['kara', 'made', 'node', 'to'], english: 'I play after doing homework.' }
    ]
  },
  {
    id: 'n5-gram-070',
    pattern: 'のが好き/上手 (no ga suki/jouzu)',
    meaning: 'Like doing ~ / Good at doing ~',
    jlptLevel: 'N5',
    explanation: 'Verb dictionary form + のが turns a verb into a noun phrase, which can then be used with 好き, 上手, 下手, etc.',
    structure: '[Verb dict. form] のが [好き/上手/下手] です',
    examples: [
      { japanese: '料理を作るのが好きです。', romaji: 'Ryouri wo tsukuru no ga suki desu.', english: 'I like cooking.' },
      { japanese: '泳ぐのが上手です。', romaji: 'Oyogu no ga jouzu desu.', english: 'I am good at swimming.' },
      { japanese: '歌うのが下手です。', romaji: 'Utau no ga heta desu.', english: 'I am bad at singing.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ryouri wo tsukuru ___ ga suki desu.', answer: 'no', options: ['no', 'koto', 'mono', 'to'], english: 'I like cooking.' },
      { type: 'sentence-build', english: 'I am good at swimming.', words: ['desu', 'jouzu', 'ga', 'no', 'oyogu'], answer: ['oyogu', 'no', 'ga', 'jouzu', 'desu'] },
      { type: 'multiple-choice', question: 'What does の do before が好き?', options: ['Nominalizes the verb', 'Shows possession', 'Marks the topic', 'Indicates location'], answer: 'Nominalizes the verb', english: 'Verb nominalization' },
      { type: 'fill-blank', sentence: 'Utau ___ ga heta desu.', answer: 'no', options: ['no', 'koto', 'mono', 'wa'], english: 'I am bad at singing.' }
    ]
  },
  {
    id: 'n5-gram-071',
    pattern: 'counter + も (mo)',
    meaning: 'As many as ~ / Not even one',
    jlptLevel: 'N5',
    explanation: 'Counter + も emphasizes a large amount ("as many as"). With negative, ひとつも/いちども means "not even one/once."',
    structure: '[Counter] も [Verb] / ひとつも [Negative verb]',
    examples: [
      { japanese: '三回も行きました。', romaji: 'Sankai mo ikimashita.', english: 'I went as many as three times.' },
      { japanese: 'ひとつも分かりません。', romaji: 'Hitotsu mo wakarimasen.', english: 'I don\'t understand even one.' },
      { japanese: '十人も来ました。', romaji: 'Juunin mo kimashita.', english: 'As many as ten people came.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Sankai ___ ikimashita.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'I went as many as three times.' },
      { type: 'fill-blank', sentence: 'Hitotsu ___ wakarimasen.', answer: 'mo', options: ['mo', 'wa', 'ga', 'de'], english: 'I don\'t understand even one.' },
      { type: 'multiple-choice', question: 'ひとつも + negative means what?', options: ['Not even one', 'Only one', 'Many', 'A few'], answer: 'Not even one', english: 'Not even one' },
      { type: 'sentence-build', english: 'As many as ten people came.', words: ['kimashita', 'mo', 'juunin'], answer: ['juunin', 'mo', 'kimashita'] }
    ]
  },
  {
    id: 'n5-gram-072',
    pattern: 'だけ (dake)',
    meaning: 'Only / Just',
    jlptLevel: 'N5',
    explanation: 'だけ means "only" or "just." It limits the scope to the preceding noun or amount.',
    structure: '[Noun/Counter] だけ',
    examples: [
      { japanese: '水だけ飲みます。', romaji: 'Mizu dake nomimasu.', english: 'I drink only water.' },
      { japanese: '一つだけください。', romaji: 'Hitotsu dake kudasai.', english: 'Just one, please.' },
      { japanese: '日本語だけ話します。', romaji: 'Nihongo dake hanashimasu.', english: 'I speak only Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mizu ___ nomimasu.', answer: 'dake', options: ['dake', 'shika', 'mo', 'wa'], english: 'I drink only water.' },
      { type: 'sentence-build', english: 'Just one, please.', words: ['kudasai', 'dake', 'hitotsu'], answer: ['hitotsu', 'dake', 'kudasai'] },
      { type: 'multiple-choice', question: 'What does だけ mean?', options: ['Only / Just', 'Also', 'Even', 'All'], answer: 'Only / Just', english: 'Only' },
      { type: 'fill-blank', sentence: 'Nihongo ___ hanashimasu.', answer: 'dake', options: ['dake', 'shika', 'mo', 'to'], english: 'I speak only Japanese.' }
    ]
  },
  {
    id: 'n5-gram-073',
    pattern: 'しか〜ない (shika ~ nai)',
    meaning: 'Nothing but ~ / Only (with negative)',
    jlptLevel: 'N5',
    explanation: 'しか always pairs with a negative verb and means "only" with a nuance of insufficiency or limitation.',
    structure: '[Noun] しか [Negative verb]',
    examples: [
      { japanese: '水しか飲みません。', romaji: 'Mizu shika nomimasen.', english: 'I drink nothing but water.' },
      { japanese: '百円しかありません。', romaji: 'Hyakuen shika arimasen.', english: 'I only have 100 yen.' },
      { japanese: '日本語しか話せません。', romaji: 'Nihongo shika hanasemasen.', english: 'I can only speak Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Mizu ___ nomimasen.', answer: 'shika', options: ['shika', 'dake', 'mo', 'wa'], english: 'I drink nothing but water.' },
      { type: 'multiple-choice', question: 'しか always requires what?', options: ['A negative verb', 'A positive verb', 'Past tense', 'te-form'], answer: 'A negative verb', english: 'shika + negative' },
      { type: 'fill-blank', sentence: 'Hyakuen ___ arimasen.', answer: 'shika', options: ['shika', 'dake', 'mo', 'ga'], english: 'I only have 100 yen.' },
      { type: 'sentence-build', english: 'I can only speak Japanese.', words: ['hanasemasen', 'shika', 'nihongo'], answer: ['nihongo', 'shika', 'hanasemasen'] }
    ]
  },
  {
    id: 'n5-gram-074',
    pattern: 'にする (ni suru)',
    meaning: 'Decide on ~',
    jlptLevel: 'N5',
    explanation: 'にする means "to decide on" or "to choose." Commonly used when ordering at restaurants.',
    structure: '[Noun] に します',
    examples: [
      { japanese: 'コーヒーにします。', romaji: 'Koohii ni shimasu.', english: 'I\'ll have coffee.' },
      { japanese: 'これにします。', romaji: 'Kore ni shimasu.', english: 'I\'ll go with this one.' },
      { japanese: '何にしますか。', romaji: 'Nani ni shimasu ka.', english: 'What will you have?' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Koohii ___ shimasu.', answer: 'ni', options: ['ni', 'wo', 'de', 'ga'], english: 'I\'ll have coffee.' },
      { type: 'sentence-build', english: 'What will you have?', words: ['ka', 'shimasu', 'ni', 'nani'], answer: ['nani', 'ni', 'shimasu', 'ka'] },
      { type: 'multiple-choice', question: 'にする is commonly used when?', options: ['Ordering / Choosing', 'Greeting', 'Apologizing', 'Describing'], answer: 'Ordering / Choosing', english: 'Decide on' },
      { type: 'fill-blank', sentence: 'Kore ___ shimasu.', answer: 'ni', options: ['ni', 'wo', 'de', 'ga'], english: 'I\'ll go with this one.' }
    ]
  },
  {
    id: 'n5-gram-075',
    pattern: 'なければならない (nakereba naranai)',
    meaning: 'Must / Have to',
    jlptLevel: 'N5',
    explanation: 'なければならない (or なければなりません for polite) expresses obligation. Formed from the nai-form stem + kereba naranai.',
    structure: '[Verb nai-stem] なければ なりません',
    examples: [
      { japanese: '薬を飲まなければなりません。', romaji: 'Kusuri wo nomanakereba narimasen.', english: 'I must take medicine.' },
      { japanese: '宿題をしなければなりません。', romaji: 'Shukudai wo shinakereba narimasen.', english: 'I must do homework.' },
      { japanese: '早く起きなければなりません。', romaji: 'Hayaku okinakereba narimasen.', english: 'I must wake up early.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Kusuri wo noma___ narimasen.', answer: 'nakereba', options: ['nakereba', 'nakute', 'naide', 'nai'], english: 'I must take medicine.' },
      { type: 'multiple-choice', question: 'なければならない expresses what?', options: ['Obligation (must)', 'Permission', 'Desire', 'Prohibition'], answer: 'Obligation (must)', english: 'Must' },
      { type: 'sentence-build', english: 'I must do homework.', words: ['narimasen', 'shinakereba', 'wo', 'shukudai'], answer: ['shukudai', 'wo', 'shinakereba', 'narimasen'] },
      { type: 'fill-blank', sentence: 'Hayaku oki___ narimasen.', answer: 'nakereba', options: ['nakereba', 'nakute', 'naide', 'nai de'], english: 'I must wake up early.' }
    ]
  },
  {
    id: 'n5-gram-076',
    pattern: 'なくてもいい (nakutemo ii)',
    meaning: 'Don\'t have to ~',
    jlptLevel: 'N5',
    explanation: 'なくてもいい means "it\'s okay not to" or "don\'t have to." Formed from nai-form: remove い, add くてもいい.',
    structure: '[Verb nai-stem] なくても いいです',
    examples: [
      { japanese: '明日は来なくてもいいです。', romaji: 'Ashita wa konakutemo ii desu.', english: 'You don\'t have to come tomorrow.' },
      { japanese: '全部食べなくてもいいです。', romaji: 'Zenbu tabenakutemo ii desu.', english: 'You don\'t have to eat everything.' },
      { japanese: '急がなくてもいいです。', romaji: 'Isoganakutemo ii desu.', english: 'You don\'t have to hurry.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ko___ ii desu.', answer: 'nakutemo', options: ['nakutemo', 'nakereba', 'naide', 'nai'], english: 'You don\'t have to come tomorrow.' },
      { type: 'multiple-choice', question: 'なくてもいい means what?', options: ['Don\'t have to', 'Must', 'Must not', 'Want to'], answer: 'Don\'t have to', english: 'Don\'t have to' },
      { type: 'sentence-build', english: 'You don\'t have to hurry.', words: ['desu', 'ii', 'isoganakutemo'], answer: ['isoganakutemo', 'ii', 'desu'] },
      { type: 'fill-blank', sentence: 'Zenbu tabe___ ii desu.', answer: 'nakutemo', options: ['nakutemo', 'nakereba', 'te mo', 'naide'], english: 'You don\'t have to eat everything.' }
    ]
  },
  {
    id: 'n5-gram-077',
    pattern: 'Number + counter',
    meaning: 'Counting with counters',
    jlptLevel: 'N5',
    explanation: 'Japanese uses counters after numbers. Common N5 counters: つ (general), 人 (nin, people), 枚 (mai, flat things), 本 (hon, long things), 台 (dai, machines).',
    structure: '[Number] + [Counter]',
    examples: [
      { japanese: 'りんごを三つください。', romaji: 'Ringo wo mittsu kudasai.', english: 'Three apples, please.' },
      { japanese: '学生が五人います。', romaji: 'Gakusei ga gonin imasu.', english: 'There are five students.' },
      { japanese: '切手を二枚買いました。', romaji: 'Kitte wo nimai kaimashita.', english: 'I bought two stamps.' },
      { japanese: 'ペンを三本持っています。', romaji: 'Pen wo sanbon motte imasu.', english: 'I have three pens.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ringo wo ___ kudasai. (3)', answer: 'mittsu', options: ['mittsu', 'sannin', 'sanmai', 'sanbon'], english: 'Three apples, please.' },
      { type: 'fill-blank', sentence: 'Gakusei ga ___ imasu. (5 people)', answer: 'gonin', options: ['gonin', 'itsutsu', 'gomai', 'gohon'], english: 'There are five students.' },
      { type: 'multiple-choice', question: 'Which counter is for flat things?', options: ['mai', 'hon', 'nin', 'dai'], answer: 'mai', english: 'Flat things counter' },
      { type: 'fill-blank', sentence: 'Pen wo ___ motte imasu. (3 long things)', answer: 'sanbon', options: ['sanbon', 'mittsu', 'sannin', 'sanmai'], english: 'I have three pens.' }
    ]
  },
  {
    id: 'n5-gram-078',
    pattern: 'あげる/もらう/くれる',
    meaning: 'Give / Receive',
    jlptLevel: 'N5',
    explanation: 'あげる = I give (to someone). もらう = I receive. くれる = someone gives (to me). These verbs express the direction of giving.',
    structure: '[Giver] が [Receiver] に [Thing] を あげる/もらう/くれる',
    examples: [
      { japanese: '友達にプレゼントをあげました。', romaji: 'Tomodachi ni purezento wo agemashita.', english: 'I gave a present to my friend.' },
      { japanese: '友達にプレゼントをもらいました。', romaji: 'Tomodachi ni purezento wo moraimashita.', english: 'I received a present from my friend.' },
      { japanese: '母が本をくれました。', romaji: 'Haha ga hon wo kuremashita.', english: 'My mother gave me a book.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ni purezento wo ___.', answer: 'agemashita', options: ['agemashita', 'moraimashita', 'kuremashita', 'kashimashita'], english: 'I gave a present to my friend.' },
      { type: 'multiple-choice', question: 'Which verb means "someone gives TO ME"?', options: ['kureru', 'ageru', 'morau', 'watasu'], answer: 'kureru', english: 'Give to me' },
      { type: 'fill-blank', sentence: 'Tomodachi ni purezento wo ___.', answer: 'moraimashita', options: ['moraimashita', 'agemashita', 'kuremashita', 'kaimashita'], english: 'I received a present from my friend.' },
      { type: 'sentence-build', english: 'My mother gave me a book.', words: ['kuremashita', 'wo', 'hon', 'ga', 'haha'], answer: ['haha', 'ga', 'hon', 'wo', 'kuremashita'] }
    ]
  },
  {
    id: 'n5-gram-079',
    pattern: 'てあげる/てもらう/てくれる',
    meaning: 'Do ~ for someone / Have someone do ~',
    jlptLevel: 'N5',
    explanation: 'Te-form + あげる/もらう/くれる expresses doing favors. てあげる = do for someone, てもらう = have someone do for me, てくれる = someone does for me.',
    structure: '[Verb te-form] あげる/もらう/くれる',
    examples: [
      { japanese: '友達に教えてあげました。', romaji: 'Tomodachi ni oshiete agemashita.', english: 'I taught my friend (did a favor).' },
      { japanese: '友達に手伝ってもらいました。', romaji: 'Tomodachi ni tetsudatte moraimashita.', english: 'I had my friend help me.' },
      { japanese: '母が作ってくれました。', romaji: 'Haha ga tsukutte kuremashita.', english: 'My mother made it for me.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Tomodachi ni oshiete ___.', answer: 'agemashita', options: ['agemashita', 'moraimashita', 'kuremashita', 'shimashita'], english: 'I taught my friend (did a favor).' },
      { type: 'multiple-choice', question: 'てもらう means what?', options: ['Have someone do for me', 'Do for someone', 'Someone does for me', 'Do together'], answer: 'Have someone do for me', english: 'Have done for me' },
      { type: 'fill-blank', sentence: 'Haha ga tsukutte ___.', answer: 'kuremashita', options: ['kuremashita', 'agemashita', 'moraimashita', 'shimashita'], english: 'My mother made it for me.' },
      { type: 'sentence-build', english: 'I had my friend help me.', words: ['moraimashita', 'tetsudatte', 'ni', 'tomodachi'], answer: ['tomodachi', 'ni', 'tetsudatte', 'moraimashita'] }
    ]
  },
  {
    id: 'n5-gram-080',
    pattern: 'たことがある (ta koto ga aru)',
    meaning: 'Have experienced ~',
    jlptLevel: 'N5',
    explanation: 'ta-form + ことがある expresses past experience — something you have done at least once.',
    structure: '[Verb ta-form] ことが あります',
    examples: [
      { japanese: '日本に行ったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', english: 'I have been to Japan.' },
      { japanese: '寿司を食べたことがあります。', romaji: 'Sushi wo tabeta koto ga arimasu.', english: 'I have eaten sushi.' },
      { japanese: '富士山に登ったことがありません。', romaji: 'Fujisan ni nobotta koto ga arimasen.', english: 'I have never climbed Mt. Fuji.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Nihon ni itta ___ ga arimasu.', answer: 'koto', options: ['koto', 'mono', 'no', 'hazu'], english: 'I have been to Japan.' },
      { type: 'sentence-build', english: 'I have eaten sushi.', words: ['arimasu', 'ga', 'koto', 'tabeta', 'wo', 'sushi'], answer: ['sushi', 'wo', 'tabeta', 'koto', 'ga', 'arimasu'] },
      { type: 'multiple-choice', question: 'What verb form comes before ことがある?', options: ['ta-form (past)', 'Dictionary form', 'te-form', 'nai-form'], answer: 'ta-form (past)', english: 'Experience pattern verb form' },
      { type: 'fill-blank', sentence: 'Fujisan ni nobotta koto ga ___.', answer: 'arimasen', options: ['arimasen', 'arimasu', 'imasen', 'imasu'], english: 'I have never climbed Mt. Fuji.' }
    ]
  },
  {
    id: 'n5-gram-081',
    pattern: 'たり〜たりする (tari ~ tari suru)',
    meaning: 'Do things like ~ and ~',
    jlptLevel: 'N5',
    explanation: 'たり〜たりする lists representative actions non-exhaustively — "do things like A and B." Form: ta-form + り.',
    structure: '[Verb ta-form] り [Verb ta-form] り します',
    examples: [
      { japanese: '週末は映画を見たり、買い物をしたりします。', romaji: 'Shuumatsu wa eiga wo mitari, kaimono wo shitari shimasu.', english: 'On weekends I do things like watch movies and go shopping.' },
      { japanese: '本を読んだり音楽を聞いたりします。', romaji: 'Hon wo yondari ongaku wo kiitari shimasu.', english: 'I do things like read books and listen to music.' },
      { japanese: '休みの日は寝たり食べたりします。', romaji: 'Yasumi no hi wa netari tabetari shimasu.', english: 'On my day off I do things like sleep and eat.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Eiga wo mi___, kaimono wo shi___ shimasu.', answer: 'tari', options: ['tari', 'te', 'nagara', 'kara'], english: 'I do things like watch movies and go shopping.' },
      { type: 'multiple-choice', question: 'たり〜たりする lists actions how?', options: ['Non-exhaustively (among other things)', 'Exhaustively (all items)', 'In sequence', 'Simultaneously'], answer: 'Non-exhaustively (among other things)', english: 'Representative actions' },
      { type: 'sentence-build', english: 'I do things like read books and listen to music.', words: ['shimasu', 'kiitari', 'ongaku wo', 'yondari', 'hon wo'], answer: ['hon wo', 'yondari', 'ongaku wo', 'kiitari', 'shimasu'] },
      { type: 'fill-blank', sentence: 'Yasumi no hi wa ne___ tabe___ shimasu.', answer: 'tari', options: ['tari', 'te', 'nagara', 'ba'], english: 'On my day off I do things like sleep and eat.' }
    ]
  },
  {
    id: 'n5-gram-082',
    pattern: 'と (to) - Conditional',
    meaning: 'If / When (natural consequence)',
    jlptLevel: 'N5',
    explanation: 'と as a conditional means "if/when" for natural, habitual, or automatic results. Uses dictionary form + と.',
    structure: '[Verb dictionary form] と [Result]',
    examples: [
      { japanese: '春になると、花が咲きます。', romaji: 'Haru ni naru to, hana ga sakimasu.', english: 'When spring comes, flowers bloom.' },
      { japanese: 'このボタンを押すと、ドアが開きます。', romaji: 'Kono botan wo osu to, doa ga akimasu.', english: 'If you press this button, the door opens.' },
      { japanese: '右に曲がると、駅があります。', romaji: 'Migi ni magaru to, eki ga arimasu.', english: 'If you turn right, there is a station.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Haru ni naru ___, hana ga sakimasu.', answer: 'to', options: ['to', 'ba', 'tara', 'nara'], english: 'When spring comes, flowers bloom.' },
      { type: 'multiple-choice', question: 'と conditional is best for what?', options: ['Natural/automatic consequences', 'Requests', 'Wishes', 'Commands'], answer: 'Natural/automatic consequences', english: 'Natural conditional' },
      { type: 'sentence-build', english: 'If you turn right, there is a station.', words: ['arimasu', 'ga', 'eki', 'to', 'magaru', 'ni', 'migi'], answer: ['migi', 'ni', 'magaru', 'to', 'eki', 'ga', 'arimasu'] },
      { type: 'fill-blank', sentence: 'Kono botan wo osu ___, doa ga akimasu.', answer: 'to', options: ['to', 'ba', 'kara', 'node'], english: 'If you press this button, the door opens.' }
    ]
  },
  {
    id: 'n5-gram-083',
    pattern: 'のです/んです (no desu / n desu)',
    meaning: 'It is that ~ (explanation/emphasis)',
    jlptLevel: 'N5',
    explanation: 'のです (or んです in speech) adds explanatory nuance. It explains a reason, asks for an explanation, or emphasizes.',
    structure: '[Plain form] のです / んです',
    examples: [
      { japanese: '明日テストがあるんです。', romaji: 'Ashita tesuto ga aru n desu.', english: 'It\'s that I have a test tomorrow.' },
      { japanese: 'どうしたんですか。', romaji: 'Dou shita n desu ka.', english: 'What happened? (seeking explanation)' },
      { japanese: '日本語を勉強しているんです。', romaji: 'Nihongo wo benkyou shite iru n desu.', english: 'It\'s that I\'m studying Japanese.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita tesuto ga aru ___ desu.', answer: 'n', options: ['n', 'no', 'to', 'ga'], english: 'It\'s that I have a test tomorrow.' },
      { type: 'multiple-choice', question: 'んです adds what nuance?', options: ['Explanation or emphasis', 'Question', 'Negation', 'Past tense'], answer: 'Explanation or emphasis', english: 'Explanatory nuance' },
      { type: 'fill-blank', sentence: 'Dou shita ___ desu ka.', answer: 'n', options: ['n', 'to', 'ga', 'wa'], english: 'What happened?' },
      { type: 'sentence-build', english: 'It\'s that I\'m studying Japanese.', words: ['desu', 'n', 'iru', 'shite', 'benkyou', 'wo', 'nihongo'], answer: ['nihongo', 'wo', 'benkyou', 'shite', 'iru', 'n', 'desu'] }
    ]
  },
  {
    id: 'n5-gram-084',
    pattern: 'そうです (sou desu) - Hearsay',
    meaning: 'I heard that ~ / They say ~',
    jlptLevel: 'N5',
    explanation: 'Plain form + そうです expresses hearsay — information heard from another source. Different from stem + そう (looks like).',
    structure: '[Plain form] そうです',
    examples: [
      { japanese: '明日は雨だそうです。', romaji: 'Ashita wa ame da sou desu.', english: 'I heard it will rain tomorrow.' },
      { japanese: 'あの映画は面白いそうです。', romaji: 'Ano eiga wa omoshiroi sou desu.', english: 'I heard that movie is interesting.' },
      { japanese: '田中さんは来ないそうです。', romaji: 'Tanaka-san wa konai sou desu.', english: 'I heard Mr. Tanaka isn\'t coming.' },
      { japanese: 'この店は有名だそうです。', romaji: 'Kono mise wa yuumei da sou desu.', english: 'I heard this shop is famous.' }
    ],
    exercises: [
      { type: 'fill-blank', sentence: 'Ashita wa ame da ___ desu.', answer: 'sou', options: ['sou', 'you', 'rashii', 'mitai'], english: 'I heard it will rain tomorrow.' },
      { type: 'multiple-choice', question: 'Plain form + そうです expresses what?', options: ['Hearsay (I heard that)', 'Appearance (looks like)', 'Desire', 'Ability'], answer: 'Hearsay (I heard that)', english: 'Hearsay' },
      { type: 'sentence-build', english: 'I heard that movie is interesting.', words: ['desu', 'sou', 'omoshiroi', 'wa', 'ano eiga'], answer: ['ano eiga', 'wa', 'omoshiroi', 'sou', 'desu'] },
      { type: 'fill-blank', sentence: 'Tanaka-san wa konai ___ desu.', answer: 'sou', options: ['sou', 'you', 'rashii', 'hazu'], english: 'I heard Mr. Tanaka isn\'t coming.' },
      { type: 'fill-blank', sentence: 'Kono mise wa yuumei da ___ desu.', answer: 'sou', options: ['sou', 'you', 'mitai', 'rashii'], english: 'I heard this shop is famous.' }
    ]
  }
];
