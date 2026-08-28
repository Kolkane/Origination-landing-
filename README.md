# imbrin.fr

Landing one-page d'Imbrin Research, service d'origination externe pour boutiques
M&A sell-side. Site statique, aucun backend, aucun formulaire, aucun traceur.

**Avant toute modification, lire `CLAUDE.md`.** Ce fichier n'est pas de la
documentation : c'est la charte du projet, et chacune de ses lignes est un
arbitrage rendu sur pièce, souvent après annulation d'une version précédente.
Il prime sur ce README.

## Lancer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Où vit quoi

| Chemin | Contenu |
| --- | --- |
| `src/config/brand.ts` | marque, entité, contact, prix. **Tout chiffre affiché part d'ici.** |
| `src/config/copy.ts` | les textes de la page |
| `src/config/analyses.ts` | les articles ; en ajouter un suffit à créer sa page, son entrée d'index et son sitemap |
| `src/config/schema.ts` | les graphes structurés, dérivés des précédents |
| `src/config/site.ts` | le domaine de production |
| `src/components/` | un fichier par section |
| `src/app/globals.css` | toute la mise en forme, pilotée par tokens |

Règle de fond : **rien codé en dur dans le JSX**, ni texte ni valeur.

## Deux conventions de style à connaître

- `.papier` retourne une section entière sur le fond clair en redéfinissant les
  tokens de couleur. Ne jamais écrire d'exception de couleur enfant par enfant.
- `.sect` place le libellé de section dans la marge gauche et le contenu à
  droite. Les sections qui ont déjà une colonne de gauche ne la portent pas.

## Stack

Next 14 App Router, TypeScript strict, Tailwind, next/font. Zéro dépendance UI
externe : les apparitions passent par IntersectionObserver et des classes CSS.
Polices : Familjen Grotesk et Source Serif 4 via `next/font/google`, Geist Mono
en local. Geist, Instrument Serif et Literata ont été retirées du site à la
suite d'arbitrages documentés dans `CLAUDE.md` : ne pas les réintroduire.
