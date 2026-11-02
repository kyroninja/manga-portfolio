# Manga portfolio

A portfolio drawn as a manga volume: a cover, a contents page, one chapter per project, a character profile, a backstory (your CV) and an afterword. Built with Astro 7, Tailwind CSS v4 and MDX. No client-side framework; the only JavaScript is Astro's page-turn router.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build locally
```

Requires Node 22.22 or newer.

## Make it yours

1. Edit `src/site.config.ts`: name, role, tagline, email, links, and everything on the profile page (stats, special moves, likes, dislikes, quote).
2. Edit `src/data/backstory.ts`: your projects, experience, education and certifications (see "Backstory" below).
3. Replace the two sample chapters in `src/content/chapters/`. They're placeholder stories showing what each component does.
4. Swap the silhouette on the cover and profile for your own art when you have it (see "Artwork" below).

## Backstory: projects, experience, education, certifications

The `/backstory` page is your CV, told as a manga flashback (black gutters between the panels). Everything on it comes from `src/data/backstory.ts`, so you never need to touch the page itself.

The file is a list of sections. Each section becomes one page, in the order you list them, with a button at the top of the backstory page to jump to it. Each entry in a section becomes a panel:

```ts
{
  title: "Data & BI developer",     // role, qualification, certificate or project
  org: "Company name",              // company, school or issuer
  where: "Remote",                  // optional
  start: "2022",                    // free text: "2022", "Mar 2022"…
  end: "present",                   // leave out for a single date
  summary: "One or two sentences.",
  points: ["A highlight.", "Another one."],
  tags: ["SQL Server", "Python"],
  link: { label: "Verify", href: "https://…" },
  feature: true,                    // full-width panel, e.g. your current role
}
```

Everything except `title` is optional. Entries are paired side by side with slanted gutters; featured entries and any odd one out get a full-width panel.

**Projects** have `includeChapters: true`, so every chapter is listed automatically (linking to it), followed by any smaller projects you add as entries. You never list a chapter twice.

**Adding a new kind of section later** (awards, talks, languages, volunteering…): copy any section, give it a new `id` (lowercase, no spaces, used in the link `/backstory/#talks`) and `title`, and add entries. There's a commented-out "Talks" example at the bottom of the file. Sections with no entries are hidden, so you can keep an empty one ready.

## Writing a chapter

Each project is one `.mdx` file in `src/content/chapters/`. The file name becomes the URL (`02-the-spreadsheet-kingdom.mdx` → `/chapters/02-the-spreadsheet-kingdom/`).

```mdx
---
chapter: 3
title: "The dashboard nobody opened"
jp: "誰も開かないダッシュボード"   # optional subtitle
summary: "One sentence that appears on the title page and in the contents."
stack: ["Python", "SQL Server"]
year: 2026
draft: false                        # true hides it everywhere
---
import { PageGrid, Panel, Bubble, ShoutBubble, Caption, SFX, Doodle } from "../../components";

<PageGrid>
  <Panel class="md:col-span-4 md:row-span-2" bg="tone-fade" align="free">
    <Caption class="absolute left-4 top-4">Narration goes in captions.</Caption>
    <Bubble class="absolute right-4 top-1/3" tail="down-left">Dialogue goes in bubbles!</Bubble>
  </Panel>
  <Panel class="md:col-span-2" bg="focus">
    <ShoutBubble>Big moments shout.</ShoutBubble>
  </Panel>
</PageGrid>
```

The chapter's title page and end page (with a link to the next chapter) are generated for you by `src/layouts/ChapterLayout.astro`. Each `<PageGrid>` is one numbered page.

A structure that reads well: page 1 sets up the problem, page 2 shows how you approached it, page 3 is the payoff in one big panel.

## Components

All of them are exported from `src/components/index.ts`.

**`PageGrid`** is one page of panels: six columns from the `md` breakpoint (768px) up, one vertical strip on phones. `rtl` reads panels right to left like a Japanese volume; `unnumbered` leaves off the page number.

**`Panel`** is a single panel. Size it with Tailwind grid classes (`md:col-span-4 md:row-span-2`).

- `bg`: `paper` (default), `tone`, `tone-fade`, `focus` (focus lines), `speed` (speed lines) or `ink` (black panel, white text).
- `align`: `center` (default) stacks content in the middle; `start` stacks it bottom-left; `free` lets you place children yourself with `absolute` classes.
- `href` turns the whole panel into a link with a pop-out hover.
- `rough` gives it a wobbly, hand-inked border.
- `reveal` slams it in when it scrolls into view. Save it for one moment per chapter.
- `seed` changes the generated focus or speed lines; `focusX` / `focusY` move the focus point (in %).
- Anything in `slot="break"` sits outside the panel's clip, so it can burst through the border: `<SFX slot="break" text="ドン!" class="absolute -top-6 right-6" />`.

