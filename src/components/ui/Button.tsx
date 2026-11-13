import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "gold" | "outline-light";

const variantClass: Record<Variant, string> = {
  solid: "",
  outline: "btn--outline",
  gold: "btn--gold",
  "outline-light": "btn--outline-light",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn ${variantClass[variant]} ${size === "sm" ? "btn--sm" : ""} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden strokeWidth={1.75} />
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-line ${className}`}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden strokeWidth={1.75} />
    </Link>
  );
}
