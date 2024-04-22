import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const { name, price, rating, ratingCount } = req.body;

  if (!name || !price || !rating || !ratingCount) {
    return res.status(400).json({ message: "All fields must be provided" });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      rating,
      ratingCount,
    });

    await newProduct.save();

    res.status(201).json({
      name: newProduct.name,
      price: newProduct.price,
      rating: newProduct.rating,
      ratingCount: newProduct.ratingCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const totalProducts = products.length;
    
    res.json({ products, totalProducts });
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};

