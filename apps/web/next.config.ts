import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Workspace package ships raw TS, so let Next transpile it.
  transpilePackages: ['@julia/tokens'],

  // Consistent canonical URLs (the wiki, on its own subdomain, also uses trailing slashes).
  trailingSlash: true,

  // No /doc rewrite. The wiki lives on its own subdomain (doc.knowpeptide.com), so the
  // landing page links to it directly as an external URL. See DOCS_URL in page.tsx.
};

export default nextConfig;
