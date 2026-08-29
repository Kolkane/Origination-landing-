import type { Metadata } from "next";
import { Cutive_Mono, Fraunces, Spectral } from "next/font/google";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { fondateurSchema, organisationSchema } from "@/config/schema";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

/* ============================================================
   v55 · LA BASCULE TYPOGRAPHIQUE (arbitrage Vincent, 29/08/2026,
   sur la planche MAQUETTE-V55-TYPO.html, qui fait foi).
   Direction C pour le SITE, direction B pour les DOCUMENTS.

   Motif : « ça fait beaucoup site généré par l'IA, encore moins
   dans les documents ». Le diagnostic tenait en une incohérence de
   cette charte : la v28 a retiré Geist Sans au motif qu'elle est
   « la police maison de Vercel, devenue le signe des sites
   générés », et la dernière ligne du même amendement disait
   « GEIST MONO RESTE ». Or c'est Geist Mono qui composait les 25
   libellés du spécimen. Un acte, un Kbis, un rapport de commissaire
   aux comptes n'étiquettent jamais leurs champs en capitales
   monospace espacées : c'est le vocabulaire d'un tableau de bord,
   et c'est ce qui faisait que le document « se voyait généré ».

   Les VARIABLES SONT NOMMÉES PAR RÔLE, pas par police. C'est le
   principe déjà posé en v18 (.serif renommée .display) et en v28
   (la clé « sans » renommée « corps ») : le nom ne doit pas mentir
   à la prochaine bascule. Celle-ci est la quatrième, elle n'aurait
   pas dû toucher autre chose que ce fichier, et elle a quand même
   dû renommer --font-familjen dans vingt-trois déclarations. Plus
   maintenant : globals.css ne connaît que --f-display, --f-corps
   et --f-label.
   ============================================================ */

/* DISPLAY · Fraunces. Variable, avec deux axes qui n'existent chez
   presque personne : WONK, qui bascule vers des dessins volontairement
   irréguliers, réglé à 1 dans globals.css. Une police qui a l'air
   DESSINÉE, ce qu'aucun générateur ne produit. L'optique (opsz) reste
   demandée, elle s'applique automatiquement selon la taille.
   Elle reprend les trois italiques du site, que Familjen portait.
   v58 : L'AXE SOFT EST SORTI DE LA LISTE. Il était demandé puis réglé
   à 0 dans globals.css, c'est-à-dire à sa PROPRE VALEUR PAR DÉFAUT :
   il ne changeait rien au rendu et se payait quand même, parce qu'un
   axe demandé fait servir la fonte variable sur cet axe. Mesuré au
   build : 305 Ko de fontes préchargées avec lui, 187 Ko sans, et 677
   contre 425 Ko en tout. 118 Ko préchargés pour rien.
   Retirer aussi opsz descendrait à 121 Ko préchargés, mais coûterait
   l'optique automatique, qui elle se voit entre un titre de 62px et
   un libellé de 10px : ce serait un arbitrage de rendu, pas un gain
   gratuit, et il n'a pas été pris. */
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

/* CORPS · Spectral, dessinée par Production Type, fonderie
   parisienne, commandée par Google pour la lecture à l'écran :
   une serif de travail, du registre des documents imprimés que la
   page revendique. 400 et 500, romain, latin — exactement le
   gabarit que tenait Source Serif 4, pour que les <b> continuent
   de tomber sur 500 et qu'aucune graisse ne se synthétise.
   Aucun italique : les trois du site sont portés par le display. */
const corps = Spectral({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-corps",
  display: "swap",
});

/* LIBELLÉS · Cutive Mono. Une machine à écrire, pas une police de
   code : c'est tout le sujet de la bascule. Plus sobre que Courier,
   sans son cliché de scénario. Un seul dessin, une seule graisse,
   comme une vraie machine.
   Elle ne compose QUE la page. Dans les documents — le spécimen du
   dossier et la fiche du devis — les libellés passent à Spectral,
   sans aucun monospace : c'est la direction B, retenue là pour son
   espacement, plus confortable à l'oeil. La bascule se fait par le
   token --f-label, redéfini sur .doc et .fiche-o dans globals.css. */
const label = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/" },
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
    <html
      lang="fr"
      className={`${display.variable} ${corps.variable} ${label.variable}`}
    >
      <head>
        {/* sans JavaScript, aucun bloc animé ne doit rester invisible :
            les apparitions au scroll sont un agrément, jamais une condition
            d'accès au contenu */}
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
