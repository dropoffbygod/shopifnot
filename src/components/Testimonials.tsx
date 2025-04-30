import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-pink-50 py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5 text-pink-600" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5 text-pink-600" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;