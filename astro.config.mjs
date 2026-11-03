// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Set this to your real domain before deploying (used for canonical URLs).
  // site: "https://kyro.ninja",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
