import Analyses from "@/components/Analyses";
import CtaFinal from "@/components/CtaFinal";
import Dossier from "@/components/Dossier";
import Engagements from "@/components/Engagements";
import Entonnoir from "@/components/Entonnoir";
import Faq from "@/components/Faq";
import Fondateur from "@/components/Fondateur";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Mesure from "@/components/Mesure";
import Methode from "@/components/Methode";
import Offre from "@/components/Offre";
import Reveal from "@/components/Reveal";
import { faqSchema } from "@/config/schema";

export default function Home() {
  return (
    <main>
      {/* la FAQ n'existe que sur l'accueil : son balisage y reste */}
      <JsonLd data={faqSchema} />
      <Hero />
      <Dossier />
      <Entonnoir />
      <Methode />
      <Offre />
      <Engagements />
      <Mesure />
      <Fondateur />
      <Faq />
      <Analyses />
      <CtaFinal />
      <Reveal />
    </main>
  );
}
