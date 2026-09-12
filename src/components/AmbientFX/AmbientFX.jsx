import React, { useEffect, useRef } from 'react';
import './AmbientFX.css';

const AmbientFX = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScroll = () => {
      const el = progressRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      el.style.width = `${pct}%`;
    };

    const onMove = (e) => {
      if (reduced) return;
      document.documentElement.style.setProperty('--spot-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--spot-y', `${e.clientY}px`);
    };

    let keys = [];
    const onKey = (e) => {
      keys = [...keys, e.key].slice(-10);
      const code = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
      if (code.every((k, i) => keys[i] === k)) {
        document.body.classList.add('root-access');
        window.dispatchEvent(new CustomEvent('portfolio-toast', { detail: 'root access granted' }));
        setTimeout(() => document.body.classList.remove('root-access'), 2400);
        keys = [];
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="ambient-spot" aria-hidden="true" />
      <div className="ambient-noise" aria-hidden="true" />
    </>
  );
};

export default AmbientFX;
