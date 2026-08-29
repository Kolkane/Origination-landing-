import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/components/logo-imbrin-image";
import { brand } from "@/config/brand";

/* v56 · RUNTIME. Retirer cette ligne prégénérerait le PNG au build au
   lieu de le rendre à la demande, ce qui serait le vrai gain : l'image
   ne change jamais entre deux déploiements. ESSAYÉ, ET REPOSÉ : sans
   edge, le prérendu casse à l'intérieur de @vercel/og, au chargement du
   module, sur un fileURLToPath appliqué à une chaîne qui n'est pas une
   URL. Impossible de savoir depuis un poste Windows si le défaut y est
   propre ou s'il vaut aussi pour les serveurs de build : dans le doute,
   on ne troque pas un build de production contre une image sociale.
   À reprendre sur une branche, où Vercel bâtira une préview qui tranche.
   Ce qui EST optimisé ici, et qui vaut dans les deux runtimes : les
   quatre requêtes réseau de la génération sont marquées immuables. */
export const runtime = "edge";

export const alt = `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* sous-ensemble TTF via l'API css2 de Google (résolu à la génération) */
async function policeGoogle(famille: string, poids: number, texte: string) {
  /* une URL css2 avec un sous-ensemble figé rend toujours le même CSS, et
     l'URL de fonte qu'elle contient est versionnée donc immuable : les deux
     requêtes sont marquées en cache permanent. Sans cela, chaque partage de
     lien repayait quatre allers-retours vers Google. */
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=${famille}:wght@${poids}&text=${encodeURIComponent(texte)}`,
      { cache: "force-cache" }
    )
  ).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`police introuvable : ${famille}`);
  return (await fetch(url, { cache: "force-cache" })).arrayBuffer();
}

export default async function Image() {
  const marque = `${brand.MARQUE} ${brand.SUFFIXE}`;
  const baseline = brand.BASELINE.toUpperCase();
  /* v55 : les polices suivent la bascule du site. La charte v18 pose
     que l'image OG n'echappe pas aux arbitrages de police, elle avait
     alors perdu Instrument Serif ; elle perd ici Familjen et Geist Mono.
     Fraunces est demandee a wght@400 sans ses axes SOFT et WONK : la
     carte sociale n'a pas besoin du dessin irregulier, et une requete
     multi-axes de plus serait un point de casse pour un PNG statique. */
  const [display, label] = await Promise.all([
    policeGoogle("Fraunces", 400, marque),
    policeGoogle("Cutive+Mono", 400, `${baseline} ·`),
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
            fontFamily: "Fraunces",
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
            fontFamily: "Cutive Mono",
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
        { name: "Fraunces", data: display, weight: 400 },
        { name: "Cutive Mono", data: label, weight: 400 },
      ],
    }
  );
}
