import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="site-nav"
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeMenu();
      }}
    >
      <a className="site-nav__brand" href="#home" aria-label="Mizuna FC home">
        <img className="nav-crest" src="/mizuna.jpg" alt="" />
        <span>MIZUNA FC<small>PHNOM PENH · CAMBODIA</small></span>
      </a>
      <button
        className={`site-nav__toggle${isMenuOpen ? ' site-nav__toggle--open' : ''}`}
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls="site-navigation-links"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
        <span className="visually-hidden">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
      </button>
      <div
        className={`site-nav__links${isMenuOpen ? ' site-nav__links--open' : ''}`}
        id="site-navigation-links"
      >
        <a href="#about" onClick={closeMenu}>The club</a>
        <a href="#activities" onClick={closeMenu}>Activities</a>
        <a href="#competition" onClick={closeMenu}>Competition</a>
        <a href="#community" onClick={closeMenu}>Community</a>
        <a href="#growth" onClick={closeMenu}>Our future</a>
        <a className="site-nav__mobile-cta" href="#partnership" onClick={closeMenu}>
          Partner with us <span aria-hidden="true">↗</span>
        </a>
      </div>
      <a className="site-nav__cta" href="#partnership">Partner with us <span aria-hidden="true">↗</span></a>
    </nav>
  );
}
