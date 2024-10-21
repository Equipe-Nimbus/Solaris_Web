import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF2D4",
          "100-10%": "hsla(42, 100%, 92%, 0.1)",
          200: "#FFE2A8",
          300: "#FFCB70",
          400: "#FFA937",
          500: "#FF8A05",
          600: "#F07306",
          700: "#C75607",
          800: "#9E440E",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          '300-40%': "hsla(0, 0%, 83%, 0.4)",
          400: "#A3A3A3",
          500: "#737373",
          600: "#404040",
          700: "#0F1011",
          800: "#08090A",
        },
        accent: "#F03906",
        success: "#22C55E",
        error: "#DC2626",
        warning: "#FFCE52",
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "small": "14px",
        "base": "16px",
        "large": "18px",
        "heading4": "30px",
        "heading3": "40px",
        "heading2": "50px",
        "heading1": "60px",
        "button": "14px",
        "mheadging4": "24px",
        "mheading3": "28px",
        "mheading2": "30px",
        "mheading1": "40px",
      }
    },
  },
  plugins: [],
};
export default config;
