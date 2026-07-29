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
      "Nous détectons les dirigeants qui préparent leur sortie et livrons le dossier d’approche qui va avec. Un cabinet par cellule.",
  },
  hero: {
    nav: [
      { label: "Dossier", ancre: "#dossier" },
      { label: "Méthode", ancre: "#methode" },
      { label: "Offre", ancre: "#offre" },
      { label: "FAQ", ancre: "#faq" },
    ],
    navAppel: { label: "Vérifier ma cellule", ancre: "#appel" },
    eyebrow: "Origination sell-side · PME françaises · 1-10 M€",
    titreLigne1: "Nous détectons les dirigeants",
    titreLigne2: "qui préparent leur sortie.",
    sousTitre:
      "Et nous livrons le dossier d’approche qui va avec. Un cabinet par cellule.",
    cta: "Réserver un échange",
    ctaSecondaire: { label: "La Cartographie", ancre: "#cartographie" },
    /* la légende ne décrit que le sujet : ni l'origine ni la durée du média
       ne sont revendiquées (arbitrage Vincent, v8-4) */
    legende1: "Plongeon imbrin en chasse",
    note1: "Déposez votre vidéo « imbrin.mp4 »",
    note2: "dans public/, puis rechargez.",
  },
  /* l'unité de valeur du produit : elle se décrit avant tout le reste,
     juste après le hero. Le dernier item est distingué à dessein. */
  dossier: {
    kicker: "Le dossier d’approche",
    statement: "Ce que vous recevez",
    chapo:
      "Pas une liste. Pas un signal. Un dossier qu’un associé peut utiliser lundi matin.",
    lignes: [
      {
        num: "01",
        titre: "Structure de détention réelle",
        texte:
          "Qui détient quoi, démembrement, présence ou absence des enfants au capital.",
      },
      {
        num: "02",
        titre: "L’acte préparatoire, et sa date",
        texte: "Le fait daté qui a déclenché la détection.",
      },
      {
        num: "03",
        titre: "Ce que disent les statuts sur la cessibilité",
        texte: "Clauses d’agrément, pactes, mouvements de titres.",
      },
      {
        num: "04",
        titre: "Ordres de grandeur financiers",
        texte: "Issus des comptes déposés.",
      },
      {
        num: "05",
        titre: "L’angle d’approche",
        texte: "Par quoi commencer, ce qui presse, ce qui bloque.",
      },
      {
        num: "06",
        titre: "Coordonnées vérifiées du dirigeant",
        texte: "Vérifiées à la main avant livraison.",
      },
      {
        num: "07",
        titre: "Ce que nous ne savons pas",
        texte:
          "Section systématique. Les zones d’ombre sont écrites, jamais comblées.",
        marque: true,
      },
    ] as { num: string; titre: string; texte: string; marque?: boolean }[],
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
          "Nous arrêtons ensemble votre cellule : région, famille d’activités, taille de cible, structure de détention. La détection s’appuie sur des sources exclusivement publiques (RNE, SIRENE, BODACC), sur des signaux observables et datés. Pas de scores prédictifs inventés.",
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
        texte: `Votre cellule entière sous surveillance continue. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
    ],
  },
  produit: {
    kicker: "Le produit",
    statement: "Le dossier est le produit.",
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
      aria: "Spécimen de dossier, données fictives",
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
      pied: "Spécimen fictif. Nos dossiers réels ne quittent pas leurs cellules.",
    },
  },
  bande: {
    aria: "Chiffres clés",
    cellules: [
      { n: "700 000", l: "dirigeants partants sous 10 ans" },
      { n: "12-18", l: "mois d’avance sur le marché" },
      { n: nb(brand.PROOF.tauxEcartVerification), l: "de détections écartées, chiffre publié" },
      { n: "1", l: "cabinet par cellule" },
    ],
  },
  offre: {
    kicker: "L’offre",
    statement: "Deux façons de commencer",
    paliers: [
      {
        nom: "La Cartographie",
        ancre: "cartographie",
        prix: `${nb(brand.PRICING.cartographie.prix)}, ${brand.PRICING.cartographie.nature}`,
        lead: `Un état complet de votre cellule, livré sous ${nb(brand.PRICING.cartographie.delai)}.`,
        points: [
          "Le nombre de dirigeants en situation de succession ouverte sur votre cellule, segmenté",
          "Ceux qui ont posé un acte préparatoire daté, et lequel",
          "Cinq dossiers d’approche complets, livrés",
          "La liste explicite de ce que nous ne savons pas",
        ],
        note: `Aucun engagement. Intégralement déduite du contrat annuel si vous signez sous ${nb(brand.PRICING.cartographie.deduction)}.`,
      },
      {
        nom: "La Cellule",
        prix: `${nb(brand.PRICING.cellule.prix)}, ${brand.PRICING.cellule.engagement}`,
        prix2: `${nb(brand.PRICING.cellule.mandat)} par mandat de cession signé issu d’un dossier ${brand.MARQUE}`,
        lead: "Une région. Une famille d’activités. Un cabinet.",
        points: [
          "Les dossiers d’approche au fil de la détection",
          "Vérification humaine avant chaque livraison, taux d’écart publié",
          "Information des personnes, registre d’opposition et opt-out pris en charge par nous",
          "Vos mandats de recherche alimentés, sur cellules libres, sans supplément",
        ],
        note: "Personne d’autre n’est servi sur votre cellule, quel que soit l’usage.",
      },
    ] as {
      nom: string;
      ancre?: string;
      prix: string;
      prix2?: string;
      lead: string;
      points: string[];
      note: string;
    }[],
    /* sans définition écrite au contrat, l'exclusivité est invérifiable
       pour un acheteur : le bloc ci-dessous est ce qui la rend opposable */
    definition: {
      k: "Une cellule",
      texte:
        "Une cellule, c’est une région administrative et une famille d’activités, arrêtées avec vous à l’appel et inscrites au contrat. Sur cette cellule, vous êtes seul servi tant que le contrat court. Une seconde cellule reste possible.",
    },
    pied: {
      fort: "Pas de commission sur la transaction, jamais.",
      suite: " Notre rémunération ne dépend ni du closing, ni du prix de cession.",
      note: "La grille est publique. Aucun accord hors grille.",
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
        suite: "",
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
          "Lors d’un premier échange, nous arrêtons ensemble votre cellule : région, famille d’activités, taille de cible, structure de détention. Elle est inscrite au contrat et conditionne le sourcing livré ensuite.",
      },
      {
        question: "Que couvre exactement l’exclusivité ?",
        reponse:
          "Une cellule, un cabinet : personne d’autre n’est servi sur votre région et votre famille d’activités tant que le contrat court, quel que soit l’usage. La définition exacte est écrite sous la grille de prix, et reprise au contrat.",
      },
      {
        question: "Intervenez-vous sur un mandat de recherche ?",
        reponse:
          "Oui, sur les cellules libres de toute exclusivité, sans supplément pour nos clients sous contrat. Vos critères, une shortlist vérifiée sous sept jours. C’est l’usage acheté qui est nommé au contrat, et deux clients ne sont jamais servis sur la même course.",
      },
      {
        question: "Pourquoi être rémunérés au mandat signé et non au closing ?",
        reponse:
          "Parce qu’un mandat ne porte pas de prix. Notre rémunération ne dépend donc ni de la réalisation de l’opération, ni de sa valorisation. Notre lecture d’un dossier n’a aucun intérêt au deal.",
      },
      {
        question:
          "Que se passe-t-il si la Cartographie montre que ma cellule est pauvre ?",
        reponse:
          "Nous vous le disons et nous ne vous vendons pas de contrat. C’est précisément ce que la Cartographie sert à établir.",
      },
      {
        question: "Combien de dossiers par mois ?",
        reponse:
          "Peu, et vérifiés. Le volume dépend de la densité réelle de votre cellule : mesurée avant le contrat, annoncée à l’appel, tenue ensuite.",
      },
    ],
  },
  final: {
    kicker: "Prochaine étape",
    statement: "Nous savons déjà combien de dirigeants de votre cellule sont concernés.",
    lead: "Ce chiffre vous est donné à l’appel, sans condition. Qui ils sont, depuis quand, et par quoi commencer : c’est la Cartographie.",
    cta: "Réserver un échange",
  },
  carte: {
    ariaCarte: "Carte des régions françaises",
    panneauVide: "Sélectionnez une région.",
    bouton: "Réserver un échange",
    statuts: {
      disponible: {
        label: "Disponible",
        texte: "Cellule ouverte. La part se prend au premier contrat signé.",
      },
      en_discussion: {
        label: "En discussion",
        texte: "Des discussions sont en cours sur cette cellule. Un appel reste possible : premier signé, premier servi.",
      },
      exclusivite: {
        label: "Sous exclusivité",
        texte: "Cette cellule est servie en exclusivité. Laissez vos coordonnées à l’appel pour être prévenu si elle se libère.",
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
