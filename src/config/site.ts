import { brand } from "./brand";

/* URL canonique dérivée du domaine de CONTACT_EMAIL : brand.ts reste la
   seule source à modifier quand le nom et le domaine seront choisis. */
export const SITE_URL = `https://${brand.CONTACT_EMAIL.split("@")[1]}`;
