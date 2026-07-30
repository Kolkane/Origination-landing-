import BandeChiffres from "@/components/BandeChiffres";
import Constat from "@/components/Constat";
import CtaFinal from "@/components/CtaFinal";
import Dossier from "@/components/Dossier";
import Engagements from "@/components/Engagements";
import Faq from "@/components/Faq";
import Fondateur from "@/components/Fondateur";
import Hero from "@/components/Hero";
import Mesure from "@/components/Mesure";
import Methode from "@/components/Methode";
import Offre from "@/components/Offre";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Dossier />
      <Constat />
      <BandeChiffres />
      <Methode />
      <Offre />
      <Engagements />
      <Mesure />
      <Fondateur />
      <Faq />
      <CtaFinal />
      <Reveal />
    </main>
  );
}
