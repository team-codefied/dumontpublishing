import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Words } from "@/components/ui/Words";
import { home } from "@/content/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="shell flex min-h-svh flex-col items-start justify-center pt-(--header-h) pb-20">
      <p aria-hidden className="outline-text folio text-[38vw] leading-[0.8] text-gold-ink lg:text-[20rem]">
        404
      </p>
      <Words as="h1" text="Page Not Found" accent="Not Found" className="display-hero mt-6 text-navy" />
      <div data-fade data-delay="0.3" className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href={home.hero.secondaryCta.href} variant="outline">
          {home.hero.secondaryCta.label}
        </ButtonLink>
      </div>
    </section>
  );
}
