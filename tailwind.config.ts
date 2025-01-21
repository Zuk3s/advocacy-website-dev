import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
//import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinwords: {
          "0%": {
            transform: "translateY(90%)",
          },
          "10%": {
            transform: "translateY(-8%)",
          },
          "35%": {
            transform: "translateY(0%)",
          },
          "45%": {
            transform: "translateY(-109%)",
          },
          "65%": {
            transform: "translateY(-100%)",
          },
          "75%": {
            transform: "translateY(-210%)",
          },
          "95%": {
            transform: "translateY(-200%)",
          },
          "100%": {
            transform: "translateY(-280%)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
