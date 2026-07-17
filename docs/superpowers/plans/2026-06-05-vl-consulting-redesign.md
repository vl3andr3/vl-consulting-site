# VL Consulting Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild VL Consulting's static HTML site as a sophisticated, SEO-ready, multi-page Next.js site deployed on Vé Léandre's Vercel account.

**Architecture:** Next.js App Router + TypeScript + Tailwind. All site copy lives in typed data files (`lib/content.ts`); pages are thin templates that map over that data, so the 7 service/sub-service pages share one `ServicePage` template. Shared `Header`/`Footer` give one consistent layout. SEO (metadata, sitemap, robots, JSON-LD) is built in. Verification is by `next build` + `next lint` passing and a browser QA pass (this is a content site with no business logic, so there are no unit tests — the "test" at each step is a clean build and a visual check).

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, `next/font` (Fraunces + Inter), Vercel.

---

## File Structure

```
vl-consulting/
  app/
    layout.tsx                                   # root layout: fonts, default metadata, Header/Footer, org JSON-LD
    globals.css                                  # Tailwind + base styles + CSS vars
    page.tsx                                     # Home
    who-we-are/page.tsx
    strategy-and-projects/page.tsx               # overview
    strategy-and-projects/[slug]/page.tsx        # 4 sub-services (data-driven)
    tech-and-ai/page.tsx
    academic/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx                          # generated OG image
  components/
    Wordmark.tsx        # bold VL monogram + lockup
    Header.tsx          # sticky nav + accessible mobile menu
    Footer.tsx
    CTAButtons.tsx      # "Book a consultation" + "Email me"
    FadeIn.tsx          # scroll fade-in wrapper (client)
    ServicePage.tsx     # reusable template: intro + numbered card grid
    PillarCard.tsx      # home services overview card
    JsonLd.tsx          # renders a JSON-LD script tag
  lib/
    site.ts             # site config: name, url, email, calendar, nav
    content.ts          # all page copy as typed data
  tailwind.config.ts
  package.json ...
```

---

## Task 0: Scaffold the Next.js project

**Files:** creates the whole Next.js skeleton in the existing `vl-consulting/` dir (which already contains `docs/` and a git repo).

- [ ] **Step 1: Scaffold into a temp dir, then merge** (create-next-app refuses a non-empty dir)

```bash
cd /Users/vanviegenmacbook/dev
npx create-next-app@latest vl-tmp \
  --typescript --tailwind --app --eslint \
  --src-dir=false --import-alias "@/*" --no-turbopack --use-npm --yes
# move everything except its git into the real project
rsync -a --exclude='.git' vl-tmp/ vl-consulting/
rm -rf vl-tmp
```

- [ ] **Step 2: Verify it builds**

Run: `cd /Users/vanviegenmacbook/dev/vl-consulting && npm run build`
Expected: build completes with the default starter page, no errors.

- [ ] **Step 3: Remove starter cruft**

