/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionDuration: {
				DEFAULT: '300ms',
			},
			colors: {
				amber: {
					50: 'rgb(250, 247, 244)',
					100: 'rgb(237, 230, 227)',
				},
			},
			animation: {
				customSpin: 'spin infinite 20s linear',
			},
		},
	},
	plugins: [],
	// darkMode: 'class',
};
