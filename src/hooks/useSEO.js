import { useEffect } from 'react';

const BASE_URL = 'https://tejasmane.netlify.app';

/**
 * Updates document title, meta description, canonical URL, and OG/Twitter tags
 * per route. Call at the top of each page component.
 */
const useSEO = ({ title, description, canonical, ogType = 'website', ogImage }) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Tejas Mane`
      : 'Tejas Mane | DevOps Engineer — AWS, Kubernetes & Cloud Expert';
    const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    const image = ogImage || `${BASE_URL}/tejas-mane.jpg`;

    document.title = fullTitle;

    setMeta('name', 'description', description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = fullCanonical;

    // OG
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', image);

    // Twitter
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, canonical, ogType, ogImage]);
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
