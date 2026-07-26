type SectionProps = {
  id?: string;
  label: string;
  children: React.ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <h2 className="font-mono text-label uppercase tracking-label text-muted lg:col-span-3">
          {label}
        </h2>
        <div className="mt-8 lg:col-span-9 lg:mt-0">{children}</div>
      </div>
    </section>
  );
}
