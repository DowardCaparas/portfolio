/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
         primary_black: '#18122B',
         primary_gray: '#EEEEEF',
         primary_purple: '#714BB2',
         secondary_purple: '#8B5CF6',
         primary_blue: '#5B8FB9',
         primary_yellow: '#F9CC15',
         secondary_yellow: '#F9AF15',
      },
    },
  },
  plugins: [],
}

