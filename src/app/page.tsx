import BriefProduit from "@/components/BriefProduit";
import Constat from "@/components/Constat";
import CtaFinal from "@/components/CtaFinal";
import Engagements from "@/components/Engagements";
import Exclusivite from "@/components/Exclusivite";
import Faq from "@/components/Faq";
import Fondateur from "@/components/Fondateur";
import Hero from "@/components/Hero";
import Methode from "@/components/Methode";
import Offre from "@/components/Offre";

export default function Home() {
  return (
    <main>
      <Hero />
      <Constat />
      <Methode />
      <BriefProduit />
      <Offre />
      <Exclusivite />
      <Engagements />
      <Fondateur />
      <Faq />
      <CtaFinal />
    </main>
  );
}
