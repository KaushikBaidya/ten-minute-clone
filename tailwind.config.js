/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				bangla: ["Noto Sans Bengali", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				advertiseBanner: "url('./public/web_banner.jpg')",
			},
		},
	},
	plugins: [],
};
