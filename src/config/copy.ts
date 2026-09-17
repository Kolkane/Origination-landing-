import { brand } from "./brand";
import { typoDeep } from "./typo";

/* un seul libellé d’appel sur tout le site : trois copies indépendantes avaient
   déjà produit une divergence en v13 */
const CTA = "Réserver un échange";

export type NomIcone = "couverture" | "veille" | "exclusivite";

/* v68 · la page /dirigeants. Un bloc porte un intitulé et des paragraphes ;
   celui des trois possibilités porte en plus une liste, dont chaque entrée
   ouvre sur sa décision en toutes lettres. */
export type BlocDirigeant = {
  titre: string;
  corps: string[];
  choix?: { fort: string; suite: string }[];
};

export type SectionLegale = {
  titre: string;
  /* v68 : un renvoi facultatif, sur le modèle de l'email ci-dessous. Il
     sert à pointer la page /dirigeants depuis la notice : la même
     information, écrite pour la personne concernée et non pour le
     juriste. L'art. 14 demande une information « aisément accessible ». */
  lien?: { label: string; href: string };
  /* une chaîne, ou plusieurs paragraphes. Les mentions légales n'en
     utilisent qu'une, la page Confidentialité en a besoin de plusieurs. */
  corps: string | string[];
  email?: string;
};

/* V80 · LES QUATRE ICÔNES de la section service. Le nom dit le dessin ;
   Icones.tsx le rend en SVG inline, sans fichier ni bibliothèque. */
export type NomIconeService = "cabinet" | "carte" | "registre" | "chemise";

/* V80 · UNE RUBRIQUE DU DOSSIER SPÉCIMEN. Cinq formes, parce que les huit
   rubriques n'ont pas la même nature : des définitions, un tableau de
   comptes, une chronologie datée, de la prose, des statuts de
   vérification. La forme est déclarée ici, le composant ne fait que la
   rendre : c'est la règle « rien codé en dur dans le JSX » appliquée à
   une structure et pas seulement à un texte. */
export type RubriqueDossier = { titre: string } & (
  | { forme: "definitions"; lignes: { k: string; v: string }[] }
  | {
      forme: "comptes";
      colonnes: string[];
      lignes: { k: string; valeurs: string[]; gris?: boolean }[];
    }
  | { forme: "chronologie"; lignes: { date: string; ev: string }[] }
  | { forme: "prose"; paragraphes: string[]; note?: string }
  | { forme: "statuts"; lignes: { k: string; v: string }[]; note: string }
);

/* Copy v8 : reprise AU MOT PRÈS de MAQUETTE-V8.html (source de vérité).
   Règle v8 : aucun tiret cadratin ni demi-cadratin dans les textes.
   V80 : les sections de l'accueil sont reprises AU MOT PRÈS des planches
   MAQUETTE-V80-ACCUEIL.html et MAQUETTE-V80-ACCUEIL-MOBILE.html. */
