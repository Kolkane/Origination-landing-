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

## Cinq conventions à connaître (V80)

- Les planches `MAQUETTE-V80-ACCUEIL.html` et `MAQUETTE-V80-ACCUEIL-MOBILE.html`
  font foi sur l'accueil : mêmes valeurs, même copy, même ordre. Ce qui n'y
  est pas n'existe pas, et ce qui s'en écarte est consigné dans `CLAUDE.md`.
- `.cadre` est le conteneur des sections : 1200 px de contenu, en content-box
  comme la planche. **Le hero, lui, est excentré** : c'est une plaque pleine
  page, son texte tient les bords de l'écran.
- Le vin (`--vin`) n'a que quatre emplois : les soulignés de liens sur blanc,
  les numéros de la méthode, la mention « Confidentiel », les rubriques du
  spécimen. Ni bouton, ni aplat, ni filet.
- `--f-display`, `--f-corps`, `--f-label` sont les trois **rôles**
  typographiques ; ils pointent tous sur Hanken Grotesk. `globals.css` ne
  nomme aucune police : changer de fonte ne touche que `layout.tsx`.
- Les pages intérieures n'ont pas de planche : elles reprennent l'échelle de
  l'accueil dans une colonne de lecture de 580 px, mesurée à 70 caractères
  par ligne. `/dirigeants` garde ses règles absolues : aucun lien vers l'offre,
  donc un en-tête sans navigation et un pied sans la colonne « Le site ».

## Stack

Next 14 App Router, TypeScript strict, Tailwind (son seul socle, aucune classe
utilitaire), next/font. Zéro dépendance UI externe : l'en-tête bascule par
IntersectionObserver, le dossier s'ouvre dans un `<dialog>` natif, rien
n'apparaît au défilement. `sharp` en dépendance de développement sert
`npm run emblemes`, qui tire les variantes de l'emblème des fichiers déposés.

Police, via `next/font/google` : **Hanken Grotesk** seule, en 400, 500 et 600
(V80, 17/09/2026). Instrument Serif, Geist, Literata, Familjen Grotesk, Source
Serif 4, Fraunces, Spectral et Cutive Mono ont toutes été retirées du site à la
suite d'arbitrages documentés dans `CLAUDE.md` : ne pas les réintroduire.
