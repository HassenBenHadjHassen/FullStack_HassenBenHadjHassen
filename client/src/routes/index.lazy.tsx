import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import "./index.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to Our Store</h1>
      <p className="homepage-description">
        Discover the best products at unbeatable prices.
      </p>
      <Button asChild className="homepage-button">
        <Link href="/products">Shop Now</Link>
      </Button>
    </div>
  );
}
