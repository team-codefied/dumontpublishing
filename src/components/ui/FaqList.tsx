import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FaqListProps = {
  questions: string[];
  tone?: "dark" | "light";
  columns?: 1 | 2;
  /** Numbering offset, so grouped lists can continue a sequence. */
  startAt?: number;
};

export const askHref = (question: string) => `/contact-us/?question=${encodeURIComponent(question)}`;

/**
 * Frequently asked questions. The content document supplies the questions
 * but not yet their answers, so each one opens the enquiry form with the
 * question carried across — an honest route to an answer rather than an
 * accordion with nothing inside it.
 */
export function FaqList({ questions, tone = "dark", columns = 1, startAt = 1 }: FaqListProps) {
  const light = tone === "light";

  return (
    <ul className={columns === 2 ? "grid gap-x-12 lg:grid-cols-2" : ""}>
      {questions.map((question, index) => (
        <li key={question} className="relative">
          <span data-line className={`absolute inset-x-0 top-0 h-px ${light ? "bg-(--rule-light)" : "bg-navy/20"}`} />
          <Link
            href={askHref(question)}
            data-fade
            data-y="18"
            className={`group flex items-baseline gap-5 py-6 ${light ? "text-ivory" : "text-navy"}`}
          >
            <span className={`folio w-7 shrink-0 text-base ${light ? "text-gold" : "text-gold-ink"}`}>
              {String(index + startAt).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display text-[clamp(1.3rem,0.7vw+1.1rem,1.65rem)] leading-snug transition-transform duration-700 ease-expo group-hover:translate-x-2">
              {question}
            </span>
            <span
              className={`eyebrow hidden shrink-0 items-center gap-2 self-center text-[0.68rem] sm:flex ${
                light ? "text-gold" : "text-gold-ink"
              }`}
            >
              Ask us
              <ArrowUpRight
                aria-hidden
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-700 ease-expo group-hover:rotate-45"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
