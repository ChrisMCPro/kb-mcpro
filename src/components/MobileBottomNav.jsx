import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './MobileBottomNav.css';

const rawCategories = [

  { icon: '/img/icons/home.svg', label: { fr: 'Accueil', en: 'Home', es: 'Inicio' }, path: '/docs/category/home' },
  { icon: '/img/icons/calendar.svg', label: { fr: 'Calendrier', en: 'Calendar', es: 'Calendario' }, path: '/docs/category/calendrier' },
  { icon: '/img/icons/players.svg', label: { fr: 'Joueurs', en: 'Players', es: 'Jugadores' }, path: '/docs/category/joueurs' },
  { icon: '/img/icons/sessions.svg', label: { fr: 'Séances', en: 'Sessions', es: 'Sesiones' }, path: '/docs/category/séances' },
  { icon: '/img/icons/exercises.svg', label: { fr: 'Exercices', en: 'Exercises', es: 'Ejercicios' }, path: '/docs/category/exercises' },
  { icon: '/img/icons/game-football.svg', label: { fr: 'Matchs', en: 'Matches', es: 'Partidos' }, path: '/docs/category/matchs' },
  { icon: '/img/icons/insights.svg', label: { fr: 'Insights', en: 'Insights', es: 'Insights' }, path: '/docs/category/insights' },
  { icon: '/img/icons/medical.svg', label: { fr: 'Médical', en: 'Medical', es: 'Médico' }, path: '/docs/category/medical' },
  { icon: '/img/icons/nutrition.svg', label: { fr: 'Nutrition', en: 'Nutrition', es: 'Nutrición' }, path: '/docs/category/nutrition' },
  { icon: '/img/icons/performance.svg', label: { fr: 'Performance', en: 'Performance', es: 'Rendimiento' }, path: '/docs/category/performance' },
  { icon: '/img/icons/mediacenter.svg', label: { fr: 'Média-Center', en: 'Media-Center', es: 'Media-Center' }, path: '/docs/category/média-center' },
  { icon: '/img/icons/club.svg', label: { fr: 'Club', en: 'Club', es: 'Club' }, path: '/docs/category/club' },
  { icon: '/img/icons/settings.svg', label: { fr: 'Paramètres', en: 'Settings', es: 'Configuración' }, path: '/docs/category/paramètres' },
  { icon: '/img/icons/scouting.svg', label: { fr: 'Scouting', en: 'Scouting', es: 'Scouting' }, path: '/docs/category/scouting' },
  { icon: '/img/icons/mobile-app.svg', label: { fr: 'Mobile', en: 'Mobile', es: 'Móvil' }, path: '/docs/category/application-mobile' },
  {/*
      { icon: '/img/icons/home.svg', label: 'Home', path: '/docs/category/home' },
  { icon: '/img/icons/calendar.svg', label: 'Calendar', path: '/docs/category/calendar' },
  { icon: '/img/icons/players.svg', label: 'Players', path: '/docs/category/players' },
  { icon: '/img/icons/sessions.svg', label: 'Sessions', path: '/docs/category/sessions' },
  { icon: '/img/icons/exercises.svg', label: 'Exercises', path: '/docs/category/exercises' },
  { icon: '/img/icons/game-football.svg', label: 'Matches', path: '/docs/category/games' },
  { icon: '/img/icons/insights.svg', label: 'Insights', path: '/docs/category/insights' },
  { icon: '/img/icons/medical.svg', label: 'Medical', path: '/docs/category/medical' },
  { icon: '/img/icons/nutrition.svg', label: 'Nutrition', path: '/docs/category/nutrition' },
  { icon: '/img/icons/performance.svg', label: 'Performance', path: '/docs/category/performance' },
  { icon: '/img/icons/mediacenter.svg', label: 'Media-Center', path: '/docs/category/media' },
  { icon: '/img/icons/club.svg', label: 'Club', path: '/docs/category/club' },
  { icon: '/img/icons/settings.svg', label: 'Settings', path: '/docs/category/settings' },
  { icon: '/img/icons/scouting.svg', label: 'Scouting', path: '/docs/category/scouting' },
  { icon: '/img/icons/mobile-app.svg', label: 'Mobile', path: '/docs/category/mobile' },


    */}
];

const VISIBLE = 7;

export default function MobileBottomNav() {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const {i18n} = useDocusaurusContext();

  const locale = i18n.currentLocale || 'fr';

  const withLocale = (path) => {
    if (locale === 'fr') return path;
    return `/${locale}${path}`;
  };

  const categories = rawCategories.map((cat) => {
  const localizedLabel =
    typeof cat.label === 'string'
      ? cat.label
      : cat.label && typeof cat.label === 'object'
        ? (cat.label[locale] || cat.label.fr || '')
        : '';

  return {
    ...cat,
    label: localizedLabel,
    iconSrc: useBaseUrl(cat.icon),
    localizedPath: withLocale(cat.path),
  };
});

  const visible = categories.slice(0, VISIBLE);
  const hidden = categories.slice(VISIBLE);

  return (
    <nav className="mobile-bottom-nav">
      {visible.map((cat) => (
        <button
          key={cat.label}
          className="mobile-bottom-nav__item"
          onClick={() => history.push(cat.localizedPath)}
          title={cat.label}
        >
          <img src={cat.iconSrc} alt={cat.label} className="mobile-bottom-nav__icon" />
          <span className="mobile-bottom-nav__label">{cat.label}</span>
        </button>
      ))}

      <button
        className="mobile-bottom-nav__item mobile-bottom-nav__more"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? '✕' : '›'}</span>
      </button>

      {expanded && (
  <div className="mobile-bottom-nav__drawer">
    {hidden
      .filter((cat) => cat?.label && cat?.localizedPath && cat?.iconSrc)
      .map((cat) => (
        <button
          key={cat.localizedPath}
          className="mobile-bottom-nav__drawer-item"
          onClick={() => {
            history.push(cat.localizedPath);
            setExpanded(false);
          }}
          title={cat.label}
        >
          <img src={cat.iconSrc} alt={cat.label} className="mobile-bottom-nav__icon" />
          <span>{cat.label}</span>
        </button>
      ))}
  </div>
)}
    </nav>
  );
}