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
        "txt-3": "#83807C",
        line: "rgba(255,255,255,0.12)",
        "line-soft": "rgba(255,255,255,0.06)",
        wine: "#8E2438",
      },
      fontFamily: {
        /* v55 : les clés pointent sur les tokens de rôle, plus sur des
           noms de polices : le nom dit le RÔLE, et la bascule d'une
           fonte ne touche plus que layout.tsx.
           V80 : les trois rôles valent la même famille, Hanken Grotesk,
           et le repli devient le sans-serif des planches. */
        display: ["var(--f-display)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        corps: ["var(--f-corps)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        label: ["var(--f-label)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        v7: "cubic-bezier(.22,.75,.25,1)",
      },
    },
  },
  plugins: [],
};
export default config;
