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
      "Détection au registre des PME françaises en transition capitalistique, 12 à 18 mois avant le marché. Dossiers vérifiés, un seul client par zone.",
  },
  hero: {
    nav: [
      { label: "Méthode", ancre: "#methode" },
      { label: "Offre", ancre: "#offre" },
      { label: "FAQ", ancre: "#faq" },
    ],
    navAppel: { label: "Vérifier ma zone", ancre: "#appel" },
    eyebrow: "Origination sell-side · PME françaises · 1-10 M€",
    titreLigne1: "Les cédants de demain,",
    titreLigne2: "détectés",
    titreItalique: "sous la surface",
    sousTitre:
      "Sourcing propriétaire des transitions capitalistiques, détectées au registre 12 à 18 mois avant le marché. Un périmètre défini avec vous, des dossiers vérifiés à la main, un seul client par zone.",
    cta: "Vérifier la disponibilité de ma zone",
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du média
       ne sont revendiquées (arbitrage Vincent, v8-4) */
    legende1: "Plongeon imbrin en chasse",
    note1: "Déposez votre vidéo « imbrin.mp4 »",
    note2: "dans public/, puis rechargez.",
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
          "Nous cadrons ensemble le scope de recherche : secteurs, zone, taille de cible, structure de détention. La détection s’appuie sur des sources exclusivement publiques (RNE, SIRENE, BODACC), sur des signaux observables et datés. Pas de scores prédictifs inventés.",
      },
      {
        num: "02",
        titre: "Vérification humaine",
        texte:
          "Chaque détection est vérifiée manuellement avant livraison. Ce qui ne tient pas est écarté, et compté dans nos chiffres publics.",
      },
      {
        num: "03",
        titre: "Le brief de sourcing",
        texte:
          "Un livrable opérationnel par cible : contexte, signaux sourcés et datés, structure de détention, angle d’approche conforme. Prêt à intégrer votre pipeline et à ouvrir un premier contact.",
      },
      {
        num: "04",
        titre: "La veille",
        texte: `Votre zone entière sous surveillance continue. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
    ],
  },
  produit: {
    kicker: "Le produit",
    statement: "Le brief est le produit.",
    lead: "Pas de plateforme à apprendre, pas de crédits, pas d’export de 4 000 lignes à retraiter. Un flux de cibles qualifiées, en petit nombre, vérifiées et argumentées : le livrable qu’un associé lit en trois minutes et pousse directement dans son pipeline de sourcing.",
    annos: [
      {
        m: "A",
        texte:
          "Identité caviardée en phase de découverte : le couple secteur × bassin n’est pas identifiable.",
      },
      {
        m: "B",
        texte: "Chaque signal est daté et sourcé au registre. Rien d’invérifiable.",
      },
      {
        m: "C",
        texte: "Angle d’approche et information art. 14 RGPD jointe à chaque dossier.",
      },
    ],
    doc: {
      aria: "Spécimen de brief, données fictives",
      tete1: "Dossier · Spécimen",
      tete2: "Données fictives",
      caviardeSr: "information caviardée",
      champs: [
        { k: "Secteur", v: "Services B2B" },
        { k: "Bassin", barre: 108 },
        { k: "Dirigeant", barre: 84, suffixe: " · 67 ans" },
      ] as { k: string; v?: string; barre?: number; suffixe?: string }[],
      signauxLbl: "Signaux relevés",
      signaux: [
        { d: "11.02.2026", s: "Transfert de siège au domicile du dirigeant", src: "RNE" },
        { d: "07.04.2026", s: "Fin de mandat du cogérant, non remplacé", src: "RNE" },
        { d: "26.05.2026", s: "Dépôt des comptes hors du délai habituel", src: "BODACC" },
      ],
      angleLbl: "Angle d’approche",
      angle:
        "Dirigeant seul au capital depuis 2019, sans successeur identifié au registre. Entrée recommandée par la transmission patrimoniale plutôt que par la valorisation : le calendrier des signaux suggère une fenêtre de douze à dix-huit mois avant une mise en marché, pendant laquelle une approche directe et confidentielle reste possible auprès du dirigeant.",
      pied: "Spécimen fictif. Nos briefs réels ne quittent pas leurs zones.",
    },
  },
  bande: {
    aria: "Chiffres clés",
    cellules: [
      { n: "700 000", l: "dirigeants partants sous 10 ans" },
      { n: "12-18", l: "mois d’avance sur le marché" },
      { n: nb(brand.PROOF.tauxEcartVerification), l: "de détections écartées, chiffre publié" },
      { n: "1", l: "client par zone et par verticale" },
    ],
  },
  offre: {
    kicker: "L’offre",
    statement: "Une zone. Une verticale. Un client.",
    note: "L’exclusivité porte sur un scope, une verticale et une zone, tenus pour un seul client. Elle se prend au premier abonnement signé, pas au premier appel. La grille est publique.",
    lignes: [
      {
        num: "01",
        titre: "Couverture",
        icone: "couverture",
        texte: `Le sourcing exhaustif de votre périmètre : l’intégralité du stock vérifié, livrée par vagues en ${nb(brand.PROOF.dureeCouverture)}. Le point de départ.`,
      },
      {
        num: "02",
        titre: "Veille",
        icone: "veille",
        texte: `La cohorte complète surveillée en continu. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
      {
        num: "03",
        titre: "Exclusivité",
        icone: "exclusivite",
        texte:
          "Une zone, une verticale, un client. La part se prend au premier abonnement signé.",
      },
    ] as { num: string; titre: string; icone: NomIcone; texte: string }[],
    grille: {
      lignes: [
        { titre: "Boutiques M&A", prix: nb(`${brand.PRICING.boutique.prix} / région`) },
        { titre: "Family offices", prix: "Sur-mesure" },
      ],
      noteAvant: `Sans engagement · ${nb(brand.PRICING.annuel)} · 2e verticale ${nb(brand.PRICING.verticale2)} · `,
      noteFort: "Aucun deal hors grille.",
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
        suite:
          " Environ un tiers de nos détections sont écartées à la vérification. Nous publions ce chiffre.",
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
          "Oui : base légale de l’intérêt légitime en B2B, information art. 14 jointe à chaque brief, opt-out définitif honoré, premier contact toujours adressé à l’entreprise.",
      },
      {
        question: "Pourquoi publier votre taux d’écart ?",
        reponse:
          "Un fournisseur qui ne publie pas son taux d’erreur vous demande de le croire sur parole. Environ un tiers de nos détections sont écartées à la vérification : c’est le coût réel de dossiers fiables.",
      },
      {
        question: "Comment définit-on le périmètre de recherche ?",
        reponse:
          "Lors d’un premier échange, nous cadrons ensemble le scope : secteurs visés, zone, taille de cible, structure de détention. Ce périmètre devient votre exclusivité et conditionne le sourcing livré ensuite.",
      },
      {
        question: "Que couvre exactement l’exclusivité ?",
        reponse:
          "La livraison des cibles d’une verticale sur une zone, à un seul client. Elle se prend au premier abonnement signé.",
      },
      {
        question: "Travaillez-vous au success fee ?",
        reponse:
          "Non. Ni mandat, ni commission, ni participation au deal. C’est ce qui garantit la neutralité de nos dossiers.",
      },
      {
        question: "Combien de dossiers par mois ?",
        reponse:
          "Peu, et vérifiés. Le volume dépend de la densité réelle de votre zone : mesurée avant l’abonnement, annoncée à l’appel, tenue ensuite.",
      },
    ],
  },
  final: {
    kicker: "Prochaine étape",
    statement: "La densité de votre zone est déjà mesurée.",
    lead: "Elle vous est annoncée à l’appel, avec la disponibilité de l’exclusivité sur votre région et votre verticale. Trente minutes, avec le fondateur.",
    cta: "Réserver un appel avec Vincent",
  },
  carte: {
    ariaCarte: "Carte des régions françaises",
    panneauVide: "Sélectionnez une région.",
    bouton: "Réserver un appel avec Vincent",
    statuts: {
      disponible: {
        label: "Disponible",
        texte: "Zone ouverte. La part se prend au premier abonnement signé.",
      },
      en_discussion: {
        label: "En discussion",
        texte: "Des discussions sont en cours sur cette zone. Un appel reste possible : premier signé, premier servi.",
      },
      exclusivite: {
        label: "Sous exclusivité",
        texte: "Cette zone est servie en exclusivité. Laissez vos coordonnées à l’appel pour être prévenu si elle se libère.",
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
          corps: `Les dossiers produits par ${brand.MARQUE} reposent exclusivement sur des sources publiques (RNE, SIRENE, BODACC). Une information au titre de l’article 14 du RGPD est jointe à chaque brief. Toute personne concernée peut exercer un opt-out définitif en écrivant à l’adresse ci-dessous ; il est honoré sans condition.`,
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
