/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cobalt-blue": "#91A8EC",
        "cultured": "#F9F5F2",
        "french-rose": "#E94A8A",
        "maize": "#F7CB46",
        "jungle-green": "#8BC34A",
        "pale-magenta": "#FF91E8",
        "pine-tree": "#282925",
      },
      boxShadow: {
        primary: "3px 3px 0 0 #282925",
      },
    },
  },
  plugins: [],
};
