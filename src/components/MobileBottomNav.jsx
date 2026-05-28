import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './MobileBottomNav.css';

const rawCategories = [
  { icon: '/img/icons/home.svg', label: 'Home', path: '/docs/category/home' },
  { icon: '/img/icons/calendar.svg', label: 'Calendar', path: '/docs/category/calendrier' },
  { icon: '/img/icons/players.svg', label: 'Players', path: '/docs/category/joueurs' },
  { icon: '/img/icons/sessions.svg', label: 'Sessions', path: '/docs/category/séances' },
  { icon: '/img/icons/exercises.svg', label: 'Exercises', path: '/docs/category/exercises' },
  { icon: '/img/icons/game-football.svg', label: 'Matches', path: '/docs/category/matchs' },
  { icon: '/img/icons/insights.svg', label: 'Insights', path: '/docs/category/insights' },
  { icon: '/img/icons/medical.svg', label: 'Medical', path: '/docs/category/medical' },
  { icon: '/img/icons/nutrition.svg', label: 'Nutrition', path: '/docs/category/nutrition' },
  { icon: '/img/icons/performance.svg', label: 'Performance', path: '/docs/category/performance' },
  { icon: '/img/icons/mediacenter.svg', label: 'Media-Center', path: '/docs/category/média-center' },
  { icon: '/img/icons/club.svg', label: 'Club', path: '/docs/category/club' },
  { icon: '/img/icons/settings.svg', label: 'Settings', path: '/docs/category/paramètres' },
  { icon: '/img/icons/scouting.svg', label: 'Scouting', path: '/docs/category/scouting' },
  { icon: '/img/icons/mobile-app.svg', label: 'Mobile', path: '/docs/category/application-mobile' },
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

  const categories = rawCategories.map((cat) => ({
    ...cat,
    iconSrc: useBaseUrl(cat.icon),
    localizedPath: withLocale(cat.path),
  }));

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
          {hidden.map((cat) => (
            <button
              key={cat.label}
              className="mobile-bottom-nav__drawer-item"
              onClick={() => {
                history.push(cat.localizedPath);
                setExpanded(false);
              }}
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