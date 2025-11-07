const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address } = req.body;
    const order = new Order({
      userId: req.user._id,
      items,
      totalAmount,
      address,
    });
    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: "Order creation failed", details: err.message });
  }
};

// Get orders for logged-in user
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders", details: err.message });
  }
};

module.exports = { createOrder, getUserOrders };