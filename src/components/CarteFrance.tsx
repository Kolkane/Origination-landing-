"use client";

import { useState } from "react";
import Diamond from "@/components/Diamond";
import { VIEWBOX, paths } from "@/components/carte/france-paths";
import { brand, regions, type RegionStatus } from "@/config/brand";
import { copy } from "@/config/copy";

const tracesRegions: Record<string, string> = Object.fromEntries(
  paths.map((p) => [p.slug, p.d])
);

const remplissages: Record<RegionStatus, string> = {
  disponible: "fill-paper hover:fill-outremer/[0.08] focus-visible:fill-outremer/[0.08]",
  /* l'état « en discussion » est l'un des emplois autorisés de l'outremer */
  en_discussion: "fill-outremer/[0.12]",
  exclusivite: "fill-[url(#hachures)]",
};

/* petites régions dont la cible tactile est élargie par un halo transparent */
const CIBLES_ELARGIES = ["ile-de-france", "corse"];

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
     serait recouvert par le fill des voisines peintes ensuite */
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
            {/* tuile calibrée sur le rendu desktop (~600px pour 800 unités) :
                6.7 unités ≈ 5px et 1.3 unité ≈ 1px, orientation « \ » comme
                le losange hachuré de la légende */}
            <pattern
              id="hachures"
              width="6.7"
              height="6.7"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <line
                x1="3.35"
                y1="0"
                x2="3.35"
                y2="6.7"
                strokeWidth="1.3"
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
                aria-label={`${typo(region.nom)}, ${c.statuts[region.statut].label}`}
                aria-pressed={slugActif === region.slug}
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
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
          {/* halos transparents : élargissent la cible tactile des petites
              régions (~12px de plus tout autour, en pixels écran), inertes
              sur les écrans à souris pour ne pas voler hover et clic */}
          {CIBLES_ELARGIES.map((slug) =>
            tracesRegions[slug] ? (
              <path
                key={`halo-${slug}`}
                d={tracesRegions[slug]}
                aria-hidden="true"
                fill="transparent"
                stroke="transparent"
                strokeWidth={24}
                vectorEffect="non-scaling-stroke"
                className="cursor-pointer [@media(hover:hover)]:pointer-events-none"
                onClick={() => basculer(slug)}
              />
            ) : null
          )}
          {contours.map((slug) => (
            <path
              key={`contour-${slug}`}
              d={tracesRegions[slug]}
              aria-hidden="true"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              className="pointer-events-none fill-none stroke-outremer stroke-2"
            />
          ))}
        </svg>

        <ul role="list" className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <li className="flex items-center gap-2">
            <Diamond taille={10} className="fill-paper stroke-ink" />
            <span className="font-mono text-label uppercase tracking-label text-muted">
              {c.statuts.disponible.label}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Diamond taille={10} className="fill-outremer/[0.12] stroke-ink" />
            <span className="font-mono text-label uppercase tracking-label text-muted">
              {c.statuts.en_discussion.label}
            </span>
          </li>
          <li className="flex items-center gap-2">
            {/* losange hachuré : pattern local, même diagonale que la carte */}
            <svg width={10} height={10} viewBox="0 0 10 10" aria-hidden="true" className="shrink-0">
              <defs>
                <pattern
                  id="hachures-legende"
                  width="2.5"
                  height="2.5"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(-45)"
                >
                  <line x1="1.25" y1="0" x2="1.25" y2="2.5" strokeWidth="1" className="stroke-ink" />
                </pattern>
              </defs>
              <path
                d="M5 0 L10 5 L5 10 L0 5 Z"
                fill="url(#hachures-legende)"
                className="stroke-ink"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span className="font-mono text-label uppercase tracking-label text-muted">
              {c.statuts.exclusivite.label}
            </span>
          </li>
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
            {/* v30 : figé en rem comme les 37 largeurs de globals.css. Le
                composant n'est pas monté, mais un ch qui traîne ici est un
                couplage à la police de corps qui ressurgira le jour où
                quelqu'un le montera. 48ch sous Geist à 16px = 509px. */}
            <p className="mt-4 max-w-[31.8125rem] text-body">
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
