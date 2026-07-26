import { brand } from "./brand";

/** rend une valeur de brand insécable (les chiffres ne se coupent pas en fin de ligne) */
const nb = (s: string) => s.replace(/ /g, " ");

export type ChampIdentite = {
  label: string;
  valeur?: string;
  /** largeur de la barre de caviardage, en caractères */
  caviarde?: number;
  suffixe?: string;
  pleineLargeur?: boolean;
};

export type Signal = {
  date: string;
  texte: string;
  source: "RNE" | "BODACC";
};

export const copy = {
  meta: {
    title: `${brand.MARQUE} — ${brand.BASELINE}`,
    description:
      "Détection au registre des PME françaises dont le capital va probablement changer de mains, 12 à 18 mois avant le marché. Dossiers vérifiés à la main, un seul client par zone.",
  },
  header: {
    zoneLien: "Vérifier ma zone ↓",
    zoneAncre: "#carte",
  },
  hero: {
    eyebrow: "Origination sell-side · PME françaises · 1–10 M€",
    titre: "Les cédants de demain, détectés aujourd’hui.",
    sousTitre: `${brand.MARQUE} détecte au registre les PME dont le capital va probablement changer de mains — 12 à 18 mois avant le marché — et livre à un seul client par zone des dossiers vérifiés à la main.`,
    cta: "Vérifier la disponibilité de ma zone",
    preuve: `${nb(brand.PROOF.tauxEcartVerification)} de nos détections sont écartées à la vérification. Nous publions ce chiffre.`,
  },
  specimen: {
    tampon: "SPÉCIMEN — données fictives",
    ariaLabel: "Spécimen de brief, données fictives",
    caviardeSr: "information caviardée",
    identite: [
      { label: "Secteur", valeur: "Services B2B" },
      { label: "Bassin", caviarde: 9 },
      { label: "Dirigeant", caviarde: 7, suffixe: ", 67 ans", pleineLargeur: true },
    ] as ChampIdentite[],
    signauxLabel: "Signaux relevés",
    signaux: [
      { date: "11.02.2026", texte: "Transfert de siège au domicile du dirigeant", source: "RNE" },
      { date: "07.04.2026", texte: "Fin de mandat du cogérant, non remplacé", source: "RNE" },
      { date: "26.05.2026", texte: "Dépôt des comptes 2025 hors du délai habituel", source: "BODACC" },
    ] as Signal[],
    angle: {
      label: "Angle d’approche",
      srTronque: "[extrait tronqué du spécimen]",
      texte:
        "Dirigeant seul au capital depuis 2019, sans successeur identifié au registre. Entrée recommandée par la transmission patrimoniale plutôt que par la valorisation : le calendrier des signaux suggère une fenêtre de douze à dix-huit mois avant une mise en marché, pendant laquelle une approche directe et confidentielle reste possible auprès du",
    },
    annotations: [
      "Identité caviardée en phase de découverte",
      "Chaque signal est daté et sourcé au registre",
      "Angle d’approche et information art. 14 RGPD jointe",
      "Spécimen fictif — nos briefs réels ne quittent pas leurs zones.",
    ],
  },
  constat: {
    label: "Le constat",
    titre: "La plus grande vague de transmissions de l’histoire française arrive sans carte.",
    corps:
      "Environ 700 000 dirigeants de PME partiront à la retraite d’ici dix ans ; près de la moitié n’ont pas de successeur identifié (ordres de grandeur publics — CRA, Bpifrance). Quand un dossier devient visible, la concurrence l’est aussi. Les mandats se gagnent avant : auprès du dirigeant qui n’a encore rien annoncé.",
    exergue: "Le marché visible est un marché en retard.",
  },
  methode: {
    label: "La méthode",
    intro: "Nous montrons nos résultats. Jamais nos critères.",
    etapes: [
      {
        num: "01",
        titre: "Détection au registre",
        texte:
          "Sources exclusivement publiques : RNE, SIRENE, BODACC. Des signaux de transition observables et datés — pas de scores prédictifs inventés.",
      },
      {
        num: "02",
        titre: "Vérification humaine",
        texte:
          "Chaque détection est vérifiée manuellement avant livraison. Ce qui ne tient pas est écarté — et compté dans nos chiffres publics.",
      },
      {
        num: "03",
        titre: "Le brief",
        texte:
          "Un document opérationnel par dossier : contexte, signaux sourcés, structure de détention, angle d’approche conforme. Prêt pour un premier contact.",
      },
      {
        num: "04",
        titre: "La veille",
        texte: `Votre zone entière sous surveillance continue. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
    ],
  },
  briefProduit: {
    label: "Le brief est le produit",
    corps:
      "Pas de plateforme à apprendre, pas de crédits, pas d’export de 4 000 lignes. Des dossiers en petit nombre, vérifiés, argumentés — le format qu’un associé lit en trois minutes et donne à exécuter.",
  },
  offre: {
    label: "L’offre",
    colonnes: [
      {
        titre: "Couverture",
        texte: `L’intégralité du stock vérifié de votre zone, livrée par vagues en ${nb(brand.PROOF.dureeCouverture)}. Le point de départ.`,
      },
      {
        titre: "Veille",
        texte: `La cohorte complète surveillée en continu, chaque bascule vérifiée livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}. Le régime de croisière.`,
      },
    ],
    tarifs: {
      lignes: [
        { offre: "Boutiques M&A", valeur: nb(`${brand.PRICING.boutique.prix} / région`) },
        { offre: "Family offices", valeur: brand.PRICING.fo.prix },
      ],
      conditions: `Sans engagement · ${nb(brand.PRICING.annuel)} · 2e verticale ${nb(brand.PRICING.verticale2)}`,
      note: "La grille est publique. Aucun deal hors grille.",
    },
  },
  exclusivite: {
    label: "L’exclusivité",
    titre: "Une zone. Une verticale. Un client.",
    corps:
      "L’exclusivité se prend au premier abonnement signé — pas au premier appel. Les statuts ci-dessous sont tenus à la main : pas de compteurs, pas de fausse rareté.",
    cta: "Réserver un appel — vérifier si votre zone est disponible et en discuter avec Vincent.",
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
  engagements: {
    label: "Ce que nous ne faisons pas",
    items: [
      "Pas de success fee, jamais : nous facturons la donnée, pas le closing. Notre lecture d’un dossier n’a aucun intérêt au deal.",
      "Pas de scores prédictifs inventés : des signaux observables, sourcés, datés.",
      "Pas de contact du patrimoine privé : le premier contact passe toujours par l’entreprise.",
      "Pas de données grises : sources publiques, opt-out définitif honoré, information art. 14 RGPD jointe à chaque brief.",
      "Pas de chiffres invérifiables : notre taux d’écart en vérification est publié.",
    ],
    garantie: {
      label: "Garantie premier mois",
      texte: `Exactitude ${nb(brand.PROOF.garantieM1.exactitude)} et joignabilité ${nb(brand.PROOF.garantieM1.joignabilite)} des dossiers livrés — sinon, remboursé.`,
    },
  },
  fondateur: {
    label: `Qui est derrière ${brand.MARQUE}`,
    corps: `${brand.MARQUE} est opéré par Vincent Fournier, fondateur, basé à Bayonne. Le pipeline de détection est industrialisé ; la vérification finale de chaque dossier reste humaine. Au téléphone, vous parlez au fondateur — pas à un SDR.`,
    entite: `${brand.ENTITY.raisonSociale} · SIREN ${brand.ENTITY.siren} · ${brand.ENTITY.ville}`,
    linkedin: "LinkedIn",
    photoLegende: "Portrait — à venir",
  },
  faq: {
    label: "FAQ",
    items: [
      {
        question: "D’où viennent vos données ?",
        reponse:
          "Des registres publics français — RNE/INPI, SIRENE, BODACC — et d’enrichissements ponctuels sourcés. Aucune donnée grise.",
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
        question: "Que couvre exactement l’exclusivité ?",
        reponse:
          "La livraison des dossiers d’une verticale sur une zone, à un seul client. Elle se prend au premier abonnement signé.",
      },
      {
        question: "Travaillez-vous au success fee ?",
        reponse:
          "Non. Ni mandat, ni commission, ni participation au deal. C’est ce qui garantit la neutralité de nos dossiers.",
      },
      {
        question: "Combien de dossiers par mois ?",
        reponse:
          "Peu, et vérifiés. Le volume dépend de la densité réelle de votre zone — mesurée avant l’abonnement, annoncée à l’appel, tenue ensuite.",
      },
    ],
  },
  ctaFinal: {
    titre: "Votre zone n’attend pas la rentrée.",
    bouton: "Réserver un appel avec Vincent",
  },
  footer: {
    marque: `${brand.MARQUE} · ${brand.BASELINE}`,
    mentions: { label: "Mentions légales", href: "/mentions-legales" },
    confidentialite: { label: "Confidentialité", href: "/confidentialite" },
    linkedin: "LinkedIn",
    note: "Site sans traceurs publicitaires.",
    copyright: `© 2026 ${brand.ENTITY.raisonSociale}.`,
  },
};
