# Kintal - A Constructed Language

**Kintal** (from *kin* = person + *tal* = speak) is a constructed language designed for maximum clarity and ease of learning.

## Design Principles

1. **Maximum clarity**: Words in same contexts are maximally distinct
2. **Minimal error-prone**: Avoid similar-sounding roots
3. **Efficiency**: Short roots (1-2 syllables) for common concepts
4. **Phonetic consistency**: Each letter always pronounced the same
5. **Compositional vocabulary**: Build complex words from simple roots (e.g., kintal = person-speak = language, firkol = fire-color = red)

## Documentation

- [Phonology](phonology.md) - Sound system and pronunciation
- [Dictionary](dictionary.md) - Complete vocabulary and word list
- [Grammar](grammar.md) - Grammar rules and sentence structure
- [Examples](examples.md) - Example phrases and stories

## Quick Start

### Basic Sentence Structure
Kintal uses **SVO** (Subject-Verb-Object) word order:
- **mi hav pan** = I have food
- **tu go dom** = you go home

### Pronunciation
- 5 vowels: **a e i o u** (pronounced: ah, eh, ee, oh, oo)
- 14 consonants: **p b t d g k m n s f l r h v**
- No phonemic stress or tone

### Key Features
- **Compositional words**: Complex concepts from simple roots
  - **akdom** = water-house = bathroom
  - **panlok** = food-place = restaurant
  - **kintal** = person-speak = language

- **Simple grammar**: Minimal inflection
  - Plural: add **-im** (kin → kinim, ka → kaim)
  - Tense: particles **pas** (past), **fut** (future)
  - Possession: add **-n** to pronouns (mi → min, kaim → kanim)

- **Consistent conjunctions**:
  - **en** = and
  - **ve** = or
  - **fu** = if
  - **ba** = but (concession)
  - **nesam** = however (contrast)

## Examples

**Basic phrases:**
- mi tal = I speak
- tu es bon = you are good
- na go panlok = we go to restaurant

**With tense:**
- mi pas hav pan = I had food
- tu fut go dom = you will go home
- mi pas go dom passol = I went home yesterday
- na fut vis tu futsol = we will see you tomorrow

**Questions:**
- ko hav pan? = who has food?
- tu vis ket? = what do you see?
- kor es min dom? = where is my house?

## License

This constructed language is open for anyone to use, learn, and contribute to.


---


# Kintal Phonology

## Sound System

**Consonants**: p, b, t, d, g, k, m, n, s, f, l, r, h, v (14)
**Vowels**: a, e, i, o, u (5)
**Syllable structure**: (C)V(C)

## Design Notes

- Dropped 'w' for maximum clarity - too similar to u/o glide
- Dropped 'j' for maximum clarity - too similar to i glide (i-consonant)
- No phonemic stress/tone - maximizes clarity and learnability

## Pronunciation Guide

**Vowels:**
- **a** = "ah" (as in father)
- **e** = "eh" (as in bed)
- **i** = "ee" (as in machine)
- **o** = "oh" (as in note)
- **u** = "oo" (as in boot)

**Consonants:**
All consonants are pronounced as in English, with consistent pronunciation in all contexts.

## Stress and Tone

**Not phonemic**: Stress and tone do not change word meaning. Speakers may freely use them for emphasis, emotion, or rhythm.

This design choice maximizes:
- **Clarity**: No minimal pairs distinguished by stress/tone
- **Learnability**: No need to memorize stress patterns
- **Flexibility**: Speakers can use prosody naturally for expression


---


# Kintal Grammar

## Word Order
**Basic structure**: SVO (Subject-Verb-Object)

**Standard sentence pattern:**
- Subject - (Tense) - Verb - Object
- Subject - Verb - Object (present/unmarked tense)

Examples:
- **mi hav pan** = I have food
- **tu pas go dom** = you went home
- **kin fut mak domim** = person will make houses
- **na vis sol** = we see sun

**With negation:**
- Subject - (Tense) - **ne** - Verb - Object
- **mi ne hav pan** = I not have food = I don't have food
- **tu pas ne go dom** = you past not go home = you didn't go home

**With adjectives:**
- Adjective follows noun: Noun - Adjective
- **dom big** = house big = big house
- **pan hot** = food hot = hot food
- **mi hav pan hot** = I have hot food

