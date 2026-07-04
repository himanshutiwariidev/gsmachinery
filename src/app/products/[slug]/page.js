import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | GS Machinery`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const specEntries = Object.entries(product.specifications || {});

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-[#b99631]">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="hover:text-[#b99631]"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#232831]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative w-full aspect-square bg-gray-50 border border-gray-200">
              {product.images?.[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  unoptimized
                  priority
                />
              )}
            </div>

            {product.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-gray-50 border border-gray-200"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 2}`}
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b99631]">
              {product.category}
            </p>
            <h1 className="mt-2 text-[28px] font-extrabold text-[#232831]">
              {product.name}
            </h1>

            {product.price && (
              <p className="mt-4 text-2xl font-bold text-[#b99631]">
                {product.price}
              </p>
            )}

            {product.description && (
              <p className="mt-6 text-[15px] leading-7 text-gray-600">
                {product.description}
              </p>
            )}

            <a
              href="tel:+919910050448"
              className="mt-8 inline-block bg-[#b99631] hover:bg-[#232831] text-white font-semibold uppercase tracking-wide px-8 py-3 transition-colors duration-300"
            >
              Contact for Enquiry
            </a>

            {specEntries.length > 0 && (
              <div className="mt-10">
                <h2 className="text-[18px] font-bold text-[#232831] mb-4">
                  Specifications
                </h2>
                <div className="border border-gray-200 divide-y divide-gray-200">
                  {specEntries.map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-2 text-sm odd:bg-gray-50"
                    >
                      <div className="px-4 py-3 font-medium text-[#232831]">
                        {key}
                      </div>
                      <div className="px-4 py-3 text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
