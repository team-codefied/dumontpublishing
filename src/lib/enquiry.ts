/** Shape and validation of the enquiry form, shared by the form and the API route. */

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  genre: string;
  stage: string;
  description: string;
  contactMethod: string;
};

export type EnquiryField = keyof Enquiry;

export const enquiryLabels: Record<EnquiryField, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  service: "Service required",
  genre: "Book genre",
  stage: "Manuscript stage",
  description: "Project description",
  contactMethod: "Preferred contact method",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d][\d\s().-]{5,}$/;

export function validateEnquiry(data: Enquiry): Partial<Record<EnquiryField, string>> {
  const errors: Partial<Record<EnquiryField, string>> = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (data.phone.trim() && !PHONE.test(data.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (data.contactMethod === "Phone" && !data.phone.trim())
    errors.phone = "Please add a phone number so we can call you.";
  if (!data.service) errors.service = "Please choose a service.";
  if (data.description.trim().length < 10) errors.description = "Please tell us a little about your project.";
  return errors;
}

export function parseEnquiry(input: Record<string, unknown>): Enquiry {
  const text = (key: string, max: number) => String(input[key] ?? "").slice(0, max);
  return {
    name: text("name", 120),
    email: text("email", 200),
    phone: text("phone", 40),
    service: text("service", 120),
    genre: text("genre", 120),
    stage: text("stage", 120),
    description: text("description", 5000),
    contactMethod: text("contactMethod", 20) || "Email",
  };
}
