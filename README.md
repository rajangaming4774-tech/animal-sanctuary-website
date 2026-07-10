# 🐾 Karuna Animal Sanctuary — Giving Platform

A professional, Ketto/CrowdfundingIndia-style **donation platform for an animal rescue & sanctuary**, built with **React + Vite + React Router**. Re-skinned from the reference UI (fresh green + warm orange) and built around the four donor actions from the PRD: **Donate · Sponsor · Adopt · Report a rescue**.

## Getting started

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## What's included

**Public pages**
- `/` — Home: hero, live impact counters (4597+, 8945+, 10M+, 100+), urgent medical cases, campaigns, ways-to-help, adoptables, report-rescue strip, transparency teaser, success stories, monthly-giving CTA, trust bar.
- `/animals` + `/animals/:slug` — Browse (filter by status & species) + full animal profile: gallery, story, **itemised cost breakdown**, recovery **timeline**, **supporter wall**, and a sticky **donate/sponsor/adopt** action box.
- `/causes` + `/causes/:slug` — Non-animal campaigns with progress bars.
- `/donate` → `/checkout` → `/thank-you/:id` — Guest checkout: amount presets w/ impact labels, one-time vs **monthly** toggle, UPI/card/net-banking, cover-the-fee, anonymous, 80G receipt.
- `/sponsor` — Monthly sponsorship tiers + perks (the key differentiator vs Ketto).
- `/adopt` + `/adopt/apply/:slug` — Adoption grid + full application form.
- `/report-rescue` — Mobile-first intake: photo capture, GPS location, urgency, confirmation ticket.
- `/volunteer` — Volunteer & foster sign-up with interest chips.
- `/about`, `/transparency` (fund-allocation pie + downloadable reports), `/impact`, `/updates`, `/contact`, `/faq`.
- `/donor` — Donor/Sponsor dashboard (history, receipts, active sponsorship).

## Project structure

```
src/
  main.jsx            App entry (BrowserRouter)
  App.jsx             All routes
  index.css           Design system (colors, components, responsive)
  data/site.js        Mock content — animals, causes, stats, stories, FAQs
  components/         Navbar, Footer, Icon, PageHeader, ScrollToTop, ui.jsx
  pages/             One file per route
```

## Making it yours

- **Branding**: edit `SANCTUARY` in `src/data/site.js`; colors live as CSS variables at the top of `src/index.css`.
- **Content**: replace the `ANIMALS`, `CAUSES`, `STORIES` arrays. Swap the Unsplash image URLs for your own photos.
- **Payments**: checkout is a front-end demo. Wire the "Pay securely" button to **Razorpay** (UPI Autopay for recurring) + a backend for webhooks, receipts and the admin panel (see the PRD's Path A: Next.js + Supabase + Razorpay).

> This is the Phase-1 front end. Admin back-office, real payments, auth and DB are the next build phase.
