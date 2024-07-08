import React,{createContext, useState} from "react";
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart=()=>{

    let cart ={};
for (let index=0;index< all_product.length+1;index++){
    cart[index]=0;
}
return cart;

}

const ShopContextProvider =(props)=>{


    const [cartitems,setCartItems] =useState(getDefaultCart());
  

    //add cart
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartitems);
    }


    //remove cart
     const removeCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

      //increase products
    const incrementCart = (productId) => {
        setCartItems((prevItems) => {
          const updatedItems = { ...prevItems };
          updatedItems[productId] = (updatedItems[productId] || 0) + 1;
          return updatedItems;
        });
      };



      // decrease products
      const decrementCart = (productId) => {
        setCartItems((prevItems) => {
          const updatedItems = { ...prevItems };
          updatedItems[productId] = (updatedItems[productId] || 0) - 1;
          return updatedItems;
        });
      };


    const contextValue = {all_product,cartitems,incrementCart,decrementCart,addToCart,removeCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
