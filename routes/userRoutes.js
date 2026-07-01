const express = require("express");
const {
    registerUser,
    loginUser,
    getAllUsers,
    promoteUser,
    blockUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin Routes
router.get("/", protect, authorizeRoles("admin"), getAllUsers);
router.put("/promote/:id", protect, authorizeRoles("admin"), promoteUser);
router.put("/block/:id", protect, authorizeRoles("admin"), blockUser);

module.exports = router;