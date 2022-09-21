import express from "express";
import { verifyToken } from "../middleware/auth.js";

import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

//router.use(verifyToken);

router.post("/", verifyToken, addProduct);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);
router.get("/:id", getProduct);

export default router;
