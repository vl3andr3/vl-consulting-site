# VL Consulting

Marketing site for **VL Consulting** — independent project, program, and strategic consulting at the intersection of science, technology, and innovation. Led by Vé Léandre, Ph.D.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on Vercel.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

Almost everything is data-driven — you rarely touch page code:

- **`lib/site.ts`** — site name, tagline, **email**, **booking calendar link**, **LinkedIn**, site URL, and the top navigation.
- **`lib/content.ts`** — all page copy: home hero, the About bio, Who We Are, and every service / sub-service page (intro + cards).

To change the email, calendar link, or live URL, edit `lib/site.ts`.

## Structure

- `app/` — routes (home, about, who-we-are, strategy-and-projects + sub-services, tech-and-ai, academic, contact) plus `sitemap.ts`, `robots.ts`, and the OG image.
- `components/` — Header (with mobile menu), Footer, ServicePage template, CTA buttons, etc.

## SEO

Per-page metadata, `sitemap.xml`, `robots.txt`, Open Graph image, and JSON-LD structured data (`ProfessionalService` + `Person`) are built in. After the first deploy: verify the site in Google Search Console and submit the sitemap.
