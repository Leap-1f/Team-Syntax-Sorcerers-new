import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      overlay: {
        "background": "linear-gradient(0deg, rgba(0, 217, 148, 1) 0%, rgba(32, 178, 7, 0) 81%)",
        "background-blend-mode": "normal",
      }
    },
  },
  plugins: [],
};
export default config;
