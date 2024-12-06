import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Product, ApiResponse } from "@/types/products";
import { ProductCard } from "../ProductCard/ProductCard";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:3001/api/products");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const apiResponse: ApiResponse = await response.json();

    if (!apiResponse.success) {
      throw new Error(apiResponse.message || "Failed to fetch products");
    }

    return apiResponse.data as Product[];
  } catch (err) {
    console.error("Failed to fetch products:", err);
    throw err;
  }
};

export const ProductsGrid: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      >
        {[...Array(8)].map((_, index) => (
          <Card
            key={index}
            className="animate-pulse shadow-md rounded-lg overflow-hidden"
          >
            <CardContent className="pt-6">
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error loading products. Please try again later.
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
