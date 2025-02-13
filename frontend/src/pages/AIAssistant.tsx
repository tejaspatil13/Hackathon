import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import debounce from 'lodash/debounce';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Enhanced responses with categories and follow-ups
const responses = {
  greeting: {
    patterns: ['hello', 'hi', 'hey', 'greetings'],
    responses: [
      "Hello! How can I assist you today?",
      "Hi there! What brings you here?",
      "Welcome! How may I help you?"
    ],
    followUps: ["Are you looking for any specific information?", "Do you need help with something particular?"]
  },
  help: {
    patterns: ['help', 'support', 'assist'],
    responses: [
      "I can help you with:\n1. Product information\n2. Technical support\n3. General inquiries",
      "What kind of help do you need? I'm knowledgeable about our products and services."
    ]
  },
  technical: {
    patterns: ['error', 'bug', 'problem', 'issue', 'broken'],
    responses: [
      "Could you describe the issue in more detail? This will help me better assist you.",
      "I understand you're experiencing an issue. Can you tell me:\n1. What you were doing\n2. What went wrong\n3. Any error messages you saw"
    ]
  },
  default: {
    responses: [
      "I'm not quite sure I understand. Could you rephrase that?",
      "Could you provide more details about what you're looking for?"
    ]
  }
};

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Find best matching response category
  const findBestMatch = (input: string): string[] => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [key, category] of Object.entries(responses)) {
      if (key === 'default') continue;
      
      if ('patterns' in category && category.patterns.some(pattern => 
        lowercaseInput.includes(pattern)
      )) {
        return category.responses;
      }
    }
    
    return responses.default.responses;
  };

  // Debounced bot response to prevent rapid-fire submissions
  const debouncedResponse = debounce((userInput: string) => {
    const possibleResponses = findBestMatch(userInput);
    const response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
    
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: response,
      isBot: true,
      timestamp: new Date()
    }]);
    setIsTyping(false);
  }, 500);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking and typing
    debouncedResponse(inputText);
  };

  return (
    <div className="w-full max-w-md mx-auto h-[600px] flex flex-col bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Bot size={24} />
          AI Assistant
        </h2>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className="flex gap-2">
              {message.isBot && (
                <Bot className="w-6 h-6 text-blue-600" />
              )}
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {message.text}
                <div className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              {!message.isBot && (
                <User className="w-6 h-6 text-blue-600" />
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 text-gray-500">
            <Bot className="w-6 h-6" />
            <div className="bg-gray-100 rounded-lg p-3">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !inputText.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIAssistant;