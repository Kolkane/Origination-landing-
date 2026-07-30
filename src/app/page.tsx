import CtaFinal from "@/components/CtaFinal";
import Dossier from "@/components/Dossier";
import Engagements from "@/components/Engagements";
import Entonnoir from "@/components/Entonnoir";
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
      <Entonnoir />
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
