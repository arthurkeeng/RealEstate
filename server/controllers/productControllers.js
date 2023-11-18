const Products = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ products });
  } catch (err) {
    res.json({ msg: "something went wrong" });
  }
};

const postProducts = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({ product: newProduct, msg: "added successfully" });
  } catch (err) {
    res.json({ msg: "something just happened" });
  }
};
const updateProducts = async (req, res) => {
  const name = req.params.name;
  try {
    const updatedProduct = await Products.findOneAndUpdate({ name }, req.body, {
      new: true,
      runValidators: true,
    });
    // if (!updatedProduct) {
    //   res.status(201).json({ msg: "no such product exists" });
    // }
    res
      .status(201)
      .json({ product: updatedProduct, msg: "updated successfully" });
  } catch (err) {
    res.json({ msg: "something happened" });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const name = req.params.name;

    const deletedProduct = await Products.findOneAndDelete({ name });

    res.json({ product: deletedProduct, msg: "product has been deleted" });
  } catch (err) {
    res.json({ msg: "product could not be deleted" });
  }
};
module.exports = { getProducts, postProducts, updateProducts, deleteProducts };
