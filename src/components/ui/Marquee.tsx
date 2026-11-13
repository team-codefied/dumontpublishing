type MarqueeProps = { items: string[]; className?: string; duration?: number };

/** Two identical tracks slide as one continuous line of type. */
export function Marquee({ items, className = "", duration = 48 }: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul
      className="marquee__track items-center"
      aria-hidden={hidden || undefined}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-[1.1em]">{item}</span>
          <span aria-hidden className="text-gold text-[0.5em]">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee ${className}`}>
      {track(false)}
      {track(true)}
    </div>
  );
}