export const copy = typoDeep({
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`,
    description:
      "Origination externe pour cabinets M&A sell-side : nous lisons les actes déposés au registre, y compris ceux que personne n’ouvre, et nous livrons des dossiers d’approche datés et sourcés. Un cabinet par périmètre.",
  },
  /* V80 · LA NAVIGATION, partagée par l'en-tête et par la colonne « Le
     site » du pied de page : six entrées, dans l'ordre de la planche. Les
     ancres portent le « / » pour servir aussi depuis les pages intérieures
     (lot 4), où l'en-tête sera le même. */
  nav: {
    aria: "Navigation principale",
    haut: "/#haut",
    liens: [
      { label: "Le service", href: "/#service" },
      { label: "Le dossier", href: "/#dossier" },
      { label: "Méthode", href: "/#methode" },
      { label: "Conditions", href: "/#conditions" },
      { label: "Analyses", href: "/#analyses" },
      { label: "À propos", href: "/#apropos" },
    ],
    /* le menu mobile : le bouton, son intitulé accessible dans les deux
       états, le bouton de fermeture du panneau et les libellés des
       coordonnées qu'il porte. Le panneau n'est pas dans la planche
       (lot 1, décision consignée dans CLAUDE.md). */
    menu: "Menu",
    menuOuvrir: "Ouvrir le menu",
    menuFermer: "Fermer le menu",
    fermer: "Fermer",
    coordTel: "Par téléphone",
    coordMail: "Par email",
  },
  /* V80 · LE HERO, au mot près de la planche : un titre, un sous-titre, un
     lien souligné vin vers le dossier, et la légende de la vidéo, qui ne
     décrit que le sujet : ni l'origine ni la durée du média ne sont
     revendiquées (arbitrage Vincent, v8-4). */
  hero: {
    titre: "Origination sell-side pour les cabinets M&A",
    sous: "Les PME à approcher, repérées au registre et livrées en dossiers vérifiés. Un seul cabinet par périmètre.",
    lien: { label: "Voir un dossier spécimen", href: "/#dossier" },
    legende: "Plongeon imbrin en chasse",
  },
  /* V80 · CE QUE FAIT IMBRIN RESEARCH, au mot près de la planche : une
     intro, puis quatre entrées à icône. « icone » nomme le dessin, il
     est rendu par Icones.tsx : aucun fichier, aucune bibliothèque. */
  service: {
    titre: "Ce que fait Imbrin Research",
    intro:
      "Repérer les sociétés à approcher avant qu’un processus soit lancé suppose une lecture régulière des registres et des actes, difficile à tenir en interne à côté des dossiers en cours. Imbrin Research assure ce travail pour votre cabinet, sur un périmètre convenu ensemble.",
    entrees: [
      {
        icone: "cabinet",
        titre: "Les cabinets",
        texte:
          "Cabinets de conseil en cession small-cap et family offices. L’associé traite les dossiers ; Imbrin Research les repère.",
      },
      {
        icone: "carte",
        titre: "Le périmètre",
        texte:
          "Une région et une typologie d’entreprises, arrêtées avec vous et inscrites au devis. Réservé à un seul cabinet tant que le contrat court.",
      },
      {
        icone: "registre",
        titre: "Les registres",
        texte:
          "RNE, SIRENE, BODACC et comptes déposés. Les actes sont ouverts et lus, y compris lorsqu’il s’agit d’un scan.",
      },
      {
        icone: "chemise",
        titre: "Le dossier",
        texte:
          "Un dossier d’approche par société retenue, vérifié le jour de sa livraison. Les coordonnées portent leur statut de vérification.",
      },
    ] as { icone: NomIconeService; titre: string; texte: string }[],
  },
  /* V80 · LE DOSSIER D'APPROCHE, au mot près de la planche : bande
     d'encre, description, couverture cliquable, bouton, et le spécimen
     lui-même en huit rubriques dans le popup.
     LE SPÉCIMEN EST FICTIF et le dit à QUATRE endroits, tous visibles :
     le second paragraphe de la bande, le pied de la couverture, la méta
     de l'en-tête du document et son pied. Ne jamais en retirer un.
     Les valeurs sont inventées ; la charte d'honnêteté les autorise à
     ce titre et à ce titre seulement (chiffre d'un exemple marqué tel).
     Aucune coordonnée réelle n'y figure : la rubrique 7 ne porte que des
     STATUTS de vérification, pas des numéros. */
  dossier: {
    titre: "Le dossier d’approche",
    texte:
      "Chaque société retenue fait l’objet d’un dossier écrit, que l’associé lit avant son premier appel : identité, trois exercices de comptes, structure de détention, chronologie datée des actes, angle d’approche, coordonnées avec leur statut, et ce que les sources ne permettent pas d’établir.",
    sous:
      "Le spécimen est fictif : société, personnes et chiffres sont inventés. En rendez-vous, un dossier réel de votre périmètre est présenté, en version anonymisée.",
    bouton: "Lire le dossier spécimen",
    couverture: {
      marque: `${brand.MARQUE} ${brand.SUFFIXE}`,
      label: "Dossier d’approche",
      titre: "Établissements Vasseur",
      activite: "Génie climatique, 60 à 99 salariés",
      region: "Région exemple",
      specimen: "Spécimen, données fictives",
      confidentiel: "Confidentiel",
    },
    popup: {
      titre: "Dossier d’approche, spécimen",
      pdf: "Version PDF",
      fermer: "Fermer",
      marque: `${brand.MARQUE} ${brand.SUFFIXE}`,
      metaLigne1: "Dossier d’approche",
      metaLigne2: "Spécimen, données fictives",
      societe: "Établissements Vasseur",
      region: "Région exemple",
      sousTitre: "Génie climatique, SAS, 60 à 99 salariés. Dossier établi le 07/2026.",
      rubriques: [
        {
          titre: "1. Identité",
          forme: "definitions",
          lignes: [
            { k: "Dirigeant", v: "Gérard Vasseur, président, 63 ans" },
            { k: "Capital", v: "Détenu en totalité par le dirigeant depuis 2011" },
            { k: "Forme", v: "SAS depuis 03/2026, titres cessibles" },
            { k: "Immobilier", v: "Murs d’exploitation logés dans une SCI depuis 2023" },
          ],
        },
        {
          titre: "2. Comptes déposés",
          forme: "comptes",
          colonnes: ["Exercice clos au 31/12", "2023", "2024", "2025"],
          lignes: [
            { k: "Résultat net", valeurs: ["510 K€", "590 K€", "640 K€"] },
            {
              k: "Chiffre d’affaires",
              valeurs: ["Sous option de confidentialité depuis 2021"],
              gris: true,
            },
            { k: "Trésorerie au 31/12/2025", valeurs: ["1,9 M€"] },
            { k: "Fonds de roulement", valeurs: ["2,1 M€"] },
            { k: "Dettes financières / capitaux propres", valeurs: ["0,2"] },
          ],
        },
        {
          titre: "3. Détention",
          forme: "prose",
          paragraphes: [
            "Aucune entrée d’associé et aucun mouvement de titres depuis la reprise de 2011, jusqu’à l’acte de mars 2026. L’affaire est saine : trois exercices en hausse, un endettement financier faible. Les murs d’exploitation ont été isolés dans une SCI en 2023 ; l’acte est daté et figure à la chronologie.",
          ],
        },
        {
          titre: "4. Chronologie des actes déposés",
          forme: "chronologie",
          lignes: [
            { date: "1998", ev: "Création, transmission familiale" },
            { date: "2011", ev: "Reprise par le dirigeant actuel" },
            { date: "2023", ev: "Constitution d’une SCI, murs d’exploitation isolés" },
            {
              date: "03/2026",
              ev: "Transformation en SAS, titres rendus cessibles, acte déposé",
            },
            { date: "04/2026", ev: "Dépôt des comptes clos au 31/12/2025" },
            {
              date: "07/2026",
              ev: "Vérification au registre : dirigeant actif, aucun mouvement de contrôle sur 24 mois",
            },
          ],
        },
        {
          titre: "5. Angle d’approche",
          forme: "prose",
          paragraphes: [
            "La valeur de l’entreprise repose sur son dirigeant, qui a 63 ans. L’échange peut s’ouvrir sur la continuité de l’exploitation, avant toute question de cession.",
            "Les titres viennent d’être rendus cessibles : le geste est daté, l’acte est au registre. Ce que le dirigeant prépare, l’acte ne le dit pas. C’est la première question à lui poser.",
          ],
        },
        {
          titre: "6. Ce que les sources n’établissent pas",
          forme: "prose",
          paragraphes: [
            "Le chiffre d’affaires est sous option de confidentialité depuis 2021 : une fourchette est donnée, pas un montant. Les deux enfants du dirigeant sont hors de l’entreprise ; rien n’indique s’ils constituent une piste de reprise. Aucun acte ne renseigne l’intention du dirigeant.",
          ],
        },
        {
          titre: "7. Coordonnées",
          forme: "statuts",
          lignes: [
            { k: "Mobile", v: "Vérifié le 07/2026" },
            { k: "Email nominatif", v: "Vérifié le 07/2026" },
            { k: "Ligne directe", v: "Non vérifiée" },
          ],
          note:
            "Coordonnées masquées dans le spécimen. Elles proviennent de fournisseurs sous contrat ; chaque ligne porte son statut de vérification.",
        },
        {
          titre: "8. Sources",
          forme: "prose",
          paragraphes: [
            "Registre national des entreprises (INPI) : extrait et actes déposés. Comptes annuels déposés, exercices 2023 à 2025. BODACC. Répertoire SIRENE (INSEE).",
          ],
          note:
            "Information des personnes : article 14 du RGPD, notice accessible sur la page Confidentialité du site.",
        },
      ] as RubriqueDossier[],
      pied: {
        specimen: "Spécimen. Société, personnes et chiffres inventés.",
        confidentiel: "Confidentiel",
      },
    },
  },
  /* v15 : « Le constat » et la bande de chiffres fusionnés en un seul geste.
     L'ancrage national est la seule preuve de marché sourcée à un tiers, il
     précède l'entonnoir régional qui, lui, est un ordre de grandeur à nous. */
  entonnoir: {
    kicker: "Le filtre",
    titreAvant: "Tout un marché, réduit à votre ",
    titreItalique: "périmètre",
    /* v50 : LA TOISE — l'intro absorbe la sortie (la raison de ne pas
       appeler) et porte seule tout le récit ; le reste est l'instrument. */
    /* v72 : UN DÉCLENCHEUR, QUATRE LECTURES (backtest national, 14/09/2026).
       L'acte déposé et daté déclenche la lecture ; périmètre, dirigeant,
       détention et relais pèsent, ils n'éliminent pas. Le fait daté passe
       en tête de la toise. Le « 45 ans » est un exemple posé par Vincent
       dans sa phrase, pas un chiffre mesuré : il vaut par décision. */
    intro:
      "Le marché visible est un marché en retard : la valeur est chez ceux qui n’ont rien annoncé. Un déclencheur, quatre lectures. Le déclencheur : un acte déposé, daté, lu. Les lectures : qui dirige, qui détient, qui pourrait prendre la suite, dans le périmètre que vous avez arrêté. Elles pèsent, elles n’éliminent pas. Un dirigeant de 45 ans qui vient de rendre ses titres cessibles est un dossier. Ce qui sort après lecture sort avec sa raison écrite : la raison de ne pas appeler est livrée aussi.",
    /* l'ancrage porte le SOUS-TOTAL PME, pas les 370 000 tous formats : le
       marché d'Imbrin, ce sont les 58 000. L'énoncé est fondé sur l'INTENTION
       déclarée, pas sur l'âge des dirigeants : le critère de l'âge est
       précisément celui que les travaux du secteur donnent pour mauvais
       prédicteur de cession. L'écart 370 000 / 130 000 porte sur l'ensemble
       du marché et n'est jamais rapporté aux 58 000. */
    ancrage: `Les dirigeants de 58 000 PME comptent transmettre d’ici 2030, sur un marché de 370 000 entreprises. Au rythme actuel, 130 000 aboutiraient.`,
    ancrageSource: `Bpifrance Le Lab · CCI France · CMA France · C.R.A · 27 novembre 2025 · ≈ 5 000 réponses`,
    /* refonte 2026-08, second temps : la grammaire « entonnoir » supposait
       des quantités, il n'y en a plus par décision. Cascade de quatre
       critères dans la grammaire du dossier A4 : filets fins, label en
       petites capitales espacées, une phrase en serif par marche. */
    ariaCriteres: "Les cinq critères du périmètre",
    /* v50d (texte de Vincent, 27/08) : le terminus est LE DOSSIER —
       une société qui passe les cinq critères devient un dossier,
       l'unité du produit, pas une fournée. */
    finLbl: "Le dossier",
    /* v72 : le fait daté passe EN TÊTE, c'est lui qui déclenche ; les
       quatre lectures suivent, et le relais est écrit pour ce qu'il est,
       une lecture, pas un filtre. « num » n'est plus qu'une clé React
       depuis la v51, il suit l'ordre. */
    criteres: [
      {
        num: "01",
        label: "Le fait daté",
        texte:
          "Un acte déposé, jamais une intention supposée. C’est lui qui déclenche la lecture.",
      },
      {
        num: "02",
        label: "Le périmètre",
        texte:
          "Région et typologie d’entreprises, arrêtées avec vous. C’est lui que nous mesurons, pas un marché théorique.",
      },
      {
        num: "03",
        label: "Le dirigeant",
        texte:
          "Qui dirige, depuis quand, dans quelle configuration : lu au registre, pas déclaré.",
      },
      {
        num: "04",
        label: "La détention",
        texte: "Qui tient le capital, quels mouvements de titres. Lu dans les actes, pas déduit d’une base.",
      },
      {
        num: "05",
        label: "Le relais",
        texte: "Qui pourrait prendre la suite, au capital ou aux mandats. Une lecture, pas un filtre.",
      },
    ],
    piedAvant: "Combien dans votre région ? ",
    piedItalique: "Nous les comptons avant que vous signiez.",
    /* la chute est pleine largeur, la note passe en corps normal sous
       elle : fini le flottement bas-droite du pied de section */
    /* v60 : « et livré avec chaque lot » est retiré. La section « ce que
       nous ne faisons pas » porte désormais la livraison du taux d’écart,
       et sa suite, la publication à dix-huit mois. Ici la note dit ce
       qu’elle est seule à dire : la mesure se fait sur VOTRE périmètre. */
    note: "Le taux d’écart à la vérification est mesuré sur votre périmètre. Ce qui reste est livré. Rien d’autre.",
    /* le stock et le flux. Sans cette distinction, un prospect divise le
       stock par le rythme mensuel, conclut que trois mois lui suffisent, et
       lit dans la page une invitation à partir à l'échéance de son
       engagement. Aucun chiffre ici, ni de stock ni de flux : le stock est
       compté au devis, le flux est constaté. v66 : « le plancher protège »
       est retiré de ce raisonnement, le plancher mensuel est mort avec le
       modèle au volume (v65). Ce qui protège désormais, c'est qu'un mois
       sans dossier livré n'est pas facturé. */
    /* v45 : « rattrapage » et « veille » sortent du vocabulaire de la
       section — on parle de LIVRAISONS (arbitrage Vincent, 27/08) */
    /* v50d (texte de Vincent, 27/08) : plus de « première livraison »
       ni de fournée de départ — une lecture continue. Le tiret cadratin
       du brief est transposé en deux-points, règle de charte. */
    chute1:
      "Les dossiers sortent un par un, au fur et à mesure que la lecture les trouve : qu’une situation soit en place depuis des mois dans votre périmètre ou qu’elle vienne de basculer. Même filtre, même exigence, même dossier : il n’y a pas de fournée de départ puis un régime de croisière, il y a une lecture continue de votre périmètre.",
    chute2:
      "Ce qu’il contient est compté au devis. Et un mois sans dossier livré n’est pas facturé.",
  },
  /* V80 · LA MÉTHODE, au mot près de la planche : trois étapes
     numérotées sur filets d'encre, une note, un lien. Les numéros
     reviennent (la v51 les avait retirés) : ils sont l'un des quatre
     emplois du vin de la V80, et une méthode se lit dans l'ordre. */
  methode: {
    titre: "Méthode",
    etapes: [
      {
        titre: "Le périmètre",
        texte:
          "Région, typologie et taille d’entreprises sont arrêtées avec vous. Le périmètre est ensuite mesuré : le devis indique ce qu’il contient, avant tout engagement.",
      },
      {
        titre: "La lecture",
        texte:
          "Les sociétés sont repérées à partir des actes déposés au registre. Chaque cas est repris à la main : l’acte est ouvert et lu, y compris lorsqu’il s’agit d’un scan.",
      },
      {
        titre: "La livraison",
        texte:
          "Le jour de la livraison, la fiche au registre et l’acte sont vérifiés à nouveau. Si un élément déconseille l’approche, par exemple une société déjà conseillée ou filiale d’un groupe, il figure au dossier.",
      },
    ],
    note: "Les critères de repérage sont mesurés sur l’historique national des transmissions de PME.",
    /* le lien de la planche pointe sur la section elle-même : il n'y a
       pas de page « méthode en détail ». Porté tel quel, signalé au
       rapport du lot 2, à trancher. */
    lien: { label: "La méthode en détail", href: "#methode" },
  },
  /* ============================================================
     v60 · CE QUE NOUS NE FAISONS PAS. La section avait existé sous le
     nom « Nos engagements », elle est morte en v52 ; elle revient en
     bande compacte, une seule rangée, sans paragraphe et sans icône.
     Le dispositif est la MENTION RAYÉE : un terme barré d'un trait fin
     en vin, et sous lui la ligne courte qui le remplace. C'est le geste
     du registre, on ne gomme pas une entrée, on la raye et on écrit à
     côté. Pas une fiche produit, pas une liste de promesses.
     Le quatrième item porte le seul engagement que la v59 avait laissé
     sans domicile : voir le pied.
     Planche : MAQUETTE-V60-NEFAITPAS.html, qui fait foi.
     ============================================================ */
  neFaitPas: {
    kicker: "Ce que nous ne faisons pas",
    items: [
      /* v75 : le remplacement dit les deux moitiés de la mesure, les faits
         datés et les critères mesurés, et ferme sur ce qui n'est jamais
         livré. Le mot est la variable de mise en page de cette bande
         (v60b) : la hauteur se remesure sur le build. */
      {
        non: "Scores prédictifs",
        oui: "Des faits datés, et des critères mesurés. Aucun score livré.",
      },
      {
        non: "Contact du patrimoine privé",
        /* v63 : le « oui » affirmait un passage par le standard qui n'a
           jamais eu lieu. Le « non » au-dessus reste vrai, il n'a pas
           bougé : le patrimoine privé n'est pas ciblé. */
        oui: "Le dirigeant dans sa fonction, rien d’autre.",
      },
      {
        non: "Données grises",
        oui: "Registres publics, fournisseurs sous contrat.",
      },
      {
        non: "Chiffres invérifiables",
        oui: "Ce que nous publions, nous le mesurons.",
      },
    ],
    /* LE SUIVI DES COHORTES REVIENT ICI, et c'est le seul endroit du site
       qui le porte. L'amendement v59 avait supprimé la question de FAQ qui
       l'abritait en écrivant « l'engagement ne figure plus nulle part, s'il
       doit revivre il lui faut un nouvel endroit : il n'en a aucun ».
       Il en a un. Ne pas le déplacer sans lui en trouver un autre. */
    pied:
      "Le taux d’écart de chaque lot est livré au client, et publié ici dès qu’une première cohorte atteint dix-huit mois.",
  },

  /* v15 · B5 : ce ne sont pas deux offres égales, la structure le dit.
     L'origination est le produit, le mandat un complément ponctuel. */
  offre: {
    kicker: "L’offre",
    statement: "Deux façons de travailler ensemble",
    /* la définition gouverne les DEUX offres : elle est en tête de section,
       pas derrière la seconde où on la lisait comme une clause du mandat */
    definition: {
      k: "Un périmètre",
      texte:
        "Un périmètre, c’est une région et une typologie d’entreprises, arrêtées avec vous à l’appel et inscrites au devis. Sur ce périmètre, vous êtes seul servi tant que le contrat court. Un second périmètre reste possible.",
    },
    principal: {
      nom: "L’Origination",
      ancre: "origination",
      lead: "Nous tenons votre périmètre sous veille : quand la situation d’une société réunit les conditions au registre, le dossier d’approche arrive sur votre bureau, vérifié.",
      /* v65 : LE PRIX SORT, LA STRUCTURE RESTE. Le site donne désormais la
         forme de la rémunération et jamais un nombre ni un pourcentage :
         tout chiffre est renvoyé au devis. Le grand nombre et son « à
         partir de » sont remplacés par ce principe, et l'arithmétique qui
         ramenait le mensuel à l'année n'a plus d'objet, faute de mensuel
         affiché. */
      principe:
        "Le prix suit le périmètre. Il est mesuré et annoncé avant tout engagement.",
      /* v47 : LE DIPTYQUE — le corps en paragraphe devient la FICHE du
         devis, tabulée sur filets comme une pièce. v65 : la fiche porte
         désormais périmètre, exclusivité, RÉMUNÉRATION, engagement,
         PROTECTION et veille. Le plancher en est sorti, il appartenait au
         modèle au volume ; le grand énoncé du panneau n'est plus « pas de
         commission » mais la frontière de rôle qui l'a remplacé. */
      fiche: {
        rows: [
          {
            k: "Périmètre",
            v: "Une région, une typologie d’entreprises, arrêtés avec vous à l’appel.",
          },
          {
            k: "Exclusivité",
            v: "Un seul cabinet servi tant que le contrat court.",
          },
          /* v65 : les trois composantes de la rémunération, tabulées comme
             le reste de la fiche. Aucune n'est chiffrée ici : elles le sont
             au devis, avant signature. */
          {
            k: "Rémunération",
            v: "Trois composantes, chiffrées au devis, avant signature : un retainer mensuel modeste, qui paie l’exclusivité de votre périmètre et la veille ; un fee à la signature de chaque mandat obtenu sur un dossier livré ; une part des honoraires de succès au closing.",
          },
          {
            k: "Engagement",
            v: "Six mois.",
          },
          /* v65 : la protection du dossier livré. Elle survit au contrat,
             c'est ce qui la rend utile de part et d'autre. */
          {
            k: "Protection",
            v: "Chaque dossier livré reste protégé vingt-quatre mois : un mandat signé avec une société que nous vous avons apportée nous est dû, contrat en cours ou non.",
          },
          {
            k: "Veille",
            v: "Quand une situation bascule, le dossier suit, vérifié, à date annoncée.",
          },
        ],
        livrableLbl: "Livrable",
        livrable: "Le dossier d’approche",
        note: "Le volume de votre périmètre est mesuré et annoncé au devis, avant tout engagement.",
      },
    },
    complement: {
      nom: "Le mandat de recherche",
      lead: "Quand un mandat de recherche arrive sur votre bureau, nous l’alimentons à la mission : vos critères, une shortlist de sociétés vérifiées, livrée à la date convenue à la mission.",
      /* v65 : le montant par mission sort, comme le reste. */
      prix: "À la mission",
      metaLigne1: "Rémunération fixée au devis",
      metaLigne2: "Hors périmètres déjà sous exclusivité",
    },
    pied: {
      /* v65 : « pas de commission sur la transaction, jamais » est MORT, et
         la phrase qui le suivait l'était avec lui : la rémunération dépend
         désormais du closing, par la part des honoraires de succès. Le
         principe qui la remplace n'est pas une promesse de prix, c'est une
         frontière de rôle, et elle tient : nous apportons le dossier, le
         cabinet traite l'opération. */
      fort: "Notre rémunération au succès est déclarée au contrat.",
      suite:
        "Nous n’intervenons jamais dans la transaction elle-même : ni conseil, ni négociation. L’information des personnes, le registre d’opposition et l’opt-out sont pris en charge.",
    },
    cta: CTA,
  },
  /* v52 : la section engagements est supprimée (arbitrage Vincent,
     27/08) — ses quatre principes vivent ailleurs : scores prédictifs
     dans la méthode, premier contact et données grises dans la FAQ
     RGPD, opt-out dans le pied de l'offre, chiffres dans la mesure. */
  /* v53 : la section mesure est supprimée (arbitrage Vincent, 27/08) —
     deux de ses trois énoncés étaient devenus des redites (zéro chiffre
     générique : FAQ ; taux d'écart par lot : note du filtre) et le
     troisième, le SUIVI DES COHORTES, avait déménagé en FAQ.
     v59 : CETTE PHRASE N'EST PLUS VRAIE. La question qui le portait, « Que
     devient un dossier après la livraison ? », est supprimée sur arbitrage
     du 29/08. Le suivi des cohortes — dossiers suivis jusqu'à leur issue,
     résultats communiqués échecs compris, publication à dix-huit mois — ne
     figure donc PLUS NULLE PART sur le site. Ce n'est pas un oubli, c'est
     une suppression demandée et signalée. Si l'engagement doit revivre, il
     lui faut un nouvel endroit, il n'en a plus. */
  /* v15 : composition centrée, seul endroit centré d'une page alignée à
     gauche de bout en bout. La citation en grand remplace le statement :
     elle disait déjà « un seul interlocuteur », le dire deux fois à la
     même échelle aurait fait doublon. */
  fondateur: {
    kicker: "Vous parlez au fondateur, pas à un SDR.",
    portraitAlt: "Vincent Fournier, fondateur",
    citation:
      "« Au téléphone comme en livraison, vous avez un seul interlocuteur : celui qui a construit la machine et qui vérifie vos dossiers. »",
    /* « pipeline industrialisé » surclamait : 73 % des actes sont des scans,
       la lecture est humaine, et c'est l'argument, pas un aveu. */
    corps:
      "La détection est outillée ; la lecture des actes, elle, se fait à la main.",
    nom: "Vincent Fournier, fondateur",
    lieu: "entre Paris et Bayonne",
    /* v57 : le libellé qui annonce le numéro, devenu le terme de la
       section. « id » et « linkedin » sont partis au pied de page. */
    appelLbl: "Appelez directement",
  },
  faq: {
    kicker: "Questions fréquentes",
    statement: "Ce qu’on nous demande avant de signer.",
    /* v53 : la colonne de gauche du nouveau gabarit porte la note et
       l'appel — la question absente se pose au rendez-vous */
    note: "Une question absente ? Elle se pose au premier échange, avec le fondateur.",
    cta: CTA,
    /* v27 : les questions traitent ce que le fil de la page ne peut pas
       aborder. Les sept d'origine redisaient la page, une seule portait une
       information unique, celle sur le RGPD : elle est conservée.
       v59 (arbitrage Vincent, 29/08) : de neuf on passe à QUATRE. Sont
       retirées « qui contacte le dirigeant », « et si un dirigeant refuse
       d'être recontacté », « sous combien de temps les premiers dossiers »,
       « que devient un dossier après la livraison » et « pourquoi si peu de
       chiffres sur ce site ».
       Vérifié avant de les retirer, et c'est la raison pour laquelle trois
       de ces suppressions ne coûtent rien : le premier contact adressé à
       l'entreprise et l'opt-out définitif sont portés par la question RGPD
       ci-dessous, par le pied de l'offre et par la page Confidentialité ;
       le délai annoncé au devis est répété dans le filtre, l'offre et la
       fiche du devis. La quatrième, le SUIVI DES COHORTES, n'avait aucun
       autre point de chute : il quitte le site, voir la note v59 plus haut.
       Les details sont fermés au chargement, donc seule la longueur des
       QUESTIONS pèse sur la hauteur, jamais celle des réponses. */
    items: [
      {
        question: "Que se passe-t-il après les six mois ?",
        reponse:
          "Il se reconduit au mois, résiliable avec un mois de préavis.",
      },
      {
        question: "Et si mon périmètre est déjà servi ?",
        reponse:
          "Nous vous le disons à l’appel, avant toute proposition. Vous pouvez être prévenu s’il se libère, et un autre périmètre reste ouvert. Le mandat de recherche n’est pas disponible sur un périmètre déjà sous exclusivité.",
      },
      {
        question: "D’où viennent vos données, et est-ce conforme au RGPD ?",
        reponse:
          "L’identité, les chiffres et la structure viennent des registres publics français (RNE/INPI, SIRENE, BODACC). Les coordonnées du dirigeant viennent de fournisseurs d’enrichissement B2B, sourcés et contractualisés, et chaque coordonnée livrée porte son statut écrit, vérifiée ou non, aucune donnée grise. Base légale de l’intérêt légitime en B2B, information art. 14 rendue publiquement accessible sur notre page Confidentialité, le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé ; l’opt-out est définitif et honoré.",
      },
      {
        question: "En quoi est-ce différent d’une base de données ou d’un agrégateur ?",
        reponse:
          "Une base affiche des métadonnées : la mention qu’un acte existe, sa date de dépôt. Nous ouvrons l’acte, y compris quand c’est un scan que personne ne lit : la répartition du capital, les conditions suspensives, le motif réel de l’opération. Et quand la lecture dit qu’il ne faut pas appeler, c’est ce que nous livrons.",
      },
    
    ],
  },
  /* la section d’accueil et le gabarit des pages article. Les textes des
     analyses elles-mêmes vivent dans src/config/analyses.ts */
  analyses: {
    kicker: "Analyses",
    titre: "Ce que nous observons du marché de la transmission.",
    intro:
      "Quelques repères sur la cession de PME, la démographie des dirigeants et le travail d’origination. Sans jargon, sans recette.",
    lire: "Lire",
    retour: "Analyses",
    piedTexte: "C’est exactement ce que nous faisons, pour un cabinet par périmètre.",
    cta: CTA,
  },
  final: {
    kicker: "Prochaine étape",
    statement: "Nous mesurons votre périmètre avant que vous vous engagiez.",
    lead: "Ce qu’il contient vous est annoncé au devis. Un mois sans dossier livré n’est pas facturé. Trente minutes, avec le fondateur.",
    cta: CTA,
    telAvant: "ou appelez directement le ",
    /* v56 : la seconde voie directe, sous la première */
    mailAvant: "ou écrivez à ",
  },
  /* v25 : la barre d'action mobile. Le libellé passe par la constante CTA
     comme les autres appels : trois copies indépendantes avaient déjà
     divergé en v13. */
  barre: { cta: CTA },
  carte: {
    ariaCarte: "Carte des régions françaises",
    panneauVide: "Sélectionnez une région.",
    bouton: CTA,
    statuts: {
      disponible: {
        label: "Disponible",
        texte: "Périmètre ouvert. La part se prend au premier contrat signé.",
      },
      en_discussion: {
        label: "En discussion",
        texte: "Des discussions sont en cours sur ce périmètre. Un appel reste possible : premier signé, premier servi.",
      },
      exclusivite: {
        label: "Sous exclusivité",
        texte: "Ce périmètre est servi en exclusivité. Laissez vos coordonnées à l’appel pour être prévenu si elle se libère.",
      },
    },
  },
  /* ============================================================
     v68 · LA PAGE DES DIRIGEANTS (/dirigeants).
     Elle existe parce qu'Imbrin écrit à des dirigeants de PME avant
     qu'un cabinet les approche. Ces dirigeants chercheront « Imbrin » et
     tomberaient sinon sur un site écrit pour des cabinets, qui parle
     d'eux à la troisième personne. Ici on s'adresse à eux, à la
     deuxième, et ON NE VEND RIEN : aucun prix, aucune offre, aucun appel
     à réserver un échange, aucun lien vers la section Offre.
     VOCABULAIRE PROSCRIT SUR CETTE PAGE, et la liste est absolue :
     « cible », « détecter », « gisement », « périmètre », « exclusivité »,
     « vous aider », « vous accompagner », « valoriser ». Un dirigeant
     n'est pas une ressource, et cette page ne promet aucun service.
     DEUX ÉCARTS AU BRIEF, tous deux assumés et signalés :
     1. les deux tirets cadratins du brief sont transposés, règle de
        charte v8, même transposition qu'en v46b ;
     2. « nous vous écrivons à votre entreprise » est devenu « nous vous
        écrivons dans votre fonction de dirigeant ». La première
        formulation est celle que la v63 a RETIRÉE du site parce qu'elle
        était fausse : le contact passe par une ligne directe, pas par
        l'entreprise. La règle du brief, « tout ce qui y est écrit doit
        être vrai le jour de la publication », l'interdit donc.
     ============================================================ */
  dirigeants: {
    /* v69 : « reçu un courrier » devient « été contacté ». Quatre canaux
       seront utilisés selon l'âge du dirigeant, lettre, mail, LinkedIn et
       téléphone : le titre doit les couvrir tous. Le CORPS garde
       « courrier » là où il parle de la lettre elle-même. */
    metaTitre: "Vous avez été contacté par Imbrin Research",
    kicker: "Vous avez été contacté par Imbrin Research",
    titre:
      "Ce que nous faisons, ce que nous ne faisons pas, et ce que vous pouvez décider.",
    chapo:
      "Cette page existe parce que vous devez pouvoir vérifier ce que nous vous avons écrit.",
    blocs: [
      {
        titre: "Ce que nous faisons",
        corps: [
          "Nous préparons des dossiers pour des cabinets de conseil qui accompagnent des dirigeants de PME dans la transmission de leur entreprise. Ces dossiers sont établis à partir de registres publics : registre du commerce, actes déposés au greffe, comptes annuels. Rien d’autre. Aucune donnée privée, aucun renseignement sur votre patrimoine, aucune source qui ne soit pas publique.",
        ],
      },
      {
        titre: "Ce que nous ne faisons pas",
        corps: [
          /* « nous vous écrivons à votre entreprise » est retiré : voir la
             note de tête, la v63 a établi que c'était faux. La capacité
             remplace le canal, et elle, elle est vraie. */
          "Nous ne sommes ni acquéreur, ni conseil. Nous n’avons aucune offre à vous transmettre. Nous ne prenons aucune part à une éventuelle transaction, et vous ne nous devez rien, ni aujourd’hui, ni plus tard. Nous ne contactons jamais un dirigeant à titre privé : nous vous écrivons personnellement, dans votre fonction de dirigeant, et jamais par vos équipes. Un courrier vous arrive sous pli fermé, marqué « Personnel et confidentiel », à votre nom.",
        ],
      },
      {
        titre: "Ce que vous pouvez décider",
        corps: [
          "Avant qu’un cabinet vous approche, nous vous écrivons. Vous avez trois possibilités.",
        ],
        choix: [
          {
            fort: "Ne rien faire.",
            suite:
              "Nous vous appellerons une fois, à la date indiquée dans notre message, et nous n’insisterons pas.",
          },
          {
            fort: "Refuser.",
            suite:
              "Un message suffit, par mail ou par téléphone. Ce refus est définitif : personne ne vous contactera par notre intermédiaire.",
          },
          {
            fort: "Nous dire que la question vous intéresse,",
            /* le tiret cadratin du brief est transposé en virgule, règle
               de charte v8, même transposition qu'en v46b */
            suite:
              "même de loin, même sans échéance. Nous vous montrerons alors ce que le registre laisse voir de votre société, et ce qu’il ne laisse pas voir. Vous jugerez seul si un échange avec un cabinet, un seul, choisi pour votre secteur, vaut la peine. C’est vous qui décidez, à chaque étape.",
          },
        ],
      },
      {
        titre: "Vos droits",
        corps: [
          `Les informations qui ont permis de vous contacter proviennent exclusivement de registres publics. Vous pouvez à tout moment vous opposer à leur utilisation, demander ce que nous détenons vous concernant, ou en demander la suppression. Une demande à l’adresse ci-dessous suffit ; elle est traitée sous ${brand.DELAI_OPPOSITION}, et l’opposition est définitive.`,
        ],
      },
    ] as BlocDirigeant[],
    pied: {
      intro: "Pour refuser, pour vérifier, ou pour toute question :",
      /* ligne de labels : le « · » y est conforme, c'est son seul emploi
         autorisé par la charte v8 */
      entite: `${brand.MARQUE} ${brand.SUFFIXE} · ${brand.ENTITY.raisonSociale} · SIREN ${brand.ENTITY.siren}`,
      lien: {
        label: "La notice d’information complète",
        href: "/confidentialite",
      },
    },
  },
  legales: {
    mentions: {
      titre: "Mentions légales",
      metaTitre: `Mentions légales, ${brand.MARQUE} ${brand.SUFFIXE}`,
      sections: [
        {
          titre: "Éditeur",
          corps: `Le site est édité par ${brand.ENTITY.raisonSociale}, SIREN ${brand.ENTITY.siren}, dont le siège est situé ${brand.ENTITY.adresse}, ${brand.ENTITY.codePostal} ${brand.ENTITY.ville}.`,
        },
        {
          titre: "Directeur de la publication",
          corps: "Vincent Fournier.",
        },
        {
          titre: "Hébergement",
          corps: "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis (vercel.com).",
        },
        {
          titre: "Contact",
          corps: "Pour toute question relative au site :",
          email: brand.CONTACT_EMAIL,
        },
      ] as SectionLegale[],
    },
    confidentialite: {
      titre: "Confidentialité",
      metaTitre: `Confidentialité, ${brand.MARQUE} ${brand.SUFFIXE}`,
      sections: [
        {
          titre: "Responsable du traitement",
          corps: `Les traitements décrits sur cette page sont mis en œuvre par ${brand.ENTITY.raisonSociale}, SIREN ${brand.ENTITY.siren}. ${brand.MARQUE} ${brand.SUFFIXE} est une marque exploitée par cette société.`,
        },
        {
          titre: "Cookies et données de navigation",
          corps: "Ce site ne dépose aucun cookie, n’embarque aucun traceur ni script tiers et ne collecte aucune donnée de navigation.",
        },
        {
          titre: "Prise de rendez-vous",
          corps: "La prise de rendez-vous s’effectue via Calendly, service externe accessible par un lien sortant. Les informations saisies à cette occasion sont traitées par Calendly, selon ses propres conditions.",
        },
        {
          titre: "Finalité et base légale",
          corps: [
            /* v69 : LA NOTICE DÉCRIT LE TRAITEMENT RÉEL. Elle disait que le
               CABINET prenait contact ; c'est Imbrin qui écrit la première
               depuis la page /dirigeants, et une notice décrit ce qui est
               fait. La qualification des données n'est PAS touchée ici,
               elle reste en attente d'avis juridique (voir BACKLOG.md).
               DEUX ÉCARTS AU BRIEF, signalés à Vincent : les tirets
               cadratins sont transposés en virgules, règle de charte v8 ;
               et « à votre entreprise » est écrit « dans votre fonction de
               dirigeant », parce que le même brief annonce quatre canaux
               de contact dont LinkedIn et le téléphone, dont aucun n'est
               l'entreprise. Une notice d'information ne peut pas annoncer
               un canal que la pratique dément. */
            /* v70 : L'INVARIANT DU PREMIER CONTACT, écrit ici dans sa forme
               définitive. Imbrin contacte le dirigeant SEUL, dans sa
               fonction, par un canal personnel et confidentiel, et jamais
               par le standard ni par ses équipes. La formulation « premier
               contact par l'entreprise » est ABANDONNÉE : elle désignait
               le standard, c'est-à-dire précisément le canal qui fait
               fuiter l'information dans l'entreprise du dirigeant.
               Voir la section positionnement du CLAUDE.md, qui la porte.
               Les tirets cadratins du brief sont transposés en virgules,
               règle de charte v8. EXCEPTION, v71 : celui de « Personnel —
               Confidentiel » est CONSERVÉ. Ce n'est pas de la ponctuation,
               c'est la citation d'une mention réellement imprimée sur
               l'enveloppe : la transposer reviendrait à mal citer un objet
               physique. Ne pas le « corriger ».
               v78 : EXCEPTION LEVÉE (arbitrage Vincent, 14/09/2026). La
               mention s'écrit « Personnel et confidentiel », ici et sur
               /dirigeants : zéro tiret cadratin sur le site, vérifié sur le
               HTML produit. */
            /* v76 : la finalité ne décrit plus une sélection par l'âge ni par
               l'absence de relais, le backtest national a montré que ni l'un
               ni l'autre ne sélectionne. Elle décrit ce qui est fait : un
               acte déposé et daté, puis des lectures. « Son âge » reste dans
               les données traitées ci-dessous, l'âge est lu, il n'est plus
               une porte, et une notice liste ce qui est traité. */
            "Nous identifions des sociétés à partir d’un acte déposé au registre, daté ; nous lisons ensuite qui dirige, qui détient le capital et qui pourrait prendre la suite. Imbrin Research vous écrit d’abord, vous seul, dans votre fonction de dirigeant, par un courrier ou un message qui vous est personnellement adressé. Un courrier vous arrive sous pli fermé, marqué « Personnel et confidentiel », à votre nom. Nous ne passons jamais par votre standard ni par vos équipes. Un cabinet, un seul, choisi pour votre secteur, ne vous approche que si vous l’avez accepté ; c’est à lui, et à lui seul, que ces informations sont transmises.",
            "Le traitement repose sur l’intérêt légitime : faciliter la transmission d’entreprises en mettant en relation leurs dirigeants avec des professionnels du conseil en cession. Il n’a pas d’autre finalité que celle-là : le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé, et aucune démarche ne vise son patrimoine personnel.",
          ],
        },
        {
          titre: "Données traitées",
          corps: "Les données traitées sont l’identité et la fonction du dirigeant, son âge, la société qu’il dirige, ses chiffres publiés, les actes et la structure de détention, et une coordonnée de contact, qui peut être une ligne directe du dirigeant.",
        },
        {
          titre: "Origine des données",
          corps: [
            "L’identité, la société, les chiffres, les actes et la structure de détention viennent des registres publics français (RNE, SIRENE, BODACC). Les coordonnées proviennent de prestataires d’enrichissement B2B ; elles peuvent inclure une ligne directe du dirigeant. Chaque coordonnée livrée porte son statut. Le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé. L’opt-out est définitif.",
            "Ces données ne sont pas collectées auprès du dirigeant. L’information prévue à l’article 14 du RGPD est rendue publiquement accessible par cette page.",
            "Une version lisible de cette information, écrite pour le dirigeant que nous avons contacté, est publiée à part.",
          ],
          lien: { label: "Vous avez été contacté ?", href: "/dirigeants" },
        },
        {
          titre: "Destinataires",
          corps: "Le dossier d’approche est livré au cabinet servi sur le périmètre concerné, et à lui seul. Interviennent également l’hébergeur de notre base et le prestataire chargé de l’enrichissement des coordonnées, qui agissent pour notre compte et sur nos instructions.",
        },
        {
          titre: "Transferts hors Union européenne",
          corps: "Notre base est hébergée dans l’Union européenne, en Irlande. Le prestataire chargé de l’enrichissement des coordonnées héberge également dans l’Union européenne, mais son siège se situe hors de l’Espace économique européen, ainsi qu’une partie de ses sous-traitants et de ses fournisseurs de données. Ces transferts sont encadrés par les clauses contractuelles types adoptées par la Commission européenne.",
        },
        {
          titre: "Durées de conservation",
          corps: "Une détection non retenue est conservée 3 ans à compter de sa dernière mise à jour. Un dossier livré à un cabinet est conservé pendant la durée du contrat, puis 5 ans. Le registre d’opposition est conservé sans limitation de durée : c’est ce qui rend l’opt-out définitif.",
        },
        {
          titre: "Vos droits",
          corps: [
            "Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur les données qui vous concernent. Vous pouvez obtenir une copie des données que nous détenons sur vous.",
            "Vous pouvez demander un opt-out définitif : il est honoré sans condition, et vos coordonnées sont inscrites à notre registre d’opposition. Cette opposition peut être exercée à tout moment, y compris avant toute livraison à un cabinet.",
            "Vous pouvez introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (cnil.fr).",
          ],
        },
        {
          titre: "Contact",
          corps: "Pour exercer vos droits ou pour toute question :",
          email: brand.CONTACT_EMAIL,
        },
      ] as SectionLegale[],
    },
  },  /* V80 · LE PIED DE PAGE, au mot près de la planche : l'emblème clair, le
     nom et la baseline ; trois colonnes, « Le site » (les six entrées de
     la navigation ci-dessus), « Informations » et « Contact » ; une ligne
     de bas de page. L'année du copyright est celle de la planche. La
     raison sociale et le SIREN n'y sont plus : la planche ne les a pas,
     ils vivent aux mentions légales et, au lot 3, dans À propos. */
  pied: {
    emblemeAlt: `Emblème d’${brand.MARQUE} ${brand.SUFFIXE}, un plongeon imbrin gravé`,
    site: { aria: "Pages du site", titre: "Le site" },
    informations: {
      titre: "Informations",
      liens: [
        /* v68 : la porte d'entrée du dirigeant qui a été contacté et
           cherche à vérifier. Dans le pied, jamais dans la nav : la page
           d'accueil s'adresse aux cabinets, pas à lui. */
        { label: "Vous avez été contacté ?", href: "/dirigeants" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
    },
    contact: { titre: "Contact", linkedin: "LinkedIn" },
    copyright: `© 2026 ${brand.MARQUE} ${brand.SUFFIXE}`,
    note: "Site sans traceurs",
  },
});
