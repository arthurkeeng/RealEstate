const {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productControllers");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", postProducts);

router.patch("/:name", updateProducts);

router.delete("/:name", deleteProducts);

module.exports = router;
