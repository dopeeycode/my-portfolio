/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerXs: "768px"
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px", 
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
        fontCode: ["Fira Code", "Montserrat", "sans-serif"]
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -8px rgba(0,0,0,0.4)",
      },
      colors: {
        bodyColor: "#111424",
        textPurple: "#8257E5",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(82,56,218,0.1)"
      },
    },
  },
  plugins: [],
}
