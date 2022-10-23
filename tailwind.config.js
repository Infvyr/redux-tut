/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.no-scrollbar': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		}),
	],
	// darkMode: 'class',
};
