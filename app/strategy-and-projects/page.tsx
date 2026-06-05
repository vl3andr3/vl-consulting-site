import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTAButtons from "@/components/CTAButtons";
import { strategyOverview } from "@/lib/content";

export const metadata: Metadata = {
  title: "Strategy & Projects",
  description:
    "R&D program management, portfolio governance, academic–industry collaboration, and interim program leadership for research-driven organizations.",
  alternates: { canonical: "/strategy-and-projects" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">Strategy &amp; Projects</h1>
        {strategyOverview.intro.map((p, i) => (
          <p key={i} className="mt-5 text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {strategyOverview.cards.map((c, i) => (
          <FadeIn key={i} className="h-full">
            <Link
              href={c.href}
              className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-7 transition hover:border-accent/40 hover:shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {c.label}
              </span>
              <h2 className="mt-3 text-xl group-hover:text-accent">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
              <span className="mt-5 text-sm font-semibold text-accent">
                Learn more →
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16">
        <div className="rounded-2xl border border-ink/10 bg-white/40 p-8 md:p-10">
          <h2 className="text-2xl">Bring structure to a complex initiative.</h2>
          <p className="mt-3 max-w-xl text-muted">
            Whether you need cross-functional coordination, clearer governance, or
            interim leadership through a transition, let&rsquo;s scope the work
            together.
          </p>
          <CTAButtons className="mt-6" />
        </div>
      </FadeIn>
    </main>
  );
}
