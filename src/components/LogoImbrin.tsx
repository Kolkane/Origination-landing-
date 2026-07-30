/* Logo Imbrin : gravure au trait fournie par Vincent (assets/logo-gravure-source.svg),
   convertie en encre claire sur fond transparent pour le fond encre du site.
   PNG et non SVG : une gravure est de la texture, pas de la géométrie.
   Décoratif ici, le nom de la marque est déjà en texte à côté.

   ton="sombre" : même fichier, inversé en CSS pour les surfaces claires
   (le document de la section « ce que vous recevez » est sur papier). Une
   gravure monochrome sur alpha s'inverse proprement, et cela évite de servir
   un second bitmap d'un mégaoctet. */

type LogoImbrinProps = {
  taille?: number;
  className?: string;
  ton?: "clair" | "sombre";
};

export default function LogoImbrin({
  taille = 18,
  className = "",
  ton = "clair",
}: LogoImbrinProps) {
  const classes = [ton === "sombre" ? "logo-encre-sombre" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-imbrin.png"
      alt=""
      width={taille}
      height={taille}
      className={classes}
      aria-hidden="true"
    />
  );
}
