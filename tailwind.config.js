/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#161616",
        bone: "#A8A29E",
        yolk: "#FFD600",
        punch: "#FF5252",
        sky: "#4ECDC4",
        lilac: "#C3A6FF",
      },
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #57534E",
        "brutal-lg": "6px 6px 0px 0px #57534E",
        "brutal-hover": "2px 2px 0px 0px #57534E",
        "brutal-accent": "4px 4px 0px 0px #FFD600",
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pop-in": "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
