import { brand } from "./brand";

/** rend une valeur de brand insécable (les chiffres ne se coupent pas en fin de ligne) */
const nb = (s: string) => s.replace(/ /g, " ");

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
    ],
    navAppel: { label: "Définir mon périmètre", ancre: "#appel" },
    eyebrow: "Origination sell-side · PME françaises · 1-10 M€",
    titreLigne1: "Nous détectons les dirigeants",
    titreLigne2Avant: "qui ",
    titreItalique: "préparent",
    titreLigne2Apres: " leur sortie.",
    sousTitre:
      "Et nous livrons le dossier d’approche qui va avec. Un cabinet par périmètre.",
    cta: "Réserver un échange",
    ctaSecondaire: { label: "L’origination", ancre: "#origination" },
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
  constat: {
    kicker: "Le constat",
    titreAvant: "La plus grande vague de transmissions arrive ",
    titreItalique: "sans carte",
    lead: "Environ 700 000 dirigeants de PME partiront à la retraite d’ici dix ans ; près de la moitié n’ont pas de successeur identifié. Quand un dossier devient visible, la concurrence l’est aussi. Les mandats se gagnent avant, auprès du dirigeant qui n’a encore rien annoncé.",
    sourcesLigne1: "Ordres de grandeur publics",
    sourcesLigne2: "CRA · Bpifrance",
    citation1: "« Le marché visible",
    citation2: "est un marché en retard. »",

  },
  methode: {
    kicker: "La méthode",
    statement: "Nous montrons nos résultats. Jamais nos critères.",
    lignes: [
      {
        num: "01",
        titre: "Le périmètre, défini avec vous",
        texte:
          "Nous arrêtons ensemble votre périmètre : région, typologie d’entreprises, taille de cible, structure de détention. La détection s’appuie sur des sources exclusivement publiques (RNE, SIRENE, BODACC), sur des signaux observables et datés. Pas de scores prédictifs inventés.",
      },
      {
        num: "02",
        titre: "Vérification humaine",
        texte:
          "Chaque détection est vérifiée manuellement avant livraison. Ce qui ne tient pas est écarté, et compté dans nos chiffres publics.",
      },
      {
        num: "03",
        titre: "Le dossier d’approche",
        texte:
          "Un livrable opérationnel par cible : contexte, signaux sourcés et datés, structure de détention, angle d’approche conforme. Prêt à intégrer votre pipeline et à ouvrir un premier contact.",
      },
      {
        num: "04",
        titre: "La veille",
        texte: `Votre périmètre entier sous surveillance continue. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
    ],
  },
  bande: {
    aria: "Chiffres clés",
    cellules: [
      { n: "700 000", l: "dirigeants partants sous 10 ans" },
      { n: "12-18", l: "mois d’avance sur le marché" },
      { n: nb(brand.PROOF.tauxEcartVerification), l: "de détections écartées, chiffre publié" },
      { n: "1", l: "un seul cabinet servi sur votre périmètre" },
    ],
  },
  offre: {
    kicker: "L’offre",
    statement: "Deux façons de travailler ensemble",
    paliers: [
      {
        nom: "L’Origination",
        ancre: "origination",
        lead: "Nous détectons en continu les dirigeants de votre périmètre qui préparent leur sortie, et nous vous livrons les dossiers d’approche au fil de l’eau.",
        prix: `À partir de ${nb(brand.PRICING.origination.prixPlancher)}, selon le périmètre convenu.`,
        prix2: `Engagement ${nb(brand.PRICING.origination.engagement)}, puis reconduction mensuelle.`,
        corps:
          "Le périmètre est arrêté avec vous à l’appel : région, typologie d’entreprises, ce que vous voulez voir détecté. Nous mesurons ce qu’il contient et nous vous l’annonçons au devis, avant tout engagement. Un mois qui passe sous ce volume n’est pas facturé.",
        points: [
          "Un périmètre défini avec vous, pas un découpage imposé",
          "Des dossiers d’approche chaque mois, à hauteur de ce que votre périmètre contient",
          "Vérification humaine avant chaque livraison, taux d’écart publié",
          "Information des personnes, registre d’opposition et opt-out pris en charge",
          "Un seul cabinet servi sur votre périmètre, quel que soit l’usage",
        ],
      },
      {
        nom: "Le mandat de recherche",
        lead: `Quand un mandat de recherche arrive sur votre bureau, nous l’alimentons à la mission : vos critères, une shortlist de cibles vérifiées sous ${nb(brand.PRICING.mandat.delai)}.`,
        prix: `${nb(brand.PRICING.mandat.prix)} par mission, à la livraison.`,
        prix2: "Hors périmètres déjà sous exclusivité.",
      },
    ] as {
      nom: string;
      ancre?: string;
      lead: string;
      prix: string;
      prix2?: string;
      corps?: string;
      points?: string[];
    }[],
    /* sans définition écrite au devis, l'exclusivité est invérifiable
       pour un acheteur : le bloc ci-dessous est ce qui la rend opposable */
    definition: {
      k: "Un périmètre",
      texte:
        "Un périmètre, c’est une région et une typologie d’entreprises, arrêtées avec vous à l’appel et inscrites au devis. Sur ce périmètre, vous êtes seul servi tant que le contrat court. Un second périmètre reste possible.",
    },
    pied: {
      fort: "Pas de commission sur la transaction, jamais.",
      suite: " Notre rémunération ne dépend ni du closing, ni du prix de cession.",
    },
  },
  engagements: {
    kicker: "Nos engagements",
    statement: "Ce que nous ne faisons pas.",
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
  fondateur: {
    kicker: "Le fondateur",
    statement: "Vous parlez au fondateur, pas à un SDR.",
    portraitAlt: "Vincent Fournier, fondateur",
    citation: "« Au téléphone comme en livraison, vous avez un seul interlocuteur : celui qui a construit la machine et qui vérifie vos dossiers. »",
    corps: `${brand.MARQUE} ${brand.SUFFIXE} est opéré par Vincent Fournier, fondateur, basé entre Paris et Bayonne. Le pipeline de détection est industrialisé ; la vérification finale de chaque dossier reste humaine.`,
    id: `${brand.ENTITY.raisonSociale} · SIREN ${nb(brand.ENTITY.siren)} · ${brand.ENTITY.ville}`,
    linkedin: "LinkedIn ↗",
  },
  faq: {
    kicker: "Questions fréquentes",
    statement: "Ce qu’on nous demande avant de signer.",
    items: [
      {
        question: "D’où viennent vos données ?",
        reponse:
          "Des registres publics français (RNE/INPI, SIRENE, BODACC) et d’enrichissements ponctuels sourcés. Aucune donnée grise.",
      },
      {
        question: "Est-ce conforme au RGPD ?",
        reponse:
          "Oui : base légale de l’intérêt légitime en B2B, information art. 14 jointe à chaque dossier d’approche, opt-out définitif honoré, premier contact toujours adressé à l’entreprise.",
      },
      {
        question: "Pourquoi publier votre taux d’écart ?",
        reponse:
          "Un fournisseur qui ne publie pas son taux d’erreur vous demande de le croire sur parole. Environ un tiers de nos détections sont écartées à la vérification : c’est le coût réel de dossiers fiables.",
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
        question:
          "Que se passe-t-il si mon périmètre est pauvre ?",
        reponse:
          "Nous vous le disons au devis, avant tout engagement. Et un mois qui passe sous le volume annoncé n’est pas facturé.",
      },
      {
        question: "Combien de dossiers par mois ?",
        reponse:
          "Autant que votre périmètre en contient, annoncé au devis et tenu ensuite. Un mois qui passe sous ce volume n’est pas facturé.",
      },
    ],
  },
  final: {
    kicker: "Prochaine étape",
    statement: "Nous mesurons votre périmètre avant que vous vous engagiez.",
    lead: "Ce qu’il contient vous est annoncé au devis. Un mois qui passe sous ce volume n’est pas facturé. Trente minutes, avec le fondateur.",
    cta: "Réserver un échange",
  },
  carte: {
    ariaCarte: "Carte des régions françaises",
    panneauVide: "Sélectionnez une région.",
    bouton: "Réserver un échange",
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
