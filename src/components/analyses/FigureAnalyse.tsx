import type { NomFigure } from "@/config/analyses";

/* v85 · LES TROIS FIGURES DES ANALYSES.
   ELLES NE PORTENT AUCUNE QUANTITÉ, et c'est la règle qui les gouverne.
   Le site n'a aucun chiffre mesuré à publier sur ces sujets, et la liste
   blanche de CLAUDE.md interdit d'en inventer : un graphe à barres ou un
   camembert aurait été un mensonge dessiné. Chaque figure dessine un
   RAISONNEMENT déjà écrit dans l'article, un décalage, une bifurcation,
   un cycle. Pas d'axe, pas d'échelle, pas de série.

   ELLES SONT EN HTML RÉGLÉ, PAS EN SVG, et c'est une correction faite sur
   pièce : la première version posait les libellés en <text> à des
   coordonnées fixes, et les libellés français, longs, se chevauchaient
   dès la deuxième figure. Un diagramme dont la mise en page dépend de la
   longueur d'une chaîne se dessine avec des filets et une grille, pas
   avec des coordonnées. Bénéfice second : la figure se recompose sur
   téléphone, et elle se lit à la voix dans l'ordre du texte.
   Les traits sont des bordures, la seule couleur est le vin, à un seul
   endroit par figure, celui que l'article désigne. Ni cadre, ni fond, ni
   ombre, ni arrondi.
   LES REPÈRES SONT DU TEXTE et viennent des données
   (src/config/analyses.ts, clé « reperes »). Chaque figure en attend un
   nombre FIXE, écrit ci-dessous. */

/* la pointe des liaisons : un chevron de 7 px, au trait, jamais une
   icône de bibliothèque */
function Pointe() {
  return (
    <svg className="fig-pointe" viewBox="0 0 8 12" aria-hidden="true" focusable="false">
      <path d="M1 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* LE DÉCALAGE, 5 repères : le moment où la transmission devient
   inévitable, celui où elle est traitée, la zone entre les deux, puis
   les deux issues. La zone est la seule marque en vin. */
function Decalage({ r }: { r: string[] }) {
  return (
    <div className="fig fig-decalage">
      <p className="fig-borne fig-borne-g">{r[0]}</p>
      <p className="fig-borne fig-borne-d">{r[1]}</p>
      <div className="fig-ligne">
        <span className="fig-seg" />
        <span className="fig-seg fig-seg-vin" />
        <span className="fig-seg" />
      </div>
      <p className="fig-zone">{r[2]}</p>
      <p className="fig-issue fig-issue-g">{r[3]}</p>
      <p className="fig-issue fig-issue-d">{r[4]}</p>
    </div>
  );
}

/* LA BIFURCATION, 5 repères : l'origine, puis deux branches et leurs
   deux aboutissements. La branche haute, celle dont parle l'article,
   porte le vin ; elle n'est pas dite plus fréquente, aucune part n'est
   publiée. */
function Bifurcation({ r }: { r: string[] }) {
  return (
    <div className="fig fig-bifurcation">
      <p className="fig-origine">{r[0]}</p>
      <div className="fig-branche fig-branche-vin">
        <p className="fig-branche-nom">{r[1]}</p>
        <Pointe />
        <p className="fig-branche-fin">{r[2]}</p>
      </div>
      <div className="fig-branche">
        <p className="fig-branche-nom">{r[3]}</p>
        <Pointe />
        <p className="fig-branche-fin">{r[4]}</p>
      </div>
    </div>
  );
}

/* LE CYCLE, 4 repères : les trois étapes, puis la rupture. Le retour au
   départ est tireté et coupé d'une croix en vin : c'est l'endroit où la
   méthode se perd, le point de l'article. */
function Cycle({ r }: { r: string[] }) {
  return (
    <div className="fig fig-cycle">
      <div className="fig-etapes">
        <p className="fig-etape">{r[0]}</p>
        <Pointe />
        <p className="fig-etape">{r[1]}</p>
        <Pointe />
        <p className="fig-etape">{r[2]}</p>
      </div>
      <div className="fig-retour">
        <span className="fig-retour-trait" />
        <svg className="fig-croix" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M3 3l10 10M13 3L3 13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="fig-retour-trait" />
      </div>
      <p className="fig-rupture">{r[3]}</p>
    </div>
  );
}

const FIGURES: Record<NomFigure, (p: { r: string[] }) => JSX.Element> = {
  decalage: Decalage,
  bifurcation: Bifurcation,
  cycle: Cycle,
};

export default function FigureAnalyse({
  nom,
  reperes,
  legende,
}: {
  nom: NomFigure;
  reperes: string[];
  legende: string;
}) {
  const Dessin = FIGURES[nom];
  return (
    <figure className="figure">
      <Dessin r={reperes} />
      <figcaption className="figure-legende">{legende}</figcaption>
    </figure>
  );
}
