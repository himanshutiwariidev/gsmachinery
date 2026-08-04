import Image from "next/image";
import Link from "next/link";
import { getProductImages } from "@/lib/localImages";

export default function TopProductsSection() {
  const products = getProductImages();
  const Price = [
    {
      name: "2 Cavity Pet Blowing Machine",
      price: "3,90,000 INR/ Piece",
    },
    {
      name: "6 Cavity Fully Automatic handfeed Pet Bottle Making Machine",
      price: "10,00,000 INR/ Piece",
    },
    {
      name: "Automatic Blow Molding Machine",
      price: "14,00,000 INR/ Piece",
    },
    {
      name: "Fully Automatic Bottle Making Machine",
      price: "12,50,000 INR/ Piece",
    },
    {
      name: "Pharma Bottle Making Machine",
      price: "4,09,000 INR/ Piece",
    },
    {
      name: "Plastic Jar Making Machine",
      price: "4,90,000 INR/ Piece",
    },
  ];

  if (products.length === 0) return null;

  return (
    <section
      id="top-products"
      className="py-16 scroll-mt-[450] md:scroll-mt-[100] bg-[#f7f7f7]"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#232831]">
            Our Top Products
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, indx) => (
            <div
              key={product.src}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full aspect-square bg-[#faf6ec] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#232831] leading-snug min-h-[35px]">
                  {product.name}
                </h3>
                <span className="block text-[#b99631] font-semibold mt-2 ">
                  Price: {Price[indx].price}
                </span>

                <Link
                  href="#contact"
                  className="mt-4 inline-block bg-[#b99631] hover:bg-[#232831] text-white font-semibold uppercase tracking-wide px-6 py-2 rounded transition-colors duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
