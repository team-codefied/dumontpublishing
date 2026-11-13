import { LeadForm } from "@/components/contact/LeadForm";
import { ButtonLink } from "@/components/ui/Button";
import { Flourish, Seal } from "@/components/ui/Ornaments";
import { Words } from "@/components/ui/Words";
import { home, site } from "@/content/site";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+2rem)] pb-16 lg:min-h-svh lg:pt-(--header-h) lg:pb-0">
      {/* manuscript margins */}
      <div aria-hidden className="shell pointer-events-none absolute inset-0 hidden lg:block">
        <span data-line="y" data-delay="0.2" className="absolute inset-y-0 left-(--gutter) w-px bg-(--rule)" />
        <span data-line="y" data-delay="0.35" className="absolute inset-y-0 left-[58.333%] w-px bg-(--rule)" />
        <span data-line="y" data-delay="0.5" className="absolute inset-y-0 right-(--gutter) w-px bg-(--rule)" />
      </div>

      {/* a faint initial in the margin */}
      <p
        aria-hidden
        data-parallax="-0.35"
        className="outline-text pointer-events-none absolute -bottom-[6%] left-[38%] hidden font-display text-[34rem] leading-none text-gold/35 italic lg:block"
      >
        D
      </p>

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
          <Flourish delay={0.9} className="mt-3 w-64 text-gold" />

          <p data-fade data-delay="0.55" className="mt-6 max-w-[40rem] text-[1.0625rem] leading-[1.7] text-charcoal/80">
            {hero.text}
          </p>

          <div data-fade data-delay="0.7" className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        {/* lead form */}
        <div className="relative lg:col-span-5 lg:py-10 xl:pl-6">
          <div data-fade data-y="90" data-delay="0.45" data-duration="1.5" className="relative">
            <LeadForm />
            <div aria-hidden className="absolute -top-12 -right-3 hidden rounded-full bg-ivory sm:block lg:-right-8">
              <Seal text={site.name} className="size-28">
                <span className="font-display text-3xl text-gold-ink italic">D</span>
              </Seal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
