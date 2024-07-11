import React, { createContext, useState } from "react";
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from cart
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Increment product quantity
  const incrementCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[productId] = (updatedItems[productId] || 0) + 1;
      return updatedItems;
    });
  };

  // Decrement product quantity
  const decrementCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId] > 0) {
        updatedItems[productId] -= 1;
      }
      return updatedItems;
    });
  };

  // Total cart amount
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Total cart items
  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  

  const contextValue = {
    all_product,
    cartItems,
    incrementCart,
    decrementCart,
    addToCart,
    removeCart,
    getTotalAmount,
    getTotalItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
