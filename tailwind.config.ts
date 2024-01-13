import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#003893",

          secondary: "B1343C",

          accent: "#1B1930",

          neutral: "#FFFFFF",

          "base-100": "#F3F7FE",

          info: "#EEC8F4",

          success: "#376E37",

          warning: "#F77500",

          error: "#FF100F",
        },
      },
    ],
  },
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
      },
      colors: {
        "color-active": "#0ADD08",
        "color-not-active": "#003893",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
