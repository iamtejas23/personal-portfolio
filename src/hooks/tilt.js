const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const onTiltMove = (e) => {
  if (reduced() || window.matchMedia('(pointer: coarse)').matches) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty('--tilt-x', `${(x * 100).toFixed(1)}%`);
  el.style.setProperty('--tilt-y', `${(y * 100).toFixed(1)}%`);
  const rx = ((0.5 - y) * 7).toFixed(2);
  const ry = ((x - 0.5) * 9).toFixed(2);
  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
};

export const onTiltLeave = (e) => {
  const el = e.currentTarget;
  el.style.transform = '';
  el.style.removeProperty('--tilt-x');
  el.style.removeProperty('--tilt-y');
};
