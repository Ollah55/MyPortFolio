import React from 'react';
import './contacts.css';
import resume from '../../assets/resume.pdf';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>You can reach out to me through any of the platforms below:</p>

      <div className="contact-links">
        <a href="mailto:moyosoretaiwooo@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        <a href="https://github.com/Ollah55" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={resume} download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
