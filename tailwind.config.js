/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '2000px',
    },
    extend: {
      spacing:{
        'custom-width':'calc(100vw - (6vw*2))',
        'custom-width-column':'calc((100vw - (6vw*2)) / 3)'
      }
    },
  },
  plugins: [],
}

