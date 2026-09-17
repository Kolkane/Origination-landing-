/* V80 · LES VARIANTES DE L'EMBLÈME. Les deux fichiers déposés à la racine,
   emblem-encre.png (520 px) et emblem-clair.png (560 px), sont les
   sources ; ils sont copiés tels quels dans public/ pour le JSON-LD et
   l'image OpenGraph, et réduits à deux fois chaque rendu du site :
   72 et 88 pour l'en-tête (30 et 34 px), 208 et 264 pour le pied (104 et
   132 px). Le document (couverture, spécimen) prend le 72.
   Lancer : npm run emblemes. Aucune retouche à la main sur les sorties :
   on relance le script. Redimensionnement Lanczos, PNG sans palette, la
   gravure est une texture qu'une palette abîmerait. */
import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const racine = process.cwd();
const sorties = path.join(racine, "public");
const EMBLEMES = [
  { source: "emblem-encre.png", tailles: [72, 88] },
  { source: "emblem-clair.png", tailles: [72, 88, 208, 264] },
];

await mkdir(sorties, { recursive: true });
for (const { source, tailles } of EMBLEMES) {
  const entree = path.join(racine, source);
  if (!existsSync(entree)) throw new Error(`source absente : ${source}`);
  await copyFile(entree, path.join(sorties, source));
  const base = source.replace(/\.png$/, "");
  for (const taille of tailles) {
    const sortie = path.join(sorties, `${base}-${taille}.png`);
    const info = await sharp(entree)
      .resize(taille, taille, { fit: "contain", kernel: "lanczos3", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, palette: false })
      .toFile(sortie);
    console.log(`${path.relative(racine, sortie)} : ${info.width}x${info.height}, ${info.size} octets`);
  }
}
