import { brand } from "@/config/brand";

/* V80 : l'emblème, un plongeon imbrin gravé. Deux fichiers et non un
   filtre : la gravure encre pour les fonds clairs, la gravure claire pour
   les fonds sombres (public/emblem-encre.png, public/emblem-clair.png).
   PNG et non SVG : une gravure est de la texture, pas de la géométrie.
   Décoratif par défaut, le nom de la marque étant en texte à côté ; un
   alt le rend signifiant, comme au pied de page.
   Les deux fichiers font 520 et 560 px pour des rendus de 26 à 132 px :
   poids signalé au lot 1, à traiter au lot 4 (qualité). */
type Props = {
  ton: "encre" | "clair";
  taille: number;
  alt?: string;
  className?: string;
  /* hors du premier écran : chargement différé */
  differe?: boolean;
};

export default function Embleme({
  ton,
  taille,
  alt = "",
  className,
  differe = false,
}: Props) {
  const src =
    ton === "encre" ? brand.MEDIAS.emblemeEncre : brand.MEDIAS.emblemeClair;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={taille}
      height={taille}
      className={className}
      aria-hidden={alt ? undefined : true}
      loading={differe ? "lazy" : undefined}
      decoding="async"
    />
  );
}
