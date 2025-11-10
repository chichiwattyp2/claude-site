'use client';

import { useState } from 'react';
import { getAllProducts } from '@/lib/products';
import { STRAINS_DATABASE, getStrainById } from '@/lib/strains';
import ProductCard from '@/components/ProductCard';
import { StrainType } from '@/types';

export default function StorePage() {
  const products = getAllProducts();
  const [filter, setFilter] = useState<StrainType | 'all'>('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'all') return true;
    const strain = getStrainById(product.strainId);
    return strain?.type === filter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Pre-Roll Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our carefully curated selection of premium cannabis pre-rolls.
            Each pack contains 3 expertly rolled joints.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-cannabis-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter('sativa')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'sativa'
                ? 'bg-cannabis-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Sativa - Energy
          </button>
          <button
            onClick={() => setFilter('indica')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'indica'
                ? 'bg-cannabis-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Indica - Relax
          </button>
          <button
            onClick={() => setFilter('hybrid')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'hybrid'
                ? 'bg-cannabis-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Hybrid - Balance
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
