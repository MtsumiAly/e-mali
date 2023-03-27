const express = require("express");
const { createCoupon, getCouponById, deleteCoupon, updateCoupon, getAllCoupons } = require("../controller/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/new", authMiddleware, isAdmin, createCoupon);
router.get("/all", authMiddleware, isAdmin, getAllCoupons);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);
router.get("/:id", getCouponById);

module.exports = router;