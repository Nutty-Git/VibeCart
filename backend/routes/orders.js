const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { createOrder, getUserOrders } = require("../controllers/orderController");

// 🔹 Get all orders for logged-in user
router.get("/", protect, getUserOrders);

// 🔹 Create a new order
router.post("/", protect, createOrder);

module.exports = router;