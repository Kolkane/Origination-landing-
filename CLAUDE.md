# CLAUDE.md — Règles du projet (ne jamais dévier)

## Ce qu'est ce site
Landing one-page d'une société d'origination sell-side : détection au registre (sources publiques)
des PME françaises dont le capital va probablement changer de mains, 12-18 mois avant le marché.
Clients cibles : boutiques M&A small-cap et family offices. Un seul client par zone et par verticale.
La marque : Imbrin Research — toujours via les variables MARQUE/SUFFIXE de src/config/brand.ts,
jamais en dur. Baseline fixe : "Origination sell-side".

## Le public
Des associés de cabinets M&A et des family officers qui font une due diligence fournisseur
avant de payer ~24 k€/an. Le site a UN job : survivre au réflexe "j'ai cherché, je n'ai rien
trouvé sur vous". Codes attendus : document financier imprimé, pas SaaS IA.

## Honnêteté rigoureuse (règle de marque, non négociable)
- Ne JAMAIS inventer : chiffres, logos clients, témoignages, compteurs, notations, badges presse.
- Tout chiffre affiché vient de src/config/brand.ts, nulle part ailleurs.
- Le spécimen de brief est FICTIF et porte la mention "Spécimen — données fictives".
- Pas de fausse rareté : les statuts de la carte viennent de la config, mis à jour à la main.

## Direction artistique v7 — "Sanjaya / vidéo en fond de hero" (définitive)
- Registre : noir, sobre, exclusif — agence B2B haut de gamme. Réf. validée : MAQUETTE-V9.html
  (v9.2, rythme et lexique métier) ; les v7 et v8 sont archivées.
- Amendement v8 (spécimen) : la version ANIMÉE du spécimen/console reste interdite ;
  le spécimen STATIQUE de la v8.1 (document sur filets, caviardage fixe, mention
  "données fictives") est autorisé et fait partie de la page.
- Amendement v8 (copy) : aucun tiret cadratin ni demi-cadratin dans les textes du site.
  Ponctuation en virgules, deux-points, points, parenthèses. Les séparateurs "·" sont
  réservés aux lignes de labels mono (nav, footer, notes de grille, doc-head).
- La pièce centrale est la vidéo du hero (public/imbrin.mp4) : un plongeon imbrin en
  chasse, muette, en boucle. Ne jamais la remplacer par un placeholder décoratif.
  Amendement (arbitrage Vincent, v8-4) : elle n'est PAS une prise de vue réelle et ne
  dure pas 6 s. Le site ne revendique donc nulle part son origine ni sa durée : la
  légende "Images réelles, boucle de 6 s" est retirée. Règle générale, adossée à la
  section Honnêteté : ne jamais affirmer sur un média ce qui n'est pas vérifiable.
- Rythme v9 : la page alterne bandes sombres et bandes CLAIRES (#ECE7DF, texte #171310)
  pour la bande de chiffres, le produit et les engagements. Largeurs de colonne variables
  (wrap 1080px, narrow 720px), offre en colonne collante, spécimen sombre posé en décalé
  sur la bande claire, CTA final centré pleine hauteur. Les bandes claires sont le seul
  écart au fond encre : elles servent le rythme de lecture, jamais la décoration.
- Palette : fond #0A0A0A · texte #F4F2EF · secondaire #B9B6B2 · tertiaire #83807C ·
  filets rgba(255,255,255,.12/.06) · unique accent rouge vin #8E2438 (souligné des CTA,
  hover). Aucune autre couleur.
  Amendement (arbitrage Vincent, v7-2) : le tertiaire était #7A7774 dans MAQUETTE-V7.html,
  éclairci en #83807C pour le contraste AA — la maquette reste archive non modifiée.
- Typo : Instrument Serif (titres, poids 400, italique autorisée) · Geist (corps) ·
  Geist Mono (labels uppercase, tracking large). Via next/font/google. Rien d'autre.
- Motion : UNE séquence d'apparition au chargement (fade + translateY, délais en cascade),
  fade des lignes de l'offre au scroll, lent zoom respiratoire de la vidéo (22 s), indice
  de scroll. C'EST TOUT. prefers-reduced-motion : tout statique, vidéo en pause.
- Interdits définitifs (hérités des itérations rejetées) : ticker, métriques animées,
  count-up, grilles de cards, beam/bordures lumineuses, tilt 3D, spotlight souris, pings,
  glow, dégradés colorés, grid de fond, badges/chips, emojis, icônes décoratives,
  illustrations d'oiseau en SVG. Si un de ces éléments existe encore dans le code : supprimer.
- Règle de process : le design se valide sur maquette HTML avec Vincent AVANT le code.
  Aucune nouvelle section, aucun composant visuel nouveau sans maquette validée.

## Interdits absolus (si l'un apparaît, le supprimer immédiatement)
Emojis · dégradés (bg-gradient-*) · texte en dégradé · glassmorphism / backdrop-blur ·
rounded-xl/2xl/3xl · shadow-md et au-delà · cartes-tuiles à icônes en grille de 3 ·
icônes Lucide/Heroicons décoratives · carrousel de témoignages · logos de confiance ·
badges "AI-powered" · Inter, Poppins, Roboto · boutons pill · dark mode · parallax ·
compteurs animés · popup/chatbot · bannière cookies (le site n'a aucun traceur).

## Stack & conventions
Next 14 App Router, TypeScript strict, Tailwind (tokens étendus dans tailwind.config.ts),
next/font (Google : Instrument Serif, Geist, Geist Mono), zéro dépendance UI externe
(pas de shadcn, pas de framer-motion : IntersectionObserver + classes CSS suffisent).
Composants dans src/components, un fichier par section. Contenu et données dans
src/config/brand.ts et src/config/copy.ts uniquement — jamais en dur dans le JSX.
Site 100 % statique, aucun backend, aucun formulaire : le seul CTA est un lien Calendly.
Accessibilité : focus visibles, contrastes AA, html lang="fr".
