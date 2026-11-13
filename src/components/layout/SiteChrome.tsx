"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Two quiet pieces of site-wide chrome:
 *  - a gold reading-progress line along the top edge
 *  - on pointer devices, a ring that trails the cursor and swells over links
 * Neither renders for reduced-motion readers.
 */
export function SiteChrome() {
  const progressRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const progress = progressRef.current;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ring = ringRef.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let removePointer = () => {};
    if (ring && fine) {
      const moveX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const moveY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
      const onMove = (event: PointerEvent) => {
        ring.dataset.visible = "true";
        moveX(event.clientX);
        moveY(event.clientY);
        const target = event.target as Element | null;
        ring.dataset.active = String(Boolean(target?.closest("a, button, [role='button'], summary")));
      };
      const onLeave = () => {
        ring.dataset.visible = "false";
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      removePointer = () => {
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      };
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      removePointer();
    };
  }, []);

  return (
    <>
      <div ref={progressRef} aria-hidden className="scroll-progress" />
      <div ref={ringRef} aria-hidden className="cursor-ring" />
    </>
  );
}
