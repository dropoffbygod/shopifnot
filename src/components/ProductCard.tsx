import React from 'react';
import { Product } from '../types/types';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-colors p-2 rounded-full mx-2"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-colors p-2 rounded-full mx-2"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : i < product.rating
                    ? 'text-yellow-400 fill-current opacity-50'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full text-sm transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;