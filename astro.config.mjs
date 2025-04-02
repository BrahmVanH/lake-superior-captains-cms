// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

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

	integrations: [react()],
});
