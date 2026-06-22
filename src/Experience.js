import React from 'react';

const roles = [
  {
    company: 'Purple Wave Auction',
    role: 'Full-Stack Software Engineer',
    period: '04/2025 – Present',
    location: 'Remote',
    highlights: [
      'Built and deployed backend services on AWS, provisioning infrastructure including EC2, Application Load Balancers, and security groups.',
      'Automated multi-environment deployments with Capistrano and GitHub Actions, improving release consistency and reducing manual deployment risk.',
      'Configured Nginx as a reverse proxy with SSL termination, and supported migration from default Rails authentication to a custom SSO/OAuth flow.',
    ],
  },
  {
    company: 'DevOps Africa Limited',
    role: 'Back End Engineer',
    period: '04/2025 – Present',
    location: 'Accra, Ghana · On-site',
    highlights: [
      'Build and maintain backend services in Ruby on Rails and PostgreSQL for production systems.',
      'Develop APIs and platform integrations supporting full-stack delivery across the team.',
      'Apply DevOps and deployment practices to keep services reliable and consistently shipped.',
    ],
  },
  {
    company: 'Yazi Inc.',
    role: 'Lead Software Engineer',
    period: '04/2024 – 05/2025',
    highlights: [
      'Led delivery of software solutions across web and mobile projects for diverse clients.',
      'Built a claims management and billing system in Python for a U.S.-based medical practice, supporting operational and administrative workflows.',
      'Modernised legacy codebases to improve maintainability and delivery speed, reducing operating costs.',
    ],
  },
  {
    company: 'Alveohive',
    role: 'Full-Stack Developer',
    period: '01/2023 – 05/2024',
    highlights: [
      'Increased property listings by 40% by building a modern real-estate platform with Next.js, TypeScript, Tailwind CSS, and Ruby on Rails.',
      'Built a mobile application for property tracking, enabling field agents to manage listings and locations efficiently.',
      'Supported migration from a legacy platform while maintaining continuity, feature parity, and stability.',
    ],
  },
  {
    company: 'Microverse',
    role: 'Code Reviewer & Mentor',
    period: '01/2023 – 12/2023',
    highlights: [
      'Conducted 800+ code reviews across HTML & CSS, JavaScript, React-Redux, Ruby, and Ruby on Rails, upholding best practices.',
      'Mentored a team of 4 junior developers, contributing to a 15% increase in program longevity and participant motivation.',
      'Recognised with the "Code Reviewer of the Month" award for consistent quality scores.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-shell section-spacing">
    <div className="section-heading">
      <p className="eyebrow">Experience</p>
      <h2>Four+ years building and shipping production systems.</h2>
      <p>
        A track record across full-stack delivery, backend systems, and cloud
        infrastructure, with growing leadership in how software gets built,
        deployed, and supported.
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
