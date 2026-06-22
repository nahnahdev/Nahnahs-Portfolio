import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
} from 'react-icons/fa';

const links = [
  {
    href: 'https://github.com/nahnahdev',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/felicia-awuah-gyedua/',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
  },
  {
    href: 'https://medium.com/@nahnahahjuwah',
    label: 'Medium',
    icon: FaMediumM,
  },
  {
    href: 'mailto:nahnahahjuwah@gmail.com',
    label: 'Email',
    icon: FaEnvelope,
  },
];

const Socials = () => (
  <div className="social-links" aria-label="Social links">
    {links.map((link) => {
      const Icon = link.icon;

      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <Icon />
          <span>{link.label}</span>
        </a>
      );
    })}
  </div>
);

export default Socials;
