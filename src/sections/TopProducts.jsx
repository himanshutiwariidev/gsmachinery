import Image from "next/image";
import Link from "next/link";
import { getProductImages } from "@/lib/localImages";

export default function TopProductsSection() {
  const products = getProductImages();

  if (products.length === 0) return null;

  return (
    <section id="top-products" className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#232831]">
            Our Top Products
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.src}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-square bg-[#faf6ec] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#232831] leading-snug">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block bg-[#b99631] hover:bg-[#232831] text-white font-semibold uppercase tracking-wide px-8 py-3 transition-colors duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
