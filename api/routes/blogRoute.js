const express = require("express");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog } = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createBlog);
router.get("/all", getAllBlogs);
router.put("/likes", authMiddleware, likeBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);


module.exports = router;