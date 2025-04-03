import React from 'react';
import pexels from "../assets/pexels-dzeninalukac.jpg";

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unlocking<br className="hidden md:block" />Knowledge With<br className="hidden md:block" />
            <span className="text-green-500">eStudy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge e-learning platform, you can explore a vast library of courses. From academic subjects to practical skills, all designed to help you achieve your goals.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src={pexels} 
            alt="Learning with eStudy" 
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;