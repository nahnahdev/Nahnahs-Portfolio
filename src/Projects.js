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
    proof: [
      '40+ domain models and 60+ API endpoints',
      'Offline-first PWA support for low-connectivity retail use',
      'Per-location sync, reconciliation, and retry-safe transaction flows',
      'Deployed to DigitalOcean with Kamal, Nginx, and SSL termination',
    ],
    links: [
      { href: 'https://feltrac.com', label: 'Live site' },
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
    name: 'Claims Management Platform',
    stack: [
      'Python',
      'Flask',
      'PostgreSQL',
      'Firebase',
      'Bootstrap',
      'JavaScript',
      'drchrono API',
      'Async processing',
    ],
    description:
      'A full-stack healthcare claims management platform built for a U.S. medical practice, integrating with the drchrono API to manage patient records, appointments, insurance, billing, and claims workflows.',
    proof: [
      'Built both the frontend and backend for day-to-day operational use in a medical setting',
      'Implemented claims creation and submission workflows across the claims lifecycle',
      'Integrated with drchrono to sync patient, appointment, insurance, and billing data',
      'Used asynchronous processing for claim-related operations, improving response time by 40%',
    ],
    links: [
      { href: '#contact', label: 'Discuss project' },
      { href: 'mailto:nahnahahjuwah@gmail.com', label: 'Request details' },
    ],
  },
  {
    id: 3,
    name: 'Purple Wave Appraisal Service API & Heavyworth Integration',
    stack: [
      'Ruby on Rails',
      'PostgreSQL',
      'AWS',
      'Capistrano',
      'GitHub Actions',
      'Nginx',
      'Sidekiq',
      'Redis',
      'NATS',
    ],
    description:
      'Production Rails API services supporting Purple Wave appraisal operations, authentication workflows, user access, and internal service integrations.',
    proof: [
      'Implemented and supported bidirectional synchronization between the Purple Wave Appraisal Service API and Heavyworth Appraisal Service',
      'Kept appraisal, inventory, and operational data consistent across connected systems',
      'Improved API reliability by fixing revoked-invitation handling and returning accurate authorization errors',
      'Maintained deployment workflows, environment configuration, secrets management, and release processes across staging and production',
    ],
    links: [
      { href: '#contact', label: 'Discuss project' },
      { href: 'mailto:nahnahahjuwah@gmail.com', label: 'Request details' },
    ],
  },
  {
    id: 4,
    name: 'Alveohive',
    image:
      'https://res.cloudinary.com/db3ckadxp/image/upload/v1782115845/Screenshot_2026-06-22_at_08.10.23_ndnljm.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Ruby on Rails',
      'PostgreSQL',
    ],
    description:
      'A modern real estate platform for listing, discovering, and managing properties, built with a Next.js frontend and a Ruby on Rails API.',
    proof: [
      'Grew property listings by 40% after launch',
      'Migrated key features from a legacy platform with feature parity',
      'Companion mobile app for field agents to manage listings on the go',
    ],
    links: [
      { href: 'https://alveohive.com', label: 'Live site' },
      { href: '#contact', label: 'Discuss project' },
    ],
  },
  {
    id: 5,
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
    proof: [
      'Integrated Paystack payments and webhook verification',
      'QR-based ticket validation and check-in workflows',
      'Admin tooling for events, galleries, promos, and tracking',
    ],
    links: [
      { href: 'https://hausofmykonos.com', label: 'Live site' },
      { href: 'https://github.com/nahnahdev/haus-of-mykonos', label: 'Source code' },
    ],
  },
  {
    id: 6,
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
        workflows, and carry systems from interface decisions through backend
        logic, integrations, and deployment.
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
