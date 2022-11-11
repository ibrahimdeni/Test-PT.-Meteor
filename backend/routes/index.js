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
import {
  addBooks,
  deleteBook,
  getBookById,
  getBooks,
  updateBooks,
} from "../controllers/Books.js";

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
//BOOKS-ROUTES--------------------------------------------
router.get("/books", verifyToken, getBooks);
router.post("/books", verifyToken, addBooks);
router.get("/books/:id", verifyToken, getBookById);
router.patch("/books/:id", verifyToken, updateBooks);
router.delete("/books/:id", verifyToken, deleteBook);

export default router;
