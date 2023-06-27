/* eslint-disable global-require */

/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
