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
        paper: { DEFAULT: "#F5F1E8", light: "#FAF7F0" },
        ink: "#1F1B15",
        muted: "#6E675C",
        hairline: "#D9D2C3",
        bronze: "#8A6B1E",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        h1: ["clamp(2.6rem, 6vw, 4.5rem)", { lineHeight: "1.05" }],
        h2: ["clamp(1.8rem, 3.5vw, 2.6rem)", { lineHeight: "1.15" }],
        body: ["1.125rem", { lineHeight: "1.65" }],
        label: ["0.6875rem", { lineHeight: "1.4" }],
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};
export default config;
