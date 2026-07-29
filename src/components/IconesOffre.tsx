/* Marques de l'offre. Dessinées sur mesure, au trait, dans le langage du
   registre et de la carte : pas des pictogrammes d'application. Les trois
   partagent le même vocabulaire (le cadre = la zone, le point = une cible)
   pour se lire comme un système et non comme trois icônes piochées. */

type IconeProps = {
  nom: "couverture" | "veille" | "exclusivite";
};

const TRAITS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "square" as const,
};

export default function IconeOffre({ nom }: IconeProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={30}
      height={30}
      aria-hidden="true"
      className="ico"
      shapeRendering="geometricPrecision"
    >
      {nom === "couverture" ? (
        <>
          {/* la zone, et tout ce qu'elle contient : le stock exhaustif */}
          <rect x="3.5" y="5.5" width="25" height="21" {...TRAITS} />
          {[10, 16, 22].map((y) =>
            [9, 16, 23].map((x) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.35" fill="currentColor" />
            ))
          )}
        </>
      ) : null}

      {nom === "veille" ? (
        <>
          {/* le temps qui court, et la bascule relevée à sa date */}
          <path d="M3.5 22.5 H28.5" {...TRAITS} />
          {[8, 13, 18, 23].map((x) => (
            <path key={x} d={`M${x} 22.5 V19.5`} {...TRAITS} />
          ))}
          <path d="M18 19.5 V8.5" {...TRAITS} />
          <circle cx="18" cy="7" r="2.4" fill="currentColor" />
        </>
      ) : null}

      {nom === "exclusivite" ? (
        <>
          {/* la même zone, et un seul point tenu */}
          <rect x="3.5" y="5.5" width="25" height="21" {...TRAITS} />
          <circle cx="16" cy="16" r="3.2" fill="currentColor" />
        </>
      ) : null}
    </svg>
  );
}
