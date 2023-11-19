const {
  getCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");

const router = require("express").Router();

router.get("/", getCategory);
router.post("/", postCategory);

router.patch("/:name", updateCategory);

router.delete("/:name", deleteCategory);

module.exports = router;
