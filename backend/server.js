// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.get("/hello", (req, res) => {
  res.send("Hello Shruti, your API is working!");
});

// Routes
const cartRoutes = require("./routes/cart");
const authRoutes = require("./routes/auth");
const checkoutRoutes = require("./routes/checkout");
const orderRoutes = require("./routes/orders");
const productRoutes = require("./routes/products");

app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("🔥 Unhandled Rejection:", reason);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
