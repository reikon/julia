import type { NextConfig } from 'next';

// In local dev the Docusaurus wiki runs on :3001 with baseUrl '/doc/'.
// In production this points at the deployed Docusaurus URL (set DOCS_URL).
const DOCS_URL = process.env.DOCS_URL ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  // Workspace package ships raw TS, so let Next transpile it.
  transpilePackages: ['@julia/tokens'],

  // Match Docusaurus's trailing-slash behaviour. Without this, Next strips the
  // trailing slash from /doc/ while Docusaurus (baseUrl '/doc/') adds it back,
  // producing an infinite 308 redirect loop through the rewrite.
  trailingSlash: true,

  // Single entrypoint: serve the wiki under /doc by proxying to Docusaurus.
  // Dev mirrors prod: same rewrite shape, only the destination origin changes.
  async rewrites() {
    // The wiki root and everything under it. The root rule's destination keeps the
    // trailing slash (`/doc/`) on purpose: `:path*` with an empty match strips it,
    // proxying to a slashless `/doc` which Docusaurus 301s back to `/doc/`, a loop.
    // `:path+` (one-or-more) handles sub-pages and never matches the empty root.
    return [
      { source: '/doc', destination: `${DOCS_URL}/doc/` },
      { source: '/doc/:path+', destination: `${DOCS_URL}/doc/:path+` },
    ];
  },
};

export default nextConfig;
