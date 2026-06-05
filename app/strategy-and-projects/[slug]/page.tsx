import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/content";

const SLUGS = [
  "rd-program-coordination",
  "portfolio-governance",
  "academic-industry-collaboration",
  "interim-program-leadership",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = services[slug];
  return d
    ? {
        title: d.metaTitle,
        description: d.metaDescription,
        alternates: { canonical: `/strategy-and-projects/${slug}` },
      }
    : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = services[slug];
  if (!d) notFound();
  return <ServicePage data={d} />;
}
