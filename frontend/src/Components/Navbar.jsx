import React, { useState } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className='flex justify-around p-4 shadow-md'>
       <Link to='/'> 
      <div className='flex items-center'>
       
        <img src={logo} alt="Logo" className='w-[40px] h-[40px]' />
       
        <h1 className='ml-2 text-xl font-bold'>GadgetStore</h1>
      </div>
      </Link>
      <ul className="flex justify-center items-center gap-4">
        <li onClick={() => setMenu('Shop')} className="relative cursor-pointer">
          <Link to='/'>Shop</Link>

          {menu === "Shop" && <hr className='absolute bottom-0 left-0 w-full h-[3px] bg-gray-500 rounded-[10px] border-none' />}
        </li>
        <li onClick={() => setMenu('Mobile')} className="relative cursor-pointer">
          <Link to='/mobiles'>Mobile</Link>
          {menu === "Mobile" && <hr className='absolute bottom-0 left-0 w-full h-[3px] bg-gray-500 rounded-[10px] border-none' />}
        </li>
        <li onClick={() => setMenu('Laptop')} className="relative cursor-pointer">
          <Link to='/laptops'> Laptop</Link>
          {menu === "Laptop" && <hr className='absolute bottom-0 left-0 w-full h-[3px] bg-gray-500 rounded-[10px] border-none' />}
        </li>
        <li onClick={() => setMenu('Cameras')} className="relative cursor-pointer">
          <Link to='/cameras'>Cameras </Link>
          {menu === "Cameras" && <hr className='absolute bottom-0 left-0 w-full h-[3px] bg-gray-500 rounded-[10px] border-none' />}
        </li>
      </ul>
      <div className="nav-logcart flex gap-6 justify-center items-center relative">
        <Link to='/login'>
        <button className="w-[120px] h-[40px] bg-gray-500 text-white rounded-md font-semibold hover:bg-gray-600 hover:scale-105 active:bg-gray-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition transform duration-200 ease-in-out">Login</button>
        </Link>
        <div className="relative">
          <Link to='/cart'> 
          <img src={cart_icon} alt="Cart Icon" className='w-9 h-9' />
          <div className="absolute top-0 right-0 w-[22px] h-[12px] flex justify-center items-center rounded-full text-[14px] bg-red-500 text-white">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
