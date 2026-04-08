const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mojomarathons.com";

const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/race-categories", priority: 0.9, changeFrequency: "monthly" },
  { path: "/route-venue", priority: 0.8, changeFrequency: "monthly" },
  { path: "/registration", priority: 1.0, changeFrequency: "weekly" },
  { path: "/sponsors", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap() {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
