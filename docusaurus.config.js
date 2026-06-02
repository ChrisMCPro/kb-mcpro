// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const locale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'fr';

const siteTitles = /** @type {Record<string, string>} */ ({
  fr: 'MYCOACH PRO - Guide Utilisateurs',
  en: 'MYCOACH PRO - User Guide',
  es: 'MYCOACH PRO - Guía de Usuario',
});

const navbarTitles = /** @type {Record<string, string>} */ ({
  fr: 'Guide Utilisateurs',
  en: 'User Guide',
  es: 'Guía de Usuario',
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitles[locale] ?? siteTitles.fr,
  tagline: 'MyCoach Pro is cool!',
  favicon: 'img/logo-mcpro-red.ico',

  url: 'https://faq.mycoachpro.io',
  baseUrl: '/',

  organizationName: 'MyCoach Pro',
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
        htmlLang: 'fr',
      },
      es: {
        label: 'Español',
        htmlLang: 'es',
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
      ({
        docs: {
          sidebarPath: (() => {
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
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        style: 'dark',
        title: navbarTitles[locale] ?? navbarTitles.fr,
        logo: {
          alt: 'MyCoach Pro Logo',
          src: 'img/mcpro-text-white.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriels',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://app.mycoachpro.io" class="navbar__link navbar-btn-login">${
              locale === 'en' ? 'Login' : locale === 'es' ? 'Iniciar sesión' : 'Se connecter'
            }</a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://www.mycoach.pro" class="navbar__link navbar-btn-website">${
              locale === 'en' ? 'Website' : locale === 'es' ? 'Sitio web' : 'Site web'
            }</a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="mycoachproams://login?" class="navbar-icon-btn navbar-icon-login"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg></a>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://www.mycoach.pro" class="navbar-icon-btn navbar-icon-website"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" stroke="currentColor"><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg></a>',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Réseaux sociaux',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mycoach_pro/',
              },
              {
                label: 'Linkedin',
                href: 'https://fr.linkedin.com/company/mycoachpro',
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
        copyright: `Copyright © ${new Date().getFullYear()} MyCoach Pro, SAS. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;