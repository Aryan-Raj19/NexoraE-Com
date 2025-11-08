import React, { useState } from "react";
import { checkout } from "../api/api";

const CheckoutForm = ({ cartItems }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [receipt, setReceipt] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const { data } = await checkout({
      cartItems,
      ...formData,
    });
    setReceipt(data.receipt);
    setShowForm(false);
  };

  return (
    <div className="checkout-section">
      {!receipt ? (
        <>
          {!showForm ? (
            <button
              className="checkout-btn"
              onClick={() => setShowForm(true)}
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          ) : (
            <form className="checkout-form" onSubmit={handleCheckout}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInput}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInput}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInput}
                required
              />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
        </>
      ) : (
        <div className="receipt-modal">
          <div className="receipt-content">
            <h2>🧾 Receipt</h2>
            <p><strong>Name:</strong> {receipt.name}</p>
            <p><strong>Email:</strong> {receipt.email}</p>
            <p><strong>Phone:</strong> {receipt.phone}</p>
            <p><strong>Total:</strong> ${receipt.total.toFixed(2)}</p>
            <p><strong>Timestamp:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
            <button onClick={() => window.location.reload()} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
