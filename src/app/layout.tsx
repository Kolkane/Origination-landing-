import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import Footer from "@/components/Footer";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

/* italique volontairement non embarqué : seule l'exergue l'utilise, le
   navigateur synthétise l'oblique — 131 Ko de préchargement économisés */
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.meta.title,
  description: copy.meta.description,
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
    <html lang="fr" className={`${newsreader.variable} ${plexMono.variable}`}>
      <body className="bg-paper font-serif text-body text-ink antialiased selection:bg-ink selection:text-paper">
        <header className="border-b border-hairline">
          <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5 lg:px-10">
            <p className="font-mono text-xs font-medium uppercase tracking-label">
              {brand.MARQUE}
            </p>
            <a
              href={copy.header.zoneAncre}
              className="font-mono text-label uppercase tracking-label text-muted hover:text-ink"
            >
              {copy.header.zoneLien}
            </a>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
