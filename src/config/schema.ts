import type { Article } from "@/config/analyses";
import { brand } from "@/config/brand";
import { copy } from "@/config/copy";
import { SITE_URL } from "@/config/site";

/* Les graphes structurés du site. Une seule règle : rien n'est écrit ici qui
   ne soit déjà dans brand.ts ou copy.ts. Recopier un texte à la main serait
   se condamner à une divergence silencieuse le jour où il change. */

const ID_ORGANISATION = `${SITE_URL}/#organisation`;
const ID_FONDATEUR = `${SITE_URL}/#vincent-fournier`;

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ID_ORGANISATION,
  name: `${brand.MARQUE} ${brand.SUFFIXE}`,
  /* v86 (référencement, 18/09/2026) : le nom court, tel qu'on le tape
     dans un moteur ; il relie la requête « Imbrin » au domaine */
  alternateName: brand.MARQUE,
  legalName: brand.ENTITY.raisonSociale,
  url: SITE_URL,
  /* V80 : l'emblème encre, 520 px de côté. logo-imbrin.png était sous le
     minimum de 112 px que Google demande pour le logo d'une organisation. */
  logo: `${SITE_URL}${brand.MEDIAS.emblemeEncre}`,
  description: copy.meta.description,
  founder: { "@id": ID_FONDATEUR },
  sameAs: [brand.LINKEDIN_URL],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "SIREN",
    value: brand.ENTITY.siren.replace(/\s/g, ""),
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: brand.ENTITY.ville,
    addressCountry: "FR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: brand.TELEPHONE.e164,
      email: brand.CONTACT_EMAIL,
      areaServed: "FR",
      availableLanguage: "French",
    },
  ],
};

/* v86 (référencement, 18/09/2026) : le site lui-même. C'est ce graphe
   que Google lit pour afficher le NOM DU SITE au-dessus du titre dans ses
   résultats, et pour relier « Imbrin » et « Imbrin Research » au domaine.
   Le site n'était indexé nulle part à cette date : le nom dans le titre,
   dans l'Organization et ici, et la Search Console côté Vincent. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#site`,
  name: `${brand.MARQUE} ${brand.SUFFIXE}`,
  alternateName: brand.MARQUE,
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@id": ID_ORGANISATION },
};

export const fondateurSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": ID_FONDATEUR,
  /* V80 : le nom vit dans copy.apropos, une seule chaîne pour la section
     À propos, la légende du portrait et ce graphe */
  name: copy.apropos.nom,
  jobTitle: "Fondateur",
  worksFor: { "@id": ID_ORGANISATION },
  sameAs: [brand.LINKEDIN_URL],
};

/* V80 : plus de balisage FAQPage, la FAQ a quitté l'accueil avec le
   lot 3 ; son contenu vit dans Conditions (la reconduction) et sur la
   page Confidentialité (le RGPD). */

/* Article, dérivé d'une entrée de src/config/analyses.ts. L'auteur et
   l'éditeur sont référencés par @id vers les graphes portés par le layout
   plutôt que redécrits : un seul endroit à corriger le jour où l'entité
   change, et les moteurs recollent les morceaux eux-mêmes. */
export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titre,
    description: article.standfirst,
    author: { "@id": ID_FONDATEUR },
    publisher: { "@id": ID_ORGANISATION },
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: `${SITE_URL}/analyses/${article.slug}`,
    inLanguage: "fr-FR",
  };
}
