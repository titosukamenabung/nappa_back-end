import express  from "express";
import { getProduct,createProduct } from "../controllers/productControllers";

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);

export default router;
