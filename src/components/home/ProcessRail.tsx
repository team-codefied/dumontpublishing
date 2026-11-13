import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

/**
 * The publishing process as six chapters. On desktop the section pins and
 * the chapters travel sideways with scroll; on smaller screens it reads as
 * a vertical sequence.
 */
export function ProcessRail() {
  const { process } = home;

  return (
    <section data-hscroll className="relative overflow-hidden bg-ivory-deep">
      <div className="flex flex-col justify-center py-24 lg:h-svh lg:py-0">
        <div
          data-hscroll-track
          className="flex flex-col gap-y-12 px-(--gutter) lg:w-max lg:flex-row lg:items-stretch lg:gap-0 lg:pr-[12vw] lg:will-change-transform"
        >
          <header className="flex shrink-0 flex-col justify-center lg:w-[42vw] lg:pr-[6vw]">
            <SectionLabel folio="04">{process.label}</SectionLabel>
            <Words
              as="h2"
              text={process.title}
              accent="Published Book"
              className="display-1 mt-7 text-balance text-navy"
            />
          </header>

          <ol className="flex flex-col lg:flex-row">
            {process.steps.map((step, index) => (
              <li
                key={step.name}
                data-hscroll-item
                className="relative flex shrink-0 flex-col justify-end border-t border-navy/20 py-8 lg:h-[62svh] lg:w-[30vw] lg:border-t-0 lg:border-l lg:px-[2.5vw] lg:py-0 xl:w-[26vw]"
              >
                <span
                  aria-hidden
                  data-hscroll-numeral
                  className="outline-text folio pointer-events-none text-[5.5rem] leading-none text-gold-ink lg:absolute lg:top-0 lg:left-[2.5vw] lg:text-[clamp(8rem,13vw,13rem)]"
                >
                  {index + 1}
                </span>
                <div data-fade className="lg:pb-2">
                  <p className="eyebrow text-gold-ink">
                    Step {index + 1} / {process.steps.length}
                  </p>
                  <h3 className="display-3 mt-3 text-balance text-navy lg:text-[2.1rem]">{step.name}</h3>
                  <p className="mt-4 max-w-sm text-[0.975rem] leading-relaxed text-charcoal/75">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* reading progress */}
        <div aria-hidden className="absolute inset-x-(--gutter) bottom-10 hidden h-px bg-navy/15 lg:block">
          <span data-hscroll-progress className="block h-full origin-left scale-x-0 bg-gold-ink" />
        </div>
      </div>
    </section>
  );
}
