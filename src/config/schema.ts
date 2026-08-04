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
  legalName: brand.ENTITY.raisonSociale,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-imbrin.png`,
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

export const fondateurSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": ID_FONDATEUR,
  name: copy.fondateur.nom.split(",")[0],
  jobTitle: "Fondateur",
  worksFor: { "@id": ID_ORGANISATION },
  sameAs: [brand.LINKEDIN_URL],
};

/* généré depuis copy.faq.items : la FAQ visible et la FAQ balisée ne peuvent
   pas diverger, elles sortent de la même source */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: copy.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.reponse },
  })),
};

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
