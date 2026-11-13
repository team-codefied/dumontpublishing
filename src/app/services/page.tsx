import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Book } from "@/components/ui/Book";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { categories, servicesInCategory } from "@/content/services";
import { home, servicesPage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: servicesPage.seoTitle,
  description: home.services.text,
  path: servicesPage.path,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Our Services", path: servicesPage.path }]}
        label="Our Services"
        title={servicesPage.title}
        accent="Every Stage of Your Book"
      >
        <p className="lede text-charcoal/80">{home.services.text}</p>
      </PageHero>

      {/* Service Categories */}
      <div>
        {categories.map((category, index) => {
          const pages = servicesInCategory(category.id);
          const flip = index % 2 === 1;
          return (
            <section
              key={category.id}
              id={category.id}
              className={`relative py-20 lg:py-32 ${flip ? "bg-paper" : ""}`}
            >
              <div className="shell grid items-center gap-x-10 gap-y-14 lg:grid-cols-12">
                <div className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <SectionLabel folio={String(index + 1).padStart(2, "0")}>
                    {category.included.join(" · ")}
                  </SectionLabel>
                  <Words as="h2" text={category.name} className="display-1 mt-7 text-balance text-navy" />
                  <p data-fade className="lede mt-7 max-w-xl text-charcoal/80">
                    {category.description}
                  </p>

                  <ul className="mt-12">
                    {pages.map((service, i) => (
                      <li key={service.slug} className="relative">
                        <span data-line data-delay={i * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                        <Link
                          href={`/${service.slug}/`}
                          data-fade
                          data-delay={i * 0.1}
                          className="group flex items-center justify-between gap-6 py-6 text-navy"
                        >
                          <span>
                            <span className="display-2 block transition-transform duration-700 ease-expo group-hover:translate-x-3">
                              {service.label}
                            </span>
                            <span className="mt-2 block max-w-lg text-[0.95rem] text-charcoal/70">
                              {service.title}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            strokeWidth={1.25}
                            className="size-8 shrink-0 text-gold-ink transition-transform duration-700 ease-expo group-hover:rotate-45"
                          />
                        </Link>
                      </li>
                    ))}
                    <li aria-hidden>
                      <span data-line className="block h-px bg-navy/25" />
                    </li>
                  </ul>
                </div>

                <div className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                  <div className="relative mx-auto w-[56%] max-w-[18rem] lg:w-[78%]">
                    <p
                      aria-hidden
                      data-parallax="-0.3"
                      className={`outline-text folio absolute -top-[22%] text-[11rem] leading-none text-gold lg:text-[15rem] ${
                        flip ? "-right-[30%]" : "-left-[34%]"
                      }`}
                    >
                      {index + 1}
                    </p>
                    <div data-fade data-y="90" data-duration="1.5" className="book-hover relative">
                      <Book
                        slug={category.cover}
                        sizes="(min-width: 1024px) 22vw, 56vw"
                        angle={flip ? 22 : -24}
                        depth={28}
                        interactive
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Publishing Process */}
      <section className="bg-navy py-24 text-ivory lg:py-36">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
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
          <ol data-stagger="0.08" className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {home.process.steps.map((step, index) => (
              <li key={step.name} className="relative border-t border-(--rule-light) pt-6">
                <span aria-hidden className="absolute -top-[5px] left-0 size-[9px] rounded-full bg-gold" />
                <span className="folio text-lg text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-[1.45rem] leading-tight text-balance">{step.name}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="shell grid gap-x-10 gap-y-10 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-4">
          <SectionLabel>Our Services</SectionLabel>
          <Words as="h2" text="FAQs" className="display-1 mt-7 text-navy" />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FaqList questions={home.faqs} />
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
