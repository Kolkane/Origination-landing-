"use client";

import { useEffect, useRef } from "react";

/* V80 · LA VIDÉO DU HERO. Le poster est l'élément LCP : il est dans le
   HTML (attribut poster) et préchargé depuis Hero.tsx ; la vidéo n'est
   pas en preload="auto", elle ne charge que ses métadonnées tant que rien
   ne la lance. Pas d'attribut autoplay non plus : c'est ce composant qui
   appelle play(), muet, et seulement si le visiteur n'a pas demandé moins
   de mouvement. Sous prefers-reduced-motion elle ne démarre jamais, le
   poster reste, et un changement de préférence en cours de visite est
   suivi. Sans JavaScript, même résultat : le poster.
   Quand le fichier ne charge pas, le hero prend le poster en fond et la
   balise sort de l'image (v56 : un média en échec laisse un cadre vide
   ou une icône cassée selon le navigateur). */
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

  const sansVideo = () =>
    ref.current?.closest(".hero")?.classList.add("sans-video");

  return (
    <video
      ref={ref}
      className="hero-video"
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      onError={sansVideo}
    >
      <source src={src} type="video/mp4" onError={sansVideo} />
    </video>
  );
}
