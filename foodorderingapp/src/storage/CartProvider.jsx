import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    setCart((prevCart) => [...prevCart, foodItem]);
  };

  const removeFromCart = (foodName) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.foodName !== foodName)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
