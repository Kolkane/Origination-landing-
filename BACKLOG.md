# Backlog

Ce qui est en attente d'une décision extérieure, ou d'une vérification que
le dépôt ne peut pas faire seul. Ce n'est pas une liste de tâches : c'est la
liste de ce qui est **provisoire et le sait**.

`CLAUDE.md` reste la charte et prime sur ce fichier.

---

## RGPD — qualification des coordonnées FullEnrich

**En attente d'un avis juridique. Ne rien affirmer de définitif avant.**

Base légale et qualification des coordonnées obtenues via FullEnrich
(professionnelles ou personnelles) à faire valider par un avocat avant toute
affirmation définitive dans la notice d'information de l'article 14.

Formulation provisoire posée le 29/08/2026 : elle **décrit la pratique** et
ne **qualifie pas la donnée**. Elle vit à trois endroits, tous dans
`src/config/copy.ts` :

| Endroit | Ce qui est écrit maintenant |
| --- | --- |
| FAQ, question RGPD | « le dirigeant est contacté en sa qualité de dirigeant, jamais à titre privé ; l'opt-out est définitif et honoré » |
| Confidentialité, *Finalité et base légale* | la portée est dite sur la **finalité** du traitement, plus sur la nature des coordonnées |
| Confidentialité, *Données traitées* et *Origine des données* | « une coordonnée de contact, qui peut être une ligne directe du dirigeant » |

Ce qui a été **retiré** et ne doit pas revenir tant que l'avis n'est pas
rendu : « premier contact toujours adressé à l'entreprise », « coordonnées
professionnelles », et « ne porte que sur des personnes dans l'exercice de
leurs fonctions professionnelles » lorsqu'elle qualifiait la donnée.

Contexte factuel à donner à l'avocat : le cabinet client contacte le
dirigeant directement, sur une coordonnée fournie par FullEnrich, sans
passer par le standard. Un appel au standard sur un sujet de cession fait
fuiter l'information à l'intérieur de l'entreprise du dirigeant avant qu'il
ait décidé quoi que ce soit : ne pas y passer protège le dirigeant.

**Le CANAL du premier contact n'est plus une question ouverte** : il est
tranché depuis le 06/09 et vit comme invariant dans la section
positionnement de `CLAUDE.md`. Ce qui reste à l'avocat est la seule
QUALIFICATION des coordonnées, professionnelles ou personnelles.

---

## La fiche de devis ne produit aucun prix — question ouverte

**Concerne l'AUTRE dépôt : `validation/devis.py` dans `Veillor.com`.**

Demandé le 06/09 : que la fiche de devis « cesse de calculer un plancher :
elle annonce un nombre de situations et un prix, rien d'autre ». Vérifié
dans le script : il n'y a **rien à retirer et rien à annoncer**.

`devis.py` est un rapport de mesure de périmètre, pas un devis commercial.
Il produit la population SIRENE et sa ventilation, la cascade vers
l'inventaire vendable lue depuis `passe_cellule`, la densité d'actes lue
depuis un magasin `rne_balayage`, puis une section empreintes et limites.
Il ne calcule **aucun montant** : pas une occurrence de prix, tarif,
montant ou euro dans tout le fichier.

Son unique « plancher » est une **borne basse de données** — « métadonnée
RNE 2024-2025 = plancher (typeRdd effondré) » — c'est-à-dire un aveu
d'incertitude sur la mesure. Le retirer abîmerait l'honnêteté du rapport,
il n'a rien à voir avec le plancher tarifaire mort en v65.

**La question qui reste** : faut-il que `devis.py` produise aussi un prix,
et devienne un vrai devis ? C'est un changement de nature du script, pas
une correction. À trancher.

---

## Autres points ouverts

- **Entité juridique.** Les mentions légales affichent encore
  `Jungle.Block Solutions`, avec un commentaire de `brand.ts` annonçant
  qu'une nouvelle entité la remplacera.
- **Poids de la vidéo du hero.** `public/imbrin.mp4` pèse 1,68 Mo et reste
  servie sur ordinateur. Depuis le lot 4 bis de la V80, les écrans de moins
  de 761 px reçoivent `public/imbrin-mobile.mp4` (403 Ko, recadrage
  portrait, `npm run video-mobile`). Un réencodage du clip d'ordinateur
  reste possible, il n'a pas été demandé.
- **Largeurs de titre en `ch`.** Quatorze `max-width` de titres restent
  exprimées en `ch` et ont bougé à la bascule typographique de la v55. À
  réancrer en rem une fois les polices jugées sur pièce (alerte v55).
- **Image OpenGraph.** Retirer le runtime edge la ferait prégénérer au
  build, mais le prérendu casse dans `@vercel/og` sur poste Windows. À
  reprendre sur une branche, où une préview Vercel tranchera (v56).
- **Conditions : le site porte l'offre publiée le 17/09/2026** (premier
  mois conditionné à la mesure du périmètre, périodes de trois mois,
  exclusivité, renvoi au devis), amendement « Offre publiée » de
  `CLAUDE.md`. Le site ne décrit plus la structure de la rémunération. Ce
  qui reste à trancher ne concerne plus que le CONTRAT : la fin du fee sur
  les mandats et de la protection de vingt-quatre mois, dont la page
  « Comment je travaille » remise à un cabinet le 2026-09-18 tient déjà
  compte. La carte « Facturation » et « un mois sans dossier livré n'est
  pas facturé » sont partis au lot 4 bis : le plancher mensuel ne survit
  nulle part sur le site.
