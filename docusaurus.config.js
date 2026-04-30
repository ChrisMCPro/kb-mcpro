// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MYCOACH PRO - Users Guide',
  tagline: 'MyCoach Pro is cool!',
  favicon: 'img/logo-mcpro-red.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',


  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
      },
      fr: {
        label: 'Français',
      },
      es: {
        label: 'Español',
      },
    },
  },


 plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        language: ['fr', 'en', 'es'],
        indexBlog: false,
      },
    ],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: (() => {
            const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'fr';
            if (locale === 'en') return './sidebars-en.js';
            if (locale === 'es') return './sidebars-es.js';
            return './sidebars.js';
          })(),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false, // navbar disparaît en scrollant
         style: 'dark',      // navbar toujours sombre
        title: 'MYCOACH PRO - Guide Utilisateurs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-red-glass.ico',
          
        },
     

          items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Tutoriels',
    },
    {
      type: 'search',      // 👈 search entre les deux
      position: 'right',
    },
    {
      type: 'localeDropdown',
      position: 'right',
    },
    {
      href: 'https://mycoach.pro',
      label: 'Site web',
      position: 'right',
      className: 'navbar-btn-website',
    },

    // Bouton connexion
    {
      href: 'https://app.mycoachpro.io',
      label: 'Se connecter',
      position: 'right',
      className: 'navbar-btn-login',
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
            title: 'Réseaux sociaux',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
