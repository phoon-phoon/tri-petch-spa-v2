/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': { min: '0px', max: '767px' },
        'mts': { min: '330px', max: '767px' },
        'md': { min: '768px', max: '1399px' },
        'lg': '1400px',
        'xl': '1820px',
      },
    },
  },
  plugins: [],
}
