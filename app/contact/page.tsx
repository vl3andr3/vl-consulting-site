import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Verisans Consulting or send a message. Remote, contract-based engagements for Dutch, American, and international clients.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-content px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl">Let&rsquo;s work together</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          The best way to start is a short consultation. Book a time that suits
          you, or send a note below describing your project and what you&rsquo;d
          like to achieve. Engagements are remote and contract-based, for Dutch,
          American, and international clients.
        </p>

        <div className="mt-10">
          <a
            href={site.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-7 py-4 text-base font-semibold text-paper hover:bg-accent-dark"
          >
            Book a consultation
          </a>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-10">
          <h2 className="text-2xl">Send a message</h2>
          <p className="mt-3 text-muted">
            Prefer to write? Fill in the form and it&rsquo;ll land straight in
            Vé&rsquo;s inbox.
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
