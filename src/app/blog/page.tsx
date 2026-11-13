import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { getService } from "@/content/services";
import { blogPage, home } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: blogPage.seoTitle,
  description: `${home.insights.title}.`,
  path: blogPage.path,
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: blogPage.path }]}
        label={home.insights.label}
        title={blogPage.title}
        accent="Resources for Authors"
      >
        <p className="lede text-charcoal/80">{home.insights.title}</p>
      </PageHero>

      {/* Nine subject areas, each linked to its related service */}
      <section className="py-24 lg:py-36">
        <div className="shell">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogPage.topics.map((topic, index) => {
              const service = getService(topic.service)!;
              return (
                <li key={topic.name} className="relative">
                  <span data-line data-delay={(index % 3) * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                  <Link
                    href={`/${service.slug}/`}
                    data-fade
                    data-delay={(index % 3) * 0.1 + 0.1}
                    className="group flex h-full flex-col pt-7 pb-12 text-navy"
                  >
                    <span className="flex items-start justify-between">
                      <span className="folio text-lg text-gold-ink">{String(index + 1).padStart(2, "0")}</span>
                      <ArrowUpRight
                        aria-hidden
                        strokeWidth={1.25}
                        className="size-6 text-gold-ink transition-transform duration-700 ease-expo group-hover:rotate-45"
                      />
                    </span>
                    <h2 className="display-2 mt-6 transition-transform duration-700 ease-expo group-hover:translate-x-2">
                      {topic.name}
                    </h2>
                    <p className="mt-4 max-w-xs text-[0.975rem] leading-relaxed text-charcoal/75">{topic.text}</p>
                    <span className="eyebrow mt-6 text-[0.68rem] text-gold-ink">{service.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Publishing Guides */}
      <section id="publishing-guides" className="bg-navy py-24 text-ivory lg:py-36">
        <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel tone="light">{home.insights.label}</SectionLabel>
              <Words
                as="h2"
                text="Publishing Guides"
                accent="Guides"
                accentClassName="italic text-gold"
                className="display-1 mt-7"
              />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {home.insights.articles.map((article, index) => (
              <li key={article} className="relative">
                <span data-line className="absolute inset-x-0 top-0 h-px bg-(--rule-light)" />
                <div data-fade data-y="20" className="flex items-start gap-6 py-7 lg:py-9">
                  <span className="folio pt-1 text-lg text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="flex-1 font-display text-[clamp(1.5rem,1.2vw+1.1rem,2.15rem)] leading-[1.15] text-balance">
                    {article}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
        covers={["the-house-beneath-the-silence", "the-little-fox-and-the-secret-forest"]}
      />
    </>
  );
}
