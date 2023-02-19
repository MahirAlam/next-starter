/* eslint-disable global-require */

/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        "gray-1000": "#0D0D0D",
        "gray-1001": "#161616",
        "gray-1002": "#212121",
        gray: {
          ...colors.zinc,
          one: "#a5a5a5",
        },
        brand: {
          main: "#fff",
        },
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        grotesk: ["Space Grotesk", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
