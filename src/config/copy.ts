import { brand } from "./brand";

/** rend une valeur de brand insécable (les chiffres ne se coupent pas en fin de ligne) */
const nb = (s: string) => s.replace(/ /g, " ");

/* un seul libellé d’appel sur tout le site : trois copies indépendantes avaient
   déjà produit une divergence en v13 */
const CTA = "Réserver un échange";

export type NomIcone = "couverture" | "veille" | "exclusivite";

export type SectionLegale = {
  titre: string;
  corps: string;
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
    eyebrow: "Origination sell-side · PME françaises · 1-10 M€",
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
     qu'une section. Cliquer un élément à gauche surligne sa zone à droite.
     Le dossier est fictif et le dit à trois endroits : barre du viewer,
     sous le titre, pied de document. Ne jamais retirer l'une des trois. */
  dossier: {
    kicker: "Ce que vous recevez",
    titre: "Ce qui arrive sur votre bureau.",
    chapo:
      "Un dossier d’approche, pas une ligne dans un fichier. Chaque élément ci-dessous est surligné sur un exemple de dossier, à droite. Cliquez pour le parcourir.",
    /* l'élément actif au chargement : l'acte préparatoire */
    defaut: "z-fin",
    elements: [
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
          "Mobile, email et ligne directe du dirigeant, contrôlés à la source la semaine de la livraison.",
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
      titre: "Établissements Vasseur",
      desc: "Génie climatique · 60-99 salariés · agglomération type · SAS, titres cessibles",
      interloLbl: "Interlocuteur",
      interlo: "Gérard Vasseur · Président · 63 ans",

      finLbl: "Finances · 2025",
      figures: [
        { n: "640 K€", k: "Résultat net 2025" },
        { n: "1,9 M€", k: "Trésorerie" },
        { n: "2,1 M€", k: "Fonds de roulement" },
        { n: "≈ 0,2", k: "Gearing" },
      ],
      tendance: [
        { a: "2023", v: "~510 K€" },
        { a: "2024", v: "~590 K€" },
        { a: "2025", v: "~640 K€" },
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
      coordD:
        "Mobile, email et ligne directe du dirigeant, contrôlés à la source publique la semaine de la livraison.",

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
        " Société et chiffres inventés pour la démonstration. Le format et la méthode sont ceux de nos dossiers réels. Sources publiques (RNE, SIRENE, BODACC) · art. 14 RGPD : information délivrée au premier contact.",
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
      corps:
        "Le périmètre est arrêté avec vous à l’appel : région, typologie d’entreprises, ce que vous voulez voir détecté. Nous mesurons ce qu’il contient et nous vous l’annonçons au devis, avant tout engagement. Un mois qui passe sous ce volume n’est pas facturé.",
      points: [
        "Un périmètre défini avec vous, pas un découpage imposé",
        "Le rattrapage initial de votre périmètre, livré dès les premières semaines",
        "Puis les nouvelles bascules au fil de l’eau, vérifiées et livrées sous 7 jours",
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
          " Sources publiques, opt-out définitif honoré, information art. 14 RGPD jointe.",
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
          "Des registres publics français (RNE/INPI, SIRENE, BODACC) et d’enrichissements ponctuels sourcés, aucune donnée grise. Base légale de l’intérêt légitime en B2B, information art. 14 jointe à chaque dossier d’approche, opt-out définitif honoré, premier contact toujours adressé à l’entreprise.",
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
          "Les premières semaines livrent le rattrapage, ce que votre périmètre contient déjà. Ensuite viennent les nouvelles bascules, au fil de la détection. Les deux volumes sont mesurés sur votre périmètre et annoncés au devis, avant tout engagement, et un mois qui passe sous ce volume n’est pas facturé.",
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
    lead: "Ce qu’il contient vous est annoncé au devis. Un mois qui passe sous ce volume n’est pas facturé. Trente minutes, avec le fondateur.",
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
          titre: "Cookies et données de navigation",
          corps: "Ce site ne dépose aucun cookie, n’embarque aucun traceur ni script tiers et ne collecte aucune donnée de navigation.",
        },
        {
          titre: "Prise de rendez-vous",
          corps: "La prise de rendez-vous s’effectue via Calendly, service externe accessible par un lien sortant. Les informations saisies à cette occasion sont traitées par Calendly, selon ses propres conditions.",
        },
        {
          titre: "Données traitées par le service",
          corps: `Les dossiers produits par ${brand.MARQUE} reposent exclusivement sur des sources publiques (RNE, SIRENE, BODACC). Une information au titre de l’article 14 du RGPD est jointe à chaque dossier d’approche. Toute personne concernée peut exercer un opt-out définitif en écrivant à l’adresse ci-dessous ; il est honoré sans condition.`,
        },
        {
          titre: "Contact",
          corps: "Pour exercer un opt-out ou pour toute question :",
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
