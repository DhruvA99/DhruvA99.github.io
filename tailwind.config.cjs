/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'neon-green': "#2DD4BF",
			}
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	}
}
