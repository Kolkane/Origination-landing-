export const brand = {
  MARQUE: "Imbrin",
  SUFFIXE: "Research",
  BASELINE: "Origination sell-side",
  CALENDLY_URL: "https://calendly.com/fnr-vincent-pro/audit-strategique",
  LINKEDIN_URL: "https://www.linkedin.com/in/vincent-fournier-939021170/",
  CONTACT_EMAIL: "contact@imbrin.fr",
  ENTITY: {
    raisonSociale: "Jungle.Block Solutions",  // la nouvelle entité la remplacera plus tard
    siren: "995 216 090",
    ville: "Bayonne",
  },
  SHOW_PRICING: true,
  PROOF: {
    tauxEcartVerification: "≈ 1/3",       // détections écartées à la vérification — chiffre public
    delaiLivraisonBascule: "7 jours",
  },
  /* Deux prix, deux seulement. Toute valeur affichée sur la page part d'ici. */
  PRICING: {
    cartographie: {
      prix: "4 900 € HT",
      nature: "prestation unique",
      delai: "10 jours ouvrés",
      deduction: "30 jours",              // fenêtre de déduction sur le contrat annuel
    },
    cellule: {
      prix: "2 500 € HT / mois",
      engagement: "engagement 12 mois",
      mandat: "5 000 € HT",               // par mandat de cession signé
    },
  },
} as const;

export type RegionStatus = "disponible" | "en_discussion" | "exclusivite";
export const regions: { slug: string; nom: string; statut: RegionStatus }[] = [
  { slug: "ile-de-france", nom: "Île-de-France", statut: "disponible" },
  { slug: "auvergne-rhone-alpes", nom: "Auvergne-Rhône-Alpes", statut: "en_discussion" },
  { slug: "nouvelle-aquitaine", nom: "Nouvelle-Aquitaine", statut: "disponible" },
  { slug: "occitanie", nom: "Occitanie", statut: "disponible" },
  { slug: "provence-alpes-cote-d-azur", nom: "Provence-Alpes-Côte d'Azur", statut: "disponible" },
  { slug: "grand-est", nom: "Grand Est", statut: "disponible" },
  { slug: "hauts-de-france", nom: "Hauts-de-France", statut: "disponible" },
  { slug: "normandie", nom: "Normandie", statut: "disponible" },
  { slug: "bretagne", nom: "Bretagne", statut: "disponible" },
  { slug: "pays-de-la-loire", nom: "Pays de la Loire", statut: "en_discussion" },
  { slug: "centre-val-de-loire", nom: "Centre-Val de Loire", statut: "disponible" },
  { slug: "bourgogne-franche-comte", nom: "Bourgogne-Franche-Comté", statut: "disponible" },
  { slug: "corse", nom: "Corse", statut: "disponible" },
];
