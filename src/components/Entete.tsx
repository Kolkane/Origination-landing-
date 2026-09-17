"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Embleme from "@/components/Embleme";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* V80 · L'EN-TÊTE. Deux états, et c'est le hero qui les donne.
   « hero » : posé en absolu en haut du hero, transparent, emblème clair,
   nom et navigation en blanc, exactement la planche. « fixe » : dès que
   le hero a quitté l'écran, la barre devient fixe, blanche et opaque,
   emblème encre, texte encre, filet en bas. Le passage est décidé par un
   IntersectionObserver posé sur le hero, le parent de ce composant :
   aucun écouteur de défilement, aucun calcul de position. Sur une page
   sans hero (lot 4), la prop « fixe » pose l'état fixe d'emblée.
   LE MENU MOBILE, sous 760 px : un bouton « Menu » qui porte
   aria-expanded et aria-controls, un panneau plein écran avec les six
   entrées et les coordonnées, le corps bloqué tant qu'il est ouvert, la
   tabulation retenue dans le panneau, Échap qui ferme, et le focus rendu
   au bouton à la fermeture, sauf quand c'est un lien qui a fermé : la
   navigation vers l'ancre prend alors le focus. Le panneau n'est pas
   dans la planche : sa composition est consignée dans CLAUDE.md, lot 1. */
type Props = { fixe?: boolean };

const FOCUSABLES = "a[href], button:not([disabled])";

export default function Entete({ fixe = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const panneauRef = useRef<HTMLDivElement>(null);
  const rendreFocus = useRef(true);
  const [horsHero, setHorsHero] = useState(fixe);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    if (fixe) return;
    const hero = ref.current?.parentElement;
    if (!hero) return;
    const io = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => setHorsHero(!e.isIntersecting)),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [fixe]);

  const fermer = useCallback((focus: boolean) => {
    rendreFocus.current = focus;
    setOuvert(false);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    const panneau = panneauRef.current;
    /* copié ici : à la fermeture, la ref peut déjà pointer ailleurs */
    const bouton = boutonRef.current;
    const body = document.body;
    const overflowAvant = body.style.overflow;
    body.style.overflow = "hidden";
    panneau?.querySelector<HTMLElement>(FOCUSABLES)?.focus();

    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        fermer(true);
        return;
      }
      if (e.key !== "Tab" || !panneau) return;
      const focusables = Array.from(
        panneau.querySelectorAll<HTMLElement>(FOCUSABLES)
      );
      if (focusables.length === 0) return;
      const premier = focusables[0];
      const dernier = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    };
    /* au-dessus du point de rupture le panneau n'existe plus à l'écran :
       une rotation ou un redimensionnement le referme pour de bon */
    const mq = window.matchMedia("(min-width: 761px)");
    const surLargeur = () => {
      if (mq.matches) fermer(false);
    };
    document.addEventListener("keydown", surTouche);
    mq.addEventListener("change", surLargeur);
    return () => {
      document.removeEventListener("keydown", surTouche);
      mq.removeEventListener("change", surLargeur);
      body.style.overflow = overflowAvant;
      if (rendreFocus.current) {
        bouton?.focus({ preventScroll: true });
      }
    };
  }, [ouvert, fermer]);

  const nav = copy.nav;
  const marque = `${brand.MARQUE} ${brand.SUFFIXE}`;

  return (
    <header ref={ref} className="entete" data-etat={horsHero ? "fixe" : "hero"}>
      <a className="entete-marque" href={nav.haut}>
        <Embleme ton={horsHero ? "encre" : "clair"} taille={34} />
        <span>{marque}</span>
      </a>
      <nav aria-label={nav.aria} className="entete-nav">
        {nav.liens.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <button
        ref={boutonRef}
        type="button"
        className="entete-menu"
        aria-expanded={ouvert}
        aria-controls="menu"
        aria-label={ouvert ? nav.menuFermer : nav.menuOuvrir}
        onClick={() => (ouvert ? fermer(true) : setOuvert(true))}
      >
        {nav.menu}
      </button>
      <div ref={panneauRef} id="menu" className="menu" hidden={!ouvert}>
        <div className="menu-haut">
          <span className="entete-marque">
            <Embleme ton="encre" taille={30} />
            <span>{marque}</span>
          </span>
          <button
            type="button"
            className="menu-fermer"
            aria-label={nav.menuFermer}
            onClick={() => fermer(true)}
          >
            {nav.fermer}
          </button>
        </div>
        <nav aria-label={nav.aria} className="menu-liens">
          {nav.liens.map((l) => (
            <a key={l.href} href={l.href} onClick={() => fermer(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="menu-coord">
          <p>{nav.coordTel}</p>
          <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
          <p>{nav.coordMail}</p>
          <a href={`mailto:${brand.CONTACT_EMAIL}`}>{brand.CONTACT_EMAIL}</a>
        </div>
      </div>
    </header>
  );
}
