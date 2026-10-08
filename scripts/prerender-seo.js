/* Build-time renderer for the portfolio's public routes. */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

const root = path.resolve(__dirname, '..');
const srcRoot = path.join(root, 'src');
const outputRoot = path.join(root, 'build');
const mediaRoot = path.join(outputRoot, 'static', 'media');
const babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [
    [require.resolve('@babel/preset-env'), { targets: { node: 'current' }, modules: 'commonjs' }],
    require.resolve('@babel/preset-react'),
  ],
};

const originalJsLoader = require.extensions['.js'];
const compileSource = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = babel.transformSync(source, babelOptions).code;
  module._compile(compiled, filename);
};
require.extensions['.js'] = (module, filename) => (
  filename.startsWith(srcRoot) ? compileSource(module, filename) : originalJsLoader(module, filename)
);
require.extensions['.jsx'] = compileSource;
require.extensions['.css'] = (module) => { module.exports = {}; };

const assetExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.pdf']);
assetExtensions.forEach((extension) => {
  require.extensions[extension] = (module, filename) => {
    const basename = path.basename(filename, extension);
    const match = fs.readdirSync(mediaRoot).find((file) => (
      file.startsWith(`${basename}.`) && path.extname(file).toLowerCase() === extension
    ));
    if (!match) throw new Error(`Could not find built asset for ${filename}`);
    module.exports = `/static/media/${match}`;
  };
});

const { AppShell } = require('../src/App');
const {
  ROUTE_SEO, SITE_URL, SOCIAL_IMAGE, buildStructuredData,
} = require('../src/seo/seoConfig');

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function setMeta(html, attribute, key, value) {
  const pattern = new RegExp(`<meta\\s+[^>]*${attribute}="${escapeRegExp(key)}"[^>]*\\/?\\s*>`, 'i');
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function setCanonical(html, canonical) {
  const pattern = /<link\s+rel="canonical"[^>]*\/?\s*>/i;
  if (!canonical) return html.replace(pattern, '');
  const tag = `<link rel="canonical" href="${escapeHtml(canonical)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function routeHtml(pathname, route, template) {
  const router = React.createElement(
    StaticRouter,
    { location: pathname },
    React.createElement(AppShell)
  );
  const markup = renderToString(router);
  let html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/i, '');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = setMeta(html, 'name', 'description', route.description);
  html = setMeta(html, 'name', 'robots', route.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  html = setCanonical(html, route.canonical);
  html = setMeta(html, 'property', 'og:title', route.title);
  html = setMeta(html, 'property', 'og:description', route.description);
  html = setMeta(html, 'property', 'og:url', route.canonical || `${SITE_URL}${pathname}`);
  html = setMeta(html, 'property', 'og:type', route.ogType);
  html = setMeta(html, 'property', 'og:image', SOCIAL_IMAGE);
  html = setMeta(html, 'property', 'og:image:alt', 'Tejas Mane — DevOps Engineer and Frontend Developer');
  html = setMeta(html, 'property', 'og:image:width', '1200');
  html = setMeta(html, 'property', 'og:image:height', '630');
  html = setMeta(html, 'property', 'og:image:type', 'image/jpeg');
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = setMeta(html, 'name', 'twitter:title', route.title);
  html = setMeta(html, 'name', 'twitter:description', route.description);
  html = setMeta(html, 'name', 'twitter:image', SOCIAL_IMAGE);
  html = setMeta(html, 'name', 'twitter:image:alt', 'Tejas Mane — DevOps Engineer and Frontend Developer');

  const jsonLd = JSON.stringify(buildStructuredData(pathname)).replace(/</g, '\\u003c');
  const jsonLdTag = `<script id="route-jsonld" type="application/ld+json">${jsonLd}</script>`;
  html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i, jsonLdTag);
  if (!html.includes('id="route-jsonld"')) html = html.replace('</head>', `    ${jsonLdTag}\n  </head>`);
  return html;
}

function routeLastModified(sourceFile) {
  try {
    const changed = execFileSync('git', ['status', '--porcelain', '--', sourceFile, 'src/seo/seoConfig.js'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (changed) return new Date().toISOString().slice(0, 10);
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', sourceFile, 'src/seo/seoConfig.js'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

function writeCrawlFiles() {
  const sourceFiles = {
    '/': 'src/pages/Home/Home.jsx',
    '/about': 'src/pages/About/About.jsx',
    '/contact': 'src/pages/Contact/Contact.jsx',
    '/blogs': 'src/components/BlogCard/BlogCard.jsx',
  };
  const routes = Object.entries(ROUTE_SEO).filter(([, route]) => route.canonical && !route.noindex);
  const urls = routes.map(([routePath, route]) => {
    const lastmod = routeLastModified(sourceFiles[routePath] || 'src/seo/seoConfig.js');
    return `  <url><loc>${route.canonical}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
  }).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(outputRoot, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(outputRoot, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

function main() {
  const template = fs.readFileSync(path.join(outputRoot, 'index.html'), 'utf8');
  Object.entries(ROUTE_SEO).forEach(([route, config]) => {
    const html = routeHtml(route === '/404' ? '/404.html' : route, config, template);
    const output = route === '/'
      ? path.join(outputRoot, 'index.html')
      : route === '/404'
        ? path.join(outputRoot, '404.html')
        : path.join(outputRoot, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, html);
    console.log(`Prerendered ${route} -> ${path.relative(root, output)}`);
  });
  writeCrawlFiles();
  console.log('Generated route-specific metadata, JSON-LD, sitemap.xml and robots.txt.');
}

main();
