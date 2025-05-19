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
        taupe: '#958595',
        graphite: '#525254',
        dark: '#363636',
        ebony: '#242323',
        bronze: '#795298',
      },
    },
  },
  plugins: [],
}; 