"use client";

import { useEffect, useRef, useState } from "react";
import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

export default function Hero() {
  const [pret, setPret] = useState(false);
  const [sansVideo, setSansVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setPret(true));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
    return () => cancelAnimationFrame(raf);
  }, []);

  const h = copy.hero;
  return (
    <section
      className={`hero${pret ? " ready" : ""}${sansVideo ? " no-video" : ""}`}
      id="hero"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/imbrin-poster.jpg"
        onError={() => setSansVideo(true)}
      >
        <source src="/imbrin.mp4" type="video/mp4" onError={() => setSansVideo(true)} />
      </video>
      <div className="veil" />
      {/* v54 : le fallback n'affiche plus rien. Il portait « Déposez votre
          vidéo imbrin.mp4 dans public/, puis rechargez » — une consigne de
          développement, lisible par un associé de cabinet le jour où la
          vidéo ne charge pas. Le voile de .no-video tient le premier écran
          seul, et le titre s'y lit sans elle. */}

      <div className="nav">
        <span className="brand label fade f1">
          <LogoImbrin taille={18} />
          <span>
            {brand.MARQUE} <small>· {brand.SUFFIXE}</small>
          </span>
        </span>
        <nav className="nav-r fade f1">
          {h.nav.map((lien) => (
            <a key={lien.ancre} href={lien.ancre} className="label">
              {lien.label}
            </a>
          ))}
          <a href={h.navAppel.ancre} className="label keep">
            {h.navAppel.label}
          </a>
        </nav>
      </div>

      <div className="hero-copy">
        {/* v40 : l'eyebrow REVIENT au-dessus du titre — la v39 l'avait
            descendu en légende, arbitrage Vincent du 27/08 : la première
            ligne qualifiante fait partie de la composition. */}
        <p className="eyebrow label fade f2">{h.eyebrow}</p>
        {/* v42 : deux lignes, l'accent vin sur le verbe du métier au
            milieu de la première (arbitrage Vincent, 27/08). */}
        <h1 className="fade f3">
          {grand(h.titreAvant)}
          <em>{grand(h.titreItalique)}</em>
          {grand(h.titreApres)}
          <br />
          {grand(h.titreLigne2)}
        </h1>
        <p className="hero-sub fade f4">{h.sousTitre}</p>
        <div className="cta-row fade f4">
          <a
            className="cta label"
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {h.cta}
          </a>
          <a className="cta cta-2 label" href={h.ctaSecondaire.ancre}>
            {h.ctaSecondaire.label}
          </a>
        </div>
        {/* métadonnée, pas un troisième appel : ni bouton ni encadré */}
        <p className="hero-signature label fade f5">{h.signature}</p>
      </div>

      <div className="scroll-cue fade f5" aria-hidden="true" />
      <p className="caption label fade f5">{h.legende1}</p>
    </section>
  );
}
