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
           noms de polices. C'est l'aboutissement de ce que v18 et v28
           avaient commencé : le nom dit le RÔLE, et la bascule d'une
           fonte ne touche plus que layout.tsx.
           « mono » devient « label » pour la même raison : la police
           derrière n'est monospace que sur la page, dans les documents
           --f-label vaut la serif du corps. */
        display: ["var(--f-display)", "Georgia", "serif"],
        corps: ["var(--f-corps)", "Georgia", "serif"],
        label: ["var(--f-label)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        v7: "cubic-bezier(.22,.75,.25,1)",
      },
    },
  },
  plugins: [],
};
export default config;
