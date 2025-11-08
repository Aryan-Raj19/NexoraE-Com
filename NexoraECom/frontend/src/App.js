import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider, useCart } from "./context/CartContext";
import "./styles/styles.css";

const AppContent = () => {
  const { cartData } = useCart();
  return (
    <div className="container">
      <h1>Mock E-Com Cart</h1>
      <ProductList />
      <Cart />
      <CheckoutForm cartItems={cartData.cart} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
