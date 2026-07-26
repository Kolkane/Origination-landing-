import { brand } from "./brand";

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
    preuve: `${brand.PROOF.tauxEcartVerification} de nos détections sont écartées à la vérification. Nous publions ce chiffre.`,
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
        "Dirigeant seul au capital depuis 2019, sans successeur identifié au registre. Entrée recommandée par la transmission patrimoniale plutôt que par la valorisation : le calendrier des signaux suggère une fenêtre de douze à dix-huit mois avant une mise en marché, pendant laquelle une approche directe et confidentielle reste possible auprès du",
    },
  },
};
