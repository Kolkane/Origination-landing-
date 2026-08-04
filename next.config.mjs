/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        /* /analyses n'est pas une page : l'index vit sur l'accueil. Une URL
           tronquée à la main renvoyait un 404. Redirection TEMPORAIRE et non
           permanente : le jour où les analyses seront assez nombreuses pour
           mériter leur propre index, cette URL sera la sienne, et un 301
           déjà mis en cache par les navigateurs serait pénible à défaire. */
        source: "/analyses",
        destination: "/#analyses",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
