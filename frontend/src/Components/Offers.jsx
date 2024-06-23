import React from 'react'
import exclusive_image from  '../assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className=" w-[85%] h-[70vh] flex m-auto py-0 px-35 mb-35 bg-gray-400 ">
        <div className="flex-1 flex flex-col justify-center">
            <h1 className='text-white font-bold text-2xl'>Exclusive</h1>
            <h1 className='text-white font-bold text-2xl'>Offers For You</h1>
            <p className='text-white font-bold text-2xl'> ONLY ON BEST SELLERS PRODUCTS</p>
          <button className='w-[150px] h-[50px] px-2 py-2 bg-red-500 rounded-full mt-12'> Check Now</button>
        </div>
        <div className="">
            <img  src={exclusive_image} alt=""  className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Offers