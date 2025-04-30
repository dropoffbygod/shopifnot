import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <div className="bg-pink-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-pink-100 mb-8">
            Subscribe to get exclusive offers, new product alerts, and discounts delivered to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white text-pink-600 py-3 px-6 rounded-lg inline-block font-medium">
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 py-3 px-4 rounded-lg sm:rounded-r-none text-gray-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg sm:rounded-l-none mt-2 sm:mt-0 transition-colors flex items-center justify-center"
              >
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;