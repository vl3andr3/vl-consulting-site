export type Card = { label: string; title: string; body: string };

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  cards: Card[];
  showContact?: boolean;
};

// ---------------------------------------------------------------------------
// Service & sub-service pages
// Copy is the polished version of Vé Léandre's original site text. Every
// claim, credential, employer, and service line is preserved; nothing factual
// is invented. SEO keywords are woven in naturally.
// ---------------------------------------------------------------------------

export const services: Record<string, ServiceContent> = {
  "tech-and-ai": {
    slug: "tech-and-ai",
    title: "Technology & AI Consulting",
    metaTitle: "Technology & AI Consulting",
    metaDescription:
      "AI consulting and machine learning advisory: model optimization, evaluation and benchmarking, AI integration, data-driven process improvement, and AI strategy for research-driven organizations.",
    intro: [
      "Verisans Consulting helps organizations strengthen AI-enabled workflows, improve machine learning model performance, and translate emerging digital capabilities into practical business and operational value.",
      "Engagements span five core areas of technology and AI consulting.",
    ],
    cards: [
      {
        label: "Service 1",
        title: "Machine Learning Model Optimization",
        body: "Support for improving model reasoning, evaluation quality, instruction-following, domain accuracy, and performance across complex analytical, scientific, and operational tasks.",
      },
      {
        label: "Service 2",
        title: "AI Model Evaluation & Benchmarking",
        body: "Development and review of evaluation frameworks, reasoning standards, test cases, and benchmark criteria to assess model capabilities, limitations, and reliability.",
      },
      {
        label: "Service 3",
        title: "AI Integration in Organizations",
        body: "Guidance for teams adopting AI tools into existing operations — including workflow redesign, use-case prioritization, governance considerations, and implementation planning.",
      },
      {
        label: "Service 4",
        title: "Data-Driven Process Improvement",
        body: "Support for using structured data, analytics, and AI-enabled systems to improve decision-making, reduce manual work, and increase operational visibility.",
      },
      {
        label: "Service 5",
        title: "AI Strategy & Transformation Advisory",
        body: "Advisory support for organizations evaluating emerging AI opportunities, managing adoption risks, and aligning AI initiatives with business, research, or portfolio strategy.",
      },
    ],
    showContact: true,
  },

  academic: {
    slug: "academic",
    title: "Academic Consulting & Educational Services",
    metaTitle: "Academic Consulting & Educational Services",
    metaDescription:
      "Teaching, tutoring, mentoring, curriculum support, and educational advising in scientific, technical, and analytical disciplines — from biomedical engineering to research methods and scientific communication.",
    intro: [
      "Verisans Consulting provides teaching, tutoring, mentoring, curriculum support, and educational advising for students, universities, and educational organizations working across scientific, technical, and analytical disciplines.",
      "Services draw on experience teaching and supporting learners across K–12, undergraduate, graduate, and advanced academic settings — including biomedical engineering, polymer science, drug delivery, research methods, and scientific communication.",
    ],
    cards: [
      {
        label: "Service 1",
        title: "Advanced Scientific Teaching & Tutoring",
        body: "Direct teaching and tutoring support for advanced university, graduate-level, and motivated pre-college students in scientific, technical, biomedical, and analytical disciplines.",
      },
      {
        label: "Service 2",
        title: "Student Mentoring & Academic Development",
        body: "Mentoring for students developing research skills, academic confidence, scientific reasoning, technical communication, and preparation for advanced study or professional opportunities.",
      },
      {
        label: "Service 3",
        title: "Curriculum Creation & Strengthening",
        body: "Support for universities, schools, and educational organizations designing, refining, or strengthening curricula in scientific, technical, biomedical, and interdisciplinary subject areas.",
      },
      {
        label: "Service 4",
        title: "Educational Content Creation",
        body: "Development of lectures, learning modules, assignments, workshops, instructional materials, and scientific explainers designed to make complex topics clear, rigorous, and accessible.",
      },
      {
        label: "Service 5",
        title: "Academic Program & Learning Strategy Advising",
        body: "Advisory support for educational organizations seeking to improve learning outcomes, strengthen program structure, support advanced learners, or connect scientific content to real-world applications.",
      },
    ],
    showContact: true,
  },

  "rd-program-coordination": {
    slug: "rd-program-coordination",
    title: "Cross-functional R&D Program Coordination",
    metaTitle: "Cross-functional R&D Program Coordination",
    metaDescription:
      "R&D program management that aligns scientific, clinical, regulatory, and commercial workstreams — clarifying ownership, improving visibility, and managing cross-functional dependencies.",
    intro: [
      "Verisans Consulting helps research-driven teams align priorities, clarify ownership, improve communication, and manage complex cross-functional dependencies across scientific, clinical, regulatory, and commercial workstreams.",
      "Below are five common challenges in cross-functional R&D program coordination — and the friction Verisans Consulting is engaged to resolve.",
    ],
    cards: [
      {
        label: "01",
        title: "Misalignment Across Functions",
        body: "Scientific, clinical, regulatory, and commercial teams often operate with different priorities, timelines, and definitions of success — leading to friction and slow decision-making.",
      },
      {
        label: "02",
        title: "Lack of End-to-End Program Visibility",
        body: "Stakeholders lack a clear, unified view of progress, risks, dependencies, and timelines, making it difficult to anticipate delays or intervene early.",
      },
      {
        label: "03",
        title: "Unclear Ownership and Decision-Making",
        body: "Critical activities fall through the cracks when roles, responsibilities, and decision rights are not clearly defined — especially across functions.",
      },
      {
        label: "04",
        title: "Poorly Managed Dependencies and Risks",
        body: "Interdependencies between teams (e.g., preclinical → clinical → regulatory) are often under-coordinated, causing downstream delays and reactive firefighting.",
      },
      {
        label: "05",
        title: "Inefficient Communication and Meeting Overload",
        body: "Teams spend excessive time in meetings without clear outcomes, while key updates and decisions fail to reach the right stakeholders at the right time.",
      },
    ],
    showContact: true,
  },

  "portfolio-governance": {
    slug: "portfolio-governance",
    title: "Portfolio Governance & Milestone Planning",
    metaTitle: "Portfolio Governance & Milestone Planning",
    metaDescription:
      "Structured governance models, clear milestone frameworks, and decision gates that align execution with strategy and enable effective portfolio oversight.",
    intro: [
      "Verisans Consulting supports organizations in establishing structured governance models, clear milestone frameworks, and decision-making processes that align execution with strategy and enable effective portfolio oversight.",
      "Below are five common challenges in portfolio governance and milestone planning that Verisans Consulting helps resolve.",
    ],
    cards: [
      {
        label: "01",
        title: "Unclear Milestones and Decision Gates",
        body: "Programs lack well-defined stage gates, success criteria, and decision points, making it difficult to evaluate progress or determine when to advance, pause, or stop initiatives.",
      },
      {
        label: "02",
        title: "Misalignment Between Strategy and Execution",
        body: "Portfolio priorities are not clearly translated into operational plans and milestones, resulting in work that does not fully support strategic objectives.",
      },
      {
        label: "03",
        title: "Inconsistent Governance Across Programs",
        body: "Different teams use varying approaches to planning and reporting, leading to inconsistent data, unclear comparisons, and difficulty managing the portfolio holistically.",
      },
      {
        label: "04",
        title: "Limited Visibility Into Portfolio Health",
        body: "Leadership lacks a clear, consolidated view of program status, risks, timelines, and resource allocation, making it hard to make informed portfolio-level decisions.",
      },
      {
        label: "05",
        title: "Resource Allocation Conflicts Across Programs",
        body: "Competing demands for people, budget, and infrastructure lead to overcommitment, delays, and inefficient use of resources without structured prioritization.",
      },
    ],
    showContact: true,
  },

  "academic-industry-collaboration": {
    slug: "academic-industry-collaboration",
    title: "Academic–Industry Collaboration Projects",
    metaTitle: "Academic–Industry Collaboration Projects",
    metaDescription:
      "Structuring, coordinating, and managing academic–industry collaboration so partners align expectations, clarify responsibilities, and translate shared goals into executable project plans.",
    intro: [
      "Verisans Consulting supports organizations in structuring, coordinating, and managing academic–industry collaborations so partners can align expectations, clarify responsibilities, and translate shared goals into executable project plans.",
      "Below are five common challenges in academic–industry collaboration projects that Verisans Consulting helps resolve.",
    ],
    cards: [
      {
        label: "01",
        title: "Misaligned Expectations Between Partners",
        body: "Academic and industry partners may enter collaborations with different goals, timelines, incentives, and definitions of success, creating friction once work begins.",
      },
      {
        label: "02",
        title: "Unclear Roles and Responsibilities",
        body: "Projects can stall when decision rights, ownership of deliverables, and partner responsibilities are not clearly defined at the outset.",
      },
      {
        label: "03",
        title: "Communication Gaps Across Institutions",
        body: "Different operating norms, reporting expectations, and communication styles can make it difficult to keep partners aligned and informed.",
      },
      {
        label: "04",
        title: "Difficulty Translating Research Into Execution",
        body: "Promising scientific ideas may lack the project structure, milestones, and operational planning needed to move from concept to implementation.",
      },
      {
        label: "05",
        title: "Delayed Decisions and Administrative Complexity",
        body: "Contracting, approvals, governance processes, and institutional requirements can slow progress without structured coordination and proactive follow-through.",
      },
    ],
    showContact: true,
  },

  "interim-program-leadership": {
    slug: "interim-program-leadership",
    title: "Interim Program Leadership During Transitions",
    metaTitle: "Interim Program Leadership During Transitions",
    metaDescription:
      "Interim program leadership that maintains momentum, stabilizes teams, and ensures continuity during leadership gaps, organizational change, or periods of transition.",
    intro: [
      "Verisans Consulting provides interim program leadership to maintain momentum, stabilize teams, and ensure continuity during leadership gaps, organizational change, or periods of transition.",
      "Below are five common challenges encountered during leadership transitions that Verisans Consulting helps address.",
    ],
    cards: [
      {
        label: "01",
        title: "Loss of Direction During Leadership Gaps",
        body: "Programs can lose focus and momentum when leadership roles are vacant, resulting in stalled decisions, unclear priorities, and reduced accountability.",
      },
      {
        label: "02",
        title: "Disruption to Ongoing Workstreams",
        body: "Transitions can interrupt critical activities, causing delays and misalignment across teams without strong interim coordination.",
      },
      {
        label: "03",
        title: "Unclear Ownership and Decision Authority",
        body: "Teams may struggle with ambiguity around who is responsible for decisions, approvals, and execution during periods of change.",
      },
      {
        label: "04",
        title: "Decreased Team Confidence and Morale",
        body: "Uncertainty during transitions can reduce engagement, slow progress, and create hesitation in decision-making across the organization.",
      },
      {
        label: "05",
        title: "Lack of Continuity and Knowledge Transfer",
        body: "Critical context and institutional knowledge can be lost without structured handover and continuity planning.",
      },
    ],
    showContact: true,
  },
};

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------

