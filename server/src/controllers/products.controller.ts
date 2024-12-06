import { Request, Response, NextFunction } from "express";
import { fetchAllProducts, fetchProductById } from "../service/product.service";
import { ERROR_MESSAGE, STATUS_CODES } from "../constants/status-code";

export class ProductsController {
  private static instance: ProductsController;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProductsController();
    return this.instance;
  }

  public async fetchAllProducts(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = fetchAllProducts();

      res.status(STATUS_CODES.OK).json({ success: true, data: products });
    } catch (error) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ success: false, message: ERROR_MESSAGE.NO_PRODUCTS_FOUND });
    }
  }

  public async fetchSingleProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const productId = parseInt(id, 10);

      if (isNaN(productId)) {
        res
          .status(STATUS_CODES.BAD_REQUEST)
          .json({ success: false, message: ERROR_MESSAGE.INVALID_PRODUCT_ID });
        return;
      }

      const product = fetchProductById(productId);

      if (!product) {
        res
          .status(STATUS_CODES.NOT_FOUND)
          .json({ success: false, message: ERROR_MESSAGE.NO_PRODUCT_FOUND });
      }

      res.status(STATUS_CODES.OK).json({ success: true, data: product });
    } catch (error) {
      next(error);
    }
  }
}
