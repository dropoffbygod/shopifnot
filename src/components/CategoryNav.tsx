import React from 'react';
import { categories } from '../data/categories';
import { ShoppingBag, Smartphone, Home as HomeIcon, Shirt, Heart } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'HomeIcon':
        return <HomeIcon className="w-5 h-5" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 my-8" id="categories">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="flex overflow-x-auto pb-4 space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name === 'All Products' ? '' : category.name)}
            className={`flex flex-col items-center justify-center min-w-[120px] p-4 rounded-lg transition-all transform hover:scale-105 ${
              (activeCategory === category.name || (activeCategory === '' && category.name === 'All Products'))
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="mb-2">
              {getIcon(category.icon)}
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;