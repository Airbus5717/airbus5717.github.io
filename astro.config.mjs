import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://airbus5717.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
