import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaIndustry } from "react-icons/fa";

export default function ProductCard({ product }) {
  const thumbnail = product.images?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-stretch"
    >
      {/* Text content */}
      <div className="relative z-10 flex-1 min-w-0 p-6 flex flex-col justify-between">
        <div>
          {product.category && (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#b99631]">
              {product.category}
            </p>
          )}
          <div className="md:hidden relative w-full h-50 sm:h-auto sm:w-[42%] shrink-0  overflow-hidden">
        <span className="pointer-events-none absolute -right-8 -top-8 w-40 h-40 rounded-full border-[10px] border-[#b99631]/10"></span>
        <span className="pointer-events-none absolute -right-2 bottom-4 w-16 h-16 rounded-full bg-[#b99631]/5"></span>

        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <FaIndustry className="text-5xl text-[#c3ab5d]/60" />
          </div>
        )}
      </div>
          <h3 className="mt-1 text-[16px] font-bold text-[#232831] leading-snug line-clamp-2">
            {product.name}
          </h3>
          <div className="w-8 h-[3px] bg-[#b99631] my-3"></div>
          {product.price && (
            <p className="text-sm font-semibold text-gray-600">{product.price}</p>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[#c3ab5d] text-[#b99631] text-xs font-semibold uppercase tracking-wide px-4 py-2 group-hover:bg-[#b99631] group-hover:text-white transition-all duration-300">
          View Details
          <FaArrowRight size={11} />
        </span>
      </div>

      {/* Image side */}
      <div className="hidden md:block relative w-full h-50 sm:h-auto sm:w-[42%] shrink-0  overflow-hidden">
        <span className="pointer-events-none absolute -right-8 -top-8 w-40 h-40 rounded-full border-[10px] border-[#b99631]/10"></span>
        <span className="pointer-events-none absolute -right-2 bottom-4 w-16 h-16 rounded-full bg-[#b99631]/5"></span>

        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <FaIndustry className="text-5xl text-[#c3ab5d]/60" />
          </div>
        )}
      </div>
    </Link>
  );
}
