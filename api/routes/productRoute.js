const express = require("express");
const {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createProduct);
router.put("/wishlist", authMiddleware, addToWishList);
router.put("/ratings", authMiddleware, rating);
router.get("/all", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);


module.exports = router;
