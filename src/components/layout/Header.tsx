"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { categories, servicesInCategory, type CategoryId } from "@/content/services";
import { coverSrc, getBook } from "@/content/books";
import { resourcesMenu, site } from "@/content/site";

type Menu = "services" | "resources" | null;

const topLinks = {
  home: { label: "Home", href: "/" },
  about: { label: "About Us", href: "/about-us/" },
  portfolio: { label: "Portfolio", href: "/portfolio/" },
  contact: { label: "Contact", href: "/contact-us/" },
};

const navText = "text-[0.8125rem] font-medium uppercase tracking-[0.14em]";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [previewCategory, setPreviewCategory] = useState<CategoryId>(categories[0].id);
  const lastY = useRef(0);

  /* Condense on scroll; tuck away while reading down, return on the way up. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock the page behind the mobile menu. */
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) window.__lenis?.stop();
    else window.__lenis?.start();
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || menu !== null;
  const preview = categories.find((c) => c.id === previewCategory) ?? categories[0];

  const navLink = (link: { label: string; href: string }) => (
    <Link
      href={link.href}
      onClick={closeAll}
      aria-current={isCurrent(link.href) ? "page" : undefined}
      className={`nav-link flex items-center leading-none ${navText}`}
    >
      {link.label}
    </Link>
  );

  const menuButton = (id: Exclude<Menu, null>, label: string) => (
    <button
      type="button"
      aria-expanded={menu === id}
      aria-controls={`menu-${id}`}
      onClick={() => setMenu(menu === id ? null : id)}
      onMouseEnter={() => setMenu(id)}
      className={`nav-link flex items-center gap-1.5 leading-none ${navText}`}
    >
      {label}
      <ChevronDown
        aria-hidden
        size={14}
        strokeWidth={1.75}
        className={`transition-transform duration-500 ease-expo ${menu === id ? "rotate-180" : ""}`}
      />
    </button>
  );

  return (
    <header
      onMouseLeave={() => setMenu(null)}
      className={`fixed inset-x-0 top-0 z-50 text-navy transition-transform duration-700 ease-expo ${
        hidden && !menu && !mobileOpen ? "-translate-y-full" : ""
      }`}
    >
      {/* bar */}
      <div
        className={`relative z-20 transition-[background-color,box-shadow] duration-500 ${
          mobileOpen
            ? "bg-transparent"
            : solid
              ? "bg-ivory/92 shadow-[0_1px_0_0_var(--rule)] backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="shell flex h-(--header-h) items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeAll}
            aria-label="Dumont Publishing — home"
            className="relative block shrink-0"
          >
            <Logo
              priority
              className={`h-10 w-auto transition-opacity duration-500 lg:h-[3.1rem] ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <Logo
              inverse
              className={`absolute inset-0 h-10 w-auto transition-opacity duration-500 lg:h-[3.1rem] ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-10">
              <li onMouseEnter={() => setMenu(null)}>{navLink(topLinks.home)}</li>
              <li onMouseEnter={() => setMenu(null)}>{navLink(topLinks.about)}</li>
              <li>{menuButton("services", "Services")}</li>
              <li onMouseEnter={() => setMenu(null)}>{navLink(topLinks.portfolio)}</li>
              <li>{menuButton("resources", "Resources")}</li>
              <li onMouseEnter={() => setMenu(null)}>{navLink(topLinks.contact)}</li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink href={site.primaryCta.href} size="sm" onClick={closeAll}>
                {site.primaryCta.label}
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
              className={`relative grid size-12 place-items-center lg:hidden ${
                mobileOpen ? "text-ivory" : "text-navy"
              }`}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-expo ${
                    mobileOpen ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-expo ${
                    mobileOpen ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Services mega menu */}
      <div
        id="menu-services"
        inert={menu !== "services"}
        className={`absolute inset-x-0 top-full z-10 hidden border-b border-(--rule) bg-ivory transition-[clip-path,opacity] duration-700 ease-expo lg:block ${
          menu === "services"
            ? "opacity-100 [clip-path:inset(0_0_-2rem_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="shell grid grid-cols-12 gap-x-10 py-12">
          <div className="col-span-3 flex flex-col justify-between border-r border-(--rule) pr-10">
            <div>
              <p className="eyebrow text-gold-ink">Our Services</p>
              <p className="display-3 mt-5 text-balance">
                Complete Book Publishing Solutions Under One Roof
              </p>
            </div>
            <Link href="/services/" onClick={closeAll} className="link-line mt-10 self-start">
              Services Overview
            </Link>
          </div>

          <ul className="col-span-6 grid grid-cols-3 gap-x-8 gap-y-9">
            {categories.map((category, index) => (
              <li
                key={category.id}
                onMouseEnter={() => setPreviewCategory(category.id)}
                style={{ transitionDelay: menu === "services" ? `${120 + index * 45}ms` : "0ms" }}
                className={`transition-[opacity,transform] duration-700 ease-expo ${
                  menu === "services" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <p className="eyebrow flex items-baseline gap-3 text-gold-ink">
                  <span className="folio text-base normal-case tracking-normal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {category.menuLabel}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {servicesInCategory(category.id).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}/`}
                        onClick={closeAll}
                        onFocus={() => setPreviewCategory(category.id)}
                        aria-current={isCurrent(`/${service.slug}/`) ? "page" : undefined}
                        className="nav-link font-display text-[1.45rem] leading-tight"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="col-span-3 flex items-end justify-end gap-6">
            <p className="max-w-[11rem] pb-1 text-right text-sm leading-relaxed text-navy/70">
              <span className="block font-display text-xl italic text-navy">
                {getBook(preview.cover).title}
              </span>
              {getBook(preview.cover).author}
            </p>
            <div className="relative aspect-[2/3] w-36 overflow-hidden shadow-[0.8rem_1rem_2.2rem_-0.8rem_rgb(15_33_49/0.5)]">
              {categories.map((category) => (
                <Image
                  key={category.id}
                  src={coverSrc(category.cover)}
                  alt=""
                  fill
                  sizes="144px"
                  className={`object-cover transition-[opacity,transform] duration-700 ease-expo ${
                    category.id === preview.id ? "scale-100 opacity-100" : "scale-110 opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources dropdown */}
      <div
        id="menu-resources"
        inert={menu !== "resources"}
        className={`absolute inset-x-0 top-full z-10 hidden border-b border-(--rule) bg-ivory transition-[clip-path,opacity] duration-700 ease-expo lg:block ${
          menu === "resources"
            ? "opacity-100 [clip-path:inset(0_0_-2rem_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="shell grid grid-cols-12 gap-x-10 py-12">
          <p className="eyebrow col-span-3 text-gold-ink">Resources</p>
          <ul className="col-span-9 grid grid-cols-4 gap-8">
            {resourcesMenu.map((item, index) => (
              <li
                key={item.href}
                style={{ transitionDelay: menu === "resources" ? `${100 + index * 50}ms` : "0ms" }}
                className={`border-t border-(--rule) pt-4 transition-[opacity,transform] duration-700 ease-expo ${
                  menu === "resources" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="folio block text-base text-gold-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className="nav-link mt-2 inline-block font-display text-[1.7rem] leading-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`fixed inset-0 z-10 flex h-dvh flex-col bg-navy text-ivory transition-[clip-path] duration-[900ms] ease-smooth lg:hidden ${
          mobileOpen ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto overscroll-contain px-(--gutter) pt-[calc(var(--header-h)+1.5rem)] pb-8"
        >
          <nav aria-label="Mobile">
            <ul>
              {[
                { type: "link" as const, ...topLinks.home },
                { type: "link" as const, ...topLinks.about },
                { type: "services" as const, label: "Services", href: "/services/" },
                { type: "link" as const, ...topLinks.portfolio },
                { type: "resources" as const, label: "Resources", href: "/blog/" },
                { type: "link" as const, ...topLinks.contact },
              ].map((item, index) => {
                const expanded = mobileSection === item.type;
                return (
                  <li
                    key={item.label}
                    style={{ transitionDelay: mobileOpen ? `${260 + index * 70}ms` : "0ms" }}
                    className={`border-b border-(--rule-light) transition-[opacity,transform] duration-[900ms] ease-expo ${
                      mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    {item.type === "link" ? (
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                        className="flex items-baseline gap-4 py-4 font-display text-[2.1rem] leading-none aria-[current=page]:text-gold"
                      >
                        <span className="folio text-sm text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setMobileSection(expanded ? null : item.type)}
                          className="flex w-full items-baseline gap-4 py-4 text-left font-display text-[2.1rem] leading-none"
                        >
                          <span className="folio text-sm text-gold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1">{item.label}</span>
                          <Plus
                            aria-hidden
                            size={22}
                            strokeWidth={1.25}
                            className={`self-center text-gold transition-transform duration-500 ease-expo ${
                              expanded ? "rotate-45" : ""
                            }`}
                          />
                        </button>
                        <div
                          inert={!expanded}
                          className={`grid transition-[grid-template-rows] duration-700 ease-expo ${
                            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            {item.type === "services" ? (
                              <MobileServices onNavigate={closeAll} />
                            ) : (
                              <ul className="space-y-3 pb-6 pl-9">
                                {resourcesMenu.map((resource) => (
                                  <li key={resource.href}>
                                    <Link
                                      href={resource.href}
                                      onClick={closeAll}
                                      className="font-display text-2xl"
                                    >
                                      {resource.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div
          className={`border-t border-(--rule-light) px-(--gutter) py-5 transition-opacity delay-500 duration-700 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ButtonLink href={site.primaryCta.href} variant="gold" onClick={closeAll} className="w-full">
            {site.primaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

/** Expandable service categories for the mobile menu. */
function MobileServices({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState<CategoryId | null>(null);

  return (
    <div className="pb-6 pl-9">
      <ul>
        {categories.map((category) => {
          const expanded = open === category.id;
          return (
            <li key={category.id} className="border-b border-(--rule-light) last:border-b-0">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : category.id)}
                className="flex w-full items-center justify-between gap-4 py-3 text-left text-[0.8125rem] font-medium uppercase tracking-[0.16em]"
              >
                {category.menuLabel}
                <ChevronDown
                  aria-hidden
                  size={16}
                  strokeWidth={1.5}
                  className={`text-gold transition-transform duration-500 ease-expo ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                inert={!expanded}
                className={`grid transition-[grid-template-rows] duration-600 ease-expo ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="overflow-hidden">
                  {servicesInCategory(category.id).map((service) => (
                    <li key={service.slug} className="pb-3 last:pb-4">
                      <Link
                        href={`/${service.slug}/`}
                        onClick={onNavigate}
                        className="font-display text-2xl text-gold-pale"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      <Link href="/services/" onClick={onNavigate} className="link-line mt-5 text-gold">
        Services Overview
      </Link>
    </div>
  );
}
