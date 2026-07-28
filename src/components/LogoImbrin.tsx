/* Logo Imbrin : vectorisation du logo fourni par Vincent (plongeon imbrin
   sous la ligne d'eau, disque blanc sur tuile noire). Deux variantes :
   « tuile » = présentation documents/favicon ; « disque » = fonds sombres
   du site. La géométrie vient de logo-imbrin-geometrie.ts (générée). Si le
   fichier source vectoriel du logo existe, le déposer dans public/ pour
   remplacer cette approximation. */

import { LOGO } from "@/components/logo-imbrin-geometrie";

type LogoImbrinProps = {
  taille?: number;
  variante?: "disque" | "tuile";
  className?: string;
};

export default function LogoImbrin({
  taille = 22,
  variante = "disque",
  className = "",
}: LogoImbrinProps) {
  return (
    <svg
      width={taille}
      height={taille}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      {variante === "tuile" ? <rect width="100" height="100" fill="#0A0A0A" /> : null}
      <circle cx="50" cy="50" r="36" fill="#F4F2EF" />
      <clipPath id="disque-imbrin">
        <circle cx="50" cy="50" r="36" />
      </clipPath>
      <path
        d={LOGO.ligneEau}
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="1.3"
        clipPath="url(#disque-imbrin)"
      />
      {LOGO.pattes.map((d) => (
        <path key={d} d={d} fill="#0A0A0A" />
      ))}
      <path d={LOGO.queue} fill="#0A0A0A" />
      <path d={LOGO.corps} fill="#0A0A0A" />
      <path d={LOGO.aile} fill="none" stroke="#0A0A0A" strokeWidth="0.8" />
      <g stroke="#F4F2EF" strokeWidth="0.8" fill="none">
        {LOGO.damier.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g stroke="#F4F2EF" strokeWidth="0.9" fill="none">
        {LOGO.anneaux.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <circle cx={LOGO.oeil.cx} cy={LOGO.oeil.cy} r="0.7" fill="#F4F2EF" />
    </svg>
  );
}
