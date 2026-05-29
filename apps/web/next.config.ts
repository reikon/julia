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
    // Proxy the wiki under /doc to the Docusaurus deployment. Verified against the
    // Next.js 16 docs: a rewrite to an absolute URL is a true proxy (works on Vercel).
    //
    // Trailing-slash note: the docs' `:path*/` form loops HERE, because with
    // trailingSlash:true Next normalizes `/doc/` and the `*` empty-match re-emits the
    // same `/doc/`, so Next 308s `/doc/` -> `/doc/` forever. The split below avoids it:
    //   - `/doc` matches the normalized root and proxies to `${DOCS_URL}/doc/`
    //   - `:path+` (one-or-more) handles sub-pages and never empty-matches the root
    return [
      { source: '/doc', destination: `${DOCS_URL}/doc/` },
      { source: '/doc/:path+', destination: `${DOCS_URL}/doc/:path+` },
    ];
  },
};

export default nextConfig;
