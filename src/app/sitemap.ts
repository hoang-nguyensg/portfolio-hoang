import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://nguyenhuyhoang.dev";
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: base, lastModified: now, priority: 1, changeFrequency: "monthly" },
        { url: `${base}/projects`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
        { url: `${base}/experience`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
        { url: `${base}/contact`, lastModified: now, priority: 0.7, changeFrequency: "yearly" },
        { url: `${base}/blog`, lastModified: now, priority: 0.5, changeFrequency: "weekly" },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${base}/projects/${p.slug}`,
        lastModified: now,
        priority: 0.8,
        changeFrequency: "monthly" as const,
    }));

    return [...staticRoutes, ...projectRoutes];
}

