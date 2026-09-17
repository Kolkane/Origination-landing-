import { brand } from "./brand";
import { typoDeep } from "./typo";

/* un seul libellé d’appel sur tout le site : trois copies indépendantes avaient
   déjà produit une divergence en v13 */
const CTA = "Réserver un échange";

/* le fondateur : son nom nourrit À propos, la légende du portrait et le
   JSON-LD Person. Une seule chaîne, un seul endroit. */
const FONDATEUR = "Vincent Fournier";

/* v68 · la page /dirigeants. Un bloc porte un intitulé et des paragraphes ;
   celui des trois possibilités porte en plus une liste, dont chaque entrée
   ouvre sur sa décision en toutes lettres. */
export type BlocDirigeant = {
  titre: string;
  corps: string[];
  choix?: { fort: string; suite: string }[];
};

export type SectionLegale = {
  titre: string;
  /* v68 : un renvoi facultatif, sur le modèle de l'email ci-dessous. Il
     sert à pointer la page /dirigeants depuis la notice : la même
     information, écrite pour la personne concernée et non pour le
     juriste. L'art. 14 demande une information « aisément accessible ». */
  lien?: { label: string; href: string };
  /* une chaîne, ou plusieurs paragraphes. Les mentions légales n'en
     utilisent qu'une, la page Confidentialité en a besoin de plusieurs. */
  corps: string | string[];
  email?: string;
};

/* V80 · LES QUATRE ICÔNES de la section service. Le nom dit le dessin ;
   Icones.tsx le rend en SVG inline, sans fichier ni bibliothèque. */
export type NomIconeService = "cabinet" | "carte" | "registre" | "chemise";

/* V80 · UNE RUBRIQUE DU DOSSIER SPÉCIMEN. Cinq formes, parce que les huit
   rubriques n'ont pas la même nature : des définitions, un tableau de
   comptes, une chronologie datée, de la prose, des statuts de
   vérification. La forme est déclarée ici, le composant ne fait que la
   rendre : c'est la règle « rien codé en dur dans le JSX » appliquée à
   une structure et pas seulement à un texte. */
export type RubriqueDossier = { titre: string } & (
  | { forme: "definitions"; lignes: { k: string; v: string }[] }
  | {
      forme: "comptes";
      colonnes: string[];
      lignes: { k: string; valeurs: string[]; gris?: boolean }[];
    }
  | { forme: "chronologie"; lignes: { date: string; ev: string }[] }
  | { forme: "prose"; paragraphes: string[]; note?: string }
  | { forme: "statuts"; lignes: { k: string; v: string }[]; note: string }
);

/* Copy v8 : reprise AU MOT PRÈS de MAQUETTE-V8.html (source de vérité).
   Règle v8 : aucun tiret cadratin ni demi-cadratin dans les textes.
   V80 : les sections de l'accueil sont reprises AU MOT PRÈS des planches
   MAQUETTE-V80-ACCUEIL.html et MAQUETTE-V80-ACCUEIL-MOBILE.html. */
