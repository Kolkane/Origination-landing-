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
        /* v18 : le display est une grotesque, la clé prend le nom du rôle.
           Aucun composant n'utilisait font-serif, le renommage ne casse rien. */
        display: ["var(--font-familjen)", "system-ui", "sans-serif"],
        /* v28 : « sans » devient « corps ». Le corps est passé en serif, une
           clé nommée sans pointant sur une serif mentirait, exactement ce que
           l'amendement v18 voulait éviter en renommant serif en display : le
           nom dit le RÔLE, pas la classification. */
        corps: ["var(--font-literata)", "Georgia", "serif"],
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
