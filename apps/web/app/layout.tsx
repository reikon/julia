import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '../src/theme';
import '@julia/tokens/tokens.css';
import './globals.css';

// Public origin (the Next.js app). Overridable per-environment; defaults to local dev.
// metadataBase makes the OG/Twitter image and canonical URLs absolute.
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000';

// Inter, exposed as the --font-sans variable that @julia/tokens' font tokens read.
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const TITLE = 'Peptidia: the trusted intelligence network for peptides';
const DESCRIPTION =
  'Evidence-backed, source-cited peptide reference. Clinical research, mechanisms, and anecdote, organized and transparent. Educational only, not medical advice.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Sub-pages set just their own title; this appends the brand.
    template: '%s | Peptidia',
  },
  description: DESCRIPTION,
  applicationName: 'Peptidia',
  keywords: [
    'peptides',
    'peptide research',
    'peptide reference',
    'peptide wiki',
    'BPC-157 studies',
    'peptides for recovery',
    'peptides for brain fog',
    'clinical evidence',
    'preclinical studies',
    'mechanism of action',
    'longevity',
    'peptide therapy',
    'evidence-based',
  ],
  authors: [{ name: 'Peptidia' }],
  creator: 'Peptidia',
  publisher: 'Peptidia',
  category: 'Health and Science Reference',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Peptidia',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    // The dynamic image is emitted by app/opengraph-image.tsx and picked up
    // automatically; listing it here keeps the metadata explicit and complete.
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Peptidia: the trusted intelligence network for peptides.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon',
    shortcut: '/icon',
    apple: '/icon',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        {/* Sets data-theme before paint to avoid dark/light flicker. */}
        <InitColorSchemeScript attribute="data-theme" defaultMode="system" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
