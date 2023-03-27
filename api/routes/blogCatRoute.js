const express = require("express");
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories } = require("../controller/blogCatCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createCategory);
router.get("/all", authMiddleware, isAdmin, getAllCategories);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", getCategory);

module.exports = router;