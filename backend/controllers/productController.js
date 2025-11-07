const Product = require("../models/Product");
const axios = require("axios");


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};


const seedProducts = async (req, res) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products?limit=10");
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
};

module.exports = { getAllProducts, getProductById, seedProducts };