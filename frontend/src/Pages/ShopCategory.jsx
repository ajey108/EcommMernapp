import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className=''>
      <img src={props.banner} alt="" />
      <div className="">
        <p>
          <span>
            
          </span>
        </p>
      </div>

    </div>
  )
}

export default ShopCategory