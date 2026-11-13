import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PointsGrid } from "@/components/home/WhyChoose";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrubWords, Words } from "@/components/ui/Words";
import { COVER_HEIGHT, COVER_WIDTH, coverAlt, coverSrc, getBook } from "@/content/books";
import { categories, servicesInCategory } from "@/content/services";
import { about, home, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: about.seoTitle,
  description: home.intro.text.split(". ").slice(2, 3).join("") + ".",
  path: about.path,
});

const storyCovers = [getBook("a-life-beyond-limits"), getBook("a-thousand-little-moments")] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About Us", path: about.path }]}
        label={site.tagline}
        title={about.title}
        accent="Published Books"
      >
        <p className="lede text-charcoal/80">{site.positioning}</p>
      </PageHero>

      {/* Our Story */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-x-10 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel folio="01">Our Story</SectionLabel>
            <Words
              as="h2"
              text={home.intro.title}
              accent="First Idea to the Final Page"
              className="display-1 mt-7 text-balance text-navy"
            />
            <ScrubWords
              text={home.intro.text}
              className="mt-10 font-display text-[clamp(1.35rem,1vw+1.05rem,1.75rem)] leading-[1.42] text-navy"
            />
          </div>
          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative mx-auto w-[70%] max-w-[24rem] lg:mx-0 lg:ml-auto lg:w-[80%]">
              <figure data-clip className="overflow-hidden shadow-[1.5rem_2rem_4rem_-1.5rem_rgb(15_33_49/0.45)]">
                <Image
                  src={coverSrc(storyCovers[0].slug)}
                  alt={coverAlt(storyCovers[0])}
                  width={COVER_WIDTH}
                  height={COVER_HEIGHT}
                  sizes="(min-width: 1024px) 28vw, 70vw"
                  className="h-auto w-full"
                />
              </figure>
              <div data-parallax="0.35" className="absolute bottom-[-10%] -left-[30%] w-[48%]">
                <figure data-clip data-delay="0.25" className="overflow-hidden shadow-[1rem_1.4rem_3rem_-1rem_rgb(15_33_49/0.55)]">
                  <Image
                    src={coverSrc(storyCovers[1].slug)}
                    alt={coverAlt(storyCovers[1])}
                    width={COVER_WIDTH}
                    height={COVER_HEIGHT}
                    sizes="(min-width: 1024px) 14vw, 34vw"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission · Our Vision */}
      <section className="bg-navy py-24 text-ivory lg:py-36">
        <div className="shell grid gap-x-16 gap-y-20 lg:grid-cols-2">
          {[
            { label: "Our Mission", text: site.alternativeTaglines[2], folio: "02" },
            { label: "Our Vision", text: site.tagline, folio: "03" },
          ].map((item) => (
            <div key={item.label} className="relative pt-8">
              <span data-line className="absolute inset-x-0 top-0 h-px bg-gold/60" />
              <SectionLabel folio={item.folio} tone="light">
                {item.label}
              </SectionLabel>
              <Words
                as="h2"
                text={item.text}
                stagger={0.07}
                className="display-1 mt-8 text-balance italic"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel folio="04">Our Approach</SectionLabel>
            <Words
              as="h2"
              text={home.why.title}
              accent="A Partner in Your Author Journey"
              className="display-1 mt-7 text-balance text-navy"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p data-fade className="font-display text-[clamp(1.4rem,1vw+1.1rem,1.8rem)] leading-[1.4] text-navy">
              {home.why.text}
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-ivory-deep py-24 lg:py-36">
        <div className="shell">
          <div className="max-w-3xl">
            <SectionLabel folio="05">Our Expertise</SectionLabel>
            <Words
              as="h2"
              text={home.services.title}
              accent="Under One Roof"
              className="display-1 mt-7 text-balance text-navy"
            />
          </div>
          <ul className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <li key={category.id} className="relative pt-7 pb-12">
                <span data-line data-delay={(index % 3) * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                <div data-fade data-delay={(index % 3) * 0.1 + 0.1}>
                  <span className="folio text-lg text-gold-ink">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="display-3 mt-3 text-navy">{category.name}</h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-charcoal/75">{category.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {servicesInCategory(category.id).map((service) => (
                      <li key={service.slug}>
                        <Link href={`/${service.slug}/`} className="nav-link eyebrow text-[0.7rem] text-navy">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel folio="06">Why Choose Us</SectionLabel>
              <Words as="h2" text={home.why.label} className="display-1 mt-7 text-balance text-navy" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <PointsGrid points={home.why.points} />
          </div>
        </div>
      </section>

      <CtaBand
        title={home.finalCta.title}
        accent="Deserves to Be Told."
        text={home.finalCta.text}
        cta={home.finalCta.cta}
      />
    </>
  );
}