**Slanted gutters.** Describe the gutter line with `/` or `\` on *both* panels that share it:

```mdx
<Panel class="md:col-span-3" right="/">…</Panel>
<Panel class="md:col-span-3" left="/">…</Panel>
```

`top` and `bottom` work the same way for gutters between rows (`/` means the line rises to the right). Only slant edges two panels share, and only between panels of the same height (or width, for top/bottom), otherwise the gap won't stay parallel. Slants switch off on phones, where panels stack. Change how far they lean with `--slant` in `global.css`.

**`Bubble`** is a speech bubble. `tail` is where it points (`down-left`, `down-right`, `up-left`, `up-right`, `none`), `variant` is `speech`, `thought` or `whisper`, `size` is `sm`, `md` or `lg`.

**`ShoutBubble`** is a spiky balloon generated from its text, so each one is different but stable between builds. Accepts `href` and `spikes`.

**`Caption`** is a narration box; `variant="ink"` makes it black.

**`SFX`** is sound-effect lettering: `<SFX text="ZWOOSH" size="4rem" tilt={-6} />`. Options: `color` (`spot`, `ink`, `paper`), `vertical` for stacked Japanese SFX, and `label` if the sound carries meaning a screen reader user would otherwise miss (they're hidden from screen readers by default).

**`Doodle`** draws simple ink props (`monitor`, `clock`, `mug`, `chart`, `sheets`) to fill panels until you have real art. **`Silhouette`**, **`Barcode`** and **`StatBar`** are used on the cover and profile.

## Artwork

You have three options, from quickest to best:

- **`MangaPhoto`** applies a grayscale, high-contrast filter and a screentone overlay to any photo in CSS: `<MangaPhoto src="/art/me.jpg" alt="Me at my desk" class="h-full" />`.
- **The halftone script** converts a photo into real screentone dots as an SVG. Put the photo in `public/art/`, then run:

  ```bash
  npm run halftone -- public/art/me.jpg            # writes public/art/me.halftone.svg
  npm run halftone -- public/art/me.jpg out.svg 6  # finer 6px dot grid (default 8)
  ```

  Use the result like any image. Contrasty photos with plain backgrounds work best.
- **Drawn or commissioned art**, ideally black ink on white. Drop it in `public/art/` and use a plain `<img>` inside a panel.

## Design system

Everything visual lives in `src/styles/global.css`.

| Token | Use |
| --- | --- |
| `ink` `#000` | All lines and type. Manga is printed in one ink. |
| `paper` `#fff` | Pages and panels. |
| `newsprint` `#dfded8` | The surface the pages sit on. |
| `spot` `#e60012` | Sound effects and the cover title only. Keep it rare. |
| `blueline` `#38a8e0` | Non-photo blue, the artist's pencil: focus rings, hover underlines, selection. |

Two typefaces: **Dela Gothic One** for titles, sound effects and Japanese, and **Comic Neue** for lettering and body text. Both are SIL Open Font License, loaded through Fontsource.

Utilities you can use anywhere: `tone`, `tone-fine`, `tone-heavy`, `tone-fade`, `ink-outline`, `ink-rough`, `lettering`, `halo` (a paper outline that keeps text readable over busy backgrounds).

**Dark mode** prints the whole book in negative, like a flashback chapter. It's the `prefers-color-scheme: dark` block near the top of `global.css`; delete it to keep the site white-paper only.

**Motion** is limited to the cover's opening slam, the page turn between pages, and panels with `reveal`. All of it is skipped when the visitor has reduced motion turned on. The scroll reveal uses scroll-driven animations and simply doesn't play in browsers without them.

## Accessibility notes

- All bubble, caption and title text is real HTML text, never baked into images, so it's searchable, translatable and readable by screen readers.
- Keep panel order in the file the same as the reading order.
- Decorative pieces (focus lines, silhouettes, SFX, the barcode) are hidden from screen readers.
- Japanese text is marked `lang="ja"` so it's pronounced and rendered correctly.

## Deploying

`npm run build` produces a fully static `dist/` folder that works on Netlify, Vercel, Cloudflare Pages or GitHub Pages. Set `site` in `astro.config.mjs` to your real domain first.

## Project layout

```
src/
  site.config.ts          your details
  content.config.ts       chapter frontmatter schema
  content/chapters/       one .mdx per project
  data/backstory.ts       projects, experience, education, certifications…
  components/             Panel, Bubble, SFX, …
  layouts/                BaseLayout (fonts, page turn), ChapterLayout
  pages/                  cover, contents, profile, backstory, afterword, 404, chapter route
  styles/global.css       tokens, utilities, component styles
scripts/halftone.mjs      photo → halftone SVG
```
