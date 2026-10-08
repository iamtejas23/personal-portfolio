import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import useSEO from '../../hooks/useSEO';
import './NotFound.css';
import { ROUTE_SEO } from '../../seo/seoConfig';

const NotFound = () => {
  useSEO({
    ...ROUTE_SEO['/404'],
  });

  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-terminal" aria-hidden="true">
        <div className="not-found-terminal-bar">
          <span />
          <span />
          <span />
          <code>tejas@portfolio:~</code>
        </div>
        <div className="not-found-terminal-line">
          <FaCode />
          <code>route not found</code>
          <i />
        </div>
      </div>
      <p className="not-found-code">404</p>
      <h1 id="not-found-title">This page isn’t here</h1>
      <p>The link may be outdated, or the address may be mistyped.</p>
      <Link className="not-found-home" to="/">Back to Home</Link>
    </section>
  );
};

export default NotFound;
