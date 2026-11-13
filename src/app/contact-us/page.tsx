import type { Metadata } from "next";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { Book } from "@/components/ui/Book";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Words } from "@/components/ui/Words";
import { contactPage, home, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: contactPage.seoTitle,
  description: home.finalCta.text,
  path: contactPage.path,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact Us", path: contactPage.path }]}
        label={site.primaryCta.label}
        title={contactPage.title}
        accent="Your Book Project"
      >
        <p className="lede text-charcoal/80">{contactPage.intro}</p>
      </PageHero>

      <section className="py-20 lg:py-32">
        <div className="shell grid gap-x-10 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel folio="01">Enquiry Form</SectionLabel>
              <Words
                as="h2"
                text={home.finalCta.title}
                accent="Deserves to Be Told."
                className="display-2 mt-7 text-balance text-navy"
              />
              <p data-fade className="mt-6 max-w-sm text-[0.975rem] leading-relaxed text-charcoal/75">
                {home.finalCta.text}
              </p>
              <div className="mt-12 hidden w-40 lg:block">
                <div data-fade data-y="70" className="book-hover">
                  <Book slug="the-power-of-starting-again" sizes="160px" depth={18} interactive />
                </div>
              </div>
            </div>
          </div>

          <div data-fade data-delay="0.15" className="relative lg:col-span-7 lg:col-start-6">
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
