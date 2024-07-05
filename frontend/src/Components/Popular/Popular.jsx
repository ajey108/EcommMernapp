import React from 'react'
import data_product from '../../assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (

    <div className="flex flex-col items-center mt-5 gap-5 h-[90vh] ">    {/* main div popular  */}
      <h1 className='font-bold text-4xl'>POPULAR IN MOBILES </h1>
      <hr className='w-[250px] h-[6px] bg-gray-500 border-sm ' />
      <div className="mt-4 flex gap-9">
        {data_product.map((item, i) => {
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