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
        jersey: ["'Jersey 25'"],
        kode: ["Kode Mono"]
      }
    },
  },
  plugins: [],
}
