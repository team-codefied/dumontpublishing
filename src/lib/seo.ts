import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL once the client's domain is
 * connected; until then the Vercel production URL is used automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const absoluteUrl = (path = "/") => `${siteUrl}${path}`;

type PageMeta = { title: string; description?: string; path: string };

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      title,
      description,
      url: path,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/brand/logo.png"),
  slogan: site.tagline,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: absoluteUrl("/"),
};

export type Crumb = { name: string; path: string };

export const breadcrumbJsonLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export const serviceJsonLd = (service: {
  title: string;
  metaDescription: string;
  slug: string;
  keyword: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  serviceType: service.keyword,
  description: service.metaDescription,
  url: absoluteUrl(`/${service.slug}/`),
  provider: { "@type": "Organization", name: site.name, url: absoluteUrl("/") },
});
