import { Book } from "@/components/ui/Book";
import { DrawnCheck, Flourish, Seal } from "@/components/ui/Ornaments";
import { Words } from "@/components/ui/Words";
import { getBook, type BookSlug } from "@/content/books";
import type { ServiceBlock } from "@/content/services";

const two = (n: number) => String(n).padStart(2, "0");

type BlockProps<T extends ServiceBlock["type"]> = {
  block: Extract<ServiceBlock, { type: T }>;
  index: number;
};

/** Section opener shared by every block: folio + H2 on a ruled line. */
function BlockHeading({ index, heading, light = false }: { index: number; heading: string; light?: boolean }) {
  return (
    <div>
      <span data-line className={`block h-px ${light ? "bg-(--rule-light)" : "bg-navy/25"}`} />
      <p data-fade data-y="12" className={`folio mt-6 text-lg ${light ? "text-gold" : "text-gold-ink"}`}>
        {two(index)}
      </p>
      <Words
        as="h2"
        text={heading}
        className={`display-2 mt-3 text-balance ${light ? "text-ivory" : "text-navy"}`}
      />
      <Flourish className={`mt-4 w-44 ${light ? "text-gold" : "text-gold"}`} />
    </div>
  );
}

/** Short items, each ticked off with a drawn check. */
function Checklist({ block, index }: BlockProps<"checklist">) {
  return (
    <section className="relative overflow-hidden">
      <p
        aria-hidden
        data-parallax="0.4"
        className="outline-text folio pointer-events-none absolute -top-10 -left-6 text-[22rem] leading-none text-gold/30 lg:left-[32%]"
      >
        {index}
      </p>
      <div className="shell relative grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <BlockHeading index={index} heading={block.heading} />
          </div>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {block.items.map((item, i) => (
            <li key={item} className="relative">
              <div
                data-fade
                data-y="22"
                data-delay={i * 0.05}
                className="group flex items-center gap-5 py-4 font-display text-[clamp(1.4rem,1vw+1.1rem,1.9rem)] leading-tight text-navy"
              >
                <DrawnCheck className="text-gold-ink" />
                <span className="transition-transform duration-700 ease-expo group-hover:translate-x-2">{item}</span>
              </div>
              <span data-line data-delay={i * 0.05} className="block h-px bg-navy/15" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionItem({ name, text, i, light }: { name: string; text: string; i: number; light: boolean }) {
  return (
    <li className="group relative pt-7 pb-10 lg:pb-12">
      <span data-line data-delay={(i % 2) * 0.1} className={`absolute inset-x-0 top-0 h-px ${light ? "bg-(--rule-light)" : "bg-navy/25"}`} />
      {/* the rule turns gold under the pointer */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-expo group-hover:scale-x-100" />
      <div data-fade data-delay={(i % 2) * 0.1 + 0.1}>
        <span className={`flex items-center gap-3 folio text-lg ${light ? "text-gold" : "text-gold-ink"}`}>
          {two(i + 1)}
          <span aria-hidden className="text-[0.6rem] not-italic transition-transform duration-700 ease-expo group-hover:rotate-180">
            ✦
          </span>
        </span>
        <h3 className={`display-3 mt-3 text-balance transition-transform duration-700 ease-expo group-hover:translate-x-1.5 ${light ? "text-ivory" : "text-navy"}`}>
          {name}
        </h3>
        <p className={`mt-3 max-w-sm text-[0.975rem] leading-relaxed ${light ? "text-ivory/70" : "text-charcoal/75"}`}>
          {text}
        </p>
      </div>
    </li>
  );
}

/** The core offerings, on navy, beside a book that turns as the reader scrolls. */
function FeaturedSolutions({ block, index, cover }: BlockProps<"solutions"> & { cover: BookSlug }) {
  const book = getBook(cover);
  return (
    <section data-turn-area className="relative bg-navy py-20 text-ivory lg:py-32">
      <div className="shell grid gap-x-10 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto w-[52%] max-w-[17rem] lg:w-[78%]">
              <span aria-hidden className="absolute -inset-[14%] rounded-full border border-gold/30" />
              <span aria-hidden className="absolute -inset-[30%] rounded-full border border-gold/15" />
              <Book slug={cover} sizes="(min-width: 1024px) 22vw, 52vw" depth={30} turn="-48,16" className="relative" />
            </div>
            <p className="mt-12 text-center text-[0.8rem] leading-snug text-ivory/55">
              <span className="block font-display text-lg text-gold-pale italic">{book.title}</span>
              {book.author} · {book.genre}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <BlockHeading index={index} heading={block.heading} light />
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:mt-16">
            {block.items.map((item, i) => (
              <SolutionItem key={item.name} name={item.name} text={item.text} i={i} light />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Secondary named groups (publishing options, print specifications) as large definitions. */
function Definitions({ block, index }: BlockProps<"solutions">) {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <BlockHeading index={index} heading={block.heading} />
          </div>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {block.items.map((item, i) => (
            <li key={item.name} className="relative">
              <span data-line className="absolute inset-x-0 top-0 h-px bg-navy/25" />
              <div data-fade className="group grid gap-x-8 gap-y-3 py-9 sm:grid-cols-[5.5rem_1fr]">
                <span
                  aria-hidden
                  className="outline-text folio text-[4.5rem] leading-[0.8] text-gold-ink transition-transform duration-700 ease-expo group-hover:-translate-y-1"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="display-2 text-navy">{item.name}</h3>
                  <p className="mt-3 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/75">{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Ordered steps along a drawn line, each marked by a pulsing point. */
function Process({ block, index }: BlockProps<"process">) {
  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 lg:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <BlockHeading index={index} heading={block.heading} />
        </div>
        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-flow-col xl:auto-cols-fr xl:grid-cols-none">
          {block.items.map((step, i) => (
            <li key={step} className="group relative pt-7">
              <span data-line data-delay={i * 0.12} className="absolute inset-x-0 top-0 h-px bg-navy/30" />
              <span aria-hidden className="absolute -top-[5px] left-0 grid size-[11px] place-items-center">
                <span className="absolute size-full animate-ping rounded-full bg-gold/60 [animation-duration:2.6s]" />
                <span className="relative size-[9px] rounded-full bg-gold-ink" />
              </span>
              <div data-fade data-y="40" data-delay={i * 0.12 + 0.1}>
                <span
                  aria-hidden
                  className="outline-text folio block text-[5rem] leading-none text-gold-ink transition-transform duration-700 ease-expo group-hover:-translate-y-2"
                >
                  {i + 1}
                </span>
                <p className="mt-4 font-display text-[1.45rem] leading-tight text-balance text-navy">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Finished copy from the document, set as paired statements. */
function Text({ block, index }: BlockProps<"text">) {
  return (
    <section className="shell grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-5">
        <BlockHeading index={index} heading={block.heading} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
        {block.paragraphs.map((paragraph, i) => (
          <div key={paragraph} className="relative pl-6">
            <span data-line="y" data-delay={i * 0.12} className="absolute inset-y-0 left-0 w-px bg-gold" />
            <p data-fade data-delay={i * 0.12 + 0.1} className="font-display text-[1.5rem] leading-snug text-navy">
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Topics the document briefs for this section, presented as an outline beside a turning seal. */
function Brief({ block, index, label }: BlockProps<"brief"> & { label: string }) {
  return (
    <section className="shell grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-5">
        <BlockHeading index={index} heading={block.heading} />
        <div data-fade data-delay="0.2" className="mt-10 hidden lg:block">
          <Seal text={label} className="size-32">
            <span className="font-display text-2xl text-gold-ink italic">{two(index)}</span>
          </Seal>
        </div>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        {block.lead ? (
          <p data-fade className="font-display text-[clamp(1.5rem,1.2vw+1.1rem,2.1rem)] leading-[1.25] text-balance text-navy">
            {block.lead}
          </p>
        ) : null}
        {block.points ? (
          <ul data-stagger="0.07" className={`flex flex-wrap gap-3 ${block.lead ? "mt-9" : ""}`}>
            {block.points.map((point) => (
              <li
                key={point}
                className="sweep border border-navy/30 px-5 py-3 font-display text-[1.3rem] leading-tight text-navy transition-colors duration-500 hover:text-ivory"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

type ServiceBlocksProps = { blocks: ServiceBlock[]; cover: BookSlug; label: string };

export function ServiceBlocks({ blocks, cover, label }: ServiceBlocksProps) {
  const featured = blocks.findIndex((block) => block.type === "solutions");

  return (
    <>
      {blocks.map((block, i) => {
        const index = i + 1;
        switch (block.type) {
          case "checklist":
            return <Checklist key={block.heading} block={block} index={index} />;
          case "solutions":
            return i === featured ? (
              <FeaturedSolutions key={block.heading} block={block} index={index} cover={cover} />
            ) : (
              <Definitions key={block.heading} block={block} index={index} />
            );
          case "process":
            return <Process key={block.heading} block={block} index={index} />;
          case "text":
            return <Text key={block.heading} block={block} index={index} />;
          case "brief":
            return <Brief key={block.heading} block={block} index={index} label={label} />;
        }
      })}
    </>
  );
}
