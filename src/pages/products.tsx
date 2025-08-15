import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
return (
<section className="py-20 bg-muted/30">
<div className="container mx-auto px-4">
<h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
Our Products
</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{products.map((p) => (
<ProductCard key={p.id} {...p} />
))}
</div>
</div>
</section>
);
}
