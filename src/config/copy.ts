import { brand } from "./brand";
import { typoDeep } from "./typo";

/* un seul libellé d’appel sur tout le site : trois copies indépendantes avaient
   déjà produit une divergence en v13 */
const CTA = "Réserver un échange";

export type NomIcone = "couverture" | "veille" | "exclusivite";

export type SectionLegale = {
  titre: string;
  /* une chaîne, ou plusieurs paragraphes. Les mentions légales n'en
     utilisent qu'une, la page Confidentialité en a besoin de plusieurs. */
  corps: string | string[];
  email?: string;
};

/* Copy v8 : reprise AU MOT PRÈS de MAQUETTE-V8.html (source de vérité).
   Règle v8 : aucun tiret cadratin ni demi-cadratin dans les textes. */
export const copy = typoDeep({
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`,
    description:
      "Origination externe pour cabinets M&A sell-side : nous lisons les actes déposés au registre, y compris ceux que personne n’ouvre, et nous livrons des dossiers d’approche datés et sourcés. Un cabinet par périmètre.",
  },
  hero: {
    nav: [
      { label: "Dossier", ancre: "#dossier" },
      { label: "Méthode", ancre: "#methode" },
      { label: "Offre", ancre: "#offre" },
      { label: "FAQ", ancre: "#faq" },
      { label: "Analyses", ancre: "#analyses" },
    ],
    navAppel: { label: "Définir mon périmètre", ancre: "#appel" },
    /* v24, arbitrage Vincent : la tranche de taille puis la situation du
       dirigeant sont retirées, le premier écran ne qualifie plus que le
       marché visé. L'espace insécable après le « · » est conservée : sans
       elle, le séparateur peut finir une ligne tout seul quand le libellé
       passe sur deux lignes, ce qui arrive sur téléphone. */
    eyebrow: "Origination sell-side · PME françaises",
    /* trois lignes découpées à la main, le mot accentué occupe la sienne
       seul. Les clés portent leur numéro de ligne : elles ne peuvent pas
       mentir si le découpage change. */
    titreLigne1: "Nous lisons les actes que",
    titreLigne2Italique: "personne",
    titreLigne3: "n’ouvre.",
    sousTitre:
      "Et nous livrons le dossier d’approche qui en sort. Un analyste, sur pièces. Un cabinet par périmètre.",
    cta: CTA,
    ctaSecondaire: { label: "L’origination", ancre: "#origination" },
    /* le caractère mono-interlocuteur dès le premier écran, en métadonnée :
       ni bouton ni encadré, ça ne dispute rien aux deux appels */
    signature: "Un seul interlocuteur, du premier appel à la vérification de vos dossiers.",
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du média
       ne sont revendiquées (arbitrage Vincent, v8-4) */
    legende1: "Plongeon imbrin en chasse",
    note1: "Déposez votre vidéo « imbrin.mp4 »",
    note2: "dans public/, puis rechargez.",
  },
  /* v14 : la description du livrable et l'exemple de dossier ne font plus
     qu'une section. Depuis la v19, cliquer un élément ne surligne plus une
     zone dans un document entier : le viseur ne cadre que cette zone.
     Le dossier est fictif et le dit à TROIS endroits, tous visibles en
     permanence quelle que soit la zone active : barre du viseur (« Exemple
     fictif »), chrome du document (« Société et chiffres inventés »), pied
     de document. Ne jamais retirer l'une des trois.
     v22 : la deuxième était décrite comme étant « sous le titre ». Le titre
     est descendu dans la zone 00, la mention est restée dans le chrome et
     se lit donc au-dessus. Elle n'a jamais cessé d'être toujours visible,
     c'est ce qui compte. */
  dossier: {
    kicker: "Ce que vous recevez",
    titre: "Ce qui arrive sur votre bureau.",
    /* v19 : le chapô disait « surligné » et « à droite ». Le viseur ne
       surligne plus un document entier, il cadre une zone à la fois, et
       sous 920px il passe dessous et non à droite. */
    chapo:
      "Un dossier d’approche, pas une ligne dans un fichier. Chaque élément ci-dessous ouvre sa zone dans un exemple de dossier, cadrée de près. Cliquez pour le parcourir.",
    /* v22 : la présentation du prospect quitte l'en-tête permanent et
       devient la zone 00. Elle est donc l'élément actif au chargement :
       c'est la page de garde du dossier, on la lit avant les chiffres. */
    defaut: "z-societe",
    elements: [
      {
        idx: "00",
        cible: "z-societe",
        titre: "La société",
        texte:
          "Ce qu’elle fait, sa taille, sa forme juridique, et qui la dirige.",
      },
      {
        idx: "01",
        cible: "z-fin",
        titre: "Les chiffres, à la source",
        texte:
          "Résultat, trésorerie, endettement, sur trois exercices. Repris des comptes déposés, pas d’un agrégateur.",
      },
      {
        idx: "02",
        cible: "z-signal",
        titre: "La structure de détention",
        texte:
          "Qui tient le capital, quels mouvements de titres. Lue dans les actes, pas déduite d’une base. Ici, un dirigeant seul, aucun mouvement en treize ans.",
      },
      {
        idx: "03",
        cible: "z-parcours",
        titre: "Le fait daté",
        texte:
          "La chronologie des actes déposés, chaque ligne datée au registre. Ici, une SCI constituée en 2023 pour isoler les murs. Un fait établi, jamais une intention supposée.",
      },
      {
        idx: "04",
        cible: "z-angle",
        titre: "L’angle d’approche",
        texte:
          "Par où entrer, quoi dire, ce qui presse. Écrit pour être utilisé lundi matin. Et quand la raison de ne pas appeler existe, c’est elle qui est livrée.",
      },
      {
        idx: "05",
        cible: "z-coord",
        titre: "Les coordonnées, avec leur statut",
        texte:
          "Fournisseurs contractualisés, jamais de donnée grise. Chaque coordonnée livrée porte son statut, écrit : vérifiée, ou non.",
      },
      {
        idx: "06",
        cible: "z-unknown",
        titre: "Ce que nous ne savons pas",
        texte:
          "Les zones d’ombre sont écrites noir sur blanc. Jamais comblées pour faire joli.",
      },
    ],
    viewer: { titre: "Dossier d’approche", mention: "Exemple fictif" },
    /* la ligne qui retourne l’objection du spécimen. L'ancienne promettait
       un dossier réel « sur votre territoire » avant tout contrat : une
       promesse qu'on ne tient pas à coup sûr, retirée à la refonte. */
    viewerNote: "Au rendez-vous, nous parcourons un dossier complet avec vous, page à page.",
    doc: {
      aria: "Exemple de dossier d’approche, société et chiffres inventés",
      metaAvant: "Dossier · ",
      metaFort: "Exemple",
      metaApres: " · Confidentiel",
      metaLigne2: "Région exemple · Semaine 30",
      ficti: "Société et chiffres inventés",
      badge: "Vérifié",
      /* v22 : ces quatre champs ne sont plus dans l'en-tête permanent, ils
         forment la zone 00. Aucune donnée ne change, seul l'endroit où
         elle est montrée. */
      societeLbl: "Identité",
      titre: "Établissements Vasseur",
      /* v23 : la même phrase que le « desc » d'avant, découpée sur ses points
         médians pour devenir une fiche d'identité en cases. Aucun mot n'est
         ajouté ni retiré, seule la structure change. */
      descItems: [
        "Génie climatique",
        "60-99 salariés",
        "agglomération type",
        "SAS, titres cessibles",
      ],
      interloLbl: "Interlocuteur",
      interlo: "Gérard Vasseur · Président · 63 ans",

      finLbl: "Finances · 2025",
      figures: [
        { n: "640 K€", k: "Résultat net 2025" },
        { n: "1,9 M€", k: "Trésorerie" },
        { n: "2,1 M€", k: "Fonds de roulement" },
        { n: "≈ 0,2", k: "Gearing" },
      ],
      /* v23 : « n » est la valeur déjà affichée dans « v », en milliers, pour
         que la barre soit proportionnelle. Ce n'est pas une donnée de plus,
         c'est la même, lisible par la mise en page. Échelle à zéro, jamais
         tronquée : une base tronquée exagérerait la pente. */
      tendance: [
        { a: "2023", v: "~510 K€", n: 510 },
        { a: "2024", v: "~590 K€", n: 590 },
        { a: "2025", v: "~640 K€", n: 640 },
      ],
      tendanceTag: "Résultat net · trois exercices en hausse",

      parcoursLbl: "Le fait daté",
      parcours: [
        { an: "1998", ev: "Création, transmission familiale" },
        { an: "2011", ev: "Reprise par le dirigeant actuel" },
        { an: "2023", ev: "Constitution d’une SCI, murs d’exploitation isolés", cle: true },
        { an: "04 / 2026", ev: "Dernier dépôt de comptes, clos 12/2025" },
        { an: "07 / 2026", ev: "Vérification registre : dirigeant actif, aucun relais" },
      ] as { an: string; ev: string; cle?: boolean }[],

      coordLbl: "Coordonnées",
      coordS: "Statut écrit, ligne à ligne",
      /* v35 : les coordonnées sont ÉCRITES, plus caviardées. Toute cette
         société est inventée, il n'y avait donc rien à protéger, et les
         trois barres noires étaient les mêmes formes que les barres du
         graphe de la zone 01 : elles se lisaient comme une donnée alors
         qu'elles cachaient une absence de donnée.
         Les valeurs sont inventées mais SÛRES, et il faut qu'elles le
         restent. Les deux numéros sont pris dans les plages que l'ARCEP
         réserve à la fiction, 06 39 98 XX XX pour le mobile et 02 61 91 XX XX
         pour le fixe : elles ne peuvent être attribuées à personne. Le
         domaine du courriel a été vérifié inexistant. Ne pas les remplacer
         par des valeurs « plus crédibles », elles appartiendraient à
         quelqu'un. */
      coordItems: [
        /* le statut est écrit ligne à ligne, et la « non vérifiée » est
           délibérée : le spécimen montre que le statut est réel, pas
           décoratif. Les « · » sont conformes : coord-v est une ligne mono. */
        { k: "Mobile", v: "06 39 98 41 07 · vérifiée" },
        { k: "Email", v: "g.vasseur@etablissements-vasseur.fr · vérifiée" },
        { k: "Ligne directe", v: "02 61 91 38 24 · non vérifiée" },
      ],
      coordD:
        "Coordonnées de fournisseurs contractualisés. Chaque ligne porte son statut : vérifiée, ou non. Jamais de donnée grise.",

      signalLbl: "Structure de détention",
      signalAvant:
        "Gérard Vasseur détient et dirige seul depuis 2011, à 63 ans. Au registre : ",
      signalFort:
        "pas d’associé entré, aucun mouvement de titres en treize ans.",
      signalApres:
        " L’affaire est saine, trois exercices en hausse, quasiment pas de dette. En 2023, les murs sont sortis dans une SCI : le fait est daté, il est dans la chronologie.",

      angleLbl: "Angle d’approche",
      angleTitre: "Entrer par l’homme-clé, pas par la vente.",
      angleP1:
        "Toute la valeur tient sur une personne qui a 63 ans. Un sujet qui s’ouvre sans prononcer le mot cession : que devient l’atelier le jour où il n’est plus là tous les matins.",
      angleP2Avant:
        "La SCI de 2023 est un fait, pas une intention : les murs sont sortis de l’exploitation, l’acte est au registre. Ce que ce geste prépare, l’acte ne le dit pas. ",
      angleP2Fort:
        "C’est la question à poser au dirigeant, avant qu’un autre ne la pose.",

      inconnuLbl: "Ce que nous ne savons pas",
      inconnuAvant:
        "Le chiffre d’affaires est sous option de confidentialité depuis 2021 : nous donnons une fourchette, pas un montant. Ses deux enfants sont hors de l’entreprise, et nous ne savons pas s’ils sont une piste de reprise. Quant à l’intention du dirigeant : ",
      inconnuFort: "aucune source publique ne la porte. Un acte établit un fait, jamais un projet.",
      inconnuApres: " Ce sont les premières questions à poser.",

      legalFicti: "Exemple fictif.",
      legal:
        " Société et chiffres inventés pour la démonstration. La structure est celle de nos dossiers réels : repères sourcés, faits datés, angle, ce que nous ne savons pas, sources. Sources publiques (RNE, SIRENE, BODACC) · art. 14 RGPD : information des personnes accessible sur notre page Confidentialité.",
    },
  },
  /* v15 : « Le constat » et la bande de chiffres fusionnés en un seul geste.
     L'ancrage national est la seule preuve de marché sourcée à un tiers, il
     précède l'entonnoir régional qui, lui, est un ordre de grandeur à nous. */
  entonnoir: {
    kicker: "Le filtre",
    titreAvant: "Tout un marché, réduit à votre ",
    titreItalique: "périmètre",
    intro:
      "Le marché visible est un marché en retard : il ne montre que les dirigeants déjà engagés dans un processus. La valeur est en amont, chez ceux qui n’ont rien annoncé mais dont la situation au registre réunit déjà les conditions. Vous êtes à Paris ; ces dossiers sont en région. Voici comment un périmètre se resserre.",
    /* l'ancrage porte le SOUS-TOTAL PME, pas les 370 000 tous formats : le
       marché d'Imbrin, ce sont les 58 000. L'énoncé est fondé sur l'INTENTION
       déclarée, pas sur l'âge des dirigeants : le critère de l'âge est
       précisément celui que les travaux du secteur donnent pour mauvais
       prédicteur de cession. L'écart 370 000 / 130 000 porte sur l'ensemble
       du marché et n'est jamais rapporté aux 58 000. */
    ancrage: `Les dirigeants de 58 000 PME comptent transmettre d’ici 2030, sur un marché de 370 000 entreprises. Au rythme actuel, 130 000 aboutiraient.`,
    ancrageSource: `Bpifrance Le Lab · CCI France · CMA France · C.R.A · 27 novembre 2025 · ≈ 5 000 réponses`,
    /* refonte 2026-08 : l'entonnoir chiffré 8 000/740/310/45 était un
       générique jamais mesuré, il est mort. Les barres portent désormais
       les QUATRE FILTRES du registre, sans nombre : le seul décompte
       honnête est celui du périmètre du client, et il est au devis. */
    ariaPaliers: "Les quatre filtres du périmètre",
    paliers: [
      {
        n: "Tout",
        fort: "votre périmètre",
        suite: " : les sociétés de la région et de la typologie arrêtées avec vous",
      },
      {
        n: "L’âge",
        fort: "du dirigeant",
        suite: ", lu au registre, pas déclaré",
      },
      {
        n: "Le relais",
        fort: "absent",
        suite: " : personne au capital ni aux mandats pour prendre la suite",
      },
      {
        n: "Le fait",
        fort: "daté, quand il existe.",
        suite: " Un acte déposé, jamais une intention supposée.",
        prise: true,
      },
    ] as { n: string; fort: string; suite: string; prise?: boolean }[],
    piedAvant: "Combien dans votre région ? ",
    piedItalique: "Nous les comptons avant que vous signiez.",
    noteAvant: "Le taux d’écart à la vérification est ",
    noteFort: "mesuré sur votre périmètre",
    noteApres: " et livré avec chaque lot.",
    noteLigne2: "Ce qui reste est livré. Rien d’autre.",
    /* le stock et le flux. Sans cette distinction, un prospect divise le
       stock par le rythme mensuel, conclut que trois mois lui suffisent, et
       lit dans la page une invitation à partir à l'échéance de son
       engagement. Aucun chiffre ici, ni de stock ni de flux : le stock est
       compté au devis, le flux est constaté, le plancher protège. */
    bascule1Avant: "Ce que votre périmètre contient déjà forme votre ",
    bascule1Fort: "rattrapage",
    bascule1Apres: " : compté au devis, livré dans les premières semaines.",
    bascule2:
      "Ensuite, la veille. Le flux n’est pas promis, il est constaté : quand une situation bascule dans votre périmètre, le dossier suit. Le plancher chiffré au devis vous protège, un mois qui passe dessous n’est pas facturé.",
  },
  /* v15 · B1 : trois étapes, pas quatre. L'ancienne « Le dossier
     d'approche » est absorbée par la section qui montre le document,
     l'ancienne vérification et l'ancienne veille tiennent en une. */
  /* refonte 2026-08 : la « grille qui reste chez nous » jouait le mystère
     d'un algorithme propriétaire, l'inverse de la preuve réelle. La
     différence est un analyste qui OUVRE les actes, scans compris. La bande
     reste à trois lignes, sa grille CSS est à trois colonnes : la raison de
     ne pas appeler prend la ligne 03 au lieu d'une quatrième. */
  methode: {
    kicker: "La méthode",
    statement: "Nous ouvrons les actes. Même les scans.",
    sousTitre:
      "La différence n’est pas un algorithme. C’est un analyste qui lit ce que les bases n’affichent pas : la répartition du capital, les conditions suspensives, le motif réel derrière une métadonnée muette.",
    lignes: [
      {
        num: "01",
        titre: "Le périmètre, arrêté avec vous",
        texte:
          "Région, typologie d’entreprises, taille de cible, structure de détention. Inscrit au devis.",
      },
      {
        num: "02",
        titre: "La détection, puis la lecture",
        texte:
          "RNE, SIRENE, BODACC : des faits observables et datés, pas de scores prédictifs inventés. Chaque détection est reprise à la main, l’acte est ouvert et lu, y compris quand c’est un scan.",
      },
      {
        num: "03",
        titre: "Le dossier, ou la raison de ne pas appeler",
        texte:
          "Ce qui tient à la lecture est livré, et le périmètre reste sous veille. Quand la raison de ne pas appeler existe, vous la recevez : société déjà conseillée, filiale d’un groupe, contrôle déjà basculé. Un dossier de moins est aussi une information.",
      },
    ],
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
      prix: brand.PRICING.origination.prixPlancher,
      metaFort: `À partir de, ${brand.PRICING.origination.periode}`,
      metaSuite: ", selon le périmètre convenu",
      metaLigne2: `Engagement ${brand.PRICING.origination.engagement}, puis reconduction mensuelle`,
      /* l'arithmétique posée à la place du prospect, sans un chiffre de
         marché : les « 3 à 5 % sur 5 à 15 M€ » étaient des ordres de
         grandeur non sourcés, retirés à la refonte. La déférence reste :
         c'est lui qui connaît ses honoraires, et aucune fraction n'est
         chiffrée pour ne rien avoir à défendre. */
      arithmetique: `${brand.PRICING.origination.prixPlancher} par mois, soit ${brand.PRICING.origination.prixAnnuel} sur l’année. Vous connaissez vos honoraires de succès : l’année pèse une fraction d’un seul mandat.`,
      /* un tableau, pas une chaîne : le corps se lit en paragraphes et le
         composant les rend tels quels. Un seul élément aujourd'hui. */
      /* « livrées sous 7 jours » est retiré : on annonce une DATE au devis,
         jamais un délai générique de recalcul (contrainte de production). */
      corps: [
        "Le périmètre est arrêté avec vous à l’appel : région, typologie d’entreprises, ce que vous voulez voir détecté. Nous mesurons ce qu’il contient et nous vous l’annonçons au devis, avant tout engagement. Le plancher mensuel y est chiffré, avant votre signature : un mois qui passe sous ce nombre n’est pas facturé. Ce que vous payez chaque mois, c’est la veille du périmètre : les nouvelles bascules vous reviennent vérifiées, à la date annoncée au devis.",
      ],
    },
    complement: {
      nom: "Le mandat de recherche",
      lead: "Quand un mandat de recherche arrive sur votre bureau, nous l’alimentons à la mission : vos critères, une shortlist de cibles vérifiées, livrée à la date convenue à la mission.",
      prix: brand.PRICING.mandat.prix,
      metaLigne1: "Par mission, à la livraison",
      metaLigne2: "Hors périmètres déjà sous exclusivité",
    },
    pied: {
      fort: "Pas de commission sur la transaction, jamais.",
      suite:
        " Notre rémunération ne dépend ni du closing, ni du prix de cession. Vous réglez le contrat mensuel, et une mission de recherche quand vous en confiez une. Rien d’autre. L’information des personnes, le registre d’opposition et l’opt-out sont pris en charge.",
    },
    cta: CTA,
  },
  engagements: {
    kicker: "Nos engagements",
    statement: "Ce que nous ne faisons pas.",
    /* l'intro tient la droite de la bande d'en-tête : le titre a été réduit,
       la place ainsi libérée porte du sens au lieu de rester vide */
    intro:
      "Quatre limites que nous nous imposons, et qui font la valeur de ce que nous livrons.",
    nots: [
      {
        fort: "Pas de scores prédictifs inventés.",
        suite: " Des signaux observables, sourcés, datés.",
      },
      {
        fort: "Pas de contact du patrimoine privé.",
        suite: " Le premier contact passe toujours par l’entreprise.",
      },
      {
        fort: "Pas de données grises.",
        suite:
          " Registres publics et fournisseurs contractualisés. Opt-out définitif honoré, information art. 14 jointe.",
      },
      {
        fort: "Pas de chiffres invérifiables.",
        suite: " Ce que nous publions, nous le mesurons.",
      },
    ],
  },
  /* refonte 2026-08 : le « ≈ 1/3 publié depuis l'ouverture » n'était pas
     mesuré, il est mort. Le grand repère devient « 0 » : zéro chiffre
     générique sur ce site, c'est la promesse centrale mise en scène par la
     section qui parle de mesure. Le taux d'écart, lui, est mesuré sur le
     périmètre et livré avec chaque lot. */
  mesure: {
    kicker: "La mesure",
    statement: "Ce que nous mesurons sur nous-mêmes",
    /* le repère fait face aux énoncés : signe et valeur restent séparés
       parce qu'ils ne portent pas la même couleur ; le signe est vide. */
    repereSigne: brand.PROOF.repere.signe,
    repereValeur: brand.PROOF.repere.valeur,
    items: [
      {
        titre: "Zéro chiffre générique sur ce site",
        texte:
          "Aucun entonnoir type, aucune moyenne de marché, aucun taux d’affiche. Un chiffre n’est publié que mesuré, avec sa source et sa date. Le décompte qui vous concerne est celui de votre périmètre, et il est au devis.",
      },
      {
        titre: "Le taux d’écart, livré avec chaque lot",
        texte:
          "Des détections sont écartées à la vérification, et vous devez savoir combien. Le taux d’écart est mesuré sur votre périmètre et livré avec chaque lot, écrit.",
      },
      {
        titre: "Suivi des dossiers livrés",
        texte:
          "Chaque dossier est suivi jusqu’à son issue, cession ou non. Les résultats sont communiqués à nos clients, échecs compris, et publiés ici dès qu’une cohorte complète atteint dix-huit mois.",
      },
    ],
  },
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
    id: `${brand.ENTITY.raisonSociale} · SIREN ${brand.ENTITY.siren}`,
    linkedin: "LinkedIn ↗",
  },
  faq: {
    kicker: "Questions fréquentes",
    statement: "Ce qu’on nous demande avant de signer.",
    /* v27 : les questions traitent ce que le fil de la page ne peut pas
       aborder. Les sept d'origine redisaient la page, une seule portait une
       information unique, celle sur le RGPD : elle est conservée.
       Refonte 2026-08 : deux questions s'ajoutent, la différence avec un
       agrégateur et le pourquoi de l'absence de chiffres.
       Les details sont fermés au chargement, donc seule la longueur des
       QUESTIONS pèse sur la hauteur, jamais celle des réponses. */
    items: [
      {
        question: "Qui contacte le dirigeant ?",
        reponse:
          "Vous. Nous ne contactons jamais le dirigeant, à aucun moment. Le dossier arrive sur votre bureau, l’approche est la vôtre et se fait sous votre nom.",
      },
      {
        question: "Et si un dirigeant refuse d’être recontacté ?",
        reponse:
          "Son opposition est honorée sans condition et sans limitation de durée. Si son dossier vous a déjà été livré, vous êtes prévenu le jour même et le dossier ne doit plus être exploité.",
      },
      {
        question: "Sous combien de temps les premiers dossiers ?",
        reponse:
          "Le délai du premier lot vous est annoncé au devis, comme le périmètre et le plancher. Le rattrapage part d’abord, la veille suit, chaque livraison à date annoncée.",
      },
      {
        question: "Que se passe-t-il après les trois mois ?",
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
          "L’identité, les chiffres et la structure viennent des registres publics français (RNE/INPI, SIRENE, BODACC). Les coordonnées du dirigeant viennent de fournisseurs d’enrichissement B2B, sourcés et contractualisés, et chaque coordonnée livrée porte son statut écrit, vérifiée ou non, aucune donnée grise. Base légale de l’intérêt légitime en B2B, information art. 14 rendue publiquement accessible sur notre page Confidentialité, opt-out définitif honoré, premier contact toujours adressé à l’entreprise.",
      },
      {
        question: "En quoi est-ce différent d’une base de données ou d’un agrégateur ?",
        reponse:
          "Une base affiche des métadonnées : la mention qu’un acte existe, sa date de dépôt. Nous ouvrons l’acte, y compris quand c’est un scan que personne ne lit : la répartition du capital, les conditions suspensives, le motif réel de l’opération. Et quand la lecture dit qu’il ne faut pas appeler, c’est ce que nous livrons.",
      },
      {
        question: "Pourquoi si peu de chiffres sur ce site ?",
        reponse:
          "Parce qu’un chiffre honnête porte sa source, sa méthode, sa date et son périmètre, et qu’une moyenne d’affiche n’a rien de tout cela. Le seul décompte qui vous concerne, celui de votre périmètre, est mesuré avant votre engagement et inscrit au devis.",
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
    lead: "Ce qu’il contient vous est annoncé au devis, plancher mensuel chiffré. Un mois qui passe sous ce nombre n’est pas facturé. Trente minutes, avec le fondateur.",
    cta: CTA,
    telAvant: "ou appelez directement le ",
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
            "Nous identifions des sociétés dont la situation au registre réunit les conditions d’une transmission : âge du dirigeant, absence de relais identifiable, structure de détention. Nous transmettons ces informations à un cabinet de fusions acquisitions, un seul par périmètre, qui pourra prendre contact avec le dirigeant, par l’entreprise.",
            "Le traitement repose sur l’intérêt légitime : faciliter la transmission d’entreprises en mettant en relation leurs dirigeants avec des professionnels du conseil en cession. Il ne porte que sur des personnes dans l’exercice de leurs fonctions professionnelles.",
          ],
        },
        {
          titre: "Données traitées",
          corps: "Les données concernent le dirigeant dans son rôle professionnel : identité, fonction, âge, société dirigée, chiffres publiés, actes et structure de détention, coordonnées professionnelles.",
        },
        {
          titre: "Origine des données",
          corps: [
            "L’identité, la société, les chiffres, les actes et la structure de détention viennent des registres publics français (RNE, SIRENE, BODACC). Les coordonnées professionnelles viennent de prestataires d’enrichissement B2B contractualisés.",
            "Ces données ne sont pas collectées auprès du dirigeant. L’information prévue à l’article 14 du RGPD est rendue publiquement accessible par cette page.",
          ],
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
  },
  footer: {
    gauche: `${brand.MARQUE} ${brand.SUFFIXE} · ${brand.BASELINE}`,
    mentions: { label: "Mentions légales", href: "/mentions-legales" },
    confidentialite: { label: "Confidentialité", href: "/confidentialite" },
    linkedin: "LinkedIn",
    note: "Site sans traceurs · © 2026",
  },
});
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du
       média ne sont revendiquées (arbitrage Vincent, v8-4) */
