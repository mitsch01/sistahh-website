const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "flowbite.content()",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["AvenirMedium", "sans-serif"],
        spartan: ["LeagueSpartan", "sans-serif"]
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(10deg, #f2bd76  40%, #f2dd04 50%, #fff8b2 60%, #f2bd76 90%)",
        "secondary-gradient": "linear-gradient(10deg,  #F0f0f0 50%, #adadad 55%)"
      }
    }
  },
  plugins: ["flowbite.plugin()"]
}
