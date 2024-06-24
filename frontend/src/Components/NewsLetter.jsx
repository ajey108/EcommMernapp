import React from 'react'

const NewsLetter = () => {
  return (
  <div className=" py-5 bg-gray-500 my-5 flex flex-col justify-center items-center w-[80%] mx-auto">
    <h1 className='text-4xl font-bold text-white'> Get Exclusive offers on Your Email</h1>
    <p className='text-white font-semibold mt-5'>Subscribe to our newsletter and stay updated</p>
    <div className='my-5'>
        <input className='bg-gray-500 text-white w-[300px] border-2 rounded-lg' type="email" placeholder='Your Email id' />
        <button className='bg-red-500 rounded-full ml-4 w-[100px] h-[30px] text-white'> Subscribe</button>
    </div>
  </div>
  )
}

export default NewsLetter
