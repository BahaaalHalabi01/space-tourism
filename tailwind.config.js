import * as theme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
        '9xl':'10.875rem',
				'8xl': '9.375rem',
				'7xl': '6.25rem',
				'6xl': '3.5rem',
				'4xl': '2rem',
				'3xl': '1.75rem'
			},
			colors: {
				'border-light': 'hsl(var(--border-light))',
				border: 'hsl(var(--border-main))',
				'text-light': 'hsl(var(--blue-light))',
				'blueish-black': 'hsl(var(--blueish-black))'
			},
			letterSpacing: {
				wide: '.146rem',
				widest: '.3rem'
			},
			fontFamily: {
				'sans-condensed': ['"Barlow Condensed"', ...theme.fontFamily.sans],
				sans: ['"Barlow"', ...theme.fontFamily.sans],
				serif: ['Bellefair', ...theme.fontFamily.serif]
			},
			backgroundImage: {
				home: "url('/home/background.jpg')",
				'home-mobile': "url('/home/background-mobile.jpg')",
				'home-tablet': "url('/home/background-tablet.jpg')",
				'destination-mobile': "url('/destination/background-mobile.jpg')",
				'destination-tablet': "url('/destination/background-tablet.jpg')",
				destination: "url('/destination/background.jpg')",
				crew: "url('/crew/background.jpg')",
				'crew-tablet': "url('/crew/background-tablet.jpg')",
				'crew-mobile': "url('/crew/background-mobile.jpg')",
				technology: "url('/technology/background.jpg')",
				'technology-mobile': "url('/technology/background-mobile.jpg')"
			},
			backdropBlur: {
				'4xl': '81.55px'
			},
			ringWidth: {
				wide: '37.5px'
			}
		}
	},
	plugins: []
};
