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

## Direction artistique v2 — "la machine et l'imprimé"
Concept : l'interface est une machine contemporaine, tranchante, monochrome ; le seul
objet chaud de la page est le SPÉCIMEN DE BRIEF, qui garde son identité de document
imprimé (serif + papier). Le produit est littéralement un imprimé posé dans la machine.

- Fond global : blanc froid #FAFAF8 · encre #0D0D0B · texte secondaire #63635E ·
  filets #E4E4DF · ACCENT UNIQUE outremer #1F3AE0.
- L'outremer est rare : liens, hover du CTA, soulignés actifs, état "en discussion"
  de la carte, 2-3 chiffres clés maximum. Jamais en fond de section.
- Typo (self-hostée via next/font/local, téléchargée depuis Fontshare, licence gratuite) :
  · Display : Cabinet Grotesk (700/800), tracking -0.02em, interlignage 0.95-1.05.
  · Corps : Switzer (400/500), 17-18px/1.6.
  · Données/labels : IBM Plex Mono (inchangé), uppercase tracking 0.12em, 11-12px.
  · Newsreader (serif) est CONSERVÉE mais scopée exclusivement au composant
    BriefSpecimen. Nulle part ailleurs.
  Fallback si Fontshare inaccessible : Schibsted Grotesk (Google) en display,
  et corps en Schibsted 400 — mais essaie Fontshare d'abord.
- Le LOSANGE (◆) est le système graphique de la marque (le logo existant est un losange
  noir géométrique) : puce des listes, marqueur devant les labels de section, légende de
  carte, favicon, séparateurs. Dessiné en SVG inline (pas le caractère unicode), taille
  8-10px, noir — outremer uniquement pour l'état actif.
- Le spécimen : île de papier #F5F1E8, bordure encre 1px, serif Newsreader, tampon
  "SPÉCIMEN — données fictives", barres de caviardage encre. C'est le SEUL élément crème
  du site — le contraste froid/chaud est voulu et doit être net.
- Radius 0 partout (CTA : 0). Pas d'ombres. Hiérarchie par graisse, taille, filets, espace.
- Densité : conteneur max-w-[1200px], grille 12 colonnes, labels de section en colonne
  1-2, contenu en 3-11. Espacement vertical des sections : 80px desktop / 56px mobile —
  pas plus. Le blanc est une tension, pas du vide.
- Motion : UNE signature au chargement du hero — les barres de caviardage du spécimen
  s'étendent de 0 à 100 % en 300ms ease-out, en cascade 60ms. Sinon : fades 200ms au
  scroll, une fois. prefers-reduced-motion : tout statique.
- Interdits v2 (s'ajoutent aux interdits v1) : fond crème global, bronze/or #8A6B1E,
  Newsreader hors spécimen, serif dans les titres de section, palettes chaudes,
  terracotta, vert acide sur fond noir.

## Interdits absolus (si l'un apparaît, le supprimer immédiatement)
Emojis · dégradés (bg-gradient-*) · texte en dégradé · glassmorphism / backdrop-blur ·
rounded-xl/2xl/3xl · shadow-md et au-delà · cartes-tuiles à icônes en grille de 3 ·
icônes Lucide/Heroicons décoratives · carrousel de témoignages · logos de confiance ·
badges "AI-powered" · Inter, Poppins, Roboto · boutons pill · dark mode · parallax ·
compteurs animés · popup/chatbot · bannière cookies (le site n'a aucun traceur).

## Stack & conventions
Next 14 App Router, TypeScript strict, Tailwind (tokens étendus dans tailwind.config.ts),
next/font (local : Cabinet Grotesk, Switzer ; Google : IBM Plex Mono, Newsreader scopée
au spécimen), zéro dépendance UI externe (pas de shadcn,
pas de framer-motion : IntersectionObserver + classes CSS suffisent).
Composants dans src/components, un fichier par section. Contenu et données dans
src/config/brand.ts et src/config/copy.ts uniquement — jamais en dur dans le JSX.
Site 100 % statique, aucun backend, aucun formulaire : le seul CTA est un lien Calendly.
Accessibilité : focus visibles, aria sur la carte, contrastes AA, html lang="fr".
