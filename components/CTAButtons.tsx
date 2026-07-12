import Link from "next/link";
import { site } from "@/lib/site";

export default function CTAButtons({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={site.calendar}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full bg-accent ${pad} font-semibold text-paper hover:bg-accent-dark`}
      >
        Book a consultation
      </a>
      <Link
        href="/contact"
        className={`rounded-full border border-ink/20 ${pad} font-semibold text-ink hover:border-ink`}
      >
        Send a message
      </Link>
    </div>
  );
}
