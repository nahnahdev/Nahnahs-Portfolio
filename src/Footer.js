import React from 'react';
import BrandMark from './BrandMark';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer">
    <div className="section-shell site-footer__inner">
      <a href="#home" aria-label="Felicia G. Awuah home">
        <BrandMark />
      </a>
      <p>
        Full-Stack Engineer focused on building cleaner, more useful product
        experiences.
      </p>
      <span>{`© ${currentYear} Felicia G. Awuah`}</span>
    </div>
  </footer>
);

export default Footer;
