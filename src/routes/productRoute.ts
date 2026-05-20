import express from "express";

import {
  getProduct,
  createProduct,
  showProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

// GET semua product
router.get("/", getProduct);

// GET product berdasarkan id
router.get("/:id", showProduct);

// POST tambah product
router.post("/", createProduct);

// PUT update product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

export default router;