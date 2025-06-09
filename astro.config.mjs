// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
   
    integrations: [react()],
    vite: {
        plugins: [
            tailwind()
        ],
        server: {
            allowedHosts: [
                'https://phillips-shut-promotes-merely.trycloudflare.com',
                'phillips-shut-promotes-merely.trycloudflare.com'
                
            ],
        }
    },
});
