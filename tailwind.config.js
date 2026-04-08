/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors inspired by Eco-Cyber theme
        brand: {
          navy: {
            50: "#E6EEF9",
            100: "#C2D3ED",
            200: "#8EA9D6",
            300: "#5A7FBF",
            400: "#2E5AA3",
            500: "#0B3A80",
            600: "#082C62",
            700: "#061F47",
            800: "#04152F",
            900: "#020A18",
            950: "#01050C",
          },
          cyan: {
            50: "#E5FBFF",
            100: "#B3F2FF",
            200: "#80E9FF",
            300: "#4DE0FF",
            400: "#1AD7FF",
            500: "#00C2EB",
            600: "#00A3C7",
            700: "#007D99",
            800: "#00576B",
            900: "#00313D",
          },
          eco: {
            50: "#E6FAF1",
            100: "#BDF1D7",
            200: "#8FE7BB",
            300: "#5BDC9B",
            400: "#2AD27E",
            500: "#10B981",
            600: "#0D9668",
            700: "#0A744F",
            800: "#065238",
            900: "#033020",
          },
          gold: {
            400: "#FFD166",
            500: "#F4C23F",
            600: "#D4A017",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(0, 194, 235, 0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(16, 185, 129, 0.2), transparent 55%)",
        "circuit-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C2EB' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "grid-pattern":
          "linear-gradient(rgba(0, 194, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 194, 235, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 194, 235, 0.35)",
        "glow-eco": "0 0 40px rgba(16, 185, 129, 0.35)",
        premium:
          "0 25px 50px -12px rgba(0, 194, 235, 0.25), 0 0 0 1px rgba(0, 194, 235, 0.1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 194, 235, 0.4)" },
          "50%": { boxShadow: "0 0 50px rgba(0, 194, 235, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
