import Image from "next/image";
import type { CSSProperties } from "react";
import { COVER_HEIGHT, COVER_WIDTH, coverAlt, coverSrc, getBook, type BookSlug } from "@/content/books";

type BookProps = {
  slug: BookSlug;
  /** `sizes` hint for the responsive cover image. */
  sizes: string;
  /** Depth of the page block, in px. */
  depth?: number;
  /** Resting rotation in degrees (negative shows the fore-edge). */
  angle?: number;
  priority?: boolean;
  interactive?: boolean;
  /** Scroll-driven rotation as "from,to" degrees, e.g. "-46,14". */
  turn?: string;
  className?: string;
};

/**
 * A supplied cover presented as a physical book. The artwork itself is never
 * cropped or redrawn — the 3D body is built around it in CSS.
 */
export function Book({
  slug,
  sizes,
  depth = 26,
  angle = -24,
  priority = false,
  interactive = false,
  turn,
  className = "",
}: BookProps) {
  const book = getBook(slug);
  const style = { "--d": `${depth}px`, "--ry": `${angle}deg` } as CSSProperties;

  return (
    <div
      data-turn={turn}
      className={`book ${interactive ? "book--interactive" : ""} ${turn ? "book--scrub" : ""} ${className}`}
      style={style}
    >
      <div className="book__body">
        <div className="book__cover">
          <Image
            src={coverSrc(slug)}
            alt={coverAlt(book)}
            width={COVER_WIDTH}
            height={COVER_HEIGHT}
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
