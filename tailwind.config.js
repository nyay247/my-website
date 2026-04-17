/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "#E9FFF2",
        primary: "#98E5B7",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },

      backgroundImage: {
        // "hero-pattern": "url('/HeroBg.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      animation: {
        "spin-slow": "rotate360 6s linear infinite",
        "spin-medium": "spin 1.5s linear infinite",
        "spin-fast": "spin 0.75s linear infinite",
        expand: "expand 2s ease-out forwards",
        expandFull: "expandFull 2s ease-out forwards",
        expandThreeQuarters: "expandThreeQuarters 2s ease-out forwards",
        expandHalf: "expandHalf 2s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        scaleUp: "scaleUp 3s ease-out infinite",
      },
      keyframes: {
        wiggle: {
          to: { transform: "rotate(-380deg)" },
        },
        rotate360: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        expandFull: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        expandThreeQuarters: {
          "0%": { height: "0" },
          "100%": { height: "75%" },
        },
        expandHalf: {
          "0%": { height: "0" },
          "100%": { height: "50%" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
