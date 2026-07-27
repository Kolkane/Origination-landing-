import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#FAFAF8", dim: "#F1F1EC" },
        ink: "#0D0D0B",
        muted: "#63635E",
        hairline: "#E4E4DF",
        outremer: "#1F3AE0",
        /* réservé au BriefSpecimen : l'île de papier */
        creme: "#F5F1E8",
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-switzer)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        h1: ["clamp(3rem, 7vw, 5.2rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.8rem, 3.5vw, 2.6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        label: ["0.6875rem", { lineHeight: "1.4" }],
      },
      letterSpacing: {
        label: "0.12em",
        display: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
