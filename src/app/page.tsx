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
      {/* v60 : la bande des refus se pose entre la méthode et l'offre —
          elle ferme la méthode sur ce qu'elle s'interdit, juste avant que
          l'offre demande de l'argent. Papier, comme la méthode : le trait
          de vin de la mention rayée ne donne que 2,32:1 sur l'encre et la
          charte v15 interdit le lift sur un filet. Mesuré : 198px à 1440. */}
      <NeFaitPas />
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