Delete the body of `app/page.tsx` and `app/globals.css` default content (they're replaced in later tasks). Delete `public/*.svg` starter assets and `app/favicon.ico` if desired.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js + Tailwind project"
```

---

## Task 1: Site config + content data model

**Files:**
- Create: `lib/site.ts`
- Create: `lib/content.ts`

This is the single source of truth for copy. Copy here is the **polished** version of Vé's existing text — produced with the copywriting skill (marketing-skills:copywriting) during execution: tighten wording, keep every claim, credential, employer, and service line; invent nothing; weave in natural SEO keywords (e.g. "R&D program management", "AI consulting", "academic–industry collaboration"). Source text = the original repo HTML captured in the spec.

- [ ] **Step 1: Write `lib/site.ts`**

```ts
export const site = {
  name: "VL Consulting",
  tagline: "Project & Strategy Consulting",
  url: "https://vl-consulting.vercel.app", // update if custom domain added
  email: "Ve@Verisans.com",
  calendar: "https://calendar.proton.me/bookings#vi7GyrlXSX1cFdjuR7iXu6S6s6RnTW-2IHDDhuEsQHM=",
  description:
    "Independent project, program, and strategic consulting at the intersection of science, technology, and innovation. Led by Vé Léandre, Ph.D.",
  nav: [
    { label: "Who We Are", href: "/who-we-are" },
    {
      label: "Strategy & Projects",
      href: "/strategy-and-projects",
      children: [
        { label: "R&D Program Coordination", href: "/strategy-and-projects/rd-program-coordination" },
        { label: "Portfolio Governance", href: "/strategy-and-projects/portfolio-governance" },
        { label: "Academic–Industry Collaboration", href: "/strategy-and-projects/academic-industry-collaboration" },
        { label: "Interim Program Leadership", href: "/strategy-and-projects/interim-program-leadership" },
      ],
    },
    { label: "Tech & AI", href: "/tech-and-ai" },
    { label: "Academic", href: "/academic" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
```

- [ ] **Step 2: Write `lib/content.ts` types + data**

Define types and export the data. Full shape:

```ts
export type Card = { label: string; title: string; body: string };
export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];      // intro paragraphs
  cards: Card[];        // numbered/labelled cards
  showContact?: boolean;
};

// One entry per service/sub-service page. Populate `intro`/`cards`
// with polished versions of the original copy (copywriting skill).
export const services: Record<string, ServiceContent> = {
  "tech-and-ai": { slug: "tech-and-ai", title: "Technology & AI Consulting", /* ...5 cards... */ },
  "academic": { slug: "academic", title: "Academic Consulting & Educational Services", /* ...5 cards... */ },
  "rd-program-coordination": { /* 5 cards */ },
  "portfolio-governance": { /* 5 cards */ },
  "academic-industry-collaboration": { /* 5 cards */ },
  "interim-program-leadership": { /* 5 cards */ },
};

export const home = {
  heroTitle: "Strategy and execution at the intersection of science, technology, and innovation.",
  heroSub: "VL Consulting provides independent project, program, and strategic support to research-driven organizations.",
  pillars: [ /* 3 cards: Strategy & Projects, Tech & AI, Academic */ ],
};

export const whoWeAre = {
  intro: "…", // polished version of the Who We Are intro
  cards: [ /* Profile, Perspective, Education — polished */ ],
};

export const strategyOverview = {
  intro: ["…"],
  cards: [ /* 4 sub-service summaries linking to detail pages */ ],
};
```

During execution, fill every `/* */` with the actual polished copy (no placeholders left in code). The original text for each card is in the spec's source capture.

- [ ] **Step 3: Verify types compile**

Run: `npx tsc --noEmit`
Expected: no type errors.

- [ ] **Step 4: Commit**

```bash
git add lib && git commit -m "feat: add site config and content data model"
```

---

## Task 2: Design tokens — fonts, Tailwind theme, globals

**Files:**
- Modify: `app/layout.tsx` (font setup only — full layout in Task 5)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Load fonts in `app/layout.tsx`**

```ts
import { Fraunces, Inter } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
// apply `${fraunces.variable} ${inter.variable}` on <html>
```

- [ ] **Step 2: Extend Tailwind theme (`tailwind.config.ts`)**

```ts
theme: {
  extend: {
    colors: {
      paper: "#F7F4EF",     // warm off-white background
      ink: "#1A1A1A",       // near-black text
      accent: "#0E5C56",    // deep teal
      "accent-dark": "#0A413D",
      muted: "#6B6660",
    },
    fontFamily: {
      serif: ["var(--font-serif)", "serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    maxWidth: { content: "72rem" },
  },
}
```

- [ ] **Step 3: Base styles in `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-paper text-ink font-sans antialiased; }
  h1, h2, h3 { @apply font-serif font-semibold tracking-tight; }
  a { @apply transition-colors; }
}
@layer utilities {
  .fade-in { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
  .fade-in.is-visible { opacity: 1; transform: none; }
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: builds clean.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: design tokens, fonts, base styles"
```

---

## Task 3: Core presentational components

**Files:** Create `components/Wordmark.tsx`, `components/CTAButtons.tsx`, `components/FadeIn.tsx`, `components/JsonLd.tsx`.

- [ ] **Step 1: `components/Wordmark.tsx`**

```tsx
import Link from "next/link";
import { site } from "@/lib/site";

export default function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="font-serif text-3xl font-bold tracking-tighter text-ink leading-none">VL</span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink">{site.name}</span>
          <span className="block text-xs text-muted">{site.tagline}</span>
        </span>
      )}
    </Link>
  );
}
```

- [ ] **Step 2: `components/CTAButtons.tsx`**

```tsx
import { site } from "@/lib/site";

