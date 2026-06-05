import Link from "next/link";

/*
  Renders a block of text with every mention of "Vé Léandre" turned into a
  contextual link to the About page. Keeps her name clickable wherever it's
  brought up, without a dedicated top-nav item.
*/
export default function LinkedName({ text }: { text: string }) {
  return (
    <>
      {text.split("Vé Léandre").flatMap((part, i) =>
        i === 0
          ? [part]
          : [
              <Link
                key={i}
                href="/about"
                className="text-ink underline decoration-ink/30 underline-offset-2 hover:text-accent hover:decoration-accent"
              >
                Vé Léandre
              </Link>,
              part,
            ],
      )}
    </>
  );
}
