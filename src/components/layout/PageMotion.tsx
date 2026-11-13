"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { initMotion } from "@/lib/motion";
import { isReady, whenReady } from "@/lib/ready";

/**
 * Mounted by app/template.tsx, so it runs afresh for every page view:
 * lifts the page curtain, restores scroll position and starts the
 * page's scroll and entrance animations.
 */
export function PageMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  /* On in-site navigation (not the first load) a navy leaf wipes the new page in. */
  useLayoutEffect(() => {
    if (isReady() && document.documentElement.classList.contains("motion")) {
      curtainRef.current?.classList.add("is-playing");
    }
  }, []);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    let timer: number | undefined;
    const reduced = !document.documentElement.classList.contains("motion");
    // After the first load, wait a beat so reveals play as the curtain lifts.
    const wait = isReady() ? 320 : 0;

    const hash = window.location.hash;
    if (!hash) window.__lenis?.scrollTo(0, { immediate: true, force: true });

    whenReady().then(() => {
      if (cancelled) return;
      timer = window.setTimeout(() => {
        if (cancelled) return;
        if (!reduced) cleanup = initMotion(root);
        if (hash) {
          const target = document.getElementById(decodeURIComponent(hash.slice(1)));
          if (target) {
            if (window.__lenis) window.__lenis.scrollTo(target, { offset: -96 });
            else target.scrollIntoView();
          }
        }
      }, wait);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, []);

  return (
    <div ref={ref}>
      <div ref={curtainRef} aria-hidden className="curtain pointer-events-none fixed inset-0 z-[90] bg-navy" />
      {children}
    </div>
  );
}
