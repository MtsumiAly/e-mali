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
    handleRefreshToken, logOut
} = require("../controller/userCtrl")
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

const router = express.Router();
router.post("/register", createUser);
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
