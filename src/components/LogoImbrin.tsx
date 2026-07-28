/* Logo Imbrin : gravure au trait fournie par Vincent (assets/logo-gravure-source.svg),
   convertie en encre claire sur fond transparent pour le fond encre du site.
   PNG et non SVG : une gravure est de la texture, pas de la géométrie.
   Décoratif ici, le nom de la marque est déjà en texte à côté. */

type LogoImbrinProps = {
  taille?: number;
  className?: string;
};

export default function LogoImbrin({ taille = 18, className = "" }: LogoImbrinProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-imbrin.png"
      alt=""
      width={taille}
      height={taille}
      className={className}
      aria-hidden="true"
    />
  );
}
