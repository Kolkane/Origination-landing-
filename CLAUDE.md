# CLAUDE.md — Règles du projet (ne jamais dévier)

## Ce qu'est ce site
Landing one-page d'une société d'origination sell-side : détection au registre (sources publiques)
des PME françaises dont le capital va probablement changer de mains, 12-18 mois avant le marché.
Clients cibles : boutiques M&A small-cap et family offices. Un seul client par zone et par verticale.
Le nom de la marque n'est pas choisi : utiliser la variable MARQUE de src/config/brand.ts partout.
Baseline fixe : "Origination sell-side".

## Le public
Des associés de cabinets M&A et des family officers qui font une due diligence fournisseur
avant de payer ~24 k€/an. Le site a UN job : survivre au réflexe "j'ai cherché, je n'ai rien
trouvé sur vous". Codes attendus : document financier imprimé, pas SaaS IA.

## Honnêteté rigoureuse (règle de marque, non négociable)
- Ne JAMAIS inventer : chiffres, logos clients, témoignages, compteurs, notations, badges presse.
- Tout chiffre affiché vient de src/config/brand.ts, nulle part ailleurs.
- Le spécimen de brief est FICTIF et porte la mention "Spécimen — données fictives".
- Pas de fausse rareté : les statuts de la carte viennent de la config, mis à jour à la main.

## Direction artistique — "l'imprimé financier"
- Fond papier #F5F1E8 · encre #1F1B15 · texte secondaire #6E675C · filets #D9D2C3 · accent unique bronze #8A6B1E.
- Typo : Newsreader (display ET corps, via next/font, opsz actif) + IBM Plex Mono pour
  étiquettes, chiffres, légendes (uppercase, tracking 0.14em, 11-12px). Aucune autre police.
- Radius 0 partout (boutons : 2px max). Pas d'ombres portées : la hiérarchie se fait par
  la typo, les filets 1px et l'espace.
- Layout éditorial asymétrique, larges marges, beaucoup de blanc. Le luxe = l'espace.
- Signature visuelle du site : le CAVIARDAGE (barres noires de rédaction sur les champs
  d'identité du spécimen) + le tampon "SPÉCIMEN" + les hachures diagonales sur la carte.
  C'est la seule fantaisie autorisée. Tout le reste est discipliné.
- Motion : apparitions fade + translateY(8px), 200ms ease-out, une fois, au scroll.
  Respecter prefers-reduced-motion. Rien d'autre ne bouge.

## Interdits absolus (si l'un apparaît, le supprimer immédiatement)
Emojis · dégradés (bg-gradient-*) · texte en dégradé · glassmorphism / backdrop-blur ·
rounded-xl/2xl/3xl · shadow-md et au-delà · cartes-tuiles à icônes en grille de 3 ·
icônes Lucide/Heroicons décoratives · carrousel de témoignages · logos de confiance ·
badges "AI-powered" · Inter, Poppins, Roboto · boutons pill · dark mode · parallax ·
compteurs animés · popup/chatbot · bannière cookies (le site n'a aucun traceur).

## Stack & conventions
Next 14 App Router, TypeScript strict, Tailwind (tokens étendus dans tailwind.config.ts),
next/font (Google : Newsreader, IBM Plex Mono), zéro dépendance UI externe (pas de shadcn,
pas de framer-motion : IntersectionObserver + classes CSS suffisent).
Composants dans src/components, un fichier par section. Contenu et données dans
src/config/brand.ts et src/config/copy.ts uniquement — jamais en dur dans le JSX.
Site 100 % statique, aucun backend, aucun formulaire : le seul CTA est un lien Calendly.
Accessibilité : focus visibles, aria sur la carte, contrastes AA, html lang="fr".
