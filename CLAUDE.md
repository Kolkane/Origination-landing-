# CLAUDE.md — Règles du projet (ne jamais dévier)

## Préséance (arbitrage Vincent, 17/09/2026)
La direction artistique V80, « blanc, encre, une seule grotesque » (section
plus bas, avec ses lots), PRIME sur toutes les règles de direction artistique
antérieures de ce fichier : la DA v7 et ses amendements v7 à v78 sont des
procès-verbaux, ils disent ce qui a été essayé et pourquoi, ils ne décrivent
plus le code. RESTENT EN VIGUEUR, et priment sur la V80 quand elle les
contredit : la charte d'honnêteté et la liste blanche des chiffres, le
vocabulaire de l'offre (section « L'offre v15 »), l'invariant du premier
contact et les règles absolues de la page /dirigeants (v68). Rien d'autre
n'est effacé.

## Ce qu'est ce site
Landing one-page d'un service d'origination externe pour boutiques M&A sell-side : un analyste,
sur pièces, repère au registre (sources publiques) les PME françaises dont la situation réunit
les conditions d'une transmission (âge du dirigeant, absence de relais, structure de détention).
Amendement (refonte 2026-08, arbitrage Vincent) : ne JAMAIS prêter une intention au dirigeant
(« préparent leur sortie » est mort), ne JAMAIS affirmer un horizon (« 12-18 mois avant le
marché » est mort), ne JAMAIS promettre un flux mensuel ni un délai générique de livraison.
Quand un acte de préparation existe, il est daté ; on n'affirme rien de plus.
Amendement (backtest national, arbitrage Vincent, 14/09/2026) : le DÉCLENCHEUR
d'un dossier est un acte déposé et daté ; l'âge du dirigeant, la détention et
le relais sont des LECTURES qui pèsent, jamais des portes. La parenthèse
« âge du dirigeant, absence de relais, structure de détention » ci-dessus est
l'ancienne définition, gardée comme procès-verbal. Voir l'amendement v72.
LISTE BLANCHE DES CHIFFRES : aucun nombre sur le site sauf (1) chiffre mesuré, cité avec sa
nature exacte, (2) source externe nommée (l'étude Bpifrance/CCI de l'entonnoir), (3) exemple
explicitement fictif marqué comme tel. Le périmètre du client est mesuré au devis : c'est la
promesse centrale, le site n'affiche pas de moyennes.
Clients cibles : boutiques M&A small-cap et family offices ; l'associé est à Paris, le
sourcing est régional. Un seul cabinet par périmètre.
La marque : Imbrin Research — toujours via les variables MARQUE/SUFFIXE de src/config/brand.ts,
jamais en dur. Baseline fixe : "Origination sell-side".

INVARIANT DU PREMIER CONTACT (arbitrage Vincent, 06/09/2026). Imbrin contacte le
dirigeant SEUL, dans sa fonction, par un canal personnel et confidentiel : courrier
sous pli « Personnel et confidentiel » à son nom au siège, mail à son adresse
nominative, ligne directe, ou LinkedIn. JAMAIS par le standard, jamais par un
collaborateur, jamais par une adresse générique de l'entreprise. Le contenu du
premier contact ne révèle jamais son sujet à un tiers. La base légale est sa
fonction de dirigeant, jamais sa personne privée.
La formulation « premier contact par l'entreprise » est ABANDONNÉE : elle désignait
un canal (le standard) qui est précisément celui qui fait fuiter l'information dans
l'entreprise du dirigeant.
Cette règle a sauté trois fois sous une formulation fausse ; ne pas la reformuler.
Elle gouverne la notice d'information de l'article 14, la page /dirigeants et toute
copie future. Les amendements v59, v63, v68 et v69 en gardent l'historique : ils ne
sont pas réécrits, ce sont les procès-verbaux des trois rechutes.
AMENDEMENT v81 (arbitrage Vincent, 17/09/2026) : LE SITE NE PORTE PLUS CETTE RÈGLE.
Aucune mention juridique du premier contact ne s'écrit sur le site : ni le canal, ni
le pli, ni qui écrit le premier, ni ce qu'un cabinet fait ensuite. Le site dit une
seule chose, en section Conditions : qui contacte les dirigeants, et selon quelles
modalités, se décide ensemble à la signature du devis ; les conditions viendront de la
note de l'avocat. L'invariant ci-dessus reste la PRATIQUE d'Imbrin quand c'est Imbrin
qui contacte ; il n'est plus une promesse publiée. Voir l'amendement v81.

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
- MESURE DE SECTION (arbitrage Vincent, v33) : --mesure vaut 48rem, 768px. C'est la
  plus large colonne de lecture de la page, .p-corps à 48,0625rem, arrondie au rem :
  une valeur GÉNÉRALISÉE, pas inventée, donc rien n'a jamais à s'élargir pour y entrer.
  Elle borne un bord droit partagé par une prose et par ce qui l'encadre.
  Cet amendement DÉROGE explicitement au principe v10, « l'espace horizontal travaille
  au lieu de se vider ». Borner un encadré à 768px dans un conteneur de 1313px laisse
  545px de marge droite, et c'est assumé : un filet qui court sous du vide est pire
  qu'une marge droite. On déplace le vide, on ne le supprime pas, et c'est délibéré.
  Ne pas « corriger » ce vide en réélargissant les blocs bornés.
  PÉRIMÈTRE, mesuré au navigateur et volontairement étroit. Reçoivent la mesure :
  .ancrage de l'entonnoir (son filet courait 265px au-delà de sa plus longue ligne).
  Ne la reçoivent PAS, et il ne faut pas la leur appliquer : la FAQ et les lignes
  d'Analyses, dont le bord droit est ANCRÉ, par le « + » de la question et par le lien
  de la ligne d'article — leur filet ne court pas sous du vide, vide mesuré à 0px ;
  l'en-tête et la grille 2×2 des engagements, qui n'ont que 91 et 95px de jeu ; les
  paliers de l'entonnoir, dont la décroissance est la rhétorique de la section et
  demande toute la largeur ; tous les titres, dont la mesure étroite est un choix.
  Règle de méthode qui a produit ce périmètre : comparer une prose à la boîte de son
  PARENT donne des faux positifs en grille et en flex. Ce qui compte est ce qui ANCRE
  le bord droit de la structure. Mesurer cela avant de conclure à un défaut.
- OFFRE EN DEUX COLONNES (arbitrage Vincent, v33) : .primaire passe en grille
  48rem + 1fr au-dessus de 1390px, le corps à sa mesure et le bloc tarif, qui existait
  déjà sous lui, monté dans le vide. 568px de filet sous rien, le plus gros écart de
  la page, ramenés à 63px. Le corps ne bouge pas d'un pixel : c'est la condition.
  Le seuil de 1390px est MESURÉ, pas choisi : la colonne de droite vaut le conteneur
  moins 768px et 72px de gouttière, et « 2 000 € HT » lié fait 410,2px à 92px. Il
  manque 4,4px à 1366px et 72px à 1280px, et en dessous la colonne de gauche passerait
  sous 768px, donc le corps se recomposerait. Les écrans 1366 gardent une colonne.
  Ne pas descendre ce seuil sans remesurer la chaîne du prix.
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
- Typo : Familjen Grotesk (display, poids 400, italique autorisée) · Source Serif 4
  (corps, 400 et 500, romain) · Geist Mono (labels uppercase, tracking large).
  Familjen et Source Serif 4 via next/font/google, Geist Mono en local. Rien d'autre.
  Amendement (arbitrage Vincent, v18) : le DISPLAY passe du serif à la grotesque.
  Instrument Serif est RETIRÉE du site, y compris de l'image OpenGraph. Motif :
  Instrument Serif et Geist sont devenues les polices par défaut des sites
  générés, elles ne distinguent plus, c'est le reproche « trop IA ».
  Familjen Grotesk (Familjen STHLM, OFL, Google Fonts) est retenue pour ses
  AMORCES D'ENCRE, ces entailles dans les angles rentrants : un dispositif
  d'imprimerie, cohérent avec le registre « document financier imprimé ».
  Son italique est une vraie italique dessinée (« a » à un seul étage), pas une
  oblique : l'accent italique du hero et de l'entonnoir survit à la bascule.
  Amendement (arbitrage Vincent, v28) : le CORPS passe de Geist à LITERATA.
  Geist est la police maison de Vercel, devenue le signe des sites générés :
  c'était le dernier de ces signes sur la page. Une autre grotesque aurait
  ramené le problème par une autre porte, d'où une serif de labeur, qui donne
  le registre éditorial revendiqué et qui est l'inverse du tell, les pages
  générées mettant du serif en titre et jamais en corps. Literata plutôt
  qu'une autre : hauteur d'x à 51 % du corps contre 54 % pour Geist et masse
  d'encre quasi identique, donc ni la taille apparente ni la tenue du texte
  clair sur fond sombre ne changent ; c'est aussi la plus légère des variables
  évaluées. 400 et 500, romain, latin : aucun italique, les trois du site sont
  tous portés par Familjen. Geist est retiré du dépôt, fichier compris.
  GEIST MONO RESTE, inchangé.
  Amendement (arbitrage Vincent, v30) : le CORPS passe de Literata à
  SOURCE SERIF 4, 400 et 500, romain, latin, via next/font/google. Le motif de
  la v28 tient toujours, une serif de labeur plutôt qu'une grotesque, mais
  Literata a été dessinée pour la lecture longue sur liseuse : elle est trop
  littéraire pour un document financier. Source Serif est une serif de travail,
  du même registre que les caractères des documents imprimés que la page
  revendique. Literata est retirée du dépôt, layout.tsx et tailwind.config.ts
  compris. GEIST MONO ET FAMILJEN RESTENT, inchangés.
  Observation consignée, PAS un arbitrage : la hauteur d'x tombe à 47,5 % du
  corps contre 50,7 % pour Literata et 53,0 % pour Geist, donc à font-size
  égale le texte paraît plus petit. Aucune font-size n'a été touchée dans le
  commit de bascule, la taille apparente se juge sur pièce en prod et se
  traite à part. Deux changements simultanés se masquent l'un l'autre.
  Amendement (arbitrage Vincent, v30) : LES LARGEURS DE COLONNE DU CORPS NE
  SONT PLUS EN CH ET NE DOIVENT PLUS Y REVENIR. Le ch vaut l'avance du « 0 »,
  donc une largeur exprimée ainsi dépend de la police de corps et se déplace
  à chaque bascule, en silence, sans qu'aucune déclaration ne bouge : Geist
  0,663 em, Literata 0,579 em, Source Serif 4 0,529 em, soit −20 % de Geist à
  Source Serif 4. Le corollaire v28 ci-dessus, « ne pas ajouter de max-width
  en ch sans mesurer », est REMPLACÉ : mesurer ne suffisait pas, la mesure
  était juste et le couplage est resté. Les 37 déclarations du corps sont
  figées en rem, aux largeurs rendues sous Geist avant la v28 ; les deux
  font-size en clamp sont reproduites borne par borne. Les 22 déclarations en
  ch qui restent dans globals.css sont portées par Familjen ou par le mono et
  peuvent rester : elles ne dépendent pas de la police du corps. Toute
  nouvelle largeur de texte de corps se déclare en rem, y compris dans un
  composant non monté.
  Planche de comparaison : MAQUETTE-TYPO-GROTESQUE.html à la racine.
  Nommage : la classe utilitaire .serif est renommée .display, et la clé
  Tailwind fontFamily.serif devient fontFamily.display. Le nom dit le RÔLE,
  pas la classification, pour ne pas mentir à la prochaine bascule.
- Accent de titre (v18) : le mot accentué d'un grand titre se met en ITALIQUE
  + vin --wine-lift #B32E46, jamais le vin plein (2,3:1 sur l'encre, échoue
  même le seuil grand texte). L'entonnoir portait déjà ce dispositif, le hero
  l'a rejoint. Il ne vaut QUE pour les grands titres sur fond sombre, et il
  reste rare : trois mots sur toute la page. Les engagements gardent leur
  ZÉRO ROUGE de la v17, ils n'ont aucun mot accentué et n'en prennent pas.
  Amendement (arbitrage Vincent, v17) : le titre des ENGAGEMENTS est ramené de
  l'échelle du hero (~76px de plafond) à ~50px, définitivement. Il gardait à lui
  seul près d'un écran de hauteur pour quatre lignes de principe. La section ne
  tient donc plus par l'échelle typographique mais par la GRILLE 2×2 et ses
  FILETS EN CROIX, avec l'explication posée directement sous son principe.
  Ne pas restaurer le 76px : ce n'est pas une régression de gabarit, c'est
  l'arbitrage. Le hero redevient le seul endroit de la page à cette échelle.
  Corollaire inchangé : ZÉRO ROUGE sur cette section, pas même un petit marqueur
  vin par engagement. Le blanc et les filets suffisent.
- Motion : UNE séquence d'apparition au chargement (fade + translateY, délais en cascade),
  fade des lignes de l'offre au scroll, lent zoom respiratoire de la vidéo (22 s), indice
  de scroll. prefers-reduced-motion : tout statique, vidéo en pause.
  Amendement (arbitrage Vincent, v20) : la liste ci-dessus se terminait par
  « C'EST TOUT » et ne décrivait plus le site. Trois mouvements s'y ajoutent,
  tous DÉCLENCHÉS PAR L'UTILISATEUR ou par l'entrée dans le champ, aucun en
  boucle : le déploiement des barres de l'entonnoir, la cascade des quatre
  engagements, et la MISE AU POINT du viseur du dossier. Cette dernière est
  la seule à utiliser filter: blur(). Elle joue au changement de zone : la
  sortante se floute et grossit en s'effaçant, l'entrante arrive floue et
  trop grande puis se pose nette. L'en-tête du dossier n'est jamais touché,
  c'est l'ancrage net qui rend l'effet crédible. Le flou est un état de
  TRANSITION, jamais un état de repos : hors animation, aucune zone ne porte
  de filtre. En prefers-reduced-motion, flou et échelle disparaissent
  entièrement et le changement de zone est instantané.
  Amendement (arbitrage Vincent, v23, carte blanche sur la section dossier) :
  la mise au point devient un BALAYAGE. Chaque ligne de la zone entrante est
  révélée de gauche à droite par un masque à frange fondue, en cascade,
  pendant que la zone entière se défloute. C'est le geste d'un tirage qui se
  développe, choisi parce qu'il appartient au registre imprimé de la marque
  et non au vocabulaire d'interface. Le masque n'existe QUE dans les
  images-clés : au repos, aucune zone ne porte masque, filtre ni transform.
  Amendement v44 (arbitrage Vincent, 27/08/2026) : LA LECTURE entre dans
  la liste. Le dossier se feuillette seul : la barre vin de l'élément
  actif avance en 4 s puis la zone suivante prend la mise au point.
  Quatre garde-fous, NON NÉGOCIABLES : un clic de l'utilisateur arrête
  la lecture définitivement ; UN SEUL TOUR puis arrêt sur la page de
  garde (jamais de boucle, ce n'est pas un carrousel) ; pause quand la
  section sort du champ ; désactivée en prefers-reduced-motion. La durée
  vit en double (DUREE_LECTURE dans Dossier.tsx, animation .recu-prog
  dans globals.css) : changer l'une sans l'autre désynchronise.
  Leçon de code apprise en la posant : Reveal pose « vis » à la main sur
  le DOM ; un className recalculé par React sur le même élément
  l'efface. Les états qui varient se portent en attribut data-, jamais
  dans le className d'un élément .rev.
  La liste reste fermée : tout nouveau mouvement demande un arbitrage.
- Section dossier, formes des zones (v23, carte blanche) : les sept zones ont
  chacune une FORME propre, c'est la règle. Elles se ressemblaient toutes et
  la loupe n'avait alors rien à révéler. Identité en cases, finances en
  chiffres plus barres, constat à l'échelle du display, parcours en frise,
  angle avec sa chute détachée, coordonnées écrites, réserve encadrée.
  Ne pas réaligner ces zones sur un gabarit commun, la variété EST la fonction.
  Amendement (arbitrage Vincent, v35) : la zone 05 n'est PLUS CAVIARDÉE, ses
  trois coordonnées sont écrites en clair. Deux motifs. La société du spécimen
  est inventée de bout en bout, il n'y avait donc rien à protéger et le
  caviardage jouait une pudeur sans objet. Et les trois barres noires avaient
  exactement la forme des barres du graphe de la zone 01 : à deux zones
  d'écart, l'oeil y lisait une donnée là où elles cachaient une absence de
  donnée. L'amendement v8.1, qui autorisait le caviardage dans le spécimen,
  n'a plus d'objet ici ; il reste valable pour les tampons de document.
  Les valeurs sont inventées mais SÛRES, et elles doivent le rester : les
  deux numéros sont pris dans les plages que l'ARCEP réserve à la fiction,
  06 39 98 XX XX et 02 61 91 XX XX, qui ne peuvent être attribuées à
  personne, et le domaine du courriel a été vérifié inexistant. Ne jamais les
  remplacer par des valeurs « plus crédibles » : elles appartiendraient à un
  vrai dirigeant, et la section Honnêteté l'interdit.
  Le graphe des exercices : série unique en encre, base à ZÉRO jamais
  tronquée, marque fine à extrémité carrée (la charte proscrit les arrondis),
  aucune légende puisqu'il n'y a qu'une série, et la valeur reste écrite à
  côté de la barre. Pas d'infobulle : c'est l'image d'un document imprimé,
  pas un tableau de bord.
- Amendement v38 (arbitrage Vincent, 26/08/2026) : L'OBJET. Après analyse de
  références réelles (planche MAQUETTE-V38-OBJET.html à la racine, qui fait
  foi), la section dossier abandonne le viseur sombre à zones (v14-v35) : le
  spécimen est un FEUILLET PAPIER (#ECE7DF), composé comme le gabarit A4
  réel — rail/corps, rubriques au vin plein (6,8:1 sur papier), chronologie
  datée, pied ancré en bas de feuille, tampon SPÉCIMEN. La profondeur est un
  second feuillet décalé : toujours ni ombre portée ni dégradé. Les
  mouvements « mise au point » et « balayage » disparaissent avec le viseur ;
  la section entre par le .rev commun. La méthode passe en lignes empilées,
  statement à l'échelle display ; la bande v15-B1 est remplacée et
  MAQUETTE-V15-B1-METHODE.html devient une ARCHIVE. Le .statement générique
  monte de 40 à 50px (le plafond est la borne v17 des engagements). Les
  systèmes « folio / tampon partout » des maquettes V36-V37 ont été REJETÉS
  (ils déguisaient la page) : le vin en aplat et le registre ne vivent QUE
  dans le spécimen. La règle qui reste : UN objet signature rendu
  matériellement, et le reste de la page se tait.
  CORRECTION LE JOUR MÊME (arbitrage Vincent, 26/08/2026 soir) : le
  feuillet STATIQUE de la V38 est annulé — figé, le spécimen « se voyait
  généré », et c'est l'INTERACTION de la loupe (v19-v23 : nav des
  éléments, mise au point, balayage) qui fait « travaillé, pas généré ».
  Le viseur interactif est RESTAURÉ tel quel : le document était déjà du
  papier, l'objet signature c'est le papier PLUS la loupe. Restent acquis
  de la V38 : la méthode en lignes empilées à l'échelle display, le
  .statement à 50px, le rejet des folios/tampons hors spécimen. Et le
  grand repère de la Mesure (« ≈ 1/3 » puis « 0 ») est MORT : un grand
  zéro se lit comme du vide, pas comme une preuve — la section reprend la
  grammaire des entrées sur filets, sans repère. Ne remettre ni le
  feuillet statique, ni un grand chiffre d'affiche dans la Mesure.
- Amendement v39 (arbitrage Vincent, 27/08/2026, poussé en prod pour
  jugement sur pièce, planche sautée sur son ordre) : LA PASSE HERO. Le
  titre devient LA voix du premier écran : 104px de plafond (interligne
  0,98, colonne à 1240px mesurée pour que « Nous lisons les actes que »
  tienne sur SA ligne, sinon « que » tombe orphelin). L'eyebrow ne
  surplombe plus le titre : le libellé vit dans la légende bas-droite,
  deux lignes (marché, puis sujet). Le souligné VIN devient l'état de
  repos de l'appel principal — seul accent rouge du premier écran ; les
  appels secondaires gardent le filet neutre. Le voile s'assombrit d'un
  cran en pied (0,8) pour la lisibilité du titre agrandi. Le plancher
  mobile reste à 40px : à 390px le titre casse naturellement en quatre
  lignes et « personne » garde la sienne, vérifié sur pièce.
  ANNULÉE LE LENDEMAIN (arbitrage Vincent, 27/08/2026) : « bien trop
  grand », et la ligne qualifiante au-dessus du titre lui manquait. Tout
  est revenu à l'état v38 (72px, colonne, eyebrow au-dessus du titre,
  voile, soulignés des CTA), NE PAS remonter l'échelle du hero.
- Amendement v40 (arbitrage Vincent, 27/08/2026) : L'ACCROCHE. « Nous
  lisons les actes que personne n'ouvre » est morte — trop méthode, pas
  assez client. L'accroche dit la répartition du travail : « Nous
  trouvons les dossiers, / vous / les traitez. », l'accent vin sur
  « vous ». La colonne du hero passe de 640 à 830px, mesurée au rendu en
  deux passes pour que la première ligne tienne entière à 72px. Le
  sous-titre est raccordé (« qui en sort » renvoyait aux actes disparus) :
  « Un analyste, sur pièces, les détecte au registre et les vérifie à la
  main. Un cabinet par périmètre. »
- Amendement v41 (arbitrage Vincent, 27/08/2026) : l'accroche tient sur
  DEUX lignes, plus trois — et le corps du h1 descend de 72 à 62px de
  plafond. À 390px le titre casse en trois lignes, vérifié sur pièce.
- Amendement v42 (arbitrage Vincent, 27/08/2026) : le « vous » en vin
  faisait bizarre — l'accent passe sur le verbe du métier :
  « Nous *détectons* les dossiers, / vous les traitez. » L'accent vit
  désormais AU MILIEU de la première ligne (clés titreAvant / 
  titreItalique / titreApres + titreLigne2 dans copy.ts).
- Amendement v43 (arbitrage Vincent, 27/08/2026) : l'en-tête du dossier
  porte le LOCKUP OFFICIEL (public/logo-dossier.png : médaillon +
  IMBRIN RESEARCH + baseline vin, encre sur transparent, rogné depuis
  « Section dossier logo et slogan.png » du Bureau) à la place du
  médaillon seul + mot-marque HTML. Corrigé le jour même : version du
  fichier avec le médaillon proportionné au slogan (900x212 après
  rognage), hauteur 72px. L'alt passe par les variables de marque.
  LogoImbrin (le composant) reste en usage au hero et au footer.
  Amendement v43d (arbitrage Vincent, 28/08/2026) : la baseline du lockup
  passe du vin au NOIR (« l'écriture en noir, c'est plus classe »). Le
  fichier fourni avait un fond blanc opaque : détouré par luminance
  (blanc -> transparent, encre conservée, possible parce que le lockup
  est désormais entièrement noir et gris), rogné, 900x180. Plus aucun
  vin dans le lockup du dossier ; le tampon Spécimen reste le seul vin
  de l'en-tête.
- Amendement v45 (arbitrage Vincent, 27/08/2026) : LE FILTRE s'aligne.
  Le titre était « empâté » (trois lignes serrées à 58px sur 16ch) : il
  passe à l'échelle des statements (50px), sur une ligne, et la mesure
  spéciale de la section (1100px) saute au profit du wrap commun. Dans
  les critères, L'ÂGE sort de la liste affichée (le dossier le porte
  déjà, doublon) et LA DÉTENTION entre à sa place — elle est dans la
  thèse et manquait. Le vocabulaire « rattrapage » / « veille » est
  remplacé par LIVRAISONS (première livraison, puis les livraisons
  suivent les faits), section et FAQ Q3 accordées. « La veille du
  périmètre » reste dans le corps de l'offre, où elle nomme le service.
