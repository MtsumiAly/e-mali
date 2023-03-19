const express = require("express");
const { createUser, getAllUsers, loginUserCtrl, getUserById, deleteUser, updateUser} = require("../controller/userCtrl")
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all_users", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
module.exports = router;
