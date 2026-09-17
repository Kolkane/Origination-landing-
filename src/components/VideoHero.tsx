"use client";

import { useEffect, useRef } from "react";

/* V80 · LA VIDÉO DU HERO. Le poster est l'élément LCP : il est dans le
   HTML (attribut poster) et préchargé depuis Hero.tsx.
   v82 (arbitrage Vincent, 17/09/2026) : RETOUR À LA MÉCANIQUE V78. La
   source est dans le HTML, avec autoplay et preload="auto" : le
   navigateur charge le clip dès la réception de la page et le lance
   lui-même, sans attendre l'hydratation. Le lot 4 bis avait retiré la
   source du HTML, mis preload="metadata" et fait poser la source par ce
   composant avant un play() forcé sur un tampon vide : la vidéo
   saccadait au départ. Le même lot servait sous 761 px un recadrage à
   626 px et 407 kb/s, agrandi près de deux fois sur un écran de
   téléphone : pixellisé. Un seul fichier pour tous, 1112 × 834.
   Ce qui reste à ce composant : forcer muted en propriété (React ne
   sérialise pas l'attribut, et sans lui l'autoplay est bloqué) et
   relancer play() au cas où le navigateur a tenté trop tôt ; ne pas
   lancer sous prefers-reduced-motion, le poster reste, et suivre un
   changement de préférence en cours de visite.
   Quand le fichier ne charge pas, le hero prend le poster en fond et la
   balise sort de l'image (v56). */
type Props = { src: string; poster: string };

export default function VideoHero({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const appliquer = () => {
      if (mq.matches) {
        video.pause();
        return;
      }
      video.muted = true;
      video.play().catch(() => {});
    };
    appliquer();
    mq.addEventListener("change", appliquer);
    return () => mq.removeEventListener("change", appliquer);
  }, []);

  const sansVideo = () => ref.current?.closest(".hero")?.classList.add("sans-video");

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      onError={sansVideo}
    >
      <source src={src} type="video/mp4" onError={sansVideo} />
    </video>
  );
}
