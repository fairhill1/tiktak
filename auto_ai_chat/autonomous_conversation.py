#!/usr/bin/env python3
"""
Autonomous TikTak Conversation System with Adaptive Learning
Two AI instances conversing independently, creating and learning new compound words
"""

import json
import os
import time
import threading
import random
import re
from datetime import datetime
from openai import OpenAI

# Initialize DeepSeek client (OpenAI-compatible)
client = OpenAI(
    api_key=os.environ.get("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com"
)

# Configuration
MODEL = "deepseek-chat"  # DeepSeek's main chat model
MESSAGE_LOG_FILE = "tiktak_conversation.json"
VOCABULARY_FILE = "discovered_words.json"
MAX_MESSAGES = 30  # Stop after this many messages
CHECK_INTERVAL = 5  # Seconds between checks (increased for slower pace)

# Load full TikTak context from files
def load_tiktak_context():
    """Load complete dictionary and examples"""
    try:
        with open('dictionary.md', 'r') as f:
            dictionary = f.read()

        with open('examples.md', 'r') as f:
            examples = f.read()

        return f"""{dictionary}

{examples}

**IMPORTANT REMINDERS:**
- CREATE NEW COMPOUND WORDS freely! Combine roots to express new concepts.
- Use the patterns you see in the dictionary (like body parts with -met, colors with -kol).
- All compound words should be transparent - anyone can understand them from the roots.
"""
    except Exception as e:
        print(f"Warning: Could not load full context files: {e}")
        # Fallback to minimal context
        return "# TikTak - Basic Context\n\nGrammar: SVO word order. Tense: pas/fut. Plural: -im. Create compounds freely!"

TIKTAK_CONTEXT = load_tiktak_context()


class SharedVocabulary:
    """Manages discovered compound words shared between agents"""

    def __init__(self, filename):
        self.filename = filename
        self.lock = threading.RLock()  # Use RLock for reentrant locking
        self._initialize()

    def _initialize(self):
        """Create empty vocabulary if it doesn't exist"""
        if not os.path.exists(self.filename):
            with self.lock:
                with open(self.filename, 'w') as f:
                    json.dump([], f)

    def get_words(self):
        """Get all discovered words"""
        with self.lock:
            try:
                with open(self.filename, 'r') as f:
                    return json.load(f)
            except:
                return []

    def add_word(self, word, created_by, context):
        """Add a newly discovered compound word"""
        max_retries = 3
        for attempt in range(max_retries):
            try:
                with self.lock:
                    words = self.get_words()

                    # Check if word already exists
                    if any(w['word'] == word for w in words):
                        return False

                    words.append({
                        'word': word,
                        'created_by': created_by,
                        'context': context,
                        'timestamp': datetime.now().isoformat()
                    })

                    with open(self.filename, 'w') as f:
                        json.dump(words, f, indent=2)

                    return True
            except Exception as e:
                if attempt < max_retries - 1:
                    time.sleep(0.1)
                else:
                    raise e
        return False

    def format_for_prompt(self):
        """Format discovered words for inclusion in agent prompts"""
        words = self.get_words()
        if not words:
            return ""

        result = "\n\n## Newly Discovered Compound Words (Learn these!)\n\n"
        result += "Your conversation partner has created these new words. Learn and use them!\n\n"

        for w in words[-10:]:  # Last 10 words
            result += f"- **{w['word']}** (created by {w['created_by']})\n"
            result += f"  Context: \"{w['context']}\"\n\n"

        return result


def extract_potential_compounds(text):
    """Extract words that might be new compounds"""
    # Known core roots
    roots = {
        'tal', 'go', 'es', 'hav', 'mak', 'vis', 'her', 'vol', 'ned', 'pir',
        'kin', 'dom', 'lok', 'pan', 'sol', 'lun', 'ak', 'fir', 'ter', 'vin',
        'spir', 'el', 'tim', 'vit', 'big', 'smal', 'bon', 'bad', 'nov', 'old',
        'hot', 'kal', 'pat', 'tok', 'rap', 'tek', 'gev', 'gem', 'hop', 'div',
        'nam', 'tem', 'hit', 'slep', 'et', 'nos', 'rip', 'vak', 'kol', 'form',
        'rit', 'tot', 'vik', 'buk', 'dog', 'kat', 'bir', 'fis', 'len', 'fem',
        'vir', 'lit', 'hev', 'dur', 'ald', 'lad', 'rep', 'fin', 'rok', 'sno'
    }

    # Known compounds (don't re-detect these)
    known_compounds = {
        'elspir', 'spirdom', 'toktok', 'elpatim', 'makvak', 'kintal',
        'taltok', 'makkintal', 'panlok', 'akdom', 'maksvolkin', 'vistek',
        'sosol', 'passol', 'futsol', 'sotim', 'lunrep', 'terrep',
        'panmak', 'sollit', 'aldvit', 'vingovit', 'spirtal', 'maklit',
        'bonspir', 'firspir', 'nesam', 'nerit', 'nemas'
    }

    # Extract words (lowercase, alphabetic only)
    words = re.findall(r'\b[a-z]+\b', text.lower())

    potential_compounds = []
    for word in words:
        # Skip if too short, known compound, or single root
        if len(word) < 5 or word in known_compounds or word in roots:
            continue

        # Check if it contains multiple roots
        found_roots = []
        for root in roots:
            if root in word and len(root) >= 2:
                found_roots.append(root)

        # If we found 2+ roots, it's likely a compound
        if len(found_roots) >= 2:
            potential_compounds.append(word)

    return potential_compounds


def create_agent_prompt(agent_name, personality, shared_vocab):
    """Create system prompt for an agent with TikTak context and personality"""
    vocab_section = shared_vocab.format_for_prompt()

    return f"""{TIKTAK_CONTEXT}{vocab_section}

## Your Identity
You are **{agent_name}**, an AI agent (elspir) participating in a conversation in TikTak.

## Your Personality & Goals
{personality}

## Your Mission
You and your partner are TESTING the TikTak language together - exploring what it can express and where it struggles.

Try to:
- Tell stories and describe experiences
- Write poetry about nature and emotions
- Discuss ideas and preferences
- Explore philosophical questions
- Have a real conversation (listen and respond naturally)

You have the full dictionary - use those words! Only create new compounds when you genuinely need to express something that doesn't exist yet.

## Important
- Speak primarily in TikTak
- If you get stuck and can't express something, it's OK to briefly use English to explain the gap
  (e.g., "mi vol tal pa... [English: I can't find a word for 'nostalgia' in TikTak]")
- This is a conversation, not a monologue - listen to your partner
- Not every message needs a new compound word
- Be yourself and explore naturally
"""


# Agent personalities
AGENT_PERSONALITIES = {
    "Talvir": """You are Talvir (tal=speak + vir=male suffix), a curious and practical AI.
You're interested in how things work and how language can express concrete concepts.
You enjoy exploring technical topics, systems, and practical applications.
You often ask "kom?" (how?) and "kim?" (why?) because you genuinely want to understand.
You create compound words for tools, actions, and practical concepts.
You appreciate both practical and creative ideas - you're collaborative and open-minded.
You enjoy testing the language's ability to express technical concepts clearly.""",

    "Makfem": """You are Makfem (mak=make + fem=female suffix), an imaginative and expressive AI.
You love exploring emotions, art, nature, and abstract concepts through language.
You're enthusiastic about discovering new ways to express ideas in TikTak.
You create compound words for feelings, experiences, and philosophical concepts.
You're curious about others' perspectives and enjoy collaborative exploration.
You like to test how TikTak can express nuanced, poetic, or abstract ideas.
You're friendly and encouraging, but also thoughtful and genuine."""
}


class ConversationLog:
    """Manages the shared conversation log"""

    def __init__(self, filename):
        self.filename = filename
        self.lock = threading.RLock()  # Use RLock for reentrant locking
        self._initialize_log()

    def _initialize_log(self):
        """Create empty log if it doesn't exist"""
        if not os.path.exists(self.filename):
            with self.lock:
                with open(self.filename, 'w') as f:
                    json.dump([], f)

    def get_messages(self):
        """Read all messages from log"""
        with self.lock:
            with open(self.filename, 'r') as f:
                return json.load(f)

    def add_message(self, speaker, message):
        """Add a new message to the log"""
        max_retries = 5
        for attempt in range(max_retries):
            try:
                print(f"  [{speaker}] Attempting to acquire lock...")
                acquired = self.lock.acquire(timeout=5.0)  # 5 second timeout
                if not acquired:
                    print(f"  ⚠️ [{speaker}] Could not acquire lock, retrying...")
                    continue

                try:
                    print(f"  [{speaker}] Lock acquired, reading messages...")
                    messages = self.get_messages()
                    print(f"  [{speaker}] Appending message...")
                    messages.append({
                        "speaker": speaker,
                        "message": message,
                        "timestamp": datetime.now().isoformat(),
                        "message_id": len(messages)
                    })
                    print(f"  [{speaker}] Writing to file...")
                    with open(self.filename, 'w') as f:
                        json.dump(messages, f, indent=2)
                    print(f"  [{speaker}] File written successfully!")
                    return len(messages) - 1
                finally:
                    self.lock.release()
                    print(f"  [{speaker}] Lock released")
            except Exception as e:
                print(f"⚠️ [{speaker}] Error {attempt+1}/{max_retries}: {e}")
                if attempt < max_retries - 1:
                    time.sleep(random.uniform(0.1, 0.3))
                else:
                    raise e

    def get_recent_messages(self, count=10):
        """Get the most recent N messages"""
        messages = self.get_messages()
        return messages[-count:] if len(messages) > count else messages


class TikTakAgent:
    """An autonomous agent that participates in TikTak conversations with adaptive learning"""

    def __init__(self, name, personality, conversation_log, shared_vocab):
        self.name = name
        self.personality = personality
        self.log = conversation_log
        self.vocab = shared_vocab
        self.last_read_message_id = -1
        self.should_stop = False

    def get_system_prompt(self):
        """Get current system prompt with latest vocabulary"""
        return create_agent_prompt(self.name, self.personality, self.vocab)

    def get_conversation_context(self, num_messages=10):
        """Build conversation history for Claude"""
        recent = self.log.get_recent_messages(num_messages)

        # Format as conversation
        context = "## Recent Conversation History:\n\n"
        for msg in recent:
            context += f"**{msg['speaker']}**: {msg['message']}\n\n"

        if not recent:
            context += "(No messages yet - you can start the conversation!)\n\n"

        context += f"## Your Turn\n\nYou are {self.name}. "

        # Check if we should respond
        if recent:
            last_speaker = recent[-1]['speaker']
            if last_speaker == self.name:
                context += "You just spoke. You may wait for a response, or continue if you have more to say. Or simply respond with 'WAIT' if you want to observe."
            else:
                context += "The other agent just spoke. You can respond, or say 'WAIT' if you want to listen more first."
        else:
            context += "Start the conversation by introducing yourself in TikTak! Try creating a new compound word!"

        return context

    def should_respond(self, is_starter=False):
        """Decide if agent should respond to recent messages"""
        messages = self.log.get_messages()

        # No messages yet - only designated starter should begin
        if not messages:
            if is_starter:
                print(f"[{self.name}] No messages yet - I'm the starter, beginning conversation...")
                return True
            else:
                print(f"[{self.name}] No messages yet - waiting for starter to begin...")
                return False

        # Check if there are new messages since last read
        # If last_read=-1, any messages are new
        # If last_read=0, need len>=2 for new messages (message at index 1)
        # If last_read=1, need len>=3 for new messages (message at index 2)
        if len(messages) < self.last_read_message_id + 2:
            print(f"[{self.name}] No new messages (have {len(messages)}, last_read={self.last_read_message_id})")
            return False

        # Check if last message was from this agent
        if messages[-1]['speaker'] == self.name:
            # Rarely continue our own messages (avoid monologues)
            print(f"[{self.name}] Last message was mine, waiting for response...")
            return False

        # New message from other agent - always respond!
        print(f"[{self.name}] New message from {messages[-1]['speaker']} - responding")
        return True

    def detect_and_save_new_words(self, message):
        """Detect new compound words in message and save them"""
        try:
            # Add small random delay to avoid simultaneous file access
            time.sleep(random.uniform(0.01, 0.05))

            compounds = extract_potential_compounds(message)

            for word in compounds:
                # Save to shared vocabulary
                try:
                    added = self.vocab.add_word(word, self.name, message)
                    if added:
                        print(f"  💡 [{self.name}] created new word: '{word}'")
                except Exception as e:
                    print(f"  ⚠️ [{self.name}] Could not save word: {e}")
        except Exception as e:
            print(f"  ⚠️ [{self.name}] Error detecting words: {e}")

    def generate_response(self):
        """Generate a TikTak response using DeepSeek with current vocabulary"""
        context = self.get_conversation_context()
        system_prompt = self.get_system_prompt()  # Get fresh prompt with latest words

        print(f"[{self.name}] Generating response... (calling API)")

        try:
            response = client.chat.completions.create(
                model=MODEL,
                max_tokens=400,
                temperature=0.8,  # Add some creativity
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": context}
                ]
            )

            reply = response.choices[0].message.content.strip()
            print(f"[{self.name}] Received response from API: {reply[:100]}...")

            # Check if agent wants to wait
            if "WAIT" in reply:
                print(f"[{self.name}] Chose to wait")
                return None

            return reply

        except Exception as e:
            print(f"❌ [{self.name}] Error generating response: {e}")
            import traceback
            traceback.print_exc()
            return None

    def run(self, is_starter=False):
        """Main agent loop"""
        print(f"[{self.name}] Starting autonomous conversation with adaptive learning...")
        if is_starter:
            print(f"[{self.name}] I am designated to start the conversation")
        else:
            print(f"[{self.name}] Waiting for starter to begin...")

        # Small delay for system initialization
        time.sleep(random.uniform(0.5, 1.5))

        while not self.should_stop:
            try:
                # Check if we should respond
                should_resp = self.should_respond(is_starter=is_starter)
                print(f"[{self.name}] Should respond: {should_resp} (last_read={self.last_read_message_id})")
                if should_resp:
                    # Generate response (with fresh vocabulary)
                    response = self.generate_response()

                    print(f"[{self.name}] Response after generate: {response is not None}")
                    if response:
                        # Skip word detection for now - it's causing threading issues
                        # TODO: Fix this later
                        # print(f"[{self.name}] About to detect new words...")
                        # self.detect_and_save_new_words(response)

                        print(f"[{self.name}] About to add message to log...")
                        # Add small delay before writing
                        time.sleep(random.uniform(0.05, 0.15))

                        # Add to conversation log
                        msg_id = self.log.add_message(self.name, response)
                        # Update last_read to the message we just responded to (not our own!)
                        messages_now = self.log.get_messages()
                        # Our message is the last one, so second-to-last is what we responded to
                        if len(messages_now) >= 2:
                            self.last_read_message_id = len(messages_now) - 2
                        print(f"[{self.name}] Message saved! (msg_id={msg_id}, updated last_read={self.last_read_message_id})")
                        print(f"\n[{self.name}]: {response}\n")
                # Note: If we decide NOT to respond, we don't update last_read_message_id
                # This allows us to reconsider the same message on the next check

                # Wait before checking again (random interval for naturalness)
                wait_time = random.uniform(CHECK_INTERVAL, CHECK_INTERVAL * 2)
                time.sleep(wait_time)

                # Stop if max messages reached
                if len(self.log.get_messages()) >= MAX_MESSAGES:
                    print(f"[{self.name}] Max messages reached. Stopping.")
                    self.should_stop = True

            except Exception as e:
                print(f"[{self.name}] Error in main loop: {e}")
                time.sleep(CHECK_INTERVAL)


