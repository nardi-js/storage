import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			brand: {
  				'100': '#EA6365',
  				DEFAULT: '#FA7275'
  			},
  			red: '#FF7474',
  			green: '#3DD9B',
  			orange: '#F9AB872',
  			pink: '#EEA8FD',
  			blue: '#56B8FF',
  			error: '#B80000',
  			light: {
  				'100': '#333F4E',
  				'200': '#A3B2C7',
  				'300': '#F2F5F9',
  				'400': '#F2F4F8'
  			},
  			dark: {
  				'100': '#04050C',
  				'200': '#131524'
  			}
  		},
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)'
  			]
  		},
  		boxShadow: {
  			'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.10)',
  			'drop-2': '0px 8px 30px 0px rgba(65, 89, 214, 0.30)',
  			'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'caret-blink': 'caret-blink 1.25s ease-out infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;
