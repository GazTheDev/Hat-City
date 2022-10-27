import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: netlify(),
    site: 'https://hat-city.co.uk',

    integrations: [sitemap()],

})
