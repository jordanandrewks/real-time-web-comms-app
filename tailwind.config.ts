import type { Config } from 'tailwindcss';

const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add your font name here
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
