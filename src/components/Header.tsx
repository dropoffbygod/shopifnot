import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <div className="flex items-center">
                <ShoppingCart className="w-8 h-8 text-pink-600" />
                <span className="ml-2 text-2xl font-bold text-pink-600">Trenzylo</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Products</a>
            <a href="#categories" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Categories</a>
            <a href="#testimonials" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Testimonials</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-pink-600 cursor-pointer transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 px-4 shadow-md">
          <div className="flex items-center mb-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500 w-full"
            />
            <Search className="absolute left-7 text-gray-400 w-5 h-5" />
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Products</a>
            <a href="#categories" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Categories</a>
            <a href="#testimonials" className="text-gray-800 hover:text-pink-600 font-medium transition-colors">Testimonials</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;