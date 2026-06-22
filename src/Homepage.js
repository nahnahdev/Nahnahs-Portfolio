import React, { useEffect, useState } from 'react';
import Socials from './Socials';

const roles = [
  'Full-Stack Software Engineer',
  'Product-Minded Engineer',
  'Backend and Infrastructure-Focused Engineer',
];

const highlights = [
  'Full-stack engineering across web, mobile, and backend systems',
  'Workflow-heavy systems across retail operations, claims management, and cross-system sync',
  'Growing infrastructure depth across deployment, cloud, reliability, and support',
];

const Homepage = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home" className="hero-section">
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <h1>
            Building software that is
            {' '}
            <span>useful, dependable, and thoughtfully designed.</span>
          </h1>
          <p className="hero-role">{roles[roleIndex]}</p>
          <p className="hero-summary">
            I&apos;m Felicia G. Awuah, a full-stack software engineer building
            across web, mobile, backend, and infrastructure. I work on
            operational systems where product clarity, dependable engineering,
            and real business needs all have to meet, from retail platforms
            and mobile finance tools to claims workflows and connected-system
            sync.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              View selected work
            </a>
            <a href="#contact" className="button-secondary">
              Start a conversation
            </a>
          </div>

          <Socials />
        </div>

        <div className="hero-panel">
          <div className="hero-panel__card">
            <p className="hero-panel__label">What I bring</p>
            <ul className="hero-panel__list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel__stats">
            <div>
              <strong>Usable interfaces</strong>
              <span>Designing flows that make complex work feel clearer and easier to use</span>
            </div>
            <div>
              <strong>Backend systems</strong>
              <span>Building application logic and APIs that are structured to last</span>
            </div>
            <div>
              <strong>Infrastructure thinking</strong>
              <span>
                Supporting products with deployment, cloud, reliability, and
                operational awareness
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
