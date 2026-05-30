import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// The wiki has its own origin (doc.knowpeptide.com), served at the root of that
// subdomain. SITE_URL is the wiki's own canonical origin; WEB_URL is the landing site.
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3001';
const WEB_URL = process.env.WEB_URL ?? 'http://localhost:3000';

const SOCIALS = {
  discord: 'https://discord.gg/knowpeptide',
  x: 'https://x.com/knowpeptide',
  reddit: 'https://www.reddit.com/r/knowpeptide',
  instagram: 'https://instagram.com/knowpeptide',
  tiktok: 'https://www.tiktok.com/@knowpeptide',
  youtube: 'https://youtube.com/@knowpeptide',
  github: 'https://github.com/knowpeptide',
};

const config: Config = {
  title: 'KnowPeptide Wiki',
  tagline:
    'Evidence-backed peptide intelligence. Clinical research, mechanisms, and anecdote, organized and cited.',
  url: SITE_URL,
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'knowpeptide',
  projectName: 'julia',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          // Wiki articles live at the /doc root (no extra /docs segment).
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/knowpeptide/julia/edit/main/apps/docs/',
          // Re-enable once the repo has commits. It shells out to `git log`.
          // showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          // Imports @julia/tokens and maps Infima variables to it.
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'Evidence-backed peptide reference. Clinical research, mechanisms, and anecdote, clearly separated and cited.',
      },
      {
        name: 'keywords',
        content:
          'peptides, peptide research, BPC-157, TB-500, longevity, biohacking, clinical evidence, peptide therapy',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    headTags: [
      { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
      { tagName: 'meta', attributes: { property: 'og:site_name', content: 'KnowPeptide' } },
    ],
    navbar: {
      title: 'KnowPeptide',
      items: [
        { href: WEB_URL, label: 'Home', position: 'left', target: '_self' },
        { type: 'search', position: 'right' },
        { href: SOCIALS.github, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            { label: 'Welcome', to: '/' },
            { label: 'How it works', to: '/how-it-works' },
            { label: 'Peptides', to: '/peptides' },
            { label: 'Goals', to: '/goals' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: SOCIALS.discord },
            { label: 'Reddit', href: SOCIALS.reddit },
            { label: 'X', href: SOCIALS.x },
            { label: 'YouTube', href: SOCIALS.youtube },
          ],
        },
        {
          title: 'Follow',
          items: [
            { label: 'Instagram', href: SOCIALS.instagram },
            { label: 'TikTok', href: SOCIALS.tiktok },
            { label: 'GitHub', href: SOCIALS.github },
          ],
        },
      ],
      copyright: 'KnowPeptide · educational reference. Not medical advice.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
