/* v89 · LE TEXTE DU DOSSIER SPÉCIMEN. GÉNÉRÉ, NE PAS ÉDITER À LA MAIN :
   extrait de la couche texte de public/specimen-imbrin.pdf par
   scripts/dossier-texte.py, relancé par « npm run specimen-pages ».
   Le popup montre les pages en images (v87, le vrai document) ; cette
   transcription est l'ALTERNATIVE TEXTE qui les accompagne : elle rend
   au HTML la substance que les images lui avaient retirée, et elle est
   le seul moyen de lire le dossier sur un téléphone, où la page A4
   s'affiche à 0,44 fois sa taille. Le niveau de chaque bloc vient de la
   taille de fonte mesurée dans le PDF, pas d'une liste tenue à la main.
   La transcription passe par typoDeep, comme copy.ts et analyses.ts :
   sans lui elle serait le seul texte du site sans espaces insécables.
   Le PDF n'en porte aucune, vérifié. */
import { typoDeep } from "./typo";

export type BlocDossier = { n: "titre" | "texte" | "note"; t: string };

export const dossierTexte: BlocDossier[][] = typoDeep([
  [
    { n: "note", t: "IMBRIN RESEARCH Spécimen 2026-000 · septembre 2026 · spécimen" },
    { n: "titre", t: "Vérane Ingénierie" },
    { n: "texte", t: "Ingénierie et études techniques, Paris 12e, 10 à 19 salariés, société à responsabilité limitée créée en 1996." },
    { n: "texte", t: "Spécimen : faits fictifs, aucune société ni personne réelle désignée." },
    { n: "titre", t: "Gérant de 68 ans, 82 % des parts, une transformation en SAS engagée, non décidée." },
    { n: "texte", t: "11 février 2026 : le rapport du commissaire aux comptes sur la transformation en société par actions simplifiée est déposé au registre : il atteste que les capitaux propres sont au moins égaux au capital social. Sept mois plus tard, aucun procès-verbal décidant cette transformation n'a été déposé." },
    { n: "note", t: "RNE, rapport du 04/02/2026 déposé le 11/02/2026, scan lu à l'image le 17/09/2026, spécimen, pièce fictive" },
    { n: "titre", t: "2,3 M€" },
    { n: "note", t: "chiffre d'affaires 2025, + 7,7 % en deux ans" },
    { n: "titre", t: "+ 12 900 €" },
    { n: "note", t: "résultat 2025, après + 186 400 € en 2023" },
    { n: "titre", t: "1,44 M€" },
    { n: "note", t: "capitaux propres 2025, trente fois le capital" },
    { n: "titre", t: "82 %" },
    { n: "note", t: "au gérant, dernière feuille de présence lue, 2024" },
    { n: "note", t: "Comptes 2023 à 2025 déposés au greffe ; feuille de présence du 14/11/2024. Spécimen, chiffres fictifs." },
    { n: "titre", t: "L'angle" },
    { n: "texte", t: "Un fondateur de 68 ans, seul gérant depuis le départ de son cogérant, fait nommer un commissaire aux comptes qu'aucun seuil n'impose, puis lui fait signer, cinq mois plus tard, le rapport que la loi exige avant une transformation en SAS, la forme où une cession d'actions ne laisse aucune trace publique. Ce que le registre montre aujourd'hui, il ne le montrera plus après : une transformation se prépare, elle ne se subit pas." },
    { n: "note", t: "SIREN 999 000 001, fictif Capital 48 000 €, 3 000 parts de 16 € Siège Paris 12e · 10 à 19 salariés (SIRENE)" },
    { n: "note", t: "Activité 71.12B, ingénierie, études techniques Clôture 31 décembre · comptes 2025 déposés Opposition, procédure aucune · RNE 17/09/2026, BODACC 3 ans" },
    { n: "note", t: "Gérant Hervé Vérane, 68 ans, 82 % du capital" },
    { n: "note", t: "Contrôle légal commissaire aux comptes, 30/09/2025" },
    { n: "note", t: "Coordonnées personnelles 06 39 98 41 27 · h.verane@example.com" },
    { n: "titre", t: "Ce que le registre établit" },
    { n: "texte", t: "Novembre 2024 : assemblée générale ordinaire : démission du cogérant ; le fondateur redevient gérant unique." },
    { n: "texte", t: "Novembre 2024 : feuille de présence : le gérant détient 2 460 parts en direct, deux salariés 300 et 240, sur 3 000." },
    { n: "texte", t: "Septembre 2025 : nomination d'un commissaire aux comptes pour six exercices, hors obligation de seuils." },
    { n: "texte", t: "Février 2026 : rapport du commissaire aux comptes préalable à la transformation en SAS, déposé au registre." },
    { n: "note", t: "7 MOIS" },
    { n: "texte", t: "Septembre 2026 : à la date de lecture, aucun procès-verbal décidant la transformation n'est au registre ; le dernier acte déposé reste ce rapport." },
    { n: "note", t: "Spécimen de démonstration, faits fictifs, aucune société réelle désignée. Établi selon la méthode" },
    { n: "note", t: "Imbrin Research : sources publiques (RNE, Sirene, Bodacc, comptes déposés au greffe). Imbrin Research, Jungle.Block Solutions, SIREN 995 216 090." },
    { n: "note", t: "Vincent Fournier · Imbrin Research · imbrin.fr · 1 / 2" },
  ],
  [
    { n: "note", t: "IMBRIN RESEARCH Vérane Ingénierie · 2026-000 · spécimen" },
    { n: "titre", t: "Les contreparties" },
    { n: "texte", t: "Le cogérant sorti en 2024 : salarié, nommé en 2021, sans part ni société à son nom dans SIRENE." },
    { n: "texte", t: "Deux associés salariés, 300 et 240 parts, sans mandat ; le commissaire aux comptes, cabinet parisien." },
    { n: "titre", t: "Ce que disent les comptes" },
    { n: "texte", t: "L'activité tient, la marge non : le résultat s'érode bien plus vite que le chiffre d'affaires ne progresse. Plus de dividende en 2025, tout va en réserves, et la trésorerie recule pourtant." },
    { n: "note", t: "Exercice clos le 31 décembre 2023 2024 2025" },
    { n: "texte", t: "Chiffre d'affaires 2 140 800 € 2 218 300 € 2 305 100 €" },
    { n: "texte", t: "Résultat net + 186 400 € + 41 700 € + 12 900 €" },
    { n: "texte", t: "Capitaux propres 1 448 000 € 1 429 700 € 1 442 600 €" },
    { n: "texte", t: "Trésorerie 612 400 € 548 900 € 501 300 €" },
    { n: "texte", t: "Dividendes distribués 60 000 € 60 000 € aucun" },
    { n: "titre", t: "Qui achète dans cette classe" },
    { n: "note", t: "+ 7 autres au brief · NAF 71.12B · 10-249 sal. · Île-de-France · 24 mois · spécimen, sociétés fictives" },
    { n: "texte", t: "Juin 2026 : Tréviard (999 000 214), 3 opérations · cible : Solvaire Études (999 000 305, 20-49 sal.) · fonds, 1,45 M€" },
    { n: "texte", t: "Février 2026 : Kalméa Ingénierie (999 000 377) · cible : Structome (999 000 118, 10-19 sal.) · fusion, projet publié" },
    { n: "titre", t: "Ce que nous ne savons pas" },
    { n: "texte", t: "Si la transformation a été décidée : pas de procès-verbal déposé, rien n'y oblige encore." },
    { n: "texte", t: "La répartition du capital depuis novembre 2024 : elle n'est lisible que lorsqu'un acte la cite." },
    { n: "texte", t: "L'intention du dirigeant. Aucune source publique ne la porte : un acte établit un fait, jamais un projet." },
    { n: "titre", t: "Les pièces lues" },
    { n: "note", t: "Nature de l'acte Date de l'acte Dépôt Support" },
    { n: "note", t: "Procès-verbal d'assemblée générale ordinaire 14/11/2024 03/12/2024 natif" },
    { n: "note", t: "Feuille de présence 14/11/2024 03/12/2024 scan lu à l'image" },
    { n: "note", t: "Procès-verbal de décision des associés 30/09/2025 09/10/2025 natif" },
    { n: "note", t: "Rapport du commissaire aux comptes sur la transformation 04/02/2026 11/02/2026 scan lu à l'image" },
    { n: "titre", t: "Sources et méthode" },
    { n: "texte", t: "RNE (INPI) : fiche et quatre actes lus le 17/09/2026, deux en dépôt image relus sur l'image. BODACC 36 mois :" },
    { n: "texte", t: "trois dépôts des comptes, aucune vente ni procédure. Les personnes autres que le dirigeant sont désignées par leur qualité, les pièces portent leur nom. Spécimen : pièces sans identifiant, aucun acte réel ouvert." },
    { n: "note", t: "Spécimen de démonstration, faits fictifs, aucune société réelle désignée. Établi selon la méthode" },
    { n: "note", t: "Imbrin Research : sources publiques (RNE, Sirene, Bodacc, comptes déposés au greffe). Imbrin Research, Jungle.Block Solutions, SIREN 995 216 090." },
    { n: "note", t: "Vincent Fournier · Imbrin Research · imbrin.fr · 2 / 2" },
  ],
]);
