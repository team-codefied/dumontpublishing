import { BookTrio } from "@/components/ui/BookTrio";
import { Flourish } from "@/components/ui/Ornaments";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

/** Genres as a ruled index on one side; the fanned books on the other. */
export function Genres() {
  const { genres } = home;

  return (
    <section data-tilt-area className="relative overflow-hidden py-24 lg:py-36">
      <div className="shell grid items-center gap-x-10 gap-y-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel folio="05">{genres.label}</SectionLabel>
          <Words
            as="h2"
            text={genres.title}
            accent="Different Genres"
            className="display-1 mt-7 text-balance text-navy"
          />
          <Flourish className="mt-4 w-56 text-gold" />

          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {genres.items.map((genre, index) => (
              <li key={genre} className="relative">
                <span data-line data-delay={(index % 2) * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/20" />
                <div
                  data-fade
                  data-y="18"
                  data-delay={(index % 2) * 0.1}
                  className="sweep group flex items-baseline gap-4 px-3 py-4 text-navy transition-colors duration-500 hover:text-ivory"
                >
                  <span className="folio w-6 shrink-0 text-base text-gold-ink transition-colors duration-500 group-hover:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.35rem,0.8vw+1.1rem,1.75rem)] leading-tight transition-transform duration-700 ease-expo group-hover:translate-x-2">
                    {genre}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <BookTrio />
        </div>
      </div>
    </section>
  );
}
