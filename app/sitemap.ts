// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/config";
import { getAllCarSlugs } from "@/data/cars";
import { getAllLocationSlugs } from "@/data/locations";
import { getAllBlogSlugs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Car pages
  const carPages: MetadataRoute.Sitemap = getAllCarSlugs().map((slug) => ({
    url: `${baseUrl}/cars/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Location SEO pages — highest priority for local SEO
  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${baseUrl}/rent/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...carPages, ...locationPages, ...blogPages];
}
