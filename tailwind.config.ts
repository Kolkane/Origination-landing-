import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* tokens exacts de MAQUETTE-V7.html */
      colors: {
        fond: "#0A0A0A",
        txt: "#F4F2EF",
        "txt-2": "#B9B6B2",
        "txt-3": "#7A7774",
        line: "rgba(255,255,255,0.12)",
        "line-soft": "rgba(255,255,255,0.06)",
        wine: "#8E2438",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        v7: "cubic-bezier(.22,.75,.25,1)",
      },
    },
  },
  plugins: [],
};
export default config;
