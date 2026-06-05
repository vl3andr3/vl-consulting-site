/*
  Lightweight entrance-animation wrapper. The animation lives entirely in CSS
  (.fade-in in globals.css) with a visible end state, so content is never
  dependent on JS or scroll position to appear. No client runtime needed.
*/
export default function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`fade-in ${className}`}>{children}</div>;
}
