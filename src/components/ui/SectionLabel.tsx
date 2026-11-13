type SectionLabelProps = {
  children: React.ReactNode;
  /** Folio numeral shown before the label, e.g. "02". */
  folio?: string;
  tone?: "dark" | "light";
  className?: string;
};

/** The running-head style label that opens each section, like a chapter mark. */
export function SectionLabel({ children, folio, tone = "dark", className = "" }: SectionLabelProps) {
  return (
    <p
      data-fade
      data-y="14"
      className={`eyebrow flex items-center gap-4 ${
        tone === "light" ? "text-gold" : "text-gold-ink"
      } ${className}`}
    >
      {folio ? <span className="folio text-[1.05rem] normal-case tracking-normal">{folio}</span> : null}
      <span aria-hidden className="h-px w-10 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}
