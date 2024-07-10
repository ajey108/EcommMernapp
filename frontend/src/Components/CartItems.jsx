import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, incrementCart, decrementCart, cartItems, removeCart, getTotalAmount } = useContext(ShopContext);

  console.log('all_product:', all_product);
  console.log('cartitems:', cartItems);

  return (
    <div className="cart-items my-4 p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="cart-header grid grid-cols-6 gap-4 text-lg font-semibold border-b pb-2 mb-4">
        <p className="col-span-1">Products</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>
      {all_product.map((product) => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          const total = product.new_price * quantity;
          return (
            <div className="cart-item grid grid-cols-6 gap-4 items-center py-2 border-b" key={product.id}>
              <div className="product-details col-span-1">
                <img className="w-16 h-16 object-cover rounded" src={product.image} alt={product.name} />
              </div>
              <p className="col-span-1">{product.name}</p>
              <p className="col-span-1">${product.new_price.toFixed(2)}</p>
              <div className="col-span-1 flex justify-center items-center">
                <button
                  className="bg-gray-300 rounded-lg px-3 py-1"
                  onClick={() => decrementCart(product.id)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  className="bg-gray-300 rounded-lg px-3 py-1"
                  onClick={() => incrementCart(product.id)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="col-span-1">${total.toFixed(2)}</p>
              <div className="col-span-1 flex justify-center">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeCart(product.id)}
                  alt="Remove"
                  aria-label={`Remove ${product.name}`}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-xl font-semibold mb-4">Cart Totals</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <p className="font-semibold">Subtotal</p>
          <p className="text-right">${getTotalAmount().toFixed(2)}</p>
          <hr className="col-span-2" />
          <p className="font-semibold">Shipping Fee</p>
          <p className="text-right">Free</p>
          <hr className="col-span-2" />
          <h3 className="font-semibold">Total</h3>
          <h3 className="text-right">${getTotalAmount().toFixed(2)}</h3>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          PROCEED TO CHECKOUT
        </button>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="font-semibold mb-2">If you have a promo code, enter it here</p>
        <div className="flex">
          <input className="flex-1 p-2 border rounded-l-lg" type="text" placeholder='Promo code' />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;


