const express = require("express");
const router = express.Router();

const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/upload");
const productController = require("../Controllers/product.controller");

// =================== CREATE PRODUCT ===================
router.post("/", auth, upload.single("image"), productController.createProduct);

// =================== GET ALL PRODUCTS ===================
router.get("/", productController.getAllProducts);

// =================== GET PRODUCT BY ID ===================
router.get("/:id", productController.getProductById);

// =================== GET MY PRODUCTS ===================
router.get("/user/my", auth, productController.getMyProducts);

// =================== UPDATE PRODUCT ===================
router.put(
  "/:id",
  auth,
  upload.single("image"),
  productController.updateProduct
);

// =================== DELETE PRODUCT ===================
router.delete("/:id", auth, productController.deleteProduct);

router.get("/search/category", productController.searchByCategory);

module.exports = router;
