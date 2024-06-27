import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='p-4'>
      <img src={props.banner} alt="" className='w-full h-64 object-cover mb-4 rounded-lg shadow-md' />
      <div className="flex justify-between items-center mb-6">
        <p className='text-gray-700'>
          <span>
            Showing 1-12 out of 36 products
          </span>
        </p>
        <div className="flex items-center text-gray-700">
          Sort by <img src={dropdown_icon} alt="" className='ml-2 w-4 h-4' />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
                className="transition-transform transform hover:scale-105"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className='mx-auto pl-9 rounded-full w-[150px] h-[30px] bg-gray-500 text-white'>LoadMore</div>
    </div>
  );
};

export default ShopCategory;
