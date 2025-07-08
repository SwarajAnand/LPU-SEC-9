const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog,
} = require("../controller/blog.controller");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", auth, createBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;

