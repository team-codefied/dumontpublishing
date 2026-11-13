import Link from "next/link";
import type { ReactNode } from "react";
import { LeadForm } from "@/components/contact/LeadForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { Flourish } from "@/components/ui/Ornaments";
import { Words } from "@/components/ui/Words";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";

type PageHeroProps = {
  crumbs: Crumb[];
  title: string;
  accent?: string;
  /** Small label above the title. */
  label?: string;
  /** Large outlined numeral set behind the title, like a chapter number. */
  numeral?: string;
  children?: ReactNode;
  /** Shows the consultation form beside the title (default). */
  form?: boolean;
  /** Pre-selects this service in the form. */
  formService?: string;
};

/** Shared opening for interior pages: breadcrumb, chapter mark, H1, lead form. */
export function PageHero({
  crumbs,
  title,
  accent,
  label,
  numeral,
  children,
  form = true,
  formService,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] pb-20 lg:pt-[calc(var(--header-h)+4rem)] lg:pb-28">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {numeral ? (
        <p
          aria-hidden
          data-parallax="-0.3"
          className="outline-text folio pointer-events-none absolute top-16 left-[30%] hidden text-[26rem] leading-none text-gold/45 lg:block"
        >
          {numeral}
        </p>
      ) : null}

      <div className="shell relative grid gap-x-10 gap-y-14 lg:grid-cols-12 lg:items-center">
        <div className={form ? "lg:col-span-7" : "lg:col-span-10"}>
          <nav aria-label="Breadcrumb" data-fade data-y="12">
            <ol className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] text-charcoal/60">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center gap-3">
                  <span aria-hidden className="text-gold-ink">
                    /
                  </span>
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-navy">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path} className="nav-link">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {label ? (
            <p data-fade data-y="14" data-delay="0.05" className="eyebrow mt-10 flex items-center gap-4 text-gold-ink">
              <span aria-hidden className="h-px w-10 bg-current opacity-60" />
              {label}
            </p>
          ) : null}

          <Words
            as="h1"
            text={title}
            accent={accent}
            delay={0.1}
            className={`text-balance text-navy ${form ? "display-1" : "display-hero"} ${label ? "mt-6" : "mt-10"}`}
          />
          <Flourish delay={0.8} className="mt-4 w-56 text-gold" />

          {children ? (
            <div data-fade data-delay="0.5" className="mt-7 max-w-[42rem]">
              {children}
            </div>
          ) : null}
        </div>

        {form ? (
          <div data-fade data-y="90" data-delay="0.4" data-duration="1.5" className="lg:col-span-5 xl:pl-6">
            <LeadForm service={formService} />
          </div>
        ) : null}
      </div>

      <span data-line data-delay="0.4" className="shell absolute inset-x-0 bottom-0 block">
        <span className="block h-px bg-navy/20" />
      </span>
    </section>
  );
}
