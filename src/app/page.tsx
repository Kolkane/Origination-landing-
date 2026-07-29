import BandeChiffres from "@/components/BandeChiffres";
import Constat from "@/components/Constat";
import CtaFinal from "@/components/CtaFinal";
import Engagements from "@/components/Engagements";
import Faq from "@/components/Faq";
import Fondateur from "@/components/Fondateur";
import Hero from "@/components/Hero";
import Methode from "@/components/Methode";
import Offre from "@/components/Offre";
import Produit from "@/components/Produit";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Constat />
      <BandeChiffres />
      <Methode />
      <Produit />
      <Offre />
      <Engagements />
      <Fondateur />
      <Faq />
      <CtaFinal />
      <Reveal />
    </main>
  );
}
