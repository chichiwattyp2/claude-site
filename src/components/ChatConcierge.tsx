'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage, DetectedMood, Strain } from '@/types';
import { getRecommendationsByMood } from '@/lib/strains';
import { getProductsByStrainId } from '@/lib/products';
import { useCartStore } from '@/lib/store';
import { Send, Bot, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface ChatConciergeProps {
  detectedMood?: DetectedMood;
}

export default function ChatConcierge({ detectedMood }: ChatConciergeProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your cannabis concierge. I can help you find the perfect strain based on your mood, preferences, and desired effects. How are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addItem = useCartStore((state) => state.addItem);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-respond when mood is detected
  useEffect(() => {
    if (detectedMood && messages.length === 1) {
      handleMoodDetection(detectedMood);
    }
  }, [detectedMood]);

  const handleMoodDetection = (mood: DetectedMood) => {
    const recommendations = getRecommendationsByMood(mood.primary);

    const moodMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'system',
      content: `Mood detected: ${mood.primary} (${(mood.confidence * 100).toFixed(0)}% confidence)`,
      timestamp: new Date(),
      mood,
    };

    const responseMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: `I can see you're feeling ${mood.primary}! Based on that, I've selected some perfect strains for you. Would you like to know more about any of these?`,
      timestamp: new Date(),
      recommendations,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, moodMessage, responseMessage]);
    }, 500);
  };

  const generateResponse = (userMessage: string): ChatMessage => {
    const lowerMessage = userMessage.toLowerCase();

    // Simple rule-based responses (in production, you'd integrate with Claude or OpenAI API)
    if (lowerMessage.includes('energetic') || lowerMessage.includes('energy')) {
      const recommendations = getRecommendationsByMood('energetic');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Looking for an energy boost? Great! Sativa strains are perfect for that. Here are my top recommendations:",
        timestamp: new Date(),
        recommendations,
      };
    }

    if (lowerMessage.includes('relax') || lowerMessage.includes('calm') || lowerMessage.includes('chill')) {
      const recommendations = getRecommendationsByMood('relaxed');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Time to unwind? I've got you covered with some deeply relaxing indica strains:",
        timestamp: new Date(),
        recommendations,
      };
    }

    if (lowerMessage.includes('sleep') || lowerMessage.includes('tired')) {
      const recommendations = getRecommendationsByMood('sleepy');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Having trouble sleeping? These indica-dominant strains are known for their sedative effects:",
        timestamp: new Date(),
        recommendations,
      };
    }

    if (lowerMessage.includes('creative') || lowerMessage.includes('inspiration')) {
      const recommendations = getRecommendationsByMood('creative');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Need creative inspiration? These strains are known to unlock creativity:",
        timestamp: new Date(),
        recommendations,
      };
    }

    if (lowerMessage.includes('stress') || lowerMessage.includes('anxious') || lowerMessage.includes('anxiety')) {
      const recommendations = getRecommendationsByMood('anxious');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Feeling stressed? These strains are known for their anxiety-relieving properties:",
        timestamp: new Date(),
        recommendations,
      };
    }

    if (lowerMessage.includes('focus') || lowerMessage.includes('concentrate')) {
      const recommendations = getRecommendationsByMood('focused');
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Need to focus? These strains can help enhance concentration:",
        timestamp: new Date(),
        recommendations,
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: "I can help you find the perfect strain! Tell me more about what you're looking for. Are you seeking energy, relaxation, creativity, or something else?",
      timestamp: new Date(),
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleAddToCart = (strain: Strain) => {
    const products = getProductsByStrainId(strain.id);
    if (products.length > 0) {
      addItem(products[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="bg-cannabis-600 text-white p-4">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-lg">AI Cannabis Concierge</h3>
              <p className="text-sm text-cannabis-100">
                Personalized strain recommendations
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role !== 'user' && (
                <div className="w-8 h-8 bg-cannabis-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}

              <div
                className={`max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-cannabis-600 text-white'
                    : message.role === 'system'
                    ? 'bg-blue-100 text-blue-900'
                    : 'bg-white text-gray-900'
                } rounded-2xl px-4 py-3 shadow`}
              >
                <p className="text-sm">{message.content}</p>

                {/* Show recommendations */}
                {message.recommendations && message.recommendations.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.recommendations.map((strain) => (
                      <div
                        key={strain.id}
                        className="bg-gray-50 p-3 rounded-lg border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-900">{strain.name}</h4>
                          <span className="text-xs bg-cannabis-100 text-cannabis-700 px-2 py-1 rounded">
                            {strain.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          {strain.description.slice(0, 100)}...
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {strain.effects.slice(0, 3).map((effect) => (
                            <span
                              key={effect}
                              className="text-xs bg-cannabis-50 text-cannabis-700 px-2 py-0.5 rounded"
                            >
                              {effect}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => handleAddToCart(strain)}
                          className="text-xs bg-cannabis-600 text-white px-3 py-1 rounded hover:bg-cannabis-700 transition-colors inline-flex items-center gap-1"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-cannabis-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tell me how you're feeling..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cannabis-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-cannabis-600 text-white p-2 rounded-full hover:bg-cannabis-700 transition-colors disabled:bg-gray-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
