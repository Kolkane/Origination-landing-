"use client";

import { useEffect, useRef, useState } from "react";
import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

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
      <p className="video-note mono">
        {h.note1}
        <br />
        {h.note2}
      </p>

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
        <p className="eyebrow mono fade f2">{h.eyebrow}</p>
        <h1 className="fade f3">
          {h.titreLigne1}
          <br />
          {h.titreLigne2} <em>{h.titreItalique}</em>.
        </h1>
        <p className="hero-sub fade f4">{h.sousTitre}</p>
        <a
          className="cta mono fade f4"
          href={brand.CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {h.cta}
        </a>
      </div>

      <div className="scroll-cue fade f5" aria-hidden="true" />
      <p className="caption mono fade f5">{h.legende1}</p>
    </section>
  );
}