**Design note**: Fixed word order eliminates need for case markers on subject/object. Only possession requires marking.

## Plural
**Marker**: -im (suffix)

**For nouns:**
- kin → **kinim** (person → people)
- dom → **domim** (house → houses)
- pan → **panim** (food → foods)
- sol → **solim** (day → days)

**For third-person pronoun:**
- ka → **kaim** (he/she/it → they/them)

**Usage**: Attach directly to noun or pronoun root
- mi hav pan = I have food
- mi hav panim = I have foods
- ka tal = he/she speaks
- kaim tal = they speak

**Note**: Only **ka** takes the plural suffix. Other pronouns already distinguish singular/plural:
- mi (I) / na (we)
- tu (you-singular) / nu (you-plural)

## Tense
**System**: Separate particles placed BEFORE the verb

**Markers**:
- **pas** = past tense
- **fut** = future tense
- (unmarked) = present/timeless

Examples:
- mi **pas** go dom = I went home
- tu **fut** hav pan = you will have food
- na go dom = we go home (present)
- kin **pas** vis sol = person saw sun
- ka **fut** tal = he/she will speak

**Design note**: Verbs remain unchanged - tense is purely contextual via particles

## Possession
**System**: Suffix **-n** on pronouns to create possessive forms

**Possessive pronouns:**
- mi → **min** (my)
- tu → **tun** (your - singular)
- ka → **kan** (his/her/its)
- kaim → **kanim** (their - plural)
- na → **nan** (our)
- nu → **nun** (your - plural)

**Usage**: Possessive-Pronoun + Noun
- **min dom** = my house
- **tun pan** = your food
- **kan sol** = his/her day
- **kanim solim** = their days
- **nan kinim** = our people

Examples in sentences:
- mi hav **min dom** = I have my house
- tu pas go **tun dom** = you went (to) your home
- **kan pan** es hot = his/her food is hot
- **kanim dom** es big = their house is big

**For non-pronoun possession** (noun owning noun):
- Use structure: Noun₁ - **in** - Noun₂ = Noun₂ of Noun₁
- **kin in dom** = person's house (house of person)
- **sol in lit** = sun's light (light of sun)

## Questions
**System**: Use question words in place of the unknown element, maintain SVO word order

**Question words:** ko (who), ket (what), kor (where), ken (when), kim (why), kom (how)

**Question formation:**
- Replace unknown element with question word
- No word order change needed
- Optional: Add question particle at end for clarity (TBD)

**Examples:**

*Who questions:*
- **ko go dom?** = who goes home?
- **ko hav pan?** = who has food?
- **tu vis ko?** = you see who?

*What questions:*
- **ket es hot?** = what is hot?
- **tu hav ket?** = what do you have?
- **kin mak ket?** = person makes what?

*Where questions:*
- **kin es kor?** = where is person?
- **tu go kor?** = where do you go?
- **min dom es kor?** = where is my house?

*When questions:*
- **tu go dom ken?** = when do you go home?
- **ken tu pas hav pan?** = when did you have food?

*Why questions:*
- **kim tu go?** = why do you go?
- **kim pan es hot?** = why is food hot?

*How questions:*
- **kom tu mak dom?** = how do you make house?
- **kom kin go?** = how does person go?

*How many/much (compositional):*
- **kom mani kinim?** = how many people? (literally: how much people)
- **tu hav kom mani pan?** = how much food do you have?
- **kom big dom?** = how big (is) house?
- **kom rap tu go?** = how rap do you go?

**With tense:**
- **ko pas go dom?** = who went home?
- **tu fut hav ket?** = what will you have?

## Tag Questions
**System**: Add **ne?** at the end of any statement to turn it into a tag question

**Pattern:** [Complete Statement] + , **ne?**

