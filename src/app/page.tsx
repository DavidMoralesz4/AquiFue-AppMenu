'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data/products';
import { Product } from '@/types/product';
import Hero from '@/components/Hero-component';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', name: 'Todos', emoji: '🍽️' },
    { id: 'hamburguesas', name: 'Hamburguesas', emoji: '🍔' },
    { id: 'bebidas', name: 'Bebidas', emoji: '🥤' },
    { id: 'acompañamientos', name: 'Acompañamientos', emoji: '🍟' },
    { id: 'postres', name: 'Postres', emoji: '🍰' }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
     <Hero/>

      {/* Filtros de categoría */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay productos disponibles en esta categoría
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">🍔 Fast Food Deluxe</h3>
          <p className="text-gray-300 mb-4">
            Servimos los mejores sabores desde 2024
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>📍 Dirección: Calle Principal 123</span>
            <span>📞 Teléfono: (555) 123-4567</span>
            <span>🕒 Horario: 10:00 AM - 10:00 PM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
