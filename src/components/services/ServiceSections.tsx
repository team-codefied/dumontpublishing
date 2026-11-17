import type { ReactNode } from "react";
import { LeadForm } from "@/components/contact/LeadForm";
import { ButtonLink } from "@/components/ui/Button";
import { DrawnCheck, Flourish, CoverStrip } from "@/components/ui/Ornaments";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { PointsGrid } from "@/components/home/WhyChoose";
import { BookStage, FlowPlate } from "@/components/services/Illustrations";
import type { Service } from "@/content/services";
import { oneTeam, type ServiceExtras } from "@/content/serviceExtras";
import { home } from "@/content/site";

const CONTACT = "/contact-us/";

/** A ticked list; each tick draws itself as it enters. */
function Ticks({ items, light = false, columns = 1 }: { items: readonly string[]; light?: boolean; columns?: 1 | 2 }) {
  return (
    <ul className={columns === 2 ? "grid gap-x-10 sm:grid-cols-2" : ""}>
      {items.map((item, i) => (
        <li key={item} className="relative">
          <div
            data-fade
            data-y="18"
            data-delay={(i % 6) * 0.05}
            className={`group flex items-center gap-4 py-3.5 text-[1.02rem] leading-snug ${light ? "text-ivory" : "text-navy"}`}
          >
            <DrawnCheck className={light ? "text-gold" : "text-gold-ink"} />
            <span className="transition-transform duration-700 ease-expo group-hover:translate-x-1.5">{item}</span>
          </div>
          <span data-line className={`block h-px ${light ? "bg-(--rule-light)" : "bg-navy/12"}`} />
        </li>
      ))}
    </ul>
  );
}

function Heading({
  label,
  title,
  accent,
  light = false,
  className = "",
}: {
  label?: string;
  title: string;
  accent?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {label ? <SectionLabel tone={light ? "light" : "dark"}>{label}</SectionLabel> : null}
      <Words
        as="h2"
        text={title}
        accent={accent}
        accentClassName={`italic ${light ? "text-gold" : "text-gold-ink"}`}
        className={`display-2 text-balance ${label ? "mt-6" : ""} ${light ? "text-ivory" : "text-navy"}`}
      />
      <Flourish className="mt-4 w-44 text-gold" />
    </div>
  );
}

/** Intro split: copy on one side, the flow illustration on the other. */
export function Story({ extras }: { extras: ServiceExtras }) {
  const { story } = extras;
  return (
    <section className="py-20 lg:py-32">
      <div className="shell grid items-center gap-x-14 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Heading label={extras.tag} title={story.title} accent={story.accent} />
          <div className="mt-8 space-y-5 text-[1.02rem] leading-[1.75] text-charcoal/80">
            {story.paragraphs.map((paragraph, i) => (
              <p key={paragraph} data-fade data-delay={i * 0.08}>
                {paragraph}
              </p>
            ))}
          </div>
          <div data-fade className="mt-9">
            <ButtonLink href={CONTACT}>{story.cta}</ButtonLink>
          </div>
        </div>
        <div data-clip="left" className="lg:col-span-6">
          <FlowPlate nodes={story.nodes} chips={story.chips} />
        </div>
      </div>
    </section>
  );
}

