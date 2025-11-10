'use client';

import { Product } from '@/types';
import { getStrainById } from '@/lib/strains';
import { useCartStore } from '@/lib/store';
import { ShoppingCart, Leaf, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);
  const strain = getStrainById(product.strainId);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getStrainTypeColor = (type: string) => {
    switch (type) {
      case 'sativa':
        return 'bg-orange-100 text-orange-700';
      case 'indica':
        return 'bg-purple-100 text-purple-700';
      case 'hybrid':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Product Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-cannabis-400 to-cannabis-600 flex items-center justify-center">
        <Leaf className="w-20 h-20 text-white opacity-50" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          {strain && (
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${getStrainTypeColor(
                strain.type
              )}`}
            >
              {strain.type.toUpperCase()}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        {strain && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {strain.effects.slice(0, 3).map((effect) => (
                <span
                  key={effect}
                  className="text-xs bg-cannabis-100 text-cannabis-700 px-2 py-1 rounded"
                >
                  {effect}
                </span>
              ))}
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-semibold">THC:</span> {strain.thcContent}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cannabis-600">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || added}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              added
                ? 'bg-green-500 text-white'
                : product.inStock
                ? 'bg-cannabis-600 text-white hover:bg-cannabis-700 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>

        {!product.inStock && (
          <p className="text-red-500 text-sm mt-2">Out of stock</p>
        )}
      </div>
    </div>
  );
}
