import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Verisans Consulting or reach out by email. Remote, contract-based engagements for Dutch, American, and international clients.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-content px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">Let&rsquo;s work together</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          The best way to start is a short consultation. Book a time that suits
          you, or send a note describing your project and what you&rsquo;d like to
          achieve. Engagements are remote and contract-based, for Dutch, American,
          and international clients.
        </p>

        <CTAButtons className="mt-10" size="lg" />

        <p className="mt-8 text-sm text-muted">
          Prefer email? Reach Vé directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-accent hover:text-accent-dark"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
