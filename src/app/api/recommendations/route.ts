import { NextRequest, NextResponse } from 'next/server';
import { getRecommendationsByMood } from '@/lib/strains';
import { MoodType } from '@/types';

/**
 * API endpoint for getting strain recommendations based on mood
 * POST /api/recommendations
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mood } = body;

    if (!mood) {
      return NextResponse.json(
        { error: 'Mood parameter is required' },
        { status: 400 }
      );
    }

    // Validate mood type
    const validMoods: MoodType[] = [
      'happy',
      'relaxed',
      'energetic',
      'focused',
      'creative',
      'sleepy',
      'anxious',
      'stressed',
      'neutral',
    ];

    if (!validMoods.includes(mood as MoodType)) {
      return NextResponse.json(
        { error: 'Invalid mood type' },
        { status: 400 }
      );
    }

    // Get recommendations
    const recommendations = getRecommendationsByMood(mood as MoodType);

    return NextResponse.json({
      mood,
      recommendations,
      count: recommendations.length,
    });
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET method for testing
 * GET /api/recommendations?mood=happy
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mood = searchParams.get('mood');

  if (!mood) {
    return NextResponse.json(
      { error: 'Mood query parameter is required' },
      { status: 400 }
    );
  }

  const recommendations = getRecommendationsByMood(mood as MoodType);

  return NextResponse.json({
    mood,
    recommendations,
    count: recommendations.length,
  });
}
