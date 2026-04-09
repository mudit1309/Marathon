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
        // SPORTY MARATHON PALETTE — energy, competition, excitement
        brand: {
          // Asphalt black — the track
          navy: {
            50: "#F5F5F5",
            100: "#E5E5E5",
            200: "#D4D4D4",
            300: "#A3A3A3",
            400: "#737373",
            500: "#525252",
            600: "#2A2A2A",
            700: "#1A1A1A",
            800: "#121212",
            900: "#0A0A0A",
            950: "#050505",
          },
          // Racing red — the energy of competition
          cyan: {
            50: "#FFF1F2",
            100: "#FFE0E2",
            200: "#FFB8BE",
            300: "#FF8892",
            400: "#FF4F5E",
            500: "#E11D2E",
            600: "#C41020",
            700: "#9B0B19",
            800: "#730813",
            900: "#4B050C",
          },
          // Electric yellow — finish line, high-vis
          eco: {
            50: "#FFFEEA",
            100: "#FFFBC2",
            200: "#FFF584",
            300: "#FFEC3D",
            400: "#FFE014",
            500: "#FACC15",
            600: "#D19900",
            700: "#A67A00",
            800: "#7A5A00",
            900: "#4D3900",
          },
          // Fluorescent orange — speed, acceleration
          gold: {
            400: "#FFA052",
            500: "#F97316",
            600: "#EA580C",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(225, 29, 46, 0.28), transparent 60%), radial-gradient(ellipse at bottom, rgba(250, 204, 21, 0.18), transparent 55%)",
        // Diagonal racing stripes instead of circuit
        "track-stripes":
          "repeating-linear-gradient(-45deg, transparent 0 30px, rgba(255, 255, 255, 0.015) 30px 60px)",
        // Speed-line motion pattern
        "speed-lines":
          "repeating-linear-gradient(90deg, transparent 0 40px, rgba(225, 29, 46, 0.06) 40px 42px)",
        // Starting-line checker flag
        "checker":
          "repeating-conic-gradient(#FAFAFA 0% 25%, #0A0A0A 0% 50%) 50% / 30px 30px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(225, 29, 46, 0.45)",
        "glow-eco": "0 0 40px rgba(250, 204, 21, 0.40)",
        "glow-orange": "0 0 40px rgba(249, 115, 22, 0.45)",
        premium:
          "0 25px 50px -12px rgba(225, 29, 46, 0.35), 0 0 0 1px rgba(225, 29, 46, 0.15)",
        athletic:
          "0 20px 60px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        sprint: "sprint 1.2s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(225, 29, 46, 0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(225, 29, 46, 0.95)" },
        },
        sprint: {
          "0%": { opacity: "0", transform: "translateX(-60px) skewX(-10deg)" },
          "100%": { opacity: "1", transform: "translateX(0) skewX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
