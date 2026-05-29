import type { MetadataRoute } from 'next';

// Minimal PWA manifest. Colors come from the brand tokens (blue primary, neutral
// white background). The icon route (app/icon.tsx) supplies the app icon.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Peptidia: the trusted intelligence network for peptides',
    short_name: 'Peptidia',
    description:
      'Evidence-backed, source-cited peptide reference. Educational, not medical advice.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
