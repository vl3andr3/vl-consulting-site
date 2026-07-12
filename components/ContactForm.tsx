"use client";
import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // FormSubmit delivers straight to Vé's inbox — no backend to run.
      const res = await fetch("https://formsubmit.co/ajax/Ve@Verisans.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New enquiry via verisans.com — ${name}`,
          _template: "table",
          _captcha: "false",
          name,
          email,
          _replyto: email,
          company: org || "—",
          message: msg || "—",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 max-w-xl rounded-2xl border border-ink/15 bg-white p-8">
        <p className="font-serif text-2xl font-semibold tracking-tight">Sent.</p>
        <p className="mt-2 text-muted">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""} — your message is on its
          way. Vé will get back to you soon.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={submit} className="mt-8 max-w-xl space-y-4">
      <input
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={field}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={field}
      />
      <input
        placeholder="Company / organisation (optional)"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
        className={field}
      />
      <textarea
        required
        placeholder="Tell Vé about your project and what you'd like to achieve"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        rows={5}
        className={field}
      />
      <button
        disabled={status === "sending"}
        className="rounded-full bg-accent px-7 py-4 text-base font-semibold text-paper hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Please email Vé directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
