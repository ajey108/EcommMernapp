import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartitems, removeCart } = useContext(ShopContext);

  console.log('all_product:', all_product);
  console.log('cartitems:', cartitems); 
  return (
    <div className='cart-items'>
      <div className="cart-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {

        console.log('product:', product);
        if (cartitems[product.id] >= 0) {
          return (
            <div className="cart-item" key={product.id}>
              <div className="product-details">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <button>{cartitems[product.id]}</button>
                <p>${product.price * cartitems[product.id]}</p>
                <img src={remove_icon} onClick={() => removeCart(product.id)} alt="Remove" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
