const express = require("express");
const { createOrder, getOrders, updateOrderStatus, getOrdersAdmin  } = require("../controller/orderCtrl")
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware")
const router = express.Router();

router.get("/my-orders", authMiddleware, getOrders);
router.post("/cash-order", authMiddleware, createOrder);
router.get("/all", authMiddleware, isAdmin, getOrdersAdmin);
router.put("/update/:id", authMiddleware, isAdmin, updateOrderStatus);

module.exports = router;