// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    // Accueil (en dernier comme sur ta capture)
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


    // Média Center
    {
      type: 'category',
      label: 'Média Center',
      link: { type: 'generated-index' },
      items: ['Média Center/feed-view-mediacenter'],
    },

    // Medical  
    {
      type: 'category',
      label: 'Medical',
      link: { type: 'generated-index' },
      items: [
        'medical/consultations',
        'medical/epidemiologie', 
        'medical/medical',
        'medical/medical-notes',
        'medical/pathologies',
        'medical/prescriptions',
      ],
    },

    // Nutrition
    {
      type: 'category',
      label: 'Nutrition',
      link: { type: 'generated-index' },
      items: [
        'Nutrition/add-value',
        'Nutrition/organise-table',
        'Nutrition/sync-nutri-data',
      ],
    },

    // Performance / Suivi athlétique
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

    // Séances
    {
      type: 'category',
      label: 'Séances',
      link: { type: 'generated-index' },
      items: [
        'Séances/import-objective-data',
        'Séances/plan-sessions',
      ],
    },

    // Scouting
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

    // Joueurs
    {
      type: 'category',
      label: 'Joueurs',
      link: { type: 'generated-index' },
      items: [
        'joueurs/add-official-players',
        'joueurs/change-player-team',
        'joueurs/create-player',
        'joueurs/edit-player',
        'joueurs/send-credentials',
      ],
    },

    // Club
    {
      type: 'category',
      label: 'Club',
      link: { type: 'generated-index' },
      items: [
        'club/add-user',
        'club/remove-user',
      ],
    },

    // Insights / Formulaires
    {
      type: 'category',
      label: 'Formulaires',
      link: { type: 'generated-index' },
      items: [
        'Insights/Formulaires/create-from-template',
        'Insights/Formulaires/duplicate-form',
        'Insights/Formulaires/event-answers',
        'Insights/Formulaires/manage-form-translations',
        'Insights/Formulaires/plan-pme-form',
      ],
    },

    // Rapports
    {
      type: 'category',
      label: 'Rapports',
      link: { type: 'generated-index' },
      items: ['Insights/Rapports/share-report'],
    },

    // Paramètres
    {
      type: 'category',
      label: 'Paramètres',
      link: { type: 'generated-index' },
      items: ['Paranètres/season-change'],
    },

    // App mobile
    {
      type: 'category',
      label: 'App mobile',
      link: { type: 'generated-index' },
      items: [
        'app-mobile/index',
        'app-mobile/joueurs/create-player-session',
        'app-mobile/joueurs/fresh-start',
        'app-mobile/joueurs/health-data',
        'app-mobile/joueurs/index',
        'app-mobile/notification-disabled',
        'app-mobile/resync-token',
        'app-mobile/staff/create-player-session',
      ],
    },

    // Calendrier
    {
      type: 'category',
      label: 'Calendrier',
      link: { type: 'generated-index' },
      items: [
        'calendrier/customise',
        'calendrier/plan-pme',
        'calendrier/plan-sessions',
      ],
    },

    // Matchs
    {
      type: 'category',
      label: 'Matchs',
      link: { type: 'generated-index' },
      items: ['matchs/import-objective-data'],
    },

    // Exercises
    {
      type: 'category',
      label: 'Exercises',
      link: { type: 'generated-index' },
      items: ['exercises/create-exercises'],
    },


  ],
};

export default sidebars;
