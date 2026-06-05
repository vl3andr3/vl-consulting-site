import Link from "next/link";
import { site } from "@/lib/site";

export default function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label={site.name}>
      <span className="font-serif text-3xl font-bold tracking-tighter text-ink leading-none transition-colors group-hover:text-accent">
        VL
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink">{site.name}</span>
          <span className="block text-xs text-muted">{site.tagline}</span>
        </span>
      )}
    </Link>
  );
}
