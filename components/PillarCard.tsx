import Link from "next/link";

export default function PillarCard({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-7 transition hover:border-accent/40 hover:shadow-sm"
    >
      <h2 className="text-2xl group-hover:text-accent">{title}</h2>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{body}</p>
      <span className="mt-5 text-sm font-semibold text-accent">Learn more →</span>
    </Link>
  );
}
