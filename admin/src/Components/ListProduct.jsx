import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/api/products/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) });
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  // Remove product
  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/api/products/removeproduct', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    });

    await fetchInfo();
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>All Products List</h1>
      <div className='hidden md:grid grid-cols-6 gap-4 font-semibold border-b pb-2'>
        <p className='col-span-1'>Image</p>
        <p className='col-span-1'>Title</p>
        <p className='col-span-1'>Old Price</p>
        <p className='col-span-1'>New Price</p>
        <p className='col-span-1'>Category</p>
        <p className='col-span-1'>Remove</p>
      </div>
      <div className="divide-y">
        {allProducts.map((product, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-2">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover col-span-1 mx-auto md:mx-0" />
            <p className='text-center md:text-left col-span-1'>{product.name}</p>
            <p className='text-center md:text-left col-span-1'>${product.old_price}</p>
            <p className='text-center md:text-left col-span-1'>${product.new_price}</p>
            <p className='text-center md:text-left col-span-1'>{product.category}</p>
            <button className='text-center md:text-left col-span-1 text-red-500 hover:text-red-700 mx-auto md:mx-0' onClick={() => { removeProduct(product.id) }}>
              <RxCross2 size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
