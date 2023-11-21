const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ProductSchema = new mongoose.Schema({
  id: { type: String },
  amount: {
    type: Number,
    default: 1,
  },
  category: { type: String, required: true },
  inCart: { type: Boolean, default: false },
  image: { type: String },
  quantity: { type: Number, required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Array, required: true },
  color: { type: Array, required: true },
});

module.exports = mongoose.model("Products", ProductSchema);
