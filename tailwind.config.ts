import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        manrope: ["var(--font-manrope)"],
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#0A2640",
        "brand-green": "#65E4A3",
        gray: {
          500: "#777777",
        },
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
};
export default config;
