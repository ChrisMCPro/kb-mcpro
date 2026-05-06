// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',

    // 1. Accueil
    {
      type: 'category',
      label: 'Accueil',
      link: { type: 'generated-index' },
      items: [
        'accueil/config-widget',
        'accueil/widget-calendar',
        'accueil/widget-formtypes',
        'accueil/widget-shortcut',
      ],
    },

    // 2. Calendrier
    {
      type: 'category',
      label: 'Calendrier',
      link: { type: 'generated-index' },
      items: [
        'calendrier/customise',
        'calendrier/plan-sessions',
        'calendrier/plan-pme',
      ],
    },

    // 3. Joueurs — add-official-players retiré (FFF uniquement)
    {
      type: 'category',
      label: 'Joueurs',
      link: { type: 'generated-index' },
      items: [
        'joueurs/create-player',
        'joueurs/edit-player',
        'joueurs/send-credentials',
        'joueurs/change-player-team',
      ],
    },

    // 4. Séances
    {
      type: 'category',
      label: 'Séances',
      link: { type: 'generated-index' },
      items: [
        'Séances/import-objective-data',
        'Séances/plan-sessions',
      ],
    },

    // 5. Exercises
    {
      type: 'category',
      label: 'Exercises',
      link: { type: 'generated-index' },
      items: ['exercises/create-exercises'],
    },

    // 6. Matchs
    {
      type: 'category',
      label: 'Matchs',
      link: { type: 'generated-index' },
      items: ['matchs/import-objective-data'],
    },

    // 7. Insights
    {
      type: 'category',
      label: 'Insights',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'Formulaires',
          items: [
            'Insights/Formulaires/create-from-template',
            'Insights/Formulaires/duplicate-form',
            'Insights/Formulaires/plan-pme-form',
            'Insights/Formulaires/event-answers',
            'Insights/Formulaires/manage-form-translations',
          ],
        },
        {
          type: 'category',
          label: 'Rapports',
          items: ['Insights/Rapports/share-report'],
        },
      ],
    },

    // 8. Medical
            {
      type: 'category',
      label: 'Medical',
      className: 'sidebar-icon-medical',
      link: { type: 'generated-index' },
      items: [
        'medical/medical',
        'medical/medical_web',
        'medical/medical_mobile',
        'medical/pathologies',
        'medical/consultations',
        'medical/medical-notes',
        'medical/epidemiologie',
        'medical/cycle-contraception',       
        'medical/add-medicine',
        'medical/prescriptions',
      ],
    },

    // 9. Nutrition
    {
      type: 'category',
      label: 'Nutrition',
      className: 'sidebar-icon-nutrition',
      link: { type: 'generated-index' },
      items: [
        'Nutrition/add-value',
        'Nutrition/organise-table',
        'Nutrition/sync-nutri-data',
      ],
    },

    // 10. Statistiques
    {
      type: 'category',
      label: 'Performance',
      link: { type: 'generated-index' },
      items: [
        'Performance/Suivi athlétique/add-value',
        'Performance/Suivi athlétique/organise-table',
        'Performance/Suivi athlétique/sync-athletic-data',
      ],
    },

    // 11. Média Center
    {
      type: 'category',
      label: 'Media Center',
      link: { type: 'generated-index' },
      items: ['Média Center/feed-view-mediacenter'],
    },

    // 12. Club
    {
      type: 'category',
      label: 'Club',
      link: { type: 'generated-index' },
      items: [
        'club/add-user',
        'club/remove-user',
      ],
    },

    // 13. Paramètres
    {
      type: 'category',
      label: 'Settings',
      link: { type: 'generated-index' },
      items: ['Paranètres/season-change'],
    },

    // 14. Scouting
    {
      type: 'category',
      label: 'Scouting',
      link: { type: 'generated-index' },
      items: [
        'scouting/mobile/exemple-mobile',
        'scouting/mobile/index',
        'scouting/web/exemple-web',
        'scouting/web/index',
      ],
    },

    // 15. Application Mobile
    {
      type: 'category',
      label: 'Mobile Application',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'Players',
          key: 'mobile/joueurs',
          items: [
            'app-mobile/joueurs/fresh-start',
            'app-mobile/joueurs/create-player-session',
            'app-mobile/joueurs/health-data',
          ],
        },
        {
          type: 'category',
          label: 'Staff',
          key: 'mobile/staff',
          items: [
            'app-mobile/staff/create-player-session',
            'medical/medical_mobile',
          ],
        },
        'app-mobile/notification-disabled',
        'app-mobile/resync-token',
      ],
    },
  ],
};
export default sidebars;
