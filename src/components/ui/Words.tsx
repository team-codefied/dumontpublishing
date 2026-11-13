import type { ElementType } from "react";

type WordsProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** A phrase inside `text` to set in gold italic — typographic emphasis only. */
  accent?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  id?: string;
};

/**
 * Splits a heading into masked words on the server so the reveal animation
 * needs no client-side text splitting (no layout shift, fully indexable).
 */
export function Words({
  text,
  as: Tag = "span",
  className,
  accent,
  accentClassName = "italic text-gold-ink",
  delay,
  stagger,
  id,
}: WordsProps) {
  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];
  let accentStart = -1;
  if (accentWords.length) {
    accentStart = words.findIndex((_, i) => accentWords.every((w, j) => words[i + j] === w));
  }

  return (
    <Tag id={id} className={className} data-words data-delay={delay} data-stagger={stagger}>
      {words.map((word, index) => {
        const isAccent =
          accentStart > -1 && index >= accentStart && index < accentStart + accentWords.length;
        return (
          <span key={index}>
            <span className="w">
              <span className={`w-i${isAccent ? ` ${accentClassName}` : ""}`}>{word}</span>
            </span>
            {index < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}

/** A paragraph whose words ink in as the reader scrolls through it. */
export function ScrubWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={className} data-scrub-words>
      {words.map((word, index) => (
        <span key={index}>
          <span className="sw">{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
