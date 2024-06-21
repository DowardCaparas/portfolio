/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
         primary_black: '#161616',
         secondary_black: '#222222',
         primary_purple: '#3D308D',
         secondary_purple: '#4D3ABC',

         primary_gray: '#EEEEEF',
         secondary_gray: '#D7D7DB',
         darked_gray: '#111016',
         moreDarked_gray: '#0D0C12',
         paragraph: '#5D5D61',
         light_gray: '#48484D',
         
      },

      rotate: {
        '45': '10deg',
        '180': '180deg'
      }
      
    },
  },
  plugins: [],
}

