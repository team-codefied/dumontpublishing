"use client";

import { useState, type FormEvent } from "react";
import { parseEnquiry, validateEnquiry, type EnquiryField } from "@/lib/enquiry";

export type EnquiryStatus = "idle" | "sending" | "sent" | "not_configured" | "error";
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export const enquiryStatusMessage: Partial<Record<EnquiryStatus, string>> = {
  not_configured:
    "This form is not yet connected to an inbox, so your enquiry has not been sent. Please try again soon.",
  error: "Your enquiry could not be sent. Please check your connection and try again.",
};

/**
 * Submission logic shared by the full enquiry form and the hero lead forms:
 * validate, post to /api/enquiry/, and report the outcome truthfully.
 */
export function useEnquiry(initialStatus: EnquiryStatus = "idle") {
  const [status, setStatus] = useState<EnquiryStatus>(initialStatus);
  const [errors, setErrors] = useState<EnquiryErrors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const found = validateEnquiry(parseEnquiry(raw));
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
        const data = (await response.json()) as { errors?: EnquiryErrors };
        setErrors(data.errors ?? {});
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /** Accessibility attributes for a field that currently has an error. */
  const describe = (name: EnquiryField) =>
    errors[name] ? { "aria-describedby": `${name}-error`, "aria-invalid": true } : {};

  return { status, errors, onSubmit, describe, reset: () => setStatus("idle") };
}
