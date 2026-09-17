import type { Config } from "tailwindcss";

/* V80 : Tailwind ne sert plus que son socle (preflight, border-box) ; les
   tokens de la DA v7 qu'il étendait sont morts au lot 4, et les pages
   n'emploient plus aucune classe utilitaire. Les couleurs et la police
   vivent dans globals.css. */
const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [],
};
export default config;
