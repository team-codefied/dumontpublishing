import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { getService } from "@/content/services";
import { authorJourney, home, processPage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: processPage.seoTitle,
  description: `${home.process.title}.`,
  path: processPage.path,
});

const stageTone = ["bg-ivory", "bg-paper", "bg-ivory-deep"];

export default function PublishingProcessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Publishing Process", path: processPage.path }]}
        label="Publishing Process"
        title={processPage.title}
        accent="Bringing Your Book to Life"
      >
        <p className="lede text-charcoal/80">{home.process.title}</p>
      </PageHero>

      {/* Six stages — each leaf slides over the last as you read down. */}
      <ol>
        {processPage.stages.map((stage, index) => (
          <li
            key={stage.name}
            className={`sticky top-0 border-t border-navy/20 ${stageTone[index % stageTone.length]}`}
          >
            <div className="shell grid min-h-[78svh] items-center gap-x-10 gap-y-8 py-20 lg:grid-cols-12">
              <p
                aria-hidden
                className="outline-text folio text-[9rem] leading-[0.8] text-gold-ink lg:col-span-4 lg:text-[clamp(12rem,20vw,22rem)]"
              >
                {index + 1}
              </p>
              <div className="lg:col-span-7 lg:col-start-6">
                <p data-fade data-y="12" className="eyebrow text-gold-ink">
                  Stage {index + 1} / {processPage.stages.length}
                </p>
                <Words as="h2" text={stage.name} className="display-hero mt-5 text-balance text-navy" />
                <p data-fade data-delay="0.2" className="mt-8 max-w-xl font-display text-[clamp(1.4rem,1vw+1.1rem,1.9rem)] leading-snug text-charcoal/85">
                  {stage.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* A Clear Path — the six steps in detail */}
      <section className="relative bg-navy py-24 text-ivory lg:py-36">
        <div className="shell grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel tone="light">{home.process.label}</SectionLabel>
              <Words
                as="h2"
                text={home.process.title}
                accent="Published Book"
                accentClassName="italic text-gold"
                className="display-1 mt-7 text-balance"
              />
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {home.process.steps.map((step, index) => (
              <li key={step.name} className="relative py-9">
                <span data-line className="absolute inset-x-0 top-0 h-px bg-(--rule-light)" />
                <div data-fade className="flex gap-7">
                  <span className="folio w-9 shrink-0 pt-1 text-xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display-3">{step.name}</h3>
                    <p className="mt-3 max-w-md text-[0.975rem] leading-relaxed text-ivory/70">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Author journey — links each stage to its services */}
      <section className="relative bg-ivory py-24 lg:py-36">
        <div className="shell">
          <SectionLabel>Our Services</SectionLabel>
          <ul className="mt-12">
            {authorJourney.map((item, index) => (
              <li key={item.stage} className="relative">
                <span data-line className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                <div data-fade className="grid gap-x-10 gap-y-4 py-9 lg:grid-cols-12 lg:items-baseline">
                  <span className="folio text-xl text-gold-ink lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="display-2 text-navy lg:col-span-6">
                    {item.stage}{" "}
                    <span className="text-gold-ink italic">→ {item.outcome}</span>
                  </p>
                  <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:col-span-5 lg:justify-end">
                    {item.links.map((slug) => {
                      const service = getService(slug)!;
                      return (
                        <li key={slug}>
                          <Link href={`/${slug}/`} className="link-line text-navy">
                            {service.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
      />
    </>
  );
}
