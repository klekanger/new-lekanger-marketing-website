import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
				serif: ["var(--font-inter-tight)"],
				mono: ["var(--font-roboto-mono)"],
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				shimmer: "shimmer 2s linear infinite",
				flip: "flip 6s infinite steps(2, end)",
				rotate: "rotate 3s linear infinite both",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				flip: {
					to: {
						transform: "rotate(360deg)",
					},
				},
				rotate: {
					to: {
						transform: "rotate(90deg)",
					},
				},
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
			},
			colors: {
				"brand-primary": "#13004e",
				"brand-accent": "#f0a000",
				"brand-secondary": "#48007e",
				"brand-secondary2": "#7f00b1",
				"brand-copy": "fbf0ff",

				"brand-background": "#11001c",
				"brand-foreground": "#fbfbfb",

				"brand-success": "#004e00",
				"brand-warning": "#4e4e00",
				"brand-error": "#4e0000",

				"brand-success-content": "#fbfbfb",
				"brand-warning-content": "#fbfbfb",
				"brand-error-content": "#fbfbfb",
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("tailwindcss-animate"),
		nextui({
			layout: {
				fontSize: {
					tiny: "0.75rem", // text-tiny
					small: "0.875rem", // text-small
					medium: "1rem", // text-medium
					large: "1.125rem", // text-large
				},
				lineHeight: {
					tiny: "1rem", // text-tiny
					small: "1.25rem", // text-small
					medium: "1.5rem", // text-medium
					large: "1.75rem", // text-large
				},
			},

			// Customize NextUI theme: https://nextui.org/docs/customization/colors
			themes: {
				light: {
					colors: {
						background: "#11001c",
						foreground: "#d1d1d1",

						default: {
							foreground: "#232929",
							DEFAULT: "#71717a",
							50: "#e3f9f9",
							100: "#c9e5e4",
							200: "#abd2d0",
							300: "#8cc0be",
							400: "#6daeab",
							500: "#539492",
							600: "#3f7371",
							700: "#2b5251",
							800: "#153232",
							900: "#001313",
						},
						primary: {
							DEFAULT: "#13004e",
							"50": "#f1f1ff",
							"100": "#e8e5ff",
							"200": "#d3ceff",
							"300": "#b2a7ff",
							"400": "#8e76ff",
							"500": "#6b3fff",
							"600": "#5a18ff",
							"700": "#4b07fa",
							"800": "#3f05d2",
							"900": "#3506ac",
							"950": "#13004e",
						},
						secondary: {
							DEFAULT: "#f0a000",
							"50": "#fffdea",
							"100": "#fff6c5",
							"200": "#ffee85",
							"300": "#ffde46",
							"400": "#ffcc1b",
							"500": "#f0a000",
							"600": "#e28100",
							"700": "#bb5902",
							"800": "#984508",
							"900": "#7c380b",
							"950": "#481c00",
						},
						success: {
							DEFAULT: "#559454",
							foreground: "#232929",
							50: "#ebf7eb",
							100: "#cde4cd",
							200: "#aed1ae",
							300: "#8ebf8e",
							400: "#6ead6d",
							500: "#559454",
							600: "#427341",
							700: "#2f532f",
							800: "#1b321b",
							900: "#051205",
						},
						warning: {
							DEFAULT: "#959556",
							foreground: "#232929",
							50: "#f6f6e9",
							100: "#e4e4cd",
							200: "#d2d2af",
							300: "#c0c08f",
							400: "#aeae6f",
							500: "#959556",
							600: "#747443",
							700: "#53532f",
							800: "#32321b",
							900: "#111102",
						},
						danger: {
							DEFAULT: "#915353",
							foreground: "#232929",
							50: "#fcecec",
							100: "#e4cdcd",
							200: "#cfadad",
							300: "#bc8c8c",
							400: "#aa6c6c",
							500: "#915353",
							600: "#714140",
							700: "#512e2e",
							800: "#321b1b",
							900: "#160707",
						},
					},
				},
			},
		}),
	],
};

export default config;
