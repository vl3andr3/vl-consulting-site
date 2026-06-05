import FadeIn from "./FadeIn";
import CTAButtons from "./CTAButtons";
import type { ServiceContent } from "@/lib/content";

export default function ServicePage({ data }: { data: ServiceContent }) {
  return (
    <main className="mx-auto max-w-content px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">{data.title}</h1>
        {data.intro.map((p, i) => (
          <p key={i} className="mt-5 text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((c, i) => (
          <FadeIn key={i} className="h-full">
            <article className="h-full rounded-2xl border border-ink/10 bg-white/40 p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {c.label}
              </span>
              <h2 className="mt-3 text-xl">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      {data.showContact && (
        <FadeIn className="mt-16">
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-8 md:p-10">
            <h2 className="text-2xl">Let&rsquo;s talk through your challenge.</h2>
            <p className="mt-3 max-w-xl text-muted">
              Book a consultation or send a note — engagements are remote and
              contract-based, for Dutch, American, and international clients.
            </p>
            <CTAButtons className="mt-6" />
          </div>
        </FadeIn>
      )}
    </main>
  );
}
