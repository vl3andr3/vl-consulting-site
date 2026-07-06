import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTAButtons from "@/components/CTAButtons";
import LinkedName from "@/components/LinkedName";
import { whoWeAre } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Verisans Consulting is led by Vé Léandre, Ph.D. — project management and strategy experience from Genentech (Roche Group), Brown University, and the Providence VA Medical Center, spanning R&D, AI, and education.",
  alternates: { canonical: "/who-we-are" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl">Who We Are</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{whoWeAre.intro}</p>
      </header>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {whoWeAre.cards.map((c, i) => (
          <FadeIn key={i} className="h-full">
            <article className="h-full rounded-2xl border border-ink/10 bg-white/40 p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {c.label}
              </span>
              <h2 className="mt-3 text-xl">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">
                <LinkedName text={c.body} />
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12">
        <p className="text-muted">
          Explore the{" "}
          <Link
            href="/strategy-and-projects"
            className="font-semibold text-accent hover:text-accent-dark"
          >
            Strategy &amp; Projects case areas
          </Link>
          , or learn how Verisans Consulting works with{" "}
          <Link
            href="/tech-and-ai"
            className="font-semibold text-accent hover:text-accent-dark"
          >
            technology and AI
          </Link>
          .
        </p>
      </FadeIn>

      <FadeIn className="mt-12">
        <CTAButtons />
      </FadeIn>
    </main>
  );
}
