import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { Words } from "@/components/ui/Words";
import { getService } from "@/content/services";
import { faqsPage, home, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: faqsPage.seoTitle,
  description: `${faqsPage.title}.`,
  path: faqsPage.path,
});

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Homepage questions that concern quotations, packages and rights. */
const pricingQuestions = home.faqs.filter((question) => /quote|ownership|packages/i.test(question));
const generalQuestions = home.faqs.filter((question) => !pricingQuestions.includes(question));

const sections = [
  { name: site.name, text: undefined as string | undefined },
  ...faqsPage.groups.map((group) => ({ name: group.name, text: group.text })),
  { name: faqsPage.pricing.name, text: faqsPage.pricing.text },
];

function GroupHeading({ index, name, text }: { index: number; name: string; text?: string }) {
  return (
    <div className="lg:col-span-4">
      <div className="lg:sticky lg:top-32">
        <p data-fade data-y="12" className="folio text-lg text-gold-ink">
          {String(index).padStart(2, "0")}
        </p>
        <Words as="h2" text={name} className="display-2 mt-3 text-balance text-navy" />
        {text ? (
          <p data-fade className="mt-5 max-w-xs text-[0.975rem] leading-relaxed text-charcoal/75">
            {text}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "FAQs", path: faqsPage.path }]}
        label="FAQs"
        title={faqsPage.title}
        accent="Our Publishing Services"
      >
        <nav aria-label="FAQ sections">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {sections.map((section) => (
              <li key={section.name}>
                <a href={`#${slugify(section.name)}`} className="nav-link eyebrow text-[0.7rem] text-navy">
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="shell">
        {/* General */}
        <section id={slugify(site.name)} className="grid gap-x-10 gap-y-10 border-b border-navy/20 py-20 lg:grid-cols-12 lg:py-28">
          <GroupHeading index={1} name={site.name} />
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList questions={generalQuestions} />
          </div>
        </section>

        {/* Service groups */}
        {faqsPage.groups.map((group, index) => (
          <section
            key={group.name}
            id={slugify(group.name)}
            className="grid gap-x-10 gap-y-10 border-b border-navy/20 py-20 lg:grid-cols-12 lg:py-28"
          >
            <GroupHeading index={index + 2} name={group.name} text={group.text} />
            <div className="space-y-14 lg:col-span-7 lg:col-start-6">
              {group.services.map((slug) => {
                const service = getService(slug)!;
                return (
                  <div key={slug}>
                    <h3 data-fade data-y="12" className="mb-5">
                      <Link href={`/${slug}/`} className="link-line text-gold-ink">
                        {service.label}
                      </Link>
                    </h3>
                    <FaqList questions={service.faqs} />
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Pricing and Ownership */}
        <section id={slugify(faqsPage.pricing.name)} className="grid gap-x-10 gap-y-10 py-20 lg:grid-cols-12 lg:py-28">
          <GroupHeading index={faqsPage.groups.length + 2} name={faqsPage.pricing.name} text={faqsPage.pricing.text} />
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList questions={pricingQuestions} />
          </div>
        </section>
      </div>

      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
      />
    </>
  );
}
