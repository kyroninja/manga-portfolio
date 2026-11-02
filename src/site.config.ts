// Everything personal lives here. Edit this file first.
export const site = {
  name: "Pratish",
  role: "Data & BI developer",
  // Shown in the speech bubble on the cover. Keep it short enough to fit an oval.
  tagline: "I turn messy data into stories you can read at a glance.",
  description: "Portfolio of Pratish, drawn as a manga volume.",
  volume: "01",
  // Vertical text on the cover spine. ポートフォリオ = "portfolio".
  jp: "ポートフォリオ",
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],

  // The character profile page.
  profile: {
    class: "Data & BI developer",
    base: "Wherever the data lives",
    // 0 to 10. Be honest, or don't. It's your manga.
    stats: [
      { label: "SQL", value: 9 },
      { label: "Python", value: 8 },
      { label: "Excel & VBA", value: 9 },
      { label: "Dashboards", value: 8 },
      { label: "Coffee", value: 10 },
    ],
    moves: [
      { name: "Query whisperer", text: "Turns a 40-minute query into a 90-second one." },
      { name: "Spreadsheet exorcism", text: "Frees teams from copy-paste rituals." },
      { name: "Pipeline forge", text: "Builds ETL that runs while everyone sleeps." },
    ],
    likes: ["Clean data", "A green build", "Strong coffee"],
    dislikes: ["Merged cells", "final_v3_REAL.xlsx", "Reports nobody reads"],
    quote: "Every dataset has a story. I just letter the bubbles.",
  },
};
