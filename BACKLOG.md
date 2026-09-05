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

## Notice art. 14 — le canal du premier contact reste à confirmer

**Le fond est corrigé, une clause reste ouverte.**

Corrigé le 06/09 (v69) : la rubrique *Finalité* décrivait le CABINET comme
celui qui prend contact. Elle décrit désormais le traitement réel, Imbrin
écrit la première, un cabinet n'approche qu'après acceptation.

**Ce qui reste ouvert.** Le brief demandait d'écrire « Imbrin Research vous
écrit d'abord, **à votre entreprise** ». Cette clause n'a pas été reprise,
et c'est délibéré : le même brief annonce **quatre canaux** de contact
choisis selon l'âge du dirigeant, lettre, mail, LinkedIn et téléphone. Ni
un profil LinkedIn ni un mobile direct ne sont « votre entreprise ». La
notice dit donc « dans votre fonction de dirigeant », qui est vrai des
quatre canaux.

C'est la troisième fois que la formulation « par l'entreprise » est
proposée et écartée : v63 sur le site, v68 sur `/dirigeants`, v69 ici.

**Si le premier contact d'Imbrin passe TOUJOURS par l'entreprise**, la
clause peut revenir, et il suffit d'une ligne. **Sinon elle doit rester
dehors** : une notice d'information ne peut pas annoncer un canal que la
pratique dément. À trancher avec le point de qualification des données
ci-dessous, dans le même avis juridique.

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
