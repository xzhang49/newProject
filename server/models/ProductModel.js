const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, },
    image: { type: String, required: true },
    categories: { type: String },
    count: { type: Number, required: true, default: 0, },
    price: { type: Number, required: true, default: 0, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);