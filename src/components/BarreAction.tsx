"use client";

import { useEffect, useRef, useState } from "react";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* v25 : le seul point de sortie en mobile entre le hero et l'appel final.
   La page compte dix sections, le hero en occupe le quart, et l'appel du
   header n'est pas collant : il est en position absolue DANS le hero et sort
   du champ avec lui. Passé le premier écran, un lecteur qui décroche au
   milieu de l'offre n'avait plus rien sous la main.

   Le noeud n'est monté qu'en mobile, jamais seulement masqué : au-dessus du
   point de rupture il n'existe ni dans le DOM ni dans l'arbre d'accessibilité.

   Deux observateurs, sur des id qui existent déjà, aucun n'est ajouté :
   le hero, pour n'apparaître qu'une fois son propre appel sorti du champ,
   et l'appel final, pour se retirer avant de le doubler.

   Même motif que l'entonnoir et les engagements, à deux écarts près, voulus :
   1. aucun disconnect au premier passage. Le motif existant est à sens unique,
      la barre doit basculer dans les deux sens, indéfiniment.
   2. prefers-reduced-motion ne court-circuite pas la logique. Ailleurs il force
      l'état final et saute l'observateur, parce qu'il s'agit de décoration.
      Ici la barre est fonctionnelle : elle doit continuer d'apparaître et de
      disparaître. Seule la transition tombe, en CSS. */
export default function BarreAction() {
  const ref = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState(false);
  const [heroPasse, setHeroPasse] = useState(false);
  const [appelVisible, setAppelVisible] = useState(false);

  /* le point de rupture, suivi à chaud : une rotation de téléphone monte ou
     démonte la barre pour de bon, elle ne reste pas dans un état intermédiaire */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const suivre = () => setMobile(mq.matches);
    suivre();
    mq.addEventListener("change", suivre);
    return () => mq.removeEventListener("change", suivre);
  }, []);

  useEffect(() => {
    if (!mobile) return;
    const hero = document.getElementById("hero");
    const appel = document.getElementById("appel");
    if (!hero || !appel) return;

    const ioHero = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => setHeroPasse(!e.isIntersecting)),
      { threshold: 0 }
    );
    const ioAppel = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => setAppelVisible(e.isIntersecting)),
      { threshold: 0 }
    );
    ioHero.observe(hero);
    ioAppel.observe(appel);
    return () => {
      ioHero.disconnect();
      ioAppel.disconnect();
    };
  }, [mobile]);

  const visible = mobile && heroPasse && !appelVisible;

  /* inert par la propriété DOM, pas par un attribut JSX : sous React 18 inert
     n'est pas une propriété connue, un booléen y déclenche un avertissement et
     la valeur écrite en attribut rendrait l'élément inerte par sa seule
     présence. La propriété ne souffre pas de cette ambiguïté.
     Le décalage d'une image avant que l'effet ne passe est sans conséquence :
     au repos la barre est déjà en visibility hidden, qui suffit à la retirer
     du parcours de tabulation. */
  useEffect(() => {
    const el = ref.current;
    if (el) el.inert = !visible;
  }, [visible]);

  if (!mobile) return null;

  return (
    <div ref={ref} className={`barre-action${visible ? " visible" : ""}`}>
      <a
        className="label"
        href={brand.CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.barre.cta}
      </a>
    </div>
  );
}
