import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KnowPeptide',
    short_name: 'KnowPeptide',
    description: 'The trusted intelligence network for peptides.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [{ src: '/icon', sizes: '512x512', type: 'image/png' }],
  };
}
