export const SITE_URL = 'https://tejasmane.netlify.app';
export const SOCIAL_IMAGE = `${SITE_URL}/og-tejas-mane.jpg`;

export const BLOG_POSTS = [
  {
    headline: 'SyncerD: Git Sync',
    date: 'Sep 3, 2026',
    description: 'Keep Git repositories in sync across GitHub, GitLab, Bitbucket, Azure DevOps, and AWS CodeCommit — for migrations, backups, and provider outages.',
    url: 'https://medium.com/@iamtejas23/syncerd-git-sync-931c1c9661d5',
    datePublished: '2026-09-03',
  },
  {
    headline: 'SyncerD: Container Image Synchronization',
    date: 'Sep 2, 2026',
    description: 'Move container images between Docker Hub, ECR, and other registries so CI/CD and Kubernetes always pull from where you need them.',
    url: 'https://medium.com/@iamtejas23/syncerd-container-image-synchronization-002f9ebc8b63',
    datePublished: '2026-09-02',
  },
  {
    headline: 'Introducing SyncerD: A Lightweight Synchronization Engine for Modern DevOps',
    date: 'Sep 2, 2026',
    description: 'A lightweight engine for syncing Git repos and container images across platforms — built for multi-cloud DevOps teams.',
    url: 'https://medium.com/@iamtejas23/introducing-syncerd-a-lightweight-synchronization-engine-for-modern-devops-f5dc1cc751ea',
    datePublished: '2026-09-02',
  },
];

export const ROUTE_SEO = {
  '/': {
    title: 'Tejas Mane | DevOps Engineer in Kolhapur, India',
    description: 'Tejas Mane is a DevOps engineer in Kolhapur, India, building AWS infrastructure and CI/CD with Kubernetes, Docker, Terraform and Jenkins.',
    canonical: `${SITE_URL}/`,
    ogType: 'profile',
    pageType: 'ProfilePage',
    pageName: 'Tejas Mane | DevOps Engineer in Kolhapur, India',
  },
  '/about': {
    title: 'About Tejas Mane | DevOps & Cloud Engineer',
    description: 'Learn about Tejas Mane, a DevOps engineer in Kolhapur, India: AWS, Kubernetes, Docker, Terraform, Jenkins, project work and MCA education.',
    canonical: `${SITE_URL}/about`,
    ogType: 'profile',
    pageType: 'AboutPage',
    pageName: 'About Tejas Mane',
  },
  '/contact': {
    title: 'Contact Tejas Mane | DevOps Engineer',
    description: 'Contact Tejas Mane in Kolhapur, India about DevOps, cloud infrastructure, CI/CD roles, freelance work or project collaborations.',
    canonical: `${SITE_URL}/contact`,
    ogType: 'website',
    pageType: 'ContactPage',
    pageName: 'Contact Tejas Mane',
  },
  '/blogs': {
    title: 'DevOps & SyncerD Articles | Tejas Mane',
    description: 'Articles by Tejas Mane on SyncerD, Git repository synchronization, container image workflows and practical DevOps engineering.',
    canonical: `${SITE_URL}/blogs`,
    ogType: 'website',
    pageType: 'CollectionPage',
    pageName: 'DevOps and SyncerD Articles by Tejas Mane',
  },
  '/404': {
    title: 'Page not found | Tejas Mane',
    description: 'The page you are looking for could not be found. Return to Tejas Mane’s portfolio home page.',
    canonical: null,
    ogType: 'website',
    pageType: 'WebPage',
    pageName: 'Page not found',
    noindex: true,
  },
};

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

export const PERSON_SCHEMA = {
  '@type': 'Person',
  '@id': personId,
  name: 'Tejas Mane',
  url: `${SITE_URL}/`,
  image: SOCIAL_IMAGE,
  jobTitle: ['DevOps Engineer', 'Frontend Developer'],
  description: 'DevOps engineer and frontend developer based in Kolhapur, Maharashtra, India. Portfolio covering AWS, Kubernetes, Docker, Terraform, Jenkins, Ansible, ArgoCD, React and Next.js.',
  email: 'tsmane8787@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kolhapur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/iamtejas23',
    'https://www.linkedin.com/in/iamtejas23/',
    'https://twitter.com/IamTejas23',
    'https://www.instagram.com/iamtejas23/',
  ],
  knowsAbout: [
    'DevOps engineering', 'Amazon Web Services', 'Kubernetes', 'Docker', 'Terraform',
    'Jenkins', 'CI/CD', 'Ansible', 'ArgoCD', 'GitOps', 'Prometheus', 'Grafana',
    'React', 'Next.js', 'Node.js', 'JavaScript', 'Infrastructure as Code',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bharati Vidyapeeth Institute of Management, Kolhapur',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Computer Applications (MCA)',
      educationalLevel: 'Postgraduate',
      dateCreated: '2024',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Bharati Vidyapeeth Institute of Management, Kolhapur' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Computer Applications (BCA)',
      educationalLevel: 'Undergraduate',
      dateCreated: '2022',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Bharati Vidyapeeth Institute of Management, Kolhapur' },
    },
  ],
};

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${SITE_URL}/`,
  name: 'Tejas Mane Portfolio',
  description: ROUTE_SEO['/'].description,
  inLanguage: 'en-IN',
  publisher: { '@id': personId },
};

export function buildStructuredData(pathname) {
  const route = ROUTE_SEO[pathname] || ROUTE_SEO['/404'];
  const schema = [PERSON_SCHEMA, WEBSITE_SCHEMA];
  const page = {
    '@type': route.pageType,
    '@id': `${route.canonical || `${SITE_URL}${pathname}`}#webpage`,
    url: route.canonical || `${SITE_URL}${pathname}`,
    name: route.pageName,
    description: route.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'en-IN',
  };

  if (pathname === '/blogs') {
    page.mainEntity = {
      '@type': 'ItemList',
      itemListElement: BLOG_POSTS.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.headline,
          description: post.description,
          url: post.url,
          datePublished: post.datePublished,
          author: { '@id': personId },
          inLanguage: 'en',
        },
      })),
    };
  } else {
    page.about = { '@id': personId };
    if (pathname === '/') page.mainEntity = { '@id': personId };
  }
  schema.push(page);

  if (pathname !== '/404') {
    schema.push({
      '@type': 'BreadcrumbList',
      '@id': `${route.canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        ...(pathname === '/' ? [] : [{
          '@type': 'ListItem', position: 2, name: route.pageName, item: route.canonical,
        }]),
      ],
    });
  }

  return { '@context': 'https://schema.org', '@graph': schema };
}
