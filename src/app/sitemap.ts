import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

type Page = {
  chemin: string;
  priorite: number;
  frequence: "monthly" | "yearly";
};

/* Les pages du site. Les articles à venir s'ajoutent ici, ou se génèrent
   depuis leur source et se concatènent : la forme du sitemap ne bouge pas.
   Pas de lastModified sur les pages statiques : il vaudrait la date du build
   et non celle du contenu, ce qui n'apprend rien à un robot. Les articles,
   eux, porteront la leur. */
const PAGES: Page[] = [
  { chemin: "/", priorite: 1, frequence: "monthly" },
  { chemin: "/mentions-legales", priorite: 0.2, frequence: "yearly" },
  { chemin: "/confidentialite", priorite: 0.2, frequence: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ chemin, priorite, frequence }) => ({
    url: `${SITE_URL}${chemin}`,
    changeFrequency: frequence,
    priority: priorite,
  }));
}
