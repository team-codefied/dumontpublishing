import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/content/services";
import { contactPage, quickLinks, site } from "@/content/site";

const COPYRIGHT_YEAR = 2026;

const footerLink = "nav-link text-[0.95rem] text-ivory/80 transition-colors hover:text-ivory";

export function Footer() {
  return (
    <footer className="relative z-2 overflow-hidden bg-navy-deep text-ivory">
      <div className="shell pt-20 pb-10 lg:pt-28">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
          {/* About Dumont */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Dumont Publishing — home" className="inline-block">
              <Logo inverse className="h-16 w-auto" />
            </Link>
            <p className="mt-8 max-w-sm font-display text-[1.6rem] leading-snug text-gold-pale italic">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ivory/65">
              {site.positioning}
            </p>
          </div>

          {/* Our Services */}
          <nav aria-label="Our Services" className="lg:col-span-3 lg:col-start-6">
            <h2 className="eyebrow text-gold">Our Services</h2>
            <ul className="mt-6 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className={footerLink}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="lg:col-span-2">
            <h2 className="eyebrow text-gold">Quick Links</h2>
            <ul className="mt-6 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="eyebrow text-gold">Contact</h2>
            <p className="mt-6 font-display text-2xl leading-snug">{contactPage.title}</p>
            <ButtonLink href={site.primaryCta.href} variant="gold" size="sm" className="mt-6">
              {site.primaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Oversized imprint */}
        <p
          aria-hidden
          className="outline-text pointer-events-none mt-16 select-none text-center font-display text-[19.5vw] leading-[0.82] tracking-[0.02em] text-gold/45 3xl:text-[19rem]"
        >
          DUMONT
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-(--rule-light) pt-6 text-[0.8rem] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {site.name}. All rights reserved.
          </p>
          <p className="folio text-base text-gold-pale/80">{site.alternativeTaglines[0]}</p>
        </div>
      </div>
    </footer>
  );
}
