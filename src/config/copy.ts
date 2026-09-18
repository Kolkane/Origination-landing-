import { brand } from "./brand";
import { typoDeep } from "./typo";


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

/* Copy v8 : reprise AU MOT PRÈS de MAQUETTE-V8.html (source de vérité).
   Règle v8 : aucun tiret cadratin ni demi-cadratin dans les textes.
   V80 : les sections de l'accueil sont reprises AU MOT PRÈS des planches
   MAQUETTE-V80-ACCUEIL.html et MAQUETTE-V80-ACCUEIL-MOBILE.html. */
export const copy = typoDeep({
  meta: {
    title: `${brand.MARQUE} ${brand.SUFFIXE}, ${brand.BASELINE}`,
    /* v86 (référencement, 18/09/2026) : la description est ce que Google
       affiche sous le titre. L'ancienne disait encore « les actes que
       personne n'ouvre », formulation abandonnée en v40 ; celle-ci reprend
       les mots du hero V80, rien d'autre. */
    description:
      "Origination sell-side pour les cabinets M&A. Les PME à approcher, repérées au registre et livrées en dossiers d’approche vérifiés. Un seul cabinet par périmètre.",
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
      /* l'ordre des six entrées SUIT l'ordre des sections de la page
         (page.tsx : conditions, à propos, analyses). « Analyses » était
         avant « À propos », la nav annonçait donc un ordre que le
         défilement démentait. Toute section ajoutée se range ici à sa
         place réelle, pas à la fin. */
      { label: "À propos", href: "/#apropos" },
      { label: "Analyses", href: "/#analyses" },
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
      "Chaque société retenue fait l’objet d’un dossier écrit, que l’associé lit en premier : identité, trois exercices de comptes, structure de détention, chronologie datée des actes, angle d’approche, coordonnées avec leur statut, et ce que les sources ne permettent pas d’établir.",
    sous:
      "Le spécimen est fictif : société, personnes et chiffres sont inventés. En rendez-vous, un dossier complet est parcouru avec vous, page à page.",
    bouton: "Lire le dossier spécimen",
    /* v87 (arbitrage Vincent, 18/09/2026) : la couverture est la page 1
       du dossier que le popup ouvre, le spécimen 2026-000 du gabarit
       Veillor.com, Vérane Ingénierie, fictif : ses mots sont ceux de son
       sous-titre. */
    couverture: {
      marque: `${brand.MARQUE} ${brand.SUFFIXE}`,
      label: "Dossier d’approche",
      titre: "Vérane Ingénierie",
      /* v87b (arbitrage Vincent, 18/09/2026) : la couverture porte la THÈSE
         du dossier, la phrase de synthèse en tête de sa page 1, mot pour
         mot ; c'est elle qui donne envie d'ouvrir, une fiche signalétique
         n'appelle personne. La fiche passe en dessous, en petit. Les
         chiffres sont ceux du spécimen fictif, marqué tel sur la
         couverture même (liste blanche, cas 3). */
      these: "Gérant de 68 ans, 82 % des parts, une transformation en SAS engagée, non décidée.",
      activite: "Ingénierie et études techniques, Paris 12e",
      specimen: "Spécimen, données fictives",
      confidentiel: "Confidentiel",
    },
    /* v87 : LE POPUP MONTRE LE VRAI DOSSIER. Les rubriques HTML qui
       représentaient le spécimen sont parties : le popup affiche les deux
       pages du PDF en images (brand.MEDIAS.specimenPages), empilées, avec
       un clic pour tourner la page. Ne restent ici que la barre, les
       commandes du cahier et les textes alternatifs des pages. */
    popup: {
      titre: "Dossier d’approche, spécimen 2026-000",
      pdf: "Version PDF",
      fermer: "Fermer",
      pages: [
        {
          alt: "Page 1 du dossier spécimen Vérane Ingénierie : le fait daté, les chiffres clés, l’angle, l’identité et ce que le registre établit.",
        },
        {
          alt: "Page 2 du dossier spécimen Vérane Ingénierie : les contreparties, les comptes, qui achète dans cette classe, ce que nous ne savons pas, les pièces lues, sources et méthode.",
        },
      ],
      precedente: "Page précédente",
      suivante: "Tourner la page",
      compteur: ["Page 1 sur 2", "Page 2 sur 2"],
      tourner: "Tourner la page",
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
  /* V80 · LES CONDITIONS. L’intro de la section, celle de l’origination et
     le bloc du mandat sont ceux de la planche, à une correction près :
     « sans limite de nombre » est sorti de l’intro de l’origination
     (arbitrage Vincent, 17/09/2026). Le libellé « Abonnement » de la
     planche est devenu « En continu », en miroir de « À la mission » : la
     section « L’offre v15 » de CLAUDE.md proscrit le mot.
     LES TROIS VALEURS sont celles de L’OFFRE PUBLIÉE LE 17/09/2026
     (amendement CLAUDE.md du même nom) et remplacent les quatre cartes de
     la planche : un premier mois pour juger, proposé seulement si la
     mesure du périmètre montre des dossiers à livrer ; puis des périodes
     de trois mois, résiliables à chaque échéance avec un mois de préavis ;
     et l’exclusivité pendant le contrat. La structure de la rémunération
     ne se traite qu’au devis : plus de retainer, de fee, de part des
     honoraires ni de protection sur le site. Les montants sont renvoyés au
     devis dans l’intro, aucun volume n’est promis. */
  conditions: {
    titre: "Conditions",
    intro:
      "Deux façons de travailler ensemble : l’origination, en continu, et le mandat de recherche, à la mission.",
    /* v82 (arbitrage Vincent, 17/09/2026), troisième passage : L'OFFRE.
       Les quatre grandes valeurs de la planche, puis une feuille de
       conditions, puis un tableau réglé ont été essayés : « toujours
       difficile à lire ». La section fait écho à une section de prix, et
       une section de prix a un code que tout le monde lit sans effort :
       le titre, le prix, ce que vous obtenez, les conditions. Il ne
       s'applique qu'à l'origination ; le mandat reste en tableau.
       Les gains sont des faits déjà publiés, redits à l'indicatif ; les
       conditions reprennent les phrases de l'offre publiée du 17/09 et du
       v81. « Au devis » n'est écrit qu'une fois en grand, à la place du
       prix, et n'est plus répété ailleurs qu'où la règle l'exige. */
    origination: {
      libelle: "En continu",
      titre: "L’origination",
      montants: {
        libelle: "Montants",
        valeur: "Au devis",
        texte: "Chiffrés avant signature, après mesure de votre périmètre.",
      },
      lien: { label: "Prendre rendez-vous", href: "/#contact" },
      gainsTitre: "Ce que vous recevez",
      gains: [
        "Votre périmètre tenu sous veille, en continu.",
        "Chaque dossier d’approche livré dès qu’il est vérifié.",
        "Le volume de votre périmètre mesuré et annoncé avant tout engagement.",
        "Un premier mois pour juger sur pièces.",
        "Votre périmètre réservé à un seul cabinet.",
        "Un mois sans dossier livré n’est pas facturé.",
      ],
      termesTitre: "Les conditions",
      termes: [
        {
          libelle: "Périmètre",
          texte: "Défini ensemble au rendez-vous, mesuré au devis.",
        },
        {
          libelle: "Engagement",
          texte: "Un mois pour commencer ; puis des périodes de trois mois.",
        },
        {
          libelle: "Résiliation",
          texte: "À chaque échéance, avec un mois de préavis.",
        },
        /* v81 : facturé au mois ; le mois sans dossier livré est dans les gains */
        { libelle: "Facturation", texte: "Au mois." },
        {
          libelle: "Exclusivité",
          texte: "Pour un client, sur un périmètre, pendant une durée fixée au devis.",
        },
        /* la seule mention du premier contact sur le site, et elle est
           commerciale : qui contacte, et comment, se décide au devis
           (arbitrage Vincent, 17/09/2026) */
        {
          libelle: "Premier contact",
          texte:
            "Qui contacte les dirigeants, et selon quelles modalités, se décide ensemble à la signature.",
        },
      ],
    },
    /* le mandat de recherche reste en tableau (arbitrage Vincent, 17/09/2026) */
    mandat: {
      libelle: "À la mission",
      titre: "Le mandat de recherche",
      texte: `Lorsqu’un mandat de recherche arrive au cabinet, ${brand.MARQUE} ${brand.SUFFIXE} constitue, selon vos critères, une liste de sociétés vérifiées, livrée à la date convenue.`,
      lignes: [
        { libelle: "Rémunération", cle: "À la mission", texte: "Fixée au devis." },
        {
          libelle: "Périmètres",
          cle: "Hors exclusivité",
          texte: "Les périmètres déjà réservés à un client ne sont pas concernés.",
        },
      ],
    },
    note: `${brand.MARQUE} ${brand.SUFFIXE} n’intervient pas dans les opérations : ni conseil, ni négociation.`,
  },
  /* V80 · À PROPOS. Le portrait, deux paragraphes, les coordonnées.
     v82 (arbitrage Vincent, 17/09/2026) : la section parle du fondateur,
     pas de l'entité ; la société (raison sociale, SIREN) et le siège
     sortent des lignes, ils sont aux mentions légales. Restent le
     téléphone, l'email et LinkedIn. Le PARCOURS, vide depuis la planche,
     reçoit le paragraphe de Vincent, mot pour mot ; « plus d'un an » est
     une durée en lettres, comme « un mois ». Toute la section est à la
     première personne (second passage, arbitrage Vincent).
     Le nom du fondateur vit ici et nourrit le JSON-LD Person (schema.ts). */
  apropos: {
    titre: "À propos",
    nom: FONDATEUR,
    portraitAlt: `Portrait de ${FONDATEUR}, fondateur d’${brand.MARQUE} ${brand.SUFFIXE}`,
    legende: `${FONDATEUR}, fondateur`,
    /* v82, second passage (arbitrage Vincent, 17/09/2026) : toute la
       section à la première personne. Le premier paragraphe se réduit à
       la présentation ; « il conduit lui-même les échanges et la
       vérification » est parti, le parcours le dit déjà (« je vérifie
       chaque dossier », « un seul interlocuteur »). Le nom ne figure
       plus dans le texte : il est sous le portrait et dans le JSON-LD. */
    texte: `J’ai fondé ${brand.MARQUE} ${brand.SUFFIXE}, entre Paris et Bayonne.`,
    parcours:
      "Je construis des produits de données depuis plus d’un an. En travaillant auprès de conseillers en gestion de patrimoine, j’ai vu le temps que coûte le repérage des sociétés à approcher. J’ai écrit le programme qui lit les registres à l’échelle nationale et je vérifie chaque dossier avant de vous le livrer. Vous avez un seul interlocuteur, du premier échange à la livraison.",
    identite: {
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
     affichées, il pointait sur sa propre section. Les deux dernières
     clés servent le gabarit des pages d'article, dont l'appel de pied a
     été remplacé par la bande « Prendre rendez-vous » de l'accueil. */
  analyses: {
    titre: "Analyses",
    lire: "Lire",
    lireAria: "Lire l’analyse : ",
    kicker: "Analyses",
    retour: "Analyses",
    /* v85 : le rail de la page d'article et son pied */
    sommaire: "Dans cette analyse",
    sommaireAria: "Sommaire de l’analyse",
    aussi: "À lire aussi",
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
    /* v81 (arbitrage Vincent, 17/09/2026) : AUCUNE MENTION JURIDIQUE DU PREMIER
       CONTACT sur cette page. Qui contacte les dirigeants, et à quelles
       conditions, se décide au devis (section Conditions) ; les conditions
       viendront de la note de l'avocat. La page dit quatre choses, et rien
       d'autre : qui nous sommes, pourquoi vous pouvez être contacté, un message
       suffit pour refuser et le refus est respecté, contact. Elle ne dit pas
       comment un dirigeant est contacté : nous ne répondons pas de la façon
       dont un client contacte. La liste des sources est la même que dans la
       notice. Le vocabulaire proscrit de la v68 reste entier. */
    metaTitre: "Vous avez été contacté par Imbrin Research",
    kicker: "Vous avez été contacté par Imbrin Research",
    titre: "Qui nous sommes, pourquoi vous pouvez être contacté, et comment refuser.",
    chapo: "Cette page existe parce que vous devez pouvoir vérifier qui nous sommes et ce que nous faisons.",
    blocs: [
      {
        titre: "Qui nous sommes",
        corps: [
          "Imbrin Research prépare des dossiers sur des PME françaises pour ses clients, des cabinets de conseil et des acquéreurs. Ces dossiers sont établis à partir de registres publics : le registre national des entreprises, les actes déposés au greffe, les comptes annuels, le répertoire SIRENE et le BODACC. Rien d’autre que ce que ces registres publient.",
          "Nous ne sommes ni acquéreur, ni conseil. Nous n’avons aucune offre à vous transmettre, nous ne prenons aucune part à une éventuelle transaction, et vous ne nous devez rien, ni aujourd’hui, ni plus tard.",
        ],
      },
      {
        titre: "Pourquoi vous pouvez être contacté",
        corps: [
          "Un acte déposé au registre par votre société, daté, l’a fait entrer dans un dossier ; nous avons ensuite lu ce que le registre porte : qui dirige, qui détient le capital, ce que disent les comptes. Ce dossier ne s’appuie que sur ce que le registre laisse voir. Le dossier vous concerne dans votre fonction de dirigeant, jamais à titre privé.",
        ],
      },
      {
        titre: "Refuser",
        corps: [
          "Un message suffit, par mail ou par téléphone, à l’adresse ci-dessous. Votre refus est respecté : votre société sort de nos dossiers.",
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
            /* v81 (arbitrage Vincent, 17/09/2026) : la notice ne décrit plus la
               procédure de premier contact ; elle dit la finalité, et rien
               d'autre. Les conditions viendront de la note de l'avocat. */
            "Nous identifions des sociétés à partir d’un acte déposé au registre, daté ; nous lisons ensuite qui dirige, qui détient le capital et qui pourrait prendre la suite, et nous en établissons un dossier pour nos clients sous contrat.",
            "Le traitement repose sur l’intérêt légitime : faciliter la transmission d’entreprises en mettant en relation leurs dirigeants avec des professionnels du conseil en cession. Il n’a pas d’autre finalité que celle-là : le dossier concerne le dirigeant en sa qualité de dirigeant, jamais à titre privé, et aucune démarche ne vise son patrimoine personnel.",
          ],
        },
        {
          titre: "Données traitées",
          corps: "Les données traitées sont l’identité et la fonction du dirigeant, son âge, la société qu’il dirige, ses chiffres publiés, les actes et la structure de détention, et une coordonnée de contact, qui peut être une ligne directe du dirigeant.",
        },
        {
          titre: "Origine des données",
          corps: [
            "L’identité, la société, les chiffres, les actes et la structure de détention viennent des registres publics français : le registre national des entreprises, les actes déposés au greffe, les comptes annuels, le répertoire SIRENE et le BODACC. Les coordonnées proviennent de prestataires d’enrichissement B2B ; elles peuvent inclure une ligne directe du dirigeant. Chaque coordonnée livrée porte son statut. Le dossier concerne le dirigeant en sa qualité de dirigeant, jamais à titre privé. L’opt-out est définitif.",
            "Ces données ne sont pas collectées auprès du dirigeant. L’information prévue à l’article 14 du RGPD est rendue publiquement accessible par cette page.",
            "Une version lisible de cette information, écrite pour le dirigeant, est publiée à part.",
          ],
          lien: { label: "Vous avez été contacté ?", href: "/dirigeants" },
        },
        {
          titre: "Destinataires",
          corps: "Le dossier d’approche est livré à nos clients sous contrat, cabinets de conseil ou acquéreurs. Interviennent également l’hébergeur de notre base et le prestataire chargé de l’enrichissement des coordonnées, qui agissent pour notre compte et sur nos instructions.",
        },
        {
          titre: "Transferts hors Union européenne",
          corps: "Notre base est hébergée dans l’Union européenne, en Irlande. Le prestataire chargé de l’enrichissement des coordonnées héberge également dans l’Union européenne, mais son siège se situe hors de l’Espace économique européen, ainsi qu’une partie de ses sous-traitants et de ses fournisseurs de données. Ces transferts sont encadrés par les clauses contractuelles types adoptées par la Commission européenne.",
        },
        {
          titre: "Durées de conservation",
          corps: "Une détection non retenue est conservée 3 ans à compter de sa dernière mise à jour. Un dossier livré à un client est conservé pendant la durée du contrat, puis 5 ans. Le registre d’opposition est conservé sans limitation de durée : c’est ce qui rend l’opt-out définitif.",
        },
        {
          titre: "Vos droits",
          corps: [
            "Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur les données qui vous concernent. Vous pouvez obtenir une copie des données que nous détenons sur vous.",
            "Vous pouvez demander un opt-out définitif : il est honoré sans condition, et vos coordonnées sont inscrites à notre registre d’opposition. Cette opposition peut être exercée à tout moment, y compris avant toute livraison à un client.",
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
