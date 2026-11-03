// Your backstory: projects, experience, education, certifications, and
// anything else you want to add later.
//
// Each section becomes one page on /backstory, in the order listed here,
// and gets its own button at the top of that page.
//
// To add a new kind of section (awards, talks, languages, volunteering…):
// copy any section below, give it a new `id` and `title`, and fill in entries.
// Sections with no entries are skipped, so it's fine to leave one empty.
//
// Filled in from the CV (April 2026). The two chapters in src/content/chapters
// (the Boughton substation failures and the one-click report generator) are
// listed under Projects automatically, so they aren't repeated here.

export interface Entry {
  /** Role, qualification, certificate or project name. */
  title: string;
  /** Company, school or issuing body. */
  org?: string;
  /** City, or "Remote". */
  where?: string;
  /** Free text, e.g. "2022" or "Mar 2022". */
  start?: string;
  /** Free text, e.g. "2024" or "present". Leave out for a single date. */
  end?: string;
  /** One or two sentences. */
  summary?: string;
  /** Highlights, shown as a short list. */
  points?: string[];
  /** Tools, subjects or skills. */
  tags?: string[];
  link?: { label: string; href: string };
  /** Give this entry a full-width panel (e.g. your current role). */
  feature?: boolean;
}

export interface Section {
  /** Used for the page anchor, e.g. /backstory/#experience. Lowercase, no spaces. */
  id: string;
  title: string;
  /** Optional Japanese label shown above the title. */
  jp?: string;
  /** Projects only: list your chapters here automatically, before the entries below. */
  includeChapters?: boolean;
  entries: Entry[];
}

