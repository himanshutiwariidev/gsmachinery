import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function readImageFolder(folder) {
  const dir = path.join(process.cwd(), "public", folder);
  let files = [];

  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => ({
      src: `/${folder}/${file}`,
      name: path.basename(file, path.extname(file)).replace(/[-_]+/g, " ").trim(),
    }));
}

export function getProductImages() {
  return readImageFolder("products");
}

export function getGalleryImages() {
  return readImageFolder("gallery");
}
