import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: {
        100: "#ffffff",
      },
      dark: {
        100: "#000000",
      },
      "accent-blue": "#7D6DD8",
      "accent-secondary": "#E0DAFD",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      lalezar: ["var(--font-lalezar)"],
    },
    plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography"),
      require("flowbite/plugin"),
    ],
  },
};
export default config;
