/* Génère src/components/carte/france-paths.ts à partir des géodonnées
   publiques (gregoiredavid/france-geojson, régions simplifiées).
   Usage : npm run build:map — d3-geo reste en devDependency, seul le
   fichier statique généré part dans le bundle client. */

import { readFileSync, writeFileSync } from "node:fs";
import { geoConicConformal, geoPath } from "d3-geo";

/* code INSEE → slug de src/config/brand.ts */
const CORRESPONDANCE = {
  "11": "ile-de-france",
  "24": "centre-val-de-loire",
  "27": "bourgogne-franche-comte",
  "28": "normandie",
  "32": "hauts-de-france",
  "44": "grand-est",
  "52": "pays-de-la-loire",
  "53": "bretagne",
  "75": "nouvelle-aquitaine",
  "76": "occitanie",
  "84": "auvergne-rhone-alpes",
  "93": "provence-alpes-cote-d-azur",
  "94": "corse",
};

const geojson = JSON.parse(
  readFileSync(new URL("./data/regions-version-simplifiee.geojson", import.meta.url), "utf8")
);

const features = geojson.features.filter((f) => CORRESPONDANCE[f.properties.code]);
if (features.length !== 13) {
  throw new Error(`13 régions métropolitaines attendues, ${features.length} trouvées`);
}

/* chaque slug de la table doit exister dans brand.ts */
const brand = readFileSync(new URL("../src/config/brand.ts", import.meta.url), "utf8");
for (const slug of Object.values(CORRESPONDANCE)) {
  if (!brand.includes(`slug: "${slug}"`)) {
    throw new Error(`slug absent de brand.ts : ${slug}`);
  }
}

/* Lambert conforme conique centré France (parallèles 44/49, méridien 3°E) */
const TAILLE = 800;
const projection = geoConicConformal()
  .parallels([44, 49])
  .rotate([-3, 0])
  .fitSize([TAILLE, TAILLE], { type: "FeatureCollection", features });
const trace = geoPath(projection);

/* précision entière : sub-pixel pour un rendu ≤ 800px, fichier compact */
const arrondi = (d) => d.replace(/(-?\d+)\.\d+/g, "$1");

const paths = features
  .map((f) => ({
    code: f.properties.code,
    slug: CORRESPONDANCE[f.properties.code],
    d: arrondi(trace(f)),
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug));

const sortie = `/* GÉNÉRÉ par scripts/build-map.mjs — ne pas éditer à la main.
   Source : france-geojson (gregoiredavid), régions simplifiées.
   Regénérer : npm run build:map */

export const VIEWBOX = "0 0 ${TAILLE} ${TAILLE}";

export const paths: { code: string; slug: string; d: string }[] = ${JSON.stringify(paths, null, 2)};
`;

writeFileSync(new URL("../src/components/carte/france-paths.ts", import.meta.url), sortie);
console.log(`${paths.length} régions écrites dans france-paths.ts`);
