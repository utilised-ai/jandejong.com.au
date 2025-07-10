import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.jandejong.com.au',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
});