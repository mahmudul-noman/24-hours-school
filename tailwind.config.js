/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#092bea",

          "secondary": "#18a540",

          "accent": "#b1f484",

          "neutral": "#2D2037",

          "base-100": "#F0EFF0",

          "info": "#12B6ED",

          "success": "#64D8BD",

          "warning": "#B29506",

          "error": "#F04F47",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