export default function CTAButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={site.calendar} target="_blank" rel="noopener noreferrer"
         className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper hover:bg-accent-dark">
        Book a consultation
      </a>
      <a href={`mailto:${site.email}`}
         className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink">
        Email me
      </a>
    </div>
  );
}
```

- [ ] **Step 3: `components/FadeIn.tsx`** (client, intersection observer)

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in ${v ? "is-visible" : ""} ${className}`}>{children}</div>;
}
```

- [ ] **Step 4: `components/JsonLd.tsx`**

```tsx
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
```

- [ ] **Step 5: Build + commit**

Run: `npm run build` → clean.
```bash
git add components && git commit -m "feat: core components (wordmark, CTAs, fade-in, json-ld)"
```

---

## Task 4: Header (with mobile menu) and Footer

**Files:** Create `components/Header.tsx` (client, for menu toggle), `components/Footer.tsx`.

- [ ] **Step 1: `components/Header.tsx`**

Sticky header: `Wordmark` left; desktop nav from `site.nav` (the Strategy item shows its `children` in a hover/focus dropdown); a "Book a call" accent button right; on mobile a hamburger that toggles a full-width panel listing all nav links (and children flattened). Requirements: real `<nav>`, `aria-expanded` on the toggle, `aria-label`, closes on link click, keyboard-accessible (focusable buttons/links). Use `useState` for `open`. Use `accent` for active/hover. Full implementation written during execution following this spec.

- [ ] **Step 2: `components/Footer.tsx`**

Footer: `Wordmark`, short blurb (`site.description`), a column of nav links, and `CTAButtons`. Bottom line: `© {year} VL Consulting`. Server component.

- [ ] **Step 3: Build + commit**

Run: `npm run build` → clean.
```bash
git add components && git commit -m "feat: header with mobile nav + footer"
```

---

## Task 5: Root layout + default SEO metadata + org JSON-LD

**Files:** Modify `app/layout.tsx`.

- [ ] **Step 1: Compose layout**

Wrap `{children}` between `<Header />` and `<Footer />` inside `<body>`. Apply font variables to `<html>`. Add a skip-to-content link for a11y.

- [ ] **Step 2: Default metadata via Metadata API**

```ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};
```

- [ ] **Step 3: Add `ProfessionalService` + `Person` JSON-LD** in the layout via `<JsonLd data={...} />`:

```ts
const orgLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService",
  name: site.name, url: site.url, email: site.email, description: site.description,
  founder: { "@type": "Person", name: "Vé Léandre",
    jobTitle: "Project & Strategy Consultant",
    alumniOf: ["Brown University"],
    worksFor: { "@type": "Organization", name: "VL Consulting" } },
  areaServed: ["Netherlands", "United States", "Worldwide"],
};
```

- [ ] **Step 4: Build + commit**

Run: `npm run build` → clean.
```bash
git add app && git commit -m "feat: root layout, default metadata, org structured data"
```

---

## Task 6: ServicePage template + service routes

**Files:** Create `components/ServicePage.tsx`; routes `app/tech-and-ai/page.tsx`, `app/academic/page.tsx`, `app/strategy-and-projects/[slug]/page.tsx`.

- [ ] **Step 1: `components/ServicePage.tsx`**

```tsx
import FadeIn from "./FadeIn";
import CTAButtons from "./CTAButtons";
import type { ServiceContent } from "@/lib/content";

