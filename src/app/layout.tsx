import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { fondateurSchema, organisationSchema } from "@/config/schema";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

/* ============================================================
   V80 · UNE SEULE FAMILLE (arbitrage Vincent, 17/09/2026, sur les
   planches MAQUETTE-V80-ACCUEIL.html et MAQUETTE-V80-ACCUEIL-MOBILE.html,
   qui font foi).
   Hanken Grotesk, 400, 500 et 600, romain, latin, et rien d'autre.
   Fraunces, Spectral et Cutive Mono sortent du site, image OpenGraph
   comprise. Ce que la v55 voulait se produit ici pour la première fois :
   la bascule ne touche que ce fichier et la ligne des trois rôles de
   globals.css, --f-display, --f-corps et --f-label, qui pointent tous
   sur la même variable. Ce sont des emplois, pas des polices, et ils
   gardent leur nom pour que la prochaine bascule ne coûte pas plus.
   Trois graisses statiques et non la fonte variable : on ne demande que
   ce qu'on compose (leçon v58). Aucune italique : plus aucun mot en
   italique dans un titre. */
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.meta.title,
  description: copy.meta.description,
  /* v70 : PLUS DE CANONIQUE ICI. Une valeur posée sur le layout est
     HÉRITÉE par toute page qui ne la redéclare pas, et c'est ainsi que
     /confidentialite et /mentions-legales se sont annoncées pendant des
     mois comme des copies de l'accueil, donc comme des pages à ne pas
     indexer (corrigé en v69). Le piège est retiré à sa racine : chaque
     page déclare le sien, l'accueil compris, dans src/app/page.tsx. */
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
  },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    locale: "fr_FR",
    type: "website",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={hanken.variable}>
      <head>
        {/* sans JavaScript, aucun bloc animé ne doit rester invisible :
            les apparitions au scroll sont un agrément, jamais une condition
            d'accès au contenu.
            V80, lot 0 : ce bloc décrit encore les composants de la DA v7
            (toise, viseur, Reveal). Il meurt avec eux aux lots 2 et 3. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                /* refonte 2026-08 : les sélecteurs .funnel/.step ont disparu
                   avec les barres de l'entonnoir, la cascade passe par .rev */
                ".rev,.mask{opacity:1!important;transform:none!important;clip-path:none!important}" +
                /* v50 : la toise cache ses crans et n'affiche qu'un texte à
                   la fois ; sans JavaScript, tout se lit : crans posés,
                   trait tracé, et les cinq textes reprennent le flux au
                   lieu de s'empiler dans la même cellule */
                ".cran{opacity:1!important;transform:none!important}.toise-ligne line{stroke-dashoffset:0!important}.toise-scale::after{opacity:1!important}.toise-detail{display:block!important}.td{opacity:1!important;margin-top:10px}" +
                /* le viseur du dossier n'a plus de nav pour changer de zone :
                   la scène repasse en flux normal et les six zones se lisent
                   à la suite, comme un document entier */
                ".d-scene{display:block!important}.d-scene .zone,.d-scene .zone *{opacity:1!important;transform:none!important;filter:none!important;animation:none!important}.d-scene .zone{pointer-events:auto!important}.d-scene .zone+.zone{margin-top:26px;padding-top:22px;border-top:1px solid var(--ink-line)}",
            }}
          />
        </noscript>
      </head>
      <body>
        {/* l'identité de l'entreprise et du fondateur vaut pour toutes les
            pages : elle est portée par le layout, pas par l'accueil */}
        <JsonLd data={organisationSchema} />
        <JsonLd data={fondateurSchema} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
