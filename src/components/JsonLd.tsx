/* Balisage structuré. Rien de visible pour le lecteur, tout pour les moteurs
   et les modèles qui répondent à « qui est Imbrin Research ».

   Le « < » est échappé avant l'injection : sans ça, une chaîne contenant
   « </script> » refermerait la balise et le reste passerait en HTML. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