export default function ServicePage({ data }: { data: ServiceContent }) {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">{data.title}</h1>
        {data.intro.map((p, i) => <p key={i} className="mt-5 text-lg text-muted leading-relaxed">{p}</p>)}
      </header>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((c, i) => (
          <FadeIn key={i}>
            <article className="h-full rounded-2xl border border-ink/10 bg-white/40 p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{c.label}</span>
              <h3 className="mt-3 text-xl">{c.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{c.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
      {data.showContact && <CTAButtons className="mt-16" />}
    </main>
  );
}
```

- [ ] **Step 2: `app/tech-and-ai/page.tsx`**

```tsx
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/content";
import type { Metadata } from "next";
const data = services["tech-and-ai"];
export const metadata: Metadata = { title: data.metaTitle, description: data.metaDescription, alternates: { canonical: "/tech-and-ai" } };
export default function Page() { return <ServicePage data={data} />; }
```

- [ ] **Step 3: `app/academic/page.tsx`** — identical pattern with `services["academic"]` and canonical `/academic`.

- [ ] **Step 4: `app/strategy-and-projects/[slug]/page.tsx`** (dynamic, 4 sub-services)

```tsx
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/content";
import type { Metadata } from "next";

const SLUGS = ["rd-program-coordination","portfolio-governance","academic-industry-collaboration","interim-program-leadership"];
export function generateStaticParams() { return SLUGS.map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const d = services[slug];
  return d ? { title: d.metaTitle, description: d.metaDescription, alternates: { canonical: `/strategy-and-projects/${slug}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = services[slug];
  if (!d) notFound();
  return <ServicePage data={d} />;
}
```

- [ ] **Step 5: Build + verify routes**

Run: `npm run build`
Expected: all 4 sub-service routes appear as static pages; `/tech-and-ai`, `/academic` build.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: service page template + tech/academic/strategy sub-routes"
```

---

## Task 7: Strategy & Projects overview page

**Files:** Create `app/strategy-and-projects/page.tsx`.

- [ ] **Step 1: Build the overview** — intro from `strategyOverview.intro`, then a grid of 4 cards (`strategyOverview.cards`), each a `Link` to its sub-service route. Reuse the card styling from `ServicePage`. Add `metadata` with canonical `/strategy-and-projects`.

- [ ] **Step 2: Build + commit**

Run: `npm run build` → clean.
```bash
git add -A && git commit -m "feat: strategy & projects overview page"
```

---

## Task 8: Who We Are page

**Files:** Create `app/who-we-are/page.tsx`.

- [ ] **Step 1:** Render `whoWeAre.intro` as a lead paragraph, then a 3-card grid (`whoWeAre.cards`: Profile / Perspective / Education) using the same card pattern, wrapped in `FadeIn`. Add `metadata` (title "Who We Are", description, canonical `/who-we-are`).

- [ ] **Step 2: Build + commit**

Run: `npm run build` → clean.
```bash
git add -A && git commit -m "feat: who we are page"
```

---

## Task 9: Home page

**Files:** Create `app/page.tsx`; create `components/PillarCard.tsx`.

- [ ] **Step 1: `components/PillarCard.tsx`** — a `Link` card (title, blurb, "Learn more →") to a pillar route, accent hover.

- [ ] **Step 2: `app/page.tsx`** — hero section (`home.heroTitle` in large serif, `home.heroSub`, `CTAButtons`), then a 3-column `PillarCard` grid (`home.pillars` → Strategy & Projects, Tech & AI, Academic), then a short credibility strip (Genentech/Roche · Brown University · Providence VA — from her background) and a closing CTA band. Wrap sections in `FadeIn`. Home-specific `metadata` canonical `/`.

- [ ] **Step 3: Build + commit**

Run: `npm run build` → clean.
```bash
git add -A && git commit -m "feat: home page"
```

---

## Task 10: Contact page

**Files:** Create `app/contact/page.tsx`.

- [ ] **Step 1:** A focused page: heading, one short paragraph inviting a conversation, a prominent "Book a consultation" button (calendar) and "Email me" (`mailto`) — reuse `CTAButtons` but larger. Show the email address as visible text too. `metadata` title "Contact", canonical `/contact`.

- [ ] **Step 2: Build + commit**

Run: `npm run build` → clean.
```bash
git add -A && git commit -m "feat: contact page"
```

---

## Task 11: SEO — sitemap, robots, OG image

**Files:** Create `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`.

- [ ] **Step 1: `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
const routes = ["", "/who-we-are", "/strategy-and-projects",
  "/strategy-and-projects/rd-program-coordination","/strategy-and-projects/portfolio-governance",
  "/strategy-and-projects/academic-industry-collaboration","/strategy-and-projects/interim-program-leadership",
  "/tech-and-ai","/academic","/contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
```

- [ ] **Step 2: `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
```

- [ ] **Step 3: `app/opengraph-image.tsx`** — use `next/og` `ImageResponse` to render a 1200×630 card: paper background, bold "VL" + "VL Consulting" + tagline in accent. (Static, no external assets.)

- [ ] **Step 4: Verify**

Run: `npm run build` then check `.next` output lists `/sitemap.xml` and `/robots.txt`.
```bash
git add -A && git commit -m "feat: sitemap, robots, OG image"
```

---

## Task 12: QA pass + polish

**Files:** as needed across the app.

- [ ] **Step 1: Lint + typecheck + build**

Run: `npm run lint && npx tsc --noEmit && npm run build`
Expected: all clean. Fix any issues.

- [ ] **Step 2: Visual QA with the browse skill** — run `npm run dev`, open the site, check: desktop + mobile (375px) layouts, mobile menu opens/closes, all nav links resolve (no 404s), CTAs point to the calendar + mailto, fade-ins fire, contrast is readable. Use the `browse` skill (gstack) to screenshot Home + one service page at desktop and mobile widths.

- [ ] **Step 3: Fix issues found, commit**

```bash
git add -A && git commit -m "fix: QA polish pass"
```

---

## Task 13: Ship — GitHub repo + Vercel deploy

**Files:** none (deploy/config).

- [ ] **Step 1: Authenticate as Vé**

```bash
gh auth login   # interactive: GitHub.com, HTTPS, login as Vé
gh auth status  # confirm logged in as vl3andr3
```

- [ ] **Step 2: Add `.gitignore` sanity** — ensure `node_modules`, `.next`, `.env*` are ignored (create-next-app handles this).

- [ ] **Step 3: Create the new repo and push**

```bash
cd /Users/vanviegenmacbook/dev/vl-consulting
gh repo create vl3andr3/vl-consulting --private --source=. --remote=origin --push
```

- [ ] **Step 4: Deploy to Vé's Vercel**

```bash
npx vercel login   # log in with Vé's email
npx vercel link    # create a new Vercel project under her account
npx vercel --prod  # production deploy
```

Or import the repo via the Vercel dashboard on her account. Confirm the live `*.vercel.app` URL loads.

- [ ] **Step 5: Post-launch SEO handoff (manual, by Vé/Alex)** — verify the site in Google Search Console, submit `sitemap.xml`, and create a Google Business Profile. Note these in the repo `README`.

- [ ] **Step 6: Final commit / README**

Add a `README.md` documenting local dev (`npm run dev`), the content model (`lib/content.ts`), and how to update the email/calendar/URL in `lib/site.ts`.
```bash
git add -A && git commit -m "docs: project readme" && git push
```

---

## Notes for the implementer
- **Copy:** every `intro`/`cards`/`pillars` value in `lib/content.ts` must be filled with real polished copy before Task 6 builds meaningfully — use marketing-skills:copywriting, source text from the original repo (captured in the spec). No `/* */` placeholders left in committed code.
- **Final design picks:** serif (Fraunces) and accent (deep teal `#0E5C56`) are defaults; adjust in `tailwind.config.ts` after a visual check and show Alex for approval.
- **Verification model:** no unit tests (content site, no logic). "Done" for each task = `npm run build` clean + the relevant page renders correctly in the browser.
