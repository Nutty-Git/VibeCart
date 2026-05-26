const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// Seed products from Fake Store API
router.get("/seed", async (req, res) => {
  try {
    const customProducts = [
  {
    name: "Vibe Headphones",
    price: 99,
    description: "High quality sound for the best vibe.",
    image: "https://unsplash.com",
    category: "Electronics",
    countInStock: 10
  },
  {
    name: "Aura Streetwear Hoodie",
    price: 65,
    description: "Heavyweight organic cotton hoodie with a relaxed drop-shoulder fit.",
    image: "https://unsplash.com", // Fixed Image URL
    category: "Apparel",
    countInStock: 15
  },
  {
    name: "Minimalist Stainless Bottle",
    price: 28,
    description: "Double-walled vacuum insulation keeps your drinks ice-cold for 24 hours.",
    image: "https://unsplash.com",
    category: "Lifestyle",
    countInStock: 25
  },
  {
    name: "Cyber Glow Mechanical Keyboard",
    price: 89,
    description: "Compact 75% layout with hot-swappable linear switches and vibrant RGB.",
    image: "https://unsplash.com", // Fixed Image URL
    category: "Electronics",
    countInStock: 8
  },
  {
    name: "Nomad Waterproof Backpack",
    price: 75,
    description: "Sleek commuter pack featuring a dedicated 16-inch padded laptop sleeve.",
    image: "https://unsplash.com",
    category: "Lifestyle",
    countInStock: 12
  },
  {
    name: "Pulse Smart Fitness Band",
    price: 45,
    description: "Tracks heart rate, sleep quality, and workouts with a 10-day battery life.",
    image: "https://unsplash.com", // Fixed Image URL
    category: "Electronics",
    countInStock: 20
  },
  {
    name: "Matte Ceramic Mug Set",
    price: 24,
    description: "Set of two minimalist stackable ceramic mugs. Dishwasher safe.",
    image: "https://unsplash.com", // Fixed Image URL
    category: "Home",
    countInStock: 18
  },
  {
    name: "Horizon 4K Home Projector",
    price: 349,
    description: "Portable cinematic short-throw projector with built-in stereo speakers.",
    image: "https://unsplash.com",
    category: "Electronics",
    countInStock: 5
  },
  {
    name: "Classic Leather Passport Wallet",
    price: 35,
    description: "Handcrafted top-grain leather travel organizer with built-in RFID blocking.",
    image: "https://unsplash.com",
    category: "Lifestyle",
    countInStock: 14
  },
  {
    name: "Sandalwood Crackle Candle",
    price: 18,
    description: "Eco-friendly hand-poured soy wax candle featuring a soothing wooden wick.",
    image: "https://unsplash.com",
    category: "Home",
    countInStock: 30
  }
];

    await Product.deleteMany();
    const inserted = await Product.insertMany(customProducts);

    res.json({ message: "Seeded successfully", count: inserted.length });
  } catch (err) {
    res.status(500).json({ error: "Seeding failed", details: err.message });
  }
});

// Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Fetch product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

module.exports = router;
