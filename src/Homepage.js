import React, { useEffect, useState } from 'react';
import Socials from './Socials';

const roles = [
  'Full-Stack Software Engineer',
  'Backend & Infrastructure Engineer',
  'Cloud & Deployment Engineer',
];

const highlights = [
  '4+ years building and shipping production systems across web, mobile, and backend',
  'Workflow-heavy systems across retail operations, claims management, and cross-system sync',
  'Infrastructure depth across AWS, DigitalOcean, CI/CD, deployment, and reliability',
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
            I&apos;m Felicia G. Awuah, a full-stack engineer with infrastructure
            depth, building across web, mobile, and the systems behind them. I
            work on operational systems where product clarity, dependable
            engineering, and real business needs all have to meet,
            from retail platforms and mobile finance tools to claims workflows
            and connected-system sync.
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
              <span>40+ models and 60+ API endpoints in production, structured to last</span>
            </div>
            <div>
              <strong>Infrastructure thinking</strong>
              <span>
                AWS and DigitalOcean provisioning, CI/CD, and Nginx/SSL for
                reliable deployments
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
