type DiamondProps = {
  /** taille en pixels (8-10 selon la charte) */
  taille?: number;
  /** classes de couleur : fill-* (losange plein) ou fill-paper stroke-* (contour) */
  className?: string;
};

/* le losange, système graphique de la marque : SVG inline, pas le caractère
   unicode */
export default function Diamond({ taille = 9, className = "fill-ink" }: DiamondProps) {
  return (
    <svg
      width={taille}
      height={taille}
      viewBox="0 0 10 10"
      aria-hidden="true"
      className={`inline-block shrink-0 ${className}`}
    >
      <path d="M5 0 L10 5 L5 10 L0 5 Z" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
