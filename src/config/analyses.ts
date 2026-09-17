import { typoDeep } from "./typo";

/* Les analyses sont une DONNÉE, pas trois pages en dur. De ce tableau
   dérivent l'index de l'accueil, les pages /analyses/[slug], le balisage
   Article et les entrées de sitemap. Ajouter un article, c'est ajouter une
   entrée ici, rien d'autre.

   datePublished ne s'affiche jamais à l'écran : les analyses sont
   volontairement non datées pour le lecteur. Elle ne sert qu'au balisage
   Article et au lastmod du sitemap. */

/* v85 · LE CORPS N'EST PLUS UN TABLEAU DE PARAGRAPHES. Six paragraphes de
   même longueur à la suite, trois fois, c'était la mise en page qui
   trahissait la machine bien avant les mots. Le corps est désormais une
   suite de BLOCS TYPÉS, et c'est la variété de ces blocs qui donne le
   rythme : prose, intertitre, figure, exergue, chute.
   La règle « rien codé en dur dans le JSX » vaut aussi pour les figures :
   leurs repères sont du texte, ils vivent donc ici, et le composant ne
   fait que les placer. */
export type NomFigure = "decalage" | "bifurcation" | "cycle";

export type BlocArticle =
  | { forme: "p"; texte: string }
  | { forme: "intertitre"; texte: string }
  /* l'exergue reprend une phrase DÉJÀ ÉCRITE dans l'article, jamais une
     affirmation nouvelle : c'est une mise en valeur, pas un ajout */
  | { forme: "exergue"; texte: string }
  | { forme: "chute"; texte: string }
  /* la figure dessine un RAISONNEMENT, jamais une quantité : le site n'a
     aucun chiffre mesuré à montrer et la liste blanche interdit d'en
     inventer. Le nombre de repères est fixe par figure, voir
     src/components/analyses/FigureAnalyse.tsx. */
  | { forme: "figure"; nom: NomFigure; legende: string; reperes: string[] };

export type Article = {
  slug: string;
  titre: string;
  standfirst: string;
  corps: BlocArticle[];
  datePublished: string; // ISO 8601, jamais affichée
};