export const backstory: Section[] = [
  {
    id: "projects",
    title: "Projects",
    jp: "作品", // "works"
    includeChapters: true,
    entries: [
      // Smaller projects that don't need a whole chapter.
      {
        title: "Custom in-car heads-up display and gaming system",
        org: "Mahindra Scorpio",
        start: "Jun 2019",
        summary:
          "A Raspberry Pi and 7-inch LCD HUD fed by the vehicle's OBD-II port, with passenger entertainment that switches between the HUD and retro games.",
        tags: ["Raspberry Pi", "OBD-II", "Embedded"],
      },
      {
        title: "Custom control system for a scale Mini Cooper",
        start: "Sep 2019",
        summary:
          "An Arduino Nano and Xbox controller give an old model car speed control, with acceleration, braking, directional control and a temporary overdrive mode.",
        tags: ["Arduino Nano", "Motor control"],
      },
      {
        title: "App/SMS-controlled e-textile prototype",
        start: "Sep 2022",
        summary:
          "A wearable e-textile system with microcontroller-based control, operated by SMS or a dedicated app.",
        tags: ["Microcontrollers", "IoT", "SMS"],
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    jp: "職歴", // "work history"
    entries: [
      {
        title: "Business Intelligence / Data Engineer",
        org: "Tevo",
        where: "South Africa",
        start: "Jun 2023",
        end: "present",
        summary:
          "Designs, develops and maintains the ETL/ELT pipelines behind enterprise data integration and analytics.",
        points: [
          "Builds data warehouse and backend solutions on Microsoft SQL Server and Azure, including ingestion, transformation and validation.",
          "Tunes SQL views, triggers and stored procedures, and automates workflows and reporting with Python, Pandas and custom applications.",
          "Deploys Flask applications on NGINX with SSL, and builds and troubleshoots Azure virtual machines.",
          "Documents BI, ETL and data engineering processes while keeping to data governance and security standards.",
        ],
        tags: ["Python", "MSSQL", "Flask", "Azure", "SSIS", "NGINX", "Pandas"],
        feature: true,
      },
      {
        title: "Maintenance Manager: Planning",
        org: "Transnet",
        where: "South Africa",
        start: "Apr 2022",
        end: "Jun 2023",
        summary:
          "Set infrastructure maintenance standards and kept depots reliable and compliant, from occupations and work permits to shutdown planning.",
        points: [
          "Oversaw COPEX forecasting and resource allocation in Microsoft Project.",
          "Led technical training, internal audits and PAA audit readiness.",
          "Set, tracked and met depot-level KPIs, and championed Lean Six Sigma projects.",
          "Checked depot MIS data and SAP job cards for accuracy.",
        ],
        tags: ["SAP PM", "Lean Six Sigma", "Forecasting", "Logistics"],
      },
      {
        title: "Electrical Engineer",
        org: "Transnet",
        where: "South Africa",
        start: "May 2020",
        end: "Mar 2022",
        summary:
          "Managed substation reliability, electrical assets and safety compliance, and planned and ran infrastructure maintenance projects.",
        points: [
          "Automated SAP maintenance scheduling with VBA macros.",
          "Supervised Lean Six Sigma White Belt projects.",
          "Controlled OPEX and COPEX budgets with monthly and annual forecasts.",
          "Led the Electrical Technical Forum and managed asset lifecycle and replacement plans.",
        ],
        tags: ["Electrical engineering", "Lean Six Sigma", "SAP", "VBA"],
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering projects",
    jp: "工学", // "engineering"
    entries: [
      {
        title: "Reduction of OHTE failures",
        org: "Ladysmith Depot",
        start: "Oct 2019",
        end: "Jan 2020",
        summary:
          "A Lean Six Sigma project on overhead track equipment reliability between Estcourt and Rushbrook.",
        points: ["Cut average weekly OHTE failures from 1.13 to 0.51 through data-driven analysis and process improvement."],
        tags: ["Lean Six Sigma", "Data analysis"],
      },
      {
        title: "Replacement of copper catenary",
        org: "Glencoe to Uithoek",
        start: "May 2019",
        summary:
          "Replaced 6 km of copper catenary wire with aluminium to deter theft and improve network reliability, tracking the 1.5 km/day target daily.",
        tags: ["Project management", "COPEX"],
      },
      {
        title: "Replacement of contact wire",
        org: "Cedara Tunnel",
        start: "May 2019",
        summary:
          "As Technical Officer, replaced 7 km of contact wire to remove excessive splices and reduce OHTE hookup risk, managing procurement, delivery and on-site resourcing.",
        tags: ["Logistics", "OHTE"],
      },
      {
        title: "Replacement of steel earth wire",
        org: "Dundee to Tayside",
        start: "Jan 2021",
        summary:
          "Managed replacing 20 km of rust-prone steel earth wire with aluminium to prevent OHTE obstructions, and re-planned the schedule to recover deviations and hit milestones.",
        tags: ["Project execution", "OHTE"],
      },
      {
        title: "Investigation of substation tripping due to lightning",
        org: "Ladysmith Depot",
        start: "Aug 2021",
        summary:
          "Led a root-cause investigation into recurring substation trips across five financial years, analysing historical data and inspecting earthing systems.",
        points: [
          "Identified incorrect arrestor grounding as the cause.",
          "Implemented earthing redesigns that significantly reduced lightning-related trips.",
        ],
        tags: ["Root-cause analysis", "Earthing", "Data analysis"],
      },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    jp: "ハッカソン",
    entries: [
      {
        title: "EmpowerHer AI Hackathon: GBV reporting chatbot",
        start: "2023",
        summary:
          "Placed 3rd with a WhatsApp chatbot for confidentially reporting workplace GBV incidents, using NLP to guide users and protect sensitive data.",
        tags: ["NLP", "Chatbot"],
      },
      {
        title: "BCX Cloud Hackathon",
        start: "2023",
        summary:
          "Deployed a contextually trained LLM on Alibaba Cloud to answer user queries from document inputs.",
        tags: ["LLM", "Alibaba Cloud"],
      },
      {
        title: "Global Entrepreneurship Week: emergency IoT device",
        start: "2023",
        summary:
          "A wearable that recognises set emergency gestures and alerts emergency contacts through Twilio.",
        tags: ["IoT", "Twilio"],
      },
      {
        title: "Microsoft Responsible AI Hackathon",
        start: "2023",
        summary:
          "A Python/Django web app using NLP and ML to promote diversity, fairness and dataset transparency.",
        tags: ["Python", "Django", "NLP"],
      },
      {
        title: "Freshworks Refresh Apps Challenge",
        start: "2022",
        summary:
          "A tweet-based classifier that profiles customer personality so Freshdesk tickets resolve faster with less human intervention.",
        tags: ["Classification", "Freshdesk"],
      },
      {
        title: "Cortx and Filecoin Integration Challenge",
        start: "2022",
        summary:
          "Integrated the Filecoin and CORTX storage APIs for decentralised, fee-based file storage and retrieval.",
        tags: ["Filecoin", "CORTX"],
      },
      {
        title: "MTN App of the Year: Nifty",
        start: "2022",
        summary:
          "An app that syncs lights to music in real time, combining IoT hardware control with Python automation.",
        tags: ["IoT", "Python"],
      },
      {
        title: "Telkom GEW: Marketing Intelligence Officer",
        start: "2021",
        summary:
          "An AI chatbot that gives companies personalised product recommendations and runs specialised functions on user commands.",
        tags: ["Chatbot", "AI"],
      },
      {
        title: "PyTorch Annual Hackathon: mental health analysis tool",
        start: "2021",
        summary:
          "A Python app that scrapes Twitter data to analyse mental health discussions and generates automated reports, with PyTorch NLP for sentiment and topic analysis.",
        tags: ["PyTorch", "NLP"],
      },
      {
        title: "Seagate CORTX Integration Challenge",
        start: "2021",
        summary:
          "Integrated CORTX S3 storage with Restic backup software for scalable storage and retrieval of system and data backups.",
        tags: ["CORTX", "Restic", "S3"],
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    jp: "学歴", // "education"
    entries: [
      {
        title: "Bachelor of Science in Engineering: Electrical Engineering",
        org: "University of KwaZulu-Natal",
        start: "2012",
        end: "2017",
      },
      {
        title: "Postgraduate Diploma in Data Science",
        org: "University of KwaZulu-Natal",
        start: "2023",
        end: "2025",
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    jp: "技能", // "skills"
    entries: [
      {
        title: "Electrical engineering",
        summary:
          "Power systems, industrial automation, control systems, circuit design, instrumentation and electrical maintenance.",
      },
      {
        title: "Data engineering",
        summary:
          "Database design and optimisation, ETL/ELT data pipelines, data warehousing, SQL, Python automation and big data workflows.",
      },
      {
        title: "Programming & AI",
        summary:
          "Python, Flask, Django, Pandas, PyTorch, machine learning, natural language processing and chatbot development.",
      },
      {
        title: "IoT systems",
        summary:
          "Embedded and sensor-based systems, edge computing, MQTT, Twilio and real-time data integration.",
      },
      {
        title: "Cloud & DevOps",
        summary:
          "Docker, Linux administration, CI/CD, virtualisation (KVM/Libvirt), and deployment on Alibaba Cloud, Azure and AWS.",
      },
      {
        title: "Documentation & communication",
        summary:
          "Technical writing, project documentation, and presenting complex systems clearly to multidisciplinary teams.",
      },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    jp: "言語", // "languages"
    entries: [
      { title: "English", summary: "Native / bilingual." },
      { title: "Afrikaans", summary: "Professional proficiency." },
    ],
  },
  {
    // The CV doesn't list any certifications. Add them here and the section appears.
    id: "certifications",
    title: "Certifications",
    jp: "資格", // "qualifications"
    entries: [],
  },

  // Example of a section you might add later. Remove the // to use it.
  // {
  //   id: "talks",
  //   title: "Talks",
  //   jp: "講演",
  //   entries: [
  //     { title: "Talk title", org: "Event name", start: "2026", link: { label: "Slides", href: "https://example.com" } },
  //   ],
  // },
];
