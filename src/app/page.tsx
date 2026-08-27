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
      {/* v52 : les engagements sont supprimés (arbitrage Vincent, 27/08) —
          leurs quatre principes vivent déjà ailleurs : scores dans la
          méthode, premier contact et données grises dans la FAQ RGPD,
          opt-out dans le pied de l'offre, chiffres dans la mesure. */}
      {/* v53 : la mesure est supprimée — le suivi des cohortes vit en FAQ,
          le taux d'écart par lot dans la note du filtre, le zéro chiffre
          générique dans la FAQ. */}
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
