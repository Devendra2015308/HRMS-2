import express from "express";
import { login, verify } from "../controllers/authController.js";
import { verifyUser } from "../middleware/authMiddleware.js"; // Use named import

const router = express.Router();

router.post("/login", login);
router.post("/verify", verifyUser, verify); // Use verifyUser

export default router;