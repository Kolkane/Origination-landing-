"use client";

import { useState } from "react";
import Diamond from "@/components/Diamond";
import { VIEWBOX, tracesRegions } from "@/components/carte/france-regions";
import { brand, regions, type RegionStatus } from "@/config/brand";
import { copy } from "@/config/copy";

const remplissages: Record<RegionStatus, string> = {
  disponible: "fill-paper hover:fill-outremer/[0.08] focus-visible:fill-outremer/[0.08]",
  /* l'état « en discussion » est l'un des emplois autorisés de l'outremer */
  en_discussion: "fill-outremer",
  exclusivite: "fill-[url(#hachures)]",
};

const losangesLegende: Record<RegionStatus, string> = {
  disponible: "fill-paper stroke-ink",
  en_discussion: "fill-outremer",
  exclusivite: "fill-ink",
};

/* normalisation typographique d'affichage (brand.ts reste la source exacte) */
const typo = (s: string) => s.replace(/'/g, "’");

export default function CarteFrance() {
  const [slugActif, setSlugActif] = useState<string | null>(null);
  const [slugFocus, setSlugFocus] = useState<string | null>(null);
  const c = copy.carte;
  const regionActive = regions.find((r) => r.slug === slugActif) ?? null;

  const basculer = (slug: string) =>
    setSlugActif((actif) => (actif === slug ? null : slug));

  /* contours redessinés APRÈS toutes les régions : sinon le trait de focus
     serait recouvert par le fill des voisines peintes ensuite ; encre sur
     les régions outremer, outremer partout ailleurs */
  const contours = Array.from(
    new Set([slugActif, slugFocus].filter((s): s is string => s !== null))
  );

  return (
    <div id="carte" className="grid gap-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-7">
        <svg
          viewBox={VIEWBOX}
          role="group"
          aria-label={c.ariaCarte}
          className="mx-auto w-full max-w-[320px] md:max-w-none"
        >
          <defs>
            {/* tuile calibrée sur le rendu desktop (~600px pour 100 unités) :
                0.8 unité ≈ 5px et 0.18 unité ≈ 1px, orientation « \ » comme
                les hachures de la légende */}
            <pattern
              id="hachures"
              width="0.8"
              height="0.8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <line
                x1="0.4"
                y1="0"
                x2="0.4"
                y2="0.8"
                strokeWidth="0.18"
                className="stroke-ink"
              />
            </pattern>
          </defs>
          {regions.map((region) => {
            const trace = tracesRegions[region.slug];
            if (!trace) return null;
            return (
              <path
                key={region.slug}
                id={region.slug}
                d={trace}
                role="button"
                tabIndex={0}
                aria-label={`${typo(region.nom)} — ${c.statuts[region.statut].label}`}
                aria-pressed={slugActif === region.slug}
                vectorEffect="non-scaling-stroke"
                onClick={() => basculer(region.slug)}
                onKeyDown={(evenement) => {
                  if (evenement.key === "Enter" || evenement.key === " ") {
                    evenement.preventDefault();
                    basculer(region.slug);
                  }
                }}
                onFocus={() => setSlugFocus(region.slug)}
                onBlur={() => setSlugFocus(null)}
                className={`cursor-pointer stroke-ink outline-none ${
                  remplissages[region.statut]
                }`}
              />
            );
          })}
          {contours.map((slug) => {
            const statut = regions.find((r) => r.slug === slug)?.statut;
            return (
              <path
                key={`contour-${slug}`}
                d={tracesRegions[slug]}
                aria-hidden="true"
                vectorEffect="non-scaling-stroke"
                className={`pointer-events-none fill-none stroke-2 ${
                  statut === "en_discussion" ? "stroke-ink" : "stroke-outremer"
                }`}
              />
            );
          })}
        </svg>

        <ul role="list" className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {(Object.keys(c.statuts) as RegionStatus[]).map((statut) => (
            <li key={statut} className="flex items-center gap-2">
              <Diamond taille={9} className={losangesLegende[statut]} />
              <span className="font-mono text-label uppercase tracking-label text-muted">
                {c.statuts[statut].label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* sur mobile, la liste est le chemin principal ; order-last la place
          sous le panneau pour que celui-ci reste « sous la carte » */}
      <ul role="list" className="order-last border-b border-hairline md:hidden">
        {regions.map((region) => (
          <li key={region.slug} className="border-t border-hairline">
            <button
              type="button"
              onClick={() => basculer(region.slug)}
              aria-pressed={slugActif === region.slug}
              className="flex w-full items-baseline justify-between gap-4 py-3 text-left aria-pressed:bg-paper-dim"
            >
              <span className="font-medium">{typo(region.nom)}</span>
              <span className="shrink-0 font-mono text-label uppercase tracking-label text-muted">
                {c.statuts[region.statut].label}{" "}
                <span aria-hidden="true" className="text-ink">
                  ›
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div
        aria-live="polite"
        className="self-start border border-hairline p-6 md:col-span-5 lg:p-8"
      >
        {regionActive ? (
          <>
            <h3 className="font-display text-xl font-bold tracking-display">
              {typo(regionActive.nom)}
            </h3>
            <p className="mt-2 font-mono text-label uppercase tracking-label text-muted">
              {c.statuts[regionActive.statut].label}
            </p>
            <p className="mt-4 max-w-[48ch] text-body">
              {c.statuts[regionActive.statut].texte}
            </p>
            <a
              href={brand.CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block w-full bg-ink px-6 py-3.5 text-center font-mono text-xs uppercase tracking-label text-paper transition-colors duration-150 hover:bg-outremer sm:w-auto"
            >
              {c.bouton}
            </a>
          </>
        ) : (
          <p className="font-mono text-label uppercase tracking-label text-muted">
            {c.panneauVide}
          </p>
        )}
      </div>
    </div>
  );
}
