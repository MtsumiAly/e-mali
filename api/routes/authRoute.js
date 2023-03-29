const express = require("express");
const {
    createUser,
    getAllUsers,
    loginUserCtrl,
    getUserById,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logOut,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/register", createUser);
router.put("/update_password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);

router.get("/my-cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.put("/reset-password/:token", resetPassword);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/update_user", authMiddleware, updateUser);

router.get("/all_users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logOut);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/:id", authMiddleware, isAdmin, getUserById);
router.delete("/:id", deleteUser);
router.put("/block_user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock_user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
