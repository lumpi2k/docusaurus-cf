// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PAYONE docs++',
  tagline: 'The new docs - now even more shiny',
  url: 'https://docs.payone.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PAYONE-Gmbh', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://stash.payone-office.de/projects/NTGR/repos/docusaurus/browse',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://stash.payone-office.de/projects/NTGR/repos/docusaurus/browse',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            layout: {
              tile: 'PAYONE Link API Specification',
              noFooter: 'false',
              description: 'The PAYONE Link API Specification',
            },
            id: 'payone-link-api',
            spec: 'static/openapi/PAYONE-Link.yaml',
            route: '/link-api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#3d94d1',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PAYONE Docs++',
        logo: {
          alt: 'PAYONE Logo',
          src: 'img/payone.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/payone',
            position: 'left',
            label: 'PAYONE Intro',
          },
          {to: '/blog', label: 'Changelog', position: 'left'},
          {to: '/integrations', label: 'Available Integrations', position: 'left'},
          {to: '/link-api', label: 'PAYONE Link API', position: 'left'},
          {
            href: 'https://github.com/payone-gmbh',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://payone.status.io',
            label: 'Platform Status',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/payone',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelogs',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/payone-gmbh',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PAYONE GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {light: 'default', dark: 'dark'},
      },
    }),
};

module.exports = config;
