import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ServiceBlocks } from "@/components/services/ServiceBlocks";
import {
  Audience,
  Band,
  Benefits,
  ClosingForm,
  Genres,
  OneTeam,
  Shelf,
  Story,
  WhyUs,
} from "@/components/services/ServiceSections";
import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Marquee } from "@/components/ui/Marquee";
import { PageHero } from "@/components/ui/PageHero";
import { Words } from "@/components/ui/Words";
import { extras as allExtras } from "@/content/serviceExtras";
import { getCategory, getService, services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[service]">): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: PageProps<"/[service]">) {
  const { service: slug } = await params;
  const service = getService(slug);
  const extras = service ? allExtras[service.slug] : undefined;
  if (!service || !extras) notFound();

  const category = getCategory(service.categoryId);
  const related = service.related.map((s) => getService(s)!);
  // Names of this page's offerings, set as a band of moving type.
  const offerings = service.blocks.find((block) => block.type === "solutions")?.items.map((item) => item.name) ?? [];
  const stripItems = extras.platforms ?? offerings;

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />

      <PageHero
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: service.label, path: `/${service.slug}/` },
        ]}
        label={extras.tag}
        pill
        title={service.title}
        numeral={service.number}
        formService={service.label}
      >
        <p className="lede text-charcoal/80">{service.intro}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href={site.primaryCta.href}>{site.primaryCta.label}</ButtonLink>
          <ButtonLink href="#process" variant="outline">
            See How It Works
          </ButtonLink>
        </div>
        <p data-fade data-delay="0.1" className="eyebrow mt-8 text-[0.68rem] text-gold-ink">
          {category.name}
        </p>
      </PageHero>

      {stripItems.length ? (
        <div className="border-b border-navy/15">
          {extras.platforms ? (
            <p className="eyebrow pt-7 text-center text-[0.68rem] text-charcoal/60">
              Platforms and formats we prepare your book for
            </p>
          ) : null}
          <Marquee
            items={stripItems}
            duration={Math.max(36, stripItems.length * 8)}
            className="outline-marquee py-7 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-none text-navy"
          />
        </div>
      ) : null}

      <Story extras={extras} />
      <Benefits extras={extras} />
      <Band extras={extras} label={service.label} />

      <ServiceBlocks blocks={service.blocks} label={service.label} supportText={extras.supportText} />

      <Audience extras={extras} />
      <Genres extras={extras} />
      <OneTeam />
      <Shelf />
      <WhyUs />

      {/* FAQs */}
      <section className="bg-paper">
        <div className="shell grid gap-x-10 gap-y-10 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span data-line className="block h-px bg-navy/25" />
              <Words as="h2" text="FAQs" className="display-1 mt-6 text-navy" />
              <p data-fade className="mt-4 text-[0.975rem] text-charcoal/70">
                {service.label}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList questions={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services — the document's internal linking strategy */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <p data-fade className="eyebrow flex items-center gap-4 text-gold-ink">
            <span aria-hidden className="h-px w-10 bg-current opacity-60" />
            Our Services
          </p>
          <ul className={`mt-10 grid gap-x-10 ${related.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            {related.map((item, index) => (
              <li key={item.slug} className="relative">
                <span data-line data-delay={index * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                <Link href={`/${item.slug}/`} data-fade data-delay={index * 0.1} className="group block py-8 text-navy">
                  <span className="eyebrow text-[0.68rem] text-gold-ink">{getCategory(item.categoryId).name}</span>
                  <span className="mt-3 flex items-start justify-between gap-6">
                    <span className="display-2 text-balance transition-transform duration-700 ease-expo group-hover:translate-x-2">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={1.25}
                      className="mt-2 size-7 shrink-0 text-gold-ink transition-transform duration-700 ease-expo group-hover:rotate-45"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingForm service={service} />
    </>
  );
}
