import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import Diamond from "@/components/Diamond";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";
import "./globals.css";

const cabinet = localFont({
  src: [
    { path: "../../public/fonts/cabinet-grotesk-700.woff2", weight: "700" },
    { path: "../../public/fonts/cabinet-grotesk-800.woff2", weight: "800" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const switzer = localFont({
  src: [
    { path: "../../public/fonts/switzer-400.woff2", weight: "400" },
    { path: "../../public/fonts/switzer-500.woff2", weight: "500" },
  ],
  variable: "--font-switzer",
  display: "swap",
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
    <html
      lang="fr"
      className={`${cabinet.variable} ${switzer.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper font-sans text-body text-ink antialiased selection:bg-ink selection:text-paper">
        <header className="border-b border-hairline">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10">
            <p className="flex items-center gap-2.5 font-display text-base font-bold tracking-display">
              <Diamond taille={10} />
              {brand.MARQUE}
            </p>
            <a
              href={copy.header.zoneAncre}
              className="font-mono text-label uppercase tracking-label text-muted decoration-outremer decoration-2 underline-offset-4 hover:text-ink hover:underline"
            >
              {copy.header.zoneLien}
            </a>
          </div>
        </header>
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
