/ src/pages/products.js
import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

// 🔖 Category labels (NO "drop shipping" ever shown)
const LABEL = (cat) =>
cat === "dropship" ? "Products"
: cat === "tshirt" ? "Apparel"
: cat === "app" ? "App"
: cat?.[0]?.toUpperCase() + cat?.slice(1) || "Product";

// 🛒 Your catalog — add as many as you want.
// Tip: category must be one of: "app" | "tshirt" | "audio" | "affiliate" | "dropship"
// (Your ProductCard already turns "dropship" into "Products" on the badge)
const products = [
// —— Base44 Apps ——
{
id: "app-001",
title: "Base44 – Viral Hooks AI",
price: 0,
rating: 5,
reviewCount: 412,
image:
"https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&h=600&fit=crop",
category: "app",
link: "https://YOUR_BASE44_APP_LINK_1"
},
{
id: "app-002",
title: "Base44 – Caption Forge",
price: 0,
rating: 4.9,
reviewCount: 233,
image:
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
category: "app",
link: "https://YOUR_BASE44_APP_LINK_2"
},
{
id: "prod-002",
title: "Your Product",
price: 39.99,
rating: 4.7,
reviewCount: 312,
image: "https://…",
category: "dropship", // shows as "Products" — never says drop shipping
isOnSale: true, // optional
originalPrice: 59.99 // optional
}id: "app-005",
title: "Base44 – XYZ",
price: 0,
rating: 5,
reviewCount: 120,
image: "https://…",
category: "app", // or "affiliate"
link: "https://YOUR-URL"
}// —— Books (Amazon, etc.) ——
{
id: "book-001",
title: "Atomic Habits (Hardcover)",
price: 14.99,
rating: 4.8,
reviewCount: 98021,
image:
"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
category: "affiliate",
// put your affiliate/amazon link here:
link: "https://www.amazon.com/dp/XXXXXXXX?tag=YOUR_TAG"
},

// —— Apparel ——
{
id: "tee-001",
title: "Freedom Pro’s – Off-Grid Tee",
price: 24.99,
rating: 4.8,
reviewCount: 86,
image:
"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&h=600&fit=crop",
category: "tshirt"
},

// —— General Products (formerly “dropship”) ——
{
id: "prod-001",
title: "Portable Solar Charger",
price: 59.99,
rating: 4.6,
reviewCount: 245,
image:
"https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=600&fit=crop",
category: "dropship", // will ALWAYS display as "Products"
isOnSale: true,
originalPrice: 79.99
}
];

// ——————————————————————————————————————————————————————

export default function ProductsPage({ location }) {
// URL filters (?category=app, etc.)
const params = new URLSearchParams(location?.search || "");
const urlCategory = (params.get("category") || "").toLowerCase();

// Search box (client-side)
const [q, setQ] = useState("");

const visible = useMemo(() => {
const byCat = urlCategory
? products.filter((p) => p.category.toLowerCase() === urlCategory)
: products;
if (!q.trim()) return byCat;
const needle = q.toLowerCase();
return byCat.filter(
(p) =>
p.title.toLowerCase().includes(needle) ||
LABEL(p.category).toLowerCase().includes(needle)
);
}, [urlCategory, q]);

const heading = urlCategory
? `Showing: ${LABEL(urlCategory)}`
: "All Products";

return (
<main className="container py-10">
<div className="flex items-center justify-between gap-4 mb-6" style={{flexWrap:"wrap"}}>
<h1 className="text-2xl font-bold m-0">{heading}</h1>

<input
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Search products, apps, books…"
className="border rounded px-3 py-2"
style={{minWidth:260}}
/>
</div>

{visible.length === 0 ? (
<p className="text-muted-foreground">No items match your search.</p>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{visible.map((p) => (
<ProductCard key={p.id} {...p} />
))}
</div>
)}
</main>
);
}
