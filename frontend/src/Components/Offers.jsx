import React from 'react';
import rog from '../assets/rog.jpg';

const Offers = () => {
  return (
    <div className="container mx-auto my-8 p-4 bg-gray-400">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-white font-bold text-2xl">Exclusive</h1>
          <h1 className="text-white font-bold text-2xl">Offers For You</h1>
          <p className="text-white font-bold text-2xl">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="w-[150px] h-[50px] px-2 py-2 bg-red-500 rounded-full mt-4 md:mt-12">Check Now</button>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:ml-4">
          <img src={rog} alt="ROG Offer" className="w-full"/>
        </div>
      </div>
    </div>
  );
}

export default Offers;
