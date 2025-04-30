import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingCart className="w-6 h-6 text-pink-500 mr-2" />
              <span className="text-xl font-bold">Trenzylo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover trending products at amazing prices. Quality products, fast shipping, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-pink-500 transition-colors">Products</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-pink-500 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Commerce St, Shopping City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-pink-500 mr-3" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-pink-500 mr-3" />
                <span className="text-gray-400">support@trenzylo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Trenzylo. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;