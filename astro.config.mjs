import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
	base: '/minimalist-portafolio-astro/',
	integrations: [tailwind()],
})
