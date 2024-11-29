/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#088B8C",
        brightColor: "#088B8C",
        backgroundColor: "#8cdcff",
        bgHead: "#fff",
      },
    },
  },
  plugins: [],
};
