import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

/** Canonical, indexable pages only. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    ...services.map((service) => ({ path: `/${service.slug}/`, priority: 0.8 })),
    { path: "/about-us/", priority: 0.7 },
    { path: "/portfolio/", priority: 0.7 },
    { path: "/contact-us/", priority: 0.7 },
    { path: "/blog/", priority: 0.5 },
  ];

  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
