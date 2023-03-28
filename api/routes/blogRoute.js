const express = require("express");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createBlog);
router.get("/all", getAllBlogs);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislike", authMiddleware, dislikeBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 10), blogImgResize, uploadImages);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);


module.exports = router;