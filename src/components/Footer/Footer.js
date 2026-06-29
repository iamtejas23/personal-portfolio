import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

const SOCIALS = [
  { href: 'https://github.com/iamtejas23',           icon: FaGithub,    label: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/iamtejas23/', icon: FaLinkedin,  label: 'LinkedIn'  },
  { href: 'https://twitter.com/IamTejas23',          icon: FaTwitter,   label: 'Twitter'   },
  { href: 'https://www.instagram.com/iamtejas23/',   icon: FaInstagram, label: 'Instagram' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {year} Tejas Mane &mdash; Built with React
        </p>

        <div className="footer-socials">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
