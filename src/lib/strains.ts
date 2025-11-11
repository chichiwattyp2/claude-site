import { Strain, MoodType, StrainType } from '@/types';

/**
 * Real Cannabis Strains from Product Catalog
 * Extracted from actual product descriptions with effects and mood mappings
 */
export const STRAINS_DATABASE: Strain[] = [
  // SATIVA STRAINS
  {
    id: 'durban-poison',
    name: 'Durban Poison',
    type: 'sativa',
    description: 'A pure South African landrace sativa offering clear-headed focus and energy. Spicy, pine-forward with sweet anise and spearmint notes.',
    effects: ['Cerebral Uplift', 'Focus', 'Creativity', 'Energizing'],
    flavors: ['Spicy', 'Pine', 'Anise', 'Spearmint'],
    thcContent: '17-24%',
    cbdContent: '<1%',
    bestFor: ['focused', 'energetic', 'creative', 'happy'],
    imageUrl: '/images/strains/durban-poison.webp',
  },
  {
    id: 'super-sativa',
    name: 'Super Sativa',
    type: 'sativa',
    description: 'A powerful sativa delivering elevated energy and clarity. Sweet berry with earthy herbal zest, perfect for daytime boost.',
    effects: ['Energy', 'Clarity', 'Creative Spark', 'Stamina'],
    flavors: ['Sweet Berry', 'Earthy', 'Herbal', 'Gas'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'focused', 'creative', 'happy'],
    imageUrl: '/images/strains/super-sativa.webp',
  },
  {
    id: 'paradise-skunk',
    name: 'Paradise Skunk',
    type: 'sativa',
    description: 'Tropical escape with sweet fruity aromas and coconut notes. Mood-boosting energy perfect for creativity and concentration.',
    effects: ['Energy', 'Optimism', 'Euphoria', 'Creativity'],
    flavors: ['Sweet', 'Tropical Fruit', 'Coconut', 'Skunk'],
    thcContent: '16-21%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'happy', 'creative', 'focused'],
    imageUrl: '/images/strains/paradise-skunk.webp',
  },
  {
    id: 'bio-diesel',
    name: 'Bio-Diesel',
    type: 'sativa',
    description: 'Electrifying mental stimulation with citrus bursts and gas. Cross of Sour Diesel and Afghan Lemon Drops.',
    effects: ['Mentally Stimulating', 'Creative', 'Focused', 'Energetic'],
    flavors: ['Citrus', 'Lemon', 'Gas', 'Earthy'],
    thcContent: '19-24%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'focused', 'creative', 'stressed'],
    imageUrl: '/images/strains/bio-diesel.webp',
  },
  {
    id: 'lemon-haze',
    name: 'Lemon Haze',
    type: 'sativa',
    description: 'Zesty citrus delight with bold lemon candy sweetness. Invigorating energy that ignites creativity and euphoria.',
    effects: ['Energetic', 'Creative', 'Euphoric', 'Uplifted'],
    flavors: ['Lemon', 'Citrus', 'Sweet', 'Candy'],
    thcContent: '17-22%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'creative', 'happy', 'focused'],
    imageUrl: '/images/strains/lemon-haze.webp',
  },
  {
    id: 'green-crack',
    name: 'Green Crack #2',
    type: 'sativa',
    description: 'Renowned for energizing effects with spicy pine and spearmint flavors. Enhances focus and delivers gentle body relaxation.',
    effects: ['Energetic', 'Focused', 'Happy', 'Creative'],
    flavors: ['Spicy Pine', 'Spearmint', 'Tangy', 'Fruity'],
    thcContent: '18-24%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'focused', 'happy', 'creative'],
    imageUrl: '/images/strains/green-crack.webp',
  },

  // INDICA STRAINS
  {
    id: 'purple-urkle',
    name: 'Purple Urkle',
    type: 'indica',
    description: 'Sweet grape bubble-gum and grape soda flavors. Profound relaxation perfect for restorative sleep and stress relief.',
    effects: ['Relaxed', 'Serene', 'Sleepy', 'Calm'],
    flavors: ['Grape', 'Bubble Gum', 'Grape Soda', 'Sweet'],
    thcContent: '18-24%',
    cbdContent: '<1%',
    bestFor: ['sleepy', 'relaxed', 'anxious', 'stressed'],
    imageUrl: '/images/strains/purple-urkle.webp',
  },
  {
    id: 'taffy-slapper',
    name: 'Taffy Slapper',
    type: 'indica',
    description: 'Sweet candy-like flavor with tropical fruit and creamy notes. Euphoric and uplifting with creative cerebral high.',
    effects: ['Euphoric', 'Uplifting', 'Creative', 'Relaxed'],
    flavors: ['Sweet Candy', 'Tropical Fruit', 'Creamy'],
    thcContent: '20-25%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'creative', 'stressed'],
    imageUrl: '/images/strains/taffy-slapper.webp',
  },
  {
    id: 'tiger-melon',
    name: 'Tiger Melon',
    type: 'indica',
    description: 'Juicy watermelon and strawberry with coconut undertones. Perfect for relaxation and friendly vibes.',
    effects: ['Relaxed', 'Friendly', 'Calm', 'Happy'],
    flavors: ['Watermelon', 'Strawberry', 'Coconut', 'Sweet'],
    thcContent: '17-22%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'happy', 'sleepy', 'anxious'],
    imageUrl: '/images/strains/tiger-melon.webp',
  },
  {
    id: 'double-rainbow',
    name: 'Double Rainbow',
    type: 'indica',
    description: 'Sweet candy-like fruit medley with citrus. Euphoric mood-boosting high with relaxed creative state.',
    effects: ['Euphoric', 'Mood-Boosting', 'Relaxed', 'Creative'],
    flavors: ['Sweet', 'Fruit Medley', 'Citrus', 'Candy'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'creative', 'stressed'],
    imageUrl: '/images/strains/double-rainbow.webp',
  },
  {
    id: 'unicorn-sours',
    name: 'Unicorn Sours',
    type: 'indica',
    description: 'Sour fruit with pungent skunky undertones. Giggles, tingles and euphoria with mellow body relaxation.',
    effects: ['Euphoric', 'Giggly', 'Relaxed', 'Tingly'],
    flavors: ['Sour Fruit', 'Pungent', 'Skunky'],
    thcContent: '19-24%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'stressed', 'anxious'],
    imageUrl: '/images/strains/unicorn-sours.webp',
  },
  {
    id: 'master-kush',
    name: 'Master Kush',
    type: 'indica',
    description: 'Earthy aromas with sweet incense and spices from Hindu Kush. Tingly relaxation with sharp senses and clarity.',
    effects: ['Relaxed', 'Tingly', 'Clear-Headed', 'Tranquil'],
    flavors: ['Earthy', 'Sweet', 'Incense', 'Spicy'],
    thcContent: '17-22%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'focused', 'sleepy', 'anxious'],
    imageUrl: '/images/strains/master-kush.webp',
  },
  {
    id: 'purple-punch',
    name: 'Purple Punch',
    type: 'indica',
    description: 'Luscious grape and berry aroma. Serene yet stimulating with joyful euphoria and smooth relaxation.',
    effects: ['Euphoric', 'Relaxed', 'Creative', 'Calm'],
    flavors: ['Grape', 'Berry', 'Sweet'],
    thcContent: '19-25%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'sleepy', 'happy', 'anxious'],
    imageUrl: '/images/strains/purple-punch.webp',
  },
  {
    id: 'og-kush',
    name: 'OG Kush',
    type: 'indica',
    description: 'Legendary strain with earthy pine and citrus. Profound euphoria and deep body relaxation.',
    effects: ['Euphoric', 'Relaxed', 'Happy', 'Creative'],
    flavors: ['Earthy', 'Pine', 'Citrus'],
    thcContent: '19-26%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'happy', 'stressed', 'anxious'],
    imageUrl: '/images/strains/og-kush.webp',
  },

  // HYBRID STRAINS
  {
    id: 'watermelon-yeti',
    name: 'Watermelon Yeti',
    type: 'hybrid',
    description: 'Punchy watermelon sweetness with fresh mountain air. Uplifting euphoria, creativity, and grounding clarity.',
    effects: ['Uplifting', 'Euphoric', 'Creative', 'Grounding'],
    flavors: ['Watermelon', 'Sweet', 'Fresh Air'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['happy', 'creative', 'focused', 'energetic'],
    imageUrl: '/images/strains/watermelon-yeti.webp',
  },
  {
    id: 'giant-peach',
    name: 'Giant Peach',
    type: 'hybrid',
    description: 'Robust peachy flavors like apricot sweets. Long-lasting motivation and focus with relaxing sensations.',
    effects: ['Motivated', 'Focused', 'Relaxed', 'Open'],
    flavors: ['Peach', 'Apricot', 'Sweet'],
    thcContent: '17-22%',
    cbdContent: '<1%',
    bestFor: ['focused', 'energetic', 'relaxed', 'creative'],
    imageUrl: '/images/strains/giant-peach.webp',
  },
  {
    id: 'cotton-candy',
    name: 'Cotton Candy',
    type: 'hybrid',
    description: 'Traditional cotton candy with tropical fruit and lychee. Uplifting euphoria with calming body sensation.',
    effects: ['Uplifting', 'Euphoric', 'Focused', 'Calm'],
    flavors: ['Cotton Candy', 'Tropical Fruit', 'Lychee', 'Floral'],
    thcContent: '18-22%',
    cbdContent: '<1%',
    bestFor: ['happy', 'focused', 'relaxed', 'creative'],
    imageUrl: '/images/strains/cotton-candy.webp',
  },
  {
    id: 'baked-churros',
    name: 'Baked Churros',
    type: 'hybrid',
    description: 'Cinnamon and sugar with doughy, creamy notes. Creative flow with relaxing body high and cerebral lift.',
    effects: ['Creative', 'Relaxed', 'Uplifted', 'Inspired'],
    flavors: ['Cinnamon', 'Sugar', 'Doughy', 'Creamy'],
    thcContent: '19-23%',
    cbdContent: '<1%',
    bestFor: ['creative', 'relaxed', 'happy', 'stressed'],
    imageUrl: '/images/strains/baked-churros.webp',
  },
  {
    id: 'apple-sauce',
    name: 'Apple Sauce',
    type: 'hybrid',
    description: 'Apple sauce with vanilla and earthiness. Perfect balance of euphoria and relaxation with stress relief.',
    effects: ['Euphoric', 'Relaxed', 'Balanced', 'Focused'],
    flavors: ['Apple', 'Vanilla', 'Earthy'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'focused', 'stressed'],
    imageUrl: '/images/strains/apple-sauce.webp',
  },
  {
    id: 'berry-tonic',
    name: 'Berry Tonic',
    type: 'hybrid',
    description: 'Tart cranberry and sweet raspberry with earthy kush. Calming yet uplifting with smooth balanced high.',
    effects: ['Calming', 'Uplifting', 'Balanced', 'Smooth'],
    flavors: ['Cranberry', 'Raspberry', 'Earthy Kush'],
    thcContent: '17-22%',
    cbdContent: '<1%',
    bestFor: ['relaxed', 'happy', 'focused', 'stressed'],
    imageUrl: '/images/strains/berry-tonic.webp',
  },
  {
    id: 'sorbet-guava',
    name: 'Sorbet Guava',
    type: 'hybrid',
    description: 'Sweet tropical guava with creamy sorbet. Uplifting and energizing, sparks creativity with clear mind.',
    effects: ['Uplifting', 'Energizing', 'Creative', 'Clear'],
    flavors: ['Guava', 'Tropical', 'Creamy', 'Sorbet'],
    thcContent: '19-24%',
    cbdContent: '<1%',
    bestFor: ['energetic', 'creative', 'happy', 'focused'],
    imageUrl: '/images/strains/sorbet-guava.webp',
  },
  {
    id: 'juicebox-grape',
    name: 'Juicebox Grape',
    type: 'hybrid',
    description: 'Bold juice box grape with earthy herbal notes. Cerebral stimulation with calming body relaxation.',
    effects: ['Cerebral', 'Stimulating', 'Calm', 'Balanced'],
    flavors: ['Grape', 'Juice Box', 'Earthy', 'Herbal'],
    thcContent: '18-23%',
    cbdContent: '<1%',
    bestFor: ['focused', 'relaxed', 'creative', 'happy'],
    imageUrl: '/images/strains/juicebox-grape.webp',
  },
  {
    id: 'gelato',
    name: 'Gelato',
    type: 'hybrid',
    description: 'Creamy sweetness with berry undertones. Euphoric uplift balanced with cerebral stimulation and physical relaxation.',
    effects: ['Euphoric', 'Balanced', 'Relaxed', 'Creative'],
    flavors: ['Creamy', 'Sweet', 'Berry', 'Citrus'],
    thcContent: '20-25%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'creative', 'focused'],
    imageUrl: '/images/strains/gelato.webp',
  },
  {
    id: 'girl-scout-cookies',
    name: 'Girl Scout Cookies',
    type: 'hybrid',
    description: 'Sweet, earthy with minty freshness. Balanced cerebral lift with creativity and soothing body relaxation.',
    effects: ['Balanced', 'Creative', 'Calm', 'Uplifted'],
    flavors: ['Sweet', 'Earthy', 'Mint', 'Fresh'],
    thcContent: '18-28%',
    cbdContent: '<1%',
    bestFor: ['happy', 'relaxed', 'creative', 'stressed'],
    imageUrl: '/images/strains/gsc.webp',
  },
  {
    id: 'birthday-cake',
    name: 'Birthday Cake',
    type: 'hybrid',
    description: 'Sweet, earthy with creamy vanilla and tangy berries. Spirited cerebral boost with blissful tranquility.',
    effects: ['Euphoric', 'Creative', 'Joyful', 'Tranquil'],
    flavors: ['Vanilla', 'Berry', 'Sweet', 'Earthy'],
    thcContent: '20-25%',
    cbdContent: '<1%',
    bestFor: ['happy', 'creative', 'relaxed', 'stressed'],
    imageUrl: '/images/strains/birthday-cake.webp',
  },
  {
    id: 'zkittles',
    name: 'Zkittles',
    type: 'hybrid',
    description: 'Candy-inspired sweetness with mixed fruits. Uplifting euphoria perfect for music and movies.',
    effects: ['Euphoric', 'Uplifting', 'Sensory Enhancement', 'Creative'],
    flavors: ['Sweet Candy', 'Mixed Fruit', 'Earthy'],
    thcContent: '18-24%',
    cbdContent: '<1%',
    bestFor: ['happy', 'creative', 'relaxed', 'focused'],
    imageUrl: '/images/strains/zkittles.webp',
  },
];

/**
 * Get strain recommendations based on detected mood
 * Returns top 3 strains that best match the user's mood
 */
export function getRecommendationsByMood(mood: MoodType): Strain[] {
  const matchingStrains = STRAINS_DATABASE.filter(strain =>
    strain.bestFor.includes(mood)
  );

  if (matchingStrains.length > 0) {
    return matchingStrains.slice(0, 3);
  }

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
