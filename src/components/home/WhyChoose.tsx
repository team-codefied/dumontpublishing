import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

type Point = { name: string; text: string };

/** Six differentiators set as ruled entries rather than cards. */
export function PointsGrid({ points, tone = "dark" }: { points: Point[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {points.map((point, index) => (
        <li key={point.name} className="relative pt-7 pb-10 lg:pb-14">
          <span
            data-line
            data-delay={(index % 2) * 0.12}
            className={`absolute inset-x-0 top-0 h-px ${light ? "bg-(--rule-light)" : "bg-navy/25"}`}
          />
          <div data-fade data-delay={(index % 2) * 0.12 + 0.15}>
            <span className={`folio text-lg ${light ? "text-gold" : "text-gold-ink"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={`display-3 mt-3 ${light ? "text-ivory" : "text-navy"}`}>{point.name}</h3>
            <p className={`mt-3 max-w-sm text-[0.975rem] leading-relaxed ${light ? "text-ivory/70" : "text-charcoal/75"}`}>
              {point.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WhyChoose() {
  const { why } = home;

  return (
    <section className="relative py-24 lg:py-40">
      <div className="shell grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel folio="03">{why.label}</SectionLabel>
            <Words
              as="h2"
              text={why.title}
              accent="A Partner in Your Author Journey"
              className="display-1 mt-7 text-balance text-navy"
            />
            <p data-fade className="lede mt-8 max-w-lg text-charcoal/80">
              {why.text}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <PointsGrid points={why.points} />
        </div>
      </div>
    </section>
  );
}