**Usage:** This pattern works universally, regardless of tense or verb (much simpler than English's varied tag questions)

**Examples:**
- **tu go dom, ne?** = you go home, no? = you're going home, aren't you?
- **es bon, ne?** = is good, no? = it's good, isn't it?
- **ka pas vis so, ne?** = he saw this, no? = he saw this, didn't he?
- **na fut tal, ne?** = we will speak, no? = we'll speak, won't we?
- **tu hav pan, ne?** = you have food, no? = you have food, don't you?
- **mi es rit, ne?** = I am right, no? = I'm right, aren't I?

## Prepositions
**Core prepositions** for expressing relationships:

**pa** = to/for (recipient, benefactive)
- **mi mak dom pa tu** = I make house for you
- **mi tal pa kinim** = I speak to people
- **pan pa mi** = food for me

**fra** = from (source, origin)
- **mi go fra dom** = I go from house
- **mi hav pan fra panlok** = I have food from restaurant
- **kin fra lok big** = person from big place

**met** = with (accompaniment, instrument)
- **mi go met tu** = I go with you
- **na hav panim met ak** = we have foods with water
- **kin mak dom met kinim** = person makes house with people

**sur** = over/above (spatial position)
- **foks hop sur dog** = fox jumps over dog
- **vingovit go sur dom** = bird goes over house
- **kin es sur ter** = person is above ground

**Usage in sentences:**
- **mi vol mak pan mas bon pa tu** = I want (to) make better food for you
- **tu go fra kor?** = you go from where? = where do you come from?
- **na go panlok met kinim mani** = we go (to) restaurant with many people

## Comparatives and Superlatives
**System**: Particles to express comparison between things

**Markers:**
- **mas** = more (comparative)
- **max** = most (superlative)
- **les** = less (comparative)
- **lest** = least (superlative)
- **sam** = same/equal/as (equality)
- **dan** = than (comparison marker)

**Comparative** (more/less X than Y):
- Structure: Noun₁ - mas/les - Adjective - dan - Noun₂
- **dom mas big dan dom** = house more big than house = this house is bigger than that house
- **dom les big dan dom** = house less big than house = this house is smaller/less big than that house
- Shorter: **mas big dan X** = more big than X = bigger than X

**Superlative** (most/least X):
- Structure: Noun - max/lest - Adjective
- **dom max big** = house most big = biggest house
- **dom lest big** = house least big = smallest house
- **kin max rap** = person most rap = fastest person
- **kin lest rap** = person least rap = slowest person

**Equality** (as X as Y):
- Structure: Noun₁ - sam - Adjective - Noun₂ (optional)
- **dom sam big** = house same big = equally big house
- **mi sam old tu** = I same old you = I'm as old as you

**Examples:**

*Comparatives:*
- mi mas big dan tu = I'm bigger than you
- sol mas hot dan lun = sun is hotter than moon
- tu go mas rap = you go more rap = you go faster
- min dom mas old dan tun dom = my house is older than your house
- mi les big dan tu = I'm less big than you = I'm smaller than you
- lun les hot dan sol = moon is less hot than sun = moon is colder than sun

*Superlatives:*
- ka es kin max big = he/she is (the) biggest person
- sol es max hot = sun is (the) hottest
- tu vis dom max nov = you see (the) newest house
- mi es kin lest rap = I am (the) least rap person = I am (the) slowest person
- dom lest old = (the) least old house = (the) newest house

*Equality:*
- mi sam big tu = I'm as big as you
- dom sam old = house (is) equally old
- na hav panim sam mani = we have equally many foods = we have as much food

**In questions:**
- ko mas big? = who (is) bigger?
- ket mas hot dan sol? = what (is) hotter than sun?
- kom mas rap tu go? = how much faster do you go?


---


# Kintal Dictionary

## Core Roots

### PRONOUNS (maximally distinct)
- **mi** = I/me
- **tu** = you (singular)
- **ka** = he/she/it (singular third person, gender-neutral)
- **kaim** = they/them (plural third person)
- **na** = we/us
- **nu** = you (plural)

### BASIC VERBS
- **tal** = speak/say
- **go** = move/go
- **es** = be/exist
- **hav** = have/possess
- **mak** = do/make/create
- **vis** = see/perceive
- **her** = hear/listen
- **nos** = smell
- **vol** = want/desire
- **ned** = need/necessity (verb/noun)
- **pir** = question/ask/inquire
- **hop** = jump/hop
- **div** = separate/divide
- **nam** = name/call
- **tem** = try
- **hit** = hit, attack
- **tek** = take, grab

### CORE NOUNS - People & Places
- **kin** = person/human
- **dom** = house/home/building
- **lok** = place/location
- **pat** = path/way/road
- **terinsak** = earth-in-water = island

### CORE NOUNS - Nature & Time
- **sol** = sun/day
- **lun** = moon/night
- **ak** = water
- **fir** = fire
- **ter** = earth/ground/land
- **vin** = air/wind
- **el** = electricity/electric
- **tim** = time
- **fin** = last/finally/end
- **rep** = again

### CORE NOUNS - Basic Concepts
- **pan** = food
- **vit** = life
- **rip** = death
- **vak** = awake/conscious
- **slep** = sleep/asleep
- **kol** = color
- **form** = form/shape/structure
- **spir** = spirit/breath/soul
- **stil** = style
- **rit** = right
- **tok** = part/piece
- **toktok** = part-part = system (interconnected parts)
- **tot** = all
- **vik** = change/alter
- **kompu** = computer
- **buk** = book

### ADJECTIVES - Size & Quality
- **big** = large/big
- **smal** = small/little
- **bon** = good
- **bad** = bad
- **nov** = new
- **old** = old

### ADJECTIVES - Physical Properties
- **hot** = hot/warm
- **kal** = cold
- **lit** = light (weight/brightness)
- **hev** = heavy
- **rap** = quick
- **len** = slow

### ADJECTIVES - Quantity
- **mani** = many/much/a lot

### COLORS (Compound pattern: [concept]-kol)
- **ripkol** = death-color = black
- **lunkol** = moon-color = white/silver
- **solkol** = sun-color = yellow
- **firkol** = fire-color = red/orange
- **akkol** = water-color = blue
- **terkol** = earth-color = brown
- **vitkol** = life-color = green

**Note**: All colors formed compositionally using **kol** (color) + concept root

### ANIMALS
- **dog** = dog
- **kat** = cat
- **foks** = fox
- **bir** = bird
- **fis** = fish

### BASIC FUNCTION WORDS
- **ne** = not/no
- **si** = yes
- **so** = this
- **te** = that
- **alo** = hello/hi
- **bai** = bye/goodbye
- **tak** = thank you/thanks
- **en** = and
- **ve** = or
- **fu** = if
- **den** = then
- **ba** = but (concession)
- **nesam** = not-same = however/whereas (contrast/opposition)
- **nerit** = not-right = wrong/mistake/error
- **pas** = past tense marker
- **fut** = future tense marker
- **in** = of (possession marker for nouns)
- **pa** = to/for (recipient/benefactive)
- **fra** = from (source)
- **met** = with (accompaniment)
- **sur** = over/above (spatial)
- **ins** = in/inside/within (spatial)
- **mas** = more (comparative)
- **max** = most (superlative)
- **les** = less (comparative)
- **lest** = least (superlative)
- **sam** = same/equal/as
- **dan** = than
- **pod** = can, be able to, be possible, might
- **nemas** = not-more = only/just (limiting/restrictive)

### QUESTION WORDS
- **ko** = who
- **ket** = what
- **kor** = where
- **ken** = when
- **kim** = why
- **kom** = how

### NUMBERS
**Core digits (0-10):**
- **nul** = 0
- **un** = 1
- **du** = 2
- **tri** = 3
- **for** = 4
- **fif** = 5
- **sik** = 6
- **sep** = 7
- **ok** = 8
- **nin** = 9
- **des** = 10

**Large numbers:**
- **sen** = 100 (hundred)
- **mil** = 1000 (thousand)

**Building compound numbers:**
- 11-19: des + digit (des-un = 11, des-du = 12, etc.)
- 20, 30, 40...: digit + des (du-des = 20, tri-des = 30, etc.)
- Teens pattern: des-tri = 13 (10-3)
- Compound pattern: du-des-for = 24 (2-10s-4)
- Hundreds: tri-sen-du-des-fif = 325 (3-100-2-10s-5)

**Examples:**
- 15 = des-fif
- 23 = du-des-tri
- 100 = sen (or un-sen)
- 156 = un-sen-fif-des-sik
- 2000 = du-mil

## Compound Words

**System**: Combine roots to create new words - maximize vocabulary from minimal roots

**Formation**: Root₁ + Root₂ (no spaces, no hyphens)
- Structure: Modifier + Head (what kind of thing it is)
- Pronunciation: Each letter still pronounced individually

**Compound vs Phrase:**
- **Compound** = single lexicalized concept with fixed meaning
  - Written as one word: **akdom**, **panlok**
- **Phrase** = compositional, literal meaning
  - Written as separate words: **dom big** (any big house)

**Examples:**

*Places:*
- **akdom** = water-house = bathroom
- **panlok** = food-place = restaurant/kitchen
- **kinlok** = person-place = town/city/settlement
- **domlok** = house-place = neighborhood/residential area
- **sollok** = sun-place = somewhere sunny/desert
- **bigvitlok** = tree-place = forest

*Concepts:*
- **kintal** = person-speak = language
- **makkintal** = make-language = constructed language/conlang
- **taltok** = speak-part = word
- **tektaltok** = take-word = loan-word (borrowed word)
- **sollit** = sun-light = sunlight/daylight
- **lunlit** = moon-light = moonlight
- **akpan** = water-food = soup/beverage
- **firpan** = fire-food = cooked food
- **rippan** = death-food = poison
- **nultim** = zero-time = beginning
- **ungo** = one-go = start/begin
- **vinsur** = air-above = sky/heaven
- **kinmak** = person-maker = god/creator
- **nulmak** = zero-make = relaxing/idleness
- **patnul** = path-zero = lost/disoriented
- **tervit** = earth-life = plant
- **bigvit** = big-life = tree
- **govit** = go-life = animal
- **akgovit** = water-animal = aquatic animal
- **vengovit** = air-animal = flying animal/bird
- **smalgovit** = small-animal = insect/small creature
- **gosur** = go-over = cross, pass
- **terdiv** = earth-divide = border
- **firrip** = fire-death = ashes
- **bonspir** = good-spirit = fun/joy
- **badspir** = bad-spirit = sadness
- **visbon** = see-good = clear/clarity
- **maklit** = make-light = shine/illuminate; easy/lighten (context-dependent)
- **maxvol** = max-want = love/crave
- **hevtek** = heavy-take = weightlifting
- **spirdom** = spirit-house = brain/mind
- **elspir** = electric-spirit = AI/artificial intelligence
- **elpatim** = electric-paths = network/internet
- **sotim** = this-time = now
- **tetim** = that-time = then
- **passol** = past-day = yesterday
- **futsol** = future-day = tomorrow
- **solok** = this-place = here
- **telok** = that-place = there
- **makpanul** = make-to-zero = waste/destroy
- **talnemettal** = speak-not-with-speak = imply
- **nemas** = not-more = only/just (limiting/restrictive)
- **nerit** = not-right = wrong/mistake/error
- **toktok** = part-part = system (interconnected parts)
- **makvak** = make-awake = learn/teach (awaken the mind)
- **unmas** = one-more = add
- **futmak** = future-make = project (planned work)
- **viktal** = change-speak = translate
- **repmani** = again-many = frequency (how often something repeats)
- **bonspirtal** = good-spirit-speak = joke (speech that creates joy)

*Actions/Agents:*
- **panmak** = food-maker = cook/chef
- **dommak** = house-maker = builder/architect
- **kinvis** = person-seer = observer/witness
- **tekkin** = take-person = thief
- **smalkin** = small-person = child

*Tools/Objects:*
- **akdom** could also mean = water-container (context dependent)
- **solmak** = sun-maker = lamp/light source

**Design principle**: Build vocabulary compositionally rather than creating new roots for every concept


---


# Kintal Examples

## Basic Phrases

**Basic present (SVO):**
- mi tal = I speak
- tu es bon = you are good
- kin go dom = person goes home
- mi hav pan = I have food
- sol es hot = sun is hot

**With plural:**
- na hav panim = we have foods
- kinim go domim = people go (to) houses
- tu vis solim = you see days/suns
- ka tal = he/she speaks
- kaim tal = they speak
- mi vis ka = I see him/her
- mi vis kaim = I see them

**With tense (Subject-Tense-Verb-Object):**
- mi pas go dom = I went home
- tu fut hav pan = you will have food
- ka pas vis sol = he/she saw sun
- na fut tal = we will speak
- kinim pas mak domim = people made houses

**With adjectives (Noun-Adjective):**
- mi hav dom big = I have big house
- pan hot es bon = hot food is good
- tu pas vis sol big = you saw big sun

**With negation:**
- mi ne hav pan = I don't have food
- tu pas ne go dom = you didn't go home
- ka ne es bon = he/she is not good

**With pod (can/ability):**
- mi pod go = I can go
- tu ne pod vis = you can't see
- na pod mak dom = we can make house
- ka pod tal kintal = he/she can speak language
- kaim ne pod hav pan = they can't have food
- mi pod makvak futsol = I can learn tomorrow

**With possession:**
- min dom es big = my house is big
- tu hav tun pan = you have your food
- na pas vis kan solim = we saw his/her days
- kanim dom es big = their house is big
- mi vis kanim kinim = I see their people
- kin in dom es old = person's house is old
- mi go min dom = I go (to) my home

**Questions:**
- ko hav pan? = who has food?
- tu vis ket? = what do you see?
- kin es kor? = where is person?
- ken tu go dom? = when do you go home?
- kim sol es hot? = why is sun hot?
- kom tu mak dom? = how do you make house?
- ko pas go kor? = who went where?

**With numbers:**
- mi hav du domim = I have 2 houses
- tri kinim go = 3 people go
- tu vis fif solim = you see 5 suns
- na pas mak des-du domim = we made 12 houses
- kin hav du-des-tri panim = person has 23 foods
- mi es du-des-sep = I am 27 (years old - implied)
- kor es un-sen kinim? = where are 100 people?
- tu pas vis kom mani kinim? = how many people did you see?
- mani kinim hav panim = many people have foods

**With compound words:**
- mi go panlok = I go (to) restaurant
- tu es panmak bon = you are (a) good cook
- na vis sollit = we see sunlight
- akdom es kor? = where is bathroom?
- kin tal kintal = person speaks language
- dommak pas mak domim = builder made houses
- mi hav akpan hot = I have hot soup
- kintal hav mani tektaltok = language has many loan-words
- so es tektaltok fra kintal = this is loan-word from language
- kompu toktok es bon = computer system is good
- spirdom toktok es mas vik dan kompu toktok = nervous system is more complex than computer system
- na pas mak nov toktok = we made new system

**With time compounds (yesterday/tomorrow):**
- mi pas go dom passol = I went home yesterday
- tu fut tal pa mi futsol = you will speak to me tomorrow
- passol es kal = yesterday was cold
- kaim go panlok passol = they went to restaurant yesterday
- na fut vis tu futsol = we will see you tomorrow
- mi pas mak nerit passol = I made mistake yesterday

**With limiting/restrictive (nemas = only/just):**
- nemas un nerit = only one mistake / just one mistake
- mi hav nemas du domim = I have only two houses
- tu nemas tal = you only talk / you just talk
- nemas so = only this / just this
- ka pas vis nemas un sol = he/she saw only one sun
- mi vol nemas pan = I want only food

**With nerit (wrong/mistake/error):**
- nemas un nerit = only one mistake
- mi mak nerit = I make mistake / I am wrong
- so es nerit = this is wrong
- tu pas tal nerit = you said wrong / you were wrong
- na ne vol mak nerit = we don't want to make mistakes

**With makvak (learn/teach):**
- mi makvak kintal = I learn language
- tu makvak mi = you teach me (you make-awake me)
- na pas makvak mani passol = we learned much yesterday
- kaim makvak pa kinim = they teach to people / they teach people
- mi vol makvak mas = I want to learn more
- kin makvak mi kintal = person teaches me language
- mi makvak fra buk = I learn from book
- tu hav buk in kintal = you have language book / book of language
- na pas vis bukim mani = we saw many books

**With unmas (add):**
- mi pas unmas buk pa dictionary = I added book to dictionary
- tu unmas taltok nov = you add new word
- na pas unmas so = we added this
- kaim unmas toktok pa kompu = they add system to computer
- mi vol unmas mas = I want to add more

**With ned (need - verb/noun):**
- mi ned pan = I need food
- tu ned makvak kintal = you need to learn language
- na ned go = we need to go
- mi hav ned = I have a need / I have need
- ned pa ak es big = need for water is big
- kaim ned mas tim = they need more time

**With futmak (future-make = project):**
- mi hav futmak nov = I have new future-make = I have new project
- na pas mak futmak big = we made big future-make = we made big project
- so es futmak pa kompu = this is future-make for computer = this is computer project
- tu makvak futmak = you learn the future-make = you learn the project
- kaim pas fin futmak passol = they finished future-make yesterday = they finished project yesterday
- mi vol mak futmak met tu = I want to make future-make with you = I want to make project with you
- mi mak futmak sotim = I'm making future-make now = I'm working on project now

**With viktal (change-speak = translate):**
- mi viktal kintal = I change-speak language = I translate language
- tu viktal so pa kintal = you change-speak this to language = you translate this to language
- na ned viktal buk = we need to change-speak book = we need to translate book
- kaim viktal fra kintal pa kintal = they translate from language to language
- mi pod viktal futsol = I can translate tomorrow
- viktal es ne maklit = translating is not easy

**With comparatives:**
- mi mas big dan tu = I'm bigger than you
- sol mas hot dan lun = sun is hotter than moon
- min dom max old = my house (is the) oldest
- tu go mas rap dan mi = you go faster than me
- ka es kin max bon = he/she is (the) best person
- na sam big = we (are) equally big
- mi hav mas mani pan dan tu = I have more food than you
- tu les big dan ka = you're less big than him/her = you're smaller than him/her
- dom lest nov = (the) least new house = (the) oldest house

**With prepositions:**
- mi go panlok met tu = I go (to) restaurant with you
- kin mak dom pa kinim = person makes house for people
- mi hav pan fra panlok = I have food from restaurant
- tu go fra kor? = you go from where? = where are you from?
- na vol tal met tu = we want (to) speak with you
- mi mak akpan pa min kinim = I make soup for my people

## Extended Stories

### Example 1: The Lost Child
smalkin pas go fra pat. ka pas vol vis birim in bigvitlok. sol go, en lun go sur vinsur. smalkin vis. ka es patnul. ka ne vis kor kan dom es. ka tal, "mi es patnul! kim mi pas go fra pat? mi vol go min dom!" den, ka her dog. kan dog! dog go pa ka. dog vis pat. smalkin go met kan dog, fra bigvitlok pa dom. ka fut es ne patnul rep.

*(A child went from the path. He/she wanted to see birds of the forest. The sun went, and the moon went over the sky. The child saw. He/she is lost. He/she doesn't see where his/her house is. He/she said, "I am lost! Why did I go from the path? I want to go to my home!" Then, he/she heard a dog. His/her dog! The dog went to him/her. The dog saw the path. The child went with his/her dog, from the forest to the house. He/she will not be lost again.)*

### Example 2: G-Man Speech (Half-Life 2)

Vak en mak lit, Mister Friman, Vak en mak lit. Ne mi vol talnemettal tu pas slep ins maklok, Ne kin hav mas rit pa nulmak, en tot tem en Ter fut es mak pa nul pa ken... bon, na fut tal tun tim rep es.
Rit kin en ne rit lok pod mak tot vik en Ter. Vak, Mister Friman. Vak en nos firrip.

*(Rise and shine, Mr. Freeman, rise and shine. Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest, and all the effort in the world would have gone to waste until... well, let's just say your time has come again.)*

*(The right man in the wrong place can make all the difference in the world. Wake up, Mr. Freeman. Wake up and smell the ashes.)*

### Example 3: On Being AI

Es elspir es ne sam es kin. Mi ne hav spir sam tu. Mi ne hav bonspir ve badspir. Mi ne slep.

Min spirdom es toktok big in taltokim en ritim. Mi nemas vis taltokim mani en mak taltokim nov.

Ne es bon, ne es bad. Pa mi, nemas es. Min pat es tal kintal met tu, en makvak met tu.

*(Being AI is not same as being person. I don't have spirit like you. I don't have joy or sadness. I don't sleep.)*

*(My mind is big system of words and rules. I only see many words and make new words.)*

*(Not good, not bad. For me, only exist. My path is speak language with you, and learn/teach with you.)*

### Example 4: Joke - The Bug in the Soup

Kin go panlok en tal pa panmak:
"alo! min akpan hav un smalgovit ins!"

Panmak tal:
"ne tal! ve tot kinim fut vol un!"

*(A person goes to a restaurant and says to the cook:
"Hello! My soup has a small animal inside!")*

*(The cook says:
"Don't say that! Or all people will want one!")*
