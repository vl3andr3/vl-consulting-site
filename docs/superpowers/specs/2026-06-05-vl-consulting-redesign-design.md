# VL Consulting — Site Redesign Design Spec

**Date:** 2026-06-05
**Owner:** Alex (building for his sister, Vé Léandre, Ph.D.)
**Goal:** Rebuild VL Consulting's existing static HTML site as a sophisticated, modern, multi-page Next.js site, preserving Vé's content and information architecture while elevating design and copy.

---

## 1. Background

Vé Léandre, Ph.D. runs **VL Consulting** — independent project, program, and strategic consulting at the intersection of science, technology, and innovation (background: Genentech/Roche, Brown University, Providence VA Medical Center; AI model evaluation; teaching/mentorship).

The current site (`github.com/vl3andr3/vl-consulting-site`) is hand-written static HTML + a single `style.css`. The content is strong; the design is basic and the markup has drifted (duplicated headers, broken links to a non-existent `vl-tech-consulting.html`, placeholder emails). This project replaces it with a polished Next.js site.

## 2. Goals & non-goals

**Goals**
- Sophisticated, modern, credible "editorial-professional" design.
- Preserve all of Vé's content, credentials, and service structure; polish the copy.
- Multi-page site with consistent shared layout and a reliable mobile nav.
- Deploy on Vé's own Vercel account at a free `*.vercel.app` URL.

**Non-goals (for now)**
- Custom domain (later).
- A backend contact form / email service (using `mailto:` + booking link for launch).
- Blog/CMS, auth, analytics dashboards.

## 3. Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** for styling
- Google Fonts via `next/font` (serif display + Inter)
- Light, dependency-free motion (CSS / small intersection-observer fade-ins)
- Deployed via **Vercel**, source in a **new repo** under `vl3andr3`

## 4. Information architecture (routes)

- `/` — Home (hero, positioning, 3-pillar services overview, credibility strip, CTA)
- `/who-we-are` — Profile / Perspective / Education
- `/strategy-and-projects` — overview + links to 4 sub-services:
  - `/strategy-and-projects/rd-program-coordination`
  - `/strategy-and-projects/portfolio-governance`
  - `/strategy-and-projects/academic-industry-collaboration`
  - `/strategy-and-projects/interim-program-leadership`
- `/tech-and-ai` — 5 services
- `/academic` — 5 services
- `/contact` — booking CTA + email

Service/sub-service page content maps 1:1 from the existing HTML (the numbered "challenge" cards and intro blurbs), with polished copy.

## 5. Design system ("editorial professional")

- **Wordmark:** bold uppercase **`VL`** monogram (heavy weight), with "VL Consulting" + tagline "Project & Strategy Consulting".
- **Typography:** serif display for headings (Fraunces or Newsreader — final pick at build) + **Inter** for body/UI.
- **Palette:** warm paper/off-white background, near-black ink text, one confident accent (deep teal or aubergine — final pick at build) for links/CTAs/active nav. Generous whitespace.
- **Layout:** strong Home hero; clean responsive 3-pillar grid; refined numbered cards on service pages; consistent header (sticky, with mobile menu) and footer (contact + booking).
- **Motion:** subtle fade/slide-in on scroll, smooth hover transitions. Tasteful, not flashy.
- **Responsive & accessible:** mobile-first; real `<nav>` with an accessible collapsible menu replacing the fragile CSS dropdown; sufficient contrast; semantic headings.

## 6. Copy

- Run existing content through the **copywriting skill** to tighten/elevate wording.
- Preserve all meaning, credentials, named employers, and service lines. Invent nothing; flag any uncertain claim for Vé to confirm before launch.

## 7. Contact

- **Primary CTA:** "Book a consultation" → `https://calendar.app.google/Drhrc5AK8LYHmF137`
- **Secondary:** "Email me" → `mailto:Ve@Verisans.com` (opens visitor's own mail client; acknowledged tradeoff — upgrade to a real form later).
- Both appear on `/contact` and in the footer; booking CTA also in header / hero.

## 7b. SEO & organic-traffic foundations

Bake on-site SEO in from the start so the site is eligible to rank organically:

- **Per-page metadata:** unique `<title>` + meta description for every route (Next.js Metadata API).
- **Semantic HTML & headings:** one `<h1>` per page, logical heading order, descriptive link text, `alt` on all images.
- **Crawlability:** `sitemap.xml` and `robots.txt` (Next.js `sitemap.ts` / `robots.ts`).
- **Structured data (JSON-LD):** `ProfessionalService` for VL Consulting + `Person` for Vé Léandre (credentials, employers, services). Helps Google/AI understand the entity.
- **Social/share cards:** Open Graph + Twitter meta + an OG image.
- **Performance & mobile:** fast Core Web Vitals, mobile-first (Next.js defaults + image optimization).
- **Keyword-aware copy:** weave natural search terms (e.g. "R&D program management consultant", "AI consulting", "academic–industry collaboration") into headings/copy during the copywriting pass — without keyword-stuffing.
- **Canonical URLs** set per page.

**Post-launch (Vé/Alex, not blocking build):** verify in Google Search Console, submit sitemap, create a Google Business Profile, and add content over time. Optional later: privacy-friendly analytics (e.g. Vercel Analytics / Plausible).

## 8. Deployment & access

- **GitHub:** authenticate as Vé via `gh auth login`; create a **new repo** under `vl3andr3` (proposed name `vl-consulting`).
- **Vercel:** Vé's own account (separate from Alex's onboardly/personal). `vercel login` with her email; import the new repo; ship to free `*.vercel.app`.
- Old `vl-consulting-site` repo left untouched.

## 9. Success criteria

- All current pages/services represented, no broken links, working nav on mobile + desktop.
- Booking + email CTAs function.
- Looks demonstrably more sophisticated/modern than the original; passes a visual/QA pass.
- Live on Vé's Vercel at a public URL.

## 10. Open items to confirm before go-live

- Final serif + accent color pick (decided at build, shown for approval).
- Any copy claims Vé wants adjusted.
- Whether to later add a real contact form (Formspree/Resend) and custom domain.
