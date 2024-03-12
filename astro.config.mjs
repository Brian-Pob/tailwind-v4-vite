import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib")
      }
    }
  },
  integrations: [svelte()]
});