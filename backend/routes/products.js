const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const axios = require("axios");

// Seed products from Fake Store API
router.get("/seed", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products?limit=10"
    );

    const formatted = data.map((item) => ({
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
    }));

    await Product.deleteMany();
    const inserted = await Product.insertMany(formatted);

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
