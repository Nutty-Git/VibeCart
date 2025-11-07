const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const CartItem = require('../models/CartItem');
const Order = require('../models/Order');

// Convert cart to order
router.post('/', protect, async (req, res) => {
  const cartItems = await CartItem.find({ userId: req.user._id });
  if (!cartItems.length) return res.status(400).json({ error: 'Cart is empty' });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = new Order({
    userId: req.user._id,
    items: cartItems.map(item => ({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total,
  });

  await order.save();
  await CartItem.deleteMany({ userId: req.user._id });

  res.json({ message: 'Order placed', order });
});

module.exports = router;