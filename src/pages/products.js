// src/pages/products.js (Gatsby)
import React from "react";
import ProductCard from "../components/ProductCard"; // relative path (no @)

const products = [
  {
    id: "app-001",
    title: "Base44 – Viral Hooks AI",
    price: 0,
    rating: 5,
    reviewCount: 412,
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&h=600&fit=crop&crop=center",
    category: "app",
    isOnSale: false,
    affiliate: false,
    link: "https://YOUR_BASE44_APP_LINK_1"
  },
  {
    id: "app-002",
    title: "Base44 – Caption Forge",
    price: 0,
    rating: 4.9,
    reviewCount: 233,
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop&crop=center",
    category: "app",
    isOnSale: false,
    affiliate: false,
    link: "https://YOUR_BASE44_APP_LINK_2"
  },
  {
    id: "tee-001",
    title: "Freedom Pro’s – Off-Grid Tee",
    price: 24.99,
    rating: 4.8,
    reviewCount: 86,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=600&fit=crop&crop=center",
    category: "tshirt"
  },
  {
    id: "prod-001",
    title: "Curated Gadget",
    price: 49,
    rating: 4.6,
    reviewCount: 58,
    image:
      "https://images.unsplash.com/photo-1510557880182-3b1b6f3b0f39?w=800&h=600&fit=crop&crop=center",
    category: "dropship", // your card shows this as "Products"
    isOnSale: true,
    originalPrice: 79
  }
];

export default function ProductsPage() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
