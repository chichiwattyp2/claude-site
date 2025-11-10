import { Product } from '@/types';

/**
 * Product catalog for pre-roll packs
 * Each product is linked to a strain from the knowledge base
 */
export const PRODUCTS_DATABASE: Product[] = [
  {
    id: 'prod-1',
    name: 'Sour Diesel Pre-Roll Pack',
    strainId: 'sour-diesel',
    price: 24.99,
    description: 'Pack of 3 premium Sour Diesel pre-rolls. Perfect for daytime energy and focus.',
    imageUrl: '/images/products/sour-diesel-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-2',
    name: 'Green Crack Energy Pack',
    strainId: 'green-crack',
    price: 22.99,
    description: 'Pack of 3 Green Crack pre-rolls. Boost your energy and motivation.',
    imageUrl: '/images/products/green-crack-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-3',
    name: 'Jack Herer Creative Pack',
    strainId: 'jack-herer',
    price: 26.99,
    description: 'Pack of 3 Jack Herer pre-rolls. Unlock your creativity and focus.',
    imageUrl: '/images/products/jack-herer-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-4',
    name: 'Durban Poison Uplift Pack',
    strainId: 'durban-poison',
    price: 25.99,
    description: 'Pack of 3 pure Durban Poison pre-rolls. Clear-headed energy.',
    imageUrl: '/images/products/durban-poison-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-5',
    name: 'Granddaddy Purple Relax Pack',
    strainId: 'granddaddy-purple',
    price: 27.99,
    description: 'Pack of 3 Granddaddy Purple pre-rolls. Deep relaxation and stress relief.',
    imageUrl: '/images/products/gdp-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-6',
    name: 'Northern Lights Sleep Pack',
    strainId: 'northern-lights',
    price: 24.99,
    description: 'Pack of 3 Northern Lights pre-rolls. For restful sleep and deep relaxation.',
    imageUrl: '/images/products/northern-lights-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-7',
    name: 'Bubba Kush Chill Pack',
    strainId: 'bubba-kush',
    price: 23.99,
    description: 'Pack of 3 Bubba Kush pre-rolls. Ultimate relaxation after a long day.',
    imageUrl: '/images/products/bubba-kush-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-8',
    name: 'Purple Punch Dream Pack',
    strainId: 'purple-punch',
    price: 26.99,
    description: 'Pack of 3 Purple Punch pre-rolls. Sweet dreams and deep sleep.',
    imageUrl: '/images/products/purple-punch-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-9',
    name: 'Blue Dream Balance Pack',
    strainId: 'blue-dream',
    price: 25.99,
    description: 'Pack of 3 Blue Dream pre-rolls. Perfect balance of relaxation and creativity.',
    imageUrl: '/images/products/blue-dream-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-10',
    name: 'Girl Scout Cookies Bliss Pack',
    strainId: 'girl-scout-cookies',
    price: 28.99,
    description: 'Pack of 3 GSC pre-rolls. Premium euphoria and relaxation.',
    imageUrl: '/images/products/gsc-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-11',
    name: 'Wedding Cake Celebration Pack',
    strainId: 'wedding-cake',
    price: 27.99,
    description: 'Pack of 3 Wedding Cake pre-rolls. Euphoric relaxation with sweet flavors.',
    imageUrl: '/images/products/wedding-cake-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-12',
    name: 'Gelato Premium Pack',
    strainId: 'gelato',
    price: 29.99,
    description: 'Pack of 3 Gelato pre-rolls. Premium hybrid for happiness and creativity.',
    imageUrl: '/images/products/gelato-pack.jpg',
    inStock: true,
    quantity: 3,
  },
  {
    id: 'prod-13',
    name: 'OG Kush Classic Pack',
    strainId: 'og-kush',
    price: 26.99,
    description: 'Pack of 3 OG Kush pre-rolls. The legendary classic for stress relief.',
    imageUrl: '/images/products/og-kush-pack.jpg',
    inStock: true,
    quantity: 3,
  },
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return PRODUCTS_DATABASE;
}

/**
 * Get a specific product by ID
 */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS_DATABASE.find(product => product.id === id);
}

/**
 * Get products by strain ID
 */
export function getProductsByStrainId(strainId: string): Product[] {
  return PRODUCTS_DATABASE.filter(product => product.strainId === strainId);
}

/**
 * Search products by name or description
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS_DATABASE.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}
