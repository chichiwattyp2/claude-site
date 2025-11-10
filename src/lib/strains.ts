import { Strain, MoodType, StrainType } from '@/types';

/**
 * Comprehensive Cannabis Strains Knowledge Base
 * Each strain is mapped to moods and effects for intelligent recommendations
 */
export const STRAINS_DATABASE: Strain[] = [
  // SATIVA STRAINS - Energetic, Uplifting, Creative
  {
    id: 'sour-diesel',
    name: 'Sour Diesel',
    type: 'sativa',
    description: 'A legendary sativa-dominant strain known for its energizing and uplifting effects. Perfect for daytime use and social activities.',
    effects: ['Energetic', 'Uplifting', 'Creative', 'Focused'],
    flavors: ['Diesel', 'Citrus', 'Pungent'],
    thcContent: '20-25%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'creative', 'focused', 'stressed'],
    imageUrl: '/images/strains/sour-diesel.jpg',
  },
  {
    id: 'green-crack',
    name: 'Green Crack',
    type: 'sativa',
    description: 'Despite its intense name, this strain delivers a powerful mental buzz. Great for fighting fatigue and maintaining focus.',
    effects: ['Energetic', 'Focused', 'Happy', 'Uplifted'],
    flavors: ['Citrus', 'Sweet', 'Mango'],
    thcContent: '15-20%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'focused', 'stressed'],
    imageUrl: '/images/strains/green-crack.jpg',
  },
  {
    id: 'jack-herer',
    name: 'Jack Herer',
    type: 'sativa',
    description: 'Named after the famous cannabis activist, this strain combines blissful, clear-headed creativity with uplifting cerebral effects.',
    effects: ['Creative', 'Energetic', 'Focused', 'Happy'],
    flavors: ['Pine', 'Spicy', 'Woody'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['creative', 'focused', 'happy', 'neutral'],
    imageUrl: '/images/strains/jack-herer.jpg',
  },
  {
    id: 'durban-poison',
    name: 'Durban Poison',
    type: 'sativa',
    description: 'A pure sativa from South Africa, offering clear-headed focus and energy. Perfect for productivity and outdoor activities.',
    effects: ['Energetic', 'Uplifting', 'Creative', 'Happy'],
    flavors: ['Sweet', 'Earthy', 'Pine'],
    thcContent: '17-26%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'creative', 'happy', 'focused'],
    imageUrl: '/images/strains/durban-poison.jpg',
  },

  // INDICA STRAINS - Relaxing, Calming, Sleep-Inducing
  {
    id: 'granddaddy-purple',
    name: 'Granddaddy Purple',
    type: 'indica',
    description: 'A famous indica that delivers potent relaxation and euphoria. Ideal for evening use and managing stress or pain.',
    effects: ['Relaxed', 'Euphoric', 'Sleepy', 'Happy'],
    flavors: ['Grape', 'Berry', 'Sweet'],
    thcContent: '17-27%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'sleepy', 'anxious', 'stressed'],
    imageUrl: '/images/strains/granddaddy-purple.jpg',
  },
  {
    id: 'northern-lights',
    name: 'Northern Lights',
    type: 'indica',
    description: 'One of the most famous indica strains worldwide. Provides deep relaxation and sedative effects, perfect for sleep.',
    effects: ['Relaxed', 'Sleepy', 'Happy', 'Euphoric'],
    flavors: ['Sweet', 'Spicy', 'Earthy'],
    thcContent: '16-21%',
    cbdContent: '<1%',
    bestFor: ['sleepy', 'relaxed', 'anxious', 'stressed'],
    imageUrl: '/images/strains/northern-lights.jpg',
  },
  {
    id: 'bubba-kush',
    name: 'Bubba Kush',
    type: 'indica',
    description: 'A heavy indica strain that brings powerful relaxation and tranquility. Great for unwinding after a long day.',
    effects: ['Relaxed', 'Sleepy', 'Happy', 'Hungry'],
    flavors: ['Chocolate', 'Coffee', 'Earthy'],
    thcContent: '14-22%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'sleepy', 'stressed', 'anxious'],
    imageUrl: '/images/strains/bubba-kush.jpg',
  },
  {
    id: 'purple-punch',
    name: 'Purple Punch',
    type: 'indica',
    description: 'A sweet indica with dessert-like flavors that delivers long-lasting sedation and full-body relaxation.',
    effects: ['Relaxed', 'Sleepy', 'Happy', 'Calm'],
    flavors: ['Grape', 'Blueberry', 'Vanilla'],
    thcContent: '18-25%',
    cbdContent: '<1%',
    bestFor: ['sleepy', 'relaxed', 'anxious'],
    imageUrl: '/images/strains/purple-punch.jpg',
  },

  // HYBRID STRAINS - Balanced Effects
  {
    id: 'blue-dream',
    name: 'Blue Dream',
    type: 'hybrid',
    description: 'A beloved sativa-dominant hybrid offering balanced full-body relaxation with gentle cerebral invigoration.',
    effects: ['Relaxed', 'Happy', 'Creative', 'Euphoric'],
    flavors: ['Blueberry', 'Sweet', 'Herbal'],
    thcContent: '17-24%',
    cbdContent: '<2%',
    bestFor: ['happy', 'relaxed', 'creative', 'neutral'],
    imageUrl: '/images/strains/blue-dream.jpg',
  },
  {
    id: 'girl-scout-cookies',
    name: 'Girl Scout Cookies',
    type: 'hybrid',
    description: 'GSC delivers euphoric effects followed by full-body relaxation. A West Coast favorite with potent effects.',
    effects: ['Happy', 'Relaxed', 'Euphoric', 'Creative'],
    flavors: ['Sweet', 'Earthy', 'Mint'],
    thcContent: '18-28%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'stressed', 'anxious'],
    imageUrl: '/images/strains/gsc.jpg',
  },
  {
    id: 'wedding-cake',
    name: 'Wedding Cake',
    type: 'hybrid',
    description: 'An indica-dominant hybrid with tangy, earthy flavors. Provides relaxation and euphoria with a clear mind.',
    effects: ['Relaxed', 'Happy', 'Euphoric', 'Calm'],
    flavors: ['Vanilla', 'Pepper', 'Sweet'],
    thcContent: '21-25%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'happy', 'anxious', 'stressed'],
    imageUrl: '/images/strains/wedding-cake.jpg',
  },
  {
    id: 'gelato',
    name: 'Gelato',
    type: 'hybrid',
    description: 'A cross from Cookie Fam genetics, Gelato offers a balanced high with sweet flavors and powerful euphoria.',
    effects: ['Happy', 'Relaxed', 'Euphoric', 'Creative'],
    flavors: ['Sweet', 'Berry', 'Citrus'],
    thcContent: '20-25%',
    cbdContent: '<1%',
    bestFor: ['happy', 'creative', 'relaxed', 'neutral'],
    imageUrl: '/images/strains/gelato.jpg',
  },
  {
    id: 'og-kush',
    name: 'OG Kush',
    type: 'hybrid',
    description: 'A legendary hybrid with complex aromas and a multifaceted high. The backbone of many popular strains.',
    effects: ['Relaxed', 'Happy', 'Euphoric', 'Uplifted'],
    flavors: ['Earthy', 'Pine', 'Woody'],
    thcContent: '19-26%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'happy', 'stressed', 'anxious'],
    imageUrl: '/images/strains/og-kush.jpg',
  },
];

/**
 * Get strain recommendations based on detected mood
 * Returns top 3 strains that best match the user's mood
 */
export function getRecommendationsByMood(mood: MoodType): Strain[] {
  // Filter strains that match the mood
  const matchingStrains = STRAINS_DATABASE.filter(strain =>
    strain.bestFor.includes(mood)
  );

  // If we have matches, return top 3
  if (matchingStrains.length > 0) {
    return matchingStrains.slice(0, 3);
  }

  // Fallback recommendations for unmatched moods
  return STRAINS_DATABASE.slice(0, 3);
}

/**
 * Get a specific strain by ID
 */
export function getStrainById(id: string): Strain | undefined {
  return STRAINS_DATABASE.find(strain => strain.id === id);
}

/**
 * Get all strains of a specific type
 */
export function getStrainsByType(type: StrainType): Strain[] {
  return STRAINS_DATABASE.filter(strain => strain.type === type);
}

/**
 * Search strains by name or effects
 */
export function searchStrains(query: string): Strain[] {
  const lowerQuery = query.toLowerCase();
  return STRAINS_DATABASE.filter(strain =>
    strain.name.toLowerCase().includes(lowerQuery) ||
    strain.effects.some(effect => effect.toLowerCase().includes(lowerQuery)) ||
    strain.description.toLowerCase().includes(lowerQuery)
  );
}
