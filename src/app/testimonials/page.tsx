import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Words } from "@/components/ui/Words";
import { home, testimonialsPage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: testimonialsPage.seoTitle,
  description: home.testimonials.text,
  path: testimonialsPage.path,
});

/**
 * The content document requires genuine, verifiable testimonials only and
 * supplies none yet, so this page presents its two sections without
 * placeholder quotes. Add real feedback to `src/content/site.ts` when the
 * client provides it.
 */
export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Testimonials", path: testimonialsPage.path }]}
        label={home.testimonials.title}
        title={testimonialsPage.title}
        accent="Dumont Publishing"
      >
        <p className="lede text-charcoal/80">{home.testimonials.text}</p>
      </PageHero>

      <section className="py-24 lg:py-36">
        <div className="shell">
          <p
            aria-hidden
            data-fade
            data-y="40"
            className="font-display text-[10rem] leading-[0.6] text-gold lg:text-[15rem]"
          >
            “
          </p>
          <ul className="mt-6 grid gap-x-16 lg:grid-cols-2">
            {testimonialsPage.sections.map((section, index) => (
              <li key={section.name} className="relative pt-8 pb-14">
                <span data-line data-delay={index * 0.12} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                <p data-fade className="folio text-lg text-gold-ink">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <Words as="h2" text={section.name} className="display-1 mt-3 text-navy" />
                <p data-fade data-delay="0.15" className="mt-6 max-w-md font-display text-[1.6rem] leading-snug text-charcoal/85">
                  {section.text}
                </p>
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
        covers={["a-life-beyond-limits", "the-power-of-starting-again"]}
      />
    </>
  );
}
