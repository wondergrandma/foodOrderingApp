import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const addToCart = (foodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === foodItem.name);

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === foodItem.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...foodItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (foodName) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === foodName);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.name === foodName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.name !== foodName);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
