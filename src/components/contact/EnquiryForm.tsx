"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { contactPage, home } from "@/content/site";
import { enquiryLabels, parseEnquiry, validateEnquiry, type EnquiryField } from "@/lib/enquiry";

type Status = "idle" | "sending" | "sent" | "not_configured" | "error";
type Errors = Partial<Record<EnquiryField, string>>;

const statusMessage: Partial<Record<Status, string>> = {
  not_configured:
    "This form is not yet connected to an inbox, so your enquiry has not been sent. Please try again soon.",
  error: "Your enquiry could not be sent. Please check your connection and try again.",
};

function Field({
  name,
  error,
  required,
  children,
}: {
  name: EnquiryField;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="field" data-invalid={Boolean(error)}>
        <span className="field__label">
          {enquiryLabels[name]}
          {required ? <span aria-hidden> *</span> : null}
        </span>
        {children}
      </label>
      {error ? (
        <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-[#a23b2a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Enquiry form: client-side validation, honeypot, and an honest delivery state. */
export function EnquiryForm() {
  const params = useSearchParams();
  const question = params.get("question") ?? "";
  // A submission made before scripts loaded comes back with ?status=…
  const returned = params.get("status");
  const [status, setStatus] = useState<Status>(
    returned === "sent" || returned === "not_configured" || returned === "error" ? returned : "idle",
  );
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const enquiry = parseEnquiry(raw);
    const found = validateEnquiry(enquiry);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(raw),
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else if (response.status === 503) {
        setStatus("not_configured");
      } else if (response.status === 422) {
        const data = (await response.json()) as { errors?: Errors };
        setErrors(data.errors ?? {});
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-gold py-14">
        <span className="grid size-14 place-items-center rounded-full bg-navy text-gold">
          <Check aria-hidden strokeWidth={1.5} />
        </span>
        <p className="display-2 mt-8 text-navy">Thank you. Your enquiry has been sent.</p>
        <button type="button" onClick={() => setStatus("idle")} className="link-line mt-8 text-navy">
          Send another enquiry
        </button>
      </div>
    );
  }

  const describe = (name: EnquiryField) => (errors[name] ? { "aria-describedby": `${name}-error`, "aria-invalid": true } : {});

  return (
    <form onSubmit={onSubmit} method="post" action="/api/enquiry/" noValidate className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      <Field name="name" error={errors.name} required>
        <input className="field__control" name="name" type="text" autoComplete="name" required {...describe("name")} />
      </Field>
      <Field name="email" error={errors.email} required>
        <input className="field__control" name="email" type="email" autoComplete="email" required {...describe("email")} />
      </Field>
      <Field name="phone" error={errors.phone}>
        <input className="field__control" name="phone" type="tel" autoComplete="tel" {...describe("phone")} />
      </Field>
      <Field name="service" error={errors.service} required>
        <select className="field__control" name="service" defaultValue="" required {...describe("service")}>
          <option value="" disabled>
            Select
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.label}>
              {service.label}
            </option>
          ))}
        </select>
      </Field>
      <Field name="genre">
        <select className="field__control" name="genre" defaultValue="">
          <option value="">Select</option>
          {home.genres.items.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select>
      </Field>
      <Field name="stage">
        <select className="field__control" name="stage" defaultValue="">
          <option value="">Select</option>
          {contactPage.manuscriptStages.map((stage) => (
            <option key={stage}>{stage}</option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field name="description" error={errors.description} required>
          <textarea
            className="field__control"
            name="description"
            rows={5}
            defaultValue={question}
            required
            {...describe("description")}
          />
        </Field>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="text-xs font-medium tracking-[0.18em] text-gold-ink uppercase">{enquiryLabels.contactMethod}</legend>
        <div className="mt-4 flex gap-4">
          {contactPage.contactMethods.map((method, index) => (
            <label key={method} className="cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="block border border-navy/35 px-7 py-3 text-sm font-medium tracking-wide text-navy transition-colors duration-500 peer-checked:border-navy peer-checked:bg-navy peer-checked:text-ivory peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                {method}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* honeypot — hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn self-start disabled:opacity-60">
          <span>{status === "sending" ? "Sending…" : contactPage.submitLabel}</span>
          <ArrowRight aria-hidden strokeWidth={1.75} />
        </button>
        {statusMessage[status] ? (
          <p role="alert" className="max-w-md text-sm leading-relaxed text-[#a23b2a]">
            {statusMessage[status]}
          </p>
        ) : null}
      </div>
    </form>
  );
}
