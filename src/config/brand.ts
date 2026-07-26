export const brand = {
  MARQUE: "{{MARQUE}}",                    // seul endroit à changer au choix du nom
  BASELINE: "Origination sell-side",
  CALENDLY_URL: "https://calendly.com/A-REMPLACER",
  LINKEDIN_URL: "https://www.linkedin.com/in/A-REMPLACER",
  CONTACT_EMAIL: "contact@A-REMPLACER.fr",
  ENTITY: {
    raisonSociale: "TODO — nouvelle entité",  // en attendant : Jungle.Block Solutions
    siren: "TODO",
    ville: "Bayonne",
  },
  SHOW_PRICING: true,
  PROOF: {
    tauxEcartVerification: "≈ 1/3",       // détections écartées à la vérification — chiffre public
    delaiLivraisonBascule: "7 jours",
    dureeCouverture: "8 à 12 semaines",
    garantieM1: { exactitude: "≥ 90 %", joignabilite: "≥ 80 %" },
  },
  PRICING: {
    boutique: { prix: "1 990 € HT / mois", perimetre: "par région", engagement: "sans engagement" },
    fo: { prix: "sur-mesure", perimetre: "selon périmètre" },
    annuel: "−20 % en annuel",
    verticale2: "+680 € / mois",
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
