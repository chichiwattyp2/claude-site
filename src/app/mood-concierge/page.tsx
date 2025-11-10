'use client';

import { useState } from 'react';
import MoodDetector from '@/components/MoodDetector';
import ChatConcierge from '@/components/ChatConcierge';
import { DetectedMood } from '@/types';
import { Brain, MessageCircle } from 'lucide-react';

export default function MoodConciergePage() {
  const [detectedMood, setDetectedMood] = useState<DetectedMood | undefined>();
  const [showChat, setShowChat] = useState(false);

  const handleMoodDetected = (mood: DetectedMood) => {
    setDetectedMood(mood);
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cannabis-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cannabis-100 rounded-full px-4 py-2 mb-4">
            <Brain className="w-5 h-5 text-cannabis-700" />
            <span className="text-cannabis-700 font-medium">AI-Powered Mood Analysis</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cannabis Mood Concierge
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our cutting-edge AI to detect your mood and get personalized cannabis strain recommendations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mood Detector */}
          <div className="order-1">
            <MoodDetector onMoodDetected={handleMoodDetected} />
          </div>

          {/* Chat Concierge */}
          <div className="order-2">
            {showChat ? (
              <ChatConcierge detectedMood={detectedMood} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 h-[600px] flex flex-col items-center justify-center text-center">
                <MessageCircle className="w-20 h-20 text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Chat Ready
                </h3>
                <p className="text-gray-600 mb-6">
                  Start your camera to begin mood detection, or start chatting about your preferences.
                </p>
                <button
                  onClick={() => setShowChat(true)}
                  className="bg-cannabis-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cannabis-700 transition-colors"
                >
                  Start Chatting
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🔒 Privacy First
            </h3>
            <p className="text-gray-600 text-sm">
              All facial analysis happens locally in your browser. No images are stored or transmitted.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🧠 Smart AI
            </h3>
            <p className="text-gray-600 text-sm">
              Our AI analyzes subtle facial expressions to accurately determine your emotional state.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🎯 Personalized
            </h3>
            <p className="text-gray-600 text-sm">
              Get strain recommendations tailored specifically to your current mood and needs.
            </p>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use the Mood Concierge
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cannabis-100 text-cannabis-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Allow Camera</h4>
              <p className="text-sm text-gray-600">
                Click "Start Camera" and allow browser access to your webcam.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cannabis-100 text-cannabis-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Face the Camera</h4>
              <p className="text-sm text-gray-600">
                Position your face in view. Our AI will analyze your expressions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cannabis-100 text-cannabis-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Get Recommendations</h4>
              <p className="text-sm text-gray-600">
                Receive personalized strain suggestions based on your detected mood.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cannabis-100 text-cannabis-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Chat & Shop</h4>
              <p className="text-sm text-gray-600">
                Ask questions and add recommended products to your cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
