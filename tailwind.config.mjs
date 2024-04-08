/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#81f4c3",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
      jade: {
        50: "#f6ffe4",
        100: "#ebffc5",
        200: "#d6ff92",
        300: "#b9ff53",
        400: "#9cfb20",
        500: "#89fa00",
        600: "#5eb500",
        700: "#478902",
        800: "#3a6c08",
        900: "#335b0c",
        950: "#173300",
      },
    },
    extend: {},
  },
  plugins: [],
};
