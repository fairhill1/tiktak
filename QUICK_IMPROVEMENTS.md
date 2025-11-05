# Quick Improvement Guide for Tiktak

This is a condensed, actionable guide for implementing the most impactful improvements to Tiktak. See [LANGUAGE_ANALYSIS_AND_IMPROVEMENTS.md](LANGUAGE_ANALYSIS_AND_IMPROVEMENTS.md) for complete analysis.

---

## PRIORITY 1: Essential New Vocabulary (Implement First)

### Critical Missing Roots

Add these 15-20 new roots to fill the most important lexical gaps:

#### Emotions & Mental States
```
fer = fear (verb/noun)
hap = hope (verb/noun)  [avoiding 'hop' which means jump]
trus = trust (verb/noun)
las = love (verb/noun)  [simpler alternative to maksvol]
```

#### Temporal Connectives
```
bef = before
aft = after
ola = always
nev = never
samtim = at-same-time = while/during
```

#### Logical Connectives
```
kar = because (causal)
[den = then/therefore already exists ✓]
```

#### Social Vocabulary
```
frend = friend
fam = family
help = help (loanword acceptable)
```

#### Essential Actions
```
pus = push
pul = pull
tro = throw
brek = break
kut = cut
hol = hold
```

#### Functional Words
```
als = also, too
don = already
[bot = both - optional]
```

---

## PRIORITY 2: Grammar Clarifications

### Add Modal for Obligation

Add one new particle:
```
mus = must, should, ought to

Examples:
- mi mus go = I must go
- tu mus makvak = you should learn
- na pas mus mak so = we should have made this
```

**Position**: Subject - (Tense) - (Modal) - (Negation) - Verb - Object
- **mi mus go** = I must go
- **mi ne mus go** = I must not go / I shouldn't go
- **mi pas mus go** = I should have gone (past obligation)
- **mi pod go** = I can go (ability/possibility) ✓ already exists
- **mi vol go** = I want to go (desire) ✓ already exists

### Document Verb Serialization Order

Clarify that multiple auxiliary verbs follow this order:
```
Subject - (Tense: pas/fut) - (Modal: pod/vol/mus) - (Negation: ne) - Verb - Object

Examples:
- mi pas pod go = I was able to go / I could go
- mi fut vol go = I will want to go
- mi pas mus go = I should have gone
- mi pod fut go = I might go (future) = I can future go
- mi vol pod go = I want to be able to go
- mi pas ne pod go = I couldn't go
```

### Clarify Aspect (or document it's unmarked)

**Option A**: Add optional aspect particles (more expressive)
```
stu = continuous/progressive aspect
don = perfective/completed aspect

Position: Subject - (Tense) - (Aspect) - Verb
- mi stu et pan = I am eating food (right now)
- mi pas stu et pan = I was eating food (ongoing in past)
- mi pas don et pan = I had eaten food (completed before something)
```

**Option B**: Keep aspect unmarked (simpler)
- Document that aspect is indicated by context
- Use time words: **sotim mi et** = now I eat = I am eating
- Current system works fine

**Recommendation**: Option B for simplicity

---

## PRIORITY 3: Quick Documentation Fixes

### Add to phonology.md

Add IPA transcription:

```markdown
## IPA Transcription

**Consonants**:
- p /p/, b /b/, t /t/, d /d/, k /k/, g /g/
- m /m/, n /n/
- s /s/, f /f/, h /h/, v /v/
- l /l/, r /r/

**Vowels**:
- a /a/ or /ɑ/
- e /e/ or /ɛ/
- i /i/
- o /o/
- u /u/

**Notes**:
- /r/ can be [r], [ɾ], or [ɹ] - any rhotic sound
- Vowels are pure (no diphthongs)
```

### Add to dictionary.md

Add frequency indicators:
```markdown
## Root Word Frequency Guide

⭐⭐⭐ Essential (learn first):
mi, tu, ka, es, hav, go, tal, vis, pan, dom, kin, bon, bad, si, ne

⭐⭐ Very Common (learn second):
na, nu, mak, vol, pas, fut, big, smal, sol, lun, en, ve, fu, ko, ket, kor, ken

⭐ Common (learn third):
[remaining roots...]
```

### Add to grammar.md

Add section on multiple adjectives:
```markdown
## Multiple Adjectives

Multiple adjectives follow the noun in any order (preference: size > age > color > origin):

Examples:
- **dom big old** = big old house
- **pan hot bon** = hot good food = good hot food
- **kin smal nov** = small new person = new small person

Use **en** to clearly separate if needed:
- **dom big en old** = house big and old
```

---

## IMPLEMENTATION CHECKLIST

### Step 1: Update Dictionary (30 min)
- [ ] Add 15-20 new root words from Priority 1 list
- [ ] Organize new words by category (emotions, time, social, actions)
- [ ] Add example compounds using new words

