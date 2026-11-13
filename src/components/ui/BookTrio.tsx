import { Book } from "@/components/ui/Book";
import { getBook, type BookSlug } from "@/content/books";

type BookTrioProps = {
  /** Left, centre and right titles. */
  slugs?: [BookSlug, BookSlug, BookSlug];
  priority?: boolean;
  /** Shows the centre title's credit line beneath the stack. */
  caption?: boolean;
  className?: string;
};

/**
 * Three books fanned in front of an arched plate. The stack leans toward the
 * pointer (inside the nearest [data-tilt-area]) and each book floats idly.
 */
export function BookTrio({
  slugs = ["a-life-beyond-limits", "the-kingdom-of-forgotten-stars", "a-thousand-little-moments"],
  priority = false,
  caption = true,
  className = "",
}: BookTrioProps) {
  const [left, centre, right] = slugs;
  const featured = getBook(centre);

  return (
    <div className={`relative [perspective:1800px] ${className}`}>
      <div
        data-tilt="9"
        className="relative mx-auto aspect-[10/11] w-full max-w-[24rem] sm:max-w-[30rem] lg:max-w-[36rem] [transform-style:preserve-3d]"
      >
        {/* arched frontispiece */}
        <div data-clip data-delay="0.1" className="absolute inset-x-[10%] -top-[5%] bottom-0 rounded-t-full bg-ivory-deep">
          <span className="absolute inset-3 rounded-t-full border border-gold/60" />
        </div>

        <div data-fade data-y="150" data-rotate="-7" data-delay="0.3" className="absolute top-[27%] left-0 w-[41%]">
          <div data-float="10">
            <Book slug={left} sizes="(min-width: 1024px) 15vw, 40vw" angle={-32} depth={22} priority={priority} />
          </div>
        </div>

        <div data-fade data-y="150" data-rotate="7" data-delay="0.42" className="absolute top-[32%] right-0 w-[39%]">
          <div data-float="-9">
            <Book slug={right} sizes="(min-width: 1024px) 14vw, 38vw" angle={-16} depth={22} priority={priority} />
          </div>
        </div>

        <div
          data-fade
          data-y="180"
          data-delay="0.15"
          data-duration="1.6"
          className="absolute top-[9%] left-1/2 z-10 w-[54%] -translate-x-1/2"
        >
          <div data-float="14">
            <Book
              slug={centre}
              sizes="(min-width: 1024px) 20vw, 52vw"
              angle={-24}
              depth={34}
              priority={priority}
              interactive
            />
          </div>
        </div>
      </div>

      {caption ? (
        <p data-fade data-delay="0.6" className="mt-6 text-center text-[0.8rem] leading-snug text-charcoal/60">
          <span className="block font-display text-lg text-navy italic">{featured.title}</span>
          {featured.author} · {featured.genre}
        </p>
      ) : null}
    </div>
  );
}
