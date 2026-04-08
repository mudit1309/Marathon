# Mojo Marathons 2026 — Marathon Event Website

A premium, SEO-friendly, conversion-focused marathon event website built with
**Next.js 15 (App Router)**, **React 19**, **MongoDB / Mongoose**, **Tailwind
CSS** and **Framer Motion**.

Designed for Noida's eco-cyber half marathon on 17 May 2026, the site is
engineered to appeal to runners, sponsors, corporates, families and media
simultaneously — with a strong event-brand identity, interactive sections and a
frictionless path to registration via India Running.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # add your MONGODB_URI
npm run dev                  # http://localhost:3000
npm run seed                 # optional — populate MongoDB
npm run build && npm start
```

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR, ISR, metadata API, file-based routing, RSC |
| UI | React 19 + Tailwind CSS | Rapid, premium design system, no bloat |
| Motion | Framer Motion | Subtle scroll reveals, floating hero elements |
| Icons | lucide-react | Consistent line icons, tree-shakeable |
| Database | MongoDB + Mongoose | Flexible CMS-like structure, simple schemas |
| SEO | Next metadata API + JSON-LD | Event schema, FAQPage schema, OG/Twitter cards |

---

## Folder structure

```
Marathon/
├── app/
│   ├── layout.js              # Root layout with metadata, fonts, nav, footer
│   ├── page.js                # Homepage composition
│   ├── globals.css            # Tailwind + design tokens
│   ├── sitemap.js             # Dynamic sitemap
│   ├── robots.js              # Crawl rules
│   ├── manifest.webmanifest   # PWA manifest
│   ├── not-found.js           # Premium 404 page
│   │
│   ├── about/page.js
│   ├── race-categories/page.js
│   ├── route-venue/page.js
│   ├── registration/page.js
│   ├── sponsors/page.js
│   ├── gallery/page.js
│   ├── faqs/page.js
│   ├── contact/page.js
│   │
│   └── api/
│       ├── contact/route.js
│       ├── newsletter/route.js
│       ├── sponsors/route.js
│       ├── faqs/route.js
│       ├── race-categories/route.js
│       └── registration-lead/route.js
│
├── components/
│   ├── layout/
│   │   ├── Navbar.js          # Sticky blurred premium nav
│   │   └── Footer.js          # Multi-column footer with newsletter
│   ├── home/
│   │   ├── Hero.js
│   │   ├── AnimatedStats.js
│   │   ├── Countdown.js
│   │   ├── AboutEvent.js
│   │   ├── RaceCategories.js
│   │   ├── RouteVenue.js      # Includes inline SVG route map
│   │   ├── WhyParticipate.js
│   │   ├── EcoSection.js
│   │   ├── BrandVisibility.js
│   │   ├── SponsorsSection.js
│   │   ├── AudienceTargeting.js
│   │   ├── Testimonials.js
│   │   ├── GalleryPreview.js
│   │   ├── RegistrationCTA.js
│   │   ├── FAQ.js
│   │   └── ContactSection.js
│   ├── ui/
│   │   ├── SectionHeading.js
│   │   ├── RegisterButton.js  # Reused CTA w/ UTM tagging
│   │   ├── PageHero.js
│   │   └── Reveal.js          # Scroll-triggered reveal wrapper
│   └── marketing/
│       └── NewsletterForm.js
│
├── lib/
│   ├── mongodb.js             # Cached Mongoose connection
│   ├── utils.js               # cn() + date helpers
│   ├── data/
│   │   └── eventData.js       # Fallback static content
│   └── models/
│       ├── EventInfo.js
│       ├── RaceCategory.js
│       ├── Sponsor.js
│       ├── FAQ.js
│       ├── ContactMessage.js
│       ├── NewsletterSubscriber.js
│       ├── RegistrationLead.js
│       └── GalleryItem.js
│
├── scripts/
│   └── seed.js                # Populate MongoDB from static data
│
├── public/                    # Place logos, hero images, og-image.jpg here
├── tailwind.config.js
├── next.config.mjs
├── postcss.config.js
├── jsconfig.json
├── .env.example
└── package.json
```

---

## Design system

### Colors

| Token | Usage |
|---|---|
| `brand-navy-950` (`#01050c`) | Page background |
| `brand-navy-900/800` | Card backgrounds |
| `brand-cyan-500` (`#00C2EB`) | Primary accent, CTAs |
| `brand-eco-500` (`#10B981`) | Eco emphasis, success |
| `brand-gold-500` (`#F4C23F`) | Premium highlights, awards |
| `white/70`, `white/60` | Body text |

