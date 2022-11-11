import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

//AUTH-ROUTES---------------------------------------------
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
//USERS-ROUTES--------------------------------------------
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.delete("/logout", Logout);
router.patch("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);

export default router;
