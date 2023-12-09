/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'peach-clr': '#E7816B',
      'light-peach-clr': '#FFAD9B',
      'black-clr': '#1D1C1E',
      'dark-gray-clr': '#333136',
      'white-clr': '##DCDCDC',
      'light-gray-clr': '##DFDFDF',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}