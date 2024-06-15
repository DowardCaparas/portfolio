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
         primary_black: '#19181F',
         secondary_black: '#2B2A33',
         primary_gray: '#EEEEEF',
         secondary_gray: '#D7D7DB',
         light_gray: '#B6B5BA',
         paragraph: '#5D5D61',
         darked_gray: '#48484D',
         primary_purple: '#714BB2',
         secondary_purple: '#8B5CF6',
      },
    },
  },
  plugins: [],
}

