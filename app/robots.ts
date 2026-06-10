// app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/superadmin", "/superadmin/", "/api/"],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
