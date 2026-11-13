"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { markReady } from "@/lib/ready";
import { site } from "@/content/site";

/**
 * The opening sequence: the imprint is set letter by letter, a gold rule
 * draws beneath it, then the navy leaf lifts away to reveal the page.
 * Shown once per full page load, and never for reduced-motion readers.
 */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const html = document.documentElement;
    if (!el || !html.classList.contains("motion")) {
      html.classList.add("is-loaded");
      markReady();
      return;
    }

    window.__lenis?.stop();
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .set("[data-pre-inner]", { visibility: "visible" })
        .from("[data-pre-char]", { yPercent: 120, duration: 1, stagger: 0.045 }, 0.1)
        .from("[data-pre-rule]", { scaleX: 0, duration: 1.1, ease: "expo.inOut" }, 0.35)
        .from("[data-pre-sub]", { autoAlpha: 0, y: 10, duration: 0.8 }, 0.7)
        .to("[data-pre-inner]", { yPercent: -30, autoAlpha: 0, duration: 0.7, ease: "power3.in" }, 1.75)
        .to(el, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, 2.05)
        .add(() => {
          window.__lenis?.start();
          markReady();
        }, 2.25)
        .add(() => html.classList.add("is-loaded"));
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="preloader fixed inset-0 z-[100] place-items-center bg-navy text-ivory"
    >
      <div data-pre-inner className="invisible px-6 text-center">
        <p className="overflow-hidden font-display text-[clamp(2.6rem,9vw,6.5rem)] leading-none tracking-[0.12em]">
          {"DUMONT".split("").map((char, index) => (
            <span key={index} data-pre-char className="inline-block">
              {char}
            </span>
          ))}
        </p>
        <span data-pre-rule className="mx-auto mt-5 block h-px w-full max-w-md origin-center bg-gold" />
        <p data-pre-sub className="eyebrow mt-5 text-gold">
          {site.tagline}
        </p>
      </div>
    </div>
  );
}
