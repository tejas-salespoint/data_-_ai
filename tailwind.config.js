/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-banner": "url('./assets/header.png')",
        "custom-linear-gradient":
          "linear-gradient(91.25deg, #092546 -1.83%, #1A43B1 100.61%);",
      },

      colors: {
        // Add our custom colors
        blue: "#0078D4",
        "light-blue": "#E0EBFF",
        gray: "#505050",
        black: "#2A2B2E",
      },
      boxShadow: {
        "custom-shadow": "0px 4px 0px rgba(9, 37, 70, 0.25)",
        "navbar-shadow": "0px 3px 2px rgba(0, 0, 0, 0.22)",
        "main-navbar-shadow": "0px 3px 2px rgba(0, 0, 0, 0.22);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
