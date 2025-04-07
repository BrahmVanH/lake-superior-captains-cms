// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	experimental: {
		svg: true,
	},

	env: {
		schema: {
			API_URL_DEV: envField.string({
				context: 'server',
				access: 'public',
			}),
		},
	},
	output: 'server',

	integrations: [react()],
	adapter: netlify(),
});