- Amendement v46 (arbitrage Vincent, 27/08/2026) : LA TRAVERSÉE. La
  liste de critères sur filets disait une énumération ; le filtre est un
  PASSAGE. La trajectoire d'UNE société du registre descend à travers
  les quatre critères posés en PORTES (segments pleins qui barrent la
  ligne), avec une SORTIE LATÉRALE entre les portes 02 et 03 (« arrêtée
  ici : la raison de ne pas appeler, livrée aussi ») et une POINTE qui
  aboutit sur la première livraison, devenue la chute du dispositif.
  Aucune quantité dessinée : trajectoire qualitative, le décompte reste
  au devis. MOUVEMENT ajouté à la liste fermée : le tracé de la
  trajectoire (stroke-dashoffset, 1,2 s, une fois, déclenché par la
  classe .in que Reveal pose sur .trav ; état final immédiat en
  prefers-reduced-motion).
  Amendement v46b (texte de Vincent, 27/08/2026) : CINQ marches, plus
  quatre — LE DIRIGEANT entre en 02 (« qui dirige, depuis quand, dans
  quelle configuration »). L'entrée gagne son AMORCE (« Chaque société
  de votre périmètre descend ces marches. Peu arrivent en bas. »). La
  note de sortie se RATTACHE à la marche détention (03) : même filet,
  léger retrait, en corps et non en capitales (« C'est ici que sortent
  les filiales et les contrôles déjà basculés... »). Le second
  paragraphe du pied dit désormais que les dossiers sortent au fur et à
  mesure que la lecture les trouve. Les tirets cadratins du brief ont
  été transposés en deux-points, règle de charte.
  Le DIPTYQUE du filtre (v48, traversée en panneau gauche + compteurs
  Bpifrance à droite) a été essayé et ANNULÉ le jour même (arbitrage
  Vincent : « au final c'est nul ») : ne pas y revenir. La traversée
  vit PLEINE LARGEUR.
  Amendement v49 (arbitrage Vincent, 27/08/2026) : LA SÉQUENCE. La mise
  en valeur du filtre est le JEU du dispositif, pas son cadre : la
  trajectoire se trace en 2,6 s linéaire et chaque étage s'allume à son
  passage (entrée, amorce, cinq portes, note de sortie, pointe, chute),
  délais échelonnés approchant la position des étages — la ligne mène,
  la synchronisation exacte n'est pas requise. Une fois, à l'entrée
  dans le champ, état final immédiat en prefers-reduced-motion, et le
  noscript du layout révèle tous les étages ET trace la ligne (les
  étages cachés hors .in ne doivent jamais dépendre de JavaScript pour
  se lire).
- Amendement v50 (arbitrage Vincent, 27/08/2026, carte blanche « plus
  concis, plus sobre, plus différenciant ») : LA TOISE. La traversée
  verticale (v46-v49) est remplacée par une RÈGLE GRADUÉE horizontale :
  cinq crans, cinq labels mono, UN SEUL texte de critère visible à la
  fois (les cinq empilés dans la même cellule de grille, zéro décalage
  de mise en page). C'est l'instrument de celui qui compte : la
  métaphore exacte du métier. La section perd la moitié de sa hauteur :
  l'intro absorbe la raison de ne pas appeler, la chute tient en une
  phrase (le plancher et le fil des livraisons vivent dans l'offre et
  la FAQ, plus de redite). MOUVEMENTS (remplacent ceux de la
  traversée dans la liste fermée) : le trait se trace (1,1 s), les
  crans se posent en cascade, puis LA LECTURE avance le cran actif
  toutes les 3,2 s (DUREE_CRAN dans Entonnoir.tsx) — mêmes garde-fous
  que la lecture du dossier : survol ou clic éteint définitivement, un
  seul passage puis retour au cran 01, pause hors champ, rien en
  reduced-motion. Sans JavaScript, le noscript pose tout : crans,
  trait, et les cinq textes reprennent le flux. Sur téléphone, la
  règle ne garde que les numéros, le label redescend dans le texte.
  Amendement v50b (arbitrage Vincent, 27/08/2026, « optimise-la ») : LA
  MESURE. Le trait se remplit de VIN PLEIN (vin des filets, conforme
  charte) jusqu'au cran actif pendant la lecture ; les crans passés
  gardent leur label éclairci (mémoire du passage) ; et la règle a une
  DESTINATION : un sixième temps sous la pointe, « Première livraison »
  (finLbl). Quand la lecture franchit le cran 05, le remplissage court
  jusqu'à la flèche qui passe au vin, le label terminal s'allume, et la
  mesure RESTE aboutie (état fin acquis, même si la main reprend les
  crans). Sur téléphone la destination disparaît, la pointe vin porte
  seule l'aboutissement. L'état fin vit en attribut data-fin : la leçon
  v44 (className recalculé efface le .in de Reveal) a mordu une
  deuxième fois avant d'être appliquée.
  Amendement v50c (arbitrage Vincent, 27/08/2026) : sous 720px LA FRISE
  PASSE EN VERTICAL — la règle descend le bord gauche, les crans
  s'empilent avec leurs labels (la verticale leur rend la place), les
  graduations deviennent horizontales, la mesure vin descend en hauteur
  (l'avancée vit dans la variable --toise-avancee, largeur en
  horizontal, hauteur en vertical), la pointe regarde vers le bas et la
  destination « Première livraison » reprend sa place au pied de la
  règle.
  Amendement v50d (texte de Vincent, 27/08/2026) : le terminus devient
  LE DOSSIER — une société qui passe les cinq critères devient un
  dossier, l'unité du produit, pas une fournée. Le texte sous la frise
  est remplacé intégralement : les dossiers sortent UN PAR UN au fil
  d'une LECTURE CONTINUE (pas de fournée de départ puis un régime de
  croisière), et le périmètre est compté au devis avec le plancher.
  « Première livraison » et « rattrapage » sont morts dans cette
  section. La chute « Combien dans votre région ? » et la note du taux
  d'écart sont inchangées.
- Amendement v51 (arbitrage Vincent, 27/08/2026) : LA DÉNUMÉROTATION DU
  CHROME. Deux familles de chiffres sur la page : les chiffres de
  CONTENU (prix, ancrage sourcé, spécimen fictif marqué) qui restent,
  et les chiffres de CHROME (les index de liste 01-05 de la toise,
  01-03 de la méthode) qui SAUTENT — quinze numéros qui ne portaient
  aucune information et saturaient la page. Une règle graduée n'a pas
  besoin de nombres imprimés, ses graduations font le travail ; trois
  entrées titrées n'ont pas besoin d'être comptées. Les index 00-06 du
  dossier RESTENT : ils sont fonctionnels (la lecture avance dessus).
  Et la réponse aux « icônes » envisagées : NON, deux fois tuées par la
  charte à raison — remplacer du bruit numérique par du bruit
  symbolique ne désature rien. Aucun chiffre de chrome, aucune icône :
  des titres, des filets, des graduations.
