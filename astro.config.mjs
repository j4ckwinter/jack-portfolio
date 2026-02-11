// @ts-check

import path from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(fileURLToPath(new URL(".", import.meta.url)), "src"),
      },
    },
  },

  integrations: [mdx()],
  adapter: vercel(),
});
