import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { about } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Vé Léandre",
  description:
    "Meet Vé Léandre, Ph.D. — founder of Verisans Consulting. Experience across Genentech (Roche Group), Brown University, the Providence VA, AI model evaluation, and STEM teaching and mentorship.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-content px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        {/* Identity card */}
        <FadeIn>
          <div className="md:sticky md:top-28">
            <div
              aria-hidden
              className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent text-paper"
            >
              <span className="font-serif text-3xl font-bold tracking-tight">
                V
              </span>
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl">{about.name}</h1>
            <p className="mt-1 text-muted">{about.role}</p>

            <ul className="mt-6 space-y-2.5">
              {about.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-ink">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-paper hover:bg-accent-dark"
              >
                Book a consultation
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink/20 px-6 py-3 text-center text-sm font-semibold text-ink hover:border-ink"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bio */}
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed text-ink md:text-2xl">
              {about.lead}
            </p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
