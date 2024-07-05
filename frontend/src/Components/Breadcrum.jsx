import React from 'react';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='flex items-center space-x-2 text-gray-600'>
      <span>HOME</span>
      <img src={arrow_icon} alt="arrow icon" className='w-4 h-4' />
      <span>SHOP</span>
      <img src={arrow_icon} alt="arrow icon" className='w-4 h-4' />
      <span>{product.category}</span>
      <img src={arrow_icon} alt="arrow icon" className='w-4 h-4' />
      <span>{product.name}</span>
    </div>
  );
}

export default Breadcrum;
