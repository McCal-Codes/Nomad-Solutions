import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './docs/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          sand: '#f7f0e6',
          dusk: '#f2d6ae',
          clay: '#e6c49f',
          ember: '#b85c38',
          night: '#1f1a17'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      },
      animation: {
        fade: 'fadeIn 1.2s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
