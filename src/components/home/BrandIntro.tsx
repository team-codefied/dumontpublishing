import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrubWords, Words } from "@/components/ui/Words";
import { COVER_HEIGHT, COVER_WIDTH, coverAlt, coverSrc, getBook } from "@/content/books";
import { home, site } from "@/content/site";

const lead = getBook("the-power-of-starting-again");
const aside = getBook("the-house-beneath-the-silence");

export function BrandIntro() {
  const { intro } = home;

  return (
    <section id="introduction" className="relative py-24 lg:py-40">
      <div className="shell grid gap-x-10 gap-y-16 lg:grid-cols-12">
        {/* layered covers */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-[72%] max-w-[26rem] lg:mx-0 lg:w-[78%]">
            <figure data-clip className="overflow-hidden shadow-[1.5rem_2rem_4rem_-1.5rem_rgb(15_33_49/0.45)]">
              <Image
                src={coverSrc(lead.slug)}
                alt={coverAlt(lead)}
                width={COVER_WIDTH}
                height={COVER_HEIGHT}
                sizes="(min-width: 1024px) 30vw, 70vw"
                className="h-auto w-full"
              />
            </figure>
            <div data-parallax="0.35" className="absolute -right-[32%] bottom-[-9%] w-[46%]">
              <figure data-clip data-delay="0.25" className="overflow-hidden shadow-[1rem_1.4rem_3rem_-1rem_rgb(15_33_49/0.55)]">
                <Image
                  src={coverSrc(aside.slug)}
                  alt={coverAlt(aside)}
                  width={COVER_WIDTH}
                  height={COVER_HEIGHT}
                  sizes="(min-width: 1024px) 14vw, 32vw"
                  className="h-auto w-full"
                />
              </figure>
            </div>
            <p
              aria-hidden
              data-parallax="-0.25"
              className="folio absolute -top-10 -left-4 text-[7rem] leading-none text-gold/50 lg:-left-10 lg:text-[10rem]"
            >
              &amp;
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <SectionLabel folio="01">{site.name}</SectionLabel>
          <Words
            as="h2"
            text={intro.title}
            accent="First Idea to the Final Page"
            className="display-1 mt-7 text-balance text-navy"
          />
          <ScrubWords
            text={intro.text}
            className="mt-10 font-display text-[clamp(1.35rem,1vw+1.05rem,1.75rem)] leading-[1.42] text-navy"
          />
          <div data-fade className="mt-10">
            <TextLink href={intro.cta.href} className="text-navy">
              {intro.cta.label}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
