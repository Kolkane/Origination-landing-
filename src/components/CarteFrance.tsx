import { copy } from "@/config/copy";

/* Placeholder : la carte interactive des régions est construite à l'étape 3.
   Les hachures diagonales sont la signature visuelle réservée à la carte. */
export default function CarteFrance() {
  return (
    <div id="carte" className="border border-hairline">
      <div
        className="flex aspect-[16/10] items-center justify-center p-6"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 7px, #D9D2C3 7px, #D9D2C3 8px)",
        }}
      >
        <p className="border border-hairline bg-paper px-4 py-2 text-center font-mono text-label uppercase tracking-label text-muted">
          {copy.exclusivite.carteNote}
        </p>
      </div>
    </div>
  );
}
