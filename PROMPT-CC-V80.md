# Refonte V80 d'imbrin.fr : portage des maquettes validées

Tu travailles dans le repo `Origination-landing-` (Next.js 14, App Router, Tailwind, `src/config/copy.ts`, `src/app/globals.css`). Lis d'abord `CLAUDE.md` en entier, puis les deux maquettes déposées à la racine :

- `MAQUETTE-V80-ACCUEIL.html` (ordinateur, 1440 px)
- `MAQUETTE-V80-ACCUEIL-MOBILE.html` (390 px)

Ces maquettes sont la source de vérité de la page d'accueil. Elles ont été validées à l'écran. Tu les portes telles quelles : mêmes couleurs, mêmes tailles, mêmes espacements, même copy, même ordre des sections. Zéro latitude de design. Ce qui n'est pas dans la maquette n'existe pas. Ouvre-les dans un navigateur avant de commencer (le popup du dossier s'ouvre au clic sur le bouton ou sur la couverture).

Deux images à copier de la racine vers `public/` : `emblem-encre.png` (traits sombres, fonds clairs) et `emblem-clair.png` (traits clairs, fonds sombres). Elles remplacent `logo-imbrin.png` et `logo-dossier.png` dans les composants, sans supprimer les anciens fichiers (la signature mail pointe encore sur le serveur).

## Ce qui change

**Direction artistique V80, qui remplace la DA v7 « Sanjaya / sombre ».** Fond blanc, encre `#16201C`, vert `#1E3A32`, noir de bande `#16201C`, filets `#DCE1DD` et `#C9D0CC`, gris de texte `#2B3530` et `#56605B`, textes sur fonds sombres `#DDE5E1`, `#B9C6C0`, `#9AA7A1`. Le hero vidéo reste plein écran et sombre : c'est la seule bande sombre en tête, avec la bande noire du dossier et le pied de page.

**Le rouge vin reste la pointe de la marque, à quatre endroits seulement**, exactement comme dans la maquette : le soulignement des liens texte sur fond blanc (`text-decoration-color: #8E2438`, le texte reste encre ; sur le hero, `#B32E46` ; sur la bande verte, blanc), les trois numéros de la méthode, la mention « Confidentiel » de la couverture, et dans le dossier lui-même les titres de rubriques et la mention « Confidentiel » du pied. Nulle part ailleurs : pas de bouton, pas d'aplat, pas de filet en vin. Sur les fonds sombres, `#8E2438` et `#B32E46` ne servent jamais à du texte (contraste insuffisant), seulement à un soulignement. Le vert garde les boutons, la bande finale et l'offre.

**Une seule famille typographique : Hanken Grotesk** (Google Fonts, via `next/font/google`, graisses 400, 500, 600). Fraunces, Spectral et Cutive Mono sortent du site. Les variables de `globals.css` restent nommées par rôle (`--f-display`, `--f-corps`, `--f-label`) et pointent toutes sur Hanken. Plus aucune capitale espacée en mono, plus aucun mot en italique dans un titre, plus aucun point médian hors pied de page.

**Structure de l'accueil, dans cet ordre.** Hero vidéo plein écran (en-tête transparent par-dessus, bloc de texte en bas à gauche, légende en bas à droite). « Ce que fait Imbrin Research » (intro + rangée de quatre icônes au trait, sans cadre ni fond). « Le dossier d'approche » (bande noire, description, couverture cliquable, bouton qui ouvre le dossier en popup). « Méthode » (trois étapes numérotées). « Conditions » (l'origination sous un filet vert épais avec quatre grandes valeurs, le mandat de recherche en dessous sous un filet fin). « À propos » (portrait, texte, coordonnées légales). « Analyses » (trois colonnes, sans date). « Prendre rendez-vous » (bande verte, seul bouton commercial du site, « Choisir un créneau »). Pied de page noir avec l'emblème clair.

**Sections et composants qui disparaissent de l'accueil** : Entonnoir, NeFaitPas, Faq, BarreAction (c'était un CTA mobile), Reveal (plus aucune animation d'entrée), IconesOffre, CarteFrance si elle n'est plus montée. Supprime les composants et le CSS mort qui ne servent qu'à eux. Le contenu de la FAQ ne se perd pas : la reconduction est dans Conditions, le RGPD est sur la page Confidentialité.

**Le hero.** `public/imbrin.mp4` avec `public/imbrin-poster.jpg`, autoplay muet en boucle, `playsinline`, `object-fit: cover`, hauteur `100svh` (repli `100vh`), voile uniforme `rgba(6,10,8,0.16)` sur ordinateur et `0.22` sur mobile, jamais de dégradé. Sous `prefers-reduced-motion`, la vidéo ne se lance pas et le poster reste. L'en-tête est transparent sur le hero (emblème clair, nom en blanc, navigation en blanc), puis devient fixe, blanc et opaque (emblème encre, texte encre, filet `#DCE1DD` en bas) dès que le visiteur a quitté le hero. Sur mobile, le bouton « Menu » ouvre un panneau plein écran avec les six entrées et les coordonnées ; le corps ne défile plus tant qu'il est ouvert.

**Les icônes** sont les SVG inline de la maquette (plaque de cabinet, carte de France avec la région remplie, registre, chemise à sangle). Extrais-les dans un composant `Icones.tsx`, `aria-hidden`, `currentColor`. La carte vient de `src/components/carte/france-paths.ts` simplifié : si tu préfères la régénérer depuis la source, garde exactement le même rendu (trait `currentColor`, une seule région remplie en vert).

**Le popup du dossier.** Un vrai `<dialog>` HTML, ouvert par `showModal()` : focus piégé, Échap, `aria-labelledby`, fermeture au clic sur le voile et sur « Fermer », retour du focus sur l'élément déclencheur, corps non défilant pendant l'ouverture. Animation d'entrée conforme à la maquette (voile en fondu 0,28 s, page qui monte de 22 px en 0,4 s), coupée sous `prefers-reduced-motion`. Le contenu du dossier est celui de la maquette, huit rubriques, dans `copy.ts`. Le lien « Version PDF » ne s'affiche que si `public/specimen-imbrin.pdf` existe ; tant qu'il n'existe pas, pas de lien mort. Le contenu du dossier est présent dans le DOM sans JavaScript.

**Les pages intérieures** (`/analyses/[slug]`, `/confidentialite`, `/mentions-legales`, `/dirigeants`) passent aux mêmes tokens, à la même police et au même en-tête et pied de page. Leur contenu ne change pas dans ce chantier ; les trois articles seront réécrits séparément.

## Ce qui ne change pas

- La charte d'honnêteté : aucun chiffre hors liste blanche, aucun montant, aucune intention prêtée au dirigeant, aucun critère de détection dévoilé. Le spécimen est fictif et le dit.
- L'invariant du premier contact et la page `/dirigeants`.
- Zéro tiret cadratin ni demi-cadratin dans les textes.
- `brand.ts` reste la seule source des constantes (nom, Calendly, téléphone, email, entité, siège). Les crochets `[Raison sociale]`, `[Adresse du siège]`, `[Parcours du fondateur]` de la maquette sont des emplacements : `À propos` lit `brand.ENTITY` et le parcours reste une chaîne vide masquée tant qu'elle n'est pas remplie.
- Le balisage JSON-LD, le sitemap, `robots.ts`, l'image OpenGraph (à repeindre aux couleurs V80 : blanc, encre, emblème encre), le lien Calendly, « Site sans traceurs ».

## Méthode de travail

Cinq lots, un commit par lot, un rapport court à la fin de chaque lot, et tu t'arrêtes pour validation avant le lot suivant.

0. **Préparation.** Vérifie avec `gh repo view --json visibility` que le dépôt est privé ; s'il est public, arrête-toi et dis-le avant tout commit. Copie les deux emblèmes dans `public/`. Ajoute Hanken via `next/font/google`, retire les trois anciennes polices, pose les tokens V80 dans `globals.css`. Ajoute à `CLAUDE.md` un amendement « V80, 17/09/2026 » qui décrit la nouvelle DA, la structure de l'accueil et la liste des composants retirés, sans réécrire les amendements antérieurs.
1. **Hero, en-tête, pied de page**, y compris l'en-tête qui devient blanc au défilement et le menu mobile.
2. **Service, Dossier avec son popup, Méthode.**
3. **Conditions, À propos, Analyses, Prendre rendez-vous**, et suppression des composants morts.
4. **Pages intérieures, mobile, qualité.** Mobile conforme à la maquette 390 px. Contrastes AA vérifiés sur chaque couple de couleurs. Navigation clavier complète, focus visible. Lighthouse mobile de l'accueil à comparer à la référence 88/96/100/100 : pas de recul sur la performance ; si la vidéo pèse, propose une solution sans la retirer.

À chaque lot, compare ton rendu à la maquette dans un navigateur, à 1440 et à 390 px, avant d'écrire le rapport. Si un point de la maquette est impossible ou contredit `CLAUDE.md`, ne tranche pas : signale-le dans le rapport et laisse la maquette en l'état.
