import { Words } from "@/components/ui/Words";
import type { ServiceBlock } from "@/content/services";

const two = (n: number) => String(n).padStart(2, "0");

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
    </div>
  );
}

/** Short items, set large and inline like a typeset list. */
function Checklist({ block, index }: { block: Extract<ServiceBlock, { type: "checklist" }>; index: number }) {
  return (
    <section className="shell grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-5">
        <BlockHeading index={index} heading={block.heading} />
      </div>
      <ul data-stagger="0.06" className="lg:col-span-6 lg:col-start-7">
        {block.items.map((item, i) => (
          <li
            key={item}
            className="flex items-baseline gap-5 border-b border-navy/15 py-4 font-display text-[clamp(1.4rem,1vw+1.1rem,1.9rem)] leading-tight text-navy first:pt-0"
          >
            <span className="folio w-7 shrink-0 text-base text-gold-ink">{two(i + 1)}</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Named offerings with a line of description — the core of each page, on navy. */
function Solutions({ block, index }: { block: Extract<ServiceBlock, { type: "solutions" }>; index: number }) {
  const few = block.items.length <= 3;
  return (
    <section className="bg-navy py-20 text-ivory lg:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <BlockHeading index={index} heading={block.heading} light />
        </div>
        <ul className={`mt-14 grid gap-x-12 sm:grid-cols-2 lg:mt-20 ${few ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
          {block.items.map((item, i) => (
            <li key={item.name} className="relative pt-7 pb-10 lg:pb-14">
              <span data-line data-delay={(i % 3) * 0.1} className="absolute inset-x-0 top-0 h-px bg-(--rule-light)" />
              <div data-fade data-delay={(i % 3) * 0.1 + 0.1}>
                <span className="folio text-lg text-gold">{two(i + 1)}</span>
                <h3 className="display-3 mt-3 text-balance">{item.name}</h3>
                <p className="mt-3 max-w-sm text-[0.975rem] leading-relaxed text-ivory/70">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Ordered steps along a drawn line. */
function Process({ block, index }: { block: Extract<ServiceBlock, { type: "process" }>; index: number }) {
  return (
    <section className="bg-ivory-deep py-20 lg:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <BlockHeading index={index} heading={block.heading} />
        </div>
        <ol
          data-stagger="0.1"
          className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-flow-col xl:auto-cols-fr xl:grid-cols-none"
        >
          {block.items.map((step, i) => (
            <li key={step} className="relative border-t border-navy/25 pt-6">
              <span aria-hidden className="absolute -top-[5px] left-0 size-[9px] rounded-full bg-gold-ink" />
              <span aria-hidden className="outline-text folio block text-[4.5rem] leading-none text-gold-ink">
                {i + 1}
              </span>
              <p className="mt-4 font-display text-[1.45rem] leading-tight text-balance text-navy">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Finished copy from the document, set as paired statements. */
function Text({ block, index }: { block: Extract<ServiceBlock, { type: "text" }>; index: number }) {
  return (
    <section className="shell grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-5">
        <BlockHeading index={index} heading={block.heading} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
        {block.paragraphs.map((paragraph, i) => (
          <p
            key={paragraph}
            data-fade
            data-delay={i * 0.12}
            className="border-l border-gold pl-6 font-display text-[1.5rem] leading-snug text-navy"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

/** Topics the document briefs for this section, presented as an outline. */
function Brief({ block, index }: { block: Extract<ServiceBlock, { type: "brief" }>; index: number }) {
  return (
    <section className="shell grid gap-x-10 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-5">
        <BlockHeading index={index} heading={block.heading} />
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        {block.lead ? (
          <p data-fade className="font-display text-[clamp(1.5rem,1.2vw+1.1rem,2.1rem)] leading-[1.25] text-balance text-navy">
            {block.lead}
          </p>
        ) : null}
        {block.points ? (
          <ul data-stagger="0.05" className={`flex flex-wrap gap-x-3 gap-y-3 ${block.lead ? "mt-9" : ""}`}>
            {block.points.map((point) => (
              <li
                key={point}
                className="border border-navy/30 px-5 py-3 font-display text-[1.3rem] leading-tight text-navy"
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

export function ServiceBlocks({ blocks }: { blocks: ServiceBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const index = i + 1;
        switch (block.type) {
          case "checklist":
            return <Checklist key={block.heading} block={block} index={index} />;
          case "solutions":
            return <Solutions key={block.heading} block={block} index={index} />;
          case "process":
            return <Process key={block.heading} block={block} index={index} />;
          case "text":
            return <Text key={block.heading} block={block} index={index} />;
          case "brief":
            return <Brief key={block.heading} block={block} index={index} />;
        }
      })}
    </>
  );
}
