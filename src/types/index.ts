// Core type definitions for the cannabis mood concierge app

export type MoodType =
  | 'happy'
  | 'relaxed'
  | 'energetic'
  | 'focused'
  | 'creative'
  | 'sleepy'
  | 'anxious'
  | 'stressed'
  | 'neutral';

export type StrainType = 'sativa' | 'indica' | 'hybrid';

export interface FacialExpression {
  neutral: number;
  happy: number;
  sad: number;
  angry: number;
  fearful: number;
  disgusted: number;
  surprised: number;
}

export interface DetectedMood {
  primary: MoodType;
  confidence: number;
  expressions: FacialExpression;
}

export interface Strain {
  id: string;
  name: string;
  type: StrainType;
  description: string;
  effects: string[];
  flavors: string[];
  thcContent: string;
  cbdContent: string;
  bestFor: MoodType[];
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  strainId: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
  quantity: number; // number of pre-rolls in pack
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  mood?: DetectedMood;
  recommendations?: Strain[];
}
