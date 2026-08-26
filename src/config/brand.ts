import { typoDeep } from "./typo";

export const brand = typoDeep({
  MARQUE: "Imbrin",
  SUFFIXE: "Research",
  BASELINE: "Origination sell-side",
  CALENDLY_URL: "https://calendly.com/fnr-vincent-pro/echange",
  LINKEDIN_URL: "https://www.linkedin.com/in/vincent-fournier-939021170/",
  CONTACT_EMAIL: "contact@imbrin.fr",
  /* ligne directe du fondateur : affichée à trois endroits seulement,
     fondateur, footer et appel final. Jamais dans le hero. */
  TELEPHONE: { affiche: "06 81 28 54 33", lien: "tel:+33681285433", e164: "+33681285433" },
  ENTITY: {
    raisonSociale: "Jungle.Block Solutions",  // la nouvelle entité la remplacera plus tard
    siren: "995 216 090",
    /* le siège, publié aux mentions légales. « ville » sert aussi la ligne
       d'identité du fondateur et le schema.org, où seule la commune est
       attendue : les trois champs restent donc séparés. */
    adresse: "64 chemin de Trezbarats",
    codePostal: "40230",
    ville: "Saint-Vincent-de-Tyrosse",
  },
  SHOW_PRICING: true,
  PROOF: {
    /* le grand repère de la section Mesure. Refonte 2026-08 : le « ≈ 1/3 »
       n'était pas mesuré, il est retiré. Le repère devient « 0 » : zéro
       chiffre générique sur le site. Le taux d'écart réel est mesuré sur le
       périmètre et livré avec chaque lot, jamais affiché en moyenne. Le
       signe reste un champ séparé (couleur propre), vide désormais. */
    repere: { signe: "", valeur: "0" },
  },
  /* Deux prix, deux seulement. Toute valeur affichée sur la page part d'ici.
     L'origination est calibrée au périmètre : le montant affiché est un
     plancher, pas une grille. */
  PRICING: {
    origination: {
      prixPlancher: "2 000 € HT",         // affiché seul et en grand, la période suit
      periode: "par mois",
      prixAnnuel: "24 000 €",           // 12 x le plancher, affiché tel quel
      engagement: "3 mois",               // puis reconduction mensuelle
    },
    mandat: {
      prix: "3 500 € HT",                 // par mission, à la livraison
      /* « delai: 7 jours » retiré à la refonte 2026-08 : la shortlist est
         livrée à la date convenue à la mission, jamais sous délai générique */
    },
  },
} as const);

export type RegionStatus = "disponible" | "en_discussion" | "exclusivite";
export const regions: { slug: string; nom: string; statut: RegionStatus }[] = typoDeep([
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
]);
