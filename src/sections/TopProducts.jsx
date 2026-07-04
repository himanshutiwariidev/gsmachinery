import { getCategories } from "@/lib/products";
import TopProductsTabs from "@/components/TopProductsTabs";

export default function TopProductsSection() {
  const categories = getCategories();

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#232831]">
            Our Top Products
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
        </div>

        <TopProductsTabs categories={categories} />
      </div>
    </section>
  );
}
