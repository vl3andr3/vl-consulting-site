export const site = {
  name: "Verisans Consulting",
  tagline: "Project & Strategy Consulting",
  url: "https://verisans-consulting.vercel.app", // update if a custom domain is added
  email: "veridaleandre@gmail.com",
  calendar: "https://calendar.app.google/Drhrc5AK8LYHmF137",
  linkedin: "https://www.linkedin.com/in/veridaleandre",
  description:
    "Independent project, program, and strategic consulting at the intersection of science, technology, and innovation. Led by Vé Léandre, Ph.D. — R&D program management, AI consulting, and academic–industry collaboration.",
  nav: [
    { label: "Who We Are", href: "/who-we-are" },
    {
      label: "Strategy & Projects",
      href: "/strategy-and-projects",
      children: [
        {
          label: "R&D Program Coordination",
          href: "/strategy-and-projects/rd-program-coordination",
        },
        {
          label: "Portfolio Governance",
          href: "/strategy-and-projects/portfolio-governance",
        },
        {
          label: "Academic–Industry Collaboration",
          href: "/strategy-and-projects/academic-industry-collaboration",
        },
        {
          label: "Interim Program Leadership",
          href: "/strategy-and-projects/interim-program-leadership",
        },
      ],
    },
    { label: "Tech & AI", href: "/tech-and-ai" },
    { label: "Academic", href: "/academic" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
