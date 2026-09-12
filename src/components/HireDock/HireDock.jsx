import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HireDock.css';

const HireDock = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <Link to="/contact" className="hire-dock" aria-label="Open contact — available for work">
      <span className="hire-dock-pulse" aria-hidden="true" />
      Let’s talk
    </Link>
  );
};

export default HireDock;
