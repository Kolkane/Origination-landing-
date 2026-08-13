import { brand } from "./brand";

/** rend une valeur de brand insécable (les chiffres ne se coupent pas en fin de ligne) */
const nb = (s: string) => s.replace(/ /g, " ");

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
   Règle v8 : aucun tiret cadratin ni demi-cadratin dans les textes. */
export const copy = {
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`,
    description:
      "Nous détectons les dirigeants qui préparent leur sortie et livrons le dossier d’approche qui va avec. Un cabinet par périmètre.",
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
    titreLigne1: "Nous détectons les dirigeants",
    titreLigne2Avant: "qui ",
    titreItalique: "préparent",
    titreLigne2Apres: " leur sortie.",
    sousTitre:
      "Et nous livrons le dossier d’approche qui va avec. Un cabinet par périmètre.",
    cta: CTA,
    ctaSecondaire: { label: "L’origination", ancre: "#origination" },
    /* le caractère mono-interlocuteur dès le premier écran, en métadonnée :
       ni bouton ni encadré, ça ne dispute rien aux deux appels */
    signature: "Un seul interlocuteur, du premier appel à la vérification de vos dossiers.",
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du média
       ne sont revendiquées (arbitrage Vincent, v8-4) */
    legende1: "Plongeon imbrin en chasse",
    note1: "Déposez votre vidéo « imbrin.mp4 »",
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
          "Qui tient le capital, quels mouvements de titres, quelle forme juridique. Ici, un dirigeant seul, aucun mouvement en treize ans.",
      },
      {
        idx: "03",
        cible: "z-parcours",
        titre: "L’acte préparatoire, daté",
        texte:
          "Le fait concret qui déclenche la détection, avec sa date. Ici, une SCI constituée en 2023 pour isoler les murs.",
      },
      {
        idx: "04",
        cible: "z-angle",
        titre: "L’angle d’approche",
        texte:
          "Par où entrer, quoi dire, ce qui presse. Écrit pour être utilisé lundi matin, pas pour meubler.",
      },
      {
        idx: "05",
        cible: "z-coord",
        titre: "Les coordonnées vérifiées",
        texte:
          "Mobile, email et ligne directe du dirigeant, vérifiés la semaine de la livraison.",
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
    /* la ligne qui retourne l’objection du spécimen : oui c’est fictif, et
       voilà comment on en voit un vrai */
    viewerNote: "Au rendez-vous, nous vous montrons un dossier réel, sur votre territoire.",
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

      parcoursLbl: "Parcours",
      parcours: [
        { an: "1998", ev: "Création, transmission familiale" },
        { an: "2011", ev: "Reprise par le dirigeant actuel" },
        { an: "2023", ev: "Constitution d’une SCI, murs d’exploitation isolés", cle: true },
        { an: "04 / 2026", ev: "Dernier dépôt de comptes, clos 12/2025" },
        { an: "07 / 2026", ev: "Vérification registre : dirigeant actif, aucun relais" },
      ] as { an: string; ev: string; cle?: boolean }[],

      coordLbl: "Coordonnées",
      coordS: "Vérifiées avant livraison",
      /* v23 : les trois intitulés sont ceux que la phrase ci-dessous nomme
         déjà. Ils sont sortis pour être caviardés : le spécimen montre qu'on
         détient les coordonnées sans les publier. Le caviardage est autorisé
         dans le spécimen par l'amendement v8.1 de CLAUDE.md. */
      coordItems: ["Mobile", "Email", "Ligne directe"],
      coordD:
        "Mobile, email et ligne directe du dirigeant, vérifiés la semaine de la livraison.",

      signalLbl: "Signal détecté",
      signalAvant:
        "Gérard Vasseur dirige seul depuis 2011, à 63 ans. Derrière lui, personne au registre : ",
      signalFort:
        "pas d’associé entré récemment, aucun mouvement de titres en treize ans.",
      signalApres:
        " L’affaire est saine, trois exercices en hausse, quasiment pas de dette. Et en 2023, il a sorti les murs dans une SCI. À cet âge, ce n’est pas un geste anodin.",

      angleLbl: "Angle d’approche",
      angleTitre: "Entrer par l’homme-clé, pas par la vente.",
      angleP1:
        "Toute la valeur tient sur une personne qui a 63 ans. C’est une fragilité, et le dirigeant le sait. Un sujet qu’on ouvre sans prononcer le mot cession : que devient l’atelier le jour où il n’est plus là tous les matins.",
      angleP2Avant:
        "La SCI de 2023 dit que la réflexion a déjà commencé quelque part. Le cabinet qui entre maintenant accompagne la préparation. ",
      angleP2Fort:
        "Celui qui appelle dans dix-huit mois tombe sur une opération déjà cadrée par un confrère.",

      inconnuLbl: "Ce que nous ne savons pas",
      inconnuAvant:
        "Le chiffre d’affaires est sous option de confidentialité depuis 2021 : nous donnons une fourchette, pas un montant. Ses deux enfants sont hors de l’entreprise, mais ",
      inconnuFort: "nous ne savons pas s’ils sont une piste de reprise familiale.",
      inconnuApres: " Ce sont les deux premières questions à poser.",

      legalFicti: "Exemple fictif.",
      legal:
        " Société et chiffres inventés pour la démonstration. Le format et la méthode sont ceux de nos dossiers réels. Sources publiques (RNE, SIRENE, BODACC) · art. 14 RGPD : information des personnes accessible sur notre page Confidentialité.",
    },
  },
  /* v15 : « Le constat » et la bande de chiffres fusionnés en un seul geste.
     L'ancrage national est la seule preuve de marché sourcée à un tiers, il
     précède l'entonnoir régional qui, lui, est un ordre de grandeur à nous. */
  entonnoir: {
    kicker: "Le filtre",
    titreAvant: "Tout un marché, réduit à ceux qui ",
    titreItalique: "préparent",
    intro:
      "Le marché visible est un marché en retard. La valeur est en amont, 12 à 18 mois avant le marché, chez le dirigeant qui n’a encore rien annoncé. Voici comment se resserre une région.",
    ancrage:
      "Environ 700 000 dirigeants de PME partent à la retraite d’ici dix ans, près de la moitié sans successeur identifié.",
    ancrageSource: "Ordres de grandeur publics · CRA · Bpifrance",
    ariaPaliers: "Resserrement d’une région, ordre de grandeur",
    paliers: [
      {
        n: nb("8 000"),
        fort: "PME actives",
        suite: " sur la région, 10 à 99 salariés, plus de trois ans d’existence",
      },
      {
        n: "740",
        fort: "dirigeants en âge de transmission",
        suite: ", d’après le registre",
      },
      {
        n: "310",
        fort: "sans relais de succession",
        suite: " identifiable dans la structure",
      },
      {
        n: "45",
        fort: "avec un acte de préparation daté.",
        suite: " Ceux-là, personne ne les voit encore.",
        prise: true,
      },
    ] as { n: string; fort: string; suite: string; prise?: boolean }[],
    piedAvant: "Une quarantaine de dossiers là où vos confrères ne voient qu’un annuaire. ",
    piedItalique: "Ce sont eux que nous livrons.",
    noteAvant: "Puis environ ",
    noteFort: "un tiers écarté",
    noteApres: " à la vérification humaine.",
    noteLigne2: "Ce qui reste est livré. Rien d’autre.",
    /* le stock et le flux. Sans cette distinction, un prospect divise 45 par
       le rythme mensuel, conclut que trois mois lui suffisent, et lit dans la
       page une invitation à partir à l'échéance de son engagement. Aucun
       chiffre de flux ici : il n'est pas mesuré, il est annoncé au devis
       comme le volume. */
    bascule1Avant: "Ces 45, une fois vérifiés à la main, forment votre ",
    bascule1Fort: "rattrapage",
    bascule1Apres:
      " : ce que votre périmètre contient déjà, livré dans les premières semaines.",
    bascule2:
      "Ensuite, chaque mois, de nouveaux dirigeants entrent en préparation. Ce flux est mesuré sur votre périmètre et annoncé au devis.",
  },
  /* v15 · B1 : trois étapes, pas quatre. L'ancienne « Le dossier
     d'approche » est absorbée par la section qui montre le document,
     l'ancienne vérification et l'ancienne veille tiennent en une. */
  methode: {
    kicker: "La méthode",
    statement: "Nous montrons nos dossiers. Pas notre grille.",
    sousTitre:
      "Chaque dossier livré expose le signal qui l’a déclenché. La grille qui trie une région entière reste chez nous.",
    lignes: [
      {
        num: "01",
        titre: "Le périmètre, arrêté avec vous",
        texte:
          "Région, typologie d’entreprises, taille de cible, structure de détention. Inscrit au devis.",
      },
      {
        num: "02",
        titre: "La détection, aux sources publiques",
        texte:
          "RNE, SIRENE, BODACC. Des signaux observables et datés. Pas de scores prédictifs inventés.",
      },
      {
        num: "03",
        titre: "La vérification, puis la veille",
        texte: `Chaque détection est reprise à la main avant livraison. Le périmètre reste sous surveillance, chaque bascule livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
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
      lead: "Nous détectons en continu les dirigeants de votre périmètre qui préparent leur sortie, et nous vous livrons les dossiers d’approche au fil de l’eau.",
      prix: nb(brand.PRICING.origination.prixPlancher),
      metaFort: `À partir de, ${brand.PRICING.origination.periode}`,
      metaSuite: ", selon le périmètre convenu",
      metaLigne2: `Engagement ${nb(brand.PRICING.origination.engagement)}, puis reconduction mensuelle`,
      /* l'arithmétique posée à la place du prospect, sans chiffre
         d'honoraires ni promesse de résultat : c'est lui qui sait ce que
         vaut un mandat dans son cabinet, pas nous */
      arithmetique: `${nb(brand.PRICING.origination.prixPlancher)} par mois, soit ${nb(brand.PRICING.origination.prixAnnuel)} sur l’année. Vous savez ce que vaut un mandat de cession dans votre cabinet.`,
      /* un tableau, pas une chaîne : le corps se lit en paragraphes et le
         composant les rend tels quels. Un seul élément aujourd'hui. */
      corps: [
        "Le périmètre est arrêté avec vous à l’appel : région, typologie d’entreprises, ce que vous voulez voir détecté. Nous mesurons ce qu’il contient et nous vous l’annonçons au devis, avant tout engagement. Le plancher mensuel y est chiffré, avant votre signature : un mois qui passe sous ce nombre n’est pas facturé.",
      ],
      points: [
        "Un périmètre défini avec vous, pas un découpage imposé",
        "Le rattrapage initial de votre périmètre, livré dès les premières semaines",
        "Puis la veille du périmètre, ce que vous payez chaque mois : les nouvelles bascules vérifiées et livrées sous 7 jours",
        "Vérification humaine avant chaque livraison, taux d’écart publié",
        "Information des personnes, registre d’opposition et opt-out pris en charge",
        "Un seul cabinet servi sur votre périmètre, quel que soit l’usage",
      ],
    },
    complement: {
      nom: "Le mandat de recherche",
      lead: `Quand un mandat de recherche arrive sur votre bureau, nous l’alimentons à la mission : vos critères, une shortlist de cibles vérifiées sous ${nb(brand.PRICING.mandat.delai)}.`,
      prix: nb(brand.PRICING.mandat.prix),
      metaLigne1: "Par mission, à la livraison",
      metaLigne2: "Hors périmètres déjà sous exclusivité",
    },
    pied: {
      fort: "Pas de commission sur la transaction, jamais.",
      suite: " Notre rémunération ne dépend ni du closing, ni du prix de cession.",
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
          " Registres publics et fournisseurs contractualisés. Opt-out définitif honoré, information art. 14 jointe.",
      },
      {
        fort: "Pas de chiffres invérifiables.",
        suite: " Ce que nous publions, nous le mesurons.",
      },
    ],
  },
  /* le taux d'écart était enterré dans la FAQ et dans les engagements :
     il devient une section, juste avant le fondateur. */
  mesure: {
    kicker: "La mesure",
    statement: "Ce que nous mesurons sur nous-mêmes",
    /* le repère chiffré fait face aux énoncés : signe et valeur sont
       séparés parce qu'ils ne portent pas la même couleur */
    repereSigne: brand.PROOF.tauxEcart.signe,
    repereValeur: brand.PROOF.tauxEcart.valeur,
    items: [
      {
        titre: "Taux d’écart à la vérification",
        texte:
          "Environ un tiers des détections sont écartées avant livraison. Publié depuis l’ouverture.",
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
    /* seul endroit du site qui dit l’industrialisation du pipeline */
    corps:
      "Le pipeline de détection est industrialisé ; chaque dossier est ensuite vérifié à la main.",
    nom: "Vincent Fournier, fondateur",
    lieu: "entre Paris et Bayonne",
    id: `${brand.ENTITY.raisonSociale} · SIREN ${nb(brand.ENTITY.siren)} · ${brand.ENTITY.ville}`,
    linkedin: "LinkedIn ↗",
  },
  faq: {
    kicker: "Questions fréquentes",
    statement: "Ce qu’on nous demande avant de signer.",
    items: [
      {
        question: "D’où viennent vos données, et est-ce conforme au RGPD ?",
        reponse:
          "L’identité, les chiffres et la structure viennent des registres publics français (RNE/INPI, SIRENE, BODACC). Les coordonnées du dirigeant viennent de fournisseurs d’enrichissement B2B, sourcés et contractualisés, vérifiés avant livraison, aucune donnée grise. Base légale de l’intérêt légitime en B2B, information art. 14 rendue publiquement accessible sur notre page Confidentialité, opt-out définitif honoré, premier contact toujours adressé à l’entreprise.",
      },
      {
        question: "Pourquoi publier votre taux d’écart ?",
        reponse:
          "Un fournisseur qui ne publie pas son taux d’erreur vous demande de le croire sur parole. Environ un tiers de nos détections sont écartées à la vérification : c’est le coût réel de dossiers fiables.",
      },
      {
        question: "Comment définit-on le périmètre de recherche ?",
        reponse:
          "Lors d’un premier échange, nous arrêtons ensemble votre périmètre : région, typologie d’entreprises, taille de cible, structure de détention. Il est inscrit au devis et conditionne le sourcing livré ensuite.",
      },
      {
        question: "Que couvre exactement l’exclusivité ?",
        reponse:
          "Un périmètre, un cabinet : personne d’autre n’est servi sur votre région et votre typologie d’entreprises tant que le contrat court, quel que soit l’usage. La définition exacte est écrite sous les deux blocs de l’offre, et reprise au devis.",
      },
      {
        question: "Intervenez-vous sur un mandat de recherche ?",
        reponse:
          "Oui. Vos critères, une shortlist de cibles vérifiées sous 7 jours, au tarif de 3 500 € HT par mission, hors périmètres déjà sous exclusivité. C’est l’usage acheté qui est nommé au contrat, et deux clients ne sont jamais servis sur le même périmètre.",
      },
      {
        question: "Prenez-vous une commission sur les opérations ?",
        reponse:
          "Non. Jamais de commission sur la transaction, ni sur le prix de cession. Vous réglez le contrat mensuel, et une mission de recherche quand vous en confiez une. Rien d’autre.",
      },
      {
        question: "Combien de dossiers par mois, et si mon périmètre est pauvre ?",
        reponse:
          "Les premières semaines livrent le rattrapage, ce que votre périmètre contient déjà. Ensuite viennent les nouvelles bascules, au fil de la détection. Les deux volumes sont mesurés sur votre périmètre et annoncés au devis, avant tout engagement. Le plancher mensuel est chiffré au devis : un mois qui passe sous ce nombre n’est pas facturé.",
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
        texte: "Des discussions sont en cours sur ce périmètre. Un appel reste possible : premier signé, premier servi.",
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
          corps: `Le site est édité par ${brand.ENTITY.raisonSociale}, SIREN ${nb(brand.ENTITY.siren)}, ${brand.ENTITY.ville}.`,
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
          corps: "Pour toute question relative au site :",
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
          corps: `Les traitements décrits sur cette page sont mis en œuvre par ${brand.ENTITY.raisonSociale}, SIREN ${nb(brand.ENTITY.siren)}. ${brand.MARQUE} ${brand.SUFFIXE} est une marque exploitée par cette société.`,
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
            "Nous identifions des sociétés dont la transmission paraît en préparation, et nous transmettons ces informations à un cabinet de fusions acquisitions, un seul par périmètre, qui pourra prendre contact avec le dirigeant.",
            "Le traitement repose sur l’intérêt légitime : mettre en relation des dirigeants susceptibles de céder leur entreprise avec des professionnels de la transmission. Il ne porte que sur des personnes dans l’exercice de leurs fonctions professionnelles.",
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
        /* EMPLACEMENT RÉSERVÉ : les transferts hors UE viennent ici, entre les
           destinataires et les durées. Rien n'est écrit tant que la région
           d'hébergement et le DPA du prestataire ne sont pas vérifiés. Ne rien
           affirmer dans un sens ni dans l'autre en attendant. */
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
};
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du
       média ne sont revendiquées (arbitrage Vincent, v8-4) */
