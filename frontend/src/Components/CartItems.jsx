import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartitems, removeCart } = useContext(ShopContext);

  console.log('all_product:', all_product);
  console.log('cartitems:', cartitems);

  return (
    <div className="cart-items p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="cart-header grid grid-cols-6 gap-4 text-lg font-semibold border-b pb-2 mb-4">
        <p className="col-span-1">Products</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>
      {all_product.map((product) => {
        const quantity = cartitems[product.id];
        if (quantity > 0) {
          const total = product.new_price * quantity;
          return (
            <div className="cart-item grid grid-cols-6 gap-4 items-center py-2 border-b" key={product.id}>
              <div className="product-details col-span-1">
                <img className="w-16 h-16 object-cover rounded" src={product.image} alt={product.name} />
              </div>
              <p className="col-span-1">{product.name}</p>
              <p className="col-span-1">${product.new_price.toFixed(2)}</p>
              <div className="col-span-1 flex justify-center">
                <button className="bg-gray-300 rounded-lg px-3 py-1">{quantity}</button>
                {console.log(quantity)}
              </div>
              <p className="col-span-1">${total.toFixed(2)}</p>
              <div className="col-span-1 flex justify-center">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeCart(product.id)}
                  alt="Remove"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
