/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#6267F1",
        "purple-light": "#8997F3",
        "igem-green": "#56D087",
        "bg-light": "#E2EFF0",
        "text-dark": "#2C3144",
      },

      fontFamily: {
        serif: "Roboto Slab",
        sans: "Noto Sans",
      },
    },
  },
  plugins: [],
};
