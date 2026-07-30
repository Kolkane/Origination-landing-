import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

/* Geist et Geist Mono sont absents du catalogue next/font/google de Next 14.2
   (snapshot antérieur à leur publication) : self-hostées via next/font/local
   avec les woff2 variables officiels servis par Google Fonts : même rendu. */
const geist = localFont({
  src: "../../public/fonts/geist-variable.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

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
      className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        {/* sans JavaScript, aucun bloc animé ne doit rester invisible :
            les apparitions au scroll sont un agrément, jamais une condition
            d'accès au contenu */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".rev,.mask,.rule,.funnel .step,.funnel .step-n,.funnel .step-l{opacity:1!important;transform:none!important;clip-path:none!important}",
            }}
          />
        </noscript>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
