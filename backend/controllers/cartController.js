const Cart = require("../models/Cart");


const getCartByUser = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};


const createOrUpdateCart = async (req, res) => {
  try {
    const { userId, items } = req.body;
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { items },
      { new: true, upsert: true }
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart" });
  }
};

module.exports = { getCartByUser, createOrUpdateCart };