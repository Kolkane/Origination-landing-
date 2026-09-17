import type { Metadata } from "next";
import Analyses from "@/components/Analyses";
import BarreAction from "@/components/BarreAction";
import CtaFinal from "@/components/CtaFinal";
import Dossier from "@/components/Dossier";
import Entonnoir from "@/components/Entonnoir";
import Faq from "@/components/Faq";
import Fondateur from "@/components/Fondateur";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Methode from "@/components/Methode";
import NeFaitPas from "@/components/NeFaitPas";
import Offre from "@/components/Offre";
import Reveal from "@/components/Reveal";
import Service from "@/components/Service";
import { faqSchema } from "@/config/schema";

/* v70 : le canonique de l'accueil est EXPLICITE, comme sur toutes les
   autres pages. Il était hérité du layout, ce qui le rendait invisible
   ici et le posait en silence sur les pages qui n'en déclaraient pas. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    /* V80 : « haut » est la cible du lien de marque de l'en-tête et du
       pied. Sur <main> et non sur le hero, qui garde « hero » pour
       BarreAction jusqu'au lot 3. */
    <main id="haut">
      {/* la FAQ n'existe que sur l'accueil : son balisage y reste */}
      <JsonLd data={faqSchema} />
      {/* V80 · l'ordre des planches, jusqu'où il est porté. Les quatre
          premières sections sont celles de la V80 ; les six suivantes
          sont encore celles de la DA v7 et meurent au lot 3, où
          Conditions, À propos, Analyses et Prendre rendez-vous prennent
          leur place. */}
      <Hero />
      <Service />
      <Dossier />
      <Methode />
      <Entonnoir />
      <NeFaitPas />
      <Offre />
      <Fondateur />
      <Analyses />
      <Faq />
      <CtaFinal />
      <Reveal />
      {/* v25 : posée en dernier, elle recouvre la page sans jamais s'insérer
          dans sa lecture. Elle n'existe que sur l'accueil, seule page à porter
          les deux ancres qu'elle observe. */}
      <BarreAction />
    </main>
  );
}
