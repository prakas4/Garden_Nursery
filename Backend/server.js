const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("MongoDB connected successfully"); })
    .catch((err) => { console.error("MongoDB connection failed", err); })


const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    reviewes: String,
    category: String,
});
const Product = mongoose.model("Product", ProductSchema);

const CartSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
});
const Cart = mongoose.model("Cart", CartSchema);


app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

app.post("/products", async (req, res) => {
    try {
        const { name, price, image, reviewes, category } = req.body;
        const newProduct = new Product({ name, price, image, reviewes, category });
        await newProduct.save();
        res.json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
});

// API for post the cart items to the backend

app.post("/cart", async (req, res) => {
    const { productId, quantity } = req.body;
  
    try {
      let existingCartItem = await Cart.findOne({ productId });
  
      if (existingCartItem) {
        // If item exists, update quantity instead of adding a new one
        existingCartItem.quantity += quantity;
        await existingCartItem.save();
        return res.json(existingCartItem);
      }
  
      // If item does not exist, create a new cart entry
      const newCartItem = new Cart({ productId, quantity });
      await newCartItem.save();
  
      res.status(201).json(newCartItem);
    } catch (error) {
      res.status(500).json({ message: "Error adding to cart" });
    }
  });
  

app.get("/cart", async (req, res) => {
    try {
        const cartItems = await Cart.find().populate("productId");
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart items" });
    }
});


// Update the Cart items

app.put("/cart/:id", async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
  
    try {
      const cartItem = await Cart.findById(id);
      
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }
  
      // Ensure quantity is at least 1
      if (quantity < 1) {
        return res.status(400).json({ message: "Quantity must be at least 1" });
      }
  
      cartItem.quantity = quantity;
      await cartItem.save();
  
      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Error updating cart item", error });
    }
  });

  
  // Delete the cart items by id

  app.delete("/cart/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const cartItem = await Cart.findById(id);
  
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }
  
      await Cart.findByIdAndDelete(id);
  
      res.json({ message: "Cart item deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting cart item", error });
    }
  });
  
// Delete the total cart items

  app.delete("/cart", async (req, res) => {
    try {
      await Cart.deleteMany({});
      res.json({ message: "All cart items deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error clearing cart", error });
    }
  });
  


app.listen(5000, () => console.log(`Server running on ${process.env.PORT}`));
