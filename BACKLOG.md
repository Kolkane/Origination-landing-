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

---

## Le plancher mensuel survit hors de la section Offre

**Contradiction vivante sur le site. Une décision suffit à la lever.**

La v65 a retiré le plancher mensuel de la fiche du devis : il appartenait au
modèle au volume, où un mois passé sous le volume annoncé n'était pas
facturé. Un retainer mensuel contredit cette promesse.

Deux textes le portent encore, tous deux **hors** de la section Offre, donc
laissés intacts faute de mandat pour y toucher :

| Où | Ce qui est écrit |
| --- | --- |
| Chute du filtre (`copy.ts`, `entonnoir.chute2`) | « Ce qu'il contient est compté au devis, avec un plancher chiffré : un mois qui passe dessous n'est pas facturé. » |
| Chapô de l'appel final (`copy.ts`, `final.lead`) | « …annoncé au devis, plancher mensuel chiffré. Un mois qui passe sous ce nombre n'est pas facturé. » |

Si le plancher n'existe plus dans le contrat, ces deux phrases sont fausses
et doivent tomber. S'il survit **à côté** du retainer, alors c'est la fiche
du devis qu'il faut corriger, pas elles. Question à trancher, puis un commit
d'une ligne dans chaque cas.

---

## Autres points ouverts

- **Entité juridique.** Les mentions légales affichent encore
  `Jungle.Block Solutions`, avec un commentaire de `brand.ts` annonçant
  qu'une nouvelle entité la remplacera.
- **Poids de la vidéo du hero.** `public/imbrin.mp4` pèse 1,68 Mo, quatre
  fois tout le reste réuni, et se charge au premier écran. Un réencodage
  la ramènerait entre 300 et 500 Ko. Demande un encodeur (ffmpeg).
- **Largeurs de titre en `ch`.** Quatorze `max-width` de titres restent
  exprimées en `ch` et ont bougé à la bascule typographique de la v55. À
  réancrer en rem une fois les polices jugées sur pièce (alerte v55).
- **Image OpenGraph.** Retirer le runtime edge la ferait prégénérer au
  build, mais le prérendu casse dans `@vercel/og` sur poste Windows. À
  reprendre sur une branche, où une préview Vercel tranchera (v56).