### Typography

- **Display:** Space Grotesk (700/800) — hero headings, card titles
- **Sans:** Inter — body copy, UI
- **Scale:** 60/48/40/32/24/20/16/14/12 with `text-balance` and `text-pretty`
- Letter spacing: `-0.02em` on headings for tight premium feel

### Spacing

- Container: `max-w-7xl` + responsive padding
- Section padding: `py-24` (desktop), `py-16` (mobile)
- Card radius: `rounded-3xl` (24px) for premium feel, `rounded-2xl` for compact

### Motion

- Reveal on scroll: 0.7s `cubic-bezier(0.22, 1, 0.36, 1)` with 32px y-offset
- Hero: staggered 0.1s delays, 0.6–0.8s duration
- Hover: `-translate-y-1`, border glow transitions (500ms)

---

## SEO strategy

1. **Metadata API** — unique title/description per page + canonical URLs
2. **Event structured data** (JSON-LD) — `SportsEvent` on every page via root layout
3. **FAQPage schema** on `/faqs` — eligible for Google FAQ rich results
4. **Open Graph + Twitter cards** — 1200×630 OG image (add `/public/og-image.jpg`)
5. **Sitemap** — auto-generated via `app/sitemap.js`
6. **Robots.txt** — auto-generated via `app/robots.js`
7. **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, `<figure>`
8. **Performance**:
   - Fonts loaded via `next/font/google` with `display: swap`
   - `optimizePackageImports` for lucide-react and framer-motion
   - Image formats AVIF/WebP via `next/image`
   - Static generation for all marketing pages
9. **Keywords targeted**:
   `mojo marathons`, `noida marathon 2026`, `half marathon noida`, `21k noida`,
   `eco marathon india`, `delhi ncr marathon`, `noida running event`,
   `sustainable marathon`, `corporate running event noida`
10. **Internal linking** — every CTA loops back to `/registration` and `/sponsors`

---

## Registration integration approach

- **Central reusable component:** `components/ui/RegisterButton.js` — every
  "Register Now" on the site goes through it.
- **UTM attribution:** each button accepts a `source` prop (`hero`,
  `countdown`, `category-21k`, `pricing-5k` etc.) that's auto-appended to the
  India Running URL so marketing can track which sections convert best.
- **Lead capture (optional):** `POST /api/registration-lead` records visitor
  intent + UTMs before redirecting, so retargeting audiences can be built even
  for users who bail mid-checkout.
- **Dedicated page:** `/registration` with a 4-step flow, pricing table per
  category, trust markers (SSL, instant confirmation, transfers) and a
  one-click link to the official India Running page.
- **Urgency:** countdown timer, "Limited slots left" badges, early-bird
  deadline (28 Feb) surfaced across the homepage.

---

## Sponsor section approach

- **Tiered hierarchy** mirrors the real sponsor deck:
  Title → Powered By → Associate → Community → Media.
- **Visual size scaling** by tier — title sponsor gets a full-width plate,
  community/media get a 5-column grid.
- **Brand visibility engine** section explains the 3-phase model
  (Pre-Event → Event Day → Post-Event) using the same content from the
  official Mojo deck.
- **Stats grid** — 20K+ reach, 5K+ on-ground, 100+ corporates, 15M+ ad
  impressions — gives sponsors immediate ROI confidence.
- **"Become a Sponsor" CTA** — full-width premium card with a request-deck
  button that deep-links to `/contact?subject=sponsorship`.
- **Dedicated `/sponsors` page** — hero + brand visibility + full sponsor
  wall + contact form pre-filtered to sponsorship enquiries.

