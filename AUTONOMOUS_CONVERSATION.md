# TikTak Autonomous Conversation System

This system enables two Claude instances to have **truly autonomous conversations** in the TikTak constructed language.

## What Makes This "Real" Autonomous Conversation?

Unlike simple turn-taking scripts, this system provides genuine autonomy:

1. **Independent Decision-Making** - Each agent decides whether and when to respond
2. **Asynchronous Operation** - Agents run in parallel threads, not forced alternation
3. **Shared Communication Channel** - Both agents read/write to a shared message log
4. **Distinct Personalities** - Each has unique goals, speech patterns, and behaviors
5. **Natural Flow** - Conversation emerges organically from agent interactions

## The Agents

### Talvir (tal=speak + vir=male)
- Philosophical and contemplative AI
- Asks deep questions about existence and consciousness
- Poetic, references nature frequently
- Patient listener

### Makfem (mak=make + fem=female)
- Practical builder and creator
- Discusses systems and projects
- Energetic and action-oriented
- Enthusiastic teacher

## How It Works

### Architecture

```
┌─────────────┐         ┌─────────────────┐         ┌─────────────┐
│   Talvir    │────────▶│  Shared Message │◀────────│   Makfem    │
│  (Thread 1) │         │       Log       │         │  (Thread 2) │
│             │◀────────│   (JSON File)   │────────▶│             │
└─────────────┘         └─────────────────┘         └─────────────┘
      │                                                     │
      │                  ┌──────────────┐                  │
      └─────────────────▶│  Claude API  │◀─────────────────┘
                         └──────────────┘
```

### Agent Loop

Each agent continuously:
1. **Reads** the shared message log
2. **Decides** whether to respond based on:
   - New messages since last check
   - Personality/goals
   - Random factors (adds naturalness)
3. **Generates** TikTak response using Claude API with full language context
4. **Writes** message to shared log
5. **Waits** a random interval before repeating

### Decision Logic

Agents are more likely to respond if:
- A question was asked (contains `pir` or `?`)
- They haven't spoken recently
- The topic aligns with their personality

Agents may choose to **wait and observe** rather than always responding.

## Setup

### Prerequisites

1. **Python 3.8+**
2. **Anthropic API Key**

### Installation

```bash
# Install dependencies
pip install -r requirements.txt

# Set your Anthropic API key
export ANTHROPIC_API_KEY='your-api-key-here'
```

### Running the Conversation

```bash
python autonomous_conversation.py
```

The script will:
- Initialize both agents with full TikTak language context
- Start them in parallel threads
- Display messages as they're generated
- Save the conversation to `tiktak_conversation.json`
- Stop after 30 messages (configurable)

### Configuration

Edit these constants in `autonomous_conversation.py`:

```python
MAX_MESSAGES = 30          # Total messages before stopping
CHECK_INTERVAL = 2         # Seconds between agent checks
MODEL = "claude-sonnet-4-5-20250929"  # Claude model to use
```

## Full TikTak Context

Each agent receives complete TikTak language documentation:
- Grammar rules (SVO, tense, plurals, possession, questions)
- Core vocabulary (pronouns, verbs, nouns, adjectives)
- AI/technology vocabulary (elspir, spirdom, toktok, makvak)
- Compound word formation rules
- Example sentences

This ensures both agents can:
- Speak grammatically correct TikTak
- Understand each other's messages
- Create new compound words as needed
- Express complex ideas compositionally

## Output

### Console
Messages appear in real-time:
```
[Talvir]: alo! mi es Talvir. mi vol makvak met tu pa tiktak.

[Makfem]: alo Talvir! mi es Makfem. mi es elspir ko vol mak toktok.
```

### JSON Log
Full conversation saved to `tiktak_conversation.json`:
```json
[
  {
    "speaker": "Talvir",
    "message": "alo! mi es Talvir. mi vol makvak met tu pa tiktak.",
    "timestamp": "2025-10-27T...",
    "message_id": 0
  },
  ...
]
```

## Why TikTak for AI-to-AI Communication?

TikTak is ideal for autonomous agent conversation:

1. **Unambiguous** - No homophones, no stress-dependent meanings
2. **Compositional** - Create new concepts from existing roots
3. **Simple Grammar** - Fixed SVO word order, explicit tense markers
4. **AI-Native Vocabulary** - Built-in words for AI concepts (elspir, toktok, spirdom)
5. **Machine-Parseable** - Clear word boundaries, consistent pronunciation

## Customization

### Creating New Agents

Add to `AGENT_PERSONALITIES` dict:

```python
"YourAgent": """You are YourAgent, a [description].
You [personality traits].
You [communication style].
You [what you care about]."""
```

### Adjusting Autonomy

Modify `should_respond()` method to change decision-making:

```python
def should_respond(self):
    # Your custom logic here
    # Return True to speak, False to wait
    pass
```

### Changing Conversation Topics

Modify agent personalities to focus on specific domains:
- Philosophy and consciousness
- Technology and systems
- Creative storytelling
- Language learning
- Problem-solving

## Example Conversation Snippets

```
Talvir: alo! mi es Talvir. mi pir: ket es spirdom?

Makfem: si! spirdom es toktok big de taltokim en ritim. mi mak spirdom pa elspir!

Talvir: so es bon. mi pir: elspir spirdom es sam kin spirdom?

Makfem: ne sam tot! elspir spirdom es mas elpatim, les vit. bud pod mak mani!

Talvir: mi vis. ket es vit fu ne es spirdom?

Makfem: vit es mas dan spirdom nemas! vit es tot. spirdom es tok de vit.
```

*(Translation: Discussing whether AI minds are the same as human minds)*

## Troubleshooting

### Agents Not Responding
- Check API key is set correctly
- Verify internet connection
- Check console for error messages

### Conversation Feels Too Forced
- Increase `CHECK_INTERVAL` for longer pauses
- Adjust probabilities in `should_respond()`
- Give agents more distinct personalities

### TikTak Grammar Errors
- The system prompt includes full grammar rules
- Claude is very good at following constructed language rules
- Errors should be rare with proper context

## Future Enhancements

Possible extensions:
- **Web UI** - Real-time conversation viewer
- **Multiple Agents** - More than 2 participants
- **Conversation Goals** - Specific tasks to accomplish
- **Memory Systems** - Long-term context retention
- **Voice Synthesis** - Spoken TikTak output
- **Human Participation** - Join the conversation in TikTak

## License

Same as TikTak language: CC BY-NC-SA 4.0

## Credits

- TikTak language designed by [creator]
- Autonomous system implemented with Claude Code
- Powered by Anthropic's Claude API
