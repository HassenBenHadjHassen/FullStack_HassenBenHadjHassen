import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Card Header */}
      <div
        style={{
          padding: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "1.25",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </h2>
      </div>

      {/* Card Content */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          gap: "12px",
        }}
      >
        <motion.img
          src={product.thumbnail}
          alt={product.name}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            objectFit: "cover",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              padding: "4px 8px",
              fontSize: "0.875rem",
              fontWeight: "500",
              borderRadius: "4px",
              backgroundColor: "#fef3c7",
              color: "#f59e0b",
            }}
          >
            <Star
              style={{ width: "16px", height: "16px", marginRight: "4px" }}
            />
            {product.rating.rate}
          </span>
          <span
            style={{
              padding: "4px 8px",
              fontSize: "0.875rem",
              fontWeight: "500",
              borderRadius: "4px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#fff",
              color: "#374151",
            }}
          >
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div
        style={{
          padding: "16px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "8px 16px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#1d4ed8",
            border: "1px solid #93c5fd",
            borderRadius: "4px",
            backgroundColor: "#e0f2fe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ShoppingCart
            style={{
              width: "16px",
              height: "16px",
              marginRight: "8px",
            }}
          />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};
