import { Book } from "@/components/ui/Book";
import { ButtonLink } from "@/components/ui/Button";
import { Words } from "@/components/ui/Words";
import type { BookSlug } from "@/content/books";

type CtaBandProps = {
  title: string;
  text?: string;
  cta: { label: string; href: string };
  accent?: string;
  /** Two covers that drift in from the edges on large screens. */
  covers?: [BookSlug, BookSlug];
};

/** The closing call to action: one statement, one button. */
export function CtaBand({
  title,
  text,
  cta,
  accent,
  covers = ["beyond-the-last-horizon", "behind-closed-doors"],
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
        <div data-parallax="0.5" className="absolute top-[18%] -left-[5.5rem] w-[15rem] -rotate-6 opacity-90">
          <Book slug={covers[0]} sizes="240px" angle={24} depth={24} />
        </div>
        <div data-parallax="-0.4" className="absolute -right-[5.5rem] bottom-[10%] w-[15rem] rotate-6 opacity-90">
          <Book slug={covers[1]} sizes="240px" angle={-28} depth={24} />
        </div>
      </div>

      <div className="shell relative py-28 text-center lg:py-44">
        <span data-line="y" className="mx-auto mb-10 block h-16 w-px bg-gold" />
        <Words
          as="h2"
          text={title}
          accent={accent}
          accentClassName="italic text-gold"
          stagger={0.07}
          className="display-hero mx-auto max-w-5xl text-balance"
        />
        {text ? (
          <p data-fade className="lede mx-auto mt-9 max-w-2xl text-ivory/75">
            {text}
          </p>
        ) : null}
        <div data-fade data-delay="0.15" className="mt-11">
          <ButtonLink href={cta.href} variant="gold">
            {cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