export const home = {
  heroTitleLead: "Strategy and execution at the intersection of ",
  heroTitleAccent: "science, technology, and innovation.",
  heroSub:
    "Independent project, program, and strategic support for research-driven organizations — from portfolio governance to AI integration.",
  pillars: [
    {
      title: "Strategy & Projects",
      href: "/strategy-and-projects",
      body: "R&D program coordination, portfolio governance, academic–industry collaboration, and interim program leadership for complex, multi-functional initiatives.",
    },
    {
      title: "Technology & AI",
      href: "/tech-and-ai",
      body: "AI consulting and machine learning advisory — model optimization, evaluation and benchmarking, integration, and AI strategy that turns emerging capability into operational value.",
    },
    {
      title: "Academic",
      href: "/academic",
      body: "Teaching, tutoring, mentoring, curriculum support, and educational advising across scientific, technical, biomedical, and analytical disciplines.",
    },
  ],
  credibility: {
    label: "Experience drawn from",
    items: [
      "Genentech (Roche Group)",
      "Brown University",
      "Providence VA Medical Center",
    ],
  },
};

// ---------------------------------------------------------------------------
// Who We Are
// ---------------------------------------------------------------------------

export const whoWeAre = {
  intro:
    "Verisans Consulting provides independent project management and strategic consulting services to organizations across the technology, life sciences, and education sectors. The firm supports the planning, coordination, and execution of R&D projects, clinical and operational programs, innovation initiatives, process improvement efforts, and AI-enabled transformation. Services are delivered on a self-employed basis to Dutch, American, and international clients — primarily through remote consulting, contract-based engagements, and teaching.",
  cards: [
    {
      label: "Profile",
      title: "Project Management & Strategy Experience",
      body: "Verisans Consulting is led by Vé Léandre, Ph.D., whose experience spans project management, portfolio strategy, scientific innovation, and cross-functional coordination. At Genentech (Roche Group), she was embedded in teams spanning the full product life cycle — from research and development to product development and commercial strategy — navigating and leading complex, multi-million-dollar projects and initiatives. At Brown University and the Providence VA Medical Center, she managed international and academic–industry collaborations and gained exposure to the legal and operational aspects of the patenting process through work with the technology ventures office. This combined experience supports a deep understanding of the coordination, governance, and strategic challenges organizations face across both industry and academic environments.",
    },
    {
      label: "Perspective",
      title: "AI, Innovation & Human-Centered Technology",
      body: "Verisans Consulting approaches AI as a powerful tool for innovation, discovery, communication, and organizational transformation. Paired with human-centered design, originality, and responsible implementation, AI can help organizations improve how they analyze information, solve problems, and create value. Vé's experience includes planning tech workshops and conferences, organizing thought leaders in the San Francisco innovation community, contributing to work at the intersection of accessibility and breakthrough technology, and supporting international AI firms through rubric design, model evaluation, and assessment of generative AI performance on complex STEM, imaging, and reasoning tasks.",
    },
    {
      label: "Education",
      title: "Teaching, Tutoring & Mentorship",
      body: "Education has been central to Vé's work from a young age, continuing through undergraduate study, graduate school, and professional scientific training. Verisans Consulting offers teaching, tutoring, and mentoring support for advanced learners in scientific, technical, biomedical, and analytical disciplines. Areas of teaching expertise include biomedical engineering, polymer science, tissue engineering and biomimicry, drug delivery and bioabsorption, research methods, scientific communication, and statistical analysis.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Strategy & Projects overview
// ---------------------------------------------------------------------------

export const strategyOverview = {
  intro: [
    "Verisans Consulting provides project, program, and strategic support to organizations operating at the intersection of science, technology, and innovation.",
    "Strategy & Projects engagements span four focused practice areas — from cross-functional R&D program management to interim leadership during transitions.",
  ],
  cards: [
    {
      label: "R&D Program Coordination",
      title: "Cross-functional R&D Program Coordination",
      body: "Align priorities, clarify ownership, and manage complex dependencies across scientific, clinical, regulatory, and commercial workstreams.",
      href: "/strategy-and-projects/rd-program-coordination",
    },
    {
      label: "Portfolio Governance",
      title: "Portfolio Governance & Milestone Planning",
      body: "Establish structured governance, clear milestone frameworks, and decision gates that align execution with strategy and enable effective portfolio oversight.",
      href: "/strategy-and-projects/portfolio-governance",
    },
    {
      label: "Academic–Industry Collaboration",
      title: "Academic–Industry Collaboration Projects",
      body: "Structure and coordinate collaborations so academic and industry partners align expectations, clarify responsibilities, and translate shared goals into executable plans.",
      href: "/strategy-and-projects/academic-industry-collaboration",
    },
    {
      label: "Interim Leadership",
      title: "Interim Program Leadership During Transitions",
      body: "Maintain momentum, stabilize teams, and ensure continuity during leadership gaps, organizational change, or periods of transition.",
      href: "/strategy-and-projects/interim-program-leadership",
    },
  ],
};

export const about = {
  name: "Vé Léandre, Ph.D.",
  role: "Founder, Verisans Consulting",
  lead: "I'm Vé Léandre — a project and strategy consultant who helps research-driven organizations turn complex, high-stakes work into clear plans and steady execution.",
  paragraphs: [
    "My career has moved across the full arc of scientific innovation. At Genentech (Roche Group), I worked embedded in teams spanning the product life cycle — from research and development through product development and commercial strategy — helping lead and coordinate complex, multi-million-dollar programs. At Brown University and the Providence VA Medical Center, I managed international and academic–industry collaborations and worked closely with a technology ventures office on the legal and operational side of the patenting process.",
    "That mix gives me a real feel for the coordination, governance, and strategic challenges organizations face on both sides of the academic–industry line. More recently, I've supported international AI firms on rubric design, model evaluation, and assessing generative AI performance on complex STEM, imaging, and reasoning tasks.",
    "I work independently and pragmatically. Engagements are remote and contract-based, for Dutch, American, and international clients. Whether it's interim program leadership, portfolio governance, or bringing AI into a team's workflow, the focus is the same: clarity, momentum, and decisions that hold up.",
  ],
  highlights: [
    "Ph.D. — scientific research & innovation",
    "Genentech (Roche Group) — full product life cycle",
    "Brown University & Providence VA Medical Center",
    "AI model evaluation & benchmarking",
    "Teaching & mentorship across STEM",
  ],
};
