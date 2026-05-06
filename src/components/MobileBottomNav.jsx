import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';
import './MobileBottomNav.css';

const categories = [
  { icon: '/img/icons/home.svg', label: 'Home', path: '/docs/category/accueil' },
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
  { icon: '/img/icons/settings.svg', label: 'Settings', path: '/docs/category/paranètres' },
  { icon: '/img/icons/scouting.svg', label: 'Scouting', path: '/docs/category/scouting' },
  { icon: '/img/icons/mobile-app.svg', label: 'Mobile', path: '/docs/category/app-mobile' },
];

const VISIBLE = 7; // icônes visibles avant le ">"

export default function MobileBottomNav() {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const visible = categories.slice(0, VISIBLE);
  const hidden = categories.slice(VISIBLE);

  return (
    <nav className="mobile-bottom-nav">
{visible.map((cat) => (
  <button
    key={cat.label}
    className="mobile-bottom-nav__item"
    onClick={() => history.push(cat.path)}
    title={cat.label}
  >
    <img src={cat.icon} alt={cat.label} className="mobile-bottom-nav__icon" />
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
              onClick={() => { history.push(cat.path); setExpanded(false); }}
            >
              <img src={cat.icon} alt={cat.label} className="mobile-bottom-nav__icon" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}