# CLAUDE.md — Règles du projet (ne jamais dévier)

## Ce qu'est ce site
Landing one-page d'une société d'origination sell-side : détection au registre (sources publiques)
des PME françaises dont le capital va probablement changer de mains, 12-18 mois avant le marché.
Clients cibles : boutiques M&A small-cap et family offices. Un seul cabinet par périmètre.
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
  Amendement (arbitrage Vincent, v15) : --wine-lift #B32E46 est la variante
  LISIBLE du vin, pas une seconde couleur. Le vin plein sur l'encre ne donne
  que 2,3:1, il échoue même le seuil grand texte ; le lift donne 3,2:1 et
  passe AA en grand texte. Même précédent que le tertiaire ci-dessus.
  Il ne sert QU'AU TEXTE, en grande taille, sur fond sombre. Jamais en
  remplissage, jamais sur un filet, jamais sur papier : les aplats et les
  filets restent en #8E2438, et sur papier le vin plein suffit (6,8:1).
- Typo : Instrument Serif (titres, poids 400, italique autorisée) · Geist (corps) ·
  Geist Mono (labels uppercase, tracking large). Via next/font/google. Rien d'autre.
- Motion : UNE séquence d'apparition au chargement (fade + translateY, délais en cascade),
  fade des lignes de l'offre au scroll, lent zoom respiratoire de la vidéo (22 s), indice
  de scroll. C'EST TOUT. prefers-reduced-motion : tout statique, vidéo en pause.
- Interdits définitifs (hérités des itérations rejetées) : ticker, métriques animées,
  count-up, grilles de cards, beam/bordures lumineuses, tilt 3D, spotlight souris, pings,
  glow, dégradés colorés, grid de fond, badges/chips, emojis, icônes décoratives,
  (amendement v12, arbitrage Vincent : les trois marques de la v11 sont RETIRÉES.
  Elles étaient sémantiquement liées aux postes Couverture / Veille / Exclusivité,
  que les deux paliers remplacent ; deux marques pour deux paliers serait un
  placage. IconesOffre.tsx reste dans le repo, non monté, comme CarteFrance.tsx.
  Aucune icône nulle part sur la page.)
  (amendement v14, arbitrage Vincent : les TAMPONS DE DOCUMENT sont autorisés,
  et seulement à l'intérieur du spécimen de dossier. VÉRIFIÉ, CONFIDENTIEL et
  équivalents : rectangulaires, filet fin, jamais arrondis. Ce sont des marques
  de pièce administrative, pas des badges. Hors du spécimen, l'interdiction des
  badges et des chips marketing reste entière. Les chips « Solo 60+ · sans
  relais », « SCI · 2023 », « Sans dette » de la maquette v14 ont été retirées :
  une chip qui résume un critère de détection le publie.)
  illustrations d'oiseau en SVG. Si un de ces éléments existe encore dans le code : supprimer.
- Règle de process (amendée v15, arbitrage Vincent). Deux régimes, à ne pas confondre :
  1. NOUVELLE section ou NOUVEAU composant visuel : maquette HTML validée avec
     Vincent AVANT le code, sans exception.
  2. REFONTE du gabarit d'une section EXISTANTE : peut être codée directement,
     mais seulement sur décision explicite de Vincent dans le brief. Sans cette
     décision, la maquette reste la règle.
  La composition centrée du fondateur et l'enveloppe pleine largeur de la FAQ
  ont été faites sous le régime 2. Les sections entonnoir, dossier, offre et
  méthode sont passées par le régime 1, leurs planches sont à la racine
  (MAQUETTE-V15-*.html) et font foi sur ce qui a été validé.

## L'offre v13 (définitive, remplace la v12 et la grille régionale)
Deux lignes, toutes deux dans src/config/brand.ts :
- L'ORIGINATION, à partir de 2 000 € HT / mois selon le périmètre convenu,
  engagement 3 mois puis reconduction mensuelle. Le volume est mesuré et
  annoncé au devis avant tout engagement ; un mois qui passe sous ce volume
  n'est pas facturé.
- LE MANDAT DE RECHERCHE, 3 500 € HT par mission à la livraison, shortlist
  vérifiée sous 7 jours, hors périmètres déjà sous exclusivité.
Un périmètre = une région et une typologie d'entreprises, arrêtées à l'appel
et inscrites au devis. Un seul cabinet y est servi tant que le contrat court.
Les mots « zone », « verticale », « abonnement » et « cellule » sont proscrits :
le périmètre se définit au rendez-vous, ce n'est pas un découpage préétabli.
Le prix est calibré au périmètre : ne jamais écrire que la grille est publique
ni qu'il n'existe aucun accord hors grille, ces deux phrases sont retirées.
Pas de commission sur la transaction : la rémunération ne dépend ni du closing
ni du prix de cession. Ne promettre aucun volume en chiffre rond.
Le livrable s'appelle « dossier d'approche », jamais « brief », jamais « fiche ».

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
des fichiers de configuration typés sous src/config : brand.ts (marque, entité,
contact, prix), copy.ts (les textes de la page), analyses.ts (les articles),
schema.ts (les graphes structurés, dérivés des précédents), site.ts (le domaine).
Amendement (arbitrage Vincent, v16) : la règle n'a jamais été « deux fichiers
seulement », c'est « RIEN CODÉ EN DUR DANS LE JSX ». Un nouveau domaine de
données mérite son fichier typé plutôt que d'être entassé dans copy.ts ; ce qui
reste interdit, c'est un texte ou une valeur écrits dans un composant.
Site 100 % statique, aucun backend, aucun formulaire : le seul CTA est un lien Calendly.
Accessibilité : focus visibles, contrastes AA, html lang="fr".
