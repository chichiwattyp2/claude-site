'use client';

import Link from 'next/link';
import { ShoppingCart, Leaf, Brain, Store } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function Navigation() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-cannabis-700 font-bold text-xl">
            <Leaf className="w-6 h-6" />
            <span>Mood Rolls</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-cannabis-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/store"
              className="text-gray-700 hover:text-cannabis-600 font-medium transition-colors inline-flex items-center gap-2"
            >
              <Store className="w-4 h-4" />
              Store
            </Link>
            <Link
              href="/mood-concierge"
              className="text-gray-700 hover:text-cannabis-600 font-medium transition-colors inline-flex items-center gap-2"
            >
              <Brain className="w-4 h-4" />
              AI Concierge
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative bg-cannabis-600 text-white p-2 rounded-full hover:bg-cannabis-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          <Link
            href="/"
            className="text-gray-700 hover:text-cannabis-600 text-sm font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/store"
            className="text-gray-700 hover:text-cannabis-600 text-sm font-medium py-2 inline-flex items-center gap-1"
          >
            <Store className="w-4 h-4" />
            Store
          </Link>
          <Link
            href="/mood-concierge"
            className="text-gray-700 hover:text-cannabis-600 text-sm font-medium py-2 inline-flex items-center gap-1"
          >
            <Brain className="w-4 h-4" />
            AI
          </Link>
        </div>
      </div>
    </nav>
  );
}
