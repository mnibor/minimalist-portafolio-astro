/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', 'system-ui', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			fontSize: {
				xs: '.75rem',
				sm: '.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
			},
		},
	},
	plugins: [],
}
