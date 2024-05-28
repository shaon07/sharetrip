/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#EBF0F5',
        'gray-light-100':'#E8F3FF',
        'primary': '#1882FF',
        'secondary-orange': '#FFE1C2',
        'primary-orange':'#F27D00',
        'dark': '#1A2B3D',
        'dark-100':'#3E4957'
      }
    },
  },
  plugins: [],
}