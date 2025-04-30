import React from 'react';
import { Product } from '../types/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onQuickView }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
};

export default ProductGrid;