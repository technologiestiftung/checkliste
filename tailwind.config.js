/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Berlin", "sans-serif"],
			},
			colors: {
				"berlin-medium-blue": "#4f90cd",
				"berlin-black-10": "#e6e6e6",
				"berlin-black-40": "#999999",
				"berlin-red": "#E4001F",
				"berlin-gray": "#DDDDDDFF",
				"berlin-light-gray": "#EDEDEDFF",
				"berlin-lighter-gray": "#F5F5F5FF",

				"berlin-blue-900": "#132458",
				"berlin-blue-500": "#2A0E8C",
				"berlin-gray-200": "#CCC",

				"berlin-green": "#67B18D",
			},
			keyframes: {
				slideUp: {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
			animation: {
				"slide-up": "slideUp 0.5s ease-out",
			},
			screens: {
				desktop: "1181px",
			},
		},
	},
};
