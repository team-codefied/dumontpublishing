import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextLink } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

/** Section 8 — a quiet, centred statement. Real author feedback is published on /testimonials/. */
export function TestimonialsTeaser() {
  const { testimonials } = home;

  return (
    <section className="relative py-24 text-center lg:py-40">
      <div className="shell">
        <p
          aria-hidden
          data-fade
          data-y="40"
          className="font-display text-[9rem] leading-[0.6] text-gold lg:text-[13rem]"
        >
          “
        </p>
        <SectionLabel folio="07" className="mt-2 justify-center">
          {testimonials.label}
        </SectionLabel>
        <Words
          as="h2"
          text={testimonials.title}
          accent="Authors We’ve Worked With"
          className="display-1 mx-auto mt-7 max-w-4xl text-balance text-navy"
        />
        <p data-fade className="lede mx-auto mt-7 max-w-xl text-charcoal/75">
          {testimonials.text}
        </p>
        <div data-fade className="mt-10">
          <TextLink href="/testimonials/" className="text-navy">
            {testimonials.label}
          </TextLink>
        </div>
      </div>
    </section>
  );
}

/** Section 9 — the six guide titles as an editorial index. */
export function Insights() {
  const { insights } = home;

  return (
    <section className="relative bg-paper py-24 lg:py-40">
      <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel folio="08">{insights.label}</SectionLabel>
            <Words
              as="h2"
              text={insights.title}
              accent="Your Publishing Journey"
              className="display-1 mt-7 text-balance text-navy"
            />
            <div data-fade className="mt-10">
              <TextLink href="/blog/" className="text-navy">
                Blog
              </TextLink>
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {insights.articles.map((article, index) => (
            <li key={article} className="relative">
              <span data-line className="absolute inset-x-0 top-0 h-px bg-navy/20" />
              <Link
                href="/blog/#publishing-guides"
                data-fade
                data-y="20"
                className="group flex items-start gap-6 py-7 text-navy lg:py-9"
              >
                <span className="folio pt-1 text-lg text-gold-ink">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-display text-[clamp(1.5rem,1.2vw+1.1rem,2.15rem)] leading-[1.15] text-balance transition-transform duration-700 ease-expo group-hover:translate-x-3">
                  {article}
                </span>
                <ArrowUpRight
                  aria-hidden
                  strokeWidth={1.25}
                  className="mt-1 size-6 shrink-0 text-gold-ink transition-transform duration-700 ease-expo group-hover:rotate-45"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Section 10 — homepage FAQs. */
export function HomeFaqs() {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel folio="09">FAQs</SectionLabel>
            <Words
              as="h2"
              text="Frequently Asked Questions"
              accent="Questions"
              className="display-1 mt-7 text-navy"
            />
          </div>
          <div data-fade>
            <TextLink href="/faqs/" className="text-navy">
              FAQs
            </TextLink>
          </div>
        </div>
        <div className="mt-14 lg:mt-20">
          <FaqList questions={home.faqs} columns={2} />
        </div>
      </div>
    </section>
  );
}
