import { ImageResponse } from "next/og";
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
   requêtes réseau de la génération sont marquées immuables. */
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

/* V80 : l'emblème encre est lu dans public/ au moment du build (webpack
   émet le fichier et résout l'URL), puis passé en data URI à Satori. Il
   remplace le PNG clair embarqué en base64 dans logo-imbrin-image.ts,
   supprimé avec cette version : 63 Ko de source pour une image de 160px,
   quand le fichier de public/ sert déjà. Octet par octet : un seul
   fromCharCode sur 350 Ko dépasserait la pile, et la cible TypeScript
   du projet n'itère pas un Uint8Array par décomposition. */
async function emblemeEncre() {
  const buf = await (
    await fetch(new URL("../../public/emblem-encre.png", import.meta.url))
  ).arrayBuffer();
  const octets = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < octets.length; i++) {
    bin += String.fromCharCode(octets[i]);
  }
  return `data:image/png;base64,${btoa(bin)}`;
}

export default async function Image() {
  const marque = `${brand.MARQUE} ${brand.SUFFIXE}`;
  const baseline = brand.BASELINE;
  /* V80 : l'image suit la bascule du site, comme en v18 et en v55. Fond
     blanc, encre, emblème encre, Hanken Grotesk seule : le nom en 600,
     la baseline en 400, en bas de casse, sans capitales espacées. */
  const [titre, sous, embleme] = await Promise.all([
    policeGoogle("Hanken+Grotesk", 600, marque),
    policeGoogle("Hanken+Grotesk", 400, baseline),
    emblemeEncre(),
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
          backgroundColor: "#FFFFFF",
          padding: "80px 96px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={embleme} width="150" height="150" alt="" />
        <div
          style={{
            marginTop: 44,
            fontFamily: "Hanken Grotesk",
            fontWeight: 600,
            fontSize: 120,
            letterSpacing: "-0.01em",
            color: "#16201C",
            lineHeight: 1.06,
          }}
        >
          {marque}
        </div>
        <div
          style={{
            marginTop: 26,
            fontFamily: "Hanken Grotesk",
            fontWeight: 400,
            fontSize: 30,
            color: "#56605B",
            lineHeight: 1.3,
          }}
        >
          {baseline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Hanken Grotesk", data: titre, weight: 600 },
        { name: "Hanken Grotesk", data: sous, weight: 400 },
      ],
    }
  );
}
