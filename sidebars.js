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
        'calendrier/plan-pme',
        'calendrier/plan-sessions',
      ],
    },

    // 3. Joueurs
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

    // 7. Insights (Formulaires + Rapports seulement)
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
            'Insights/Formulaires/event-answers',
            'Insights/Formulaires/manage-form-translations',
            'Insights/Formulaires/plan-pme-form',
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

    // 9. Nutrition
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

    // 10. Statistiques (Performance)
    {
      type: 'category',
      label: 'Statistiques',
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
      label: 'Média Center',
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
      label: 'Paramètres',
      link: { type: 'generated-index' },
      items: ['Paranètres/season-change'],
    },

    // 14. Scouting (avant-dernier)
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

    // 15. Application Mobile (dernier)
    {
  type: 'category',
  label: 'Application Mobile',
  link: { type: 'generated-index' },
  items: [
    'app-mobile/introduction-mobile',
    {
      type: 'category',
      label: 'Joueurs', 
      key: 'mobile-joueurs',  // ← Évite le conflit
      items: [
        'app-mobile/joueurs/create-player-session',
        'app-mobile/joueurs/fresh-start',
        'app-mobile/joueurs/health-data',
        // ...
      ],
    },
    
    {
      type: 'category',
      label: 'Staff',
      key: 'mobile-staff',
      items: ['app-mobile/staff/create-player-session'],
    },

    'app-mobile/notification-disabled',
    'app-mobile/resync-token',
  ],

  
},
  ],
};
export default sidebars;