/** Benefits: the book stage on the left, a ticked list on the right. */
export function Benefits({ extras }: { extras: ServiceExtras }) {
  const { benefits } = extras;
  return (
    <section className="bg-paper py-20 lg:py-32">
      <div className="shell grid items-center gap-x-14 gap-y-14 lg:grid-cols-12">
        <div data-clip className="lg:col-span-6">
          <BookStage
            covers={benefits.covers}
            chips={[
              [extras.tag, "handled by one team"],
              ["You approve", "every stage"],
            ]}
          />
        </div>
        <div className="lg:col-span-6">
          <Heading title={benefits.title} accent={benefits.accent} />
          <p data-fade className="mt-7 max-w-xl text-[1.02rem] leading-[1.75] text-charcoal/80">
            {benefits.text}
          </p>
          <div className="mt-7">
            <Ticks items={benefits.items} />
          </div>
          <div data-fade className="mt-9">
            <ButtonLink href={CONTACT} variant="outline">
              {benefits.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/** A full-width navy call to action in the middle of the page. */
export function Band({ extras, label }: { extras: ServiceExtras; label: string }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center text-ivory lg:py-28">
      <span
        aria-hidden
        className="outline-text folio pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 text-[22rem] leading-none text-gold/20 italic"
      >
        “
      </span>
      <div className="shell relative">
        <p data-fade className="eyebrow inline-flex items-center gap-3 text-gold">
          <span aria-hidden>✦</span>
          {label}
        </p>
        <Words
          as="h2"
          text={extras.band.title}
          className="display-1 mx-auto mt-6 max-w-4xl text-balance"
        />
        <div data-fade data-delay="0.15" className="mt-9">
          <ButtonLink href={CONTACT} variant="gold">
            {extras.band.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Who this service is for. */
export function Audience({ extras }: { extras: ServiceExtras }) {
  const { audience } = extras;
  if (!audience) return null;
  return (
    <section className="py-20 lg:py-32">
      <div className="shell grid gap-x-14 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Heading title={audience.title} accent={audience.accent} />
            <p data-fade className="mt-7 max-w-md text-[1.02rem] leading-[1.75] text-charcoal/80">
              {audience.text}
            </p>
            <div data-fade className="mt-9">
              <ButtonLink href={CONTACT}>{audience.cta}</ButtonLink>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {audience.items.map((item, i) => (
              <li key={item} className="relative pt-6 pb-8">
                <span data-line data-delay={(i % 2) * 0.1} className="absolute inset-x-0 top-0 h-px bg-navy/25" />
                <div data-fade data-delay={(i % 2) * 0.1 + 0.1} className="group">
                  <span className="folio text-lg text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-display text-[1.5rem] leading-tight text-navy transition-transform duration-700 ease-expo group-hover:translate-x-1.5">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** The document's genre list, with the book stage beside it. */
export function Genres({ extras }: { extras: ServiceExtras }) {
  const { genres, benefits } = extras;
  if (!genres) return null;
  return (
    <section className="bg-ivory-deep py-20 lg:py-32">
      <div className="shell grid items-center gap-x-14 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Heading label={home.genres.label} title={genres.title} accent={genres.accent} />
          <p data-fade className="mt-7 max-w-xl text-[1.02rem] leading-[1.75] text-charcoal/80">
            {genres.text}
          </p>
          <div className="mt-7">
            <Ticks items={home.genres.items} columns={2} />
          </div>
        </div>
        <div data-clip="left" className="lg:col-span-6">
          <BookStage
            covers={[benefits.covers[2], benefits.covers[0], benefits.covers[1]]}
            chips={[
              ["Every genre", "has its own approach"],
              ["Your genre", "with your readers in mind"],
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/** The document's six service groups as one ticked checklist. */
export function OneTeam() {
  return (
    <section className="py-20 lg:py-32">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Heading title={oneTeam.title} accent={oneTeam.accent} className="[&_div]:mx-auto [&_svg]:mx-auto" />
          <p data-fade className="mx-auto mt-7 max-w-2xl text-[1.02rem] leading-[1.75] text-charcoal/80">
            {oneTeam.text}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-5xl">
          <Ticks items={oneTeam.items} columns={2} />
        </div>
        <div data-fade className="mt-12 text-center">
          <ButtonLink href={CONTACT}>{oneTeam.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** The eight covers on a slowly travelling shelf. */
export function Shelf() {
  return (
    <section className="overflow-hidden bg-navy py-20 text-ivory lg:py-28">
      <div className="shell">
        <Heading
          label={home.portfolio.label}
          title={home.portfolio.title}
          accent="into the World"
          light
          className="max-w-3xl"
        />
      </div>
      <CoverStrip className="mt-14" duration={80} />
    </section>
  );
}

/** The document's six reasons to choose Dumont. */
export function WhyUs() {
  const { why } = home;
  return (
    <section className="py-20 lg:py-32">
      <div className="shell grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Heading label={why.label} title={why.title} accent="A Partner" />
            <p data-fade className="mt-7 max-w-sm text-[0.975rem] leading-relaxed text-charcoal/75">
              {why.text}
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <PointsGrid points={why.points} />
        </div>
      </div>
    </section>
  );
}

/** Closing section: the service's own call to action beside the enquiry form. */
export function ClosingForm({ service, children }: { service: Service; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 lg:py-32">
      <div className="shell grid items-center gap-x-14 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionLabel>{service.label}</SectionLabel>
          <Words as="h2" text={service.cta} className="display-1 mt-6 text-balance text-navy" />
          <Flourish className="mt-4 w-56 text-gold" />
          <p data-fade className="lede mt-7 max-w-lg text-charcoal/80">
            {home.finalCta.text}
          </p>
          {children}
        </div>
        <div data-fade data-y="70" className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
          <LeadForm service={service.label} />
        </div>
      </div>
    </section>
  );
}