- Amendement v52 (arbitrage Vincent, 27/08/2026) : LA ROTATION DES
  COULEURS ET LA MORT DES ENGAGEMENTS. Le filtre prend la couleur de
  la méthode (bg-2, l'encre éclaircie) ; la méthode prend la couleur
  des engagements (papier #ECE7DF, encre) et devient LA bande claire
  pleine largeur du site ; la section « Nos engagements » est
  SUPPRIMÉE (composant, copy, CSS). Ses quatre principes vivent
  ailleurs et continuent d'y vivre : scores prédictifs dans la méthode
  02, premier contact et données grises dans la FAQ RGPD, opt-out dans
  le pied de l'offre, chiffres invérifiables dans la mesure — ne pas
  les laisser mourir avec la section. Les arbitrages v15-B2 et v17
  (grille 2×2, plafond 50px du statement des engagements) n'ont plus
  d'objet ; le plafond de 50px reste la borne des statements du site.
  MAQUETTE-V15-B2-ENGAGEMENTS.html reste une archive.
- Amendement v53 (arbitrage Vincent, 27/08/2026) : LA MESURE MEURT, LA
  FAQ PASSE EN DEUX COLONNES. La section « Ce que nous mesurons sur
  nous-mêmes » est supprimée : deux de ses trois énoncés étaient des
  redites (zéro chiffre générique : FAQ ; taux d'écart par lot : note
  du filtre), et le troisième — LE SUIVI DES COHORTES (dossiers suivis
  jusqu'à l'issue, résultats échecs compris, publication à dix-huit
  mois) — est RELOGÉ en FAQ (« Que devient un dossier après la
  livraison ? ») : c'est désormais le SEUL endroit du site qui porte
  cet engagement, ne pas le perdre. La FAQ passe en deux colonnes
  (référence externe adaptée : filets, pas de boîtes arrondies) :
  en-tête, note (« Une question absente ? Elle se pose au premier
  échange, avec le fondateur. ») et appel à gauche, l'accordéon à
  droite, mécanique inchangée. Le balisage FAQPage suit tout seul, il
  est généré depuis copy.faq.items.
- Amendement v47 (arbitrage Vincent, 27/08/2026) : L'OFFRE EN DIPTYQUE.
  Inspirée d'une référence externe fournie par Vincent (gabarit d'étude
  de cas), adaptée à la charte : ni pictogrammes, ni statistiques, ni
  témoignage. À gauche LA FICHE du devis sur papier (clauses tabulées
  sur filets d'encre, labels au vin plein 6,8:1 : périmètre,
  exclusivité, engagement, plancher, veille, livrable en pied). À
  droite LE PANNEAU sombre : le prix, l'arithmétique, et le grand
  énoncé « Pas de commission sur la transaction, jamais. » à l'échelle
  display, contrepartie honnête de la citation client de la référence.
  Le corps en paragraphe de la v15-B5 est ABSORBÉ par la fiche (mêmes
  faits, tabulés) ; l'engagement quitte la méta du prix, la fiche le
  porte avec le préavis. Le gabarit v15-B5/v33 est remplacé :
  MAQUETTE-V15-B5-OFFRE.html et les planches C1-C4 sont des ARCHIVES,
  l'arbitrage v33 (seuil 1390px, colonne du prix) n'a plus d'objet.
- Amendement v54 (arbitrage Vincent, 28-29/08/2026, CARTE BLANCHE :
  « rendre le site vraiment au top »). Motif donné : « encore un peu trop
  sobre, pas assez démarqué, ça fait beaucoup site généré par l'IA ».
  DIAGNOSTIC, à garder parce qu'il explique tout ce qui suit : cette charte
  est une liste d'INTERDITS, et elle a parfaitement fonctionné, plus un
  seul tell de 2023 sur la page. Mais soustraire ne distingue pas. Ce qui
  restait après soustraction, fond encre + type clair + filets à 12 % +
  labels mono en capitales + un accent rouge, est devenu le préréglage des
  générateurs de 2026. Les tells de la génération précédente avaient été
  tués et la page était arrivée sur le défaut de la suivante. Le problème
  n'était plus typographique, il était STRUCTUREL. Six passes, toutes des
  refontes de gabarits existants (régime 2), aucune section nouvelle.
  1. LE MOUVEMENT. 46 poses de .rev, soit fade + translateY(16px) sur à
     peu près tout ce qui existait. C'est aujourd'hui le mouvement le plus
     reconnaissable d'une page générée, et il noyait les trois mouvements
     sur mesure qui, eux, ne ressemblent à rien d'autre. 42 retirés. Il
     ne reste .rev QUE sur .toise, dont le .in pilote le tracé, la cascade
     des crans et le remplissage de la mesure. Les .mask des grands titres
     restent, le dévoilement par clip-path est un dispositif. NE PAS
     remettre de .rev sur du corps de texte, une liste ou un libellé :
     une page où rien n'apparaît au scroll est plus singulière, en 2026,
     qu'une page où tout apparaît.
  2. LES SURFACES. Le papier n'était pas un fond, c'était une liste
     d'exceptions : .method redéclarait cinq de ses enfants un par un pour
     leur rendre l'encre, et tout ce qu'on y aurait ajouté ensuite serait
     revenu en clair sur clair. La classe .papier REDÉFINIT LES TOKENS
     (--txt, --txt-2, --txt-3, --line, --line-soft, --line-tete,
     --wine-lift) : les 87 var(--txt*) et les 46 var(--line*) du fichier
     la suivent d'eux-mêmes. La correspondance reproduit exactement les
     cinq exceptions de la v52, aucune valeur n'a été inventée. Retourner
     une section, c'est désormais poser une classe. NE PLUS jamais écrire
     d'exception de couleur enfant par enfant.
  3. LE RYTHME DES FONDS. Le point « Rythme v9 » ci-dessus prescrivait une
     alternance de bandes sombres et claires sur trois sections ; la v52 en
     a rotationné une et les v52/v53 ont tué les deux autres avec les
     engagements et la mesure. Personne n'a rétabli le rythme : il restait
     UNE bande claire, et CINQ sections sombres d'affilée dont l'écart de
     fond (0A contre 0E) vaut 4 valeurs sur 255, donc invisible. La moitié
     basse du site était un seul bloc noir. Le FONDATEUR et la FAQ passent
     sur papier. Séquence désormais : hero E, dossier E, filtre E,
     méthode P, offre E, fondateur P, analyses E, faq P, appel E. La
     moitié basse alterne strictement.
     Le DOSSIER et l'OFFRE restent sur l'encre, et ce n'est pas un oubli :
     tous deux posent un feuillet de papier (le spécimen, la fiche du
     devis) qui doit se DÉTACHER de son fond. Papier sur papier tuerait la
     figure et, avec elle, ce que le papier signifie sur ce site, l'objet
     qu'on remet. Ne pas les basculer.
  4. LA DOCTRINE DU FILET. Un filet unique à 12 % servait à tout : ouvrir
     une section, séparer deux entrées, souligner un appel. En imprimerie
     le POIDS dit le rang. RÈGLE : un filet de section ne sert que là où
     la couleur ne coupe pas. Sept sections en portaient un, identique ;
     il n'en reste que deux, entre deux sections d'encre (.recu,
     .entonnoir), et ils montent de --line-soft à --line pour se voir
     enfin. Nouveau token --line-tete, 2px, qui OUVRE un ensemble
     d'entrées (.a-list, .m-entrees, la FAQ).
  5. LA NOTE MARGINALE (.sect). Huit sections ouvraient sur le même
     triptyque empilé, libellé mono puis titre puis corps, au même fer à
     gauche : le lecteur voyait huit fois la même dalle, et c'est cette
     répétition, bien plus qu'une police, qui faisait « généré ». Le
     libellé quitte le haut de la pile pour la MARGE GAUCHE. Ce n'est pas
     une invention : c'est l'intention déclarée en v10, « le libellé de
     section tient la marge gauche, le contenu occupe la droite », restée
     à l'état de .g12 jamais posé sur un seul élément. .g12 est supprimé,
     l'intention est appliquée. Portée : filtre, méthode, offre, analyses,
     les quatre sections qui étaient une pile plate. Le dossier et la FAQ
     ont déjà une colonne de gauche qui tient le même rôle ; le fondateur
     et l'appel final sont centrés, et ce centrage est le contraste voulu
     par la v15. Sous 1100px la marge n'a plus la place d'exister sans
     étrangler la colonne de lecture : la note reprend sa place au-dessus
     du titre. Effet de bord favorable sur l'arbitrage v33 : la colonne de
     contenu perd la largeur de la marge, donc le vide de 545px à droite
     des blocs bornés à --mesure tombe sous 300px sans qu'aucune mesure de
     lecture n'ait bougé.
  6. LE CORPS SUR PAPIER, ET LA RUBRICATION. L'échelle typographique
     tenait dans un mouchoir, 10,5 / 15 / 50 / 62px, un seul vrai saut, et
     une échelle plate se lit comme un réglage par défaut. Le contraste se
     gagne par le BAS, l'agrandissement du hero ayant été annulé sur pièce
     en v40 : sur papier le corps monte de 1,5px, l'encre sur papier
     portant un corps plus grand que le clair sur sombre, où la diffusion
     des blancs grossit déjà le texte. La page obtient une PAGE DE TEXTE
     face à des pages d'affichage, sans toucher au plafond de 50px des
     statements. Et le VIN prend enfin un emploi : il était partout un
     peu, souligné d'appel, survol, trois mots italiques, rubriques du
     spécimen, mesure de la toise, donc nulle part vraiment. Il porte la
     note marginale SUR PAPIER, où il donne 6,94:1. Usage non nouveau : la
     v38 l'a déjà validé dans le feuillet (« rubriques au vin plein »),
     étendu ici à la surface qui porte le même papier. Sur l'encre il
     reste impossible, 2,3:1 en plein et 3,2:1 en lift, et un libellé de
     10,5px est du petit texte, il lui faut 4,5:1. LE FONDATEUR EN EST
     EXCLU : l'arbitrage v15 dit « aucun rouge dans cette section », il
     tient.
  TROIS CORRECTIONS au passage, toutes antérieures à cette passe :
  le HALO du CTA final (radial-gradient de vin à 10 %, posé en v9) est
  supprimé, un glow coloré étant aux interdits absolus, et c'était le
  pixel le plus « généré » de la page ; --ink-3 passe de #7a6f63 à
  #6c6257, parce qu'il ne donnait que 3,99:1 sur le papier, sous le seuil
  AA du petit texte, alors qu'il portait déjà le libellé de la bande
  méthode et tous les labels du spécimen (assombri le long de la MÊME
  teinte, jusqu'à 4,84:1 ; même précédent que le tertiaire sombre éclairci
  en v7-2) ; et la note de repli de la vidéo du hero, « Déposez votre
  vidéo imbrin.mp4 dans public/, puis rechargez », est supprimée, c'était
  une consigne de développement que lisait un associé de cabinet le jour
  où la vidéo ne chargeait pas. 97 lignes de CSS mort partent avec
  (.rows/.row de la méthode d'avant la v38, .nots/.not des engagements
  morts en v52, .exergue, .narrow, .g12, .rule, jamais montés sur un
  élément).
  N'ONT PAS BOUGÉ, et ne doivent pas : le spécimen et sa loupe, la toise
  et ses quatre garde-fous, le plafond de 50px des statements, l'échelle
  du hero, les trois polices, la séquence d'apparition au chargement.
  RESTE À JUGER SUR PIÈCE, non fait : la MATIÈRE du papier. Les bandes
  claires sont des aplats pleine largeur, elles n'ont pas de bord ; le
  spécimen sait déjà faire une feuille (second feuillet décalé, ni ombre
  ni dégradé) et ce vocabulaire pourrait monter au niveau de la page.
  À arbitrer devant l'écran, pas dans le code.
- Amendement v55 (arbitrage Vincent, 29/08/2026, sur la planche
  MAQUETTE-V55-TYPO.html qui FAIT FOI) : LA BASCULE TYPOGRAPHIQUE.
  Direction C pour le SITE, direction B pour les DOCUMENTS.
  Motif : « ça fait beaucoup site généré par l'IA, et encore moins dans
  les documents ; je veux quelque chose d'humain, de naturel ». Retour
  rendu sur la v54, jugée insuffisante : « je m'attendais à mieux, je
  voulais un effet WOW, j'ai juste vu des changements de couleur ».
  CE QUI L'AVAIT PRODUIT, et c'est une incohérence de cette charte : la
  v28 a retiré Geist Sans du site au motif qu'elle est « la police maison
  de Vercel, devenue le signe des sites générés », et la dernière ligne du
  même amendement disait « GEIST MONO RESTE, inchangé ». Or c'est Geist
  Mono qui composait les libellés du spécimen, 25 poses de la classe dans
  le seul composant du dossier. Un acte, un Kbis, un rapport de
  commissaire aux comptes n'étiquettent jamais leurs champs en capitales
  monospace espacées : c'est le vocabulaire d'un tableau de bord, et
  c'était la vraie raison pour laquelle le document « se voyait généré ».
  La police du tell avait été tuée, sa jumelle était restée partout.
  LE SITE (direction C) :
  DISPLAY Fraunces, variable, avec ses deux axes propres, SOFT à 0
  (terminaisons nettes) et WONK à 1 (dessins volontairement irréguliers),
  posés une fois à la racine et hérités ; l'optique reste automatique.
  C'est une police qui a l'air DESSINÉE, ce qu'aucun générateur ne sort.
  Elle reprend les trois italiques du site, que Familjen portait.
  CORPS Spectral, dessinée par Production Type, fonderie parisienne,
  commandée par Google pour la lecture à l'écran : une serif de travail,
  du registre des documents imprimés que la page revendique. 400 et 500,
  romain, latin, exactement le gabarit que tenait Source Serif 4, pour
  que les <b> continuent de tomber sur 500 sans synthèse de graisse.
  LIBELLÉS Cutive Mono, une machine à écrire et non une police de code.
  C'est tout le sujet : le monospace de terminal devient un tapuscrit.
  LES DOCUMENTS (direction B), et c'est le point le plus important de
  l'amendement : LE SPÉCIMEN ET LA FICHE DU DEVIS ONT LEUR PROPRE
  SYSTÈME TYPOGRAPHIQUE. Aucun monospace à l'intérieur ; les libellés y
  sont composés dans la serif du texte, en capitales espacées, comme un
  imprimeur le ferait. Retenu par Vincent sur son ESPACEMENT, « plus
  confortable visuellement ». Ce n'est pas une exception, c'est la règle
  qui fait qu'une pièce se lit comme un OBJET POSÉ sur la page et non
  comme une div maquillée en papier : un dossier imprimé par un cabinet
  n'est pas composé dans les polices de son site. Ne pas réunifier.
  Une seule ligne le porte, .doc et .fiche-o redéfinissant --f-label sur
  --f-corps ; les vingt-cinq libellés du spécimen et les six de la fiche
  suivent. Le tracking n'a pas eu à bouger, il était déjà entre 0,10 et
  0,18em dans les documents contre 0,28em sur la page, c'est-à-dire déjà
  la valeur de la direction B.
  NOMMAGE. globals.css ne nomme plus AUCUNE police : il nomme trois
  emplois, --f-display, --f-corps, --f-label. C'est ce que les renommages
  v18 (.serif -> .display) et v28 (la clé « sans » -> « corps »)
  cherchaient sans l'obtenir, faute d'avoir sorti les noms de familles du
  CSS : cette bascule-ci est la quatrième et a encore dû remplacer
  --font-familjen dans dix-huit déclarations. La prochaine ne touchera
  que layout.tsx. Pour la même raison la classe .mono devient .label :
  elle ne rend plus un monospace partout, un nom qui dit la police ment à
  la première bascule. Elle n'était utilisée qu'une fois en CSS.
  L'IMAGE OPENGRAPH SUIT, précédent v18 où elle avait perdu Instrument
  Serif : elle passe à Fraunces et Cutive Mono. Fraunces y est demandée
  à wght@400 sans SOFT ni WONK, une carte sociale n'ayant pas besoin du
  dessin irrégulier et une requête multi-axes de plus étant un point de
  casse pour un PNG statique.
  Familjen Grotesk, Source Serif 4 et Geist Mono sont RETIRÉES du dépôt,
  le woff2 local compris. Ne pas les réintroduire.
  AUCUNE FONT-SIZE N'A ÉTÉ TOUCHÉE, discipline posée en v30 : la taille
  apparente est une seconde variable, elle se juge sur pièce et se traite
  à part, sinon deux changements se masquent l'un l'autre.
  ALERTE, ET ELLE EST OUVERTE : la v30 autorisait 22 largeurs en ch au
  motif qu'elles étaient « portées par Familjen ou par le mono, elles ne
  dépendent pas de la police du corps ». Cette phrase EST MORTE avec le
  présent amendement. Les 15 qui subsistent sont toutes des max-width de
  TITRES, elles ont changé de valeur en silence et le découpage des
  titres a bougé. Ce n'était pas évitable en une passe : les figer en rem
  en même temps que la police aurait fait les deux changements
  simultanés que la v28 avait justement ratés. L'ORDRE EST DONC : juger
  les polices sur pièce, PUIS réancrer ces 15 largeurs en rem, bornes de
  clamp comprises, aux valeurs rendues sous Fraunces. Ne pas ajouter de
  nouvelle largeur en ch entre-temps.
  RESTE OUVERT, dit à Vincent et non fait : l'effet recherché ne viendra
  pas de la typographie seule. Il est dans LE SPÉCIMEN, seul objet de la
  page, qui doit cesser d'être une div maquillée en papier pour devenir
  une pièce qu'on a l'impression d'avoir sortie d'une chemise. La
  typographie est la première marche, la matière est la suivante.
- Amendement v56 (arbitrage Vincent, 29/08/2026) : L'ADRESSE DE CONTACT
  ET LE REPLI DU HERO.
  CONTACT. contact@imbrin.fr est arrêtée comme adresse de contact, la
  réserve de site.ts n'a plus d'objet. Elle s'affiche SOUS LE NUMÉRO,
  aux trois endroits où celui-ci vit déjà et à ceux-là seulement :
  fondateur, pied de page, appel final. Les deux voies directes se
  lisent ensemble ; l'appel Calendly reste le chemin principal, elles
  ne le concurrencent pas. Jamais dans le hero, la règle du numéro
  vaut pour elle. Elle était déjà dans le schema.org, où elle reste.
  REPLI DE LA VIDÉO. Quand imbrin.mp4 ne charge pas, le premier écran
  peignait un halo VERT sur le voile, rgba(38,52,50,.55) doublé d'un
  dégradé : une couleur hors palette et un dégradé coloré, donc deux
  interdits absolus, posés là depuis l'origine et jamais vus parce que
  le cas ne se produit pas en développement. Pire, cet aplat
  RECOUVRAIT le poster, qui existe pourtant (public/imbrin-poster.jpg)
  et qui est l'image de la vidéo. Le hero perdait son sujet au moment
  précis où il aurait fallu le garder. Désormais le poster prend la
  place et la balise vidéo est retirée de l'image, une source en échec
  laissant selon le navigateur un cadre vide ou une icône de média
  cassé. Le voile ne bouge pas, c'est un fond de lisibilité pour le
  titre, pas une décoration. La note de développement qui s'affichait
  là était morte en v54.
  IMAGE OPENGRAPH. Optimisation DEMANDÉE, faite à moitié, et la moitié
  manquante est documentée dans le fichier. Le vrai gain serait de
  retirer le runtime edge : la route sortirait prégénérée au build au
  lieu d'être rendue à chaque partage de lien, pour une image qui ne
  change jamais entre deux déploiements. Essayé : sans edge, le
  prérendu casse à l'intérieur de @vercel/og, au chargement du module,
  sur un fileURLToPath appliqué à une chaîne qui n'est pas une URL.
  Impossible de trancher depuis un poste Windows si le défaut y est
  propre ou s'il vaudrait aussi pour les serveurs de build, et on ne
  troque pas un build de production contre une image sociale : le
  runtime edge est REPOSÉ. À reprendre sur une branche, où une préview
  Vercel tranchera en une minute. Ce qui est acquis : les quatre
  requêtes réseau de la génération, deux CSS et deux binaires de
  fonte, sont marquées immuables, elles ne se repaient plus à chaque
  partage. Le sous-ensemblage au texte réellement composé était déjà
  en place.
- Amendement v57 (arbitrage Vincent, 29/08/2026) : LE FONDATEUR, HIÉRARCHIE
  VERTICALE. Composition centrée CONSERVÉE, aucune colonne, aucun texte
  réécrit ; seul l'ORDRE change, et avec lui les poids.
  Ce qui n'allait pas : le portrait était posé entre le kicker et la
  citation, il coupait donc la lecture en deux avant qu'elle ait commencé ;
  et le numéro était une ligne perdue au-dessus d'un filet alors que c'est
  la conversion de la page.
  L'ordre est désormais : eyebrow, CITATION (34px, mesure 620px), aparté
  entre deux filets courts de 120px, PORTRAIT (200px, 4/5, noir et blanc),
  signature, puis LE NUMÉRO annoncé par « Appelez directement » et composé
  à 28px en encre pleine, souligné vin au survol. Blancs donnés au pixel
  dans le brief, 56/40/64/20/40, réduits d'un tiers sous 900px, où la
  citation tombe à 24px, le portrait à 160px et le numéro à 22px. Tous en
  margin-bottom et jamais en margin-top : aucun voisin n'en porte, donc
  aucun ne se chevauche ni ne s'additionne.
  LE « AUCUN ROUGE DANS CETTE SECTION » DE LA v15 TOMBE, sur décision
  explicite : l'eyebrow passe au vin. 6,94:1 sur le papier, il passe AA en
  petit texte. C'est le seul rouge de la section, ne pas en ajouter.
  Le gris de l'aparté est le token --ink-3 et non le #6E6960 du brief :
  mesuré, ce dernier donne 4,43:1 sur le papier, SOUS le seuil AA du petit
  texte, quand --ink-3 donne 4,84:1 pour une teinte distante de deux
  valeurs. Même précédent que le tertiaire éclairci en v7-2 et que --ink-3
  lui-même en v54 : la valeur cède au contraste, la teinte ne bouge pas.
  DESCENDUS AU PIED DE PAGE, et vérifiés présents AVANT d'être retirés :
  l'identité juridique (raison sociale et SIREN), qui n'y était pas et qui
  y a été ajoutée d'abord, et LinkedIn, qui y était déjà. Ils fermaient la
  section sur une mention administrative ; ils appartiennent au pied.
  L'adresse de contact ajoutée en v56 n'était pas nommée dans l'ordre du
  brief : elle RESTE sous le numéro, à l'échelle d'un libellé, pour ne pas
  lui disputer la place qu'il vient de gagner. À trancher si c'est faux.
  La mesure de la citation passe de 26ch à 620px, ce qui retire une des 15
  largeurs en ch signalées par l'alerte v55. Il en reste 14.
  NON FAIT, et demandé : la capture à 390px. Aucun outil de rendu dans la
  session qui a produit cet amendement ; les valeurs résolues à cette
  largeur sont écrites dans le message de commit, la capture est à prendre
  sur la préview.
- Amendement v58 (29/08/2026) : LE POIDS. Passe d'optimisation mesurée au
  build, aucun rendu modifié.
  L'AXE SOFT SORT DE FRAUNCES. Il était demandé dans layout.tsx puis réglé
  à 0 dans globals.css, c'est-à-dire à SA PROPRE VALEUR PAR DÉFAUT : la
  déclaration ne changeait donc rien au rendu, mais demander un axe fait
  servir la fonte variable SUR cet axe, et ça se paie. Mesuré : 305 Ko de
  fontes préchargées avec lui contre 187 sans, 677 Ko contre 425 en tout.
  118 Ko sur le chemin critique et 252 Ko au total, pour un no-op.
  Leçon générale, elle vaut pour la prochaine fonte variable : ne demander
  un axe que si on lui donne une valeur DIFFÉRENTE de son défaut.
  L'AXE OPSZ RESTE, et c'est un choix. Le retirer descendrait à 121 Ko
  préchargés, 66 de moins, mais coûterait l'optique automatique, qui se
  voit entre un titre de 62px et un libellé de 10px. Ce serait un
  arbitrage de RENDU, pas un gain gratuit : il n'a pas été pris ici.
  WONK 1 est inchangé, c'est le dessin irrégulier retenu en v55.
  IMAGES HORS DU PREMIER ÉCRAN : le lockup du dossier (48 Ko) et le
  portrait du fondateur (31 Ko) passent en loading="lazy" et
  decoding="async". 79 Ko qui ne pèsent plus sur le premier rendu. Le
  logo du hero reste en chargement immédiat, il est dans le premier écran.
  NON FAIT, FAUTE D'OUTIL, et c'est le premier poste de tous : la VIDÉO
  DU HERO pèse 1,68 Mo, soit quatre fois tout le reste réuni, et elle est
  en preload="auto" donc téléchargée entièrement au premier écran. Une
  boucle muette de fond bien réencodée tombe couramment entre 300 et
  500 Ko. La session n'a ni ffmpeg ni encodeur d'image ; le « convert »
  du PATH est l'utilitaire Windows qui convertit FAT en NTFS, pas
  ImageMagick, et il ne doit jamais être appelé ici. Même réserve pour
  les deux logos surdimensionnés : logo-dossier.png sert 900x180 pour un
  rendu de 40px de haut, logo-imbrin.png 17,5 Ko pour 18px.
  next/image les redimensionnerait tout seul, mais enclencherait
  l'optimisation d'images FACTURÉE par l'hébergeur sur un site
  aujourd'hui entièrement statique : arbitrage à prendre, pas pris.
  Pour mémoire, le JS est à 109 Ko au premier chargement et il n'y a rien
  à y faire, zéro dépendance UI.
- Amendement v59 (arbitrage Vincent, 29/08/2026) : LA FAQ PASSE DE NEUF À
  QUATRE QUESTIONS. Sont retirées « Qui contacte le dirigeant ? », « Et si
  un dirigeant refuse d'être recontacté ? », « Sous combien de temps les
  premiers dossiers ? », « Que devient un dossier après la livraison ? » et
  « Pourquoi si peu de chiffres sur ce site ? ». Restent les quatre qui
  portent une information que le fil de la page ne dit pas : la sortie des
  trois mois, le périmètre déjà servi, le RGPD, et la différence avec un
  agrégateur. Le balisage FAQPage suit tout seul, il est généré depuis
  copy.faq.items : vérifié à 4 entrées dans le HTML produit.
  VÉRIFIÉ AVANT DE RETIRER, et c'est pourquoi trois de ces suppressions ne
  coûtent rien : le PREMIER CONTACT toujours adressé à l'entreprise et
  l'OPT-OUT définitif sont portés par la question RGPD qui reste, par le
  pied de l'offre (« le registre d'opposition et l'opt-out sont pris en
  charge ») et par la page Confidentialité, qui les détaille ; le DÉLAI
  annoncé au devis est répété dans le filtre, dans l'offre, dans la fiche
  du devis et dans sa note.
  CE QUI MEURT VRAIMENT, ET IL FAUT LE SAVOIR : le SUIVI DES COHORTES,
  c'est-à-dire les dossiers suivis jusqu'à leur issue, les résultats
  communiqués aux clients échecs compris, et la publication sur le site dès
  qu'une cohorte atteint dix-huit mois. L'amendement v53 l'avait relogé
  dans « Que devient un dossier après la livraison ? » en écrivant
  « c'est désormais le SEUL endroit du site qui porte cet engagement, ne
  pas le perdre ». CETTE INSTRUCTION EST CADUQUE : la question est
  supprimée sur arbitrage, l'engagement ne figure plus nulle part sur le
  site. Ce n'est pas un oubli, c'est une suppression demandée et signalée
  avant d'être faite. S'il doit revivre, il lui faut un nouvel endroit :
  il n'en a aucun. Ne pas « restaurer » la question au motif de la v53.
  À JUGER SUR PIÈCE, non vérifiable ici : la FAQ est en deux colonnes
  depuis la v53, l'en-tête, la note et l'appel à gauche, l'accordéon à
  droite. Avec quatre questions au lieu de neuf, la colonne de droite
  devient plus courte que celle de gauche et l'équilibre du gabarit peut
  se retourner. Si le déséquilibre se voit, c'est le gabarit qu'il faut
  reprendre, pas les questions qu'il faut remettre.
