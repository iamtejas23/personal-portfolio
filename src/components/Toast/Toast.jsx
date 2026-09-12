import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    const onToast = (e) => {
      setMessage(e.detail || 'Done');
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(''), 2200);
    };
    window.addEventListener('portfolio-toast', onToast);
    return () => {
      window.removeEventListener('portfolio-toast', onToast);
      clearTimeout(timer);
    };
  }, []);

  if (!message) return null;

  return (
    <div className="site-toast" role="status">
      {message}
    </div>
  );
};

export const showToast = (detail) => {
  window.dispatchEvent(new CustomEvent('portfolio-toast', { detail }));
};

export default Toast;
