/* V87 · LES PAGES DU DOSSIER SPÉCIMEN. Le popup de la section « Le dossier
   d'approche » montre le vrai dossier, pas une représentation : les deux
   pages du PDF produit par le gabarit HTML du dépôt Veillor.com
   (dossiers/sortie_html/2026-000_Verane-Ingenierie_specimen.pdf, Vérane Ingénierie, spécimen
   fictif), rendues en images. Ce script copie le PDF dans public/ sous le
   nom que brand.MEDIAS.specimenPdf attend, puis rend chaque page en PNG
   avec PyMuPDF (le venv du dépôt Veillor.com) à 96 et 192 dpi, soit
   794 × 1123 et 1587 × 2246 px pour l'A4, et les convertit en WebP sans
   perte (plus léger que le lossy sur du texte sur blanc, et sans bavure).
   Lancer : npm run specimen-pages. Aucune retouche à la main : on relance. */
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";

const racine = process.cwd();
const VEILLOR = "C:/Users/Stendhal/Veillor.com";
const PYTHON = `${VEILLOR}/.venv/Scripts/python.exe`;
const PDF = `${VEILLOR}/dossiers/sortie_html/2026-000_Verane-Ingenierie_specimen.pdf`;
const SORTIE_PDF = path.join(racine, "public", "specimen-imbrin.pdf");
const BASE = "dossier-specimen";
const ECHELLES = [
  { suffixe: "", dpi: 96 },
  { suffixe: "@2x", dpi: 192 },
];

if (!existsSync(PDF)) throw new Error(`PDF absent : ${PDF}`);
if (!existsSync(PYTHON)) throw new Error(`python absent : ${PYTHON}`);
copyFileSync(PDF, SORTIE_PDF);
console.log(`public/specimen-imbrin.pdf : ${readFileSync(SORTIE_PDF).length} octets`);

const tmp = path.join(tmpdir(), `specimen-pages-${process.pid}`);
mkdirSync(tmp, { recursive: true });
const script = `
import sys, pymupdf
doc = pymupdf.open(sys.argv[1]); out = sys.argv[2]
for i, page in enumerate(doc, start=1):
    for dpi in (96, 192):
        pix = page.get_pixmap(matrix=pymupdf.Matrix(dpi / 72, dpi / 72), alpha=False)
        pix.save(f"{out}/page{i}-{dpi}.png")
print(doc.page_count)
`;
const r = spawnSync(PYTHON, ["-c", script, PDF, tmp], { encoding: "utf8" });
if (r.status !== 0) throw new Error(r.stderr);
const pages = Number(r.stdout.trim());
for (let i = 1; i <= pages; i++) {
  for (const { suffixe, dpi } of ECHELLES) {
    const sortie = path.join(racine, "public", `${BASE}-${i}${suffixe}.webp`);
    const info = await sharp(path.join(tmp, `page${i}-${dpi}.png`)).webp({ lossless: true }).toFile(sortie);
    console.log(`${path.relative(racine, sortie)} : ${info.width}x${info.height}, ${info.size} octets`);
  }
}
rmSync(tmp, { recursive: true, force: true });
