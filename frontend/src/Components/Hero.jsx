import React from 'react';
import rog from '../assets/rog.jpg';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen p-6 bg-gray-400">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-4 ml-6">
        <h1 className="text-4xl font-bold text-gray-800">Discover the Latest Tech Trends</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-6">New Arrivals</h2>
        <p className="text-4xl font-bold text-gray-800 italic">Cutting-Edge Smartphones</p>
        <h2 className="text-4xl font-bold text-gray-800 italic">Advanced Cameras</h2>
        <p className="text-4xl font-bold text-gray-800 italic">For the Tech Enthusiasts</p>
        <button className=" italic mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Explore Latest Collections
        </button>
      </div>
      {/* Right Side - Product Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={rog}
          alt="Product"
          className="w-[350px] h-[350px] h-auto max-w-md object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

