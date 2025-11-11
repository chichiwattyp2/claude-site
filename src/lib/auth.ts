/**
 * Simple authentication utilities for admin dashboard
 */

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme123';
const SESSION_COOKIE = 'admin_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-me';

/**
 * Verify admin password
 */
export function verifyPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

/**
 * Create admin session
 */
export async function createSession() {
  const cookieStore = await cookies();
  // Simple session token (in production, use JWT or encrypted sessions)
  const sessionToken = Buffer.from(`${SESSION_SECRET}:${Date.now()}`).toString('base64');

  cookieStore.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  return sessionToken;
}

/**
 * Verify admin session
 */
export async function verifySession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_COOKIE);

    if (!session) {
      return false;
    }

    // Decode and verify session
    const decoded = Buffer.from(session.value, 'base64').toString();
    const [secret, timestamp] = decoded.split(':');

    if (secret !== SESSION_SECRET) {
      return false;
    }

    // Check if session is expired (24 hours)
    const sessionAge = Date.now() - parseInt(timestamp);
    const maxAge = 60 * 60 * 24 * 1000; // 24 hours in ms

    return sessionAge < maxAge;
  } catch (error) {
    return false;
  }
}

/**
 * Destroy admin session
 */
export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

/**
 * Middleware to protect admin routes
 */
export async function requireAuth(request: NextRequest) {
  const isAuthenticated = await verifySession();

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return null;
}
