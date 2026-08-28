import LogoImbrin from "@/components/LogoImbrin";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Footer() {
  const f = copy.footer;
  return (
    <footer>
      <span className="marque">
        <LogoImbrin taille={14} />
        {f.gauche}
      </span>
      <div className="links label">
        <a href={f.mentions.href}>{f.mentions.label}</a>
        <a href={f.confidentialite.href}>{f.confidentialite.label}</a>
        <a href={brand.TELEPHONE.lien}>{brand.TELEPHONE.affiche}</a>
        <a href={brand.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          {f.linkedin}
        </a>
        <span>{f.note}</span>
      </div>
    </footer>
  );
}
