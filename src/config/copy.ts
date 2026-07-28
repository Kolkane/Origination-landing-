import { brand } from "./brand";

/** rend une valeur de brand insécable (les chiffres ne se coupent pas en fin de ligne) */
const nb = (s: string) => s.replace(/ /g, " ");

export type SectionLegale = {
  titre: string;
  corps: string;
  email?: string;
};

/* Copy v7 — reprise AU MOT PRÈS de MAQUETTE-V7.html (source de vérité). */
export const copy = {
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE} — ${brand.BASELINE}`,
    description:
      "Détection au registre des PME françaises en transition capitalistique, 12 à 18 mois avant le marché. Dossiers vérifiés, un seul client par zone.",
  },
  hero: {
    navLien: "Vérifier ma zone",
    navAncre: "#offre",
    eyebrow: "Origination sell-side — PME françaises · 1–10 M€",
    titreLigne1: "Les cédants de demain,",
    titreLigne2: "détectés",
    titreItalique: "sous la surface",
    sousTitre:
      "Détection au registre des transitions capitalistiques, 12 à 18 mois avant le marché. Dossiers vérifiés à la main. Un seul client par zone.",
    cta: "Vérifier la disponibilité de ma zone",
    legendeLigne1: "Plongeon imbrin en chasse",
    legendeLigne2: "Images réelles — boucle 6 s",
    noteVideoLigne1: "Déposez votre vidéo renommée « imbrin.mp4 »",
    noteVideoLigne2: "dans public/, puis rechargez.",
  },
  offre: {
    ancre: "offre",
    kicker: "L’offre",
    statement: "Nous montrons nos résultats. Jamais nos critères.",
    lignes: [
      {
        num: "01",
        titre: "Couverture",
        texte: `L’intégralité du stock vérifié de votre zone, livrée par vagues en ${nb(brand.PROOF.dureeCouverture)}. Le point de départ.`,
      },
      {
        num: "02",
        titre: "Veille",
        texte: `La cohorte complète surveillée en continu. Chaque bascule détectée est vérifiée, puis livrée sous ${nb(brand.PROOF.delaiLivraisonBascule)}.`,
      },
      {
        num: "03",
        titre: "Exclusivité",
        texte:
          "Une zone, une verticale, un client. La part se prend au premier abonnement signé — pas au premier appel.",
      },
    ],
    faitsAvant: `${nb(brand.PROOF.tauxEcartVerification)} de détections écartées à la vérification — `,
    faitsFort: "chiffre publié",
    faitsApres: `  ·  Garantie M1 : exactitude ${nb(brand.PROOF.garantieM1.exactitude)}  ·  RGPD — information art. 14 jointe`,
    cta: "Vérifier la disponibilité de ma zone",
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
      metaTitre: `Mentions légales — ${brand.MARQUE} ${brand.SUFFIXE}`,
      sections: [
        {
          titre: "Éditeur",
          corps: `Le site est édité par ${brand.ENTITY.raisonSociale} — SIREN ${nb(brand.ENTITY.siren)} — ${brand.ENTITY.ville}.`,
        },
        {
          titre: "Directeur de la publication",
          corps: "Vincent Fournier.",
        },
        {
          titre: "Hébergement",
          corps: "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com.",
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
      metaTitre: `Confidentialité — ${brand.MARQUE} ${brand.SUFFIXE}`,
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
    note: "Site sans traceurs publicitaires",
    copyright: "© 2026",
  },
};
