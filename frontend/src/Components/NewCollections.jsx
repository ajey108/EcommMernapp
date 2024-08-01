import React, { useEffect, useState } from 'react'
import Item from './Items/Item'

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/api/products/newcollection').
    then((response)=>response.json()).
    then((data)=>setNew_collection(data))
  },[])

  return (
  <div className="mt-4">
  <h1 className='text-center my-4 text-2xl font-bold'>New Collection</h1>
  <hr />
  <div className="grid grid-cols-4 gap-3 ">
    {new_collection.map((item, i) => (
      
        <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
        />
        
    ))}
</div>

  </div>
  )
}

export default NewCollections