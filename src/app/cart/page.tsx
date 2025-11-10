'use client';

import { useCartStore } from '@/lib/store';
import { getStrainById } from '@/lib/strains';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Start shopping to add items to your cart!
          </p>
          <Link
            href="/store"
            className="bg-cannabis-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-cannabis-700 transition-colors inline-block"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          {items.map((item) => {
            const strain = getStrainById(item.product.strainId);
            return (
              <div
                key={item.product.id}
                className="flex items-center gap-4 py-4 border-b last:border-b-0"
              >
                {/* Product Image Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-cannabis-400 to-cannabis-600 rounded-lg flex-shrink-0"></div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                  {strain && (
                    <p className="text-sm text-gray-600">{strain.type} - {strain.effects.slice(0, 2).join(', ')}</p>
                  )}
                  <p className="text-cannabis-600 font-bold mt-1">
                    ${item.product.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 bg-cannabis-600 text-white rounded-full flex items-center justify-center hover:bg-cannabis-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right min-w-[100px]">
                  <p className="font-bold text-lg text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-xl font-bold text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-600">Calculated at checkout</span>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-3xl font-bold text-cannabis-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full bg-cannabis-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-cannabis-700 transition-colors mb-3">
            Proceed to Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/store"
            className="text-cannabis-600 hover:text-cannabis-700 font-medium"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
