import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const runtime = "edge";

export const alt = `${brand.MARQUE} — ${brand.BASELINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* récupère un sous-ensemble TTF via l'API css2 (résolu au build, aucun
   script tiers côté client) */
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

export default async function Image() {
  const baseline = brand.BASELINE.toUpperCase();
  const [newsreader, plexMono] = await Promise.all([
    policeGoogle("Newsreader", 500, brand.MARQUE),
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
          backgroundColor: "#F5F1E8",
          padding: "80px 96px",
        }}
      >
        <div style={{ width: 96, height: 3, backgroundColor: "#8A6B1E" }} />
        <div
          style={{
            marginTop: 40,
            fontFamily: "Newsreader",
            fontSize: 110,
            color: "#1F1B15",
            lineHeight: 1.05,
          }}
        >
          {brand.MARQUE}
        </div>
        <div
          style={{
            marginTop: 32,
            fontFamily: "IBM Plex Mono",
            fontSize: 26,
            letterSpacing: "0.14em",
            color: "#6E675C",
          }}
        >
          {baseline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreader, weight: 500 },
        { name: "IBM Plex Mono", data: plexMono, weight: 400 },
      ],
    }
  );
}
