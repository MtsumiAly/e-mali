const express = require("express");
const { createOrder, getOrders, updateOrderStatus  } = require("../controller/orderCtrl")
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware")
const router = express.Router();

router.get("/my-orders", authMiddleware, getOrders);
router.post("/cash-order", authMiddleware, createOrder);
router.put("/update/:id", authMiddleware, isAdmin, updateOrderStatus);

module.exports = router;