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
// Everything below is placeholder text. Replace it with your own.

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
        title: "A smaller side project",
        start: "2025",
        summary: "Projects that don't need a full chapter go here, with a link to the code or a demo.",
        tags: ["Python"],
        link: { label: "View the code", href: "https://github.com/your-handle" },
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    jp: "職歴", // "work history"
    entries: [
      {
        title: "Data & BI developer",
        org: "Your current company",
        start: "2022",
        end: "present",
        summary: "One or two sentences on what you're responsible for and who relies on it.",
        points: [
          "A result you're proud of, with a number if you have one.",
          "Something you built that people use every day.",
          "Something you improved, and by how much.",
        ],
        tags: ["SQL Server", "Python", "Excel & VBA"],
        feature: true,
      },
      {
        title: "Previous role",
        org: "Previous company",
        start: "2019",
        end: "2022",
        summary: "What you did there and what you took away from it.",
        tags: ["SQL", "Reporting"],
      },
      {
        title: "First role",
        org: "First company",
        start: "2017",
        end: "2019",
        summary: "Where it started.",
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    jp: "学歴", // "education"
    entries: [
      {
        title: "Your qualification",
        org: "Your university or college",
        start: "2013",
        end: "2016",
        summary: "Optional: major, thesis, or anything you're proud of.",
      },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    jp: "資格", // "qualifications"
    entries: [
      {
        title: "Certification name",
        org: "Issuing organisation",
        start: "2024",
        link: { label: "Verify", href: "https://example.com" },
      },
      {
        title: "Another certification",
        org: "Issuing organisation",
        start: "2023",
      },
    ],
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
