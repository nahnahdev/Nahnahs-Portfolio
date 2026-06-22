import React, { useState } from 'react';
import BrandMark from './BrandMark';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu((currentValue) => !currentValue);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a href="#home" aria-label="Felicia G. Awuah home">
          <BrandMark />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-controls="mobile-menu"
          aria-expanded={showMobileMenu}
          onClick={handleMobileMenuToggle}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s work
        </a>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${showMobileMenu ? 'mobile-menu--open' : ''}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleMobileMenuToggle}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-menu__cta" onClick={handleMobileMenuToggle}>
          Let&apos;s work
        </a>
      </div>
    </header>
  );
};

export default Navbar;
