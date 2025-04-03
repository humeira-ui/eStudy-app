import React from 'react';
import heroImage from "../assets/pexels-olly.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 text-center md:text-left">
            About <span className="text-green-500">Us</span>
          </h1>
          
          {/* Paragraph - hidden on mobile */}
          <p className="hidden md:block text-lg md:text-xl text-gray-600 leading-relaxed">
            eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge e-learning platform, you can explore a vast library of courses. From academic subjects to practical skills, all designed to help you achieve your goals.
          </p>
          
          {/* Button - visible on all screens and centered on mobile */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <img 
            src={heroImage} 
            alt="Learning with eStudy" 
            className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[500px]"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/800x500?text=eStudy+Placeholder";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;