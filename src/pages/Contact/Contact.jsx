import React from 'react';
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import useSEO from '../../hooks/useSEO';

const ContactForm = () => {
  useSEO({
    title: 'Contact Tejas Mane — DevOps Engineer',
    description: 'Get in touch with Tejas Mane, a DevOps Engineer from Kolhapur, India. Open to project collaborations, job opportunities, and general enquiries.',
    canonical: '/contact',
  });

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Left — info */}
        <div className="contact-info">
          <h1 className="contact-heading">Contact Tejas Mane</h1>
          <p className="contact-subtext">
            Whether it's a project, a question, or just a hello — I'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope aria-hidden="true" />
              <a href="mailto:tsmane8787@gmail.com">tsmane8787@gmail.com</a>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Kolhapur, Maharashtra, India</span>
            </div>
            <div className="contact-detail-item">
              <FaLinkedin aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/iamtejas23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/iamtejas23
              </a>
            </div>
            <div className="contact-detail-item">
              <FaGithub aria-hidden="true" />
              <a
                href="https://github.com/iamtejas23"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/iamtejas23
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrap">
          <form
            action="https://formsubmit.co/tsmane8787@gmail.com"
            method="POST"
            className="contact-form"
            noValidate
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from portfolio" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or question…"
                rows={5}
                required
              />
            </div>

            <button type="submit" className="btn-send">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
