// Kintas Language Data
const kintasData = {
  pronouns: [
    { kintas: 'mi', english: 'I/me', possessive: 'min (my)' },
    { kintas: 'tu', english: 'you (singular)', possessive: 'tun (your)' },
    { kintas: 'ka', english: 'he/she/it/they', possessive: 'kan (his/her/their)' },
    { kintas: 'na', english: 'we/us', possessive: 'nan (our)' },
    { kintas: 'nu', english: 'you (plural)', possessive: 'nun (your)' }
  ],

  verbs: [
    { kintas: 'ta', english: 'speak/say' },
    { kintas: 'go', english: 'move/go' },
    { kintas: 'es', english: 'be/exist' },
    { kintas: 'hav', english: 'have/possess' },
    { kintas: 'mak', english: 'do/make/create' },
    { kintas: 'vis', english: 'see/perceive' },
    { kintas: 'her', english: 'hear/listen' },
    { kintas: 'vol', english: 'want/desire' },
    { kintas: 'hop', english: 'jump/hop' },
    { kintas: 'div', english: 'separate/divide' },
    { kintas: 'nam', english: 'name/call' }
  ],

  nouns: {
    people: [
      { kintas: 'kin', english: 'person/human' }
    ],
    places: [
      { kintas: 'dom', english: 'house/home/building' },
      { kintas: 'lok', english: 'place/location' },
      { kintas: 'pat', english: 'path/way/road' }
    ],
    nature: [
      { kintas: 'sol', english: 'sun/day' },
      { kintas: 'lun', english: 'moon/night' },
      { kintas: 'ak', english: 'water' },
      { kintas: 'fir', english: 'fire' },
      { kintas: 'ter', english: 'earth/ground/land' },
      { kintas: 'aer', english: 'air/wind' },
      { kintas: 'tim', english: 'time' }
    ],
    concepts: [
      { kintas: 'pan', english: 'food' },
      { kintas: 'vit', english: 'life' },
      { kintas: 'rip', english: 'death' },
      { kintas: 'kol', english: 'color' },
      { kintas: 'form', english: 'form/shape/structure' },
      { kintas: 'spir', english: 'spirit/breath/soul' },
      { kintas: 'stil', english: 'style' }
    ]
  },

  adjectives: {
    size: [
      { kintas: 'big', english: 'large/big' },
      { kintas: 'smal', english: 'small/little' }
    ],
    quality: [
      { kintas: 'bon', english: 'good' },
      { kintas: 'bad', english: 'bad' },
      { kintas: 'nov', english: 'new' },
      { kintas: 'old', english: 'old' }
    ],
    physical: [
      { kintas: 'hot', english: 'hot/warm' },
      { kintas: 'kal', english: 'cold' },
      { kintas: 'lit', english: 'light (weight/brightness)' },
      { kintas: 'hev', english: 'heavy' },
      { kintas: 'rap', english: 'quick/fast' },
      { kintas: 'len', english: 'slow' }
    ],
    quantity: [
      { kintas: 'mani', english: 'many/much/a lot' }
    ]
  },

  colors: [
    { kintas: 'ripkol', english: 'black', literal: 'death-color', emoji: '💀' },
    { kintas: 'lunkol', english: 'white/silver', literal: 'moon-color' },
    { kintas: 'solkol', english: 'yellow', literal: 'sun-color' },
    { kintas: 'firkol', english: 'red/orange', literal: 'fire-color' },
    { kintas: 'akkol', english: 'blue', literal: 'water-color' },
    { kintas: 'terkol', english: 'brown', literal: 'earth-color' },
    { kintas: 'vitkol', english: 'green', literal: 'life-color' }
  ],

  animals: [
    { kintas: 'dog', english: 'dog' },
    { kintas: 'kat', english: 'cat' },
    { kintas: 'foks', english: 'fox' },
    { kintas: 'bir', english: 'bird' },
    { kintas: 'fis', english: 'fish' }
  ],

  functionWords: [
    { kintas: 'ne', english: 'not/no' },
    { kintas: 'si', english: 'yes' },
    { kintas: 'alo', english: 'hello/hi' },
    { kintas: 'bai', english: 'bye/goodbye' },
    { kintas: 'tak', english: 'thank you/thanks' },
    { kintas: 'en', english: 'and' },
    { kintas: 'or', english: 'or' },
    { kintas: 'if', english: 'if' },
    { kintas: 'den', english: 'then' },
    { kintas: 'pas', english: 'past tense marker' },
    { kintas: 'fut', english: 'future tense marker' },
    { kintas: 'in', english: 'of (possession for nouns)' },
    { kintas: 'pa', english: 'to/for (recipient)' },
    { kintas: 'fra', english: 'from (source)' },
    { kintas: 'met', english: 'with (accompaniment)' },
    { kintas: 'sur', english: 'over/above (spatial)' },
    { kintas: 'ins', english: 'in/inside/within (spatial)' },
    { kintas: 'mor', english: 'more (comparative)' },
    { kintas: 'max', english: 'most (superlative)' },
    { kintas: 'les', english: 'less (comparative)' },
    { kintas: 'lest', english: 'least (superlative)' },
    { kintas: 'sam', english: 'same/equal/as' },
    { kintas: 'dan', english: 'than' }
  ],

  questionWords: [
    { kintas: 'ko', english: 'who' },
    { kintas: 'ket', english: 'what' },
    { kintas: 'kor', english: 'where' },
    { kintas: 'ken', english: 'when' },
    { kintas: 'kim', english: 'why' },
    { kintas: 'kom', english: 'how' }
  ],

  numbers: [
    { kintas: 'nul', english: '0', value: 0 },
    { kintas: 'un', english: '1', value: 1 },
    { kintas: 'du', english: '2', value: 2 },
    { kintas: 'tri', english: '3', value: 3 },
    { kintas: 'for', english: '4', value: 4 },
    { kintas: 'fif', english: '5', value: 5 },
    { kintas: 'sik', english: '6', value: 6 },
    { kintas: 'sep', english: '7', value: 7 },
    { kintas: 'ok', english: '8', value: 8 },
    { kintas: 'nin', english: '9', value: 9 },
    { kintas: 'des', english: '10', value: 10 },
    { kintas: 'sen', english: '100', value: 100 },
    { kintas: 'mil', english: '1000', value: 1000 }
  ],

  compounds: [
    { kintas: 'kinta', english: 'language', breakdown: 'kin (person) + ta (speak)' },
    { kintas: 'akdom', english: 'bathroom', breakdown: 'ak (water) + dom (house)' },
    { kintas: 'panlok', english: 'restaurant/kitchen', breakdown: 'pan (food) + lok (place)' },
    { kintas: 'domlok', english: 'neighborhood', breakdown: 'dom (house) + lok (place)' },
    { kintas: 'sollok', english: 'sunny place/desert', breakdown: 'sol (sun) + lok (place)' },
    { kintas: 'terinsak', english: 'island', breakdown: 'ter (earth) + in (of) + ak (water)' },
    { kintas: 'sollit', english: 'sunlight/daylight', breakdown: 'sol (sun) + lit (light)' },
    { kintas: 'lunlit', english: 'moonlight', breakdown: 'lun (moon) + lit (light)' },
    { kintas: 'akpan', english: 'soup/beverage', breakdown: 'ak (water) + pan (food)' },
    { kintas: 'firpan', english: 'cooked food', breakdown: 'fir (fire) + pan (food)' },
    { kintas: 'rippan', english: 'poison', breakdown: 'rip (death) + pan (food)' },
    { kintas: 'nultim', english: 'beginning', breakdown: 'nul (zero) + tim (time)' },
    { kintas: 'nulform', english: 'formless/void', breakdown: 'nul (zero) + form (form)' },
    { kintas: 'nulmak', english: 'resting/relaxing', breakdown: 'nul (zero) + mak (do)' },
    { kintas: 'aersur', english: 'sky/heaven', breakdown: 'aer (air) + sur (above)' },
    { kintas: 'kinmak', english: 'god/creator', breakdown: 'kin (person) + mak (maker)' },
    { kintas: 'panmak', english: 'cook/chef', breakdown: 'pan (food) + mak (maker)' },
    { kintas: 'dommak', english: 'builder/architect', breakdown: 'dom (house) + mak (maker)' },
    { kintas: 'kinsis', english: 'observer/witness', breakdown: 'kin (person) + vis (seer)' },
    { kintas: 'solmak', english: 'lamp/light source', breakdown: 'sol (sun) + mak (maker)' }
  ],

  grammar: [
    {
      title: 'Plural',
      rule: 'Add suffix -im to nouns',
      examples: [
        { kintas: 'kin → kinim', english: 'person → people' },
        { kintas: 'dom → domim', english: 'house → houses' },
        { kintas: 'mi hav panim', english: 'I have foods' }
      ]
    },
    {
      title: 'Tense',
      rule: 'Place particle BEFORE the verb: pas (past), fut (future), unmarked (present)',
      examples: [
        { kintas: 'mi pas go dom', english: 'I went home' },
        { kintas: 'tu fut hav pan', english: 'you will have food' },
        { kintas: 'na go dom', english: 'we go home (present)' }
      ]
    },
    {
      title: 'Possession - Pronouns',
      rule: 'Add suffix -n to pronouns: mi→min (my), tu→tun (your), ka→kan (his/her)',
      examples: [
        { kintas: 'min dom', english: 'my house' },
        { kintas: 'tun pan es hot', english: 'your food is hot' },
        { kintas: 'mi go min dom', english: 'I go to my home' }
      ]
    },
    {
      title: 'Possession - Nouns',
      rule: 'Use structure: Noun₁ in Noun₂ = Noun₂ of Noun₁',
      examples: [
        { kintas: 'kin in dom', english: "person's house (house of person)" },
        { kintas: 'sol in lit', english: "sun's light (light of sun)" }
      ]
    },
    {
      title: 'Word Order',
      rule: 'SVO (Subject-Verb-Object). Adjectives follow nouns.',
      examples: [
        { kintas: 'mi hav pan', english: 'I have food' },
        { kintas: 'tu pas go dom', english: 'you went home' },
        { kintas: 'mi hav dom big', english: 'I have big house' }
      ]
    },
    {
      title: 'Negation',
      rule: 'Place ne before the verb',
      examples: [
        { kintas: 'mi ne hav pan', english: "I don't have food" },
        { kintas: 'tu pas ne go dom', english: "you didn't go home" },
        { kintas: 'ka ne es bon', english: 'he/she is not good' }
      ]
    },
    {
      title: 'Questions',
      rule: 'Replace unknown element with question word (ko, ket, kor, ken, kim, kom)',
      examples: [
        { kintas: 'ko go dom?', english: 'who goes home?' },
        { kintas: 'tu vis ket?', english: 'what do you see?' },
        { kintas: 'kin es kor?', english: 'where is person?' },
        { kintas: 'ken tu go?', english: 'when do you go?' },
        { kintas: 'kim sol es hot?', english: 'why is sun hot?' },
        { kintas: 'kom tu mak dom?', english: 'how do you make house?' }
      ]
    },
    {
      title: 'Comparatives',
      rule: 'Use mor (more) or les (less) + adjective + dan (than)',
      examples: [
        { kintas: 'mi mor big dan tu', english: "I'm bigger than you" },
        { kintas: 'sol mor hot dan lun', english: 'sun is hotter than moon' },
        { kintas: 'tu les big dan ka', english: "you're smaller than him/her" }
      ]
    },
    {
      title: 'Superlatives',
      rule: 'Use max (most) or lest (least) + adjective',
      examples: [
        { kintas: 'dom max big', english: 'biggest house' },
        { kintas: 'ka es kin max bon', english: 'he/she is the best person' },
        { kintas: 'dom lest nov', english: 'least new house (oldest)' }
      ]
    },
    {
      title: 'Prepositions',
      rule: 'pa (to/for), fra (from), met (with), sur (over/above)',
      examples: [
        { kintas: 'mi mak dom pa tu', english: 'I make house for you' },
        { kintas: 'mi go fra dom', english: 'I go from house' },
        { kintas: 'mi go met tu', english: 'I go with you' },
        { kintas: 'foks hop sur dog', english: 'fox jumps over dog' }
      ]
    },
    {
      title: 'Compound Words',
      rule: 'Combine roots: Modifier + Head (written as one word)',
      examples: [
        { kintas: 'kinta = kin + ta', english: 'person-speak = language' },
        { kintas: 'panlok = pan + lok', english: 'food-place = restaurant' },
        { kintas: 'firkol = fir + kol', english: 'fire-color = red' }
      ]
    }
  ],

  examples: {
    basic: [
      { kintas: 'mi ta', english: 'I speak' },
      { kintas: 'tu es bon', english: 'you are good' },
      { kintas: 'kin go dom', english: 'person goes home' },
      { kintas: 'mi hav pan', english: 'I have food' },
      { kintas: 'sol es hot', english: 'sun is hot' }
    ],
    withPlural: [
      { kintas: 'na hav panim', english: 'we have foods' },
      { kintas: 'kinim go domim', english: 'people go to houses' },
      { kintas: 'tu vis solim', english: 'you see days/suns' }
    ],
    withTense: [
      { kintas: 'mi pas go dom', english: 'I went home' },
      { kintas: 'tu fut hav pan', english: 'you will have food' },
      { kintas: 'ka pas vis sol', english: 'he/she saw sun' },
      { kintas: 'na fut ta', english: 'we will speak' }
    ],
    withAdjectives: [
      { kintas: 'mi hav dom big', english: 'I have big house' },
      { kintas: 'pan hot es bon', english: 'hot food is good' },
      { kintas: 'tu pas vis sol big', english: 'you saw big sun' }
    ],
    withNegation: [
      { kintas: 'mi ne hav pan', english: "I don't have food" },
      { kintas: 'tu pas ne go dom', english: "you didn't go home" },
      { kintas: 'ka ne es bon', english: 'he/she is not good' }
    ],
    withPossession: [
      { kintas: 'min dom es big', english: 'my house is big' },
      { kintas: 'tu hav tun pan', english: 'you have your food' },
      { kintas: 'kin in dom es old', english: "person's house is old" }
    ],
    questions: [
      { kintas: 'ko hav pan?', english: 'who has food?' },
      { kintas: 'tu vis ket?', english: 'what do you see?' },
      { kintas: 'kin es kor?', english: 'where is person?' },
      { kintas: 'ken tu go dom?', english: 'when do you go home?' }
    ],
    withNumbers: [
      { kintas: 'mi hav du domim', english: 'I have 2 houses' },
      { kintas: 'tri kinim go', english: '3 people go' },
      { kintas: 'mi es du-des-sep', english: 'I am 27 (years old)' }
    ],
    withCompounds: [
      { kintas: 'mi go panlok', english: 'I go to restaurant' },
      { kintas: 'tu es panmak bon', english: 'you are a good cook' },
      { kintas: 'na vis sollit', english: 'we see sunlight' },
      { kintas: 'kin ta kinta', english: 'person speaks language' }
    ],
    withComparatives: [
      { kintas: 'mi mor big dan tu', english: "I'm bigger than you" },
      { kintas: 'sol mor hot dan lun', english: 'sun is hotter than moon' },
      { kintas: 'min dom max old', english: 'my house is the oldest' },
      { kintas: 'na sam big', english: 'we are equally big' }
    ],
    withPrepositions: [
      { kintas: 'mi go panlok met tu', english: 'I go to restaurant with you' },
      { kintas: 'kin mak dom pa kinim', english: 'person makes house for people' },
      { kintas: 'mi hav pan fra panlok', english: 'I have food from restaurant' }
    ],
    complex: [
      { kintas: 'mi vol mak pan mor bon pa tu', english: 'I want to make better food for you' },
      { kintas: 'na go panlok met kinim mani', english: 'we go to restaurant with many people' },
      { kintas: 'mi mak akpan pa min kinim', english: 'I make soup for my people' },
      { kintas: 'ko pas vis kom mani kinim?', english: 'who saw how many people?' },
      { kintas: 'Nultim, kinmak pas mak aersur en ter. Ter pas es nulform en nul. Ripkol pas es sur ak, en spir in kinmak pas go sur akim. En kinmak pas ta, \'Lit es,\' en lit pas es.', english: 'In the beginning, God created the heavens and the earth. The earth was formless and void. Darkness was over the waters, and the spirit of God moved over the waters. And God said, "Let there be light," and there was light.' }
    ]
  },

  phonology: {
    consonants: ['p', 't', 'k', 'm', 'n', 's', 'f', 'l', 'r', 'h'],
    vowels: [
      { letter: 'a', sound: 'ah (as in father)' },
      { letter: 'e', sound: 'eh (as in bed)' },
      { letter: 'i', sound: 'ee (as in machine)' },
      { letter: 'o', sound: 'oh (as in note)' },
      { letter: 'u', sound: 'oo (as in boot)' }
    ],
    syllableStructure: '(C)V(C)'
  },

  about: {
    name: 'Kinta',
    meaning: 'kin (person) + ta (speak) = language',
    principles: [
      'Maximum clarity - words in same contexts maximally distinct',
      'Minimal error-prone - avoid similar-sounding roots',
      'Efficiency - short roots (1-2 syllables) for common concepts',
      'Phonetic consistency - each letter always pronounced the same',
      'Compositional vocabulary - build complex words from simple roots'
    ],
    stats: {
      totalRoots: 81,
      consonants: 10,
      vowels: 5,
      possibleSyllables: '~605'
    }
  }
};
