/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Creating a new background image for the home icon
      backgroundImage: {
        'pixel-me': "url('/src/assets/pixel_me.png')",
      },
      fontFamily: {
        // Overwriting the default font
        default: ["'Kanit'"],
        kode: ["Kode Mono"]
      }
    },
  },
  plugins: [],
}

