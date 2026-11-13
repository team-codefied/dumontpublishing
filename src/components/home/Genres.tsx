import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

/** Genres in a ruled grid; each cell floods with ink on hover. */
export function Genres() {
  const { genres } = home;

  return (
    <section className="relative py-24 lg:py-40">
      <div className="shell">
        <div className="max-w-4xl">
          <SectionLabel folio="05">{genres.label}</SectionLabel>
          <Words
            as="h2"
            text={genres.title}
            accent="Different Genres"
            className="display-1 mt-7 text-balance text-navy"
          />
        </div>

        <ul
          data-stagger="0.05"
          className="mt-14 grid grid-cols-2 border-t border-l border-navy/20 md:grid-cols-3 lg:mt-20 lg:grid-cols-5"
        >
          {genres.items.map((genre, index) => (
            <li
              key={genre}
              className="sweep group flex aspect-[5/4] flex-col justify-between border-r border-b border-navy/20 p-4 text-navy transition-colors duration-500 hover:text-ivory sm:p-6 lg:aspect-[4/5]"
            >
              <span className="folio text-base text-gold-ink transition-colors duration-500 group-hover:text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(1.3rem,1.2vw+0.9rem,2rem)] leading-[1.08] text-balance">
                {genre}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
