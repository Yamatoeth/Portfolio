// Configuration SEO par défaut pour le portfolio
export const defaultSEO = {
  title: 'Portfolio - Développeur Web Full Stack',
  description: 'Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et réalisations.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-portfolio.vercel.app',
    siteName: 'Portfolio - Développeur Web',
    title: 'Portfolio - Développeur Web Full Stack',
    description: 'Portfolio de développeur web full stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et réalisations.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio - Développeur Web Full Stack',
      },
    ],
  },
  twitter: {
    handle: '@yamatoeth',
    site: '@yamatoeth',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'author',
      content: 'Votre Nom',
    },
    {
      name: 'keywords',
      content: 'développeur web, full stack, React, Next.js, Node.js, JavaScript, TypeScript, portfolio',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

// Configuration SEO spécifique pour les pages
export const pageSEO = {
  home: {
    title: 'Accueil - Portfolio Développeur Web',
    description: 'Bienvenue sur mon portfolio. Développeur web full stack passionné, je crée des applications web modernes et performantes.',
    url: 'https://votre-portfolio.vercel.app',
  },
  about: {
    title: 'À propos - Portfolio Développeur Web',
    description: 'Découvrez mon parcours, mes compétences et ma passion pour le développement web. Plus de X années d\'expérience en développement.',
    url: 'https://votre-portfolio.vercel.app/about',
  },
  projects: {
    title: 'Projets - Portfolio Développeur Web',
    description: 'Découvrez mes réalisations : applications web, sites e-commerce, et solutions full stack développées avec les dernières technologies.',
    url: 'https://votre-portfolio.vercel.app/projects',
  },
  contact: {
    title: 'Contact - Portfolio Développeur Web',
    description: 'Contactez-moi pour discuter de votre projet. Je suis disponible pour des missions freelance et des collaborations.',
    url: 'https://votre-portfolio.vercel.app/contact',
  },
};

// Schema.org structured data
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Votre Nom',
  jobTitle: 'Développeur Web Full Stack',
  description: 'Développeur web full stack spécialisé en React, Next.js et Node.js',
  url: 'https://votre-portfolio.vercel.app',
  sameAs: [
    'https://github.com/yamatoeth',
    'https://twitter.com/yamatoeth',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
  ],
};
