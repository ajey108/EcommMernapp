import React from 'react';

const Description = () => {
  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
      <div className="flex space-x-4 mb-4">
        <div className="text-lg font-semibold cursor-pointer border-b-2 border-blue-500 pb-1">Description</div>
        <div className="text-lg font-semibold cursor-pointer text-gray-500">Reviews(122)</div>
      </div>
      <div>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our Gadget Store, where you can find the best deals on a wide range of products including mobiles, cameras, and laptops. Our store offers top-notch customer service, competitive prices, and a user-friendly shopping experience. Whether you're looking for the latest smartphone with cutting-edge technology, a high-performance camera for capturing your precious moments, or a powerful laptop to boost your productivity, we've got you covered. Explore our extensive collection and take advantage of our exclusive offers to get the best value for your money.
        </p>
      </div>
    </div>
  );
};

export default Description;
