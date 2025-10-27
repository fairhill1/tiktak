#!/usr/bin/env python3
"""Quick test of DeepSeek API"""

import os
from openai import OpenAI

print("Testing DeepSeek API...")
print(f"API Key set: {'Yes' if os.environ.get('DEEPSEEK_API_KEY') else 'No'}")

if not os.environ.get('DEEPSEEK_API_KEY'):
    print("\n❌ DEEPSEEK_API_KEY not set!")
    print("Run: export DEEPSEEK_API_KEY='your-key'")
    exit(1)

try:
    client = OpenAI(
        api_key=os.environ.get('DEEPSEEK_API_KEY'),
        base_url="https://api.deepseek.com"
    )

    print("\nSending test request to DeepSeek...")
    response = client.chat.completions.create(
        model="deepseek-chat",
        max_tokens=50,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Say 'Hello from DeepSeek!' in exactly those words."}
        ]
    )

    print("✅ Success!")
    print(f"Response: {response.choices[0].message.content}")
    print("\nYour API key works! The issue is elsewhere.")

except Exception as e:
    print(f"\n❌ Error: {e}")
    print("\nPossible issues:")
    print("1. Invalid API key")
    print("2. Network connection problem")
    print("3. DeepSeek API is down")
