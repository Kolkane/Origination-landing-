import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/components/logo-imbrin-image";
import { brand } from "@/config/brand";

export const runtime = "edge";

export const alt = `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`;
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

export default async function Image() {
  const marque = `${brand.MARQUE} ${brand.SUFFIXE}`;
  const baseline = brand.BASELINE.toUpperCase();
  const [familjen, geistMono] = await Promise.all([
    policeGoogle("Familjen+Grotesk", 400, marque),
    policeGoogle("Geist+Mono", 400, `${baseline} ·`),
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
          backgroundColor: "#0A0A0A",
          padding: "80px 96px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_DATA_URI} width="150" height="150" alt="" />
        <div
          style={{
            marginTop: 44,
            fontFamily: "Familjen Grotesk",
            fontSize: 120,
            letterSpacing: "-0.02em",
            color: "#F4F2EF",
            lineHeight: 1.06,
          }}
        >
          {marque}
        </div>
        <div
          style={{
            marginTop: 34,
            fontFamily: "Geist Mono",
            fontSize: 24,
            letterSpacing: "0.28em",
            color: "#B9B6B2",
          }}
        >
          {baseline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Familjen Grotesk", data: familjen, weight: 400 },
        { name: "Geist Mono", data: geistMono, weight: 400 },
      ],
    }
  );
}
