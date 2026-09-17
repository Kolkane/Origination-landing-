import { brand } from "@/config/brand";

/* V80 · L'EMBLÈME, un plongeon imbrin gravé. Deux fichiers et non un
   filtre : la gravure encre pour les fonds clairs, la gravure claire pour
   les fonds sombres. PNG et non SVG : une gravure est de la texture, pas
   de la géométrie. Décoratif par défaut, le nom de la marque étant en
   texte à côté ; un alt le rend signifiant, comme au pied de page.
   LES VARIANTES (lot 4) : les fichiers déposés font 520 px pour des
   rendus de 20 à 132 px. scripts/emblemes.mjs en tire des variantes à
   deux fois le rendu, et chaque emploi choisit la sienne :
   « entete », 34 px et 30 sur téléphone, servi en 88 et 72 ;
   « pied », 132 px et 104, servi en 264 et 208 ;
   « document », la couverture et le spécimen, 20 à 28 px, servi en 72.
   Les fichiers de 520 px restent pour le JSON-LD et l'image OpenGraph. */
type Emploi = "entete" | "pied" | "document";

type Props = {
  ton: "encre" | "clair";
  emploi: Emploi;
  alt?: string;
  className?: string;
  /* hors du premier écran : chargement différé */
  differe?: boolean;
};

const RENDUS: Record<Emploi, { taille: number; mobile: number; variantes: number[] }> = {
  entete: { taille: 34, mobile: 30, variantes: [72, 88] },
  pied: { taille: 132, mobile: 104, variantes: [208, 264] },
  document: { taille: 28, mobile: 20, variantes: [72] },
};

export default function Embleme({ ton, emploi, alt = "", className, differe = false }: Props) {
  const base = (ton === "encre" ? brand.MEDIAS.emblemeEncre : brand.MEDIAS.emblemeClair).replace(
    /\.png$/,
    ""
  );
  const r = RENDUS[emploi];
  const src = `${base}-${r.variantes[r.variantes.length - 1]}.png`;
  const srcSet =
    r.variantes.length > 1 ? r.variantes.map((v) => `${base}-${v}.png ${v}w`).join(", ") : undefined;
  const sizes = srcSet ? `(max-width: 760px) ${r.mobile}px, ${r.taille}px` : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={r.taille}
      height={r.taille}
      className={className}
      aria-hidden={alt ? undefined : true}
      loading={differe ? "lazy" : undefined}
      decoding="async"
    />
  );
}
