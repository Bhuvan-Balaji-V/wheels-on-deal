import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          deep: "#0A0A0A",
          rich: "#111111",
          soft: "#1A1A1A",
          card: "#161616",
        },
        gold: {
          primary: "#C9A84C",
          light: "#E2C97E",
          dark: "#8B6914",
          pale: "#F5E6C0",
        },
        warm: {
          white: "#F5F5F0",
          gray: "#888880",
          muted: "#444440",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
        "gold-pulse": "goldPulse 2s ease-in-out infinite",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        goldPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 168, 76, 0.6)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #8B6914 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.8) 60%, rgba(10,10,10,1) 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
