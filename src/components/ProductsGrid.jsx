"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export default function ProductsGrid({ categories }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredCategories = useMemo(() => {
    if (activeCategory === "all") return categories;
    return categories.filter((c) => c.slug === activeCategory);
  }, [categories, activeCategory]);

  const totalCount = categories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-5 py-2 text-sm font-semibold uppercase tracking-wide border transition-all duration-300 ${
            activeCategory === "all"
              ? "bg-[#b99631] text-white border-[#b99631]"
              : "bg-white text-[#232831] border-gray-300 hover:border-[#b99631] hover:text-[#b99631]"
          }`}
        >
          All ({totalCount})
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => setActiveCategory(category.slug)}
            className={`px-5 py-2 text-sm font-semibold uppercase tracking-wide border transition-all duration-300 ${
              activeCategory === category.slug
                ? "bg-[#b99631] text-white border-[#b99631]"
                : "bg-white text-[#232831] border-gray-300 hover:border-[#b99631] hover:text-[#b99631]"
            }`}
          >
            {category.name} ({category.products.length})
          </button>
        ))}
      </div>

      {/* Products grouped by category */}
      {filteredCategories.map((category) => (
        <div key={category.slug} className="mb-14">
          <h2 className="text-[22px] font-bold text-[#232831] mb-6 border-l-4 border-[#b99631] pl-4">
            {category.name}
          </h2>

          {category.products.length === 0 ? (
            <p className="text-sm text-gray-500 pl-4">
              No products listed in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
