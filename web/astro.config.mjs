import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  site: 'https://roguelikedb.com',
  vite: {
    define: {
      __VITE_TITLE__: JSON.stringify('Roguelike Database')
    }
  }
});