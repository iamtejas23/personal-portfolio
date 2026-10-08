import { useEffect } from 'react';
import { SITE_URL, buildStructuredData } from '../seo/seoConfig';

/**
 * Updates document title, meta description, canonical URL, and OG/Twitter tags
 * per route. Call at the top of each page component.
 */
const useSEO = ({ title, description, canonical, ogType = 'website', ogImage, noindex = false }) => {
  useEffect(() => {
    const fullTitle = title
      ? (title.includes('Tejas Mane') ? title : `${title} | Tejas Mane`)
      : 'Tejas Mane | DevOps Engineer — AWS, Kubernetes & Cloud Expert';
    const fullCanonical = canonical
      ? (canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`)
      : `${SITE_URL}${window.location.pathname}`;
    const image = ogImage || `${SITE_URL}/og-tejas-mane.jpg`;

    document.title = fullTitle;

    setMeta('name', 'description', description);

    setMeta(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (noindex) {
      link?.remove();
    } else if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    if (!noindex) link.href = fullCanonical;

    // OG
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:alt', 'Tejas Mane — DevOps Engineer and Frontend Developer');

    // Twitter
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    const schema = document.getElementById('route-jsonld');
    if (noindex) {
      schema?.remove();
    } else {
      const script = schema || document.createElement('script');
      script.id = 'route-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(buildStructuredData(window.location.pathname));
      if (!schema) document.head.appendChild(script);
    }
  }, [title, description, canonical, ogType, ogImage, noindex]);
};

const setMeta = (attr, value, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export default useSEO;
