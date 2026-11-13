import { enquiryLabels, parseEnquiry, validateEnquiry, type EnquiryField } from "@/lib/enquiry";

/**
 * Receives the enquiry form and forwards it by email through Resend.
 *
 * Required environment variables (set in Vercel → Project → Settings):
 *   RESEND_API_KEY     API key from resend.com
 *   ENQUIRY_TO_EMAIL   inbox that should receive enquiries
 *   ENQUIRY_FROM_EMAIL verified sender, e.g. "Dumont Publishing <enquiries@yourdomain>"
 *
 * Until these are set the route answers 503 and the form says so plainly —
 * it never pretends an enquiry was delivered.
 */
export async function POST(request: Request) {
  // The form normally posts JSON. If it is submitted before scripts have
  // loaded, the browser posts it natively; answer that with a redirect back.
  const isJson = (request.headers.get("content-type") ?? "").includes("application/json");
  let body: Record<string, unknown>;
  try {
    body = isJson ? await request.json() : Object.fromEntries((await request.formData()).entries());
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  if (!isJson) {
    const result = await handle(body);
    const status = result.status === 200 ? "sent" : result.status === 503 ? "not_configured" : "error";
    return Response.redirect(new URL(`/contact-us/?status=${status}`, request.url), 303);
  }
  return handle(body);
}

async function handle(body: Record<string, unknown>): Promise<Response> {

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const enquiry = parseEnquiry(body);
  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "validation", errors }, { status: 422 });
  }

  const { RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO_EMAIL || !ENQUIRY_FROM_EMAIL) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const lines = (Object.keys(enquiryLabels) as EnquiryField[]).map(
    (field) => `${enquiryLabels[field]}: ${enquiry[field] || "—"}`,
  );

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: ENQUIRY_FROM_EMAIL,
      to: [ENQUIRY_TO_EMAIL],
      reply_to: enquiry.email,
      subject: `New enquiry — ${enquiry.service} — ${enquiry.name}`,
      text: lines.join("\n\n"),
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "delivery" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
