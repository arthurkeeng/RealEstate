const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const CategorySchema = new mongoose.Schema({
  id: { type: String },

  name: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Category", CategorySchema);
