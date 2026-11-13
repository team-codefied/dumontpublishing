import Link from "next/link";
import { Book } from "@/components/ui/Book";
import { TextLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { books } from "@/content/books";
import { home } from "@/content/site";

/**
 * The eight titles on a shelf. Desktop: the shelf travels sideways as the
 * section scrolls past. Touch: a native, snapping horizontal scroll.
 */
export function PortfolioShelf() {
  const { portfolio } = home;

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-ivory lg:py-36">
      <div className="shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <SectionLabel folio="06" tone="light">
            {portfolio.label}
          </SectionLabel>
          <Words
            as="h2"
            text={portfolio.title}
            accent="into the World"
            accentClassName="italic text-gold"
            className="display-1 mt-7 text-balance"
          />
        </div>
        <div data-fade>
          <TextLink href="/portfolio/" className="text-gold">
            Our Portfolio
          </TextLink>
        </div>
      </div>

      <div className="mt-16 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] lg:mt-24 lg:snap-none lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        <ul
          data-drift
          className="flex w-max gap-[7vw] px-(--gutter) pb-6 lg:gap-[4.5vw] lg:pr-[10vw] lg:will-change-transform"
        >
          {books.map((book, index) => (
            <li
              key={book.slug}
              className={`w-[58vw] shrink-0 snap-center sm:w-[36vw] lg:w-[19vw] 3xl:w-[20rem] ${
                index % 2 ? "lg:mt-20" : ""
              }`}
            >
              <Link href={`/portfolio/#${book.slug}`} className="book-hover group block">
                <div data-fade data-y="70" data-delay={Math.min(index, 4) * 0.08}>
                  <Book slug={book.slug} sizes="(min-width: 1024px) 19vw, (min-width: 640px) 36vw, 58vw" />
                </div>
                <div className="mt-9">
                  <p className="eyebrow text-[0.68rem] text-gold">{book.genre}</p>
                  <h3 className="mt-2 font-display text-[1.6rem] leading-[1.12] text-balance">{book.title}</h3>
                  <p className="mt-1.5 text-sm text-ivory/60">{book.author}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
