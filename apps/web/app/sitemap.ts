import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000';

// The landing page plus the key wiki entry points. The Docusaurus wiki under /doc
// emits its own detailed sitemap (via the classic preset); these are the stable,
// high-level doors so crawlers reach the reference from the main origin.
// Trailing slashes match the app's trailingSlash setting and the /doc rewrite.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/doc/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/doc/how-it-works/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
