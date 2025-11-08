import { createContext, useContext, useState, useEffect } from "react";
import { fetchCart } from "../api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState({ cart: [], total: 0 });

  const loadCart = async () => {
    const { data } = await fetchCart();
    setCartData(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartData, loadCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
