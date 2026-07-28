import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

/* TODO : LINKEDIN_URL est encore un placeholder dans brand.ts : le lien
   LinkedIn ne se rend pas tant que l'URL réelle n'est pas renseignée. */
const linkedinRenseigne = !brand.LINKEDIN_URL.includes("A-REMPLACER");

export default function Footer() {
  const f = copy.footer;
  return (
    <footer>
      <span className="marque">
        <LogoImbrin taille={14} />
        {f.gauche}
      </span>
      <div className="links mono">
        <a href={f.mentions.href}>{f.mentions.label}</a>
        <a href={f.confidentialite.href}>{f.confidentialite.label}</a>
        {linkedinRenseigne ? (
          <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            {f.linkedin}
          </a>
        ) : null}
        <span>{f.note}</span>
      </div>
    </footer>
  );
}
