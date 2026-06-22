import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'React Native',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'Expo',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Ruby on Rails',
      'Node.js',
      'Python',
      'Flask',
      'PostgreSQL',
      'REST APIs',
      'JWT Auth',
      'Supabase',
    ],
  },
  {
    title: 'Infrastructure and Tools',
    items: [
      'AWS',
      'DigitalOcean',
      'Kamal',
      'Capistrano',
      'Nginx',
      'PWA / IndexedDB',
      'Data synchronization',
      'GitHub',
      'Deployment and support',
    ],
  },
];

const strengths = [
  {
    title: 'Engineering with context',
    description:
      'My background in business and finance helps me connect technical decisions to how people work, how operations run, and where software creates real value.',
  },
  {
    title: 'Full-stack with infrastructure depth',
    description:
      'My work now spans frontend, backend, and infrastructure, with growing depth in deployment, cloud, reliability, integrations, and data synchronization between systems.',
  },
  {
    title: 'Current direction',
    description:
      'I am most drawn to products with real operational complexity, where strong engineering, usable interfaces, and dependable systems all matter at the same time.',
  },
];

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    note: 'Supports my growing infrastructure, cloud, and deployment practice.',
  },
  {
    title: 'Full Stack Web Development Certificate',
    note: 'Microverse',
  },
];

const About = () => (
  <section id="about" className="section-shell section-spacing">
    <div className="section-heading">
      <p className="eyebrow">About</p>
      <h2>An engineer with more depth, more clarity, and better taste.</h2>
      <p>
        I earned a BSc in Consumer Sciences from the University of Ghana and a
        Full Stack Web Development certificate from Microverse. Over time,
        I&apos;ve grown into work that combines product-facing development with
        stronger full-stack execution, backend systems thinking, cloud
        awareness, and sharper technical judgment.
      </p>
    </div>

    <div className="about-grid">
      <article className="about-profile">
        <img
          src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679225460/photoAJ_akdjuo.jpg"
          alt="Portrait of Felicia G. Awuah"
        />
        <div>
          <h3>Felicia G. Awuah</h3>
          <p>
            I build software that is usable, dependable, and shaped around real
            operational needs. My recent work includes a retail operations
            platform, a Python-based claims management system for a U.S.
            medical practice, and system-to-system data synchronization in more
            complex backend environments. I also hold the AWS Certified Cloud
            Practitioner certification, which supports the cloud,
            infrastructure, and deployment side of my work.
          </p>
          <div className="about-actions">
            <a
              href="https://drive.google.com/file/d/1mb3I_VuW50LPjRcA0oFfcHkLbQt2e_lx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              View resume
            </a>
            <a
              href="https://www.linkedin.com/in/felicia-awuah-gyedua/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </article>

      <article className="about-skills">
        <h3>Core stack</h3>
        <div className="about-skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} className="about-skill-group">
              <h4>{group.title}</h4>
              <div className="tech-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>

    <div className="strength-grid">
      {strengths.map((item) => (
        <article key={item.title} className="strength-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>

    <div className="section-heading about-certifications-heading">
      <p className="eyebrow">Certifications</p>
      <h2>Credentials that support the engineering story.</h2>
      <p>
        These certifications back up the practical work already visible in the
        projects, especially on the cloud and full-stack side.
      </p>
    </div>

    <div className="strength-grid">
      {certifications.map((item) => (
        <article key={item.title} className="strength-card">
          <h3>{item.title}</h3>
          <p>{item.note}</p>
        </article>
      ))}
    </div>
  </section>
);

export default About;
