import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        homeButtons:
          "linear-gradient(120deg, rgb(224,158,143), rgb(255,255,255))",
      },
      colors: {
        backgroundGray: "rgb(211,208,203)",
        headerPink: "rgb(224,158,143)",
      },
    },
  },
  plugins: [],
};
export default config;
