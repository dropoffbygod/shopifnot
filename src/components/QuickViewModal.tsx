import React from 'react';
import { Product } from '../types/types';
import { X, Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden shadow-xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-6">
              <div className="mb-2">
                <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              
              <div className="flex items-center mb-4">
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
                <span className="text-sm text-gray-500 ml-2">({product.rating} rating)</span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-pink-600">${product.price.toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;