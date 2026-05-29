import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Public origin (the Next.js app). The wiki is served under /doc via a Next rewrite,
// so baseUrl is '/doc/' both locally (proxied to :3001) and in production.
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000';
const HOME_URL = SITE_URL;

const SOCIALS = {
  discord: 'https://discord.gg/peptidia',
  x: 'https://x.com/peptidia',
  reddit: 'https://www.reddit.com/r/peptidia',
  instagram: 'https://instagram.com/peptidia',
  tiktok: 'https://www.tiktok.com/@peptidia',
  youtube: 'https://youtube.com/@peptidia',
  github: 'https://github.com/peptidia',
};

const config: Config = {
  title: 'Peptidia Wiki',
  tagline:
    'Evidence-backed peptide intelligence. Clinical research, mechanisms, and anecdote, organized and cited.',
  url: SITE_URL,
  baseUrl: '/doc/',
  // Agree with the Next.js app's trailingSlash so the /doc proxy doesn't loop.
  trailingSlash: true,

  organizationName: 'peptidia',
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
          editUrl: 'https://github.com/peptidia/julia/edit/main/apps/docs/',
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
      { tagName: 'meta', attributes: { property: 'og:site_name', content: 'Peptidia' } },
    ],
    navbar: {
      title: 'Peptidia',
      items: [
        { href: HOME_URL, label: 'Home', position: 'left', target: '_self' },
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
      copyright: 'Peptidia · educational reference. Not medical advice.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
