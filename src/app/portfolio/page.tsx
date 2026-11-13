import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { home, portfolioPage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: portfolioPage.seoTitle,
  description: `${portfolioPage.title}.`,
  path: portfolioPage.path,
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Our Portfolio", path: portfolioPage.path }]}
        label={home.portfolio.title}
        title={portfolioPage.title}
        accent="Bring to Life"
      />
      <section className="pt-4 pb-32 lg:pb-48">
        <PortfolioGallery />
      </section>
      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
        covers={["the-kingdom-of-forgotten-stars", "a-thousand-little-moments"]}
      />
    </>
  );
}
