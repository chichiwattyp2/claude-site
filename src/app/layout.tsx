import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mood Rolls - AI-Powered Cannabis Concierge',
  description: 'Discover the perfect cannabis strain for your mood with our AI-powered face scanning technology.',
  keywords: 'cannabis, pre-rolls, AI, mood detection, strain recommendations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Mood Rolls. For use by adults 21+ only. Consume responsibly.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Please check your local laws regarding cannabis products.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
