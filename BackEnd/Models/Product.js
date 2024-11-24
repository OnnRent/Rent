// Models/product.js
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  bestseller: { type: Boolean, default: false },
  quantity: { type: Number, required: true },
});

const Product = model('Product', productSchema);

export default Product;
