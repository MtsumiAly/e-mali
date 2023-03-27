const express = require("express");
const { createBrand, updateBrand, deleteBrand, getBrand, getAllBrands } = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createBrand);
router.get("/all", authMiddleware, isAdmin, getAllBrands);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);

module.exports = router;