/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				'roboto-slap': ['Roboto Slab', 'serif'],
			},
			colors: {
				primary: '#7AD43B',
			},
		},
	},
	plugins: [],
};
