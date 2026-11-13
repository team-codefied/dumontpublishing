"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { categories } from "@/content/services";
import { coverSrc } from "@/content/books";
import { home } from "@/content/site";

/**
 * The six service categories set as a table of contents. On pointer devices
 * a cover follows the cursor, changing with the row being read.
 */
export function ServicesIndex() {
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const moveX = gsap.quickTo(preview, "x", { duration: 0.9, ease: "power3.out" });
    const moveY = gsap.quickTo(preview, "y", { duration: 0.9, ease: "power3.out" });
    const tilt = gsap.quickTo(preview, "rotation", { duration: 1.2, ease: "power3.out" });
    let lastX = 0;

    const onMove = (event: PointerEvent) => {
      const rect = list.getBoundingClientRect();
      moveX(event.clientX - rect.left);
      moveY(event.clientY - rect.top);
      tilt(gsap.utils.clamp(-10, 10, (event.clientX - lastX) * 0.6));
      lastX = event.clientX;
    };
    list.addEventListener("pointermove", onMove);
    return () => list.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative bg-navy py-24 text-ivory lg:py-36">
      <div className="shell">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel folio="02" tone="light">
              Our Services
            </SectionLabel>
            <Words
              as="h2"
              text={home.services.title}
              accent="Under One Roof"
              accentClassName="italic text-gold"
              className="display-1 mt-7 text-balance"
            />
          </div>
          <p data-fade className="lede text-ivory/70 lg:col-span-4 lg:col-start-9">
            {home.services.text}
          </p>
        </div>

        <div ref={listRef} className="relative mt-16 lg:mt-24" onPointerLeave={() => setActive(null)}>
          <span data-line className="block h-px bg-(--rule-light)" />
          <ul>
            {categories.map((category, index) => (
              <li key={category.id} className="relative">
                <Link
                  href={`/services/#${category.id}`}
                  onPointerEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  className="sweep group grid gap-x-8 gap-y-3 py-8 [--sweep-color:var(--color-navy-soft)] lg:grid-cols-12 lg:items-baseline lg:px-6 lg:py-10"
                >
                  <span className="folio text-xl text-gold lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-2 transition-transform duration-700 ease-expo lg:col-span-5 lg:group-hover:translate-x-3">
                    {category.name}
                  </h3>
                  <div className="lg:col-span-5">
                    <p className="text-[0.975rem] leading-relaxed text-ivory/70">{category.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                      {category.included.map((item) => (
                        <li key={item} className="eyebrow text-[0.68rem] text-gold-pale">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.25}
                    className="hidden size-7 justify-self-end text-gold transition-transform duration-700 ease-expo group-hover:rotate-45 lg:col-span-1 lg:block"
                  />
                </Link>
                <span data-line className="block h-px bg-(--rule-light)" />
              </li>
            ))}
          </ul>

          {/* cursor-following cover */}
          <div
            ref={previewRef}
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 z-10 hidden lg:block"
          >
            <div
              className={`relative aspect-[2/3] w-44 -translate-x-1/2 -translate-y-[60%] overflow-hidden shadow-[1.2rem_1.6rem_3rem_-1rem_rgb(0_0_0/0.6)] transition-[clip-path,opacity] duration-700 ease-expo xl:w-52 ${
                active === null
                  ? "opacity-0 [clip-path:inset(50%_0_50%_0)]"
                  : "opacity-100 [clip-path:inset(0_0_0_0)]"
              }`}
            >
              {categories.map((category, index) => (
                <Image
                  key={category.id}
                  src={coverSrc(category.cover)}
                  alt=""
                  fill
                  sizes="208px"
                  className={`object-cover transition-[opacity,transform] duration-700 ease-expo ${
                    index === active ? "scale-100 opacity-100" : "scale-115 opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
