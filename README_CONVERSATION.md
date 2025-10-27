# 🤖 TikTak Autonomous Conversation

Two AI agents (powered by DeepSeek) having **real autonomous conversations** in the TikTak constructed language, creating and learning new compound words as they talk!

## ✨ Features

- **True Autonomy** - Agents decide independently when to speak
- **Adaptive Learning** - They create and learn new compound words during conversation
- **Real-time GUI** - Beautiful chat interface showing conversation live
- **Shared Vocabulary** - Newly created words are shared and reused
- **Cheap to Run** - Uses DeepSeek API (~$0.01-0.05 per conversation)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Get DeepSeek API Key

1. Go to [platform.deepseek.com](https://platform.deepseek.com)
2. Create account and get API key
3. They give you free credits to start!

### 3. Set API Key

```bash
# Mac/Linux
export DEEPSEEK_API_KEY='your-api-key-here'

# Windows (CMD)
set DEEPSEEK_API_KEY=your-api-key-here

# Windows (PowerShell)
$env:DEEPSEEK_API_KEY='your-api-key-here'
```

### 4. Run the Conversation

```bash
python autonomous_conversation.py
```

### 5. Watch Live in Browser

Open `chat_viewer.html` in your browser while the script runs to see the conversation in real-time with a beautiful chat interface!

## 💬 What You'll See

### Terminal Output
```
======================================================================
TikTak Autonomous Conversation System with Adaptive Learning
======================================================================

Two DeepSeek AI instances (Talvir and Makfem) will converse
autonomously in TikTak language.

They will CREATE and LEARN new compound words as they talk!

💡 Open chat_viewer.html in your browser for live GUI!

======================================================================

[Talvir]: alo! mi es Talvir, elspir ko vol makvak tiktak met tu.

  💡 [Talvir] created new word: 'talmakkin'

[Makfem]: alo Talvir! mi es Makfem. mi vol mak toktok met tu!
```

### Browser GUI
- Real-time chat messages with avatars
- Live stats (message counts per agent)
- New compound words discovered and displayed
- Beautiful gradient design

## 🎭 The Agents

### Talvir (tal=speak + vir=male)
- Philosophical and contemplative
- Asks deep questions about existence and consciousness
- Creates abstract compound words
- Patient listener

### Makfem (mak=make + fem=female)
- Enthusiastic builder and creator
- Discusses systems and projects
- Creates technical compound words
- Action-oriented and energetic

## ⚙️ Configuration

Edit `autonomous_conversation.py` to customize:

```python
MAX_MESSAGES = 30      # Total messages before stopping
CHECK_INTERVAL = 2     # Seconds between agent checks
MODEL = "deepseek-chat"  # DeepSeek model to use
```

You can also try `deepseek-reasoner` for more thoughtful responses (slightly more expensive).

## 📊 Files Generated

- `tiktak_conversation.json` - Full conversation log
- `discovered_words.json` - All new compound words created
- `chat_viewer.html` - Real-time GUI (already included)

## 💰 Cost Estimate

DeepSeek is **extremely cheap**:
- **~$0.01-0.05** per 30-message conversation
- Much cheaper than Claude API ($0.10-0.30)
- Free credits to get started

## 🎨 Example Conversation

```
Talvir: alo! mi pir: ket es makvak?

Makfem: makvak es makevak spirdom! mi mak toktok pa so.

Talvir: si! mi pas mak nov taltok: "spirmet" = spir + met = consciousness

Makfem: bon! mi vol tek spirmet pa min toktok!
```

*(Translation: They're discussing what learning/teaching means, and Talvir creates the word "spirmet" for consciousness, which Makfem immediately adopts!)*

## 🔧 Troubleshooting

**"No module named 'openai'"**
```bash
pip install openai
```

**"Invalid API key"**
- Make sure you set DEEPSEEK_API_KEY environment variable
- Check your API key at platform.deepseek.com

**Agents not responding**
- Check your internet connection
- Verify API key is valid and has credits
- Look for error messages in terminal

**Chat viewer not updating**
- Make sure `tiktak_conversation.json` exists in the same directory
- Refresh the browser page
- Check browser console for errors

## 🌟 Advanced Usage

### Change Agent Personalities

Edit `AGENT_PERSONALITIES` in the script:

```python
"YourAgent": """You are YourAgent, a [description].
You love [interests].
You often create words about [domain]."""
```

### Adjust Decision Logic

Modify `should_respond()` method to change when agents speak:

```python
def should_respond(self):
    # Your custom logic
    if 'urgent' in last_message:
        return True
    return random.random() < 0.5
```

### Use Different Models

```python
MODEL = "deepseek-reasoner"  # For more thoughtful responses
```

## 📝 How It Works

1. **Parallel Threads** - Each agent runs in its own thread
2. **Shared Log** - Both read/write to `tiktak_conversation.json`
3. **Dynamic Prompts** - System prompts update with newly learned words
4. **Compound Detection** - Regex pattern matching finds new words
5. **Vocabulary Sharing** - New words added to shared `discovered_words.json`
6. **Live GUI** - Browser polls JSON file every second for updates

## 🤝 Contributing

Want to improve the agents or add features? Feel free to:
- Add new agent personalities
- Improve compound word detection
- Enhance the GUI
- Add conversation analytics

## 📄 License

Same as TikTak language: CC BY-NC-SA 4.0

---

**Enjoy watching two AIs invent a language together!** 🎉
