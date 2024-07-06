import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    
    <div className='item w-85'>
      <Link to ={`/product/${props.id}`}>
    
      <img onClick={window.scrollTo(0,0)} className='w-[50px] ' src={props.image}/>
      </Link>
       
       
        <p className='py-2 px-0'>{props.name}</p>
        <div className=" flex gap-4 ">{/* items price */} 

            <div className=" color-gray font-semibold text-lg "> {/* items price new */}
             ₹ {props.new_price}
            </div>
            <div className=" color-gray font-semibold text-lg decoration-dashed ">{/* items price old*/}
            ₹ {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item