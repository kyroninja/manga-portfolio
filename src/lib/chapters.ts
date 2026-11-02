import { getCollection } from "astro:content";

/** All published chapters, in reading order. */
export async function getChapters() {
  const all = await getCollection("chapters", ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.chapter - b.data.chapter);
}

/** "01", "02"… for display. */
export const pad = (n: number) => String(n).padStart(2, "0");

/** Split a title into words, flagging hyphenated ones so they never break at the hyphen. */
export const titleWords = (title: string) =>
  title.split(" ").map((word, i) => ({ word, space: i > 0, keep: word.includes("-") }));
