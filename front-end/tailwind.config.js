/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-custom': '#fc5454',
        'sky-custom': '#2f80ed'
      },
      fontFamily:{
        'noto sans': ['noto sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

