import React from 'react';
import './TechMarquee.css';

const ITEMS = [
  'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'ArgoCD',
  'Ansible', 'Prometheus', 'Grafana', 'React', 'Next.js', 'GitOps', 'CI/CD',
];

const TechMarquee = () => {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="tech-marquee-item">
            {item}
            <span className="tech-marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
