import { Router } from "express";
import {
  getBookController,
  getBooksController,
  createBookController,
  deleteBookController,
  updateBookController
} from "../controllers/books.js";

const router = Router();

router.get("/", getBooksController);
router.get("/:id", getBookController);
router.post("/", createBookController);
router.delete("/:id", deleteBookController);
router.put("/:id", updateBookController);

export default router;
