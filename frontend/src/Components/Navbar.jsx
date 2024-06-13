import React from 'react'
import logo from  '../assets/logo.png'
import cart_icon from  '../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div>

      <div className=''>
      <img src={logo} alt="" className='w-[50px] h-[50px]' />
      <h1>Shopper</h1>
      </div>
      <ul className=""></ul>
     
 <li>Shop</li>
 <li>Mobile</li>
 <li>Laptop</li>
 <li>Cameras</li>


    </div>
 
  )
}

export default Navbar