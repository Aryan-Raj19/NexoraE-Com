import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  qty: { type: Number, default: 1 },
});

export default mongoose.model("Cart", cartSchema);
