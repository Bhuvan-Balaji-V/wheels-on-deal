// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://wheelsondeal.in",
  generateRobotsTxt: false, // we have app/robots.ts
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/superadmin", "/superadmin/*", "/api/*"],
  transform: async (config, path) => {
    // Boost priority for key pages
    const priorities = {
      "/": 1.0,
      "/cars": 0.9,
      "/cars/mahindra-thar": 0.9,
      "/cars/mahindra-thar-roxx": 0.9,
    };

    const isLocationPage = path.startsWith("/rent/");
    const isCarPage = path.startsWith("/cars/");
    const isBlogPage = path.startsWith("/blog/");

    return {
      loc: path,
      changefreq: isLocationPage ? "monthly" : isBlogPage ? "monthly" : "weekly",
      priority: priorities[path] || (isLocationPage ? 0.8 : isCarPage ? 0.85 : isBlogPage ? 0.7 : 0.6),
      lastmod: new Date().toISOString(),
    };
  },
};
