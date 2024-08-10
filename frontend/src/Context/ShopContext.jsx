import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 30; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAll_product] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_product(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));

    const token = localStorage.getItem('auth-token');
    console.log(token);
    if (token) {
      fetch('http://localhost:4000/api/products/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((response) => {
        console.log('Response:', response);
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`Failed to add to cart: ${err.error}`);
          });
        }
        return response.json();
      })
      .then((data) => console.log('Cart update response:', data))
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
    } else {
      console.error('No auth token found');
    }
    
  };

  // Remove from cart
  const removeCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)  // Ensures quantity does not go below 0
    }));
    const token = localStorage.getItem('auth-token');
    console.log(token);
    if (token) {
      fetch('http://localhost:4000/api/products/removecart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((response) => {
        console.log('Response:', response);
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(`Failed to remove from the cart: ${err.error}`);
          });
        }
        return response.json();
      })
      .then((data) => console.log('Cart update response:', data))
      .catch((error) => {
        console.error('Error  removing cart:', error);
      });
    } else {
      console.error('No auth token found');
    }
  };

  // Increment product quantity
  const incrementCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1
    }));
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
    return all_product.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        total += product.new_price * cartItems[product.id];
      }
      return total;
    }, 0);
  };

  // Total cart items
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + (quantity > 0 ? quantity : 0), 0);
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
