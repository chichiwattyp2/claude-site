'use client';

import Link from 'next/link';
import { Sparkles, ShoppingBag, Brain, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cannabis-900 via-cannabis-800 to-cannabis-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Mood Detection</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cannabis-200 to-white bg-clip-text text-transparent">
              Mood Rolls
            </h1>

            <p className="text-xl md:text-2xl text-cannabis-100 max-w-3xl mx-auto">
              Discover your perfect cannabis strain with AI-powered mood detection.
              Let our smart concierge scan your face and recommend the ideal pre-roll for your vibe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/mood-concierge"
                className="bg-white text-cannabis-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cannabis-100 transform hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Try AI Concierge
              </Link>

              <Link
                href="/store"
                className="bg-cannabis-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-cannabis-500 transform hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse Store
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Leaf className="w-32 h-32 text-cannabis-300" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Leaf className="w-40 h-40 text-cannabis-300 transform rotate-180" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cannabis-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-cannabis-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">1. Scan Your Mood</h3>
              <p className="text-gray-600">
                Our AI analyzes your facial expressions to detect your current mood and emotional state.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cannabis-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-cannabis-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">2. Get Recommendations</h3>
              <p className="text-gray-600">
                Our knowledge base matches your mood with the perfect cannabis strains tailored for you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cannabis-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-cannabis-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">3. Shop & Enjoy</h3>
              <p className="text-gray-600">
                Browse our premium pre-roll selection and order your personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cannabis-600 to-cannabis-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-cannabis-100 mb-8">
            Let our AI concierge help you discover the ideal strain for your current mood.
          </p>
          <Link
            href="/mood-concierge"
            className="bg-white text-cannabis-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-cannabis-50 transform hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2"
          >
            <Brain className="w-6 h-6" />
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-cannabis-400 font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm">Hand-selected strains from trusted growers</p>
            </div>
            <div>
              <h3 className="text-cannabis-400 font-bold text-lg mb-2">AI-Powered</h3>
              <p className="text-sm">Advanced mood detection technology</p>
            </div>
            <div>
              <h3 className="text-cannabis-400 font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm">Discreet packaging, quick shipping</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
