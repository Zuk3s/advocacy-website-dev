import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
//import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinwords: {
          "0%": {
            transform: "translateY(0%)",
          },
          "12.5%": {
            transform: "translateY(-100%)",
          },
          "25%": {
            transform: "translateY(-200%)",
          },
          "37.5%": {
            transform: "translateY(-300%)",
          },
          "50%": {
            transform: "translateY(-400%)",
          },
          "62.5%": {
            transform: "translateY(-500%)",
          },
          "75%": {
            transform: "translateY(-600%)",
          },
          "87.5%": {
            transform: "translateY(-700%)",
          },
          "100%": {
            transform: "translateY(-800%)",
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