export const analyses: Article[] = typoDeep([
  {
    slug: "vague-transmission-pme",
    titre: "La vague de transmission des PME françaises",
    /* v77 : l'âge n'explique plus la vague. Le backtest national a mesuré
       que l'âge du dirigeant seul ne sélectionne rien ; l'article garde le
       constat démographique, une génération, et le volume, la vague, et
       perd la causalité par l'âge. Le standfirst se propage seul à l'index
       de l'accueil, à la meta description, à l'OpenGraph et au JSON-LD :
       il n'est pas touché par la réécriture v85. */
    standfirst:
      "Une génération de dirigeants de PME devra transmettre. Ce que cela change pour qui conseille les cédants.",
    datePublished: "2026-08-04",
    corps: [
      {
        forme: "p",
        texte:
          "Une génération de dirigeants de PME françaises devra transmettre. Une grande partie d’entre eux n’a aucun successeur identifié.",
      },
      {
        forme: "p",
        texte:
          "Ce n’est pas une conjoncture. C’est une donnée démographique : elle se déroulera quelle que soit la santé de l’économie, elle ne tient pas au cycle.",
      },
      { forme: "intertitre", texte: "Un problème de temps, pas de bilan" },
      {
        forme: "p",
        texte:
          "Pour une entreprise saine, l’absence de relais n’est pas un problème comptable. Un dirigeant seul, sans enfant repreneur ni cadre prêt à prendre la suite, sait qu’il devra un jour transmettre. La plupart repoussent la question, faute d’interlocuteur et faute d’urgence apparente.",
      },
      {
        forme: "p",
        texte:
          "Jusqu’au jour où elle se pose d’un coup. Un problème de santé. Une lassitude. Une offre reçue, à laquelle il faut répondre.",
      },
      {
        forme: "p",
        texte:
          "Ce décalage, entre le moment où la transmission devient inévitable et celui où elle est traitée, est la zone où tout se joue. Une cession préparée plusieurs années à l’avance se négocie mieux, se structure mieux, et laisse au dirigeant le choix de son acquéreur. Une cession décidée dans l’urgence se fait au prix et aux conditions de celui qui se trouve là.",
      },
      {
        forme: "figure",
        nom: "decalage",
        legende:
          "Le même dirigeant, selon l’endroit de la ligne où la question lui est posée. Aucune durée n’est figurée : elle varie d’une entreprise à l’autre.",
        reperes: [
          "La transmission devient inévitable",
          "Elle est traitée",
          "La zone où tout se joue",
          "Préparée : le cédant choisit",
          "Dans l’urgence : il accepte",
        ],
      },
      { forme: "intertitre", texte: "Le marché visible est en retard d’une étape" },
      {
        forme: "p",
        texte:
          "Pour un cabinet de conseil en cession, cette vague représente un flux considérable d’opérations à venir. Il n’arrive pas de lui-même sur le bureau des conseils.",
      },
      {
        forme: "p",
        texte:
          "La majorité de ces dirigeants ne se déclarent nulle part. Ils ne consultent pas de site de cession, ne mandatent pas de banquier d’affaires, ne répondent à aucun appel d’offres.",
      },
      {
        forme: "exergue",
        texte:
          "Ils attendent, souvent sans le dire, que quelqu’un vienne poser la bonne question au bon moment.",
      },
      {
        forme: "p",
        texte:
          "Le marché visible des entreprises à vendre ne montre donc que les dirigeants déjà engagés dans un processus. La valeur est en amont, chez ceux qui n’ont encore rien annoncé mais dont la situation réunit déjà les conditions.",
      },
      {
        forme: "chute",
        texte:
          "Un cabinet subit son flux, ou il le construit. Il n’y a pas de troisième position.",
      },
    ],
  },
  {
    slug: "cessions-hors-marche",
    titre: "Pourquoi tant de cessions de PME se font hors marché",
    /* V80 : le chapeau est celui de la planche (« par aucun processus »
       au lieu de « jamais par un processus »). Non touché en v85. */
    standfirst:
      "Beaucoup de transmissions ne passent par aucun processus concurrentiel. Ce que cela coûte au cédant.",
    datePublished: "2026-08-04",
    corps: [
      {
        forme: "p",
        texte:
          "Contrairement à une idée répandue, beaucoup de cessions de PME ne donnent lieu à aucun processus formel. Pas d’appel d’offres, pas de mise en concurrence d’acquéreurs, souvent pas même de conseil du côté du vendeur.",
      },
      {
        forme: "p",
        texte:
          "Le dirigeant est approché en direct, par un concurrent, un fonds ou un repreneur. L’opération se noue de gré à gré, entre deux personnes dont une seule a déjà fait cela.",
      },
      { forme: "intertitre", texte: "Pour l’acquéreur, la situation idéale" },
      {
        forme: "p",
        texte:
          "Approcher un dirigeant isolé, avant que quiconque d’autre ne se manifeste, permet d’acheter sans surenchère. Le prix ne se fixe pas au niveau que le marché serait prêt à payer, mais à celui que le cédant, seul et sans point de comparaison, accepte.",
      },
      {
        forme: "p",
        texte: "L’écart entre les deux n’apparaît dans aucun document de l’opération.",
      },
      {
        forme: "figure",
        nom: "bifurcation",
        legende:
          "Les deux trajectoires possibles d’une même entreprise. Le site ne publie aucune part de marché : la figure dit une différence de situation, pas une fréquence.",
        reperes: [
          "Un dirigeant sans processus",
          "Approché en direct",
          "Un seul acquéreur, aucun point de comparaison",
          "Conseillé d’abord",
          "Plusieurs acquéreurs en face",
        ],
      },
      { forme: "intertitre", texte: "Ce que le cédant ne saura jamais" },
      {
        forme: "p",
        texte:
          "Une entreprise vendue sans mise en concurrence se cède souvent en dessous de sa valeur, faute d’un second acquéreur pour faire jouer les enchères. Le dirigeant qui a passé sa vie à construire son affaire en laisse une part sur la table.",
      },
      {
        forme: "exergue",
        texte:
          "Il n’a pas mal négocié. Il n’a jamais su qu’une négociation était possible.",
      },
      {
        forme: "p",
        texte:
          "C’est là que le rôle d’un conseil en cession prend tout son sens, et c’est là qu’il arrive le plus souvent trop tard. Quand un dirigeant contacte un cabinet, il a fréquemment déjà reçu une approche, parfois déjà accepté une lettre d’intention. Le conseil hérite d’une opération dont le cadre a été fixé par quelqu’un d’autre.",
      },
      { forme: "intertitre", texte: "Arriver avant" },
      {
        forme: "p",
        texte:
          "Un dirigeant accompagné dès la phase de réflexion conserve la maîtrise : il choisit son moment, structure son entreprise en vue de la cession, et se donne les moyens de mettre plusieurs acquéreurs en face. La différence ne se compte pas en points de négociation. Elle se voit dans le prix, et dans les conditions.",
      },
      {
        forme: "chute",
        texte:
          "Le conseil qui arrive avant a la relation. Celui qui arrive après négocie ce qu’un autre a déjà cadré.",
      },
    ],
  },
  {
    slug: "origination-cabinet-cession",
    /* V80 : titre et chapeau sont ceux de la planche ; ils servent à la
       fois la colonne de l'accueil et la page de l'article. L'ancien
       titre, « L'origination : le travail que personne dans un cabinet
       ne veut faire », reste dans l'historique. Le slug ne bouge pas, ni
       datePublished. Le corps est réécrit en v85. */
    titre: "L’origination dans les cabinets de cession",
    standfirst: "Pourquoi le repérage en amont reste difficile à tenir en interne.",
    datePublished: "2026-08-04",
    corps: [
      {
        forme: "p",
        texte:
          "Dans la plupart des cabinets de conseil en cession de taille modeste, l’origination, le fait d’aller chercher activement des dirigeants susceptibles de vendre avant qu’ils ne se manifestent, est un sujet connu, admis comme nécessaire, et presque jamais traité sérieusement.",
      },
      {
        forme: "p",
        texte: "Ce n’est pas une question de compétence. C’est une question de nature du travail.",
      },
      { forme: "intertitre", texte: "Un travail que personne ne réclame" },
      {
        forme: "p",
        texte:
          "L’origination systématique consiste à parcourir méthodiquement un territoire, à identifier des situations, à vérifier chaque piste, à écarter la grande majorité, pour ne retenir que quelques dossiers réellement pertinents. C’est lent, répétitif, sans gratification immédiate, à l’opposé de l’adrénaline d’une opération en cours.",
      },
      {
        forme: "p",
        texte: "Dans une équipe de quelques personnes, personne ne lève la main.",
      },
      { forme: "intertitre", texte: "Le cycle qui recommence" },
      {
        forme: "p",
        texte:
          "Ce travail échoit généralement aux profils juniors, pour qui il n’offre aucune trajectoire : on ne fait pas carrière en sourçant. Les meilleurs partent vite. Ils emportent avec eux la méthode qu’ils avaient fini par construire, et le cabinet recommence à zéro.",
      },
      {
        forme: "figure",
        nom: "cycle",
        legende:
          "Le cycle interne de l’origination, et l’endroit où il casse. Aucune durée, aucun effectif : la figure dit un enchaînement.",
        reperes: [
          "Un junior s’y met",
          "Il construit une méthode",
          "Il part",
          "La méthode part avec lui",
        ],
      },
      {
        forme: "p",
        texte:
          "Pour un associé, le calcul est vite fait. Une heure de son temps vaut davantage passée sur une opération avancée que sur le balayage d’un registre. Rationnellement, il préfère traiter les affaires qui arrivent plutôt que d’aller en chercher.",
      },
      {
        forme: "exergue",
        texte:
          "Le cabinet subit son flux, dépend des recommandations, et laisse dormir un gisement qu’il sait pourtant réel.",
      },
      {
        forme: "p",
        texte:
          "L’alternative interne coûte plus cher qu’on ne le croit. Un analyste dédié à ce seul travail, c’est un salaire chargé, du temps avant d’être utile, et un départ probable à moyen terme. Le tout pour un résultat non exclusif, que rien n’empêche un cabinet concurrent d’obtenir en parallèle.",
      },
      {
        forme: "chute",
        texte:
          "Le problème n’est pas de savoir qu’il faudrait le faire. C’est de trouver qui le fera, sans relâche, et pour un seul cabinet à la fois.",
      },
    ],
  },
]);

export function articleParSlug(slug: string): Article | undefined {
  return analyses.find((a) => a.slug === slug);
}

/* les deux autres analyses, pour le pied de page d'un article : la lecture
   ne s'arrête pas sur du vide, et c'est ce qui remplit le bas de la page */
export function autresAnalyses(slug: string): Article[] {
  return analyses.filter((a) => a.slug !== slug);
}
