import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-src",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "R&D program management",
    "AI consulting",
    "machine learning advisory",
    "academic–industry collaboration",
    "portfolio governance",
    "interim program leadership",
    "science and technology consulting",
    "Vé Léandre",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  founder: {
    "@type": "Person",
    name: "Vé Léandre",
    honorificSuffix: "Ph.D.",
    jobTitle: "Project & Strategy Consultant",
    alumniOf: ["Brown University"],
    worksFor: { "@type": "Organization", name: "Verisans Consulting" },
  },
  knowsAbout: [
    "R&D program management",
    "Portfolio governance",
    "Academic–industry collaboration",
    "Interim program leadership",
    "AI consulting",
    "Machine learning evaluation",
    "Scientific teaching and mentorship",
  ],
  areaServed: ["Netherlands", "United States", "Worldwide"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={orgLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <div id="main" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
