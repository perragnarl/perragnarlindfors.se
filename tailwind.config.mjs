/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Fira Mono", "monospace"],
		},
		extend: {
			colors: {
				color: "#fffce1",
				primary: "#ffb84f",
				secondary: {
					DEFAULT: "#141212",
					dark: "#0d0b0b",
					light: "#1B1818",
				},
			},
		},
	},
	plugins: [],
};
