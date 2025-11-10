import { DetectedMood, FacialExpression, MoodType } from '@/types';

/**
 * Analyzes facial expressions from face-api.js and determines the user's mood
 *
 * This function takes the raw facial expression data and interprets it
 * into one of our predefined mood categories.
 */
export function analyzeMood(expressions: FacialExpression): DetectedMood {
  // Calculate the dominant expression
  const expressionEntries = Object.entries(expressions) as [keyof FacialExpression, number][];
  const sortedExpressions = expressionEntries.sort((a, b) => b[1] - a[1]);
  const [dominantExpression, confidence] = sortedExpressions[0];

  // Map facial expressions to our mood categories
  const mood = mapExpressionToMood(expressions);

  return {
    primary: mood,
    confidence: confidence,
    expressions,
  };
}

/**
 * Maps facial expression data to mood categories
 * Uses a scoring system based on multiple expressions
 */
function mapExpressionToMood(expressions: FacialExpression): MoodType {
  const {
    happy,
    sad,
    angry,
    fearful,
    disgusted,
    surprised,
    neutral,
  } = expressions;

  // Calculate mood scores based on expression combinations
  const moodScores = {
    happy: happy + surprised * 0.3,
    energetic: happy * 0.7 + surprised * 0.5,
    relaxed: neutral * 0.8 + happy * 0.2,
    focused: neutral * 0.6,
    creative: happy * 0.4 + surprised * 0.3 + neutral * 0.3,
    sleepy: sad * 0.3 + neutral * 0.4,
    anxious: fearful + angry * 0.3,
    stressed: angry + fearful * 0.5 + disgusted * 0.3,
    neutral: neutral,
  };

  // Find the mood with the highest score
  const entries = Object.entries(moodScores) as [MoodType, number][];
  const sortedMoods = entries.sort((a, b) => b[1] - a[1]);

  return sortedMoods[0][0];
}

/**
 * Generates a friendly description of the detected mood
 */
export function getMoodDescription(mood: MoodType): string {
  const descriptions: Record<MoodType, string> = {
    happy: "You're feeling great! Let's find something to enhance your positive vibes.",
    relaxed: "You seem calm and relaxed. Perfect time to unwind even more.",
    energetic: "You're full of energy! Let's find something to match your vibe.",
    focused: "You appear focused and ready to concentrate. Great mindset!",
    creative: "Your creative energy is flowing! Let's amplify that inspiration.",
    sleepy: "You look like you could use some rest. Let's help you relax.",
    anxious: "Feeling a bit tense? Let's find something to help you calm down.",
    stressed: "You seem stressed. Let's find something to help you unwind.",
    neutral: "You're in a balanced state. Let's explore what might enhance your day.",
  };

  return descriptions[mood];
}

/**
 * Get emoji representation of mood
 */
export function getMoodEmoji(mood: MoodType): string {
  const emojis: Record<MoodType, string> = {
    happy: '😊',
    relaxed: '😌',
    energetic: '⚡',
    focused: '🎯',
    creative: '🎨',
    sleepy: '😴',
    anxious: '😰',
    stressed: '😤',
    neutral: '😐',
  };

  return emojis[mood];
}

/**
 * Get color theme for mood
 */
export function getMoodColor(mood: MoodType): string {
  const colors: Record<MoodType, string> = {
    happy: '#FCD34D', // yellow
    relaxed: '#A7F3D0', // green
    energetic: '#FCA5A5', // red
    focused: '#93C5FD', // blue
    creative: '#DDD6FE', // purple
    sleepy: '#C7D2FE', // indigo
    anxious: '#FED7AA', // orange
    stressed: '#FCA5A5', // red
    neutral: '#D1D5DB', // gray
  };

  return colors[mood];
}