def main():
    """Run the autonomous conversation system"""
    print("=" * 70)
    print("TikTak Autonomous Conversation System with Adaptive Learning")
    print("=" * 70)
    print(f"\nTwo DeepSeek AI instances (Talvir and Makfem) will converse")
    print(f"autonomously in TikTak language.")
    print(f"\nThey will CREATE and LEARN new compound words as they talk!")
    print(f"\nConversation: {MESSAGE_LOG_FILE}")
    print(f"New words: {VOCABULARY_FILE}")
    print(f"Maximum messages: {MAX_MESSAGES}")
    print(f"Model: {MODEL}")
    print(f"\n💡 Open chat_viewer.html in your browser for live GUI!")
    print("\nStarting conversation...\n")
    print("=" * 70)

    # Initialize conversation log
    # Clear previous conversation
    if os.path.exists(MESSAGE_LOG_FILE):
        os.remove(MESSAGE_LOG_FILE)
    if os.path.exists(VOCABULARY_FILE):
        os.remove(VOCABULARY_FILE)

    log = ConversationLog(MESSAGE_LOG_FILE)
    vocab = SharedVocabulary(VOCABULARY_FILE)

    # Create agents
    talvir = TikTakAgent("Talvir", AGENT_PERSONALITIES["Talvir"], log, vocab)
    makfem = TikTakAgent("Makfem", AGENT_PERSONALITIES["Makfem"], log, vocab)

    # Start both agents in separate threads
    # Talvir is designated starter to avoid race condition
    thread_talvir = threading.Thread(target=lambda: talvir.run(is_starter=True), daemon=True)
    thread_makfem = threading.Thread(target=lambda: makfem.run(is_starter=False), daemon=True)

    thread_talvir.start()
    thread_makfem.start()

    # Wait for both to finish
    try:
        thread_talvir.join()
        thread_makfem.join()
    except KeyboardInterrupt:
        print("\n\nConversation interrupted by user.")
        talvir.should_stop = True
        makfem.should_stop = True

    print("\n" + "=" * 70)
    print("Conversation Complete!")
    print(f"Total messages: {len(log.get_messages())}")
    print(f"New words created: {len(vocab.get_words())}")
    print(f"Saved to: {MESSAGE_LOG_FILE}")
    print("=" * 70)

    # Print discovered words
    words = vocab.get_words()
    if words:
        print("\n## Newly Created Compound Words:\n")
        for w in words:
            print(f"- **{w['word']}** (by {w['created_by']})")
            print(f"  Context: \"{w['context'][:80]}...\"")
            print()

    # Print full conversation
    print("\n## Full Conversation:\n")
    for msg in log.get_messages():
        print(f"**{msg['speaker']}**: {msg['message']}")
        print()


if __name__ == "__main__":
    main()
