import products from "../data/products.json";
import { Product } from "../interfaces/products.interface";

/**
 * Fetches all products.
 * @returns {Product[]} Array of all products.
 */
export const fetchAllProducts = (): Product[] | undefined => {
  console.log(products);
  try {
    if (!products || products.length === 0) {
      throw new Error("No products found.");
    }
    return products;
  } catch (error: any) {
    console.error("Error fetching all products:", error.message);
    return undefined;
  }
};

/**
 * Fetches a single product by its ID.
 * @param {number} id - The ID of the product to fetch.
 * @returns {Product | null} The product if found, otherwise undefined.
 */
export const fetchProductById = (id: number): Product | undefined => {
  console.log(products);
  try {
    const product = products.find((product) => product.id === id);

    if (!product) {
      console.warn(`Product with ID ${id} not found`);
      return undefined;
    }

    return product;
  } catch (error: any) {
    console.error(`Error fetching product with ID ${id}:`, error.message);
    return undefined;
  }
};
