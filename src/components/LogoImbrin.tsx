/* Logo Imbrin : sert public/logo-imbrin.svg, vectorisé depuis le fichier de
   marque fourni (assets/logo-source.svg). Fichier externe plutôt qu'inline :
   il est mis en cache par le navigateur et n'alourdit pas le HTML de chaque
   page. Décoratif ici (le nom de la marque est déjà en texte à côté). */

type LogoImbrinProps = {
  taille?: number;
  className?: string;
};

export default function LogoImbrin({ taille = 18, className = "" }: LogoImbrinProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-imbrin.svg"
      alt=""
      width={taille}
      height={taille}
      className={className}
      aria-hidden="true"
    />
  );
}
