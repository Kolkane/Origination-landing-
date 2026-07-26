/* Tracés simplifiés des 13 régions métropolitaines (précision moyenne,
   sommets partagés entre régions voisines pour un pavage sans trous).
   Géométrie de dessin uniquement : noms et statuts viennent de
   src/config/brand.ts — aucune donnée métier ici. */

export const VIEWBOX = "0 0 100 100";

export const tracesRegions: Record<string, string> = {
  "hauts-de-france": "M50 1 L56 3 L63 8 L62 15 L56 21 L48 21 L43 11 Z",
  normandie:
    "M43 11 L34.5 16 L29 18 L24.5 16 L21.5 12 L19 17 L20 25 L33 28 L44 25 L48 21 Z",
  "ile-de-france": "M48 21 L56 21 L58 25 L55 29 L48 29 L44 25 Z",
  "grand-est":
    "M63 8 L67 9 L78 12 L90 22 L85.5 36 L70 34 L58 25 L56 21 L62 15 Z",
  "bourgogne-franche-comte":
    "M55 29 L58 25 L70 34 L85.5 36 L76 50 L61 48 L51 50 L55 40 Z",
  "centre-val-de-loire":
    "M33 28 L44 25 L48 29 L55 29 L55 40 L51 50 L46 48 L37 47 L39 40 L36 32 Z",
  bretagne:
    "M20 25 L13 25 L6 24 L1.6 27.6 L2 31.5 L6 32 L11 34.5 L15 35.5 L20 38 Z",
  "pays-de-la-loire": "M20 25 L33 28 L36 32 L39 40 L37 47 L26 50 L22 47 L20 38 Z",
  "nouvelle-aquitaine":
    "M26 50 L37 47 L46 48 L51 50 L51 62 L43 67 L36 72 L33 80 L23.4 78 L25 68 L26 58 Z",
  "auvergne-rhone-alpes":
    "M51 50 L61 48 L76 50 L81 53 L79 63 L66 66 L58 64 L51 62 Z",
  occitanie:
    "M51 62 L58 64 L66 66 L63 72 L60.4 76.5 L56 80 L53.7 86 L44.2 88 L33 80 L36 72 L43 67 Z",
  "provence-alpes-cote-d-azur":
    "M66 66 L79 63 L85 74.6 L74.3 81.4 L70.5 79.6 L63 78 L63 72 Z",
  corse: "M94 82 L96.5 85 L95.5 92 L93.5 98 L91.5 97 L91 90 L92.5 85 Z",
};