- Amendement v60 (arbitrage Vincent, 31/08/2026) : CE QUE NOUS NE FAISONS
  PAS revient, en bande compacte entre la méthode et l'offre. La section
  avait existé sous le nom « Nos engagements » et la v52 l'avait
  supprimée ; elle ne revient PAS sous cette forme. Quatre engagements sur
  UNE rangée, sans paragraphe, sans icône, et le dispositif est la MENTION
  RAYÉE : un terme barré d'un trait fin en vin, sous lui la ligne courte
  qui le remplace. C'est le geste du registre, on ne gomme pas une entrée,
  on la raye et on écrit à côté. Planche MAQUETTE-V60-NEFAITPAS.html.
  ELLE EST SUR PAPIER, ET ELLE JOUXTE LA MÉTHODE QUI L'EST DÉJÀ. C'est une
  dérogation assumée à l'alternance stricte des fonds posée en v54, et le
  dispositif la commande : sur l'encre le vin plein donne 2,32:1, mesuré,
  un trait de 1,5px à ce contraste ne se voit pas, et l'amendement v15
  interdit le --wine-lift sur un filet (« les aplats et les filets restent
  en #8E2438 »). Sur le papier le même vin donne 6,94:1. Un trait de vin
  lisible n'existe que sur cette surface. Ne pas « rétablir l'alternance »
  en basculant la section sur l'encre : ce serait effacer son seul geste.
  Le filet de tête fait alors DEUX métiers d'un coup, il ouvre l'ensemble
  d'entrées (emploi de --line-tete) et il coupe là où la couleur ne coupe
  pas (règle du filet de section, v54). Un seul filet, pas deux empilés :
  ne pas ajouter de border-top à la section.
  Le terme rayé recule à --ink-3 et non --ink-2 : à --ink-2 le trait se
  confondait avec l'encre de la lettre et la mention se lisait sombre, pas
  rayée. 4,84:1, AA tenu pour un corps de 18px. Le remplacement garde
  l'encre pleine, une entrée annulée n'affirme plus rien.
  LE SUIVI DES COHORTES REVIT, et le pied de cette section est le seul
  endroit du site qui le porte. L'instruction de la v59, « l'engagement ne
  figure plus nulle part, s'il doit revivre il lui faut un nouvel endroit :
  il n'en a aucun », EST DONC CADUQUE À SON TOUR. Il en a un.
  DEUX REDITES CORRIGÉES DANS LE MÊME GESTE, parce que la section les
  rendait visibles : « pas de scores prédictifs inventés » sort de l'étape
  02 de la méthode, la mention rayée le dit à 200px de là dans la même
  bande ; et « et livré avec chaque lot » sort de la note du filtre, le
  pied de la section porte désormais la livraison du taux d'écart et sa
  suite. La note du filtre garde ce qu'elle est seule à dire, la mesure
  sur VOTRE périmètre.
  DEUX PHRASES AJOUTÉES À LA MÉTHODE au même moment : les critères testés
  sur l'historique des cessions en fin d'étape 02, et les deux
  vérifications du jour de la livraison en tête d'étape 03. La seconde a
  été FUSIONNÉE, pas empilée : l'étape disait « ce qui tient à la lecture
  est livré », la lecture de l'acte étant maintenant nommée juste avant,
  les deux mots sautent.
  HAUTEUR, mesurée sur le build et non sur la planche : 195px de 1440 à
  1600, 194px à 1366, 192px à 1280, 463px à 390. La rangée porte un
  SUBGRID, et il n'est pas décoratif : « Contact du patrimoine privé »
  demande 239px et n'en reçoit que 210, il tombe sur deux lignes à toutes
  les largeurs de bureau, et sans piste partagée son remplacement
  descendait d'un cran sous les trois autres. Coût en hauteur nul.
  LEÇON DE MÉTHODE, ET ELLE VAUT POUR TOUTE PLANCHE FUTURE : la première
  version de celle-ci annonçait 198px, le build en a donné 219. Deux
  causes. Elle portait .wrap à 40px de padding quand le dépôt vaut
  clamp(22px, 4.4vw, 76px), soit 93px de rangée en trop. Et surtout,
  Fraunces ne rend pas la même largeur selon qu'elle vient de l'API css2
  de Google, ce qu'une planche charge, ou de next/font, ce que sert le
  site : 197,6px contre 239,1px pour la même chaîne à 18px, à graisse,
  tracking et WONK identiques, l'axe opsz ne se servant pas pareil de part
  et d'autre. Cet écart n'est pas corrigeable dans une planche statique.
  UNE PLANCHE FAIT DONC FOI SUR LA FORME ET SUR LES COULEURS, JAMAIS SUR
  UNE HAUTEUR NI SUR UNE LARGEUR DE TEXTE : celles-là se revérifient sur
  le site construit avant d'être annoncées. Même famille d'erreur que le
  ch de la v30 et que la bascule de la v55, un couplage typographique
  invisible qui déplace une mesure sans qu'aucune déclaration ne bouge.
  AUCUN .rev sur cette section, la règle v54 tient : rien n'y apparaît au
  scroll. Aucun chiffre non plus, « dix-huit mois » est écrit en lettres
  et c'est un seuil d'engagement, pas un résultat annoncé.
  Amendement v60b (arbitrage Vincent, 31/08/2026) : « fournisseurs
  contractualisés » devient « fournisseurs sous contrat » dans la mention
  rayée des données grises. Le mot long faisait tomber le remplacement sur
  une TROISIÈME ligne à 1280, et le subgrid propageait cette ligne aux
  quatre entrées : la section y pesait 214px quand elle en pesait 195 plus
  haut. Mesuré avant et après, la chaîne passe de 319 à 299px sans
  césure pour 185,2px disponibles, et la rangée tombe de 135 à 112px, la
  section de 214 à 192px. Rien d'autre n'a bougé, aucune déclaration CSS
  n'a été touchée : c'est le seul cas de cette page où un mot de copy est
  la variable de mise en page, et c'est pourquoi il est consigné.
  Le terme « contractualisés » RESTE ailleurs et doit y rester : le
  spécimen l'emploie deux fois et la réponse RGPD de la FAQ une fois, où
  il qualifie un rapport de fourniture et non une liste de refus.
- Amendement v61 (arbitrage Vincent, 29/08/2026) : UN SEUL BORD GAUCHE.
  Jugé sur pièce en version ordinateur : « le site est centré à droite,
  les petits titres de section en majuscule sont à gauche, ça crée un
  décalage perturbant ». C'est exact, et il y avait DEUX causes, dont une
  bien plus grosse que l'autre.
  1. LA NOTE MARGINALE DE LA v54 EST ANNULÉE. Elle sortait le libellé de
  section dans la marge et poussait tout le contenu dans une seconde
  colonne. L'intention, casser le gabarit répété huit fois, était juste ;
  le moyen ne l'était pas. La marginalia d'imprimé ne tient que si la
  marge porte du contenu RÉCURRENT, des notes, des dates, des références.
  Ici elle ne tenait qu'un mot de neuf caractères par section : la marge
  paraissait vide et le retrait accidentel. Et la classe n'était posée que
  sur quatre sections des neuf, si bien que la page comptait QUATRE bords
  gauches — le contenu retiré du filtre, de la méthode, de l'offre et des
  analyses ; la colonne à 40 % du dossier et de la FAQ ; le centrage du
  fondateur et de l'appel ; le bord franc du hero. L'argument de la v54,
  « la bande gauche porte toujours l'identité de la section », était une
  cohérence AFFIRMÉE SANS AVOIR ÉTÉ VÉRIFIÉE À L'ÉCRAN. Le libellé revient
  au-dessus de son titre, au même fer que lui.
  2. LE HERO N'ÉTAIT PAS DANS LE MÊME CONTENEUR, et c'est la cause
  principale. Il n'utilise pas .wrap : ses quatre éléments — la nav, le
  bloc de titre, la légende et l'indice de défilement — étaient posés en
  absolu à 40px du bord de l'écran, alors que les sections vivent dans un
  conteneur de 1440px CENTRÉ. Sur un écran de 1920, le contenu des
  sections commence donc à 316px et le titre du hero à 40 : 276px de
  décrochage entre le premier écran et tout ce qui suit. Personne ne
  l'avait vu parce que la maquette d'origine était jugée à 1440, où
  l'écart tombe à 23px.
  La variable --bord, posée sur .hero, reproduit exactement la géométrie
  de .wrap : le même rembourrage tant que la page tient dans 1440px, puis
  la moitié du débord une fois le conteneur centré. Elle est exprimée en
  POURCENTAGE et non en vw à dessein : le pourcentage se résout sur la
  boîte du hero, qui exclut la barre de défilement, quand 100vw l'inclut
  et décalerait de sa demi-largeur. Vérifié à quatre largeurs : 1920 donne
  316px, 1440 donne 63, 1280 donne 56, 390 donne 22, identiques au .wrap.
  RESTENT HORS RÈGLE, et c'est voulu depuis la v15 : les deux compositions
  centrées, le fondateur et l'appel final. Ce sont les seules.
  NE PAS REMETTRE de retrait de section. La variété que la v54 cherchait
  est aujourd'hui portée par l'alternance encre/papier, la hiérarchie des
  filets et la bascule typographique de la v55 : aucune ne coûte un
  alignement.
- Amendement v62 (arbitrage Vincent, 02/09/2026) : LE PIED DE LA BANDE
  « CE QUE NOUS NE FAISONS PAS ». Deux corrections, dont la première
  annule une erreur de la v61.
  1. LE FILET DE SECTION AJOUTÉ EN v61 EST RETIRÉ. Il avait été posé au
  motif que deux bandes de papier se suivent et que la couleur ne coupe
  donc pas — application littérale de la doctrine v54. Le motif était
  juste et la conclusion fausse : la césure EXISTAIT DÉJÀ. Le filet de
  tête de .nfp-row fait les deux métiers d'un coup, il ouvre l'ensemble
  d'entrées ET il coupe entre les deux bandes de même couleur. La planche
  MAQUETTE-V60-NEFAITPAS.html le disait en toutes lettres, « un seul
  filet, pas deux empilés à 40px d'écart », et la v61 a posé le second
  très exactement à cette distance. LEÇON, elle vaut au-delà de ce cas :
  lire la planche avant d'appliquer une doctrine à la section qu'elle
  décrit, la doctrine peut y être déjà appliquée autrement.
  2. LE PIED RESPIRE. Le raisonnement d'origine comptait « 150px d'air en
  dessous », soit les 20px de la bande plus les 130 de l'offre, comme si
  le fond était continu. IL NE L'EST PAS : la couleur change à 20px. Le
  feuillet de papier était donc coupé vingt pixels sous sa dernière
  ligne, et les cent trente suivants appartenaient visuellement à
  l'encre, pas à lui. Le rembourrage passe de 20px à clamp(56, 6vw, 88)
  en bas, et de 36 à clamp(44, 9vw, 60) sous 860px.
  LE HAUT NE BOUGE PAS, et c'est délibéré : là-haut aucune frontière
  n'est visible, le papier continue depuis la méthode et l'air est
  réellement partagé, donc le raisonnement d'origine y tient. D'où un
  rembourrage ASYMÉTRIQUE, qui est la conclusion juste d'un fond qui ne
  coupe que d'un seul côté. Ne pas le « corriger » en le symétrisant.
- Amendement v63 (arbitrage Vincent, 29/08/2026) : CORRECTION RGPD. Le site
  affirmait « le premier contact passe par l'entreprise » ; c'est FAUX, et
  c'était faux à quatre endroits, dont deux mentions légales. La pratique
  réelle : le cabinet client contacte le dirigeant DIRECTEMENT, sur une
  coordonnée fournie par un prestataire d'enrichissement, sans passer par le
  standard. Le motif n'est pas un contournement, c'est une protection : un
  appel au standard sur un sujet de cession fait fuiter l'information à
  l'intérieur de l'entreprise du dirigeant avant qu'il ait décidé quoi que
  ce soit.
  DEUX CORRECTIONS SÛRES. La bande « ce que nous ne faisons pas » : le
  « non » restait vrai, le patrimoine privé n'est pas ciblé, seul le « oui »
  mentait ; il devient « Le dirigeant dans sa fonction, rien d'autre. » Et
  l'information de l'article 14, page Confidentialité : trois mots retirés,
  « qui pourra prendre contact avec le dirigeant, PAR L'ENTREPRISE ».
  QUATRE FORMULATIONS PROVISOIRES, et elles sont provisoires EXPRÈS. Elles
  décrivent la pratique et NE QUALIFIENT PAS la donnée, parce que la
  qualification des coordonnées d'enrichissement — professionnelles ou
  personnelles — engage la base légale et demande un avocat. Sont retirées
  jusqu'à cet avis : « premier contact toujours adressé à l'entreprise »,
  « coordonnées professionnelles » (deux endroits, la rubrique Origine ET la
  rubrique Données traitées, cette seconde n'était pas dans le brief et
  portait le même défaut), et « ne porte que sur des personnes dans
  l'exercice de leurs fonctions professionnelles », dont la portée est
  reformulée sur la FINALITÉ du traitement et non sur la nature des données.
  NE PAS « rétablir » ces phrases au motif qu'elles sonnent mieux : elles
  affirment une qualification juridique non validée.
  Le point est inscrit au BACKLOG.md, créé pour l'occasion : c'est le
  premier fichier du dépôt qui liste ce qui est provisoire et le sait.
  LA PLANCHE MAQUETTE-V60-NEFAITPAS.html porte encore la phrase fausse.
  Elle n'est PAS modifiée, c'est une archive de ce qui a été validé, mais
  elle est annotée en tête de ligne : sur ce point précis, elle ne fait
  plus foi. Vérifié après correction, par grep sur tout src/ : plus aucune
  occurrence de « par l'entreprise », « adressé à l'entreprise »,
  « coordonnées professionnelles » ni « fonctions professionnelles ».
- Amendement v64 (arbitrage Vincent, 02/09/2026, rendu APRÈS avoir vu les
  deux états) : LE HERO EST EXCENTRÉ, ET IL LE RESTE. La v61 avait aligné
  ses quatre éléments — nav, bloc de titre, légende, indice de défilement —
  sur le conteneur centré des sections, pour supprimer un décrochage de
  276px sur écran large. Le diagnostic de la v61 était bon pour LE RESTE DE
  LA PAGE et cet alignement reste acquis ; il ne l'était pas pour le hero.
  Le hero n'est pas une section, c'est une PLAQUE pleine page, avec sa
  vidéo au bord de l'écran. Son texte tient les bords quelle que soit la
  taille de l'écran, 40px sur ordinateur et 22px sous 760px, comme la
  couverture d'un document imprimé, qui n'a jamais la marge de son bloc de
  texte. Le décrochage entre le premier écran et les sections n'est donc
  pas un défaut : c'est la frontière entre la couverture et le corps.
  NE PAS RÉ-ALIGNER LE HERO sur .wrap, et ne pas relire l'amendement v61
  comme s'il valait encore ici : sur ce point précis il est annulé, sur
  tout le reste il tient. Le calcul de bord qu'il avait introduit est
  supprimé, plus rien ne l'utilisait.
- Amendement v65 (arbitrage Vincent, 02/09/2026) : LA TARIFICATION SORT DU
  SITE, LA STRUCTURE RESTE. Voir la section « L'offre v15 » ci-dessus, qui
  remplace la v13 et porte le modèle. Ce qui change dans le CODE : le grand
  nombre du panneau et son « à partir de » sont remplacés par un énoncé,
  « Le prix suit le périmètre. Il est mesuré et annoncé avant tout
  engagement. » ; l'arithmétique qui ramenait le mensuel à l'année tombe
  avec lui, faute de mensuel ; la fiche du devis perd sa ligne Plancher et
  gagne Rémunération et Protection ; le mandat passe de « 3 500 € HT » à
  « À la mission, rémunération fixée au devis » ; la FAQ passe de trois à
  six mois. PRICING et SHOW_PRICING sont supprimés de brand.ts, ce dernier
  n'étant lu nulle part.
  DESIGN INCHANGÉ, à une adaptation près et elle était inévitable : le
  panneau portait un nombre à 76px, une PHRASE ne se compose pas à cette
  échelle. Le slot descend à clamp(24, 2,6vw, 34) et devient .pan-principe ;
  .pan-meta et .pan-arith sont supprimées, elles ne qualifiaient qu'un
  montant disparu. La composition du panneau ne bouge pas : un énoncé en
  tête, le grand énoncé toujours poussé en pied, l'appel dessous.
  VÉRIFIÉ PAR GREP après correction. « 3 500 » : plus aucune occurrence.
  « 2 000 » et « 24 000 » : plus rien dans le contenu, il ne restait qu'un
  commentaire de typo.ts décrivant la règle R7, mis à jour — la règle est
  conservée bien que son motif ait disparu, elle est juste et reprendra
  d'elle-même si un montant revenait. « commission » : plus rien dans le
  contenu, quatre commentaires de code décrivaient l'ancien panneau, tous
  mis à jour. « jamais » : six occurrences en texte affiché, toutes
  légitimes et étrangères au prix — faits contre intentions, données
  grises, contact jamais à titre privé, et la nouvelle frontière de rôle.
- Amendement v68 (arbitrage Vincent, 06/09/2026) : LA PAGE DES DIRIGEANTS,
  /dirigeants. Elle existe parce qu'Imbrin écrit à des dirigeants de PME
  AVANT qu'un cabinet les approche : ces dirigeants chercheront « Imbrin »
  et tomberaient sinon sur un site écrit pour des cabinets, qui parle
  d'eux à la troisième personne. Elle s'adresse à eux, à la deuxième, et
  ELLE NE VEND RIEN.
  RÈGLES ABSOLUES DE LA PAGE, elles priment sur tout confort de gabarit :
  aucun élément commercial, ni prix, ni offre, ni appel à réserver un
  échange, ni lien vers la section Offre ; aucune promesse
  d'accompagnement, Imbrin n'étant ni acquéreur ni conseil et ne prenant
  aucune part à une transaction ; aucun mot qui traite le dirigeant comme
  une ressource, donc ni « cible », ni « détecter », ni « gisement », ni
  « périmètre », ni « exclusivité » ; et tout ce qui y figure doit être
  VRAI le jour de la publication. Vérifié après build sur le HTML produit :
  zéro occurrence de chacun de ces mots, zéro lien Calendly.
  DEUX ÉCARTS AU BRIEF, assumés et signalés. Les deux tirets cadratins du
  texte fourni sont transposés, règle de charte v8, même transposition
  qu'en v46b. Et « nous vous écrivons À VOTRE ENTREPRISE, dans votre
  fonction » est devenu « nous vous écrivons DANS VOTRE FONCTION de
  dirigeant » : la première formulation est exactement celle que la v63 a
  retirée du site parce qu'elle était fausse, le contact passant par une
  ligne directe. La règle du brief l'interdisait donc elle-même.
  LE CANONIQUE EST DÉCLARÉ SUR LA PAGE, et ce n'est pas cosmétique : le
  layout pose alternates.canonical = « / » pour tout le site, valeur
  héritée par toute page qui ne la redéclare pas. Sans cette ligne, la
  page se déclarerait copie de l'accueil et aucun moteur n'aurait de
  raison de l'indexer, alors qu'être trouvée est sa seule fonction.
  Les deux pages légales héritent encore du défaut, voir BACKLOG.md.
  PIÈGE ÉVITÉ, à retenir pour toute page hors accueil : la classe .mask
  masque son élément par clip-path jusqu'à ce que Reveal lui pose « in »,
  et Reveal n'est monté QUE sur l'accueil. Un titre en .mask sur une page
  intérieure reste invisible. Ne pas en poser hors de l'accueil.
  Le délai de traitement d'une opposition vit en constante,
  brand.DELAI_OPPOSITION, et non en texte : c'est un engagement pris
  devant la personne concernée, il doit changer à un seul endroit.
  Le « · » de puce du brief n'a pas été repris pour les trois
  possibilités : la charte le réserve aux lignes de labels, et les
  entrées sur filets sont l'idiome du site, qui reste vertical en mobile
  sans rien avoir à déclarer.
- Amendement v69 (arbitrage Vincent, 06/09/2026) : TROIS CORRECTIONS DE
  VISIBILITÉ ET DE VÉRACITÉ.
  1. LES CANONIQUES. Chaque page déclare le sien. Le layout posait
  alternates.canonical = « / » pour tout le site, valeur héritée par toute
  page qui ne la redéclare pas : /confidentialite et /mentions-legales
  s'annonçaient donc aux moteurs comme des copies de l'accueil,
  c'est-à-dire comme des pages à ne pas indexer. Ce n'était pas un détail
  de référencement, c'était l'invisibilité des DEUX pages qu'un dirigeant
  doit pouvoir trouver. Les pages d'analyses déclaraient déjà le leur et
  n'étaient pas touchées. Vérifié après build : quatre canoniques
  distincts servis.
  2. LA NOTICE ART. 14 DÉCRIT LE TRAITEMENT RÉEL. Elle disait que le
  CABINET prenait contact avec le dirigeant. C'est Imbrin qui écrit la
  première depuis la v68, et une notice décrit ce qui est fait, pas ce
  qu'on faisait. La qualification des données n'est PAS touchée, elle
  reste en attente d'avis juridique.
  ÉCART AU BRIEF, signalé : « à votre entreprise » n'a pas été repris. Le
  même brief annonce quatre canaux de contact choisis selon l'âge du
  dirigeant, lettre, mail, LinkedIn et téléphone, dont ni un profil
  LinkedIn ni un mobile ne sont l'entreprise. La notice dit « dans votre
  fonction de dirigeant », vrai des quatre. C'est la TROISIÈME fois que
  cette formulation est proposée et écartée, v63 sur le site, v68 sur la
  page des dirigeants, v69 ici : si le premier contact passe toujours par
  l'entreprise, elle peut revenir en une ligne ; sinon elle doit rester
  dehors. Voir BACKLOG.md.
  3. LE VOCABULAIRE. Le kicker et le titre de /dirigeants passent de
  « Vous avez reçu un courrier » à « Vous avez été contacté », pour
  couvrir les quatre canaux ; le corps garde « courrier » là où il parle
  de la lettre. Et les deux dernières occurrences de « cible » du texte
  affiché de l'accueil tombent : « taille de cible » devient « taille
  d'entreprise » dans la méthode, « shortlist de cibles vérifiées »
  devient « shortlist de sociétés vérifiées » dans l'offre. Un dirigeant
  n'est pas une cible, et le site n'a plus à l'écrire.
  LE HERO NE BOUGE PAS : « Nous détectons les dossiers » porte sur des
  dossiers et c'est le mot choisi en v42. Ne pas l'adoucir.
- Amendement v70 (arbitrage Vincent, 06/09/2026) : L'INVARIANT DU PREMIER
  CONTACT EST FIXÉ. Il vit désormais dans la SECTION POSITIONNEMENT de ce
  fichier, en tête, et non dans un amendement : c'est une règle de fond,
  pas une décision de gabarit. Elle gouverne la notice de l'article 14, la
  page /dirigeants et toute copie future.
  Ce qu'elle dit, et pourquoi la formulation précédente était mauvaise :
  Imbrin contacte le dirigeant SEUL, par un canal personnel et
  confidentiel, jamais par le standard ni par ses équipes. « Premier
  contact par l'entreprise » désignait précisément le standard, c'est-à-dire
  LE canal qui fait fuiter l'information dans l'entreprise du dirigeant
  avant qu'il ait rien décidé. La phrase disait donc l'inverse de ce
  qu'elle voulait promettre.
  CETTE RÈGLE A SAUTÉ TROIS FOIS sous une formulation fausse, v63, v68,
  v69 : ne pas la reformuler. Les amendements qui en gardent l'historique
  ne sont PAS réécrits, ce sont les procès-verbaux des trois rechutes.
  CE QUI CHANGE DANS LE CODE : la notice art. 14 porte l'invariant mot pour
  mot ; le bloc 2 de /dirigeants dit « nous vous écrivons personnellement,
  dans votre fonction de dirigeant, et jamais par vos équipes » ; le bloc 4
  parle des informations « qui ont permis de vous contacter » et non plus
  « notre courrier » ; les deux libellés de lien passent de « Vous avez
  reçu un courrier ? » à « Vous avez été contacté ? », ainsi que la phrase
  de la notice qui les annonçait.
  LE CANONIQUE DE L'ACCUEIL DEVIENT EXPLICITE, et le piège est retiré à sa
  racine : la déclaration quitte le layout, où elle était HÉRITÉE en
  silence par toute page qui ne la redéclarait pas, et descend dans
  src/app/page.tsx. C'est cette valeur héritée qui avait désindexé les deux
  pages légales pendant des mois. Plus aucune page ne peut désormais hériter
  d'un canonique par accident.
  VÉRIFIÉ SUR LE HTML PRODUIT, huit pages balayées : zéro occurrence de
  « par l'entreprise », « à votre entreprise » et « adressé à l'entreprise ».
- Amendement v71 (arbitrage Vincent, 06/09/2026) : LE PLI FERMÉ DEVIENT
  LISIBLE. L'invariant de la v70 décrivait un courrier « sous pli
  Personnel — Confidentiel », mais la charte seule le portait : le site ne
  le promettait nulle part. C'est pourtant la garantie la plus CONCRÈTE du
  dispositif, la seule qui empêche matériellement un tiers d'ouvrir, et
  elle doit être lisible par celui qu'elle protège. La phrase entre donc
  aux deux endroits qui s'adressent au dirigeant : le bloc 2 de
  /dirigeants et la notice de l'article 14.
  Et le canal cesse d'être présumé dans le bloc 3 : « à la date indiquée
  dans notre courrier » devient « dans notre message », puisque quatre
  canaux sont utilisés et qu'un dirigeant approché par LinkedIn n'a aucun
  courrier à consulter. « Courrier » ne subsiste que là où il désigne la
  lettre elle-même, vérifié sur le HTML produit : une fois sur /dirigeants,
  deux fois dans la notice.
  EXCEPTION DE PONCTUATION, ET ELLE EST DÉLIBÉRÉE : le tiret cadratin de
  « Personnel — Confidentiel » est CONSERVÉ, alors que la règle v8
  l'interdit dans les textes du site. Ce n'en est pas : c'est la citation
  d'une mention réellement imprimée sur une enveloppe, et la transposer
  reviendrait à mal citer un objet physique. C'est le seul tiret cadratin
  du site, il est commenté à son emplacement, NE PAS le « corriger ».
- Amendement v72 à v76 (arbitrage Vincent, 14/09/2026, sur le backtest
  national du dépôt Veillor.com, docs/protocole_backtest_20260914.md et
  mesures_20260914.md) : LE DÉCLENCHEUR ET LES LECTURES. Mesuré à
  l'échelle nationale sur l'historique des transmissions au registre :
  l'âge du dirigeant seul ne sélectionne rien, et le relais n'est pas un
  filtre. DÉCISION : le déclencheur d'un dossier est un ACTE DÉPOSÉ ET
  DATÉ ; âge, détention et relais sont des LECTURES qui pèsent, jamais des
  portes. Le site le dit. AUCUN résultat chiffré du backtest n'est publié,
  et rien n'est préparé pour lui : ni page Mesure, ni question de FAQ, ni
  article, ni la phrase « dix-huit mois ».
  v72, LE FILTRE. L'intro dit « un déclencheur, quatre lectures ». Le fait
  daté passe EN TÊTE de la toise, suivi du périmètre, du dirigeant, de la
  détention et du relais ; la destination reste le dossier. Le relais est
  écrit « une lecture, pas un filtre ». La toise ne portait déjà ni étape
  d'âge (sortie en v45) ni effectif de cascade : rien à retirer, l'ancrage
  Bpifrance reste. Le « 45 ans » de l'intro est un exemple dans une phrase
  de Vincent, pas un chiffre mesuré : il vaut par décision, comme le
  « dix-huit mois » de la v60. Les « num » des crans ne sont que des clés
  React depuis la v51 et suivent le nouvel ordre.
  v73, LA MÉTHODE, étape 02 : les critères sont MESURÉS sur l'historique
  des transmissions au registre, à l'échelle nationale, et ce que la
  mesure dit est publié, y compris quand un critère ne tient pas. La
  phrase v60 « testés avant d'être retenus » est morte.
  v74, LE SPÉCIMEN. Le déclencheur entre dans la chronologie, « 03 / 2026
  Transformation en SAS, titres rendus cessibles, acte déposé », et la
  vérification de juillet dit « aucun mouvement de contrôle à 24 mois ».
  Les deux lignes datées de 2023 et de mars 2026 portent la marque vin :
  ce sont deux actes déposés. Les 63 ans du dirigeant restent, tout reste
  fictif et marqué tel. La cascade CSS de la frise gagne sa sixième ligne.
  v75, CE QUE NOUS NE FAISONS PAS : sous « Scores prédictifs », « Des
  faits datés, et des critères mesurés. Aucun score livré. » Le mot est la
  variable de mise en page de cette bande (v60b) : la hauteur se remesure
  sur le build.
  v76, LA NOTICE. La finalité, page Confidentialité, ne décrit plus la
  sélection par l'âge ni par l'absence de relais : elle décrit l'acte
  déposé, puis les lectures. « Son âge » RESTE dans les données traitées,
  l'âge est lu, il n'est plus une porte, et une notice liste ce qui est
  traité. Les trois articles d'Analyses ne sont pas touchés.
- Amendement v77 (arbitrage Vincent, 14/09/2026) : L'ÂGE N'EXPLIQUE PLUS LA
  VAGUE. L'article « La vague de transmission des PME françaises » est
  retouché a minima, deux phrases, aucun chiffre ajouté : le standfirst
  devient « Une génération de dirigeants de PME devra transmettre. », et
  le premier paragraphe perd « arrive à l'âge de la retraite » et « parce
  qu'elle tient à l'âge des dirigeants et non au cycle » (devenu « elle ne
  tient pas au cycle »). Le constat démographique et le volume restent, le
  paragraphe sur l'absence de relais reste. Le standfirst est une donnée
  unique de analyses.ts : l'index de l'accueil, la meta description,
  l'OpenGraph et le JSON-LD Article en dérivent, vérifié sur le HTML.
- Amendement v78 (arbitrage Vincent, 14/09/2026) : L'EXCEPTION v71 EST
  LEVÉE. La mention de l'enveloppe s'écrit « Personnel et confidentiel »,
  sur /dirigeants et dans la notice de l'article 14, et l'invariant du
  premier contact en tête de ce fichier suit. Plus aucun tiret cadratin
  sur le site, vérifié par grep sur les sept pages produites. La règle v8
  n'a donc plus d'exception ; les amendements v71 et suivants qui la
  décrivent restent en procès-verbal.
- Amendement v81 (arbitrage Vincent, 17/09/2026) : AUCUNE MENTION JURIDIQUE DU
  PREMIER CONTACT SUR LE SITE. Décidé après une journée où le premier contact a
  changé trois fois de forme (Imbrin seul ; deux modes au choix du client ; puis
  ceci). La règle : le site ne décrit ni qui contacte les dirigeants, ni comment,
  ni à quelles conditions. Il dit seulement, en section Conditions, que cela se
  décide ensemble à la signature du devis (« Premier contact · Au devis »). Les
  conditions viendront de la note de l'avocat et vivront dans une annexe signée
  avant la première remise nominative, pas sur le site. Nous ne répondons pas de
  la façon dont un client contacte : le site dit ce que le dossier est, pas
  comment un dirigeant est contacté.
  CE QUI CHANGE, /dirigeants : quatre choses, qui nous sommes, pourquoi vous
  pouvez être contacté, un message suffit pour refuser et le refus est respecté,
  contact ; les trois « possibilités », le pli fermé, « nous vous écrivons
  personnellement » et « avant qu'un cabinet vous approche » sortent ; « Rien
  d'autre que ce que ces registres publient » (le dossier dit qui détient le
  capital, on ne promet donc pas « aucune donnée privée ») ; « Ce dossier ne
  s'appuie que sur ce que le registre laisse voir » ; « Le dossier vous concerne
  dans votre fonction de dirigeant, jamais à titre privé » ; la liste des sources
  est la même que dans la notice, SIRENE et BODACC compris.
  CE QUI CHANGE, notice : forme minimale obligatoire, finalité (sans procédure de
  contact), données, origine (même liste de sources), destinataires (« nos
  clients sous contrat, cabinets de conseil ou acquéreurs »), transferts, durées,
  droits, CNIL, contact ; « le dossier concerne le dirigeant en sa qualité de
  dirigeant » remplace « le dirigeant est contacté ».
  CE QUI CHANGE, Conditions, alignée sur la page « Comment je travaille » remise à
  un cabinet le 18/09 : « Facturation · Au mois · Un mois sans dossier livré n'est
  pas facturé » remplace « Pendant le contrat · Un seul cabinet », la grille garde
  quatre valeurs ; l'exclusivité passe dans le texte de l'origination, « pour un
  client, sur un périmètre, pendant une durée fixée au devis » ; aucun fee, aucune
  protection. La section « Offre publiée, 17/09/2026 » est complétée en ce sens.
  CE QUI NE CHANGE PAS : l'invariant de tête, comme pratique d'Imbrin ; le
  vocabulaire proscrit de /dirigeants (v68) ; la liste blanche des chiffres ; les
  amendements v59 à v78, procès-verbaux ; « un mois » et « trois mois ». Aucune
  balise de version, aucun journal, aucune liste de destinataires sur le site : la
  proposition de mission ne dépend pas du site, sa garde porte sur la remise, dans
  le dépôt de production. Les textes « deux modes » du même jour, jamais commités,
  sont archivés hors de ce dépôt.
  VÉRIFIÉ SUR LE HTML PRODUIT : /dirigeants et /confidentialite sans « pli fermé »,
  « personnellement », « jamais par vos équipes », « écrit d'abord », « avant
  qu'un cabinet » ; « premier contact » n'apparaît qu'en Conditions (« au devis »)
  et dans la bande du dossier (« que l'associé lit avant le premier contact »).
  COMPLÉMENT (arbitrage Vincent, 17/09/2026, dernier changement avant le
  rendez-vous du 18/09) : la bande du dossier dit « que l'associé lit en
  premier ». « Premier contact » n'apparaît donc plus qu'en Conditions, « au
  devis ». Aucune autre modification du site avant la fin du rendez-vous.
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
  La composition centrée du fondateur, l'enveloppe pleine largeur de la FAQ et
  la grille 2×2 des engagements ont été faites sous le régime 2. Les sections
  entonnoir, dossier, offre et méthode sont passées par le régime 1, leurs
  planches sont à la racine (MAQUETTE-V15-*.html) et font foi sur ce qui a été
  validé. Exception : MAQUETTE-V15-B2-ENGAGEMENTS.html est une ARCHIVE, elle ne
  décrit plus le code depuis la refonte v17 (voir l'amendement Typo). Ne pas
  s'en servir pour « remettre la section conforme à sa planche ».

## Direction artistique V80, « blanc, encre, une seule grotesque » (arbitrage Vincent, 17/09/2026)
REMPLACE la DA v7 « Sanjaya / sombre » ci-dessus. Les amendements v7 à v78
restent en procès-verbal : ils ne décrivent plus le code, ils disent pourquoi
il a été fait ainsi et ce qui a déjà été essayé. Les planches
MAQUETTE-V80-ACCUEIL.html (ordinateur, 1440 px) et
MAQUETTE-V80-ACCUEIL-MOBILE.html (390 px), à la racine, FONT FOI sur la page
d'accueil : mêmes couleurs, mêmes tailles, mêmes espacements, même copy, même
ordre des sections. Zéro latitude de design : ce qui n'est pas dans la planche
n'existe pas. Le brief du chantier est PROMPT-CC-V80.md, à la racine. La
leçon v60 tient : une planche fait foi sur la forme et les couleurs, jamais
sur une hauteur ni une largeur de texte, qui se remesurent sur le build.
- PALETTE. REMPLACÉE PAR LA V83, voir « LA PALETTE V83 » à la fin des lots :
  plus aucun vert nulle part, fond blanc cassé, encre et gris anthracite. Ce
  qui suit est le procès-verbal de la palette V80, il ne décrit plus le code.
  Fond blanc #FFFFFF. Encre #16201C : texte, bande noire du dossier,
  pied de page. Vert #1E3A32 : boutons, bande finale « Prendre rendez-vous »,
  filet épais de l'origination, région remplie de la carte. Filets #DCE1DD et
  #C9D0CC, lignes de tableau du dossier #EEF1EF. Gris de texte #2B3530 et
  #56605B. Sur fonds sombres : #DDE5E1, #B9C6C0, #9AA7A1, et #C9D2CD pour les
  liens du pied. Le hero vidéo reste plein écran et sombre : c'est la seule
  bande sombre en tête, avec la bande noire du dossier et le pied de page.
  Les tokens vivent dans globals.css sous leur nom français (--encre, --vert,
  --gris, --filet, --clair, --vin) ; les tokens de la DA v7 sont morts au lot 4.
- LE VIN À QUATRE ENDROITS. AMENDÉ PAR LA V83 : il en a sept, les trois qui
  s'ajoutent reprenant les emplois du vert où la couleur portait un sens. Ce
  qui suit reste vrai pour les quatre premiers. Exactement comme dans la
  planche : le soulignement des liens texte sur fond blanc
  (text-decoration-color #8E2438, le texte reste encre ; #B32E46 sur le hero ;
  blanc sur la bande verte), les trois numéros de la méthode, la mention
  « Confidentiel » de la couverture, et dans le dossier lui-même les titres de
  rubriques et le « Confidentiel » du pied. Pas de bouton, pas d'aplat, pas de
  filet en vin. Sur les fonds sombres, #8E2438 et #B32E46 ne composent jamais
  du texte (contraste insuffisant), seulement un soulignement. Le vert garde
  les boutons, la bande finale et l'offre.
- TYPOGRAPHIE. Une seule famille, Hanken Grotesk, via next/font/google, en
  400, 500 et 600, romain. Fraunces, Spectral et Cutive Mono sortent du site,
  image OpenGraph comprise : ne pas les réintroduire. Les trois rôles de
  globals.css restent (--f-display, --f-corps, --f-label) et pointent tous sur
  Hanken. Plus aucune capitale espacée en mono, plus aucun mot en italique
  dans un titre, plus aucun point médian hors pied de page. L'axe WONK (v55,
  v58) et l'alerte v55 sur les largeurs en ch n'ont plus d'objet : les
  largeurs V80 sont celles de la planche.
- STRUCTURE DE L'ACCUEIL, dans cet ordre. Hero vidéo plein écran (en-tête
  transparent par-dessus, bloc de texte en bas à gauche, légende en bas à
  droite). « Ce que fait Imbrin Research » (intro, rangée de quatre icônes au
  trait, sans cadre ni fond). « Le dossier d'approche » (bande noire,
  description, couverture cliquable, bouton qui ouvre le dossier en popup).
  « Méthode » (trois étapes numérotées, numéros en vin). « Conditions »
  (l'origination sous un filet vert épais, le mandat de recherche en
  dessous sous un filet fin ; depuis la v82, l'origination en panneau
  d'offre, titre, « Au devis », six gains cochés et six termes, le mandat
  en tableau réglé, et non plus en quatre grandes valeurs). « À
  propos » (portrait,
  texte, parcours du fondateur et coordonnées ; la société et le siège en
  sont sortis à la v82, ils sont aux mentions légales). « Analyses »
  (trois colonnes, sans date).
  « Prendre rendez-vous » (bande verte, seul bouton commercial du site,
  « Choisir un créneau »). Pied de page noir avec l'emblème clair.
