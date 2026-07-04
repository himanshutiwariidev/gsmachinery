"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";

export default function TopProductsTabs({ categories }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const trackRef = useRef(null);

  const scrollByAmount = (amount) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  const nonEmptyCategories = useMemo(
    () => categories.filter((c) => c.products.length > 0),
    [categories]
  );

  const products = useMemo(() => {
    if (activeCategory === "all") {
      return nonEmptyCategories.map((c) => ({
        ...c.products[0],
        category: c.name,
        categorySlug: c.slug,
      }));
    }

    const category = nonEmptyCategories.find((c) => c.slug === activeCategory);
    if (!category) return [];
    return category.products.map((p) => ({
      ...p,
      category: category.name,
      categorySlug: category.slug,
    }));
  }, [activeCategory, nonEmptyCategories]);

  return (
    <div>
      {/* Filter Tabs — horizontal slider */}
      <div className="relative mb-12">
        <button
          onClick={() => scrollByAmount(-320)}
          aria-label="Scroll tabs left"
          className=" flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-300 text-[#232831] hover:bg-[#b99631] hover:border-[#b99631] hover:text-white transition-all duration-300 items-center justify-center shadow-md"
        >
          <FaChevronLeft size={12} />
        </button>

        <div
          ref={trackRef}
          className="flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide px-1 py-1 scroll-smooth"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 whitespace-nowrap px-5 py-2 text-sm font-semibold uppercase tracking-wide border transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#b99631] text-white border-[#b99631]"
                : "bg-white text-[#232831] border-gray-300 hover:border-[#b99631] hover:text-[#b99631]"
            }`}
          >
            Top Picks
          </button>
          {nonEmptyCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`shrink-0 whitespace-nowrap px-5 py-2 text-sm font-semibold uppercase tracking-wide border transition-all duration-300 ${
                activeCategory === category.slug
                  ? "bg-[#b99631] text-white border-[#b99631]"
                  : "bg-white text-[#232831] border-gray-300 hover:border-[#b99631] hover:text-[#b99631]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollByAmount(320)}
          aria-label="Scroll tabs right"
          className="flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-300 text-[#232831] hover:bg-[#b99631] hover:border-[#b99631] hover:text-white transition-all duration-300 items-center justify-center shadow-md"
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-block bg-[#b99631] hover:bg-[#232831] text-white font-semibold uppercase tracking-wide px-8 py-3 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
