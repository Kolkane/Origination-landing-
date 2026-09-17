import type { Metadata } from "next";
import Analyses from "@/components/Analyses";
import APropos from "@/components/APropos";
import Conditions from "@/components/Conditions";
import Dossier from "@/components/Dossier";
import Hero from "@/components/Hero";
import Methode from "@/components/Methode";
import RendezVous from "@/components/RendezVous";
import Service from "@/components/Service";

/* v70 : le canonique de l'accueil est EXPLICITE, comme sur toutes les
   autres pages. Il était hérité du layout, ce qui le rendait invisible
   ici et le posait en silence sur les pages qui n'en déclaraient pas. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* V80 · L'ACCUEIL, dans l'ordre des planches : hero, ce que fait Imbrin
   Research, le dossier d'approche, la méthode, les conditions, à propos,
   les analyses, prendre rendez-vous. Le pied de page vient du layout.
   Rien n'apparaît au défilement, rien ne se recouvre : plus de Reveal,
   plus de barre d'action mobile, plus de FAQ ni de balisage FAQPage.
   « haut » est la cible du lien de marque de l'en-tête et du pied. */
export default function Home() {
  return (
    <main id="haut">
      <Hero />
      <Service />
      <Dossier />
      <Methode />
      <Conditions />
      <APropos />
      <Analyses />
      <RendezVous />
    </main>
  );
}
