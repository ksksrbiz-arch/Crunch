/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cookie-brown': '#5C3317',
        'cookie-dark': '#3F2A1E',
        'cookie-cream': '#FDF6E3',
        'cookie-gold': '#D4A017',
      },
    },
  },
  plugins: [],
}