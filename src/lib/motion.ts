import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The page motion system.
 *
 * Components stay server-rendered and simply declare intent with data
 * attributes; this module wires those attributes to GSAP once per page view.
 *
 *   data-words          masked word-by-word reveal (see <Words>)
 *   data-scrub-words    words that ink in as the reader scrolls
 *   data-fade           rise + fade        (data-y, data-delay, data-duration)
 *   data-clip           clip-path image reveal with a settling scale
 *   data-line           a hairline that draws itself
 *   data-stagger        children rise in sequence
 *   data-parallax="n"   scroll-linked drift, n ≈ -1…1
 *   data-hscroll        pinned horizontal chapter rail (desktop)
 *   data-drift          a shelf that travels sideways with scroll (desktop)
 *   data-tilt           pointer-reactive 3D tilt
 *   data-float          slow idle float
 */

const num = (value: string | undefined, fallback: number) => {
  const parsed = Number(value);
  return value !== undefined && value !== "" && Number.isFinite(parsed) ? parsed : fallback;
};

export function initMotion(root: HTMLElement): () => void {
  gsap.registerPlugin(ScrollTrigger);

  const cleanups: Array<() => void> = [];
  const all = <T extends HTMLElement = HTMLElement>(selector: string) =>
    Array.from(root.querySelectorAll<T>(selector));

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    /* Pinned sections are created first so later triggers measure correctly. */
    mm.add("(min-width: 1024px)", () => {
      all("[data-hscroll]").forEach((section) => {
        const track = section.querySelector<HTMLElement>("[data-hscroll-track]");
        if (!track) return;
        const progress = section.querySelector<HTMLElement>("[data-hscroll-progress]");
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.7,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress) gsap.set(progress, { scaleX: self.progress });
            },
          },
        });

        // Chapter numerals swell slightly as they cross the middle of the screen.
        track.querySelectorAll<HTMLElement>("[data-hscroll-item]").forEach((item) => {
          gsap.fromTo(
            item.querySelectorAll("[data-hscroll-numeral]"),
            { xPercent: 18, opacity: 0.25 },
            {
              xPercent: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                containerAnimation: tween,
                start: "left 95%",
                end: "left 45%",
                scrub: true,
              },
            },
          );
        });
      });

      all("[data-drift]").forEach((track) => {
        const frame = track.parentElement;
        if (!frame) return;
        gsap.to(track, {
          x: () => -Math.max(0, track.scrollWidth - frame.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top 45%",
            end: "bottom 70%",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    /* Masked word reveals */
    all("[data-words]").forEach((el) => {
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(
        el.querySelectorAll(".w-i"),
        { yPercent: 115, rotate: 3 },
        {
          yPercent: 0,
          rotate: 0,
          duration: num(el.dataset.duration, 1.25),
          ease: "expo.out",
          stagger: num(el.dataset.stagger, 0.055),
          delay: num(el.dataset.delay, 0),
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        },
      );
    });

    /* Paragraphs that ink in with scroll */
    all("[data-scrub-words]").forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll(".sw"),
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 55%", scrub: 0.5 },
        },
      );
    });

    /* Rise + fade */
    all("[data-fade]").forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: num(el.dataset.y, 32), rotate: num(el.dataset.rotate, 0) },
        {
          autoAlpha: 1,
          y: 0,
          rotate: 0,
          duration: num(el.dataset.duration, 1.2),
          ease: "expo.out",
          delay: num(el.dataset.delay, 0),
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    });

    /* Image reveals: the mask opens while the picture settles */
    all("[data-clip]").forEach((el) => {
      const from =
        el.dataset.clip === "left" ? "inset(0% 100% 0% 0%)" : "inset(100% 0% 0% 0%)";
      const delay = num(el.dataset.delay, 0);
      const trigger = { trigger: el, start: "top 88%", once: true };
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(
        el,
        { clipPath: from },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.inOut",
          delay,
          scrollTrigger: trigger,
        },
      );
      const media = el.querySelector("img");
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.28 },
          { scale: 1, duration: 1.9, ease: "expo.out", delay: delay + 0.15, scrollTrigger: trigger },
        );
      }
    });

    /* Hairlines */
    all("[data-line]").forEach((el) => {
      const vertical = el.dataset.line === "y";
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(
        el,
        vertical ? { scaleY: 0 } : { scaleX: 0 },
        {
          scaleX: 1,
          scaleY: 1,
          transformOrigin: vertical ? "top" : "left",
          duration: 1.5,
          ease: "expo.inOut",
          delay: num(el.dataset.delay, 0),
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        },
      );
    });

    /* SVG strokes that draw themselves */
    all<HTMLElement>("[data-draw]").forEach((el) => {
      const strokes = Array.from(el.querySelectorAll<SVGGeometryElement>("path, circle, line"));
      strokes.forEach((stroke) => {
        const length = stroke.getTotalLength();
        gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
      });
      gsap.set(el, { visibility: "visible" });
      gsap.to(strokes, {
        strokeDashoffset: 0,
        duration: num(el.dataset.duration, 1.6),
        ease: "power3.inOut",
        stagger: 0.25,
        delay: num(el.dataset.delay, 0),
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });

    /* A book that turns as its section scrolls past */
    all("[data-turn]").forEach((el) => {
      const [from, to] = (el.dataset.turn || "-46,14").split(",").map(Number);
      gsap.fromTo(
        el,
        { "--ry": `${from}deg` },
        {
          "--ry": `${to}deg`,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest<HTMLElement>("[data-turn-area]") ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    });

    /* Sequenced children */
    all("[data-stagger]").forEach((el) => {
      gsap.fromTo(
        el.children,
        { autoAlpha: 0, y: num(el.dataset.y, 28) },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: num(el.dataset.stagger, 0.08),
          delay: num(el.dataset.delay, 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    /* Parallax */
    all("[data-parallax]").forEach((el) => {
      const amount = num(el.dataset.parallax, 0.2) * 140;
      gsap.fromTo(
        el,
        { y: amount },
        {
          y: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    /* Idle float */
    all("[data-float]").forEach((el, index) => {
      gsap.to(el, {
        y: num(el.dataset.float, 12),
        duration: 3.4 + index * 0.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.35,
      });
    });

    /* Pointer tilt */
    mm.add("(hover: hover) and (pointer: fine)", () => {
      all("[data-tilt]").forEach((el) => {
        const strength = num(el.dataset.tilt, 8);
        const rotateY = gsap.quickTo(el, "rotationY", { duration: 1.1, ease: "power3.out" });
        const rotateX = gsap.quickTo(el, "rotationX", { duration: 1.1, ease: "power3.out" });
        const area = el.closest<HTMLElement>("[data-tilt-area]") ?? el;
        const onMove = (event: PointerEvent) => {
          const rect = area.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          rotateY(px * strength);
          rotateX(-py * strength * 0.7);
        };
        const onLeave = () => {
          rotateY(0);
          rotateX(0);
        };
        area.addEventListener("pointermove", onMove);
        area.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          area.removeEventListener("pointermove", onMove);
          area.removeEventListener("pointerleave", onLeave);
        });
      });
    });
  }, root);

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("load", refresh);
  document.fonts?.ready.then(refresh).catch(() => {});

  return () => {
    window.removeEventListener("load", refresh);
    cleanups.forEach((fn) => fn());
    ctx.revert();
  };
}
