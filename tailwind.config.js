/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["AvenirMedium", "sans-serif"],
        spartan: ["LeagueSpartan", "sans-serif"]
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(10deg, #fff8b2  45%, #fff8f8 50%, #fff8b2 70%, #fff8f8 70%)",
        "button-icon-gradient": "linear-gradient(10deg,  #f2bd76 30%, #f2dd04 70%)",
        "custom-pattern": "url('/images/background.avif')"
      }
    }
  },
  plugins: []
}
