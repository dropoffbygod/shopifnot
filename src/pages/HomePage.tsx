import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryNav from '../components/CategoryNav';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { Product } from '../types/types';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-grow">
        <CategoryNav 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <section className="container mx-auto px-4 py-8" id="products">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory ? `${activeCategory} Products` : 'All Products'}
            </h2>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select className="border rounded py-1 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <ProductGrid 
            products={filteredProducts} 
            onQuickView={setSelectedProduct} 
          />
        </section>
        
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
      
      {selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default HomePage;