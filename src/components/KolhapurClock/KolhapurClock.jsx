import React, { useEffect, useState } from 'react';

const KolhapurClock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  return (
    <div className="nav-clock" aria-label="Current time in Kolhapur">
      <span className="nav-clock-time">{time}</span>
      <span className="nav-clock-label">IST · Kolhapur</span>
    </div>
  );
};

export default KolhapurClock;