---

## MongoDB schema (summary)

| Collection | Purpose | Key fields |
|---|---|---|
| `eventinfos` | Single-doc event config | `title`, `eventDate`, `venue`, `stats`, `registrationUrl`, `socials` |
| `racecategories` | Editable race categories | `slug`, `name`, `distance`, `distanceKm`, `fee`, `benefits[]`, `timed`, `order` |
| `sponsors` | Tiered sponsor wall | `slug`, `name`, `logoUrl`, `tier`, `order`, `active` |
| `faqs` | Searchable FAQ | `question`, `answer`, `category`, `order` |
| `galleryitems` | Photo/video gallery | `imageUrl`, `type`, `tags[]`, `edition`, `featured` |
| `contactmessages` | Inbound contact form | `name`, `email`, `subject`, `message`, `handled` |
| `newslettersubscribers` | Email list | `email`, `name`, `source`, `unsubscribed` |
| `registrationleads` | Pre-registration tracking | `email`, `categorySlug`, `utmSource`, `utmCampaign` |

All models live in `lib/models/` and are loaded on-demand via
`lib/mongodb.js` which caches the Mongoose connection across hot reloads.

---

## UI section-by-section content

1. **Hero** — tagline, date, location, stats, dual CTA (Register / Explore), animated rings with "21 KM" core stat and floating achievement pills.
2. **Animated stats** — 6 cards (5K+ runners, 20K+ reach, ₹5L+ prizes, 3 categories, 100% eco, 2nd edition) with count-up animation on scroll.
3. **About event** — four pillars: Tech-First, Eco-Conscious, Safety, Festival atmosphere.
4. **Countdown** — live days/hours/mins/secs with early-bird urgency message and register CTA.
5. **Race categories** — 21K/10K/5K cards with distance, fee, start time, benefits, chip-timed badge, join button.
6. **Route & venue** — inline SVG route map, hydration markers, start/finish pins, facilities grid.
7. **Why participate** — 6 icon cards: Championship, Eco, Community, Health, Recognition, Festival.
8. **Eco section** — 3 initiatives: Recycled gear (12 bottles per tee), Zero-waste (0 plastic bibs), Operations (3-bin sort).
9. **Audience targeting** — Corporate pros, Urban youth, Fitness community, Families + psychographics panel.
10. **Brand visibility** — 3-phase visibility engine (Pre / Event Day / Post) + impact report promise.
11. **Sponsors** — tiered logo wall + "Become a sponsor" pitch with stats.
12. **Testimonials** — 3 quotes (runner, sponsor, corporate HR).
13. **Gallery preview** — 8-tile atmospheric grid linking to full gallery.
14. **Registration CTA** — pre-footer conversion block with trust markers.
15. **FAQ** — accordion with 8 questions across registration, race-day, bibs, refunds, safety.
16. **Contact** — form + contact info cards (email, phone, venue) with sponsorship-priority note.

---

## Adding real content

1. **Hero image / OG image**: drop `og-image.jpg`, `hero.jpg` into `/public/`.
2. **Sponsor logos**: upload to `/public/sponsors/` and update `lib/data/eventData.js` with new filenames (or seed them into MongoDB).
3. **Gallery photos**: upload to `/public/gallery/` and seed via `GalleryItem` collection.
4. **Event copy**: edit `lib/data/eventData.js` — everything is in one file for fast iteration.

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint
npm run seed     # Seed MongoDB from lib/data/eventData.js
```

---

## Deployment notes

- **Vercel**: push to GitHub, import the repo, add `MONGODB_URI`,
  `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_REGISTRATION_URL` as env vars. Deploys
  via `next build`.
- **MongoDB Atlas**: free tier is more than enough for this site's volume.
  Make sure to whitelist Vercel's IP range (0.0.0.0/0) or use a private
  endpoint.
- **Images**: use a CDN (Cloudinary / Vercel Image Optimisation) for the
  gallery to keep LCP green.

---

Built with performance, technology and sustainability in mind.
© Mojo Marathons 2026.
