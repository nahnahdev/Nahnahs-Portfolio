import React from 'react';

const Contact = () => (
  <section id="contact" className="section-shell section-spacing">
    <div className="contact-panel">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Open to thoughtful product and engineering work.</h2>
        <p>
          I&apos;m open to full-time roles, freelance projects, and
          collaborations where strong engineering, clear communication, and
          practical product thinking all matter. If you&apos;re building
          something meaningful, I&apos;d love to hear about it.
        </p>

        <div className="contact-points">
          <a href="mailto:nahnahahjuwah@gmail.com">nahnahahjuwah@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/felicia-awuah-gyedua/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile
          </a>
          <a href="https://github.com/nahnahdev" target="_blank" rel="noreferrer">
            GitHub profile
          </a>
        </div>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/xjvdevze"
        method="post"
      >
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about the role, product, or project."
            rows="6"
            required
          />
        </label>

        <button type="submit" className="button-primary">
          Send message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
