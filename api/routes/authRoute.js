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
    resetPassword
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

const router = express.Router();
router.post("/register", createUser);
router.put("/update_password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.get("/all_users", getAllUsers);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logOut);
router.get("/:id", authMiddleware, isAdmin, getUserById);
router.delete("/:id", deleteUser);
router.put("/update_user", authMiddleware, updateUser);
router.put("/block_user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock_user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
