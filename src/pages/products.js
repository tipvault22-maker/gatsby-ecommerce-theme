// src/pages/products.js
import React from "react";
import ProductCard from "../components/ProductCard";

/**
* MASTER CATALOG
* - Add as many items as you want.
* - NEVER says "drop shipping" (use category: "dropship" and your ProductCard
* will display it as "Products" per your earlier change).
* - For Amazon/affiliate items: set category: "affiliate", affiliate: true, link: "https://..."
* - For apps: set category: "app" and include link.
*/

const products = [
// ——— Base44 Apps ———
{
id: "app-001",
title: "Base44 – Viral Hooks AI",
price: 0,
rating: 5,
reviewCount: 412,
image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&h=600&fit=crop",
category: "app",
link: "https://YOUR_BASE44_APP_LINK_1"
},
{
id: "app-002",
title: "Base44 – Caption Forge",
price: 0,
rating: 4.9,
reviewCount: 233,
image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
category: "app",
link: "https://YOUR_BASE44_APP_LINK_2"
},

// ——— Books / Amazon (Affiliate) ———
{
id: "book-001",
title: "Atomic Habits (Hardcover)",
price: 14.99,
rating: 4.8,
reviewCount: 98021,
image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
category: "affiliate",
affiliate: true,
link: "https://www.amazon.com/dp/ASIN?tag=YOUR_TAG"
},

// ——— Apparel ———
{
id: "tee-001",
title: "Freedom Pro’s – Off-Grid Tee",
price: 24.99,
rating: 4.8,
reviewCount: 86,
image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=600&fit=crop",
category: "tshirt"
},

// ——— General Products (formerly “dropship”, displays as “Products”) ———
{
id: "prod-001",
title: "Portable Solar Charger",
price: 59.99,
rating: 4.6,
reviewCount: 245,
image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=600&fit=crop",
category: "dropship", // your card shows this as "Products"
isOnSale: true,
originalPrice: 79.99
}
];

export default function ProductsPage() {
return (
<main className="container py-10">
<h1 className="text-2xl font-bold mb-6">All Products</h1>

{products.length === 0 ? (
<p className="text-muted-foreground">No items yet.</p>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{products.map((p) => (
<ProductCard key={p.id} {...p} />
))}
</div>
)}
</main>
);
}
