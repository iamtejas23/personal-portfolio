import React, { useEffect, useRef } from 'react';
import './CursorFollow.css';

const CursorFollow = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return undefined;

    document.documentElement.classList.add('has-custom-cursor');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
    };

    const onOver = (e) => {
      const hit = e.target.closest('a, button, [role="button"], [role="tab"], input, textarea');
      hovering = Boolean(hit);
      document.documentElement.classList.toggle('cursor-hot', hovering);
    };

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor', 'cursor-hot');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
};

export default CursorFollow;
