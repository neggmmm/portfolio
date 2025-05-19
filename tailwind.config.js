/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        beige: "#AEA7A3",
        brown: "#795238",
        charcoal: "#242323",
        dark: "#363636",
        grayish: "#525254",
        lightgray: "#959595",
      },
    },
  },
  plugins: [],
}; 