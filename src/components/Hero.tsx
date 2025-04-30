import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-600 to-pink-500 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Discover Trending Products at Amazing Prices
            </h1>
            <p className="text-lg md:text-xl mb-8 text-pink-100">
              Shop the latest trends delivered directly to your doorstep. Quality products, fast shipping, exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#products" 
                className="bg-white text-pink-600 hover:bg-pink-100 transition-colors font-semibold px-6 py-3 rounded-lg flex items-center justify-center"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
              </a>
              <a 
                href="#categories" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 transition-colors font-semibold px-6 py-3 rounded-lg flex items-center justify-center"
              >
                Explore Categories
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 transition-transform hover:rotate-0">
                <img 
                  src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Featured Product" 
                  className="rounded w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-pink-600 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-md">
                  50% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 origin-top-right -mb-10"></div>
    </div>
  );
};

export default Hero;