import { ProductsGrid } from "@/components/ProductGrid/ProductGrid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

export const Route = createLazyFileRoute("/products")({
  component: Products,
});

function Products() {
  return (
    <QueryClientProvider client={queryClient}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Products
        </motion.h1>
        <ProductsGrid />
      </motion.div>
    </QueryClientProvider>
  );
}
