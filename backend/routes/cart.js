const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const CartItem = require('../models/CartItem');

// Get all items for logged-in user
router.get('/', protect, async (req, res) => {
  const items = await CartItem.find({ userId: req.user._id });
  res.json(items);
});

// Add item to cart
router.post('/add', protect, async (req, res) => {
  const { productId, name, price, quantity } = req.body;

  let item = await CartItem.findOne({ userId: req.user._id, productId });
  if (item) {
    item.quantity += quantity;
  } else {
    item = new CartItem({ userId: req.user._id, productId, name, price, quantity });
  }

  await item.save();
  res.json(item);
});

// Remove all items for user
router.delete('/clear', protect, async (req, res) => {
  await CartItem.deleteMany({ userId: req.user._id });
  res.json({ message: 'Cart cleared' });
});

module.exports = router;