import React from "react";
import { removeFromCart } from "../api/api";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartData, loadCart } = useCart();

  const handleRemove = async (id) => {
    await removeFromCart(id);
    loadCart();
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartData.cart.length === 0 && <p>No items in cart.</p>}
      {cartData.cart.map(item => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-image" />
          <div className="cart-info">
            <p>{item.name}</p>
            <p>Qty: {item.qty}</p>
            <p>${item.price}</p>
          </div>
          <button onClick={() => handleRemove(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${cartData.total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
