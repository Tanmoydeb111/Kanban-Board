/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.css",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainBackgroundColor':'#ffffff',
        'columnBackgroundColor':'#ffffff',
        'ip':'#cbe6e0',
        'bd':'#cececc',
        'no':'black',
        'tt':'#9da7ca',
      }
    },
  },
  variants: {},
  plugins: [],
}

