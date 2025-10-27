#!/bin/bash

# Check if API key is set
if [ -z "$DEEPSEEK_API_KEY" ]; then
    echo "❌ Error: DEEPSEEK_API_KEY environment variable is not set!"
    echo ""
    echo "Please set your DeepSeek API key:"
    echo "  export DEEPSEEK_API_KEY='your-api-key-here'"
    echo ""
    echo "Get your API key at: https://platform.deepseek.com"
    exit 1
fi

echo "✅ API key found!"
echo ""
echo "🚀 Starting TikTak autonomous conversation..."
echo "💡 Open chat_viewer.html in your browser to watch live!"
echo ""

python3 autonomous_conversation.py
