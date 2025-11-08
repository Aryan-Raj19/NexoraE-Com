export const checkout = async (req, res) => {
  const { cartItems, name, email, phone } = req.body;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const timestamp = new Date().toISOString();

  res.json({
    message: "Checkout successful",
    receipt: {
      name,
      email,
      phone,
      total,
      timestamp,
    },
  });
};
