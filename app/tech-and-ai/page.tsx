import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/content";

const data = services["tech-and-ai"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/tech-and-ai" },
};

export default function Page() {
  return <ServicePage data={data} />;
}
