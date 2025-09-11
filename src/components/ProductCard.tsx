import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Imagen del producto */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
          <span className="text-6xl">🍔</span>
        </div>
        {product.isPopular && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            ¡Popular!
          </div>
        )}
        {product.isVegetarian && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            🌱 Veg
          </div>
        )}
      </div>

      {/* Contenido de la card */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Precio y botón */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-600">
            ${product.price.toFixed(2)}
          </span>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
