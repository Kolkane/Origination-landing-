/* Les analyses sont une DONNÉE, pas trois pages en dur. De ce tableau
   dérivent l'index de l'accueil, les pages /analyses/[slug], le balisage
   Article et les entrées de sitemap. Ajouter un article, c'est ajouter une
   entrée ici, rien d'autre.

   datePublished ne s'affiche jamais à l'écran : les analyses sont
   volontairement non datées pour le lecteur. Elle ne sert qu'au balisage
   Article et au lastmod du sitemap. */

export type Article = {
  slug: string;
  titre: string;
  standfirst: string;
  corps: string[];
  datePublished: string; // ISO 8601, jamais affichée
};

export const analyses: Article[] = [
  {
    slug: "vague-transmission-pme",
    titre: "La vague de transmission des PME françaises",
    standfirst:
      "Une génération de dirigeants approche de la retraite. Ce que cela change pour qui conseille les cédants.",
    datePublished: "2026-08-04",
    corps: [
      "D’ici dix ans, environ 700 000 dirigeants de PME françaises partiront à la retraite. Près de la moitié n’a, à ce jour, aucun successeur identifié. Ce n’est pas une conjoncture, c’est une donnée démographique : elle se déroulera quelle que soit la santé de l’économie, parce qu’elle tient à l’âge des dirigeants et non au cycle.",
      "Pour une entreprise saine, l’absence de relais n’est pas un problème comptable. C’est un problème de temps. Un dirigeant seul, sans enfant repreneur ni cadre prêt à prendre la suite, sait qu’il devra un jour transmettre. La plupart repoussent la question, faute d’interlocuteur et faute d’urgence apparente, jusqu’au moment où elle se pose brutalement : un problème de santé, une lassitude, une offre reçue.",
      "Ce décalage entre le moment où la transmission devient inévitable et le moment où elle est traitée est précisément la zone où tout se joue. Une cession préparée plusieurs années à l’avance se négocie mieux, se structure mieux, et laisse au dirigeant le choix de son acquéreur. Une cession décidée dans l’urgence se fait au prix et aux conditions de celui qui se trouve là.",
      "Pour un cabinet de conseil en cession, cette vague représente un flux considérable d’opérations à venir. Mais ce flux n’arrive pas de lui-même sur le bureau des conseils. La majorité de ces dirigeants ne se déclarent nulle part. Ils ne consultent pas de site de cession, ne mandatent pas de banquier d’affaires, ne répondent pas à un appel d’offres. Ils attendent, souvent sans le dire, que quelqu’un vienne poser la bonne question au bon moment.",
      "Le marché visible des entreprises à vendre est donc, structurellement, un marché en retard : il ne montre que les dirigeants déjà engagés dans un processus. La valeur, pour qui sait la détecter, est en amont, chez ceux qui n’ont encore rien annoncé mais dont la situation indique qu’ils y viendront.",
      "C’est cette antériorité qui distingue un cabinet qui subit son flux d’un cabinet qui le construit.",
    ],
  },
  {
    slug: "cessions-hors-marche",
    titre: "Pourquoi tant de cessions de PME se font hors marché",
    standfirst:
      "La plupart des transmissions ne passent jamais par un processus concurrentiel. Ce que cela coûte au cédant.",
    datePublished: "2026-08-04",
    corps: [
      "Contrairement à une idée répandue, la majorité des cessions de PME ne donnent lieu à aucun processus formel. Pas d’appel d’offres, pas de mise en concurrence d’acquéreurs, souvent pas même de conseil du côté du vendeur. Le dirigeant est approché en direct, par un concurrent, un fonds ou un repreneur, et l’opération se noue de gré à gré.",
      "Pour l’acquéreur, c’est une situation idéale. Approcher un dirigeant isolé, avant que quiconque d’autre ne se manifeste, permet d’acheter sans surenchère. Le prix se fixe alors non pas au niveau que le marché serait prêt à payer, mais à celui que le cédant, seul et sans point de comparaison, accepte. L’écart entre les deux peut être considérable.",
      "Du côté du cédant, cette absence de processus a un coût rarement mesuré. Une entreprise vendue sans mise en concurrence se cède presque toujours en dessous de sa valeur, faute d’un second acquéreur pour faire jouer les enchères. Le dirigeant qui a passé trente ans à construire son affaire en laisse une part sur la table, non par mauvaise négociation, mais parce qu’il n’a jamais su qu’une négociation était possible.",
      "C’est là que le rôle d’un conseil en cession prend tout son sens, et c’est là qu’il arrive le plus souvent trop tard. Lorsqu’un dirigeant contacte un cabinet, il a fréquemment déjà reçu une approche, parfois déjà accepté une lettre d’intention. Le conseil hérite alors d’une opération dont le cadre est fixé par quelqu’un d’autre.",
      "Arriver avant l’acquéreur direct change entièrement la donne. Un dirigeant accompagné dès la phase de réflexion, avant toute approche, conserve la maîtrise : il choisit son moment, structure son entreprise en vue de la cession, et se donne les moyens de mettre plusieurs acquéreurs en face. La différence ne se mesure pas en points de négociation, mais en dizaines de pourcents de valeur.",
      "Le conseil qui arrive avant a la relation. Celui qui arrive après négocie ce qu’un autre a déjà cadré.",
    ],
  },
  {
    slug: "origination-cabinet-cession",
    titre:
      "L’origination : le travail que personne dans un cabinet ne veut faire",
    standfirst:
      "Tout le monde sait qu’il faudrait sourcer en amont. Presque personne ne le fait. Pourquoi.",
    datePublished: "2026-08-04",
    corps: [
      "Dans la plupart des cabinets de conseil en cession de taille modeste, l’origination, le fait d’aller chercher activement des dirigeants susceptibles de vendre avant qu’ils ne se manifestent, est un sujet connu, admis comme nécessaire, et presque jamais traité sérieusement. Ce n’est pas une question de compétence. C’est une question de nature du travail.",
      "L’origination systématique est ingrate. Elle consiste à parcourir méthodiquement un territoire, à identifier des situations, à vérifier chaque piste, à écarter la grande majorité, pour ne retenir que quelques dossiers réellement pertinents. C’est un travail lent, répétitif, sans gratification immédiate, à l’opposé de l’adrénaline d’une opération en cours. Dans une équipe de quelques personnes, personne ne le réclame.",
      "À cela s’ajoute un problème de structure. Ce travail échoit généralement aux profils juniors, pour qui il n’offre aucune trajectoire : on ne fait pas carrière en sourçant. Les meilleurs partent au bout de dix-huit mois, et emportent avec eux la méthode qu’ils avaient fini par construire. Le cabinet recommence à zéro.",
      "Et pour un associé, le calcul est vite fait. Une heure de son temps vaut davantage passée sur une opération avancée que sur le balayage d’un registre. Rationnellement, il préfère traiter les affaires qui arrivent plutôt que d’aller en chercher. Le résultat est connu : le cabinet subit son flux, dépend des recommandations et des approches entrantes, et laisse dormir un gisement qu’il sait pourtant réel.",
      "L’alternative interne coûte plus cher qu’on ne le croit. Un analyste dédié à ce seul travail représente un salaire chargé conséquent, plusieurs mois avant d’être utile, et un départ probable au terme de deux ans. Le tout pour un résultat non exclusif, que rien n’empêche un cabinet concurrent d’obtenir en parallèle.",
      "C’est cet écart, entre la nécessité reconnue de l’origination et l’incapacité pratique à la tenir dans la durée, qui explique pourquoi tant de cabinets restent à la merci de ce qui veut bien leur arriver. Le problème n’est pas de savoir qu’il faudrait le faire. C’est de trouver qui le fera, sans relâche, et pour un seul cabinet à la fois.",
    ],
  },
];

export function articleParSlug(slug: string): Article | undefined {
  return analyses.find((a) => a.slug === slug);
}
