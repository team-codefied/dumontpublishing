import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { InView } from "@/components/ui/InView";
import { CoverStrip, Seal } from "@/components/ui/Ornaments";
import { services } from "@/content/services";
import { contactPage, quickLinks, site } from "@/content/site";

const COPYRIGHT_YEAR = 2026;

const footerLink =
  "group inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors duration-500 hover:text-gold";

/** "Your Story." / "Our Expertise." / "A Published Legacy." */
const taglineLines = site.tagline.match(/[^.]+\./g)?.map((line) => line.trim()) ?? [site.tagline];

/**
 * The footer is set like the closing leaf of a book: a travelling shelf of
 * the published covers, the tagline as a stepped title, a turning seal that
 * leads to the enquiry form, then the colophon and the imprint's name.
 */
export function Footer() {
  return (
    <footer className="relative z-2 overflow-hidden bg-navy-deep text-ivory">
      {/* the shelf */}
      <div className="border-b border-(--rule-light) bg-navy pt-14 pb-12">
        <CoverStrip duration={70} />
      </div>

      <InView className="shell pt-20 lg:pt-28">
        {/* title + seal */}
        <div className="grid items-end gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="footer-rise eyebrow flex items-center gap-4 text-gold">
              <span aria-hidden className="h-px w-10 bg-current opacity-60" />
              {site.name}
            </p>
            <p className="mt-8 font-display text-[clamp(2.6rem,6.4vw,6.2rem)] leading-[0.98] tracking-[-0.02em]">
              {taglineLines.map((line, index) => (
                <span
                  key={line}
                  style={{ "--i": index + 1, marginLeft: `${index * 7}%` } as React.CSSProperties}
                  className={`footer-rise block ${index === taglineLines.length - 1 ? "text-gold italic" : ""}`}
                >
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="footer-rise lg:col-span-4 lg:justify-self-end" style={{ "--i": 4 } as React.CSSProperties}>
            <Link
              href={site.primaryCta.href}
              aria-label={site.primaryCta.label}
              className="group flex items-center gap-6 lg:flex-col lg:items-end lg:gap-7 lg:text-right"
            >
              <Seal text={site.primaryCta.label} tone="light" className="size-36 shrink-0 lg:size-44">
                <span className="grid size-16 place-items-center rounded-full bg-gold text-navy-deep transition-transform duration-700 ease-expo group-hover:scale-110 group-hover:rotate-45 lg:size-20">
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-7" />
                </span>
              </Seal>
              <span className="max-w-[14rem] font-display text-2xl leading-snug">{contactPage.title}</span>
            </Link>
          </div>
        </div>

        {/* colophon */}
        <div className="mt-20 grid gap-x-10 gap-y-14 border-t border-(--rule-light) pt-14 sm:grid-cols-2 lg:mt-28 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Dumont Publishing — home" className="inline-block">
              <Logo inverse className="h-16 w-auto" />
            </Link>
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-ivory/60">{site.positioning}</p>
          </div>

          <nav aria-label="Our Services" className="lg:col-span-5 lg:col-start-6">
            <h2 className="eyebrow text-gold">Our Services</h2>
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className={footerLink}>
                    <span className="folio text-sm text-gold/70">{service.number}</span>
                    <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick Links" className="lg:col-span-2">
            <h2 className="eyebrow text-gold">Quick Links</h2>
            <ul className="mt-6 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    <span className="transition-transform duration-500 ease-expo group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* imprint */}
        <p
          aria-hidden
          className="footer-mark pointer-events-none mt-16 select-none font-display text-[19.5vw] leading-[0.86] tracking-[0.02em] text-gold 3xl:text-[19rem]"
        >
          {"DUMONT".split("").map((letter, index) => (
            <span key={index} style={{ "--i": index } as React.CSSProperties} className={index % 2 ? "outline-text" : ""}>
              {letter}
            </span>
          ))}
        </p>

        <div className="flex flex-col gap-4 border-t border-(--rule-light) py-6 text-[0.8rem] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {site.name}. All rights reserved.
          </p>
          <p className="folio text-base text-gold-pale/80">{site.alternativeTaglines[0]}</p>
          <a href="#main" className="group eyebrow inline-flex items-center gap-3 text-[0.68rem] text-ivory/70 hover:text-gold">
            Back to top
            <span className="grid size-9 place-items-center rounded-full border border-current transition-transform duration-500 ease-expo group-hover:-translate-y-1">
              <ArrowUp aria-hidden size={14} strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </InView>
    </footer>
  );
}
