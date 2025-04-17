/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Berlin", "sans-serif"],
			},
			colors: {
				"berlin-blue-900": "#132458",
				"berlin-blue-500": "#2A0E8C",
				"berlin-blue-400": "#BDCDE7",
				"berlin-blue-300": "#D6DCED",
				"berlin-blue-200": "#E4EFFF",

				"berlin-gray-200": "#CCC",
				"berlin-gray-100": "#F5F5F5",

				"berlin-red": "#FF4F4F",
				"berlin-orange": "#F5A00C",
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