- LE HERO. public/imbrin.mp4 avec public/imbrin-poster.jpg, autoplay muet en
  boucle, playsinline, object-fit cover, hauteur 100svh (repli 100vh), voile
  UNIFORME rgba(6,10,8,.16) sur ordinateur et .22 sur mobile, jamais de
  dégradé, jamais de zoom, aucun filtre. Sous prefers-reduced-motion la vidéo
  ne se lance pas et le poster reste. L'en-tête est transparent sur le hero
  (emblème clair, nom en blanc, navigation en blanc), puis devient fixe, blanc
  et opaque (emblème encre, texte encre, filet #DCE1DD en bas) dès que le
  visiteur a quitté le hero. Sur mobile, le bouton « Menu » ouvre un panneau
  plein écran avec les six entrées et les coordonnées ; le corps ne défile
  plus tant qu'il est ouvert. L'arbitrage v64 (hero excentré, texte aux bords
  de l'écran) survit dans la planche : 48 px de bord contre 48 px de padding
  dans un conteneur de 1200 px pour les sections.
  v82 (arbitrage Vincent, 17/09/2026, après la mise en ligne) : SUR TROIS
  POINTS LE HERO S'ÉCARTE DE LA PLANCHE, voir « RETOUCHES v82 » dans les
  lots. Le titre fait 48 px sur deux lignes (30 à 33 px sur téléphone),
  coupé après « sell-side », et le bloc de texte remonte de 52 px ; les
  éléments apparaissent l'un après l'autre comme en V78, sauf le titre,
  visible d'emblée (le LCP l'exige, voir les lots) ; la vidéo est un
  seul fichier, chargé et lancé par le HTML. Le voile uniforme, l'absence
  de zoom et de filtre ne changent pas.
- L'EMBLÈME. public/emblem-encre.png (traits sombres, pour les fonds clairs) et
  public/emblem-clair.png (traits clairs, pour les fonds sombres) remplacent
  logo-imbrin.png et logo-dossier.png dans les composants. Les anciens
  fichiers RESTENT dans public/ : la signature mail pointe encore dessus.
  L'image OpenGraph lit emblem-encre-300.png, pas la source de 520 px :
  voir « MISE EN LIGNE, 17/09/2026 » dans les lots.
- LES ICÔNES. Les quatre SVG inline de la planche (plaque de cabinet, carte de
  France avec la région remplie en vin depuis la v83, registre, chemise à
  sangle), dans un composant Icones.tsx, aria-hidden, currentColor. Elles
  s'animent AU SURVOL depuis la v84, voir « LE MOUVEMENT DES ICÔNES » à la
  fin des lots. La carte vient de
  src/components/carte/france-paths.ts simplifié. C'est la seule dérogation
  à « aucune icône nulle part » (v12, v51), décidée par le brief V80 : quatre
  icônes au trait, sans cadre ni fond, à cet endroit et à lui seul.
- LE POPUP DU DOSSIER. Un vrai <dialog> HTML ouvert par showModal() : focus
  piégé, Échap, aria-labelledby, fermeture au clic sur le voile et sur
  « Fermer », retour du focus sur l'élément déclencheur, corps non défilant
  pendant l'ouverture. Entrée conforme à la planche (voile en fondu 0,28 s,
  page qui monte de 22 px en 0,4 s), coupée sous prefers-reduced-motion. Huit
  rubriques, dans copy.ts, présentes dans le DOM sans JavaScript. Le lien
  « Version PDF » ne s'affiche que si public/specimen-imbrin.pdf existe : pas
  de lien mort. L'interdit « popup/chatbot » vise les fenêtres non
  sollicitées ; ce dossier ne s'ouvre qu'au clic du visiteur, et le brief V80
  le demande.
  v87 (arbitrage Vincent, 18/09/2026) : LES HUIT RUBRIQUES N'EXISTENT PLUS,
  le popup montre le vrai dossier, les deux pages du PDF en images dans un
  cahier qu'on tourne ; voir « LE CAHIER, v87 » à la fin des lots.
- CE QUI DISPARAÎT DE L'ACCUEIL : Entonnoir (la toise), NeFaitPas, Faq,
  BarreAction (le CTA mobile), Reveal (plus aucune animation d'entrée, ni
  .rev ni .mask, ni séquence de chargement), IconesOffre, CarteFrance si elle
  n'est plus montée, et le viseur interactif du dossier avec sa lecture
  automatique. Les composants et le CSS mort qui ne servent qu'à eux sont
  supprimés. Le contenu de la FAQ ne se perd pas : la reconduction est dans
  Conditions, le RGPD est sur la page Confidentialité.
- CE QUI NE CHANGE PAS : la charte d'honnêteté et la liste blanche des
  chiffres (le spécimen est fictif et le dit), l'invariant du premier contact,
  la page /dirigeants, zéro tiret cadratin ni demi-cadratin, brand.ts seule
  source des constantes, le JSON-LD, le sitemap, robots.ts, l'image OpenGraph
  (repeinte en blanc, encre, emblème encre), le lien Calendly, « Site sans
  traceurs ». Les crochets [Raison sociale], [Adresse du siège], [Parcours du
  fondateur] de la planche sont des EMPLACEMENTS : À propos lit brand.ENTITY,
  et le parcours reste une chaîne vide, masquée tant qu'elle n'est pas remplie.
- CONTRADICTION SIGNALÉE, NON TRANCHÉE : l'ombre portée du popup
  (0 30px 80px -30px rgba(0,0,0,.6)) est dans la planche et contredit
  « shadow-md et au-delà » des interdits absolus. La planche est portée telle
  quelle ; à arbitrer devant l'écran.
- LOT 1, FAIT LE 17/09/2026 : hero, en-tête, pied de page, menu mobile.
  Hors planche, décidé au lot et à juger sur pièce : l'état FIXE de
  l'en-tête garde la composition de la planche avec un rembourrage
  symétrique de 14 px (12 px sur téléphone), un fond blanc, l'encre et le
  filet #DCE1DD ; le passage est décidé par un IntersectionObserver posé
  sur le hero, jamais par un écouteur de défilement. Le PANNEAU du menu
  mobile est blanc, plein écran : en tête la marque en encre et un bouton
  « Fermer » (44 px, filet encre, rayon 2 px), puis les six entrées en
  27 px / 500 sur filets #DCE1DD sous un filet encre, et en bas les
  coordonnées, libellés en #56605B, numéro et adresse soulignés vin. Le
  bouton « Menu » porte aria-expanded et aria-controls, Échap ferme, le
  corps est bloqué, la tabulation reste dans le panneau, le focus revient
  au bouton sauf quand c'est un lien qui a fermé. La VIDÉO n'a ni autoplay
  ni preload="auto" : preload="metadata", poster préchargé depuis le
  <head> (c'est l'élément LCP), et VideoHero.tsx appelle play(), muet,
  hors prefers-reduced-motion. Le contour de focus est blanc sur le hero
  et sur le pied, encre partout ailleurs. L'identité juridique (raison
  sociale, SIREN) quitte le pied, la planche ne l'a pas : elle vit aux
  mentions légales et revient dans À propos au lot 3. Le logo du JSON-LD
  Organization passe sur emblem-encre.png (520 px ; logo-imbrin.png était
  sous le minimum de 112 px), le reste du JSON-LD ne change pas.
  POIDS SIGNALÉ, à traiter au lot 4 : les deux emblèmes font 357 et 381 Ko
  pour des rendus de 30 à 132 px. Solution envisagée : des variantes
  réduites générées depuis les fichiers sources (sharp en dépendance de
  développement), sans toucher aux fichiers déposés.
