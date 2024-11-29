import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  // darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvet: "var(--font-helvet)",
        things: "var(--font-things-to-remember)",
        balltimore: "var(--font-balltimore)",
        suisse: "var(--font-suisse)",
        aeon: "var(--font-aeon)",
        aeonBold: "var(--font-aeon-bold)",
      },
      screens: {
        xs: "325px",
        sm: "480px",
        csm: "540px",
        md: "768px",
        cmd: "890px",
        lg: "976px",
        clg: "1080px",
        cxl: "1200px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          1: "#FFFFFF",
        },
        black: {
          1: "#000000",
          2: "#1D1D1D",
        },
        pink: {
          1: "#F585AD",
          2: "#FFAF95",
        },
        purple: {
          1: "#50428D",
          2: "#B1D0FA",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
