const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/flowbite-react/**/*.js", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["AvenirMedium", "sans-serif"],
        spartan: ["LeagueSpartan", "sans-serif"]
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(10deg, #fff8b2  45%, #fff8f8 50%, #fff8b2 70%, #fff8f8 70%)",
        "nav-gradient-left": "linear-gradient(10deg, #f2bd76  15%, #fff 50%, #fff8b2 70%, #fff 80%)",
        "nav-gradient-right": "linear-gradient(10deg, #fff  20%, #fff8b2 30%, #fff 50%, #f2bd76 75%)",
        "button-gradient": "linear-gradient(10deg, #f2bd76  60%, #fff8b2 85%)",
        "button-gradient-hover": "linear-gradient(10deg,  #fff8b2 30%,  #f2bd76 75%)",
        "custom-pattern": "url('/images/background.jpg')"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
}
