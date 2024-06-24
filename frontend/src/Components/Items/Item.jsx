import React from 'react'

const Item = (props) => {
  return (
    
    <div className='item w-85'>
        <img src={props.image}/>
        <p className='py-2 px-0'>{props.name}</p>
        <div className="item-prices flex gap-5 ">{/* items price */} 

            <div className="itempricenew color-gray font-semibold text-lg "> {/* items price new */}
             ₹ {props.new_price}
            </div>
            <div className="itempriold color-gray font-semibold text-lg decoration-dashed ">{/* items price old*/}
            ₹ {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item