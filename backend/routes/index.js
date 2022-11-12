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
import {
  addCategories,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/Categories.js";

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
//CATEGORIES-ROUTES--------------------------------------------
router.get("/categories", verifyToken, getCategories);
router.post("/categories", verifyToken, addCategories);
router.get("/categories/:id", verifyToken, getCategoryById);
router.patch("/categories/:id", verifyToken, updateCategory);
router.delete("/categories/:id", verifyToken, deleteCategory);

export default router;
