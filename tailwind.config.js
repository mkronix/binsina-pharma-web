/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#3194a1",
        brightColor: "#3194a1",
        backgroundColor: "#75d1e7",
        bgHead: "#fff",
      },
    },
  },
  plugins: [],
};