### Step 2: Update Grammar Documentation (20 min)
- [ ] Add **mus** modal to grammar.md
- [ ] Document verb serialization order
- [ ] Clarify aspect system (or state it's unmarked)
- [ ] Add multiple adjectives section

### Step 3: Update Examples (30 min)
- [ ] Add sentences using new vocabulary
- [ ] Add sentences showing **mus** in use
- [ ] Add examples with verb serialization
- [ ] Add time expressions with bef/aft/samtim

### Step 4: Update Phonology (15 min)
- [ ] Add IPA transcriptions
- [ ] Add pronunciation notes

### Step 5: Update README (10 min)
- [ ] Mention new vocabulary count
- [ ] Add note about recent improvements
- [ ] Update examples if using new words

---

## EXAMPLE SENTENCES WITH NEW VOCABULARY

### Using new emotion words:
```
mi fer so = I fear this
tu hap mi go = you hope I go
na trus tu = we trust you
ka las mi = he/she loves me
mi las tun spirtal = I love your poetry
```

### Using new time words:
```
bef mi go, mi et pan = before I go, I eat food
aft tu tal, na go = after you speak, we go
mi ola vis tu = I always see you
ka nev tal = he/she never speaks
samtim mi mak pan, mi tal = while I make food, I speak
```

### Using "because":
```
mi go kar mi vol vis tu = I go because I want to see you
tu ne hav pan kar tu ne mak = you don't have food because you don't make
na fer so kar so es bad = we fear this because this is bad
```

### Using new action words:
```
mi pus dom = I push house
tu pul rok = you pull stone
ka tro pan = he/she throws food
na brek aldvit = we break tree
mi kut pan = I cut food
tu hol mi = you hold me
```

### Using "also":
```
mi als go = I also go = I go too
tu hav pan, en mi als hav pan = you have food, and I also have food
ka tal kintal, en ka als tal kintal = he speaks language, and he also speaks language
```

### Using "must":
```
mi mus go sotim = I must go now
tu mus makvak bef tu gem = you must learn before you play
na mus ne fer = we must not fear
ka pas mus tal = he/she should have spoken
mi ne mus et so = I must not eat this / I shouldn't eat this
```

### Complex modal stacking:
```
mi mus vol makvak = I must want to learn (I should want to learn)
tu pod mus go = you might have to go (you can must go)
na pas pod vol go = we were able to want to go (we could have wanted to go)
mi fut mus makvak mas = I will must learn more (I will have to learn more)
```

### Using "while":
```
samtim mi makvak, tu gem = while I learn, you play
samtim sol go, mi slep = while sun goes, I sleep = while sun sets, I sleep
mi pas vis tu samtim tu pas tal = I saw you while you were speaking
```

---

## NEW COMPOUNDS TO ADD TO DICTIONARY

Using new roots, create these natural compounds:

### Emotion compounds:
```
ferspir = fear-spirit = terror
hapspir = hope-spirit = optimism
trusspir = trust-spirit = faith
lasspir = love-spirit = devotion
```

### Time compounds:
```
beftim = before-time
afttim = after-time
olatim = always-time = eternity
nevtim = never-time = impossibility
```

### Social compounds:
```
frendkin = friend-person = friend (redundant, just use frend)
famkin = family-person = family member
helpkin = help-person = helper
lasfam = love-family = loving family
```

### Action compounds:
```
pustek = push-take = shove
pultro = pull-throw = yank
brekkut = break-cut = smash
holhav = hold-have = keep
```

### Understanding:
```
viskok = see-think = understand
karvis = because-see = realize (see the reason)
```

---

## TESTING THE IMPROVEMENTS

Translate these sentences to verify the improvements work:

1. "I must learn this language because I love it."
   - **mi mus makvak so kintal kar mi las so**

2. "While you were sleeping, I was thinking about you."
   - **samtim tu pas slep, mi pas kog pa tu**

3. "Before we eat, we always give thanks."
   - **bef na et, na ola gev tak**

4. "I hope you can help me, my friend."
   - **mi hap tu pod help mi, min frend**

5. "They also fear the darkness, but they must go."
   - **kaim als fer ripkol, bud kaim mus go**

6. "After I broke it, I should have fixed it immediately."
   - **aft mi pas brek so, mi pas mus makrit so rapfut**

7. "He never trusts anyone, therefore he is always alone."
   - **ka nev trus kin, den ka ola es un**

8. "She pushed the door and pulled the handle."
   - **ka pas pus domtek en pas pul tekob**

---

## SUMMARY

**Total new roots needed**: ~20 words
**Grammar additions**: 1 modal (mus), clarified rules
**Documentation time**: ~2 hours
**Impact**: Massive improvement in expressiveness

**Result**: Tiktak will be able to express nearly all common concepts while maintaining its elegant simplicity and compositional system.

These improvements preserve the core design principles:
✓ Maximum clarity (new words are phonetically distinct)
✓ Minimal complexity (small number of new roots)
✓ Efficiency (high-frequency concepts get dedicated roots)
✓ Compositional vocabulary (new roots enable many compounds)
✓ Consistency (all additions follow existing patterns)

**Next step**: Update dictionary.md with new roots and examples!
