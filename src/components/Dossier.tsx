import { existsSync } from "node:fs";
import path from "node:path";
import DossierBande from "@/components/DossierBande";
import { brand } from "@/config/brand";

/* V80 · LE DOSSIER D'APPROCHE, enveloppe serveur. Elle ne fait qu'une
   chose : dire si le PDF du spécimen existe. Le lien « Version PDF » de
   la planche ne s'affiche que dans ce cas ; tant que le fichier n'est
   pas déposé dans public/, il n'y a pas de lien, plutôt qu'un lien mort.
   Le test se fait sur le disque À LA CONSTRUCTION, pas dans le
   navigateur : le site est statique, une requête de vérification depuis
   le client serait un aller-retour pour rien. Déposer le fichier suffit,
   le prochain build l'affiche. */
export default function Dossier() {
  const pdf = brand.MEDIAS.specimenPdf;
  const disponible = existsSync(path.join(process.cwd(), "public", pdf));
  return <DossierBande pdf={disponible ? pdf : null} />;
}
