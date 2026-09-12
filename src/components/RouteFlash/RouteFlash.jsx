import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './RouteFlash.css';

const RouteFlash = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.querySelector('.route-flash');
    if (!el) return undefined;
    el.classList.remove('run');
    void el.offsetWidth;
    el.classList.add('run');
    const t = setTimeout(() => el.classList.remove('run'), 520);
    return () => clearTimeout(t);
  }, [pathname]);

  return <div className="route-flash" aria-hidden="true" />;
};

export default RouteFlash;
