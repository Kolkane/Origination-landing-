/* V80, lot 4 bis · LA VIDÉO DU HERO POUR TÉLÉPHONE. Sous 761 px,
   object-fit: cover ne montre qu'une bande centrale du clip ; le reste
   des 1 112 px de large se télécharge pour rien. Ce script tire de
   public/imbrin.mp4 un recadrage CENTRÉ en 3:4 portrait, 626 × 834, à la
   résolution d'origine (aucune réduction), H.264 yuv420p, sans piste
   audio, +faststart, toutes les images gardées : la boucle est intacte.
   Réglage retenu sur pièce (17/09/2026), à trois fois l'échelle :
   CRF 33 donne 402 Ko, les points blancs du plumage restent nets et le
   noir ne se bande pas ; à 35 les points bavent ; en dessous de 31 on
   dépasse les 500 Ko. aq-mode 3 réserve des bits aux zones sombres, qui
   sont presque toute l'image. Lancer : npm run video-mobile. */
import { spawnSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";

const racine = process.cwd();
const source = path.join(racine, "public", "imbrin.mp4");
const sortie = path.join(racine, "public", "imbrin-mobile.mp4");
const LARGEUR = 626;
const HAUTEUR = 834;
const CRF = process.argv[2] ?? "33";

/* le cadre source fait 1112 × 834 : la bande centrale de 626 px part de
   (1112 - 626) / 2 = 243. Le calcul est laissé à ffmpeg, qui lit la
   largeur réelle, pour que le script survive à un nouveau clip. */
const filtre = `crop=${LARGEUR}:${HAUTEUR}:(iw-${LARGEUR})/2:(ih-${HAUTEUR})/2`;
const args = [
  "-hide_banner", "-loglevel", "error", "-y",
  "-i", source,
  "-vf", filtre,
  "-an",
  "-c:v", "libx264", "-preset", "slow", "-crf", String(CRF),
  "-x264-params", "aq-mode=3",
  "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  sortie,
];
const r = spawnSync(ffmpeg, args, { stdio: "inherit" });
if (r.status !== 0) {
  console.error(`ffmpeg a échoué (code ${r.status})`);
  process.exit(1);
}
const octets = statSync(sortie).size;
console.log(`${path.relative(racine, sortie)} : ${LARGEUR}x${HAUTEUR}, CRF ${CRF}, ${octets} octets (${Math.round(octets / 1024)} Ko)`);
