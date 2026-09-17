import { typoDeep } from "./typo";

export const brand = typoDeep({
  MARQUE: "Imbrin",
  SUFFIXE: "Research",
  BASELINE: "Origination sell-side",
  CALENDLY_URL: "https://calendly.com/fnr-vincent-pro/echange",
  LINKEDIN_URL: "https://www.linkedin.com/in/vincent-fournier-939021170/",
  CONTACT_EMAIL: "contact@imbrin.fr",
  /* V80 : les fichiers de public/ que les composants montrent. Deux
     emblèmes, l'encre pour les fonds clairs et le clair pour les fonds
     sombres ; la vidéo du hero et son poster ; le portrait. Les anciens
     logo-imbrin.png et logo-dossier.png restent dans public/ sans être
     référencés ici : la signature mail pointe encore dessus. */
  MEDIAS: {
    emblemeEncre: "/emblem-encre.png",
    emblemeClair: "/emblem-clair.png",
    videoHero: "/imbrin.mp4",
    /* le recadrage portrait pour téléphone, produit par npm run
       video-mobile (scripts/video-mobile.mjs), choisi par VideoHero.tsx
       sous 761 px */
    videoHeroMobile: "/imbrin-mobile.mp4",
    posterHero: "/imbrin-poster.jpg",
    portrait: "/portrait-vincent-fournier.webp",
    /* le PDF du spécimen. Le fichier n'existe PAS encore : le lien
       « Version PDF » du popup ne s'affiche que si Dossier.tsx le trouve
       sur le disque au build. Déposer le fichier suffit à l'afficher. */
    specimenPdf: "/specimen-imbrin.pdf",
  },
  /* v68 : le délai de traitement d'une demande d'opposition ou d'accès.
     Constante et non texte en dur : il est annoncé au dirigeant sur la
     page qui lui est destinée, et il devra changer à UN endroit si la
     pratique change. Écrit en toutes lettres, pas en chiffre : c'est un
     engagement de délai, pas une donnée mesurée, et la liste blanche des
     chiffres de la charte ne couvre pas les nombres écrits. */
  DELAI_OPPOSITION: "huit jours",
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
     prix du mandat. V80, offre publiée le 17/09/2026 : la structure de la
     rémunération elle-même ne se traite plus qu'au devis, le site ne la
     décrit plus. La règle « tout chiffre affiché
     vient d'ici » n'est pas abandonnée, elle n'a simplement plus de
     chiffre à porter. SHOW_PRICING n'était lu nulle part.
     Ne pas réintroduire de montant sans arbitrage : c'est la liste
     blanche des chiffres de la charte qui le décide, pas le confort
     d'un gabarit. */
} as const);
