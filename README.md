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

## Quatre conventions de style à connaître

- `.papier` retourne une section entière sur le fond clair en redéfinissant les
  tokens de couleur. Ne jamais écrire d'exception de couleur enfant par enfant.
- **Un seul bord gauche pour les sections** : le premier élément de chaque
  section part du bord du `.wrap`. Deux exceptions, voulues : le fondateur et
  l'appel final, centrés. Ne pas introduire de retrait de section.
- **Le hero, lui, est excentré** et le reste : ce n'est pas une section, c'est
  une plaque pleine page. Son texte tient les bords de l'écran quelle que
  soit sa taille, comme la couverture d'un imprimé. Le décrochage avec les
  sections est délibéré, ne pas le « corriger ».
- `--f-display`, `--f-corps`, `--f-label` sont les trois **rôles**
  typographiques. `globals.css` ne nomme aucune police : changer de fonte ne
  touche que `layout.tsx`.
- Les **documents** (`.doc`, le spécimen du dossier, et `.fiche-o`, la fiche du
  devis) ont leur propre typographie : ils redéfinissent `--f-label` sur la
  serif du corps, donc aucun monospace à l'intérieur. C'est délibéré, c'est ce
  qui les fait lire comme des pièces posées sur la page.

## Stack

Next 14 App Router, TypeScript strict, Tailwind, next/font. Zéro dépendance UI
externe : les apparitions passent par IntersectionObserver et des classes CSS.

Polices, toutes via `next/font/google` : **Fraunces** en titres, **Spectral** en
corps, **Cutive Mono** en libellés. Instrument Serif, Geist, Literata, Familjen
Grotesk et Source Serif 4 ont toutes été retirées du site à la suite
d'arbitrages documentés dans `CLAUDE.md` : ne pas les réintroduire.
