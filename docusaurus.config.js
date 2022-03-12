// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Contabo Product Documentation',
  tagline: 'Tutorials and How-To\'s. Work in progress.',
  url: 'https://docs.contabo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'contabo',
  projectName: 'products',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/contabo/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/contabo/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Contabo Docs',
        logo: {
          alt: 'Contabo Logo',
          src: 'img/contabo-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'products',
            position: 'left',
            label: 'Products',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/contabo/docs',
            label: 'GitHub',
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
                label: 'Products',
                to: '/docs/products',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ContaboCom',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/ContaboCom/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/contabo-gmbh',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/contabo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/contabo/docs',
              },
              {
                label: 'Contabo',
                href: 'https://contabo.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Contabo GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
