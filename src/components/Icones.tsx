import { FRANCE_TRACES, FRANCE_VUE } from "@/components/carte/france-icone";
import type { NomIconeService } from "@/config/copy";

/* V80 · LES QUATRE ICÔNES de la section service, au trait, extraites de
   MAQUETTE-V80-ACCUEIL.html tracé pour tracé : la plaque de cabinet, la
   carte de France, le registre, la chemise à sangle.
   Elles sont INLINE : aucun fichier, aucune bibliothèque d'icônes, aucune
   requête. Elles héritent la couleur du texte (currentColor) et sont
   aria-hidden, le titre qui les suit dit déjà ce qu'elles montrent.
   Ni cadre, ni fond, ni rayon : ce ne sont pas des tuiles.
   DÉROGATION, consignée dans CLAUDE.md : « aucune icône nulle part »
   (v12, v51) ne vaut plus pour cette rangée, et pour elle seule. La
   taille vient du CSS (.service-icone), 64 px sur ordinateur, 44 sur
   téléphone.
   V84 · LES CLASSES D'ANIMATION (planche MAQUETTE-V84-ICONES.html,
   arbitrage Vincent). Elles ne font RIEN par elles-mêmes : tout le
   mouvement vit dans globals.css, sous .service-entree:hover, et n'existe
   que sur un pointeur fin. Le DESSIN EST À SON ÉTAT FINAL AU REPOS,
   toujours : aucune de ces classes ne masque, ne décale ni ne vide quoi
   que ce soit hors survol. C'est la condition pour qu'il n'y ait ni
   JavaScript, ni saut au chargement, ni icône vide sur téléphone.
   L'attribut pathLength="1" normalise chaque tracé : le dash du balayage
   vaut 1 quelle que soit la longueur réelle du chemin. */
const COMMUN = {
  "aria-hidden": true,
  focusable: false,
  width: 64,
  height: 64,
  className: "service-icone",
} as const;

const TRAIT = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* la gravure : la plaque se trace, les vis se posent, la gravure suit */
function Cabinet() {
  return (
    <svg {...COMMUN} viewBox="0 0 64 64" {...TRAIT}>
      <rect pathLength="1" className="ic-trace" x="6" y="15" width="52" height="34" rx="1" />
      <g className="ic-parait">
        <circle cx="11" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="53" cy="20" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="11" cy="44" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="53" cy="44" r="1.2" fill="currentColor" stroke="none" />
      </g>
      <path pathLength="1" className="ic-trace ic-tard" style={{ "--i": 0 } as never} d="M18 27h28" />
      <path pathLength="1" className="ic-trace ic-tard" style={{ "--i": 1 } as never} d="M18 33h28" />
      <path pathLength="1" className="ic-trace ic-tard" style={{ "--i": 2 } as never} d="M24 39h16" />
    </svg>
  );
}

/* le balayage : le vin saute de région en région et se pose sur une seule.
   C'est « un périmètre, un seul cabinet » dessiné. Le trait est plus épais
   (9) parce que le tracé est dessiné dans un repère de 820 unités là où les
   trois autres tiennent dans 64. */
function Carte() {
  return (
    <svg {...COMMUN} viewBox={FRANCE_VUE}>
      {FRANCE_TRACES.map((trace) => (
        <path
          key={trace.d.slice(0, 24)}
          d={trace.d}
          className={trace.rempli ? "ic-arrive" : trace.etape ? `ic-saut ic-saut-${trace.etape}` : undefined}
          fill={trace.rempli ? "var(--vin)" : "none"}
          stroke="currentColor"
          strokeWidth={9}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

/* le tampon : le sceau se pose d'un coup, le reste du registre ne bouge pas */
function Registre() {
  return (
    <svg {...COMMUN} viewBox="0 0 64 64" {...TRAIT}>
      <path d="M14 8h36v48H14z" />
      <path d="M14 8v48M20 8v48" />
      <path d="M27 20h16M27 27h16M27 34h10" />
      <g className="ic-tampon">
        <circle cx="41" cy="46" r="4.5" />
        <circle cx="41" cy="46" r="1.6" />
      </g>
      <path d="M44 8v12l-3-2-3 2V8" />
    </svg>
  );
}

/* la chemise s'écrit : la sangle puis les lignes se tracent */
function Chemise() {
  return (
    <svg {...COMMUN} viewBox="0 0 64 64" {...TRAIT}>
      <path d="M12 12h18l4 5h18v37H12z" />
      <path d="M12 22h40" />
      <path pathLength="1" className="ic-trace" style={{ "--i": 0 } as never} strokeWidth={1.2} d="M38 54l14-14" />
      <path pathLength="1" className="ic-trace" style={{ "--i": 1 } as never} strokeWidth={1.2} d="M42 54l10-10" />
      <path pathLength="1" className="ic-trace ic-tard" style={{ "--i": 0 } as never} d="M20 31h20" />
      <path pathLength="1" className="ic-trace ic-tard" style={{ "--i": 1 } as never} d="M20 38h14" />
    </svg>
  );
}

const ICONES: Record<NomIconeService, () => JSX.Element> = {
  cabinet: Cabinet,
  carte: Carte,
  registre: Registre,
  chemise: Chemise,
};

export default function Icone({ nom }: { nom: NomIconeService }) {
  const Dessin = ICONES[nom];
  return <Dessin />;
}
