import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://luc-tielen.github.io/koerswijziging',
  base: '/koerswijziging',
  vite: {
    plugins: [tailwindcss()],
  },
});
