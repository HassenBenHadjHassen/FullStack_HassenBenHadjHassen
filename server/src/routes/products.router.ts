import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";

const router = Router();

/* Fetch All Products */
router.get("/", ProductsController.getInstance().fetchAllProducts);

/* Fetch Single Products Using Its ID */
router.get("/:id", ProductsController.getInstance().fetchSingleProduct);

export default router;
