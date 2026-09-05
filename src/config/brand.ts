import { typoDeep } from "./typo";

export const brand = typoDeep({
  MARQUE: "Imbrin",
  SUFFIXE: "Research",
  BASELINE: "Origination sell-side",
  CALENDLY_URL: "https://calendly.com/fnr-vincent-pro/echange",
  LINKEDIN_URL: "https://www.linkedin.com/in/vincent-fournier-939021170/",
  CONTACT_EMAIL: "contact@imbrin.fr",
  /* ligne directe du fondateur : affichée à trois endroits seulement,
     fondateur, footer et appel final. Jamais dans le hero. Depuis la v56
     CONTACT_EMAIL l'accompagne aux trois, posée sous elle (arbitrage
     Vincent, 29/08) : les deux voies de contact directes se lisent
     ensemble, l'appel Calendly reste le chemin principal. */
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
  /* v65 : PRICING et SHOW_PRICING sont SUPPRIMÉS. Le site ne publie plus
     aucun montant : ni le plancher mensuel, ni son report annuel, ni le
     prix du mandat. La rémunération est donnée par sa STRUCTURE — un
     retainer, un fee à la signature, une part des honoraires de succès —
     et chiffrée au devis, avant signature. La règle « tout chiffre affiché
     vient d'ici » n'est pas abandonnée, elle n'a simplement plus de
     chiffre à porter. SHOW_PRICING n'était lu nulle part.
     Ne pas réintroduire de montant sans arbitrage : c'est la liste
     blanche des chiffres de la charte qui le décide, pas le confort
     d'un gabarit. */
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
