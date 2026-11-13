import Image from "next/image";

type LogoProps = { inverse?: boolean; className?: string; priority?: boolean };

/** The supplied primary logo, cut from the brand sheet (816 × 297). */
export function Logo({ inverse = false, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={inverse ? "/brand/logo-inverse.png" : "/brand/logo.png"}
      alt="Dumont Publishing"
      width={816}
      height={297}
      sizes="220px"
      priority={priority}
      className={className}
    />
  );
}
