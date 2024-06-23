import React from 'react';
import hero_icon from '../assets/hero_image.png';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen p-6 bg-gray-400">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-4 ml-6">
        <h1 className="text-4xl font-bold text-gray-800">New Arrivals Only</h1>
        <h2 className="text-4xl font-bold text-gray-800">New</h2> 
        <p className="text-4xl font-bold text-gray-800 ">Collections </p>
        <h2 className="text-4xl font-bold text-gray-800">for everyone</h2> 
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Latest Collections
        </button>
      </div>
      {/* Right Side - Product Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={hero_icon}
          alt="Product"
          className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

