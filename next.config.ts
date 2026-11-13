import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The content strategy specifies trailing-slash URLs (e.g. /book-writing-services/).
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
