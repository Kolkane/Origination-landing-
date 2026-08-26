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
      {/* le fallback ne doit pas exister dans le HTML servi : masqué en CSS, il
          restait extractible par les crawlers et les extracteurs de texte */}
      {sansVideo && (
        <p className="video-note mono">
          {h.note1}
          <br />
          {h.note2}
        </p>
      )}

      <div className="nav">
        <span className="brand mono fade f1">
          <LogoImbrin taille={18} />
          <span>
            {brand.MARQUE} <small>· {brand.SUFFIXE}</small>
          </span>
        </span>
        <nav className="nav-r fade f1">
          {h.nav.map((lien) => (
            <a key={lien.ancre} href={lien.ancre} className="mono">
              {lien.label}
            </a>
          ))}
          <a href={h.navAppel.ancre} className="mono keep">
            {h.navAppel.label}
          </a>
        </nav>
      </div>

      <div className="hero-copy">
        {/* v40 : l'eyebrow REVIENT au-dessus du titre — la v39 l'avait
            descendu en légende, arbitrage Vincent du 27/08 : la première
            ligne qualifiante fait partie de la composition. */}
        <p className="eyebrow mono fade f2">{h.eyebrow}</p>
        {/* v41 : DEUX lignes, plus trois — le mot accentué ne prend plus
            sa ligne seul, il ouvre la seconde (arbitrage Vincent, 27/08). */}
        <h1 className="fade f3">
          {grand(h.titreLigne1)}
          <br />
          <em>{grand(h.titreLigne2Italique)}</em>
          {grand(h.titreLigne3)}
        </h1>
        <p className="hero-sub fade f4">{h.sousTitre}</p>
        <div className="cta-row fade f4">
          <a
            className="cta mono"
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {h.cta}
          </a>
          <a className="cta cta-2 mono" href={h.ctaSecondaire.ancre}>
            {h.ctaSecondaire.label}
          </a>
        </div>
        {/* métadonnée, pas un troisième appel : ni bouton ni encadré */}
        <p className="hero-signature mono fade f5">{h.signature}</p>
      </div>

      <div className="scroll-cue fade f5" aria-hidden="true" />
      <p className="caption mono fade f5">{h.legende1}</p>
    </section>
  );
}
