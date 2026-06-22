import React from 'react';

const featuredProjects = [
  {
    id: 1,
    name: 'Feltrac',
    image:
      'https://res.cloudinary.com/db3ckadxp/image/upload/v1782107450/Screenshot_2026-06-22_at_05.50.22_pgjpbr.png',
    stack: [
      'React',
      'TypeScript',
      'Ruby on Rails 8',
      'PostgreSQL',
      'Zustand',
      'IndexedDB / PWA',
      'Devise-JWT',
      'Kamal',
      'DigitalOcean',
    ],
    description:
      'A retail operations platform for multi-location inventory, POS sales, stock transfers, supplier workflows, customer debt tracking, payroll, and financial reconciliation.',
    impact:
      'This is my strongest lead project because it combines operational depth with serious engineering work: idempotent transaction flows, end-of-day reconciliation, offline-first selling, and per-location sync for real retail environments.',
    proof: [
      '40+ domain models and 60+ API endpoints',
      'Offline-first PWA support for low-connectivity retail use',
      'Per-location sync, reconciliation, and retry-safe transaction flows',
    ],
    links: [
      { href: 'https://feltrac.com', label: 'Live app' },
      { href: '#contact', label: 'Ask for walkthrough' },
      {
        href: 'https://github.com/nahnahdev/stock-platform-frontend',
        label: 'Frontend repo',
      },
      {
        href: 'https://github.com/nahnahdev/stock-platform-backend',
        label: 'Backend repo',
      },
    ],
  },
  {
    id: 2,
    name: 'Haus of Mykonos',
    image:
      'https://res.cloudinary.com/db3ckadxp/image/upload/v1782107544/Screenshot_2026-06-22_at_05.52.09_w0bc2r.png',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'Paystack',
      'Radix UI',
      'Vercel APIs',
    ],
    description:
      'An events and ticketing platform for discovering experiences, purchasing passes, managing event content, and handling entry operations from checkout to QR-based check-in.',
    impact:
      'This project shows end-to-end product ownership: payments, ticket inventory, discount codes, promoter tracking, admin dashboard flows, secure QR validation, and production-minded API hardening.',
    proof: [
      'Integrated Paystack payments and webhook verification',
      'QR-based ticket validation and check-in workflows',
      'Admin tooling for events, galleries, promos, and tracking',
    ],
    links: [
      { href: 'https://hausofmykonos.com', label: 'Live platform' },
      { href: 'https://github.com/nahnahdev/haus-of-mykonos', label: 'Source code' },
    ],
  },
  {
    id: 3,
    name: 'Claims Management System',
    stack: [
      'Python',
      'Flask',
      'PostgreSQL',
      'Firebase',
      'Async APIs',
      'Billing workflows',
    ],
    description:
      'A Python-based claims management and billing system built for a U.S. medical practice, covering patient appointments, insurance workflows, claims creation, and submission.',
    impact:
      'This project is a strong backend proof point because it centered on workflow-heavy delivery in a regulated setting, including asynchronous API calls that improved response time and supported real operational use.',
    proof: [
      'Claims creation, submission, and billing workflow support',
      'Async API integration that improved response time by 40%',
      'Built around real operational use in a medical setting',
    ],
    links: [
      { href: '#contact', label: 'Discuss project' },
      { href: 'mailto:nahnahahjuwah@gmail.com', label: 'Request details' },
    ],
  },
  {
    id: 4,
    name: 'Ceditrack',
    stack: [
      'React Native',
      'Expo',
      'Expo Router',
      'Supabase',
      'TypeScript',
      'Zustand',
    ],
    description:
      'A mobile finance app for tracking cash, MoMo, bank activity, personal debts, transfers, and susu group savings in one place.',
    impact:
      'This project adds mobile product depth to the portfolio and shows how I think about everyday financial workflows, onboarding, state management, and utility-driven interface design.',
    proof: [
      'Onboarding and month-based budgeting flows',
      'Debt tracking, transfers, and susu group savings support',
      'Mobile-first state management with Expo and Supabase',
    ],
    links: [
      { href: '#contact', label: 'Ask for preview' },
      { href: 'https://github.com/nahnahdev/ceditrack', label: 'Source code' },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="section-shell section-spacing">
    <div className="section-heading">
      <p className="eyebrow">Selected work</p>
      <h2>Projects that show range, not just activity.</h2>
      <p>
        This collection is curated to reflect the kind of engineer I am now:
        someone who can build around real operations, shape dependable product
        workflows, and support systems with stronger backend and infrastructure
        thinking.
      </p>
    </div>

    <div className="projects-grid">
      {featuredProjects.map((project) => (
        <article key={project.id} className="project-card">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} interface preview`}
              className="project-card__image"
            />
          ) : null}
          <div className="project-card__content">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="project-card__impact">{project.impact}</p>
            <ul className="project-proof-list">
              {project.proof.map((item) => (
                <li key={`${project.id}-${item}`}>{item}</li>
              ))}
            </ul>

            <div className="tech-list">
              {project.stack.map((item) => (
                <span key={`${project.id}-${item}`}>{item}</span>
              ))}
            </div>
          </div>

          <div className="project-card__links">
            {project.links.map((link) => (
              <a
                key={`${project.id}-${link.label}`}
                href={link.href}
                target={link.href.startsWith('#') ? undefined : '_blank'}
                rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
