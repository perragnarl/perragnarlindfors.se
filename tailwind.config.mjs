/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Fira Mono", "monospace"],
		},
		extend: {
			colors: {
				background: "#141212",
				color: "#fffce1",
				primary: "#ffb84f",
				secondary: {
					100: "#E2E2D5",
					200: "#888883",
				},
			},
		},
	},
	plugins: [],
};