- LOT 2, FAIT LE 17/09/2026 : le service et ses icônes, la bande du
  dossier et son popup, la méthode. Trois sections portées au pixel des
  planches, mesurées sur le build, entre le hero et les six sections v7
  qui restent jusqu'au lot 3.
  LES ICÔNES vivent dans Icones.tsx, quatre SVG inline en currentColor,
  aria-hidden, sans cadre ni fond ; le tracé de la carte est dans
  carte/france-icone.ts, tracé pour tracé celui de la planche, une seule
  région remplie en vert. LE POPUP est un <dialog> natif (showModal) :
  focus piégé et Échap par le navigateur ; ajoutés ici, le corps bloqué,
  la fermeture au clic sur le voile (le dialog EST le voile, le papier est
  son enfant), le focus rendu au déclencheur qui a ouvert, couverture ou
  bouton, et l'ouverture sur « Fermer » comme dans la planche. SANS OMBRE
  PORTÉE : arbitrage Vincent, la contradiction signalée au lot 0 est
  tranchée dans le sens de l'interdit. Le dossier est rendu par le
  serveur, huit rubriques typées dans copy.ts (RubriqueDossier : cinq
  formes), et le noscript du layout le sort de sa boîte pour qu'il se lise
  sans JavaScript. Le lien « Version PDF » n'existe que si
  public/specimen-imbrin.pdf est sur le disque au build (Dossier.tsx,
  enveloppe serveur) : déposer le fichier suffit. Le spécimen dit qu'il
  est fictif à quatre endroits visibles, la rubrique 7 ne porte que des
  statuts, aucune coordonnée.
  HORS PLANCHE, décidé au lot : entre 761 et 1000 px, la rangée d'icônes
  passe à deux colonnes, la bande du dossier à une, la méthode à deux ;
  sur téléphone la couverture précède le bouton par display:contents sur
  le bloc de texte et un ordre CSS, le DOM ne bouge pas. Les sections
  blanches DÉCLARENT leur couleur de texte (color: var(--encre)), le body
  portant encore l'encre claire de la DA v7 jusqu'au lot 3 : sans cela
  les h3 sortaient en blanc sur blanc, vu à la comparaison. Le texte se
  coupe parfois autrement que dans la planche : text-wrap: pretty (v29)
  reste posé sur le body, la planche ne l'a pas.
  SIGNALÉ, NON TRANCHÉ : le lien « La méthode en détail » de la planche
  pointe sur la section elle-même (#methode), il n'y a pas de page de
  méthode ; porté tel quel. Même question au lot 3 pour « Toutes les
  analyses ».
- LOT 3, FAIT LE 17/09/2026 : les conditions, à propos, les analyses,
  prendre rendez-vous, et la suppression des composants morts. L'accueil
  est désormais entièrement V80, dans l'ordre des planches.
  CONDITIONS, deux corrections de copy (arbitrage Vincent) : « sans limite
  de nombre » sort de l'intro de l'origination ; la protection dit « La
  rémunération reste due sur tout mandat signé avec une société issue
  d'un dossier livré, contrat en cours ou non. » À PROPOS lit l'identité
  juridique dans brand.ENTITY, composée dans copy.ts pour que les
  insécables passent ; le parcours du fondateur est une chaîne vide, non
  rendue ; le nom du fondateur vit en constante dans copy.ts et nourrit
  le JSON-LD Person. ANALYSES : trois colonnes, titres et chapeaux de la
  planche écrits dans analyses.ts (l'article 3 s'intitule désormais
  « L'origination dans les cabinets de cession », son corps ne change
  pas), slugs et datePublished intacts, chaque « Lire » ouvre sa page.
  RENDEZ-VOUS : bande verte, « Choisir un créneau » ouvre le Calendly de
  brand.ts, seul bouton commercial du site.
  LIENS SANS PAGE, tranchés : « La méthode en détail » et « Toutes les
  analyses » ne sont pas repris. Aucun lien ne pointe sur sa propre
  section. Le premier reviendra avec une vraie page.
  SUPPRIMÉS, plus rien ne les importait : Entonnoir, NeFaitPas, Faq,
  BarreAction, Reveal, IconesOffre, CarteFrance, Diamond, Offre,
  Fondateur, CtaFinal, carte/france-paths.ts ; le balisage FAQPage ;
  regions et RegionStatus de brand.ts ; les blocs entonnoir, neFaitPas,
  offre, fondateur, faq, final, barre et carte de copy.ts. Le CSS qui ne
  servait qu'à eux part avec eux : globals.css passe de 85 à 50 Ko
  (97 Ko avant le chantier). RESTENT pour le lot 4, parce que les pages
  intérieures les lisent encore : les tokens v7 de la racine, body, .wrap,
  .cta, .kicker, .statement, .label, .display, .ap-*, .dir-*, LogoImbrin,
  et scripts/build-map.mjs qui générait la carte morte.
  AJOUTÉ, hors planche, à cause de l'en-tête fixe du lot 1 : chaque
  section cible d'une ancre porte scroll-margin-top de la hauteur de la
  barre, 63 px mesurés (69 sur téléphone), sinon un saut depuis le menu
  posait le titre sous la barre. Vu à la comparaison.
  SIGNALÉ, NON TRANCHÉ : le libellé « Abonnement » au-dessus de
  « L'origination » est dans la planche ; la section « L'offre v15 » de
  cette charte proscrit le mot. Porté tel quel, à arbitrer.
- LOT 4, FAIT LE 17/09/2026 : les pages intérieures, le nettoyage, les
  emblèmes, l'accessibilité, le mobile, Lighthouse.
  « ABONNEMENT » SORT : le libellé de la planche devient « En continu »,
  en miroir de « À la mission » ; la règle de vocabulaire de l'offre prime
  sur la planche. Les autres écarts de vocabulaire relevés sur la copy
  V80 sont listés au rapport du lot, non appliqués.
  PAGES INTÉRIEURES, sans planche : elles reprennent l'échelle de
  l'accueil (titre de section, libellé, lien souligné de vin) dans une
  colonne de lecture de 580 px, soit 70 caractères par ligne pleine en
  18 px, interligne 1,7, MESURÉ sur le texte réel des articles (la
  convention « 68ch » du CSS, qui compte des zéros, aurait donné 685 px
  et 83 caractères). Intertitres en 500 quand les articles en auront,
  aucune date affichée. L'en-tête y est fixe et blanc dès le chargement
  (prop « fixe »), la page réserve sa hauteur ; le pied est rendu par
  chaque page et non plus par le layout. Le libellé « Analyses » au-dessus
  du titre d'article est retiré : le lien de retour porte déjà le mot.
  /DIRIGEANTS garde ses règles absolues (v68) : en-tête SANS navigation
  ni menu (les six entrées mènent aux conditions, qui sont l'offre), pied
  SANS la colonne « Le site », pour la même raison. La marque en tête de
  page, qui tenait lieu d'en-tête, est portée par l'en-tête lui-même. Le
  point médian n'est plus posé dans le JSX entre les deux liens du pied ;
  il reste dans la chaîne « entite » de copy.ts, contenu inchangé, à
  arbitrer (la V80 ne veut plus de point médian hors pied de page).
  NETTOYAGE : les tokens v7, le body v7 et son overflow-x caché, .wrap,
  .cta, .kicker, .statement, .label, .display, .ap-*, .dir-*, LogoImbrin,
  scripts/build-map.mjs et scripts/data, la dépendance d3-geo et le script
  build:map, les extensions Tailwind (Tailwind ne sert plus que son
  socle), les couleurs déclarées par section au lot 2 et 3, devenues
  redondantes une fois le body sur blanc et encre. logo-imbrin.png et
  logo-dossier.png restent dans public/. Aucun débordement horizontal à
  360 ni à 390 sur les cinq pages, vérifié sans filet.
  EMBLÈMES : scripts/emblemes.mjs (sharp, dépendance de développement,
  « npm run emblemes ») tire des deux fichiers déposés des variantes à
  deux fois le rendu, 72 et 88 pour l'en-tête, 208 et 264 pour le pied,
  72 pour la couverture et le spécimen ; Embleme.tsx choisit par emploi,
  en srcset. Les fichiers de 520 px restent pour le JSON-LD et l'image
  OpenGraph. Les deux fichiers de 520 px pesaient 738 Ko par page ; les
  variantes servies pèsent de 35 à 110 Ko selon la densité d'écran, dont
  10 à 14 au premier écran.
  ACCESSIBILITÉ : lien d'évitement « Aller au contenu », premier élément
  focusable de chaque page, visible au focus seulement ; contour de focus
  encre à 4 px partout, blanc sur les fonds sombres ; scroll-padding-top
  sur html (63 px, 69 sur téléphone) pour que ni une ancre ni un focus
  ne passent sous la barre fixe, il remplace le scroll-margin-top du lot
  3 ; le nom accessible de la couverture commence par « Lire le dossier
  spécimen » puis porte son texte visible (l'aria-label seul de la
  planche échouait l'audit label-content-name-mismatch). Parcours clavier
  réel vérifié sur les cinq pages. Contrastes calculés sur chaque couple
  de couleurs des planches : tous AA, le plus bas étant 6,5:1 (#56605B sur
  blanc) et 3,1:1 pour le souligné vin du hero, non textuel.
  LE TEXTE DU HERO SUR LA VIDÉO, mesuré sur le poster et sur 33 images du
  clip (une toutes les 0,25 s, voile compris) : à 1440, le pixel le plus
  clair de la zone du texte reste au-dessus de 9,7:1 ; à 390, sur 13
  images, quelques pixels de reflets passent sous 4,5:1 (pire : 1,5:1 à
  5,75 s), sur au plus 2 % de la zone, la médiane restant à 20:1. NON
  CORRIGÉ, sur consigne : captures fournies, arbitrage à rendre.
- LOT 4 BIS, FAIT LE 17/09/2026 : copy de l'offre, ombre du hero, vidéo
  mobile. COPY, en application de « L'offre v15 » : la carte
  « Facturation » (« Un mois sans dossier livré n'est pas facturé ») est
  SUPPRIMÉE, les trois valeurs restantes passent en grille de trois ; le
  plancher mensuel ne survit plus nulle part sur le site, l'entrée du
  BACKLOG est retirée, et les deux textes que la section v15 signalait
  (chute du filtre, chapô de l'appel final) étaient morts au lot 3 avec
  leurs sections. La reconduction mensuelle reste celle de la planche, le
  contrat sera confirmé ; la charte n'est pas touchée. « La fiche au
  registre » (méthode, étape 3) devient « l'extrait du registre ». La bande
  du dossier dit « En rendez-vous, un dossier complet est parcouru avec
  vous, page à page. » /dirigeants porte ses propres description,
  OpenGraph et Twitter, repris de son chapô.
  L'OMBRE DU HERO, sous 761 px, sur le seul texte du hero :
  text-shadow 0 1px 3px rgba(6,10,8,.5), ni dégradé ni voile plus sombre.
  MESURÉ lettre contre fond (pixels du fond qui touchent un glyphe, texte
  transparent pour lire le fond sous l'ombre), sur les 13 images
  relevées au lot 4, vidéo mobile : sans ombre le pire cas est 2,22:1 à
  5,75 s, avec l'ombre 2,56:1 au même instant ; cinq images restent sous
  4,5:1 (4,75 à 5,75 s), les huit autres passent, au mieux 14,3:1. La
  méthode du lot 4 comptait tout pixel de la zone (1,5:1) ; celle-ci ne
  compte que le bord des lettres, c'est elle qui vaut désormais. Capture
  du pire cas dans V80-captures/lot4bis. À arbitrer.
  LA VIDÉO MOBILE : scripts/video-mobile.mjs (ffmpeg-static, dépendance
  de développement, « npm run video-mobile ») tire de public/imbrin.mp4 un
  recadrage centré 3:4 en 626 × 834 à la résolution d'origine, H.264
  yuv420p, sans audio, +faststart, toutes les images gardées :
  public/imbrin-mobile.mp4, 403 Ko, CRF 33, aq-mode 3. Jugé à trois fois
  l'échelle : à 33 les points du plumage restent nets et le noir ne se
  bande pas, à 35 (320 Ko) les points bavent, à 31 on dépasse 500 Ko.
  VideoHero.tsx choisit la source UNE FOIS, par
  matchMedia('(max-width: 760px)'), avant de lancer la lecture ; le HTML
  ne porte plus de source, seulement le poster, commun aux deux.
- LOT 4 TER, FAIT LE 17/09/2026 : l'offre publiée et l'ombre du hero.
  CONDITIONS : les trois valeurs du bloc « L'origination » sont celles de
  l'amendement « Offre publiée, 17/09/2026 » (plus bas) : « Pour
  commencer, Un mois », « Ensuite, Trois mois », « Pendant le contrat, Un
  seul cabinet ». Les intros et le bloc du mandat ne changent pas. Plus
  aucune mention sur le site du retainer, du fee, de la part des
  honoraires ni de la protection de vingt-quatre mois, métadonnées et
  JSON-LD compris, vérifié sur le HTML des cinq pages ; le « 24 mois » du
  spécimen est une fenêtre de vérification au registre, pas la protection,
  il reste. Le commentaire de brand.ts qui décrivait l'ancienne structure
  est mis à jour, la note du BACKLOG aussi : ce qui reste à trancher ne
  concerne plus que le contrat.
  L'OMBRE DU HERO, remesurée ÉLÉMENT PAR ÉLÉMENT avec les bons seuils :
  le titre fait 27 px, c'est du grand texte au sens des WCAG, seuil 3:1 ;
  le paragraphe (15 px, #DDE5E1) et le lien (15 px, blanc) restent à
  4,5:1. Mesure lettre contre fond, luminance réelle de chaque texte, sur
  les treize images de la vidéo mobile. Sans ombre : titre 2,22:1,
  paragraphe 5,42:1, lien 19,7:1 ; seul le titre échoue, sur cinq images.
  Réglage retenu, le plus léger qui tient le titre sur les treize, monté
  par petits pas : 0 1px 3px rgba(6,10,8,.5), 0 0 14px rgba(6,10,8,.45),
  0 0 28px rgba(6,10,8,.4), le même sur les trois éléments, sous 761 px
  seulement, ni dégradé, ni bande, ni voile plus sombre. Avec : titre
  3,07:1 (pire à 5,75 s), paragraphe 6,56:1, lien 20:1. Les paliers
  intermédiaires : la couche 14 px à .45 seule donne 2,88 (une image
  sous le seuil), la couche 28 px à .3 donne 3,00 tout juste sous le seuil
  sur une image. Captures avant et après dans V80-captures/lot4ter.
- LOT 5, FAIT LE 17/09/2026, dernier avant la relecture de la préview.
  PREMIER CONTACT : une seule mention sur le site, et elle est
  commerciale. Conditions, bloc « L'origination », quatrième valeur après
  « Pendant le contrat » : « Premier contact, Au devis, Qui contacte les
  dirigeants, et selon quelles modalités, se décide ensemble à la
  signature. » Grille de quatre colonnes égales sur ordinateur, valeurs
  empilées entre filets sur téléphone. La bande du dossier dit « que
  l'associé lit avant le premier contact ». /dirigeants, la notice de
  confidentialité, l'invariant en tête de ce fichier et l'entrée RGPD du
  BACKLOG ne changent pas ; aucune mention juridique n'est ajoutée.
  SPÉCIMEN, rubrique « Sources » : la ligne « Information des personnes :
  article 14 du RGPD… » est retirée, le reste ne change pas.
  ARTICLES : l'appel de pied (« C'est exactement ce que nous faisons… »
  et le lien « Réserver un échange ») est remplacé par la bande « Prendre
  rendez-vous » de l'accueil, à l'identique, entre l'article et le pied.
  Ni /dirigeants ni les pages légales ne la reçoivent. La constante CTA
  de copy.ts n'avait plus d'emploi, elle part.
  CONTRÔLE AVANT FUSION, sur le build : build et lint sans erreur ni
  avertissement ; 74 liens internes vérifiés sur les sept pages, ancres
  comprises, aucun cassé ; aucune trace de Fraunces, Spectral, Cutive
  Mono ni des tokens v7 dans le CSS et le JS produits ; aucun tiret
  cadratin ni demi-cadratin dans les textes rendus ; aucune mention de
  retainer, fee, honoraires de succès, protection ni article 14 hors
  /confidentialite et /dirigeants ; Lighthouse mobile de l'accueil : voir
  le rapport du lot (référence à tenir 98/100/100/100).
- MISE EN LIGNE, 17/09/2026 : v80 fusionnée dans main sans avance rapide
  (4ca5e8e), la branche v80 conservée à 799aae7 comme point de retour. Les
  trois premiers déploiements Vercel ont ÉCHOUÉ, build vert, à l'étape de
  déploiement : « The Edge Function "opengraph-image" size is 1.1 MB and
  your plan size limit is 1 MB ». Cause : le fichier lu par fetch(new
  URL(..., import.meta.url)) dans une route Edge est EMBARQUÉ dans la
  fonction, et le lot 0 y lisait public/emblem-encre.png en 520 px, 357 Ko
  qu'un PNG ne compresse pas ; avec @vercel/og (deux wasm, 1,4 Mo bruts
  mais compressibles) le bundle faisait 1,07 Mo compressés. Le passage du
  dépôt en privé, soupçonné d'abord, n'y était pour rien : les statuts
  Vercel sur les commits GitHub le montrent. RÈGLE : tout fichier lu par
  l'image OpenGraph passe par une variante réduite du script emblemes.mjs,
  jamais la source ; l'encre a un 300 px pour cela (150 px dessinés, au
  double), bundle 0,84 Mo. Mesure locale sans Vercel : les entrées
  « files », « assets » et « wasm » de la fonction dans
  .next/server/middleware-manifest.json, sommées après gzip. La question
  v56 (sortir du runtime Edge, limite 50 Mo) reste ouverte, ce n'est pas
  le soir d'une mise en ligne qu'on la tranche.
- RETOUCHES v82, LE HERO (arbitrage Vincent, 17/09/2026, sur le site en
  ligne, branche v82). Vincent trouvait le texte « dans le coin, en petit »
  et la vidéo saccadée et pixellisée, alors qu'elle était parfaite en V78.
  LA VIDÉO, d'abord, et la cause est double. Le lot 4 bis avait retiré la
  source du HTML (preload="metadata", source posée par VideoHero.tsx après
  l'hydratation, puis play() forcé sur un tampon vide) : c'est la saccade
  au départ. Et il servait sous 761 px un recadrage de 626 px de large à
  407 kb/s, agrandi près de deux fois sur un écran de téléphone : c'est la
  pixellisation. RETOUR À LA MÉCANIQUE V78 : la source dans le HTML, avec
  autoplay, muted et preload="auto", un seul fichier (1112 × 834,
  1670 kb/s, 8 s) pour tous les écrans ; le composant ne garde que le
  muted forcé, le play() de rattrapage, prefers-reduced-motion et le
  repli poster. La variante mobile, son script (scripts/video-mobile.mjs,
  ffmpeg-static) et brand.MEDIAS.videoHeroMobile n'ont plus d'emploi. Ce
  qu'on rend au passage : le gain Lighthouse mobile du lot 4 bis, mesuré
  ci-dessous ; la vidéo passe avant le score.
  LE TITRE : même texte, 48 px en 500 sur deux lignes (la planche : 34 px
  sur une ligne), le bloc remonté de 52 px au-dessus de la légende, le
  paragraphe inchangé à 480 px. La coupure est fixée en em, pas en pixels :
  « pour les cabinets M&A » mesure 9,83 em et « Origination sell-side
  pour » 10,88 em, donc max-width 10,3 em coupe après « sell-side » à toute
  taille. Sur téléphone, clamp(30px, 8.5vw, 33px) : deux lignes de 360 à
  430 px de large, mesuré sur le build (à 36 px, trois lignes à 390). À
  remesurer si le titre change.
  L'APPARITION SÉQUENCÉE, reprise de la V78 : marque et navigation à
  0,15 s, paragraphe 0,55, lien 0,75, légende 1,4 s, 1,1 s chacun, en
  CSS pur (@keyframes apparition, « both »), sans classe posée par
  JavaScript ; rien sous prefers-reduced-motion ; le lien d'évitement
  n'est pas animé. LE TITRE N'EST PAS ANIMÉ, ET C'EST UNE RÈGLE : le
  poster et la vidéo couvrent tout l'écran et Chrome ne les compte pas
  pour le LCP ; le titre est le seul candidat, et un élément qui naît à
  opacité 0 n'est jamais retenu. Mesuré sur le build : titre animé,
  Lighthouse NO_LCP et performance 0 ; titre visible d'emblée, 98 avec le
  LCP sur le h1 à 2,3 s, la référence du lot 5. La vidéo revenue dans le
  HTML ne coûte donc rien au score. L'en-tête est visé à travers .hero
  pour que l'animation ne se rejoue ni au passage en fixe ni au retour en
  haut.
  Les interdits du hero V80 tiennent : voile uniforme, ni dégradé, ni
  zoom, ni filtre ; le retour de l'étalonnage et du voile en dégradé de la
  V78 n'a pas été demandé.
- RETOUCHES v82, LES CONDITIONS (arbitrage Vincent, 17/09/2026, branche
  v82, trois passages). Vincent : « du grand n'importe quoi, en
  disposition comme en compréhension ; l'objectif est de comprendre, un
  rendu original mais sobre ». Le diagnostic : les quatre grandes valeurs
  de la planche mettaient sur le même plan deux durées, une règle de
  facturation et une décision reportée, on n'y lisait pas le déroulé ;
  l'intro annonçait « deux façons de travailler ensemble » mais
  l'origination était mise en scène comme un titre et le mandat comme
  une note ; « au devis » revenait cinq fois. Et l'origination pèse bien
  plus que le mandat : la hiérarchie doit se voir.
  PROCÈS-VERBAL DES ESSAIS. (1) La feuille de conditions (aa34971) : un
  term sheet, une ligne par point ; lisible, « trop simpliste ». (2) Le
  tableau réglé (ec2566e, puis d519931 avec une clé dans chaque case) :
  une grille de douze colonnes dessinée par des filets, l'origination en
  case de tête avec ses durées en grand ; « stylé » mais « toujours
  difficile à lire », l'œil n'a pas de parcours dans une grille. Deux
  autres directions maquettées et écartées : la ligne du temps, la
  colonne fixe à six énoncés numérotés (captures A, B, F, G dans
  V80-captures/v82-conditions). Les icônes ont été écartées au passage :
  la charte n'en tolère qu'une rangée, celle du service, et des pictos
  sur des conditions commerciales sont le code du tableau de prix SaaS.
  FORME RETENUE, L'OFFRE (troisième passage, à la demande de Vincent :
  « une section type pricing, un tableau de gains avec les conditions,
  lisible, sans friction », pour l'origination seule). Une section de
  prix a un code que tout le monde lit sans effort : LE TITRE, LE PRIX,
  CE QUE VOUS OBTENEZ, LES CONDITIONS. L'origination est un seul
  panneau, filet vert de 3 px en tête et filet fin #C9D0CC autour (celui
  du bord de la couverture ; un panneau unique, pas une grille de
  cartes). À gauche : « En continu », le titre à 46 px, puis à la place
  du prix « Montants · Au devis » en vert à 34 px, « Chiffrés avant
  signature, après mesure de votre périmètre », et le pas suivant en
  lien texte souligné de vin, « Prendre rendez-vous », vers la bande
  (#contact). À droite : « Ce que vous recevez », six gains cochés à
  18 px en encre, un filet entre les lignes ; LA COCHE est un SVG inline
  de 18 px au trait dans le vert, un marqueur de liste et non une icône,
  aria-hidden. En pied du panneau, sous un filet : « Les conditions »,
  six termes sur trois colonnes, libellé gris et condition en encre :
  périmètre, engagement, résiliation, facturation, exclusivité, premier
  contact. Sous 1000 px le panneau empile ses deux colonnes et les
  termes vont par deux ; sous 761 px tout sur une colonne, 24 px de
  rembourrage. LE MANDAT DE RECHERCHE RESTE EN TABLEAU RÉGLÉ (Vincent :
  « qu'on va garder comme c'est ») : case de tête à 28 px et deux cases
  avec leur clé (« À la mission », « Hors exclusivité »), sous le filet
  d'encre fin. La note « ni conseil, ni négociation » ne bouge pas.
  LES TEXTES : les six gains sont des faits déjà publiés, redits à
  l'indicatif (veille en continu, dossier livré dès qu'il est vérifié,
  volume mesuré et annoncé avant tout engagement, premier mois sur
  pièces, périmètre réservé à un seul cabinet, mois sans dossier livré
  non facturé) ; les termes reprennent les phrases de l'offre publiée et
  du v81, le périmètre « défini ensemble au rendez-vous, mesuré au devis »
  reprend la règle v15. L'intro devient « Deux façons de travailler
  ensemble : l'origination, en continu, et le mandat de recherche, à la
  mission. » : la phrase sur les montants est partie à la place du prix.
  Vérifié sur le HTML produit : six gains, six termes, une seule mention
  du premier contact, aucune de retainer, fee, honoraires, protection,
  article 14, aucun tiret, aucun mot proscrit. Captures 1440, 900 et 390
  (conditions-offre-*) dans V80-captures/v82-conditions.
- RETOUCHES v82, À PROPOS (arbitrage Vincent, 17/09/2026, branche v82).
  La section parle du fondateur, pas de l'entité : les lignes « Société »
  (raison sociale, SIREN) et « Siège » sortent des coordonnées, elles
  sont aux mentions légales et n'ont rien à faire ici. Restent téléphone,
  email et LinkedIn, lus dans brand.ts. Le PARCOURS, emplacement vide
  depuis la planche, reçoit le paragraphe de Vincent, mot pour mot, à la
  première personne : « Je construis des produits de données depuis plus
  d'un an. En travaillant auprès de conseillers en gestion de patrimoine,
  j'ai vu le temps que coûte le repérage des sociétés à approcher. J'ai
  écrit le programme qui lit les registres à l'échelle nationale et je
  vérifie chaque dossier avant de vous le livrer. Vous avez un seul
  interlocuteur, du premier échange à la livraison. » « Plus d'un an » est
  une durée en lettres, comme « un mois », et ne contredit pas la liste
  blanche des chiffres. SECOND PASSAGE : le premier paragraphe était à
  la troisième personne (« a été fondé par… Il conduit lui-même… »), le
  second à la première ; Vincent a laissé le choix entre des guillemets
  et une seule voix, « prends une décision ». TOUTE LA SECTION EST À LA
  PREMIÈRE PERSONNE : c'est une page de présentation sous un portrait et
  un nom, des guillemets en auraient fait une citation rapportée sur son
  propre site. Le premier paragraphe se réduit à « J'ai fondé Imbrin
  Research, entre Paris et Bayonne. » ; « il conduit lui-même les
  échanges et la vérification » est parti, le parcours le dit déjà. Le
  nom ne figure plus dans le texte, il est sous le portrait, dans l'alt
  et dans le JSON-LD Person. Vérifié sur le HTML
  produit : ni SIREN de l'entité ni adresse du siège sur l'accueil, le
  paragraphe présent, aucun tiret. Captures 1440 et 390 dans
  V80-captures/v82-apropos.
- LA PALETTE V83, « blanc cassé, encre froide, vin » (arbitrage Vincent,
  17/09/2026, après la v82, en deux passes, voir V83b plus bas). LE VERT EST
  SUPPRIMÉ DU SITE. La palette est désormais un blanc cassé, une encre et des
  gris anthracite FROIDS, et le vin en pointes. Cet amendement PRIME sur le point PALETTE de la V80 et sur les
  planches MAQUETTE-V80-*.html, qui restent des archives : elles font encore
  foi sur les formes, les tailles et les espacements, PLUS SUR AUCUNE
  COULEUR. Ne pas « remettre la page conforme à sa planche » sur ce point.
  LE VERT N'ÉTAIT PAS QUE DANS --vert. Les quatre emplois déclarés (filet de
  tête du panneau d'offre, « Au devis », les coches, la bande de rendez-vous)
  étaient la partie visible ; les QUATORZE NEUTRES de la V80 étaient tous
  teintés de vert, #16201C, #2B3530, #56605B, #DCE1DD, #C9D0CC, #EEF1EF,
  #DDE5E1, #B9C6C0, #9AA7A1, #C9D2CD, #EDF0EC, #0A0E0C et les deux voiles en
  rgba(6,10,8). C'est de là que venait la dominante, pas des quatre aplats :
  retirer le seul --vert aurait laissé une page verte. Tous sont repris sur
  une teinte chaude neutre, À LUMINANCE CONSTANTE, et les contrastes de la
  planche sont tenus à un dixième près : #5C5751 sur le papier donne 6,57:1
  quand #56605B sur le blanc donnait 6,52 ; l'encre 15,98 contre 16,70 ; le
  vin 7,85 contre 8,54 ; le clair sur l'encre 13,59 contre 13,02 ; le plus bas
  de la page reste le gris-2 à 6,57:1. Tous AA, calculés couple par couple.
  LE FOND N'EST PLUS BLANC. --blanc est RENOMMÉ --papier et vaut #F7F5F2 : le
  nom ment à la première bascule (leçon v55), et le token sert aussi bien de
  fond de page que de texte sur l'encre, ce que « papier » dit et que
  « blanc » ne disait plus. Les cases du tableau du mandat, la couverture et
  le feuillet du popup le suivent d'eux-mêmes, ils le lisaient déjà.
  LE PIED DE PAGE PREND UN CRAN, --noir #121110, ET C'EST LA SEULE VALEUR
  AJOUTÉE. La bande de rendez-vous passe à l'encre, comme la bande du
  dossier ; sans ce cran elle se serait fondue dans le pied, qui la suit
  immédiatement, et la page se serait terminée sur une seule dalle noire de
  deux écrans. Le vin plein en bande a été écarté : l'arbitrage dit « juste
  des pointes », un aplat pleine largeur n'en est pas une.
  LES TROIS EMPLOIS DU VERT QUI PASSENT AU VIN, et pas un de plus : le filet
  de 3 px en tête du panneau d'offre, les six coches des gains, et la région
  remplie de la carte du service, seul aplat de couleur du site. Ce sont des
  marques, pas des surfaces. « AU DEVIS » PASSE À L'ENCRE et non au vin : un
  prix se lit, il ne se décore pas, et c'était le seul des quatre où la
  couleur ne portait rien.
  V83b, LE MÊME JOUR, ET C'EST UNE CORRECTION SUR PIÈCE : « on dirait des
  marrons, il faudrait des noirs et des gris plus tranchants ». La première
  reprise posait les quatorze neutres sur une teinte CHAUDE, au motif qu'elle
  irait avec un blanc cassé ; à l'écran les noirs viraient au brun, parce
  qu'un rouge supérieur au bleu de cinq valeurs se lit comme une couleur dès
  que la surface est grande, ce qu'une bande pleine largeur est. Ils sont
  repris sur une teinte FROIDE, trois valeurs de bleu AU-DESSUS du rouge, et
  les noirs descendent d'un cran, l'encre à #111213 et le pied à #0A0B0C. Le
  papier garde sa cassure mais perd sa crème, #F6F5F3. Les contrastes montent
  tous : l'encre à 17,21:1 contre 15,98, le gris à 12,86 contre 11,92, le
  clair sur l'encre à 14,87 contre 13,59, le gris-2 tenu à 6,57 par
  construction. LE VIN NE BOUGE PAS, et c'est le point : il devient la seule
  chaleur de la page, et une page froide la fait ressortir. LEÇON, elle vaut
  pour la prochaine palette : un neutre n'est neutre que sur un échantillon,
  sur un aplat il prend la teinte de son écart rouge-bleu. Choisir le sens de
  cet écart AVANT de poser les quatorze valeurs.
  L'IMAGE OPENGRAPH SUIT, précédent v18 et v55 : #F6F5F3, #111213, #55585B.
  VÉRIFIÉ SUR LE BUILD : build et lint sans erreur ni avertissement ; zéro
  occurrence de --vert, de --blanc et des quatorze hex V80 dans src/ ;
  captures 1440 et 390 des sept sections, du popup et de la jonction bande de
  rendez-vous / pied.

- LE MOUVEMENT DES ICÔNES, v84 (arbitrage Vincent, 17/09/2026, sur la
  planche MAQUETTE-V84-ICONES.html, régime 1). Les quatre icônes de la
  section service s'animent, ET SEULEMENT AU SURVOL DE LA SOURIS. Carte :
  LE BALAYAGE, le vin saute de région en région puis se pose sur la seule
  région retenue. Chemise : LA CHEMISE S'ÉCRIT, la sangle puis les lignes se
  tracent. Registre : LE TAMPON, le sceau se pose d'un coup, trop grand puis
  net. Cabinet : LA GRAVURE, la plaque se trace, les vis se posent, la
  gravure suit.
  CE QUI A ÉTÉ PROPOSÉ ET ÉCARTÉ, et c'est l'arbitrage : la planche
  recommandait LA CARTE SEULE, au motif qu'une rangée de quatre pictogrammes
  animés est le code du site SaaS, celui que la v54 a retiré de cette page, et
  que trois des quatre icônes n'ont rien à raconter dans le temps. Vincent a
  tranché pour les quatre, EN SURVOL SEULEMENT, et le survol répond
  précisément à l'objection : ce que la v54 a tué, c'est le mouvement À
  L'ENTRÉE DANS LE CHAMP, qui joue sans être demandé. Rien ne bouge au scroll.
  La page défile entièrement immobile, comme depuis la v54 ; le mouvement
  n'existe que sous la main du visiteur, ce que la doctrine de motion
  réclamait déjà en v20 (« tous DÉCLENCHÉS PAR L'UTILISATEUR »). La règle v54
  est donc tenue, pas contournée. Ne pas déclencher ces animations au scroll.
  ZÉRO JAVASCRIPT, et ce n'est pas une économie, c'est la garantie. Pas
  d'observateur, pas de classe posée, pas d'état : le survol met l'animation,
  la sortie l'enlève. La leçon v44 (un className recalculé par React efface ce
  que le DOM portait) ne peut pas mordre, rien n'est posé sur le DOM.
  L'ÉTAT DE REPOS EST L'ÉTAT FINAL, toujours. Hors survol, aucune icône ne
  porte dash, transform, opacité ni filtre : le dessin est celui de la planche
  V80, au pixel. Sans JavaScript, sur un écran tactile, sous un lecteur
  d'écran, il ne manque rien. Corollaire pour toute animation future d'icône :
  ne jamais animer depuis un état vide, l'état vide devient l'état servi.
  POINTEUR FIN SEULEMENT, (hover: hover) and (pointer: fine). Écarte le survol
  collant d'iOS, où une première tape lancerait une animation qui resterait
  ensuite accrochée. Sur téléphone la rangée est fixe, c'est l'arbitrage ;
  vérifié, la requête média est fausse à 390 px.
  LA CIBLE EST L'ENTRÉE ENTIÈRE (.service-entree), pas l'icône de 64 px : une
  cible de 64 px se rate, et le titre et le texte appartiennent au même objet.
  Aucun curseur pointeur n'est posé, ce n'est pas un bouton.
  DÉTAIL QUI FAIT LA SÉQUENCE, consigné parce qu'il se reprendra de travers :
  le balayage est en animation-fill-mode FORWARDS et non « both ». Avec
  « both », le mode arrière applique la première image PENDANT le délai, donc
  les quatre régions s'allument ensemble dès le survol au lieu de s'allumer
  chacune à son tour. Les autres animations gardent « both », elles en ont
  besoin pour rester à leur première image pendant leur délai.
  LES QUATRE RÉGIONS DU BALAYAGE vivent en données, clé « etape » de
  FRANCE_TRACES, et non dans le composant. Aucune n'est nommée, c'est un
  parcours et non une couverture. Ne pas en ajouter une cinquième, la
  séquence passerait la seconde et demie.
  DURÉES, toutes sous 1,2 s : balayage 1,12 s, gravure 1,04 s, chemise
  0,87 s, tampon 0,50 s. Aucune boucle, aucun état de repos animé.
  PREFERS-REDUCED-MOTION : rien ne joue, vérifié au navigateur,
  getAnimations() rend 0 après survol des quatre entrées.
  LA PLANCHE RESTE au dépôt : elle porte les huit variantes essayées et les
  trois rangées comparées, elle fait foi sur ce qui a été jugé.

- LES ANALYSES, v85 (arbitrage Vincent, 17/09/2026, régime 2, décision
  explicite au brief) : « rends les textes mieux proportionnés à l'écran,
  ou ajoute des médias, là c'est trop vide ; et humanise, les paragraphes
  sont trop similaires en taille, c'est trop plat ».
  CE QUI N'A PAS ÉTÉ FAIT, ET POURQUOI : AUCUN GRAPHIQUE DE DONNÉES. Le
  site n'a pas un seul chiffre mesuré à publier sur ces trois sujets, le
  backtest national n'est pas publiable (v72) et la liste blanche interdit
  d'inventer. Un graphe à barres ou un camembert aurait été un mensonge
  dessiné, et c'est exactement le genre de remplissage qu'un associé en
  due diligence repère. Ne pas « ajouter des chiffres pour illustrer ».
  LE CORPS N'EST PLUS UN TABLEAU DE PARAGRAPHES. Trois articles de six
  paragraphes de même longueur, sans intertitre, sans respiration : la
  MISE EN PAGE trahissait la machine avant les mots. Le corps devient une
  suite de BLOCS TYPÉS dans analyses.ts (p, intertitre, exergue, chute,
  figure), et c'est la variété des blocs qui donne le rythme. Le type
  interdit d'ajouter un bloc sans lui donner une forme.
  LES TEXTES SONT RÉÉCRITS, le fond ne bouge pas. Longueurs alternées, de
  une ligne à six ; deux à trois intertitres par article ; un exergue qui
  REPREND une phrase déjà écrite, jamais une affirmation nouvelle ; une
  chute composée plus grand. Corrigé au passage, c'était un tell : DEUX
  DES TROIS ARTICLES se terminaient sur la même construction clivée,
  « C'est ce... qui... ». Les trois standfirsts ne sont PAS touchés, ils
  sont des arbitrages (v77 pour le premier, la planche V80 pour les deux
  autres) et ils nourrissent l'index, la meta, l'OpenGraph et le JSON-LD.
  TROIS FIGURES, UNE PAR ARTICLE, QUI DESSINENT UN RAISONNEMENT ET JAMAIS
  UNE QUANTITÉ : le décalage entre le moment où la transmission devient
  inévitable et celui où elle est traitée ; la bifurcation entre le
  dirigeant approché en direct et le dirigeant conseillé d'abord ; le
  cycle de l'origination interne et l'endroit où il casse. Aucun axe,
  aucune échelle, aucune série. Chaque figure porte UNE marque en vin,
  celle que l'article désigne, et sa légende dit explicitement ce qu'elle
  ne figure pas.
  ELLES SONT EN HTML RÉGLÉ, PAS EN SVG, et c'est une correction faite sur
  pièce : la première version posait les libellés en <text> à des
  coordonnées fixes, et à la deuxième figure les libellés français, longs,
  se chevauchaient. LEÇON, elle vaut pour toute figure future : un
  diagramme dont la mise en page dépend de la longueur d'une chaîne se
  dessine avec des filets et une grille, jamais avec des coordonnées. Les
  bénéfices seconds sont réels, la figure se recompose sur téléphone et se
  lit à la voix dans l'ordre du texte.
  LE VIDE EST TRAITÉ SANS TOUCHER À LA MESURE. La colonne de 580 px est la
  seule valeur mesurée de ces pages (lot 4, 70 caractères) : elle ne bouge
  pas d'un pixel. Ce sont les DEUX MARGES qui travaillent. À gauche un
  RAIL de 200 px qui tient le sommaire, collant sous la barre fixe. À
  droite, les blocs qui ne sont pas de la prose, figures, exergues et
  chute, débordent jusqu'au bord du conteneur, 944 px. Sous 1101 px le
  rail revient dans le flux et la page redevient une colonne.
  LE RAIL EST UNE EXCEPTION ASSUMÉE à la v61, « un seul bord gauche », et
  l'amendement la prévoyait lui-même : la marginalia « ne tient que si la
  marge porte du contenu RÉCURRENT, des notes, des dates, des
  références ». Un sommaire qui suit la lecture en est un ; le libellé de
  neuf caractères que la v61 avait retiré n'en était pas. Cette exception
  vaut pour les pages d'article et pour elles seules : ne pas la remonter
  sur l'accueil.
  LE SOMMAIRE SE DÉDUIT des intertitres et les ancres se déduisent de leur
  texte : aucun identifiant à tenir à jour à côté du contenu, donc aucun
  lien de sommaire ne peut pointer dans le vide. Vérifié sur le build, les
  cinq ancres des trois articles ont leur cible.
  LES DEUX AUTRES ANALYSES ferment la page, entre l'article et la bande de
  rendez-vous : la lecture ne s'arrête plus sur du blanc.
  L'ATTAQUE, premier paragraphe à 20 px en encre pleine, et la CHUTE, à
  21 px sur filet : un article qui se termine sur un paragraphe de la même
  taille que les autres n'a pas de fin, il s'arrête.
  PIÈGE DE SPÉCIFICITÉ, corrigé sur pièce et consigné parce qu'il se
  reprendra : « .article-corps p » (0-1-1) écrasait « .article-exergue »
  (0-1-0), l'exergue sortait donc à 18 px comme le corps. Tout bloc de
  corps qui change d'échelle doit être sélectionné DANS son conteneur.
  MESURÉ AU NAVIGATEUR, pas en planche : les trois étapes du cycle alignées
  au pixel (sous « align-items: center » la troisième tombait 11 px plus
  bas, elles sont calées par le haut). Build et lint verts.
  AUCUNE ANIMATION, la règle v54 tient : rien n'apparaît au scroll.
  v85b, PASSE D'OPTIMISATION, ET ELLE A TROUVÉ UN VRAI DÉFAUT.
  1. LE SEUIL DU RAIL PASSE DE 1101 À 1296 PX, et il est MESURÉ : le
  débord vaut 364 px, ce que le conteneur laisse QUAND IL FAIT SES
  1200 px, et le conteneur ne les atteint qu'à 1200 plus deux fois 48 de
  rembourrage. Entre 1101 et 1295 la grille se posait mais le débord
  sortait du conteneur : 147 px de défilement horizontal, mesuré à
  1101 px sur les trois articles. LEÇON DOUBLE. Une largeur de débord
  figée n'est juste qu'au-dessus de la largeur où le conteneur est plein.
  Et le premier balayage, 390, 1000 et 1440, passait les trois : il
  faut tester LE POINT DE RUPTURE LUI-MÊME et la valeur juste au-dessus.
  Coût assumé : un écran de 1280 n'a pas le rail, un 1366 l'a.
  2. LE RAIL PASSE APRÈS L'ARTICLE DANS LE DOM. Un sommaire qui précède le
  titre fait rencontrer « Dans cette analyse » avant de savoir de quelle
  analyse il s'agit, au clavier comme au lecteur d'écran. L'ordre visuel
  vient de grid-column, l'ordre de lecture reste celui du document.
  3. LES QUATRE MESURES SONT NOMMÉES UNE FOIS sur .article-grille
  (--conteneur, --rail, --gouttiere, --lecture) et le débord s'en déduit.
  Le calcul « calc(1200px - 836px) » vivait en double dans deux
  déclarations, avec deux nombres magiques qu'aucun commentaire ne
  rattachait à la grille.
  4. LE PRÉDICAT DE TYPE DU SOMMAIRE EST ÉCRIT et non déduit : TypeScript
  l'infère depuis la 5.5, mais en silence, et le jour où un bloc n'aura
  plus de clé « texte » le code casserait sans qu'aucune déclaration ait
  bougé.
  BALAYAGE FINAL : trois articles, DIX-SEPT largeurs de 360 à 1920, seuils
  compris ; aucun débordement horizontal, aucune ancre de sommaire morte.
  Accueil et pages légales revérifiés à 390, 1280 et 1440.

- RÉFÉRENCEMENT v86 (18/09/2026, à la demande de Vincent : « mon site
  n'est pas référencé sur Google »). Constat : le site n'était indexé
  nulle part (ni Google, ni Bing, ni DuckDuckGo) et rien ne le bloquait,
  robots ouvert, sitemap déclaré, pas de noindex, canoniques, titre avec
  le nom, Organization avec nom, URL et LinkedIn. Cause : un domaine
  récent sans aucun lien entrant, jamais soumis à un moteur. CÔTÉ CODE :
  une entité WebSite dans les données structurées (nom, alternateName
  « Imbrin », URL, inLanguage, publisher vers l'Organization), le même
  alternateName sur l'Organization, og:site_name dans le layout, et la
  méta description réécrite avec les mots du hero V80 (« Origination
  sell-side pour les cabinets M&A. Les PME à approcher, repérées au
  registre et livrées en dossiers d'approche vérifiés. Un seul cabinet
  par périmètre. », 161 caractères) : l'ancienne disait encore « les
  actes que personne n'ouvre », abandonné en v40. CÔTÉ VINCENT : Google
  Search Console en propriété Domaine, vérification par TXT dans la zone
  DNS OVH (ns106.ovh.net), soumission du sitemap, demande d'indexation
  de l'accueil, de /dirigeants et des trois analyses ; Bing Webmaster
  Tools par import ; quelques liens entrants (LinkedIn, annuaires,
  signature). RÈGLE : rien de nouveau dans schema.ts qui ne vienne de
  brand.ts ou copy.ts, la WebSite lit brand.MARQUE et brand.SUFFIXE.
- LE CAHIER, v87 (arbitrage Vincent, 18/09/2026) : « le dossier qui s'ouvre
  en popup doit montrer les deux pages distinctes, avec un effet de
  superposition ou un clic pour tourner la page ; montrer le vrai bon
  dossier et pas une représentation ». LE VRAI DOSSIER est le spécimen
  2026-000 du gabarit HTML du dépôt Veillor.com, Vérane Ingénierie,
  FICTIF (son sous-titre le dit, son pied aussi ; l'entrée « Veranex » du
  cache INPI n'a rien à voir). Deux pages A4.
  LES PAGES SONT DES IMAGES DU PDF, pas un rendu du HTML ni un PDF.js :
  scripts/specimen-pages.mjs (« npm run specimen-pages ») copie le PDF dans
  public/specimen-imbrin.pdf, ce qui fait apparaître le lien « Version
  PDF » (Dossier.tsx), rend chaque page avec PyMuPDF (le venv du dépôt
  Veillor.com) à 96 et 192 dpi, 794 × 1123 et 1587 × 2246, et écrit des
  WebP SANS PERTE (65 + 49 Ko en 1×, 129 + 97 Ko en 2× ; le lossy à 92
  pesait plus lourd et bavait sur le texte). brand.MEDIAS.specimenPages
  les liste, en srcset 1x / 2x ; chargement différé, le popup est fermé
  au chargement. Aucune retouche à la main : on relance le script quand
  le dossier change.
  LE CAHIER : deux feuilles en absolu dans un conteneur au rapport de
  l'A4, la seconde décalée de 10 px derrière la première, en bas à droite
  (la superposition) ; un filet #C8CACC autour de chaque feuille, celui
  de la couverture, ni ombre ni dégradé. TOURNER LA PAGE : un clic sur la
  feuille, sur « Tourner la page » ou une flèche du clavier ; la première
  feuille pivote sur son bord gauche (rotateY, 0,6 s, face arrière non
  dessinée) et la seconde avance à sa place ; immédiat sous
  prefers-reduced-motion ; le corps du popup remonte en haut à chaque
  page. « Page précédente » et le compteur « Page 1 sur 2 » (aria-live)
  sous les feuilles. Le cahier se rouvre toujours à la page 1. Le papier
  du popup passe de 800 à 860 px pour servir la feuille à 794 px ; sur
  téléphone la feuille prend la largeur, le PDF reste le chemin pour lire
  à l'aise. Sans JavaScript, le noscript du layout pose les deux feuilles
  l'une sous l'autre, à plat, et masque les commandes.
  Ce n'est pas le « tilt 3D » des interdits, qui vise l'inclinaison
  décorative au survol : c'est le geste demandé, tourner une page, et il
  ne joue qu'au clic.
  CE QUI PART : les huit rubriques HTML du spécimen (copy.dossier.popup),
  le type RubriqueDossier, le composant Rubrique et 130 lignes de CSS
  .specimen-*. La couverture de la bande devient la page 1 du dossier
  qu'on ouvre : « Vérane Ingénierie », « Ingénierie et études techniques,
  10 à 19 salariés », « Paris 12e », mots du sous-titre du dossier ;
  « Établissements Vasseur » n'existe plus. La mention « spécimen » reste
  visible trois fois : la couverture, la barre du popup (« Dossier
  d'approche, spécimen 2026-000 »), et les pages elles-mêmes.
  v87b, LA COUVERTURE PORTE LA THÈSE (Vincent : « est-ce vraiment la
  meilleure chose à marquer ici, il faudrait quelque chose qui donne plus
  envie de lire le PDF »). Une fiche signalétique décrit, elle n'appelle
  personne ; ce qui donne envie d'ouvrir un dossier, c'est sa thèse, et
  le dossier en a une en tête de sa page 1. La couverture porte donc,
  sous le nom, cette phrase mot pour mot, en 500 à 15 px : « Gérant de
  68 ans, 82 % des parts, une transformation en SAS engagée, non
  décidée. », et la fiche redescend en petit gris, « Ingénierie et études
  techniques, Paris 12e ». Les chiffres sont ceux du spécimen fictif,
  marqué tel sur la couverture même (liste blanche, cas 3), et la phrase
  ne prête aucune intention : un rapport déposé, une décision qui n'est
  pas prise. Sur téléphone, 12 px, le corps de la couverture remonte de
  80 à 64 px pour loger les trois lignes. Mesuré sur le build : tout
  tient dans les 320 × 452 et les 240 × 339 de la couverture.
  v87c, LA COUVERTURE SE LIT COMME UNE UNE (Vincent : « je ne vois pas
  bien ce qui a été changé »). La hiérarchie est renversée : le nom de la
  société n'est plus le titre à 25 px, c'est une ligne de rappel à 16 px
  sous « Dossier d'approche » ; la THÈSE passe à 21 px (15,5 sur
  téléphone), coiffée d'un filet vin de 2 px, coupures équilibrées ; le
  FAIT DATÉ qui ouvre le dossier arrive dessous en vin, 13 px, comme sur
  la page 1 du dossier : « 11 février 2026 : le rapport de transformation
  est déposé au registre. », phrase du dossier raccourcie sans rien
  ajouter ; la fiche reste en petit gris. Le corps de la couverture
  remonte à 40 px (34 sur téléphone). Le filet vin sur la couverture est
  un emploi de la V83 (marque, pas surface), comme celui du panneau
  d'offre. Mesuré sur le build : tout tient, avec de l'air avant le pied.
  EN PARALLÈLE, branche v88 d'une autre session : « le fil de la
  couverture », un trait vin animé qui fait le tour du dossier
  (.couverture::after, conic-gradient), non fusionnée, Vincent juge sur
  la préview. Ce v87c ne touche pas .couverture lui-même ni ::after ; la
  fusion de v88 devra se relire sur la couverture composée ainsi.
  v87d, RETOUR À LA COUVERTURE V87b (Vincent : « je préférais presque
  l'ancienne une, sobre et professionnelle ; je voulais juste une sorte de
  filigrane qui fait le tour pour inciter à cliquer »). La hiérarchie
  renversée de v87c est annulée : le nom revient en titre à 25 px, la
  thèse à 15 px dessous, la fiche en petit gris, sans filet vin ni fait
  daté. Le « filigrane qui fait le tour » est la comète de la branche v88
  de l'autre session, fusionnée dans main dans la foulée : voir « LA
  COMÈTE DE LA COUVERTURE, V88 ». v87c reste en procès-verbal.
  SIGNALÉ, HORS DE CE DÉPÔT : le pied des deux pages porte deux tirets
  cadratins (« Imbrin Research — Jungle.Block Solutions », « scan lu à
  l'image le 17/09/2026 — spécimen »). C'est le gabarit Veillor.com, pas
  un texte du site ; la règle v8 vaut pour les textes du site.
  Vérifié sur le HTML produit : deux feuilles, deux srcset 2x, le lien
  PDF, « Vérane Ingénierie » trois fois, « Vasseur » zéro, aucun tiret.
  Captures popup page 1, tournée, page 2, à 1440 et 390, dans
  V80-captures/v87-cahier.
- LE FIL DE LA COUVERTURE, v88 (demande Vincent, 18/09/2026) : « une ligne
  très fine, rouge vin, qui tourne autour du dossier, légèrement en
  dégradé, pour faire comprendre qu'on peut cliquer dessus et donner envie
  de le lire : c'est la preuve ultime de ma valeur ajoutée ». Un trait de
  1 px en --vin fait le tour de la couverture en 7 s, en boucle, avant tout
  survol ; le survol garde son anneau. v88b, LA COMÈTE (Vincent, même jour :
  « j'imaginais quelque chose de plus voyant, avec une sorte de traînée de
  pixels : sobre, élégant mais efficace pour attirer l'attention ») : le
  trait passe à 2 px — un pixel sur le filet #C8CACC, un sur le papier, là
  où le vin se voit —, tête pleine sur un dixième du tour, traînée en fondu
  sur plus d'un tiers, tour en 6 s. Dessin : un pseudo-élément ::after,
  conic-gradient dont l'angle de départ est une propriété personnalisée
  animée (@property --tour, sans quoi un angle ne s'interpole pas), masque
  qui ne garde que l'anneau de 2 px, aucun filtre, aucune ombre, rien à
  l'intérieur de la couverture. Pas de lueur autour de la tête : ce serait
  une ombre portée, et « shadow-md et au-delà » tient. Sous
  prefers-reduced-motion le pseudo-élément disparaît : le repos est le
  dessin d'avant. Sans @property (navigateurs anciens), le trait reste
  posé, fixe, en haut à droite.
  DEUX RÈGLES QU'IL TOUCHE, ARBITRÉES PAR LA DEMANDE : « dégradés » est aux
  interdits absolus (la queue du fil est un dégradé de 1 px de large sur
  un tiers de tour, pas un fond ni un texte) ; « pas de filet en vin » est
  dans la DA V80 (le token --vin porte déjà le filet et les coches de
  l'offre depuis la v83). Ce fil est le seul élément du site animé au
  repos : la règle qui interdit toute animation d'entrée au scroll (Reveal,
  v80) et celle des icônes au survol (v84) restent entières. Si le fil
  finit par lasser, il se retire en supprimant le bloc V88 de globals.css.
- v89, DEUX OPTIMISATIONS APRÈS RELECTURE DE LA V87 ET DE LA V88 (arbitrage
  Vincent, 19/09/2026 : « tu as entièrement raison sur les deux points, je me
  demandais aussi pourquoi on ne voyait pas bien le dossier »).
  1. LA COMÈTE COÛTAIT UN FIL PRINCIPAL ENTIER, ET MÊME HORS CHAMP. Le dessin
  de la v88b ne change pas d'un pixel, sa MÉCANIQUE change. Elle animait
  l'angle du conic-gradient par une propriété personnalisée (@property
  --tour) : un navigateur ne sait pas compositer ça, il recalculait le style
  et repeignait À CHAQUE IMAGE, pour toute la vie de la page. MESURÉ sur le
  build, 6 s de page au repos, sans interaction : 424 ms de fil principal et
  360 recalculs de style, contre 24 ms et 27 sans la comète. Et couverture
  HORS CHAMP le coût était identique, 367 ms : un onglet laissé ouvert payait
  ça indéfiniment, batterie comprise sur téléphone.
  La comète devient une ROTATION. Le masque en anneau vit sur un élément à
  lui, .couverture-fil, et reste FIXE ; le dégradé tourne sur son ::before,
  en transform. La géométrie est la même, le conic restant centré sur la
  couverture : faire tourner le carré qui le porte autour de ce centre
  revient exactement à faire tourner son angle. Après : 32 ms et 35
  recalculs, soit treize fois moins de fil principal. Vérifié aussi, le
  dessin figé à quatre instants du tour, le nom accessible du bouton
  inchangé, et rien sous prefers-reduced-motion, getAnimations() à 0.
  LEÇON, elle vaut pour toute animation future : une propriété personnalisée
  animée n'est JAMAIS compositée. Si un effet peut s'écrire en transform ou
  en opacity, il s'écrit ainsi ; sinon il se mesure avant d'être posé. Et une
  animation en boucle se mesure AUSSI hors champ, c'est là qu'elle est
  indéfendable.
  2. LE DOSSIER N'ÉTAIT PLUS DU TEXTE. La v87 a remplacé les huit rubriques
  par deux images : le vrai document, et c'est l'arbitrage, il ne bouge pas.
  Mais vérifié sur le HTML produit, « commissaire aux comptes », « L'angle »
  et « 2,3 M€ » y étaient à ZÉRO occurrence. Le bloc le plus substantiel du
  site était devenu invisible aux moteurs, DEUX COMMITS APRÈS LA V86 qui ne
  servait qu'à être indexé. Et à 390 px la page A4 s'affiche à 0,44 fois sa
  taille, mesuré : le dossier y était illisible, ce que Vincent avait vu sans
  en connaître la cause.
  L'ALTERNATIVE TEXTE. Un <details> natif sous le cahier, « Lire le texte du
  dossier » : le contenu est DANS le DOM, donc lu par les moteurs et par un
  lecteur d'écran, sans JavaScript et sans texte caché à un visiteur. 5 462
  caractères rendus à la page. C'est aussi le seul moyen de lire le dossier
  sur un téléphone.
  ELLE EST EXTRAITE DE LA COUCHE TEXTE DU PDF, JAMAIS RE-SAISIE
  (scripts/dossier-texte.py, PyMuPDF, chaîné à specimen-pages.mjs) : une
  transcription tenue à la main finirait par diverger du document, et la v87
  a justement choisi l'image pour ne pas « représenter » le dossier. Le
  NIVEAU de chaque bloc vient de la TAILLE ET DE LA GRAISSE mesurées dans le
  PDF, pas d'une liste de titres tenue à la main. Deux réglages trouvés sur
  pièce et consignés parce qu'ils se reprendront de travers : les intertitres
  du document sont en semi-gras à LA TAILLE DU CORPS, 9,4 pt, donc la taille
  seule les collait au paragraphe suivant ; et le fait daté qui ouvre la page
  est lui aussi en gras, sur trois lignes, donc le gras seul en faisait un
  titre. Un intertitre est COURT, seuil à soixante caractères, c'est ce qui
  les sépare. Le recollage des lignes ne franchit jamais une frontière de
  bloc du PDF, sinon les tableaux fusionnaient en une ligne.
  LA TRANSCRIPTION PASSE PAR typoDeep, comme copy.ts et analyses.ts : sans
  lui elle serait le seul texte du site sans espaces insécables.
  ÉCART SIGNALÉ, et c'est le seul : le PDF porte deux tirets cadratins, le
  générateur les transpose en virgules. La règle v8 n'a plus d'exception
  depuis la v78 et vaut pour tout texte du site ; aucun fait n'est modifié.
  VÉRIFIÉ : build et lint verts ; 7 pages x 9 largeurs de 360 à 1920 sans
  débordement ; cahier, tournage clavier et Échap intacts ; fonction Edge de
  l'image OpenGraph à 0,84 Mo, sous la limite de 1 Mo.

- MÉTHODE DU CHANTIER : cinq lots, un commit par lot, un rapport court et une
  validation entre chaque. 0 préparation (emblèmes, Hanken, tokens, charte) ;
  1 hero, en-tête, pied de page ; 2 service, dossier et popup, méthode ;
  3 conditions, à propos, analyses, rendez-vous, suppression des composants
  morts ; 4 pages intérieures, mobile, qualité. Référence Lighthouse mobile de
  l'accueil à tenir : 88 / 96 / 100 / 100 (V78, médiane de trois passes) ; pas
  de recul sur la performance, et si la vidéo pèse, une solution sans la
  retirer.

## Offre publiée, 17/09/2026 (arbitrage Vincent)
POUR LE SITE, cet amendement SUPPLANTE la durée d'engagement et les trois
composantes de la rémunération de la section « L'offre v15 » ci-dessous.
Ce que le site montre, section Conditions, bloc « L'origination », et rien
de plus : un PREMIER MOIS pour juger sur pièces, proposé seulement si la
mesure du périmètre montre des dossiers à livrer ; ensuite des PÉRIODES DE
TROIS MOIS, résiliables à chaque échéance avec un mois de préavis ;
l'EXCLUSIVITÉ pendant le contrat, le périmètre est réservé à un seul
cabinet ; et le RENVOI AU DEVIS pour les montants. La structure de la
rémunération ne se traite qu'au devis : plus aucune mention sur le site du
retainer, du fee à la signature, de la part des honoraires de succès ni de
la protection de vingt-quatre mois, métadonnées et JSON-LD compris,
vérifié sur le HTML produit. Le mandat de recherche ne change pas
(rémunération fixée au devis, à la mission). La note « ni conseil, ni
négociation » reste.
COMPLÉMENT v81 (arbitrage Vincent, 17/09/2026) : le bloc « L'origination » montre
« Facturation · Au mois · Un mois sans dossier livré n'est pas facturé » à la place
de « Pendant le contrat · Un seul cabinet » ; l'exclusivité s'écrit dans le texte du
bloc, « pour un client, sur un périmètre, pendant une durée fixée au devis » ; la
quatrième valeur reste « Premier contact · Au devis ». Aligné sur la page « Comment
je travaille » remise à un cabinet le 18/09/2026.
COMPLÉMENT v82 (arbitrage Vincent, 17/09/2026) : les « grandes valeurs » n'existent
plus ; l'origination est un PANNEAU D'OFFRE (titre, « Au devis » à la place du prix,
six gains cochés, six termes) et le mandat un tableau réglé (voir « RETOUCHES v82,
LES CONDITIONS » dans les lots V80). Le fond ne change pas : la
mesure au devis, un mois, trois mois, facturation au mois, exclusivité, premier
contact au devis pour l'origination ; rémunération à la mission et périmètres hors
exclusivité pour le mandat. Ce complément ne touche qu'à la forme.
RESTENT EN VIGUEUR : les règles de vocabulaire de l'offre v15 (« zone »,
« verticale », « abonnement », « cellule » proscrits, le livrable s'appelle
« dossier d'approche ») et l'interdit de toute promesse de volume ; la
liste blanche des chiffres, « un mois » et « trois mois » étant des durées
d'engagement écrites en lettres, comme « trente minutes ». La section v15
reste en procès-verbal.

## L'offre v15 (arbitrage Vincent, 02/09/2026 — remplace la v13)
PRINCIPE, et il gouverne tout le reste : le site donne la STRUCTURE de la
rémunération, JAMAIS un nombre ni un pourcentage. Tout chiffre est renvoyé
au devis. Les montants publiés par la v13 — 2 000 € HT par mois, 24 000 €
sur l'année, 3 500 € HT par mission — sont retirés du site, et PRICING est
supprimé de brand.ts faute de chiffre à porter.
- L'ORIGINATION SUR PÉRIMÈTRE, trois composantes, chiffrées au devis avant
  signature : un retainer mensuel modeste, qui paie l'exclusivité du
  périmètre et la veille ; un fee à la signature de chaque mandat obtenu
  sur un dossier livré ; une part des honoraires de succès au closing.
  Engagement de SIX MOIS, plus trois. Chaque dossier livré reste protégé
  VINGT-QUATRE MOIS : un mandat signé avec une société apportée est dû,
  contrat en cours ou non.
- LE MANDAT DE RECHERCHE, rémunération à la mission, fixée au devis.
  Shortlist vérifiée livrée à la date convenue à la mission ; on annonce
  une date, jamais un délai générique. Hors périmètres déjà sous
  exclusivité.
Un périmètre = une région et une typologie d'entreprises, arrêtées à l'appel
et inscrites au devis. Un seul cabinet y est servi tant que le contrat court.
Les mots « zone », « verticale », « abonnement » et « cellule » sont proscrits :
le périmètre se définit au rendez-vous, ce n'est pas un découpage préétabli.
Ne jamais écrire que la grille est publique ni qu'il n'existe aucun accord
hors grille. Ne promettre aucun volume en chiffre rond.
« PAS DE COMMISSION SUR LA TRANSACTION, JAMAIS » EST MORT, et la phrase qui
le suivait avec lui : la rémunération DÉPEND désormais du closing, par la
part des honoraires de succès. Écrire encore qu'elle n'en dépend pas serait
faux. Ce qui le remplace n'est pas une promesse de prix mais une frontière
de rôle, et elle tient : « Notre rémunération au succès est déclarée au
contrat. Nous n'intervenons jamais dans la transaction elle-même : ni
conseil, ni négociation. »
LE PLANCHER MENSUEL EST MORT AVEC LE MODÈLE AU VOLUME. Il appartenait à une
tarification où un mois sous le volume annoncé n'était pas facturé, ce
qu'un retainer contredit. Il est retiré de la fiche du devis. ATTENTION, il
SURVIT dans deux textes hors de la section offre, laissés intacts faute de
mandat : la chute du filtre et le chapô de l'appel final. Voir BACKLOG.md.
Le livrable s'appelle « dossier d'approche », jamais « brief », jamais « fiche ».

## Interdits absolus (si l'un apparaît, le supprimer immédiatement)
Emojis · dégradés (bg-gradient-*) · texte en dégradé · glassmorphism / backdrop-blur ·
rounded-xl/2xl/3xl · shadow-md et au-delà · cartes-tuiles à icônes en grille de 3 ·
icônes Lucide/Heroicons décoratives · carrousel de témoignages · logos de confiance ·
badges "AI-powered" · Inter, Poppins, Roboto · boutons pill · dark mode · parallax ·
compteurs animés · popup/chatbot · bannière cookies (le site n'a aucun traceur).

## Stack & conventions
Next 14 App Router, TypeScript strict, Tailwind (tokens étendus dans tailwind.config.ts),
next/font (Google : Familjen Grotesk, Source Serif 4 ; local : Geist Mono), zéro dépendance UI externe
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
