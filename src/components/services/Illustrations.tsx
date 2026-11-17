import { Book } from "@/components/ui/Book";
import type { BookSlug } from "@/content/books";

type Chip = [title: string, subtitle: string];

/** A small floating label, like a sticky note pinned to the illustration. */
function ChipTag({ chip, className, float }: { chip: Chip; className: string; float: number }) {
  return (
    <div className={`absolute z-10 ${className}`} data-fade data-y="30">
      <div
        data-float={float}
        className="flex items-center gap-3 border border-navy/10 bg-paper px-4 py-3 shadow-[0.5rem_0.8rem_1.8rem_-0.8rem_rgb(15_33_49/0.35)]"
      >
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-gold" />
        <span className="leading-tight">
          <span className="block text-[0.78rem] font-semibold text-navy">{chip[0]}</span>
          <span className="block text-[0.68rem] text-charcoal/60">{chip[1]}</span>
        </span>
      </div>
    </div>
  );
}

const dots = {
  backgroundImage: "radial-gradient(color-mix(in srgb, var(--color-navy) 14%, transparent) 1px, transparent 1.2px)",
  backgroundSize: "18px 18px",
} as const;

/**
 * An editorial diagram: four stages joined by a drawn line, with chips
 * pinned around it. Pure markup, so it scales and animates cleanly.
 */
export function FlowPlate({
  nodes,
  chips,
}: {
  nodes: [string, string, string, string];
  chips: [Chip, Chip, Chip];
}) {
  return (
    <div className="relative aspect-[6/5] w-full overflow-hidden bg-ivory-deep sm:aspect-[5/4]">
      <div aria-hidden className="absolute inset-0 opacity-70" style={dots} />
      <span aria-hidden className="absolute inset-3 border border-gold/55" />
      <span aria-hidden className="absolute -right-10 -bottom-10 size-44 rounded-full border border-gold/40" />
      <span aria-hidden className="absolute -right-4 -bottom-4 size-24 rounded-full border border-gold/30" />

      <ChipTag chip={chips[0]} float={8} className="top-[9%] left-[5%]" />
      <ChipTag chip={chips[1]} float={-9} className="top-[13%] right-[5%]" />
      <ChipTag chip={chips[2]} float={7} className="bottom-[9%] left-[8%]" />

      <div className="absolute inset-x-[7%] top-1/2 -translate-y-1/2">
        <span data-line data-delay="0.2" className="absolute inset-x-[9%] top-[1.7rem] h-px bg-navy/30" />
        <ol className="relative flex justify-between">
          {nodes.map((node, index) => {
            const last = index === nodes.length - 1;
            return (
              <li key={node} className="flex w-1/4 flex-col items-center gap-3 text-center">
                <span
                  data-fade
                  data-y="16"
                  data-delay={0.2 + index * 0.12}
                  className={`grid size-[3.4rem] place-items-center rounded-full border font-display text-xl italic ${
                    last
                      ? "border-gold bg-gold text-navy-deep shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-gold)_25%,transparent)]"
                      : "border-navy/40 bg-ivory text-navy"
                  }`}
                >
                  {index + 1}
                </span>
                <span data-fade data-y="10" data-delay={0.3 + index * 0.12} className="eyebrow text-[0.64rem] text-navy">
                  {node}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/**
 * A single cover on an arched plate, turning as the section scrolls past,
 * with two chips pinned beside it.
 */
export function BookStage({
  covers,
  chips,
}: {
  covers: [BookSlug, BookSlug, BookSlug];
  chips: [Chip, Chip];
}) {
  const [left, centre, right] = covers;
  return (
    <div data-turn-area className="relative aspect-[6/5] w-full overflow-hidden bg-ivory-deep sm:aspect-[5/4]">
      <div aria-hidden className="absolute inset-0 opacity-70" style={dots} />
      <span aria-hidden className="absolute inset-3 border border-gold/55" />
      <div aria-hidden className="absolute inset-x-[22%] top-[9%] bottom-0 rounded-t-full bg-paper">
        <span className="absolute inset-2.5 rounded-t-full border border-gold/50" />
      </div>

      <div className="absolute bottom-[10%] left-[7%] hidden w-[19%] -rotate-6 opacity-95 sm:block">
        <Book slug={left} sizes="120px" angle={-26} depth={14} />
      </div>
      <div className="absolute bottom-[10%] right-[7%] hidden w-[19%] rotate-6 opacity-95 sm:block">
        <Book slug={right} sizes="120px" angle={-18} depth={14} />
      </div>
      <div className="absolute bottom-[9%] left-1/2 z-[1] w-[30%] -translate-x-1/2">
        <Book slug={centre} sizes="(min-width: 1024px) 18vw, 40vw" angle={-30} depth={24} turn="-46,14" />
      </div>

      <ChipTag chip={chips[0]} float={8} className="top-[9%] left-[5%]" />
      <ChipTag chip={chips[1]} float={-8} className="top-[16%] right-[5%]" />
    </div>
  );
}
