import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import CTAButtons from "@/components/CTAButtons";
import PillarCard from "@/components/PillarCard";
import { home } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-content px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-accent" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {site.tagline}
              </p>
            </div>
            <h1 className="mt-6 max-w-4xl text-[2.5rem] leading-[1.06] sm:text-5xl md:mt-7 md:text-6xl md:leading-[1.04] lg:text-7xl">
              {home.heroTitleLead}
              <span className="text-accent">{home.heroTitleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {home.heroSub}
            </p>
            <CTAButtons className="mt-10" size="lg" />
          </FadeIn>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-ink/10 bg-white/30">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-7 md:flex-row md:items-center md:gap-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            {home.credibility.label}
          </span>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {home.credibility.items.map((item) => (
              <li key={item} className="text-sm font-medium text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-content px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl">How VL Consulting helps</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Three connected practice areas, backed by experience across industry,
            academia, and emerging technology.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.pillars.map((p) => (
            <FadeIn key={p.href} className="h-full">
              <PillarCard title={p.title} body={p.body} href={p.href} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="bg-accent text-paper">
        <div className="mx-auto max-w-content px-6 py-16 md:py-20">
          <FadeIn>
            <h2 className="max-w-2xl text-3xl text-paper md:text-4xl">
              Have a complex initiative that needs structure?
            </h2>
            <p className="mt-4 max-w-xl text-paper/85">
              Book a consultation to talk through your goals — engagements are
              remote and contract-based, for Dutch, American, and international
              clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-paper px-7 py-4 text-base font-semibold text-accent hover:bg-white"
              >
                Book a consultation
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-paper/40 px-7 py-4 text-base font-semibold text-paper hover:border-paper"
              >
                Email me
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
