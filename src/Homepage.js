import React, { useEffect, useState } from 'react';
import Socials from './Socials';

const roles = [
  'Backend & Infrastructure Engineer',
  'Platform Integration Specialist',
  'Full-Stack Software Engineer',
];

const highlights = [
  '4+ years deploying and supporting production systems across web, mobile, backend, and cloud',
  'Workflow-heavy platforms across retail operations, claims management, and cross-system integrations',
  'Hands-on infrastructure work across AWS, DigitalOcean, CI/CD, Nginx, SSL, and release automation',
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
            I&apos;m Felicia G. Awuah, a backend and infrastructure engineer who
            also delivers full-stack systems end to end. I build workflow-heavy
            software where dependable APIs, cloud deployment, integrations, and
            usable interfaces all matter at once, from retail operations
            platforms and mobile tools to healthcare claims workflows and
            connected-system sync.
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
              <strong>Full-stack delivery</strong>
              <span>
                Building frontend and backend flows that make complex
                operational work clearer and easier to use
              </span>
            </div>
            <div>
              <strong>Backend systems</strong>
              <span>
                Production APIs, claims workflows, auth migrations, and
                platform integrations structured to last
              </span>
            </div>
            <div>
              <strong>Infrastructure thinking</strong>
              <span>
                AWS and DigitalOcean provisioning, CI/CD automation, and
                Nginx/SSL for reliable deployments
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
