import { ArrowDown } from "lucide-react";
import { Book } from "@/components/ui/Book";
import { ButtonLink } from "@/components/ui/Button";
import { Words } from "@/components/ui/Words";
import { getBook } from "@/content/books";
import { home, site } from "@/content/site";

const featured = getBook("the-kingdom-of-forgotten-stars");

export function Hero() {
  const { hero } = home;

  return (
    <section
      data-tilt-area
      className="relative overflow-hidden pt-[calc(var(--header-h)+2rem)] lg:min-h-svh lg:pt-(--header-h)"
    >
      {/* manuscript margins */}
      <div aria-hidden className="shell pointer-events-none absolute inset-0 hidden lg:block">
        <span data-line="y" data-delay="0.2" className="absolute inset-y-0 left-(--gutter) w-px bg-(--rule)" />
        <span data-line="y" data-delay="0.35" className="absolute inset-y-0 left-[58.333%] w-px bg-(--rule)" />
        <span data-line="y" data-delay="0.5" className="absolute inset-y-0 right-(--gutter) w-px bg-(--rule)" />
      </div>

      <div className="shell relative grid items-center gap-x-10 gap-y-14 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-12">
        <div className="lg:col-span-7 lg:py-10 lg:pr-6 lg:pl-10 xl:pl-14">
          <p data-fade data-y="14" className="eyebrow flex items-center gap-4 text-gold-ink">
            <span aria-hidden className="h-px w-10 bg-current opacity-60" />
            {site.tagline}
          </p>

          <Words
            as="h1"
            text={hero.title}
            accent="Your Story to Life"
            delay={0.1}
            className="display-hero mt-7 text-balance text-navy"
          />

          <p data-fade data-delay="0.55" className="mt-7 max-w-[40rem] text-[1.0625rem] leading-[1.7] text-charcoal/80">
            {hero.text}
          </p>

          <div data-fade data-delay="0.7" className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* the books */}
        <div className="relative pb-16 lg:col-span-5 lg:pb-0 [perspective:1800px]">
          <div
            data-tilt="9"
            className="relative mx-auto aspect-[10/11] w-full max-w-[24rem] sm:max-w-[30rem] lg:max-w-[34rem] [transform-style:preserve-3d]"
          >
            {/* a plate behind the stack, like an arched frontispiece */}
            <div
              data-clip
              data-delay="0.25"
              className="absolute inset-x-[10%] -top-[5%] bottom-0 rounded-t-full bg-ivory-deep"
            >
              <span className="absolute inset-3 rounded-t-full border border-gold/60" />
            </div>

            <div data-fade data-y="150" data-rotate="-7" data-delay="0.6" className="absolute top-[27%] left-0 w-[41%]">
              <div data-float="10">
                <Book slug="a-life-beyond-limits" sizes="(min-width: 1024px) 14vw, 40vw" angle={-32} depth={22} priority />
              </div>
            </div>

            <div data-fade data-y="150" data-rotate="7" data-delay="0.72" className="absolute top-[32%] right-0 w-[39%]">
              <div data-float="-9">
                <Book slug="a-thousand-little-moments" sizes="(min-width: 1024px) 13vw, 38vw" angle={-16} depth={22} priority />
              </div>
            </div>

            <div
              data-fade
              data-y="180"
              data-delay="0.45"
              data-duration="1.6"
              className="absolute top-[9%] left-1/2 z-10 w-[54%] -translate-x-1/2"
            >
              <div data-float="14">
                <Book
                  slug={featured.slug}
                  sizes="(min-width: 1024px) 19vw, 52vw"
                  angle={-24}
                  depth={34}
                  priority
                  interactive
                />
              </div>
            </div>
          </div>

          <p
            data-fade
            data-delay="1"
            className="absolute right-0 bottom-4 hidden text-right text-[0.8rem] leading-snug text-charcoal/60 lg:block"
          >
            <span className="block font-display text-lg text-navy italic">{featured.title}</span>
            {featured.author} · {featured.genre}
          </p>
        </div>
      </div>

      <a
        href="#introduction"
        data-fade
        data-delay="1.1"
        className="eyebrow absolute bottom-7 left-(--gutter) hidden items-center gap-3 text-navy/70 lg:ml-10 xl:ml-14 [@media(min-width:1024px)_and_(min-height:1040px)]:flex"
      >
        <span className="grid size-9 place-items-center rounded-full border border-navy/30">
          <ArrowDown aria-hidden size={14} strokeWidth={1.5} className="animate-bounce" />
        </span>
        Scroll
      </a>
    </section>
  );
}
