import { Suspense } from "react";
import { getCategories } from "@/lib/products";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata = {
  title: "All Products | GS Machinery",
  description: "Browse all plastic machinery products by category.",
};

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-[32px] font-extrabold text-[#232831]">
            All Products
          </h1>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
        </div>

        <Suspense fallback={null}>
          <ProductsGrid categories={categories} />
        </Suspense>
      </div>
    </section>
  );
}
