import React, { useEffect, useState } from "react";
import { fetchProducts, addToCart } from "../api/api";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { loadCart } = useCart();

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  const handleAdd = async (id) => {
    await addToCart({ productId: id, qty: 1 });
    loadCart();
  };

  return (
    <div className="grid">
      {products.map(p => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.name} className="product-image" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => handleAdd(p.id)}>Add to Carts</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
