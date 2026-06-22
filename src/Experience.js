import React from 'react';

const roles = [
  {
    company: 'PurpleWave',
    role: 'Backend Engineer → Full-Stack Engineer',
    period: '15 April 2025 – Present',
    location: 'Remote · via DevOps Africa Limited',
    highlights: [
      'Joined as a Backend Engineer, deploying and maintaining production Rails applications on AWS, managing server configuration, SSL, and uptime support.',
      'Led migration from Rails default authentication to PurpleWave\'s custom auth flow, using Nginx to support routing and session handling across the transition.',
      'Managed multi-service deployments across the pwas-api, pwas-web, pwas-heavyworth, and dashboard repositories, keeping staging and production environments aligned.',
      'Progressed into a Full-Stack Engineer role, contributing across backend systems and user-facing product delivery.',
      'Wrote and maintained deployment scripts per environment to support repeatable, auditable release processes.',
    ],
  },
  {
    company: 'Yazi Inc.',
    role: 'Lead Software Engineer',
    period: 'April 2024 – May 2025',
    location: 'Accra, Ghana',
    highlights: [
      'Architected and deployed backend services to AWS, provisioning infrastructure from scratch including EC2 instances, Application Load Balancers, and Security Groups before first deployment.',
      'Automated multi-environment deployments with Capistrano and GitHub Actions, with secrets managed through AWS Secrets Manager and GitHub environments.',
      'Configured Nginx as a reverse proxy with SSL termination and supported migration from default Rails authentication to a custom SSO/OAuth flow.',
      'Modernised legacy codebases to current Rails conventions, improving maintainability, performance, and delivery speed.',
    ],
  },
  {
    company: 'Alveohive',
    role: 'Full-Stack Developer',
    period: 'January 2023 – May 2024',
    highlights: [
      'Increased property listings by 40% by building a modern real-estate platform with Next.js, TypeScript, Tailwind CSS, and Ruby on Rails.',
      'Built a mobile application for property tracking, enabling field agents to manage listings and locations efficiently.',
      'Maintained a legacy system while building and migrating to a new platform, preserving database continuity, feature parity, and stability.',
    ],
  },
  {
    company: 'Microverse',
    role: 'Code Reviewer & Mentor',
    period: 'January 2023 – December 2023',
    highlights: [
      'Conducted 800+ code reviews across HTML, CSS, JavaScript, React-Redux, Ruby, and Ruby on Rails for an international cohort of developers.',
      'Mentored a team of 4 junior developers and was recognised with the "Code Reviewer of the Month" award for quality and consistency.',
      'Contributed advice and strategies that improved overall programme longevity and participant motivation.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-shell section-spacing">
    <div className="section-heading">
      <p className="eyebrow">Experience</p>
      <h2>Four+ years building and shipping production systems.</h2>
      <p>
        A track record across backend systems, full-stack delivery, and cloud
        infrastructure, with growing leadership in how software gets deployed,
        integrated, and supported in production.
      </p>
    </div>

    <ol className="experience-timeline">
      {roles.map((item) => (
        <li key={`${item.company}-${item.period}`} className="experience-item">
          <article className="experience-card">
            <div className="experience-card__head">
              <h3>{item.role}</h3>
              <span className="experience-card__period">{item.period}</span>
            </div>
            <p className="experience-card__company">
              {item.company}
              {item.location ? ` · ${item.location}` : ''}
            </p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
