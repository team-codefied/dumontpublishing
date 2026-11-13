# Dumont Publishing

Marketing website for Dumont Publishing, built from the client's
"Website Structure & Content Strategy" document.

## Stack

- Next.js (App Router) · React · TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- GSAP + ScrollTrigger for motion, Lenis for smooth scrolling
- Lucide icons

## Structure

```
src/
  app/            routes, metadata, sitemap, robots, API route
  components/     layout / ui / home / services / portfolio / contact
  content/        all site copy (site.ts, services.ts, books.ts)
  lib/            motion system, SEO helpers, enquiry validation
public/
  books/          the eight supplied covers
  brand/          logo files cut from the supplied brand sheet
```

All copy lives in `src/content`. Edit text there, not in components.

## Motion

Components declare animation with data attributes (`data-words`,
`data-fade`, `data-clip`, `data-parallax`, …) and `src/lib/motion.ts` wires
them to GSAP once per page view. Everything is disabled under
`prefers-reduced-motion`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin once a custom domain is connected |
| `RESEND_API_KEY` | Sends enquiry-form emails via resend.com |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries |
| `ENQUIRY_FROM_EMAIL` | Verified sender address |

Until the three enquiry variables are set, the contact form validates and
reports honestly that it is not yet connected; it never fakes a send.

## Commands

```bash
npm run dev
npm run build
npm run lint
```
