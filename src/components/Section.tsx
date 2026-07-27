import Diamond from "@/components/Diamond";

type SectionProps = {
  id?: string;
  label: string;
  children: React.ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-hairline">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-8 px-6 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
        <h2 className="flex gap-2 font-mono text-label uppercase tracking-label text-muted lg:col-span-2">
          <Diamond taille={8} className="mt-[3px] fill-ink" />
          {label}
        </h2>
        <div data-reveal className="mt-7 lg:col-span-9 lg:col-start-3 lg:mt-0">
          {children}
        </div>
      </div>
    </section>
  );
}
