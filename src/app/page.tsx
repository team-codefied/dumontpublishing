import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ProcessRail } from "@/components/home/ProcessRail";
import { Genres } from "@/components/home/Genres";
import { PortfolioShelf } from "@/components/home/PortfolioShelf";
import { HomeFaqs, Insights } from "@/components/home/Closing";
import { CtaBand } from "@/components/ui/CtaBand";
import { Marquee } from "@/components/ui/Marquee";
import { home, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: home.seoTitle,
  description: home.metaDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={site.alternativeTaglines}
        className="bg-navy py-6 font-display text-[clamp(1.6rem,2.6vw,2.6rem)] text-ivory italic"
      />
      <BrandIntro />
      <ServicesIndex />
      <WhyChoose />
      <ProcessRail />
      <Genres />
      <PortfolioShelf />
      <Insights />
      <HomeFaqs />
      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
      />
    </>
  );
}
