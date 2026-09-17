"use client";

import { useEffect, useRef } from "react";

/* V80 · LA VIDÉO DU HERO. Le poster est l'élément LCP : il est dans le
   HTML (attribut poster) et préchargé depuis Hero.tsx ; la vidéo n'a ni
   autoplay ni source dans le HTML. C'est ce composant qui, une fois et
   avant de lancer la lecture, choisit la source d'après la largeur de
   l'écran : sous 761 px, le recadrage portrait de scripts/video-mobile.mjs
   (626 × 834, la bande que object-fit: cover montre de toute façon,
   402 Ko), au-dessus le clip entier (1,68 Mo). Même poster dans les deux
   cas. Le choix n'est pas refait à la rotation : une vidéo qui recharge
   en cours de boucle serait pire qu'une bande un peu large.
   Puis play(), muet, seulement si le visiteur n'a pas demandé moins de
   mouvement ; sous prefers-reduced-motion elle ne démarre jamais, le
   poster reste, et un changement de préférence en cours de visite est
   suivi. Sans JavaScript, même résultat : le poster.
   Quand le fichier ne charge pas, le hero prend le poster en fond et la
   balise sort de l'image (v56). */
type Props = { src: string; srcMobile: string; poster: string };

export default function VideoHero({ src, srcMobile, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const sansVideo = () => video.closest(".hero")?.classList.add("sans-video");
    video.addEventListener("error", sansVideo);
    video.src = window.matchMedia("(max-width: 760px)").matches ? srcMobile : src;

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
    return () => {
      mq.removeEventListener("change", appliquer);
      video.removeEventListener("error", sansVideo);
    };
  }, [src, srcMobile]);

  return (
    <video
      ref={ref}
      className="hero-video"
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    />
  );
}
