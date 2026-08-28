"use client";

import { useEffect, useRef, useState } from "react";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* v19 : le viseur devient une LOUPE. Avant, le document entier était posé
   dans un cadre qui défilait et la nav ne faisait qu'y surligner une zone :
   sur desktop il fallait scroller pour voir la zone active, sur mobile le
   document se réduisait à une taille où plus rien ne se lisait.

   Désormais le cadre ne défile plus et ne montre qu'UNE zone à la fois,
   cadrée de près et agrandie. L'en-tête du dossier (marque, mentions de
   fiction, société, interlocuteur) et le pied légal restent en permanence :
   c'est ce qui maintient l'effet « c'est un vrai document », et c'est aussi
   ce qui garde deux des trois mentions de fiction imposées par CLAUDE.md.

   Les six zones restent toutes dans le DOM, empilées dans la même cellule
   de grille : la scène prend donc la hauteur de la plus haute et ne bouge
   plus d'une zone à l'autre, sans jamais rien rogner. Les zones inactives
   sont à opacité nulle mais ne sont ni display:none ni aria-hidden : un
   lecteur d'écran les parcourt toutes. Sans JavaScript, le noscript du
   layout remet la scène en flux normal et le dossier se lit en entier. */
/* durée d'une zone en lecture automatique. La même valeur vit dans
   l'animation CSS .recu-prog (globals.css) : changer l'une sans l'autre
   désynchronise la barre et le passage de zone. */
const DUREE_LECTURE = 4000;

