import { getAllProducts } from "@/lib/products";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function GallerySection() {
  const products = getAllProducts().filter((p) => p.images?.[0]);
  const gallery = products.slice(0, 12);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#232831]">
            Gallery
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
        </div>

        <GalleryCarousel items={gallery} />
      </div>
    </section>
  );
}
