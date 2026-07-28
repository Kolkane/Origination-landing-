import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
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
      <body className="bg-paper font-sans text-body text-ink antialiased">{children}</body>
    </html>
  );
}