export default function Dossier() {
  const d = copy.dossier;
  const doc = d.doc;
  /* échelle du graphe de la série : base à zéro, plafond au plus grand
     exercice. Dérivé de la donnée affichée, jamais saisi à la main. */
  const maxTendance = Math.max(...doc.tendance.map((t) => t.n));
  const navRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [actif, setActif] = useState(d.defaut);
  const [sortante, setSortante] = useState<string | null>(null);

  /* v44 : LA LECTURE (arbitrage Vincent, 27/08). Le dossier se feuillette
     seul : la barre vin de l'élément actif avance en 4 s, puis la zone
     suivante prend la mise au point. Quatre garde-fous, non négociables :
     un clic de l'utilisateur ARRÊTE la lecture définitivement (sa main
     prime) ; UN SEUL TOUR puis arrêt sur la page de garde (jamais de
     boucle, la charte interdit les mouvements perpétuels) ; pause quand
     la section sort du champ ; désactivée en prefers-reduced-motion. */
  const [lecture, setLecture] = useState(true);
  const [enVue, setEnVue] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLecture(false);
    }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => setEnVue(e.isIntersecting)),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!lecture || !enVue) return;
    const t = setTimeout(() => {
      const i = d.elements.findIndex((el) => el.cible === actif);
      const suivant = d.elements[i + 1];
      setSortante(actif);
      if (suivant) {
        setActif(suivant.cible);
      } else {
        /* fin du tour : retour à la page de garde, et la lecture s'éteint */
        setActif(d.elements[0].cible);
        setLecture(false);
      }
    }, DUREE_LECTURE);
    return () => clearTimeout(t);
  }, [lecture, enVue, actif, d.elements]);

  /* v20 : la zone qui perd le focus garde une classe le temps de son
     animation. Sans elle, elle disparaîtrait d'un coup et on ne verrait
     que l'arrivée : c'est la superposition des deux qui donne la
     TRAVERSÉE de mise au point, l'ancienne qui part vers l'avant en se
     floutant pendant que la nouvelle se pose. On la retire ensuite, pour
     qu'aucune zone ne conserve d'animation ni de filtre au repos. */
  useEffect(() => {
    if (!sortante) return;
    const t = setTimeout(() => setSortante(null), 340);
    return () => clearTimeout(t);
  }, [sortante]);

  function choisir(cible: string, bouton?: HTMLElement) {
    /* la main de l'utilisateur prime : tout clic éteint la lecture,
       définitivement — elle ne redémarre jamais toute seule */
    setLecture(false);
    if (cible === actif) return;
    setSortante(actif);
    setActif(cible);

    /* v27, bande mobile : on recentre l'élément tapé dans la bande, et
       SEULEMENT dans la bande. scrollIntoView ferait défiler tous les
       ancêtres défilables, donc la page entière bougerait verticalement
       sous le doigt : c'est le défaut classique de ce motif. Ici on ne
       touche qu'au scrollLeft du conteneur. En desktop la nav n'a pas de
       débordement horizontal, la condition sort d'elle-même. */
    const nav = navRef.current;
    if (!nav || !bouton || nav.scrollWidth <= nav.clientWidth) return;
    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gauche = Math.max(
      0,
      Math.min(
        bouton.offsetLeft - (nav.clientWidth - bouton.offsetWidth) / 2,
        nav.scrollWidth - nav.clientWidth
      )
    );
    nav.scrollTo({ left: gauche, behavior: doux ? "smooth" : "auto" });
  }

  const zone = (cible: string) =>
    `zone${actif === cible ? " lit" : ""}${
      sortante === cible ? " sortante" : ""
    }`;
  const marque = (cible: string) =>
    actif === cible ? ({ "aria-current": "true" } as const) : {};

  return (
    <section className="recu" id="dossier" ref={sectionRef}>
      <div className="wrap">
        <div className="recu-grid">
          {/* le titre vit dans la colonne de gauche : sinon le document
              démarre sous lui et pend très bas par rapport au texte */}
          <div className="recu-col">
            <p className="kicker label">{d.kicker}</p>
            <h2 className="statement mask">{grand(d.titre)}</h2>
            <p className="recu-chapo">{d.chapo}</p>

            {/* ---------- nav des éléments ---------- */}
            {/* l'état de lecture vit dans un attribut data-, PAS dans
                className : Reveal pose « vis » à la main sur le DOM, et
                un className recalculé par React l'effacerait (vécu : la
                nav restait à opacité nulle). */}
            <nav
              className="recu-nav"
              data-lecture={lecture && enVue ? "" : undefined}
              aria-label={d.kicker}
              ref={navRef}
            >
              {d.elements.map((el) => (
                <button
                  type="button"
                  key={el.cible}
                  className={`recu-item${actif === el.cible ? " active" : ""}`}
                  aria-current={actif === el.cible ? "true" : undefined}
                  onClick={(e) => choisir(el.cible, e.currentTarget)}
                >
                  {/* la barre de lecture : remontée à chaque zone (key),
                      elle avance en 4 s là où vivait le filet vin */}
                  {lecture && enVue && actif === el.cible && (
                    <span className="recu-prog" aria-hidden="true" key={actif} />
                  )}
                  <span className="recu-item-top">
                    <span className="recu-idx label">{el.idx}</span>
                    <span className="recu-t">{grand(el.titre)}</span>
                  </span>
                  <span className="recu-d">{el.texte}</span>
                </button>
              ))}
            </nav>

            {/* v27 : en bande horizontale, la description ne tient plus dans
                le bouton. Elle y RESTE pour l'arbre d'accessibilité, masquée
                visuellement, et cet écho la rend lisible sous la bande. Il
                est donc aria-hidden : sans quoi un lecteur d'écran la dirait
                deux fois. Affiché en mobile seulement. */}
            <p className="recu-echo" aria-hidden="true">
              {d.elements.find((el) => el.cible === actif)?.texte}
            </p>
          </div>

          {/* ---------- document ---------- */}
          <div className="viseur">
            <div className="viseur-bar label">
              <span>{d.viewer.titre}</span>
              <span className="warn">{d.viewer.mention}</span>
            </div>
            {/* l'objection « montrez-m'en un vrai » se retourne ici, juste
                sous la mention de fiction, plutôt que d'être laissée en l'air */}
            <p className="viseur-note label">{d.viewerNote}</p>

            <div className="doc-cadre">
              <article className="doc" aria-label={doc.aria}>
                {/* en-tête permanent, réduit au CHROME du document depuis la
                    v22 : marque, référence, mention de fiction et tampon. Il
                    ne porte plus l'identité du prospect, qui se répétait
                    au-dessus des six zones et les faisait toutes se
                    ressembler. Il reste l'ancrage net de la mise au point. */}
                <header className="d-head">
                  {/* v43 (arbitrage Vincent, 27/08) : le lockup officiel
                      remplace le médaillon + mot-marque composés en HTML.
                      Image encre sur transparent, posée sur le papier ;
                      alt porté par les variables de marque. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="d-lockup"
                    src="/logo-dossier.png"
                    alt={`${brand.MARQUE} ${brand.SUFFIXE} · ${brand.BASELINE}`}
                    width={900}
                    height={180}
                  />
                  <span className="d-meta label">
                    {doc.metaAvant}
                    <b>{doc.metaFort}</b>
                    {doc.metaApres}
                    <br />
                    {doc.metaLigne2}
                  </span>
                </header>

                <div className="d-ref">
                  <span className="d-ficti label">{doc.ficti}</span>
                  <span className="d-badge label">{doc.badge}</span>
                </div>

                {/* la scène : les sept zones dans la même cellule, une seule
                    visible. L'ordre du DOM suit celui de la nav. */}
                <div className="d-scene">
                  {/* v22 : la présentation du prospect était répétée au-dessus
                      de chaque zone, ce qui donnait à toutes le même visage.
                      Elle devient la zone 00, la page de garde du dossier. */}
                  <div
                    className={zone("z-societe")}
                    id="z-societe"
                    {...marque("z-societe")}
                  >
                    <p className="lbl label">{doc.societeLbl}</p>
                    <h3 className="d-title">{grand(doc.titre)}</h3>
                    {/* fiche d'identité en cases : la seule zone qui présente
                        des faits bruts sans phrase */}
                    <ul className="ident">
                      {doc.descItems.map((x) => (
                        <li className="label" key={x}>
                          {x}
                        </li>
                      ))}
                    </ul>
                    <p className="d-interlo label">
                      <b>{doc.interloLbl}</b>
                      {doc.interlo}
                    </p>
                  </div>

                  <div className={zone("z-fin")} id="z-fin" {...marque("z-fin")}>
                    <p className="lbl label">{doc.finLbl}</p>
                    <div className="figs">
                      {doc.figures.map((f) => (
                        <div className="fig" key={f.k}>
                          <span className="fig-n display">{f.n}</span>
                          <span className="fig-k label">{f.k}</span>
                        </div>
                      ))}
                    </div>
                    {/* la série : un tableau dont chaque ligne porte sa propre
                        barre. La barre ne remplace pas le chiffre, elle le
                        double, donc la valeur reste lisible sans elle. Base à
                        zéro, largeur proportionnelle au plus grand exercice. */}
                    <div className="serie">
                      {doc.tendance.map((t) => (
                        <div className="serie-l" key={t.a}>
                          <span className="serie-an label">{t.a}</span>
                          <span className="serie-piste">
                            <span
                              className="serie-barre"
                              style={{ width: `${(t.n / maxTendance) * 100}%` }}
                            />
                          </span>
                          <span className="serie-v label">{t.v}</span>
                        </div>
                      ))}
                    </div>
                    <p className="trend-tag label">{doc.tendanceTag}</p>
                  </div>

                  {/* le constat : la seule zone où une phrase passe à
                      l'échelle du display. C'est la trouvaille du dossier. */}
                  <div
                    className={zone("z-signal")}
                    id="z-signal"
                    {...marque("z-signal")}
                  >
                    <p className="lbl label">{doc.signalLbl}</p>
                    <p className="sig-amorce">{doc.signalAvant}</p>
                    <p className="sig-fort display">{grand(doc.signalFort)}</p>
                    <p className="sig-suite">{doc.signalApres}</p>
                  </div>

                  <div
                    className={zone("z-parcours")}
                    id="z-parcours"
                    {...marque("z-parcours")}
                  >
                    <p className="lbl label">{doc.parcoursLbl}</p>
                    <ul className="tl">
                      {doc.parcours.map((p) => (
                        <li className={p.cle ? "key" : undefined} key={p.an}>
                          <span className={`yr mono${p.cle ? " key" : ""}`}>
                            {p.an}
                          </span>
                          <span className="ev">{p.ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={zone("z-angle")}
                    id="z-angle"
                    {...marque("z-angle")}
                  >
                    <p className="lbl label">{doc.angleLbl}</p>
                    <h4 className="angle-t">{grand(doc.angleTitre)}</h4>
                    <p className="angle-p">{doc.angleP1}</p>
                    <p className="angle-p">{doc.angleP2Avant}</p>
                    {/* la chute est détachée sous un filet : c'est la phrase
                        qui fait vendre, elle ne doit pas finir un paragraphe */}
                    <p className="angle-chute">{doc.angleP2Fort}</p>
                  </div>

                  {/* v35 : les coordonnées sont écrites. La société étant
                      inventée de bout en bout, il n'y avait rien à caviarder,
                      et les barres noires reprenaient la forme des barres du
                      graphe de la zone 01. Valeurs fictives en plages ARCEP
                      réservées, voir copy.ts. */}
                  <div
                    className={zone("z-coord")}
                    id="z-coord"
                    {...marque("z-coord")}
                  >
                    <p className="lbl label">{doc.coordLbl}</p>
                    <p className="coord-s label">{doc.coordS}</p>
                    <ul className="coord-l">
                      {doc.coordItems.map((c) => (
                        <li key={c.k}>
                          <span className="coord-k label">{c.k}</span>
                          <span className="coord-v label">{c.v}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="coord-d">{doc.coordD}</p>
                  </div>

                  <div
                    className={zone("z-unknown")}
                    id="z-unknown"
                    {...marque("z-unknown")}
                  >
                    <p className="lbl label">{doc.inconnuLbl}</p>
                    {/* la seule zone encadrée : une réserve se signale comme
                        telle dans un rapport, elle ne se fond pas au texte */}
                    <div className="reserve">
                      <p className="unknown">
                        {doc.inconnuAvant}
                        <b>{doc.inconnuFort}</b>
                        {doc.inconnuApres}
                      </p>
                    </div>
                  </div>
                </div>

                <footer className="d-foot">
                  <p className="d-legal label">
                    <span className="ficti">{doc.legalFicti}</span>
                    {doc.legal}
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
