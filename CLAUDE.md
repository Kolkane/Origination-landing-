# CLAUDE.md — Règles du projet (ne jamais dévier)

## Ce qu'est ce site
Landing one-page d'un service d'origination externe pour boutiques M&A sell-side : un analyste,
sur pièces, repère au registre (sources publiques) les PME françaises dont la situation réunit
les conditions d'une transmission (âge du dirigeant, absence de relais, structure de détention).
Amendement (refonte 2026-08, arbitrage Vincent) : ne JAMAIS prêter une intention au dirigeant
(« préparent leur sortie » est mort), ne JAMAIS affirmer un horizon (« 12-18 mois avant le
marché » est mort), ne JAMAIS promettre un flux mensuel ni un délai générique de livraison.
Quand un acte de préparation existe, il est daté ; on n'affirme rien de plus.
LISTE BLANCHE DES CHIFFRES : aucun nombre sur le site sauf (1) chiffre mesuré, cité avec sa
nature exacte, (2) source externe nommée (l'étude Bpifrance/CCI de l'entonnoir), (3) exemple
explicitement fictif marqué comme tel. Le périmètre du client est mesuré au devis : c'est la
promesse centrale, le site n'affiche pas de moyennes.
Clients cibles : boutiques M&A small-cap et family offices ; l'associé est à Paris, le
sourcing est régional. Un seul cabinet par périmètre.
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

## L'offre v13 (définitive, remplace la v12 et la grille régionale)
Deux lignes, toutes deux dans src/config/brand.ts :
- L'ORIGINATION, à partir de 2 000 € HT / mois selon le périmètre convenu,
  engagement 3 mois puis reconduction mensuelle. Le volume est mesuré et
  annoncé au devis avant tout engagement ; un mois qui passe sous ce volume
  n'est pas facturé.
- LE MANDAT DE RECHERCHE, 3 500 € HT par mission à la livraison, shortlist
  vérifiée livrée à la date convenue à la mission (amendement refonte
  2026-08 : « sous 7 jours » est retiré, on annonce une date, jamais un
  délai générique), hors périmètres déjà sous exclusivité.
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
