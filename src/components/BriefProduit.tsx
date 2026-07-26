import BriefSpecimen from "@/components/BriefSpecimen";
import Section from "@/components/Section";
import { copy } from "@/config/copy";

export default function BriefProduit() {
  return (
    <Section label={copy.briefProduit.label}>
      <p className="max-w-[68ch] text-body text-muted">{copy.briefProduit.corps}</p>
      <div className="mt-14">
        <BriefSpecimen mode="detail" />
      </div>
    </Section>
  );
}
