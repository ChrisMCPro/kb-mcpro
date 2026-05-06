import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <div className={styles.mobileRightItems}>

        {/* Recherche */}
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>

        {/* Langue */}
        <NavbarItem
          type="localeDropdown"
          position="right"
        />

        {/* Login */}
        <a href="https://app.mycoachpro.io" className="navbar-icon-btn navbar-icon-login">
          <img src="/img/icons/login.svg" />
        </a>

        {/* Site web */}
        <a href="https://www.mycoach.pro" className="navbar-icon-btn navbar-icon-website">
          <img src="/img/icons/website.svg" />
        </a>

        {/* Toggle dark/light */}
        <NavbarColorModeToggle />

      </div>
      <CloseButton />
    </div>
  );
}