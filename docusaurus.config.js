/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'cz',
    locales: ['cz', 'en'],
  },
  title: 'Digitální Akademie',
  tagline: 'Kreativní rychlokurzy jsou prima',
  url: 'https://akademie.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/akademie-ikona-4.ico',
  organizationName: 'digitalniakademie', // Usually your GitHub org/user name.
  projectName: 'digitalniakademie', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Digitální Akademie',
      logo: {
        alt: 'Digitální Akademie Logo',
        src: 'img/logo-akademie.svg',
        srcDark: 'img/logodark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Rychlokurzy',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/digitalniakademie/akademieskripta',
          label: 'Studijní materiály',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Rychlokurzy',
          items: [
            {
              label: 'Úvodem',
              to: '/docs/intro',
            },
            {
              label: 'Software',
              to: '/docs/software',
            },
          ],
        },
        {
          title: 'Komunita',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/digitalniakademie',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/VUZjQhaP4e',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DigiAkademie',
            },
          ],
        },
        {
          title: 'Novinky',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Materiály ke stažení',
              href: 'https://github.com/digitalniakademie/akademieskripta',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Digitální Akademie.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/digitalniakademie/akademie',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/digitalniakademie/akademie/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
