import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes,
  FaGithub, FaLinkedin, FaFileAlt, FaInstagram, FaTwitter, FaNewspaper,
} from 'react-icons/fa';
import './SideNav.css';

const NAV_ITEMS = [
  { to: '/',        icon: FaHome,        label: 'Home'    },
  { to: '/about',   icon: FaInfoCircle,  label: 'About'   },
  { to: '/contact', icon: FaEnvelope,    label: 'Contact' },
  { to: '/blogs',   icon: FaNewspaper,   label: 'Blogs'   },
];

const SOCIALS = [
  { href: 'https://github.com/iamtejas23',           icon: FaGithub,    label: 'GitHub',    color: '#e2e2e2'  },
  { href: 'https://twitter.com/IamTejas23',          icon: FaTwitter,   label: 'Twitter',   color: '#1DA1F2'  },
  { href: 'https://www.linkedin.com/in/iamtejas23/', icon: FaLinkedin,  label: 'LinkedIn',  color: '#0A66C2'  },
  { href: 'https://www.instagram.com/iamtejas23/',   icon: FaInstagram, label: 'Instagram', color: '#E4405F'  },
];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close drawer when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger toggle */}
      <button
        className={`nav-toggle${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(v => !v)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        aria-controls="sidenav"
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      {/* Dark backdrop (mobile only) */}
      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside id="sidenav" className={`sidenav${isOpen ? ' open' : ''}`}>

        <div className="nav-brand">
          <div className="brand-logo" aria-hidden="true">TM</div>
          <span className="brand-label">Portfolio</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-item${location.pathname === to ? ' active' : ''}`}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              <Icon className="nav-icon" aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1NwROYwW9BgRiA3XJCFF1f3rw1hDToBvo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            <FaFileAlt className="nav-icon" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </nav>

        <div className="nav-socials">
          <span className="socials-label">Connect</span>
          <div className="socials-list">
            {SOCIALS.map(({ href, icon: Icon, label, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label={label}
              >
                <Icon style={{ color }} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

      </aside>
    </>
  );
};

export default SideNav;
