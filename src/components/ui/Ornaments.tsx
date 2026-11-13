import Image from "next/image";
import { useId } from "react";
import { books, COVER_HEIGHT, COVER_WIDTH, coverAlt, coverSrc } from "@/content/books";

/**
 * A rotating circular stamp of type — the imprint's seal. Decorative unless
 * wrapped in a link by the caller.
 */
export function Seal({
  text,
  tone = "dark",
  className = "",
  children,
}: {
  text: string;
  tone?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}) {
  const id = useId();
  const ring = `${text} ✦ ${text} ✦ `;

  return (
    <span className={`relative inline-grid place-items-center ${tone === "light" ? "text-gold" : "text-navy"} ${className}`}>
      <svg viewBox="0 0 200 200" aria-hidden className="seal__ring size-full">
        <defs>
          <path id={id} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
        <text
          fill="currentColor"
          fontSize={Math.min(13, 498 / ring.length / 0.86).toFixed(2)}
          fontWeight="500"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href={`#${id}`} textLength="498" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">{children}</span>
    </span>
  );
}

/** A pen flourish that draws itself as it scrolls into view. */
export function Flourish({ className = "", delay }: { className?: string; delay?: number }) {
  return (
    <svg
      viewBox="0 0 600 44"
      aria-hidden
      data-draw
      data-delay={delay}
      fill="none"
      preserveAspectRatio="none"
      className={`block h-6 ${className}`}
    >
      <path
        d="M3 30 C 70 6, 130 40, 205 22 S 330 2, 392 22 S 470 44, 520 20 S 575 6, 597 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** A tick inside a ring; both strokes draw in sequence. */
export function DrawnCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden data-draw fill="none" className={`size-7 shrink-0 ${className}`}>
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M9.5 16.5 L14 21 L22.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * A continuously travelling shelf of the eight covers. Pure CSS motion, so
 * it also works outside the page motion root (e.g. in the footer).
 */
export function CoverStrip({
  reverse = false,
  duration = 60,
  className = "",
}: {
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const track = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="marquee__track items-end gap-8 pr-8 sm:gap-12 sm:pr-12"
      style={
        {
          "--marquee-duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      {books.map((book, index) => (
        <li
          key={book.slug}
          className={`cover-strip__item w-28 shrink-0 sm:w-36 lg:w-44 ${index % 2 ? "translate-y-5" : ""}`}
        >
          <Image
            src={coverSrc(book.slug)}
            alt={hidden ? "" : coverAlt(book)}
            width={COVER_WIDTH}
            height={COVER_HEIGHT}
            sizes="(min-width: 1024px) 176px, 144px"
            className="h-auto w-full shadow-[0.8rem_1rem_2rem_-0.8rem_rgb(0_0_0/0.55)]"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee cover-strip ${className}`}>
      {track(false)}
      {track(true)}
    </div>
  );
}
