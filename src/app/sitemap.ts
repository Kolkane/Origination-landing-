import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/mentions-legales`, priority: 0.2 },
    { url: `${SITE_URL}/confidentialite`, priority: 0.2 },
  ];
}
