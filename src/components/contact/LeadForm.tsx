"use client";

import { useId } from "react";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { contactPage, site } from "@/content/site";
import { enquiryLabels, type EnquiryField } from "@/lib/enquiry";
import { enquiryStatusMessage, useEnquiry } from "@/lib/useEnquiry";

type LeadFormProps = {
  /** Pre-selects a service — used on the individual service pages. */
  service?: string;
};

/**
 * The compact consultation form shown in every hero. It posts to the same
 * endpoint, with the same validation, as the full form on the contact page.
 */
export function LeadForm({ service }: LeadFormProps) {
  const uid = useId();
  const { status, errors, onSubmit, describe } = useEnquiry();

  const label = (name: EnquiryField, required = false) => (
    <span className="field__label">
      {enquiryLabels[name]}
      {required ? <span aria-hidden> *</span> : null}
    </span>
  );

  const error = (name: EnquiryField) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-[0.8rem] text-[#f0a595]">
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="lead-form relative bg-navy p-7 text-ivory shadow-[1.6rem_2.2rem_4.5rem_-1.8rem_rgb(15_33_49/0.65)] sm:p-9">
      {/* foil frame */}
      <span aria-hidden className="pointer-events-none absolute inset-2.5 border border-gold/45" />

      <div className="relative">
        <p className="eyebrow text-[0.68rem] text-gold">{site.name}</p>
        <h2 id={`${uid}-title`} className="mt-3 font-display text-[2rem] leading-[1.05]">
          {site.primaryCta.label}
        </h2>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-ivory/65">{contactPage.intro}</p>

        {status === "sent" ? (
          <div role="status" className="mt-8 border-t border-gold/50 py-10">
            <span className="grid size-12 place-items-center rounded-full bg-gold text-navy-deep">
              <Check aria-hidden strokeWidth={1.75} />
            </span>
            <p className="mt-6 font-display text-[1.7rem] leading-tight">Thank you. Your enquiry has been sent.</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            method="post"
            action="/api/enquiry/"
            noValidate
            aria-labelledby={`${uid}-title`}
            className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label className="field" data-invalid={Boolean(errors.name)}>
                {label("name", true)}
                <input className="field__control" name="name" type="text" autoComplete="name" required {...describe("name")} />
              </label>
              {error("name")}
            </div>
            <div>
              <label className="field" data-invalid={Boolean(errors.email)}>
                {label("email", true)}
                <input className="field__control" name="email" type="email" autoComplete="email" required {...describe("email")} />
              </label>
              {error("email")}
            </div>
            <div>
              <label className="field" data-invalid={Boolean(errors.phone)}>
                {label("phone")}
                <input className="field__control" name="phone" type="tel" autoComplete="tel" {...describe("phone")} />
              </label>
              {error("phone")}
            </div>
            <div className="sm:col-span-2">
              <label className="field" data-invalid={Boolean(errors.service)}>
                {label("service", true)}
                <select
                  className="field__control"
                  name="service"
                  defaultValue={service ?? ""}
                  required
                  {...describe("service")}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {services.map((item) => (
                    <option key={item.slug} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              {error("service")}
            </div>
            <div className="sm:col-span-2">
              <label className="field" data-invalid={Boolean(errors.description)}>
                {label("description", true)}
                <textarea className="field__control" name="description" rows={2} required {...describe("description")} />
              </label>
              {error("description")}
            </div>

            <input type="hidden" name="contactMethod" value="Email" />
            {/* honeypot — hidden from people, tempting to bots */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="sm:col-span-2">
              <button type="submit" disabled={status === "sending"} className="btn btn--gold w-full disabled:opacity-60">
                <span>{status === "sending" ? "Sending…" : contactPage.submitLabel}</span>
                <ArrowRight aria-hidden strokeWidth={1.75} />
              </button>
              {enquiryStatusMessage[status] ? (
                <p role="alert" className="mt-4 text-[0.82rem] leading-relaxed text-[#f0a595]">
                  {enquiryStatusMessage[status]}
                </p>
              ) : null}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
