/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3748",
        secondary: "#718096",
        accent: "#F6AD55",
      },
    },
  },
  plugins: [],
}

