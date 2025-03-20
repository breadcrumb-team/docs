import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Breadcrumb.ai Documentation',
  tagline: 'Help Center',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.breadcrumb.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'breadcrumb-team', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        // blog feature removed
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/breadcrumbframe.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'Breadcrumb',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/help',
          label: 'Need Help?',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/docs/intro',
            },
            {
              label: 'Blog',
              href: 'https://breadcrumb.ai/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack Community',
              href: 'https://join.slack.com/t/breadcrumbcommunity/shared_invite/zt-26maq86pe-sQqPQ7WTPn6mkJEwqBIvHw',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/breadcrumbai/',
            },
            {
              label: 'X',
              href: 'https://x.com/breadcrumbai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Need Help?',
              to: '/help',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Breadcrumb Technologies Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],
};

export default config;
