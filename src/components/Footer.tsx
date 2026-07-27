import { brand } from "@/config/brand";
import { copy } from "@/config/copy";

export default function Footer() {
  const f = copy.footer;
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-baseline gap-x-6 gap-y-3 px-6 py-8 font-mono text-label text-muted lg:px-10">
        <p className="uppercase text-ink">{f.marque}</p>
        <a href={f.mentions.href} className="hover:text-ink">
          {f.mentions.label}
        </a>
        <a href={f.confidentialite.href} className="hover:text-ink">
          {f.confidentialite.label}
        </a>
        <a
          href={brand.LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink"
        >
          {f.linkedin}
        </a>
        <p>{f.note}</p>
        <p>{f.copyright}</p>
      </div>
    </footer>
  );
}
