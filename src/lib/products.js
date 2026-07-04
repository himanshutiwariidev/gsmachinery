import data from "../../public/products.json";

export function getCategories() {
  return data.categories;
}

export function getCategoryBySlug(slug) {
  return data.categories.find((c) => c.slug === slug) || null;
}

export function getAllProducts() {
  return data.categories.flatMap((c) =>
    c.products.map((p) => ({ ...p, category: c.name, categorySlug: c.slug }))
  );
}

export function getProductBySlug(slug) {
  for (const c of data.categories) {
    const product = c.products.find((p) => p.slug === slug);
    if (product) {
      return { ...product, category: c.name, categorySlug: c.slug };
    }
  }
  return null;
}
