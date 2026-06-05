import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/who-we-are",
  "/strategy-and-projects",
  "/strategy-and-projects/rd-program-coordination",
  "/strategy-and-projects/portfolio-governance",
  "/strategy-and-projects/academic-industry-collaboration",
  "/strategy-and-projects/interim-program-leadership",
  "/tech-and-ai",
  "/academic",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
