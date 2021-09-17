/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'de', 'es' ],
    localeConfigs: {
      cs: {
        label: 'Česky',
      },
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
      es: {
        label: 'Español',
      },
    },
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
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'pokyny',
          position: 'right',
          label: 'Instalace',
        },

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
      copyright: `Copyright © ${new Date().getFullYear()} Digitální Akademie. Text a ilustrace © ${new Date().getFullYear()} Daniel Sandner. Samotný obsah tohoto projektu je licencován pod licencí <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons (CC BY-NC-ND 4.0)</a> a základní zdrojový kód používaný k formátování a zobrazení tohoto obsahu pod <a href="https://github.com/github/choosealicense.com/blob/gh-pages/LICENSE.md">licencí MIT</a>. `,
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
