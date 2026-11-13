"use client";

import { useState } from "react";
import { Book } from "@/components/ui/Book";
import { books, portfolioCategories, type PortfolioCategory } from "@/content/books";

type Filter = "All" | PortfolioCategory;

const countFor = (filter: Filter) =>
  filter === "All"
    ? books.length
    : books.filter((book) => (book.categories as readonly string[]).includes(filter)).length;

/** The full catalogue, filterable by the document's portfolio categories. */
export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...portfolioCategories];
  const visible = books.filter(
    (book) => filter === "All" || (book.categories as readonly string[]).includes(filter),
  );

  return (
    <div className="shell">
      <div
        role="group"
        aria-label="Portfolio Categories"
        className="-mx-(--gutter) flex gap-x-8 gap-y-3 overflow-x-auto border-y border-navy/20 px-(--gutter) py-5 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((item) => {
          const count = countFor(item);
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              disabled={count === 0}
              onClick={() => setFilter(item)}
              className={`nav-link eyebrow flex shrink-0 items-baseline gap-2 py-1 transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-40 ${
                selected ? "text-navy" : "text-charcoal/55 hover:text-navy"
              }`}
            >
              {item}
              <span className="folio text-sm tracking-normal text-gold-ink normal-case">{count}</span>
            </button>
          );
        })}
      </div>

      <ul
        key={filter}
        aria-live="polite"
        className="mt-16 grid grid-cols-2 gap-x-[8vw] gap-y-20 md:grid-cols-3 lg:mt-24 lg:grid-cols-4 lg:gap-x-[5vw] lg:gap-y-28"
      >
        {visible.map((book, index) => (
          <li
            key={book.slug}
            id={book.slug}
            style={{ animationDelay: `${index * 70}ms` }}
            className={`book-hover scroll-mt-32 motion-safe:animate-[book-rise_1.1s_var(--ease-expo)_both] ${
              index % 2 ? "lg:translate-y-14" : ""
            }`}
          >
            <Book
              slug={book.slug}
              sizes="(min-width: 1024px) 19vw, (min-width: 768px) 27vw, 40vw"
              depth={22}
              priority={index < 4}
            />
            <div className="mt-8">
              <p className="eyebrow text-[0.68rem] text-gold-ink">{book.genre}</p>
              <h2 className="mt-2 font-display text-[clamp(1.3rem,0.8vw+1.05rem,1.7rem)] leading-[1.12] text-balance text-navy">
                {book.title}
              </h2>
              <p className="mt-1.5 text-sm text-charcoal/65">{book.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
