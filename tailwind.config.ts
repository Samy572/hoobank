import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#00040f',
				secondary: '#00f6ff',
				dimWhite: 'rgba(255, 255, 255, 0.7)',
				dimBlue: 'rgba(9, 151, 124, 0.1)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			backgroundColor: {
				textGradient: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%,#def9fa .89%,#bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%,#5ce1e6 71.54%,#33bbcf 100%'
			}
		},
	},
	plugins: [],
};
export default config;