export const copy = typoDeep({
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`,
    description:
      "Origination externe pour cabinets M&A sell-side : nous lisons les actes déposés au registre, y compris ceux que personne n’ouvre, et nous livrons des dossiers d’approche datés et sourcés. Un cabinet par périmètre.",
  },
  /* V80 · LA NAVIGATION, partagée par l'en-tête et par la colonne « Le
     site » du pied de page : six entrées, dans l'ordre de la planche. Les
     ancres portent le « / » pour servir aussi depuis les pages intérieures
     (lot 4), où l'en-tête sera le même. */
  nav: {
    aria: "Navigation principale",
    haut: "/#haut",
    liens: [
      { label: "Le service", href: "/#service" },
      { label: "Le dossier", href: "/#dossier" },
      { label: "Méthode", href: "/#methode" },
      { label: "Conditions", href: "/#conditions" },
      { label: "Analyses", href: "/#analyses" },
      { label: "À propos", href: "/#apropos" },
    ],
    /* le menu mobile : le bouton, son intitulé accessible dans les deux
       états, le bouton de fermeture du panneau et les libellés des
       coordonnées qu'il porte. Le panneau n'est pas dans la planche
       (lot 1, décision consignée dans CLAUDE.md). */
    /* le lien d'évitement, premier élément focusable de chaque page,
       visible au focus seulement */
    evitement: "Aller au contenu",
    menu: "Menu",
    menuOuvrir: "Ouvrir le menu",
    menuFermer: "Fermer le menu",
    fermer: "Fermer",
    coordTel: "Par téléphone",
    coordMail: "Par email",
  },
  /* V80 · LE HERO, au mot près de la planche : un titre, un sous-titre, un
     lien souligné vin vers le dossier, et la légende de la vidéo, qui ne
     décrit que le sujet : ni l'origine ni la durée du média ne sont
     revendiquées (arbitrage Vincent, v8-4). */
  hero: {
    titre: "Origination sell-side pour les cabinets M&A",
    sous: "Les PME à approcher, repérées au registre et livrées en dossiers vérifiés. Un seul cabinet par périmètre.",
    lien: { label: "Voir un dossier spécimen", href: "/#dossier" },
    legende: "Plongeon imbrin en chasse",
  },
  /* V80 · CE QUE FAIT IMBRIN RESEARCH, au mot près de la planche : une
     intro, puis quatre entrées à icône. « icone » nomme le dessin, il
     est rendu par Icones.tsx : aucun fichier, aucune bibliothèque. */
  service: {
    titre: `Ce que fait ${brand.MARQUE} ${brand.SUFFIXE}`,
    intro:
      `Repérer les sociétés à approcher avant qu’un processus soit lancé suppose une lecture régulière des registres et des actes, difficile à tenir en interne à côté des dossiers en cours. ${brand.MARQUE} ${brand.SUFFIXE} assure ce travail pour votre cabinet, sur un périmètre convenu ensemble.`,
    entrees: [
      {
        icone: "cabinet",
        titre: "Les cabinets",
        texte:
          `Cabinets de conseil en cession small-cap et family offices. L’associé traite les dossiers ; ${brand.MARQUE} ${brand.SUFFIXE} les repère.`,
      },
      {
        icone: "carte",
        titre: "Le périmètre",
        texte:
          "Une région et une typologie d’entreprises, arrêtées avec vous et inscrites au devis. Réservé à un seul cabinet tant que le contrat court.",
      },
      {
        icone: "registre",
        titre: "Les registres",
        texte:
          "RNE, SIRENE, BODACC et comptes déposés. Les actes sont ouverts et lus, y compris lorsqu’il s’agit d’un scan.",
      },
      {
        icone: "chemise",
        titre: "Le dossier",
        texte:
          "Un dossier d’approche par société retenue, vérifié le jour de sa livraison. Les coordonnées portent leur statut de vérification.",
      },
    ] as { icone: NomIconeService; titre: string; texte: string }[],
  },
  /* V80 · LE DOSSIER D'APPROCHE, au mot près de la planche : bande
     d'encre, description, couverture cliquable, bouton, et le spécimen
     lui-même en huit rubriques dans le popup.
     LE SPÉCIMEN EST FICTIF et le dit à QUATRE endroits, tous visibles :
     le second paragraphe de la bande, le pied de la couverture, la méta
     de l'en-tête du document et son pied. Ne jamais en retirer un.
     Les valeurs sont inventées ; la charte d'honnêteté les autorise à
     ce titre et à ce titre seulement (chiffre d'un exemple marqué tel).
     Aucune coordonnée réelle n'y figure : la rubrique 7 ne porte que des
     STATUTS de vérification, pas des numéros. */
  dossier: {
    titre: "Le dossier d’approche",
    texte:
      "Chaque société retenue fait l’objet d’un dossier écrit, que l’associé lit avant son premier appel : identité, trois exercices de comptes, structure de détention, chronologie datée des actes, angle d’approche, coordonnées avec leur statut, et ce que les sources ne permettent pas d’établir.",
    sous:
      "Le spécimen est fictif : société, personnes et chiffres sont inventés. En rendez-vous, un dossier complet est parcouru avec vous, page à page.",
    bouton: "Lire le dossier spécimen",
    couverture: {
      marque: `${brand.MARQUE} ${brand.SUFFIXE}`,
      label: "Dossier d’approche",
      titre: "Établissements Vasseur",
      activite: "Génie climatique, 60 à 99 salariés",
      region: "Région exemple",
      specimen: "Spécimen, données fictives",
      confidentiel: "Confidentiel",
    },
    popup: {
      titre: "Dossier d’approche, spécimen",
      pdf: "Version PDF",
      fermer: "Fermer",
      marque: `${brand.MARQUE} ${brand.SUFFIXE}`,
      metaLigne1: "Dossier d’approche",
      metaLigne2: "Spécimen, données fictives",
      societe: "Établissements Vasseur",
      region: "Région exemple",
      sousTitre: "Génie climatique, SAS, 60 à 99 salariés. Dossier établi le 07/2026.",
      rubriques: [
        {
          titre: "1. Identité",
          forme: "definitions",
          lignes: [
            { k: "Dirigeant", v: "Gérard Vasseur, président, 63 ans" },
            { k: "Capital", v: "Détenu en totalité par le dirigeant depuis 2011" },
            { k: "Forme", v: "SAS depuis 03/2026, titres cessibles" },
            { k: "Immobilier", v: "Murs d’exploitation logés dans une SCI depuis 2023" },
          ],
        },
        {
          titre: "2. Comptes déposés",
          forme: "comptes",
          colonnes: ["Exercice clos au 31/12", "2023", "2024", "2025"],
          lignes: [
            { k: "Résultat net", valeurs: ["510 K€", "590 K€", "640 K€"] },
            {
              k: "Chiffre d’affaires",
              valeurs: ["Sous option de confidentialité depuis 2021"],
              gris: true,
            },
            { k: "Trésorerie au 31/12/2025", valeurs: ["1,9 M€"] },
            { k: "Fonds de roulement", valeurs: ["2,1 M€"] },
            { k: "Dettes financières / capitaux propres", valeurs: ["0,2"] },
          ],
        },
        {
          titre: "3. Détention",
          forme: "prose",
          paragraphes: [
            "Aucune entrée d’associé et aucun mouvement de titres depuis la reprise de 2011, jusqu’à l’acte de mars 2026. L’affaire est saine : trois exercices en hausse, un endettement financier faible. Les murs d’exploitation ont été isolés dans une SCI en 2023 ; l’acte est daté et figure à la chronologie.",
          ],
        },
        {
          titre: "4. Chronologie des actes déposés",
          forme: "chronologie",
          lignes: [
            { date: "1998", ev: "Création, transmission familiale" },
            { date: "2011", ev: "Reprise par le dirigeant actuel" },
            { date: "2023", ev: "Constitution d’une SCI, murs d’exploitation isolés" },
            {
              date: "03/2026",
              ev: "Transformation en SAS, titres rendus cessibles, acte déposé",
            },
            { date: "04/2026", ev: "Dépôt des comptes clos au 31/12/2025" },
            {
              date: "07/2026",
              ev: "Vérification au registre : dirigeant actif, aucun mouvement de contrôle sur 24 mois",
            },
          ],
        },
        {
          titre: "5. Angle d’approche",
          forme: "prose",
          paragraphes: [
            "La valeur de l’entreprise repose sur son dirigeant, qui a 63 ans. L’échange peut s’ouvrir sur la continuité de l’exploitation, avant toute question de cession.",
            "Les titres viennent d’être rendus cessibles : le geste est daté, l’acte est au registre. Ce que le dirigeant prépare, l’acte ne le dit pas. C’est la première question à lui poser.",
          ],
        },
        {
          titre: "6. Ce que les sources n’établissent pas",
          forme: "prose",
          paragraphes: [
            "Le chiffre d’affaires est sous option de confidentialité depuis 2021 : une fourchette est donnée, pas un montant. Les deux enfants du dirigeant sont hors de l’entreprise ; rien n’indique s’ils constituent une piste de reprise. Aucun acte ne renseigne l’intention du dirigeant.",
          ],
        },
        {
          titre: "7. Coordonnées",
          forme: "statuts",
          lignes: [
            { k: "Mobile", v: "Vérifié le 07/2026" },
            { k: "Email nominatif", v: "Vérifié le 07/2026" },
            { k: "Ligne directe", v: "Non vérifiée" },
          ],
          note:
            "Coordonnées masquées dans le spécimen. Elles proviennent de fournisseurs sous contrat ; chaque ligne porte son statut de vérification.",
        },
        {
          titre: "8. Sources",
          forme: "prose",
          paragraphes: [
            "Registre national des entreprises (INPI) : extrait et actes déposés. Comptes annuels déposés, exercices 2023 à 2025. BODACC. Répertoire SIRENE (INSEE).",
          ],
          note:
            "Information des personnes : article 14 du RGPD, notice accessible sur la page Confidentialité du site.",
        },
      ] as RubriqueDossier[],
      pied: {
        specimen: "Spécimen. Société, personnes et chiffres inventés.",
        confidentiel: "Confidentiel",
      },
    },
  },
  /* V80 · LA MÉTHODE, au mot près de la planche : trois étapes
     numérotées sur filets d'encre, une note, un lien. Les numéros
     reviennent (la v51 les avait retirés) : ils sont l'un des quatre
     emplois du vin de la V80, et une méthode se lit dans l'ordre. */
  methode: {
    titre: "Méthode",
    etapes: [
      {
        titre: "Le périmètre",
        texte:
          "Région, typologie et taille d’entreprises sont arrêtées avec vous. Le périmètre est ensuite mesuré : le devis indique ce qu’il contient, avant tout engagement.",
      },
      {
        titre: "La lecture",
        texte:
          "Les sociétés sont repérées à partir des actes déposés au registre. Chaque cas est repris à la main : l’acte est ouvert et lu, y compris lorsqu’il s’agit d’un scan.",
      },
      {
        titre: "La livraison",
        texte:
          "Le jour de la livraison, l’extrait du registre et l’acte sont vérifiés à nouveau. Si un élément déconseille l’approche, par exemple une société déjà conseillée ou filiale d’un groupe, il figure au dossier.",
      },
    ],
    /* le lien « La méthode en détail » de la planche n'est pas repris
       (arbitrage Vincent, 17/09/2026) : il pointait sur la section
       elle-même, faute de page. Il reviendra avec une vraie page. */
    note: "Les critères de repérage sont mesurés sur l’historique national des transmissions de PME.",
  },
  /* V80 · LES CONDITIONS, au mot près de la planche, à deux corrections
     près (arbitrage Vincent, 17/09/2026) : « sans limite de nombre » sort
     de l'intro de l'origination, et la protection dit que la rémunération
     reste due, pas que le mandat l'est. La structure de la rémunération
     est donnée, jamais un nombre ni un pourcentage (offre v15) : les
     montants sont renvoyés au devis dans l'intro.
     Le libellé « Abonnement » de la planche est remplacé par « En
     continu », en miroir de « À la mission » : la section « L'offre v15 »
     de CLAUDE.md proscrit le mot, et la charte prime (arbitrage Vincent,
     17/09/2026, lot 4). La carte « Facturation » de la planche (« Un mois
     sans dossier livré n'est pas facturé ») est SUPPRIMÉE au lot 4 bis :
     le plancher mensuel est mort avec le modèle au volume (v65), un
     retainer le contredit. Trois valeurs restent. */
  conditions: {
    titre: "Conditions",
    intro:
      "Deux façons de travailler ensemble. Les montants sont chiffrés au devis, avant signature, après mesure de votre périmètre.",
    origination: {
      libelle: "En continu",
      titre: "L’origination",
      texte:
        "Votre périmètre est tenu sous veille. Chaque dossier vous est livré dès qu’il est vérifié. Le volume du périmètre est mesuré et annoncé au devis, avant tout engagement.",
      valeurs: [
        {
          libelle: "Engagement",
          valeur: "Six mois",
          texte: "Puis reconduction mensuelle, résiliable avec un mois de préavis.",
        },
        {
          libelle: "Rémunération",
          valeur: "Trois composantes",
          texte:
            "Un retainer mensuel, un fee à la signature de chaque mandat obtenu sur un dossier livré, et une part des honoraires de succès.",
        },

        {
          libelle: "Protection",
          valeur: "Vingt-quatre mois",
          texte:
            "La rémunération reste due sur tout mandat signé avec une société issue d’un dossier livré, contrat en cours ou non.",
        },
      ],
    },
    mandat: {
      libelle: "À la mission",
      titre: "Le mandat de recherche",
      texte: `Lorsqu’un mandat de recherche arrive au cabinet, ${brand.MARQUE} ${brand.SUFFIXE} constitue, selon vos critères, une liste de sociétés vérifiées, livrée à la date convenue. Rémunération fixée au devis, à la mission. Hors périmètres déjà sous exclusivité.`,
    },
    note: `${brand.MARQUE} ${brand.SUFFIXE} n’intervient pas dans les opérations : ni conseil, ni négociation.`,
  },
  /* V80 · À PROPOS. Le portrait, deux paragraphes, l'identité juridique.
     Les crochets de la planche ([Raison sociale], [Adresse du siège]) sont
     des EMPLACEMENTS : le composant lit brand.ENTITY. Le PARCOURS du
     fondateur est une chaîne vide, non affichée tant qu'elle l'est : la
     planche en donne la place, pas le texte. Le nom du fondateur vit ici
     et nourrit le JSON-LD Person (schema.ts). */
  apropos: {
    titre: "À propos",
    nom: FONDATEUR,
    portraitAlt: `Portrait de ${FONDATEUR}, fondateur d’${brand.MARQUE} ${brand.SUFFIXE}`,
    legende: `${FONDATEUR}, fondateur`,
    texte: `${brand.MARQUE} ${brand.SUFFIXE} a été fondé par ${FONDATEUR}, entre Paris et Bayonne. Il conduit lui-même les échanges avec les cabinets et la vérification des dossiers.`,
    parcours: "",
    identite: {
      societe: "Société",
      /* composés ici et non dans le JSX : la règle des insécables de
         typo.ts passe sur la ligne entière, « SIREN » reste collé à son
         numéro comme aux mentions légales */
      societeValeur: `${brand.ENTITY.raisonSociale}, SIREN ${brand.ENTITY.siren}`,
      siege: "Siège",
      siegeValeur: `${brand.ENTITY.adresse}, ${brand.ENTITY.codePostal} ${brand.ENTITY.ville}`,
      telephone: "Téléphone",
      email: "Email",
      linkedin: "LinkedIn",
      linkedinLabel: `Profil de ${FONDATEUR}`,
    },
  },
  /* V80 · LES ANALYSES : trois colonnes, sans date, titres et chapeaux
     lus dans src/config/analyses.ts, qui nourrit aussi les pages
     d'article. Le lien « Toutes les analyses » de la planche n'est pas
     repris (arbitrage Vincent, 17/09/2026) : les trois analyses sont déjà
     affichées, il pointait sur sa propre section. Les quatre dernières
     clés servent le gabarit des pages d'article, repris au lot 4. */
  analyses: {
    titre: "Analyses",
    lire: "Lire",
    lireAria: "Lire l’analyse : ",
    kicker: "Analyses",
    retour: "Analyses",
    piedTexte: "C’est exactement ce que nous faisons, pour un cabinet par périmètre.",
    cta: CTA,
  },
  /* V80 · PRENDRE RENDEZ-VOUS, au mot près de la planche : la bande
     verte, le seul bouton commercial du site (le lien Calendly de
     brand.ts), et les deux voies directes. */
  rendezVous: {
    titre: "Prendre rendez-vous",
    texte:
      "Un premier échange de trente minutes permet d’arrêter votre périmètre. Le devis qui suit en indique le contenu et les conditions.",
    bouton: "Choisir un créneau",
    telLibelle: "Par téléphone",
    mailLibelle: "Par email",
  },
  /* ============================================================
     v68 · LA PAGE DES DIRIGEANTS (/dirigeants).
     Elle existe parce qu'Imbrin écrit à des dirigeants de PME avant
     qu'un cabinet les approche. Ces dirigeants chercheront « Imbrin » et
     tomberaient sinon sur un site écrit pour des cabinets, qui parle
     d'eux à la troisième personne. Ici on s'adresse à eux, à la
     deuxième, et ON NE VEND RIEN : aucun prix, aucune offre, aucun appel
     à réserver un échange, aucun lien vers la section Offre.
     VOCABULAIRE PROSCRIT SUR CETTE PAGE, et la liste est absolue :
     « cible », « détecter », « gisement », « périmètre », « exclusivité »,
     « vous aider », « vous accompagner », « valoriser ». Un dirigeant
     n'est pas une ressource, et cette page ne promet aucun service.
     DEUX ÉCARTS AU BRIEF, tous deux assumés et signalés :
     1. les deux tirets cadratins du brief sont transposés, règle de
        charte v8, même transposition qu'en v46b ;
     2. « nous vous écrivons à votre entreprise » est devenu « nous vous
        écrivons dans votre fonction de dirigeant ». La première
        formulation est celle que la v63 a RETIRÉE du site parce qu'elle
        était fausse : le contact passe par une ligne directe, pas par
        l'entreprise. La règle du brief, « tout ce qui y est écrit doit
        être vrai le jour de la publication », l'interdit donc.
     ============================================================ */
  dirigeants: {
    /* v69 : « reçu un courrier » devient « été contacté ». Quatre canaux
       seront utilisés selon l'âge du dirigeant, lettre, mail, LinkedIn et
       téléphone : le titre doit les couvrir tous. Le CORPS garde
       « courrier » là où il parle de la lettre elle-même. */
    metaTitre: "Vous avez été contacté par Imbrin Research",
    kicker: "Vous avez été contacté par Imbrin Research",
    titre:
      "Ce que nous faisons, ce que nous ne faisons pas, et ce que vous pouvez décider.",
    chapo:
      "Cette page existe parce que vous devez pouvoir vérifier ce que nous vous avons écrit.",
    blocs: [
      {
        titre: "Ce que nous faisons",
        corps: [
          "Nous préparons des dossiers pour des cabinets de conseil qui accompagnent des dirigeants de PME dans la transmission de leur entreprise. Ces dossiers sont établis à partir de registres publics : registre du commerce, actes déposés au greffe, comptes annuels. Rien d’autre. Aucune donnée privée, aucun renseignement sur votre patrimoine, aucune source qui ne soit pas publique.",
        ],
      },
      {
        titre: "Ce que nous ne faisons pas",
        corps: [
          /* « nous vous écrivons à votre entreprise » est retiré : voir la
             note de tête, la v63 a établi que c'était faux. La capacité
             remplace le canal, et elle, elle est vraie. */
          "Nous ne sommes ni acquéreur, ni conseil. Nous n’avons aucune offre à vous transmettre. Nous ne prenons aucune part à une éventuelle transaction, et vous ne nous devez rien, ni aujourd’hui, ni plus tard. Nous ne contactons jamais un dirigeant à titre privé : nous vous écrivons personnellement, dans votre fonction de dirigeant, et jamais par vos équipes. Un courrier vous arrive sous pli fermé, marqué « Personnel et confidentiel », à votre nom.",
        ],
      },
      {
        titre: "Ce que vous pouvez décider",
        corps: [
          "Avant qu’un cabinet vous approche, nous vous écrivons. Vous avez trois possibilités.",
        ],
        choix: [
          {
            fort: "Ne rien faire.",
            suite:
              "Nous vous appellerons une fois, à la date indiquée dans notre message, et nous n’insisterons pas.",
          },
          {
            fort: "Refuser.",
            suite:
              "Un message suffit, par mail ou par téléphone. Ce refus est définitif : personne ne vous contactera par notre intermédiaire.",
          },
          {
            fort: "Nous dire que la question vous intéresse,",
            /* le tiret cadratin du brief est transposé en virgule, règle
               de charte v8, même transposition qu'en v46b */
            suite:
              "même de loin, même sans échéance. Nous vous montrerons alors ce que le registre laisse voir de votre société, et ce qu’il ne laisse pas voir. Vous jugerez seul si un échange avec un cabinet, un seul, choisi pour votre secteur, vaut la peine. C’est vous qui décidez, à chaque étape.",
          },
        ],
      },
      {
        titre: "Vos droits",
        corps: [
          `Les informations qui ont permis de vous contacter proviennent exclusivement de registres publics. Vous pouvez à tout moment vous opposer à leur utilisation, demander ce que nous détenons vous concernant, ou en demander la suppression. Une demande à l’adresse ci-dessous suffit ; elle est traitée sous ${brand.DELAI_OPPOSITION}, et l’opposition est définitive.`,
        ],
      },
    ] as BlocDirigeant[],
    pied: {
      intro: "Pour refuser, pour vérifier, ou pour toute question :",
      /* ligne de labels : le « · » y est conforme, c'est son seul emploi
         autorisé par la charte v8 */
      entite: `${brand.MARQUE} ${brand.SUFFIXE} · ${brand.ENTITY.raisonSociale} · SIREN ${brand.ENTITY.siren}`,
      lien: {
        label: "La notice d’information complète",
        href: "/confidentialite",
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
          corps: `Le site est édité par ${brand.ENTITY.raisonSociale}, SIREN ${brand.ENTITY.siren}, dont le siège est situé ${brand.ENTITY.adresse}, ${brand.ENTITY.codePostal} ${brand.ENTITY.ville}.`,
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
          corps: "Pour toute question relative au site :",
          email: brand.CONTACT_EMAIL,
        },
      ] as SectionLegale[],
    },
    confidentialite: {
      titre: "Confidentialité",
      metaTitre: `Confidentialité, ${brand.MARQUE} ${brand.SUFFIXE}`,
      sections: [
        {
          titre: "Responsable du traitement",
          corps: `Les traitements décrits sur cette page sont mis en œuvre par ${brand.ENTITY.raisonSociale}, SIREN ${brand.ENTITY.siren}. ${brand.MARQUE} ${brand.SUFFIXE} est une marque exploitée par cette société.`,
        },
        {
          titre: "Cookies et données de navigation",
          corps: "Ce site ne dépose aucun cookie, n’embarque aucun traceur ni script tiers et ne collecte aucune donnée de navigation.",
        },
        {
          titre: "Prise de rendez-vous",
          corps: "La prise de rendez-vous s’effectue via Calendly, service externe accessible par un lien sortant. Les informations saisies à cette occasion sont traitées par Calendly, selon ses propres conditions.",
        },
        {
          titre: "Finalité et base légale",
          corps: [
            /* v69 : LA NOTICE DÉCRIT LE TRAITEMENT RÉEL. Elle disait que le
               CABINET prenait contact ; c'est Imbrin qui écrit la première
               depuis la page /dirigeants, et une notice décrit ce qui est
               fait. La qualification des données n'est PAS touchée ici,
               elle reste en attente d'avis juridique (voir BACKLOG.md).
               DEUX ÉCARTS AU BRIEF, signalés à Vincent : les tirets
               cadratins sont transposés en virgules, règle de charte v8 ;
               et « à votre entreprise » est écrit « dans votre fonction de
               dirigeant », parce que le même brief annonce quatre canaux
               de contact dont LinkedIn et le téléphone, dont aucun n'est
               l'entreprise. Une notice d'information ne peut pas annoncer
               un canal que la pratique dément. */
            /* v70 : L'INVARIANT DU PREMIER CONTACT, écrit ici dans sa forme
               définitive. Imbrin contacte le dirigeant SEUL, dans sa
               fonction, par un canal personnel et confidentiel, et jamais
               par le standard ni par ses équipes. La formulation « premier
               contact par l'entreprise » est ABANDONNÉE : elle désignait
               le standard, c'est-à-dire précisément le canal qui fait
               fuiter l'information dans l'entreprise du dirigeant.
               Voir la section positionnement du CLAUDE.md, qui la porte.
               Les tirets cadratins du brief sont transposés en virgules,
               règle de charte v8. EXCEPTION, v71 : celui de « Personnel —
               Confidentiel » est CONSERVÉ. Ce n'est pas de la ponctuation,
               c'est la citation d'une mention réellement imprimée sur
               l'enveloppe : la transposer reviendrait à mal citer un objet
               physique. Ne pas le « corriger ».
               v78 : EXCEPTION LEVÉE (arbitrage Vincent, 14/09/2026). La
               mention s'écrit « Personnel et confidentiel », ici et sur
               /dirigeants : zéro tiret cadratin sur le site, vérifié sur le
               HTML produit. */
            /* v76 : la finalité ne décrit plus une sélection par l'âge ni par
               l'absence de relais, le backtest national a montré que ni l'un
               ni l'autre ne sélectionne. Elle décrit ce qui est fait : un
               acte déposé et daté, puis des lectures. « Son âge » reste dans
               les données traitées ci-dessous, l'âge est lu, il n'est plus
               une porte, et une notice liste ce qui est traité. */
            "Nous identifions des sociétés à partir d’un acte déposé au registre, daté ; nous lisons ensuite qui dirige, qui détient le capital et qui pourrait prendre la suite. Imbrin Research vous écrit d’abord, vous seul, dans votre fonction de dirigeant, par un courrier ou un message qui vous est personnellement adressé. Un courrier vous arrive sous pli fermé, marqué « Personnel et confidentiel », à votre nom. Nous ne passons jamais par votre standard ni par vos équipes. Un cabinet, un seul, choisi pour votre secteur, ne vous approche que si vous l’avez accepté ; c’est à lui, et à lui seul, que ces informations sont transmises.",
            "Le traitement repose sur l’intérêt légitime : faciliter la transmission d’entreprises en mettant en relation leurs dirigeants avec des professionnels du conseil en cession. Il n’a pas d’autre finalité que celle-là : le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé, et aucune démarche ne vise son patrimoine personnel.",
          ],
        },
        {
          titre: "Données traitées",
          corps: "Les données traitées sont l’identité et la fonction du dirigeant, son âge, la société qu’il dirige, ses chiffres publiés, les actes et la structure de détention, et une coordonnée de contact, qui peut être une ligne directe du dirigeant.",
        },
        {
          titre: "Origine des données",
          corps: [
            "L’identité, la société, les chiffres, les actes et la structure de détention viennent des registres publics français (RNE, SIRENE, BODACC). Les coordonnées proviennent de prestataires d’enrichissement B2B ; elles peuvent inclure une ligne directe du dirigeant. Chaque coordonnée livrée porte son statut. Le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé. L’opt-out est définitif.",
            "Ces données ne sont pas collectées auprès du dirigeant. L’information prévue à l’article 14 du RGPD est rendue publiquement accessible par cette page.",
            "Une version lisible de cette information, écrite pour le dirigeant que nous avons contacté, est publiée à part.",
          ],
          lien: { label: "Vous avez été contacté ?", href: "/dirigeants" },
        },
        {
          titre: "Destinataires",
          corps: "Le dossier d’approche est livré au cabinet servi sur le périmètre concerné, et à lui seul. Interviennent également l’hébergeur de notre base et le prestataire chargé de l’enrichissement des coordonnées, qui agissent pour notre compte et sur nos instructions.",
        },
        {
          titre: "Transferts hors Union européenne",
          corps: "Notre base est hébergée dans l’Union européenne, en Irlande. Le prestataire chargé de l’enrichissement des coordonnées héberge également dans l’Union européenne, mais son siège se situe hors de l’Espace économique européen, ainsi qu’une partie de ses sous-traitants et de ses fournisseurs de données. Ces transferts sont encadrés par les clauses contractuelles types adoptées par la Commission européenne.",
        },
        {
          titre: "Durées de conservation",
          corps: "Une détection non retenue est conservée 3 ans à compter de sa dernière mise à jour. Un dossier livré à un cabinet est conservé pendant la durée du contrat, puis 5 ans. Le registre d’opposition est conservé sans limitation de durée : c’est ce qui rend l’opt-out définitif.",
        },
        {
          titre: "Vos droits",
          corps: [
            "Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur les données qui vous concernent. Vous pouvez obtenir une copie des données que nous détenons sur vous.",
            "Vous pouvez demander un opt-out définitif : il est honoré sans condition, et vos coordonnées sont inscrites à notre registre d’opposition. Cette opposition peut être exercée à tout moment, y compris avant toute livraison à un cabinet.",
            "Vous pouvez introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (cnil.fr).",
          ],
        },
        {
          titre: "Contact",
          corps: "Pour exercer vos droits ou pour toute question :",
          email: brand.CONTACT_EMAIL,
        },
      ] as SectionLegale[],
    },
  },  /* V80 · LE PIED DE PAGE, au mot près de la planche : l'emblème clair, le
     nom et la baseline ; trois colonnes, « Le site » (les six entrées de
     la navigation ci-dessus), « Informations » et « Contact » ; une ligne
     de bas de page. L'année du copyright est celle de la planche. La
     raison sociale et le SIREN n'y sont plus : la planche ne les a pas,
     ils vivent aux mentions légales et, au lot 3, dans À propos. */
  pied: {
    emblemeAlt: `Emblème d’${brand.MARQUE} ${brand.SUFFIXE}, un plongeon imbrin gravé`,
    site: { aria: "Pages du site", titre: "Le site" },
    informations: {
      titre: "Informations",
      liens: [
        /* v68 : la porte d'entrée du dirigeant qui a été contacté et
           cherche à vérifier. Dans le pied, jamais dans la nav : la page
           d'accueil s'adresse aux cabinets, pas à lui. */
        { label: "Vous avez été contacté ?", href: "/dirigeants" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
    },
    contact: { titre: "Contact", linkedin: "LinkedIn" },
    copyright: `© 2026 ${brand.MARQUE} ${brand.SUFFIXE}`,
    note: "Site sans traceurs",
  },
});
