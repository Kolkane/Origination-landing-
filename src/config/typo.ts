/* ============================================================
   Espaces insécables. Les règles vivent ICI et nulle part
   ailleurs : aucune U+00A0 n'est écrite à la main dans les
   fichiers de copy. Un caractère invisible collé dans une
   phrase disparaît à la première réécriture sans que personne
   ne le voie ; une règle appliquée au rendu survit, et toute
   copy future est correcte sans effort.

   U+00A0 et non U+202F, l'espace fine insécable qui serait
   l'usage français devant les ponctuations hautes. Vérifié sur
   le binaire à l'époque de Source Serif 4 : le sous-ensemble
   latin que next/font/google embarque n'y contenait PAS le
   glyphe U+202F, alors que son unicode-range (u+2000-206f) le
   couvre. La v55 a changé les trois polices du site, la réserve
   vaut donc à nouveau et n'a PAS été revérifiée sur Spectral,
   Fraunces et Cutive Mono : U+00A0 reste le choix sûr, il est
   servi par tous les sous-ensembles latins de Google.
   Le navigateur retiendrait donc la fonte, n'y trouverait rien,
   et retomberait sur Georgia puis sur la serif système : une
   espace à la largeur d'une autre fonte, variable selon la
   machine. Aucun sous-ensemble Google de cette fonte ne le
   sert. U+00A0 est présent dans les trois fontes du site.
   ============================================================ */

const INS = " ";

/* R1 · espace avant les ponctuations hautes */
const R1 = /(\S) (?=[:;!?])/g;
/* R2 · séparateur de milliers, à partir de quatre chiffres */
const R2 = /(\d) (?=\d{3}(?!\d))/g;
/* R3 · un nombre et son unité ou son symbole. Les symboles n'ont pas de
   limite de mot exploitable (€ n'est pas un caractère de mot), les unités
   écrites en lettres en ont une. D'où les deux moitiés de l'alternative. */
const R3 = /(\d) (?=K€|M€|€|%|(?:HT|jours?|mois|semaines?|salariés?|ans)\b)/g;
/* R4 · une abréviation et son nombre */
const R4 = /(art\.|n°) (?=\d)/g;
/* R5 · guillemets français, ouvrant et fermant */
const R5O = /« /g;
const R5F = / (?=»)/g;

/* R7 · le symbole monétaire et la mention de taxe qui le suit. « 2 000 € HT »
   devient un seul jeton, ce que R2 et R3 ne savaient pas faire : elles lient
   le nombre à son symbole, aucune ne liait un symbole au mot suivant.
   Bornée à HT et TTC, PAS à « tout mot qui suit ». Une règle large lierait
   « 24 000 € sur l'année », composé au runtime dans copy.ts.arithmetique, et
   produirait une chaîne de trois mots là où le prix s'arrête au symbole.
   Motif : en deux colonnes, l'offre affiche le prix à 92px dans une colonne
   de 473px. Sans cette règle, « HT » retombe sous le nombre dès que la
   colonne se resserre. Mesuré : la chaîne liée fait 410,2px et tient à
   partir de 1390px de viewport, d'où le point de bascule de la grille. */
const R7 = /(€) (?=HT\b|TTC\b)/g;

/* R6 · mot d'une seule lettre en fin de ligne possible. JAMAIS automatique :
   voir grand() ci-dessous. Un « à » orphelin se voit dans un titre de 32px,
   personne ne le remarque dans un corps de 14,5px, et le lier partout
   coûterait une soixantaine de blocs indivisibles sans bénéfice. */
const R6 = /(^|[\s(])([ày]) /g;

/* Aucune règle ne consomme autre chose qu'une U+0020 et aucune n'en produit :
   les appliquer deux fois donne le même résultat que les appliquer une
   fois. C'est ce qui rend sûre la composition typoDeep() puis grand(). */

/* Il reste TROIS U+00A0 écrites à la main dans copy.ts, et seulement trois :
   celles qui suivent le séparateur « · » de l'eyebrow du hero et des deux
   lignes du pied de page. Aucune règle ne les couvre, le séparateur n'étant
   ni une ponctuation haute ni un guillemet. Elles restent littérales faute
   d'une règle dédiée, qui n'a pas été demandée. Si le « · » devient une
   convention à part entière du site, c'est ici qu'elle se déclare, et
   ces trois caractères disparaissent des sources. */

/** R1 à R5 et R7, mécaniques. Appliquées à toute la copy via typoDeep(). */
export function typo(s: string): string {
  return s
    .replace(R1, "$1" + INS)
    .replace(R2, "$1" + INS)
    .replace(R3, "$1" + INS)
    .replace(R4, "$1" + INS)
    .replace(R5O, "«" + INS)
    .replace(R5F, INS)
    .replace(R7, "$1" + INS);
}

/** typo() plus R6. À poser au point de RENDU, sur le grand texte seulement :
    titres, citations, intitulés de FAQ. Le point de rendu est le seul
    endroit où la taille est visible ; le nom de la clé ne la dit pas
    (les titres de section des pages légales sont en mono 10,5px). */
export function grand(s: string): string {
  return typo(s).replace(R6, "$1$2" + INS);
}

/** Applique typo() à toutes les chaînes d'une structure, en profondeur.
    Les objets de configuration sont figés à l'import, le coût est payé
    une fois au chargement du module. */
export function typoDeep<T>(v: T): T {
  if (typeof v === "string") return typo(v) as unknown as T;
  if (Array.isArray(v)) return v.map((x) => typoDeep(x)) as unknown as T;
  if (v !== null && typeof v === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, x] of Object.entries(v as Record<string, unknown>)) {
      out[k] = typoDeep(x);
    }
    return out as T;
  }
  return v;
}
