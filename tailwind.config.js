/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base1: "rgba(50, 30, 0, 0.8)",
        base2: "rgba(0, 0, 0, 0.5)",
        secondarybase1: "rgba(50, 30, 0, 0.25)",
        secondarybase2: "rgba(0, 0, 0, 0.25)",
        thirdbase1: "rgba(50, 30, 0, 0.1)",
        thirdbase2: "rgba(0, 0, 0, 0.1)",
        hoverbase1: "rgba(50, 30, 0, 0.05)",
        hoverbase2: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
}