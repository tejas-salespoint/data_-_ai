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
        "buffer-bg": "url('./assets/buffer.png')",
        "buffer-bg-2": "url('./assets/home/featured/f-4.png')",
        "custom-linear-gradient":
          "linear-gradient(91.25deg, #092546 -1.83%, #1A43B1 100.61%);",
          "footer" : "linear-gradient(91.25deg, #092546 -1.83%, #1A43B1 100.61%);",
          "power-apps-bg" : "linear-gradient(91.12deg, #652263 0%, #962E8B 100%);",

          // INDUSTRY LANDING
          "Automotive": "url('./assets/Industry images/Automotive.jpg')",
          "Education": "url('./assets/Industry images/Education.jpg')",
          "Energy": "url('./assets/Industry images/Energy.jpg')",
          "Engineering": "url('./assets/Industry images/Engineering & construction.jpg')",
          "Finance": "url('./assets/Industry images/Finance.jpg')",
          "Government": "url('./assets/Industry images/Government.png')",
          "Healthcare": "url('./assets/Industry images/Healthcare.jpg')",
          "Manufacturing": "url('./assets/Industry images/Manufacturing.jpg')",
          "Media": "url('./assets/Industry images/Media.jpg')",
          "Retail": "url('./assets/Industry images/Retail.jpg')",
          "Sustainability": "url('./assets/Industry images/Sustainability.jpg')",
          "Horizontal": "url('./assets/Industry images/Horizantal.png')",
      },

      colors: {
        // Add our custom colors
        blue: "#0078D4",
        "light-blue": "#E0EBFF",
        gray: "#505050",
        sgray: "#413737",
        black: "#2A2B2E",
        'light-gray' : '#F2F2F2',
        

      },
      boxShadow: {
        "custom-shadow": "0px 4px 0px rgba(9, 37, 70, 0.25)",
        "navbar-shadow": "0px 3px 2px rgba(0, 0, 0, 0.22)",
        "main-navbar-shadow": "0px 3px 2px rgba(0, 0, 0, 0.22);",
        "avatar-shadow": "0px 4px 15px rgba(0, 0, 0, 0.2);",
        "company-shadow" : "0px 4px 10px rgba(0, 0, 0, 0.25);"
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
