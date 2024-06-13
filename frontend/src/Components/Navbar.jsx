import React from 'react'
import logo from  '../assets/logo.png'
import cart_icon from  '../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='flex justify-around p-4 shadow-md '>

      <div className=''>
      <img src={logo} alt="" className='w-[50px] h-[50px]' />
      <h1>Shopper</h1>
      </div>
      <ul className="flex justify-center items-center gap-4">

      <li>Shop</li>
 <li>Mobile</li>
 <li>Laptop</li>
 <li>Cameras</li>

      </ul>

      <div className='nav-logcart flex gap-6'>
        <button className='py-2 px-6 bg-gray-500 rounded-md'>Login</button>
        <img src={cart_icon} alt="" />
      </div>
     



    </div>
 
  )
}

export default Navbar