import Entete from "@/components/Entete";
import VideoHero from "@/components/VideoHero";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { grand } from "@/config/typo";

/* V80 · LE HERO, la planche au pixel : vidéo plein écran, 100svh avec
   repli 100vh, voile uniforme (jamais de dégradé, jamais de zoom, aucun
   filtre), en-tête transparent par-dessus, bloc de texte en bas à gauche,
   légende en bas à droite. Le hero reste excentré (v64) : ses 48 px de
   bord sont ceux de la planche, pas ceux du conteneur des sections.
   Le lien de préchargement du poster est rendu ici et hissé dans <head>
   par React : le poster est l'élément LCP, il doit partir avec le HTML.
   « haut », la cible du lien de marque, est sur <main>. */
export default function Hero() {
  const h = copy.hero;
  const m = brand.MEDIAS;
  return (
    <section className="hero">
      <link rel="preload" as="image" href={m.posterHero} />
      <VideoHero src={m.videoHero} srcMobile={m.videoHeroMobile} poster={m.posterHero} />
      <div className="hero-voile" aria-hidden="true" />
      <Entete cibleContenu="#service" />
      <div className="hero-bas">
        <div className="hero-texte">
          <h1>{grand(h.titre)}</h1>
          <p>{h.sous}</p>
          <a className="hero-lien" href={h.lien.href}>
            {h.lien.label}
          </a>
        </div>
        <p className="hero-legende">{h.legende}</p>
      </div>
    </section>
  );
}
