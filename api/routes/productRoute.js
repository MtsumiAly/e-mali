const express = require("express");
const {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware")
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createProduct);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProducts);

module.exports = router;
