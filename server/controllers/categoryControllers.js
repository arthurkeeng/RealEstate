const Category = require("../models/categories");

const getCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ category });
  } catch (err) {
    res.json({ msg: "something went wrong" });
  }
};

const postCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json({ category: newCategory, msg: "added successfully" });
  } catch (err) {
    res.json({ msg: "something just happened" });
  }
};
const updateCategory = async (req, res) => {
  const name = req.params.name;
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { name },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    // if (!updatedProduct) {
    //   res.status(201).json({ msg: "no such product exists" });
    // }
    res
      .status(201)
      .json({ category: updatedCategory, msg: "updated successfully" });
  } catch (err) {
    res.json({ msg: "something happened" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const name = req.params.name;

    const deletedCategory = await Category.findOneAndDelete({ name });

    res.json({ category: deletedCategory, msg: "category has been deleted" });
  } catch (err) {
    res.json({ msg: "category could not be deleted" });
  }
};
module.exports = { getCategory, postCategory, updateCategory, deleteCategory };
