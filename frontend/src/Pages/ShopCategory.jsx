import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assetsdropdown_icon.png'
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className=''>
      <img src={props.banner} alt="" />
      <div className="">
        <p>
          <span>
            Showing 1-12 out of 36 products
          </span>
        </p>
        <div className="">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="">
        {all_product.map((item,index)=>{
          if(props.category===item.category){
           
           return  <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
        />

          }

          else {
            return null
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory