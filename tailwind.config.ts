import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        chemflash: {
          primary: "#0f9fd0",
          "primary-content": "#ffffff",
          secondary: "#fbbf24",
          "secondary-content": "#1f2937",
          accent: "#818cf8",
          "accent-content": "#0f172a",
          neutral: "#111827",
          "neutral-content": "#f3f4f6",
          "base-100": "#ffffff",
          "base-200": "#f4f7fb",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
        },
      },
      "dark",
    ],
  },
};

export default config;
