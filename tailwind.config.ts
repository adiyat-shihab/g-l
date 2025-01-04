import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 0.5s infinite',
        movingLines: 'movingLines 1s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        flicker: {
          '0%, 100%': { filter: 'brightness(100%)' },
          '10%': { filter: 'brightness(80%)' },
          '20%': { filter: 'brightness(120%)' },
          '30%': { filter: 'brightness(90%)' },
          '40%': { filter: 'brightness(110%)' },
          '50%': { filter: 'brightness(100%)' },
          '60%': { filter: 'brightness(85%)' },
          '70%': { filter: 'brightness(95%)' },
          '80%': { filter: 'brightness(105%)' },
          '90%': { filter: 'brightness(115%)' },
        },
        movingLines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 5px' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
