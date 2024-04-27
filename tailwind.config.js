/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pixel-me': "url('/src/assets/pixel_me.png')",
      }
    },
  },
  plugins: [],
}

