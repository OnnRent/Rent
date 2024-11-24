// Controllers/ProductController.js
import Product from '../Models/Product.js';

// Create new product
export const createProduct = async (req, res) => {
  const { title, image, price, description, bestseller, quantity } = req.body;
  try {
    const product = new Product({
      title,
      image,
      price,
      description,
      bestseller,
      quantity,
    });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product', error: err.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, image, price, description, bestseller, quantity } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, image, price, description, bestseller, quantity },
      { new: true }
    );
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
};

// Book a product (reduce quantity by 1)
export const bookProduct = async (req, res) => {
    const { id, quantityToBook } = req.body;  // Take the product ID and quantity to book from the request body
  
    try {
      // Find the product by ID
      const product = await Product.findById(id);
  
      // If the product doesn't exist
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Check if the product has enough stock
      if (product.quantity < quantityToBook) {
        return res.status(400).json({ message: 'Not enough stock available' });
      }
  
      // Update the quantity (reduce it by the number of booked items)
      product.quantity -= quantityToBook;
  
      // Save the updated product
      await product.save();
  
      // Respond with success message
      res.status(200).json({
        message: 'Product booked successfully',
        updatedQuantity: product.quantity,
        bookedQuantity: quantityToBook,
      });
  
    } catch (err) {
      res.status(500).json({ message: 'Failed to book product', error: err.message });
    }
  };


export const getBestSellers = async (req, res) => {
    try {
        // Find vehicles where bestseller is true
        const bestSellers = await Product.find({ bestseller: true });
        res.status(200).json(bestSellers); // Send the best-sellers list
    } catch (error) {
        res.status(500).json({ message: 'Error fetching best-sellers', error });
    }
};