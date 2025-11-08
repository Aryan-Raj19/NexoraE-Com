import Cart from "../models/cartModel.js";
import products from "../data/products.js";

export const getCart = async (req, res) => {
  const cart = await Cart.find();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  res.json({ cart, total });
};

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const existing = await Cart.findOne({ productId });
  if (existing) {
    existing.qty += qty;
    await existing.save();
    return res.json(existing);
  }

  const newItem = await Cart.create({
    productId,
    name: product.name,
    price: product.price,
    image: product.image,
    qty,
  });
  res.status(201).json(newItem);
};

export const removeFromCart = async (req, res) => {
  const item = await Cart.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json({ message: "Removed from cart" });
};
