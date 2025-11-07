const Order = require("../models/Order");


const processCheckout = async (req, res) => {
  try {
    const { userId, cartItems, totalAmount, address } = req.body;
    const order = new Order({ userId, items: cartItems, totalAmount, address });
    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: "Checkout failed" });
  }
};

module.exports = { processCheckout };