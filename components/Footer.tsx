import Link from "next/link";
import Wordmark from "./Wordmark";
import CTAButtons from "./CTAButtons";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-ink">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Work together</h2>
          <p className="mt-4 text-sm text-muted">
            Book a consultation or reach out by email — engagements are remote and
            contract-based.
          </p>
          <CTAButtons className="mt-5" />
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-muted hover:text-accent"
          >
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-content px-6 py-5 text-xs text-muted">
          © {year} {site.name}. {site.tagline}.
        </div>
      </div>
    </footer>
  );
}
