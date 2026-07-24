import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) =>
      prev.find((c) => c.name === item.name) ? prev : [...prev, item]
    );
  };

  const removeFromCart = (name) =>
    setCart((prev) => prev.filter((c) => c.name !== name));

  const editCart = (oldName, updated) =>
    setCart((prev) => prev.map((c) => (c.name === oldName ? { ...c, ...updated } : c)));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, editCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
