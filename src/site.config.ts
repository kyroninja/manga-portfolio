// Everything personal lives here. Edit this file first.
export const site = {
  name: "Pratish Neerputh",
  role: "Husband, Electrical & Business Intelligence Engineer",
  // Shown in the speech bubble on the cover. Keep it short enough to fit an oval.
  tagline: "I turn complex engineering problems into practical solutions.",
  description: "Portfolio of Pratish Neerputh, an electrical and business intelligence engineer, drawn as a manga volume.",
  volume: "01",
  // Vertical text on the cover spine. ポートフォリオ = "portfolio".
  jp: "ポートフォリオ",
  email: "pratz.neerputh@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/kyroninja" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kyroninja" },
    { label: "Portfolio", href: "https://kyro.ninja" },
  ],

  // The character profile page.
  profile: {
    class: "Husband, Electrical & Business Intelligence Engineer",
    base: "Umhlanga, South Africa",
    // 0 to 10. Scaled from the 1-5 self-ratings on the CV (doubled).
    stats: [
      { label: "Python", value: 8 },
      { label: "Linux", value: 10 },
      { label: "SQL", value: 7 },
      { label: "Data engineering", value: 9 },
      { label: "DevOps", value: 8 },
      { label: "Machine learning", value: 6 },
    ],
    moves: [
      { name: "Pipeline forge", text: "Builds ETL/ELT pipelines on SQL Server and Azure so the data is ready before anyone asks." },
      { name: "One-click report", text: "Turned a 20-page monthly report from hours of work into minutes with Excel VBA." },
      { name: "Root-cause strike", text: "Cut weekly OHTE failures from 1.13 to 0.51 with Lean Six Sigma." },
    ],
    // Likes and dislikes aren't on a CV, so these are light-hearted guesses. Edit freely.
    likes: ["Hackathons", "Self-hosting everything", "Retro gaming"],
    dislikes: ["Manual reporting", "Copper thieves", "Untested deploys"],
    quote: "Whether it's a substation or a data warehouse, find the root cause first.",
  },
};
