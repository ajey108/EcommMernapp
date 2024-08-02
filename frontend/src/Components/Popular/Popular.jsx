import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'

const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/api/products/popularinmobiles').
    then((response)=>response.json()).
    then((data)=>setPopularProducts(data));
  },[])
  return (

    <div className="flex flex-col items-center mt-5 gap-5  ">    {/* main div popular  */}
      <h1 className='font-bold text-4xl'>POPULAR IN MOBILES </h1>
      <hr className='w-[250px] h-[6px] bg-gray-500 border-sm ' />
      <div className="mt-4 flex gap-9">
        {popularProducts.map((item, i) => {
          return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular