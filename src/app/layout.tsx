import type { Metadata } from "next";
import { Familjen_Grotesk, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { fondateurSchema, organisationSchema } from "@/config/schema";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

/* Display v18 : grotesque à la place du serif. Familjen Grotesk est variable
   (wght 400-700), on ne fixe donc pas de poids : les titres restent à 400.
   Son italique est une VRAIE italique, aux formes redessinées (le « a » passe
   de deux étages à un seul), pas une oblique penchée. C'est ce qui permet de
   garder l'accent italique du hero et de l'entonnoir après la bascule. */
const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-familjen",
  display: "swap",
});

/* Corps v30 : Source Serif 4 remplace Literata. Le motif de la v28 tient
   toujours, une serif de labeur plutôt qu'une grotesque, mais Literata a été
   dessinée pour la lecture longue sur liseuse : elle est trop littéraire pour
   un document financier. Source Serif est une serif de travail, du même
   registre que les caractères des documents imprimés que la page revendique.
   400 et 500 seulement, romain : les trois italiques du site sont tous portés
   par Familjen, aucun ne tombe dans du texte de corps.

   OBSERVATION, à trancher en prod et hors de ce commit : la hauteur d'x tombe
   de 50,7 % du corps (Literata) à 47,5 % (Source Serif 4), contre 53,0 % pour
   Geist. À font-size égale le texte paraîtra donc plus petit. AUCUNE font-size
   n'a été touchée ici : la taille apparente est une seconde variable, on la
   juge sur pièce avant d'y toucher, sinon deux changements se masquent l'un
   l'autre. C'est exactement ce qui s'est produit en v28, où le choix de
   Literata avait été calé sur sa hauteur d'x et où le déplacement réel, celui
   des largeurs en ch, est passé inaperçu. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-source-serif",
  display: "swap",
});

/* Geist Mono reste : absent du catalogue next/font/google de Next 14.2
   (snapshot antérieur à sa publication), self-hosté avec le woff2 variable
   officiel servi par Google Fonts, même rendu. */
const geistMono = localFont({
  src: "../../public/fonts/geist-mono-variable.woff2",
  weight: "100 900",
  variable: "--font-geist-mono",
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
      className={`${familjen.variable} ${sourceSerif.variable} ${geistMono.variable}`}
    >
      <head>
        {/* sans JavaScript, aucun bloc animé ne doit rester invisible :
            les apparitions au scroll sont un agrément, jamais une condition
            d'accès au contenu */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".rev,.mask,.rule,.funnel .step,.funnel .step-n,.funnel .step-l,.c-cell{opacity:1!important;transform:none!important;clip-path:none!important}" +
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
