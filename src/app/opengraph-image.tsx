import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const runtime = "edge";

export const alt = `${brand.MARQUE} — ${brand.BASELINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* sous-ensemble TTF via l'API css2 de Google (résolu à la génération) */
async function policeGoogle(famille: string, poids: number, texte: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${famille}:wght@${poids}&text=${encodeURIComponent(texte)}`
    )
  ).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`police introuvable : ${famille}`);
  return (await fetch(url)).arrayBuffer();
}

/* TTF Fontshare ; fallback Schibsted Grotesk (Google) si indisponible */
async function policeDisplay(texte: string) {
  try {
    const css = await (
      await fetch("https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800")
    ).text();
    const url = css.match(/url\('([^']+\.ttf)'\) format\('truetype'\)/)?.[1];
    if (!url) throw new Error("ttf introuvable");
    return await (await fetch(url.startsWith("//") ? `https:${url}` : url)).arrayBuffer();
  } catch {
    return policeGoogle("Schibsted+Grotesk", 700, texte);
  }
}

export default async function Image() {
  const baseline = brand.BASELINE.toUpperCase();
  const [display, plexMono] = await Promise.all([
    policeDisplay(brand.MARQUE),
    policeGoogle("IBM+Plex+Mono", 400, `${baseline} ·`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#FAFAF8",
          padding: "80px 96px",
        }}
      >
        <div style={{ width: 96, height: 4, backgroundColor: "#1F3AE0" }} />
        <div
          style={{
            marginTop: 40,
            fontFamily: "Display",
            fontSize: 116,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#0D0D0B",
            lineHeight: 1,
          }}
        >
          {brand.MARQUE}
        </div>
        <div
          style={{
            marginTop: 32,
            fontFamily: "IBM Plex Mono",
            fontSize: 26,
            letterSpacing: "0.12em",
            color: "#63635E",
          }}
        >
          {baseline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Display", data: display, weight: 800 },
        { name: "IBM Plex Mono", data: plexMono, weight: 400 },
      ],
    }
  );
}
