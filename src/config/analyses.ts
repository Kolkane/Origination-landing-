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
export type NomFigure =
  | "decalage"
  | "bifurcation"
  | "cycle"
  /* v91, la quatrième analyse : la règle qui borne les DEUX bouts du
     mouvement, et le rôle qui change de côté */
  | "borne"
  | "bascule";

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
  | { forme: "figure"; nom: NomFigure; legende: string; reperes: string[] }
  /* v91 · LA CHRONOLOGIE. Sept faits datés à la suite se composaient en
     sept paragraphes de même longueur, c'est-à-dire exactement la platitude
     que la v85 a retirée des trois premiers articles. Une liste de faits
     datés est une FORME, pas de la prose : la date tient sa colonne, le
     fait la sienne, et les filets font le reste. Elle ne porte que des
     faits déjà publiés ailleurs, jamais un décompte du site. */
  | { forme: "chronologie"; entrees: { date: string; fait: string }[] };

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
  {
    slug: "consolidation-expertise-comptable",
    titre: "La consolidation de l’expertise comptable",
    /* Quatrième analyse, 19/09/2026. Trois écarts au texte source, chacun
       adossé à une règle de la charte : l’âge ne cause plus rien (v77), pas
       d’horizon affirmé (« en fin de cycle » retiré), et un dirigeant n’est
       pas une cible (v69). Les opérations citées sont des annonces
       publiques, et l’article le dit. */
    standfirst:
      "Six opérations sur des cabinets en huit semaines. Ce qu’un métier réglementé et récurrent révèle de la logique des consolidateurs.",
    datePublished: "2026-09-19",
    corps: [
      {
        forme: "p",
        texte:
          "Entre fin juillet et mi-septembre 2026, les annonces publiques ont recensé six opérations sur des cabinets d’expertise comptable français, et une septième sur l’éditeur d’un logiciel qui leur est destiné.",
      },
      {
        forme: "chronologie",
        entrees: [
          {
            date: "24 juillet",
            fait: "Un cabinet parisien d’environ 20 millions d’euros de chiffre d’affaires réalise son premier LBO (Impulsa).",
          },
          {
            date: "30 juillet",
            fait: "Un groupe parisien accompagné par un fonds atteint environ 42 millions de revenus après quatre acquisitions (Numéris, avec Strada Partners).",
          },
          {
            date: "3 août",
            fait: "Un groupe lyonnais d’environ 100 millions, adossé à un investisseur, reprend des implantations dont un cabinet francilien (Implid, avec EMZ).",
          },
          {
            date: "Début septembre",
            fait: "Un cabinet strasbourgeois d’environ 50 millions ouvre son capital à un minoritaire (Wema).",
          },
          {
            date: "4 septembre",
            fait: "Un groupe normand détenu par un fonds atteint environ 90 millions de revenus consolidés en acquérant deux cabinets dans le Sud-Est (Kerogo, avec Perwyn).",
          },
          {
            date: "7 septembre",
            fait: "Un groupe parisien d’expertise comptable, d’audit et de conseil financier reprend un confrère francilien (Aurys).",
          },
          {
            date: "19 septembre",
            fait: "L’éditeur d’un logiciel dédié aux cabinets, soutenu par un fonds, diversifie son offre par acquisition (MyUnisoft, avec Hg).",
          },
        ],
      },
      {
        forme: "p",
        texte:
          "Sept mouvements en huit semaines, tous sur des plateformes de 20 à 100 millions d’euros de revenus, tous avec un investisseur financier au capital. Ce n’est plus une suite d’anecdotes : c’est une consolidation installée, et elle a une logique qu’il vaut la peine de démonter.",
      },
      { forme: "intertitre", texte: "Pourquoi ce métier" },
      {
        forme: "p",
        texte:
          "Trois caractéristiques font de l’expertise comptable un terrain de consolidation presque idéal.",
      },
      {
        forme: "p",
        texte:
          "La récurrence, d’abord. Un cabinet vit de missions annuelles que ses clients ne peuvent pas ne pas commander : tenue, liasse, bilan, déclarations. Le chiffre d’affaires de l’année prochaine est, pour l’essentiel, déjà connu. C’est la caractéristique que les financeurs paient le plus cher, parce qu’elle permet de porter de la dette.",
      },
      {
        forme: "p",
        texte:
          "La fragmentation, ensuite. La profession compte des milliers de cabinets indépendants, dont une majorité de petite taille, dirigés par leur fondateur. Chaque cabinet racheté représente une part de marché acquise sans avoir à la conquérir.",
      },
      {
        forme: "p",
        texte:
          "La démographie, enfin. Une génération de dirigeants de cabinets devra transmettre, dans un métier où la succession interne n’est pas toujours possible : reprendre un cabinet suppose d’être soi-même inscrit à l’Ordre et de pouvoir financer une reprise.",
      },
      {
        forme: "p",
        texte:
          "Une quatrième s’ajoute depuis peu, la couche logicielle. Les outils de production comptable s’automatisent, ce qui déplace la marge des cabinets et rend la taille plus payante. L’opération sur MyUnisoft n’est pas un hasard de calendrier : l’éditeur et le cabinet se consolident en parallèle, parce que le même mouvement les touche.",
      },
      { forme: "intertitre", texte: "Ce que la réglementation change" },
      {
        forme: "p",
        texte:
          "C’est ici que le secteur se distingue des autres métiers en consolidation, et c’est ce qui échappe le plus souvent aux lectures rapides.",
      },
      {
        forme: "p",
        texte:
          "Le capital et les droits de vote d’une société d’expertise comptable doivent rester majoritairement détenus par des professionnels inscrits. Un fonds ne peut donc pas prendre le contrôle d’un cabinet comme il prendrait celui d’une entreprise de services ordinaire. Les structures observées le montrent : les investisseurs sont décrits comme accompagnant, épaulant, détenant une position minoritaire ou structurée, aux côtés d’experts-comptables qui conservent le contrôle réglementaire.",
      },
      {
        forme: "p",
        texte:
          "À l’entrée, la consolidation ne peut donc être menée que par des groupes eux-mêmes dirigés par des professionnels. Le consolidateur est un cabinet devenu grand, pas un financier venu de l’extérieur. Cela ralentit le mouvement par rapport à d’autres secteurs et réserve le rôle de plateforme à un petit nombre d’acteurs.",
      },
      {
        forme: "p",
        texte:
          "À la sortie, l’acquéreur suivant est soumis à la même contrainte. L’arbitrage de multiple qui fait l’attrait ordinaire du regroupement, acheter petit à un multiple bas et revendre gros à un multiple élevé, est borné : le groupe consolidé ne pourra être cédé qu’à un autre groupe de professionnels, ou à un autre investisseur acceptant une position non contrôlante. Le pool d’acquéreurs à la sortie est plus étroit qu’ailleurs, et le prix s’en ressent.",
      },
      {
        forme: "figure",
        nom: "borne",
        legende:
          "La même règle s’applique aux deux bouts du mouvement. Aucune durée, aucun multiple, aucun nombre d’acquéreurs n’est figuré : la figure dit ce qui est fermé, pas de combien.",
        reperes: [
          "Le capital reste majoritairement détenu par des professionnels inscrits",
          "À l’entrée",
          "Un groupe lui-même dirigé par des professionnels",
          "Pas un financier venu de l’extérieur",
          "À la sortie",
          "Un autre groupe de professionnels, ou un investisseur non contrôlant",
          "Pas le pool ordinaire des acquéreurs",
        ],
      },
      {
        forme: "exergue",
        texte:
          "Le consolidateur est un cabinet devenu grand, pas un financier venu de l’extérieur.",
      },
      {
        forme: "p",
        texte:
          "Le secteur offre donc aux consolidateurs une récurrence exceptionnelle et une fragmentation abondante, mais leur retire une partie de la plus-value de sortie. C’est cet équilibre qui explique la forme des opérations observées : des plateformes régionales de taille intermédiaire, adossées à des fonds en position minoritaire, qui croissent par acquisitions de cabinets locaux plutôt que par grands rapprochements.",
      },
      { forme: "intertitre", texte: "Ce que cela change pour un cédant" },
      {
        forme: "p",
        texte:
          "Pour le dirigeant d’un cabinet indépendant, la situation a une propriété rare : les acquéreurs sont identifiés. Un cabinet de dix à cinquante collaborateurs dans une région donnée sait, aujourd’hui, quelles plateformes y opèrent et à quel rythme elles achètent. Ce n’est le cas ni dans le bâtiment, ni dans les services numériques, ni dans le conseil, où le pool d’acquéreurs est plus diffus.",
      },
      {
        forme: "p",
        texte:
          "La contrepartie est symétrique : ces plateformes savent aussi quels cabinets sont cessibles, et elles les approchent. Un cédant qui ne s’est pas préparé reçoit une offre avant d’avoir organisé une comparaison. C’est la situation décrite dans une analyse précédente sur les cessions hors marché : une transaction de gré à gré, sans mise en concurrence, dont le coût pour le cédant est réel et rarement mesuré.",
      },
      { forme: "intertitre", texte: "Ce que cela change pour un conseil" },
      {
        forme: "p",
        texte:
          "D’abord, un déplacement de rôle. Le cabinet d’expertise comptable était, pour le conseil en cession, un prescripteur : le premier confident du dirigeant de PME, celui qui oriente vers un intermédiaire au moment de vendre. Il se retrouve lui-même du côté des sociétés à reprendre, avec les mêmes questions de calendrier, de structuration et de valeur que ses propres clients. Le conseil qui sait accompagner un expert-comptable cédant dispose d’un accès naturel à une population qu’il connaît déjà.",
      },
      {
        forme: "figure",
        nom: "bascule",
        legende:
          "Le même cabinet, vu de deux côtés de la même table. Le rôle d’hier ne disparaît pas, un second s’ajoute : la figure ne dit ni quand, ni pour combien de cabinets.",
        reperes: [
          "Le cabinet d’expertise comptable",
          "Prescripteur",
          "Premier confident du dirigeant de PME, il oriente vers un intermédiaire au moment de vendre.",
          "Société à reprendre",
          "Mêmes questions de calendrier, de structuration et de valeur que ses propres clients.",
        ],
      },
      {
        forme: "p",
        texte:
          "Ensuite, un besoin. Les plateformes en consolidation ont, structurellement, un problème d’alimentation : elles doivent trouver, chaque année, plusieurs cabinets cessibles au bon calibre, dans les régions qu’elles ont choisies. Leur flux repose sur le réseau et sur l’approche directe. Or la population qu’elles cherchent, celle des cabinets dirigés par leur fondateur et sans relais identifié, est précisément celle qui se lit dans les registres avant de se déclarer.",
      },
      { forme: "intertitre", texte: "Ce que nous ne savons pas" },
      {
        forme: "p",
        texte:
          "Les opérations citées proviennent d’annonces publiques. Leurs montants, leurs structures exactes et les conseils intervenants ne sont pas accessibles. Le régime de détention du capital évolue et doit être vérifié au texte en vigueur avant toute application à un cas particulier.",
      },
      {
        forme: "p",
        texte:
          "Sources : annonces publiques et presse spécialisée du corporate finance, juillet à septembre 2026.",
      },
      {
        forme: "chute",
        texte:
          "Sept mouvements en huit semaines décrivent une tendance. Ils n’en disent pas le rythme annuel, et c’est ce que nous suivons.",
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
