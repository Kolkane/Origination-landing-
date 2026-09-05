import type { MetadataRoute } from "next";
import { analyses } from "@/config/analyses";
import { SITE_URL } from "@/config/site";

type Page = {
  chemin: string;
  priorite: number;
  frequence: "monthly" | "yearly";
};

/* Les pages fixes du site. Pas de lastModified ici : il vaudrait la date du
   build et non celle du contenu, ce qui n'apprend rien à un robot. */
const PAGES: Page[] = [
  { chemin: "/", priorite: 1, frequence: "monthly" },
  /* v68 : la page des dirigeants est INDEXABLE et compte : elle est le
     point d'arrivée de celui qui cherche « Imbrin Research » après avoir
     reçu un courrier. Priorité au-dessus des pages légales. */
  { chemin: "/dirigeants", priorite: 0.6, frequence: "yearly" },
  { chemin: "/mentions-legales", priorite: 0.2, frequence: "yearly" },
  { chemin: "/confidentialite", priorite: 0.2, frequence: "yearly" },
];

/* Les analyses se concatènent depuis leur source : un article ajouté à
   src/config/analyses.ts entre au sitemap sans qu'on touche à cette
   fonction. Elles, en revanche, ont une vraie date de publication. */
export default function sitemap(): MetadataRoute.Sitemap {
  const fixes = PAGES.map(({ chemin, priorite, frequence }) => ({
    url: `${SITE_URL}${chemin}`,
    changeFrequency: frequence,
    priority: priorite,
  }));

  const articles = analyses.map((article) => ({
    url: `${SITE_URL}/analyses/${article.slug}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...fixes, ...articles];
}
