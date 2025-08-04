// Données des projets avec traductions
export const projectsData = {
  fr: [
    {
      id: 1,
      title: "Site vitrine pour un cabinet de psychologie",
      description: "Site web vitrine professionnel pour présenter l'activité du cabinet, rassurer les clients et faciliter la prise de rendez-vous. Design responsive et optimisé pour le SEO.",
      image: "/images/psychologie-cabinet.png",
      technologies: ["WordPress", "Elementor", "RankMath", "CSS"],
      githubUrl: "https://github.com/yamatoeth/cabinet-psychologie",
      liveUrl: "https://cabinet-psychologie-demo.com",
      featured: true,
      client: "Cabinet privé",
      category: "Site vitrine"
    },
    {
      id: 2,
      title: "App de gestion de stock pour un magasin local",
      description: "Application web sur mesure permettant au staff de gérer les entrées et sorties de stock en temps réel. Interface claire et mobile-friendly avec authentification sécurisée.",
      image: "/images/stock-management.png",
      technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/yamatoeth/stock-management",
      liveUrl: "https://stock-management-demo.vercel.app",
      featured: false,
      client: "Magasin local",
      category: "Application Web"
    },
    {
      id: 3,
      title: "Protocole DeFi avec yield farming et governance",
      description: "Protocole de finance décentralisée innovant permettant le yield farming, le staking et la gouvernance communautaire. Smart contracts audités et interface moderne.",
      image: "/images/defi-protocol.png",
      technologies: ["Solidity", "React", "Web3.js", "Node.js"],
      githubUrl: "https://github.com/yamatoeth/defi-protocol",
      liveUrl: "https://defi-protocol-demo.vercel.app",
      etherscanUrl: "https://etherscan.io/address/0x1234567890abcdef",
      featured: true,
      client: "Startup DeFi",
      category: "Blockchain"
    },
    {
      id: 4,
      title: "E-commerce avec panier et paiements Stripe",
      description: "Boutique en ligne complète avec gestion de produits, panier dynamique, système de paiement sécurisé et tableau de bord administrateur.",
      image: "/images/ecommerce-site.png",
      technologies: ["Next.js", "Stripe", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/yamatoeth/ecommerce-store",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: false,
      client: "Boutique en ligne",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Portfolio personnel avec blog intégré",
      description: "Site portfolio moderne et responsive avec système de blog CMS, optimisations SEO avancées et performance optimale.",
      image: "/images/portfolio-blog.png",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yamatoeth/portfolio-blog",
      liveUrl: "https://portfolio-blog-demo.vercel.app",
      featured: true,
      client: "Personnel",
      category: "Portfolio"
    }
  ],
  en: [
    {
      id: 1,
      title: "Showcase website for a psychology practice",
      description: "Professional showcase website to present the practice's activity, reassure clients and facilitate appointment booking. Responsive design and SEO optimized.",
      image: "/images/psychologie-cabinet.png",
      technologies: ["WordPress", "Elementor", "RankMath", "CSS"],
      githubUrl: "https://github.com/yamatoeth/cabinet-psychologie",
      liveUrl: "https://cabinet-psychologie-demo.com",
      featured: true,
      client: "Private practice",
      category: "Showcase website"
    },
    {
      id: 2,
      title: "Stock management app for a local store",
      description: "Custom web application allowing staff to manage stock entries and exits in real time. Clear and mobile-friendly interface with secure authentication.",
      image: "/images/stock-management.png",
      technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/yamatoeth/stock-management",
      liveUrl: "https://stock-management-demo.vercel.app",
      featured: false,
      client: "Local store",
      category: "Web Application"
    },
    {
      id: 3,
      title: "DeFi protocol with yield farming and governance",
      description: "Innovative decentralized finance protocol enabling yield farming, staking and community governance. Audited smart contracts and modern interface.",
      image: "/images/defi-protocol.png",
      technologies: ["Solidity", "React", "Web3.js", "Node.js"],
      githubUrl: "https://github.com/yamatoeth/defi-protocol",
      liveUrl: "https://defi-protocol-demo.vercel.app",
      etherscanUrl: "https://etherscan.io/address/0x1234567890abcdef",
      featured: true,
      client: "DeFi Startup",
      category: "Blockchain"
    },
    {
      id: 4,
      title: "E-commerce with cart and Stripe payments",
      description: "Complete online store with product management, dynamic cart, secure payment system and admin dashboard.",
      image: "/images/ecommerce-site.png",
      technologies: ["Next.js", "Stripe", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/yamatoeth/ecommerce-store",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: false,
      client: "Online store",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Personal portfolio with integrated blog",
      description: "Modern and responsive portfolio website with CMS blog system, advanced SEO optimizations and optimal performance.",
      image: "/images/portfolio-blog.png",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yamatoeth/portfolio-blog",
      liveUrl: "https://portfolio-blog-demo.vercel.app",
      featured: true,
      client: "Personal",
      category: "Portfolio"
    }
  ]
};

// Fonction pour obtenir les projets selon la langue
export const getProjects = (language = 'fr') => {
  return projectsData[language] || projectsData.fr;
};

// Fonction pour obtenir les projets vedettes selon la langue
export const getFeaturedProjects = (language = 'fr') => {
  const projects = getProjects(language);
  return projects.filter(project => project.featured);
};

// Export pour compatibilité avec l'ancien système
export const projects = projectsData.fr;
export { getFeaturedProjects as getFeaturedProjectsLegacy };
