import { ImageResponse } from "next/og";
import { LOGO } from "@/components/logo-imbrin-geometrie";
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
  const [instrument, geistMono] = await Promise.all([
    policeGoogle("Instrument+Serif", 400, marque),
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
        {/* disque du logo (géométrie partagée LogoImbrin) */}
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="36" fill="#F4F2EF" />
          <path d={LOGO.ligneEau} fill="none" stroke="#0A0A0A" strokeWidth="1.3" />
          {LOGO.pattes.map((d) => (
            <path key={d} d={d} fill="#0A0A0A" />
          ))}
          <path d={LOGO.queue} fill="#0A0A0A" />
          <path d={LOGO.corps} fill="#0A0A0A" />
          <path d={LOGO.aile} fill="none" stroke="#0A0A0A" strokeWidth="0.8" />
          {LOGO.anneaux.map((d) => (
            <path key={d} d={d} stroke="#F4F2EF" strokeWidth="0.9" fill="none" />
          ))}
          <circle cx={LOGO.oeil.cx} cy={LOGO.oeil.cy} r="0.7" fill="#F4F2EF" />
        </svg>
        <div
          style={{
            marginTop: 44,
            fontFamily: "Instrument Serif",
            fontSize: 120,
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
        { name: "Instrument Serif", data: instrument, weight: 400 },
        { name: "Geist Mono", data: geistMono, weight: 400 },
      ],
    }
  );
}
