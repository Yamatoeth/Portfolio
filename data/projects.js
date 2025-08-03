export const projects = [
  {
    id: 1,
    title: "Clone de Twitter",
    description: "Application fullstack reproduisant les fonctionnalités principales de Twitter avec authentification, tweets en temps réel, et système de likes/retweets.",
    image: "/images/twitter-clone.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yamatoeth/twitter-clone",
    liveUrl: "https://twitter-clone-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Tableau de bord d'administration pour boutique en ligne avec gestion des produits, commandes et analytics en temps réel.",
    image: "/images/ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/yamatoeth/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.netlify.app",
    featured: false
  },
  {
    id: 3,
    title: "Application Météo",
    description: "App météo moderne avec géolocalisation, prévisions sur 7 jours, et interface responsive adaptée mobile et desktop.",
    image: "/images/weather-app.png",
    technologies: ["Vue.js", "OpenWeather API", "SCSS", "PWA"],
    githubUrl: "https://github.com/yamatoeth/weather-app",
    liveUrl: "https://weather-app-demo.surge.sh",
    featured: false
  },
  {
    id: 4,
    title: "Générateur de CV",
    description: "Outil en ligne pour créer des CV professionnels avec templates personnalisables et export PDF.",
    image: "/images/cv-generator.png",
    technologies: ["React", "jsPDF", "Material-UI", "Local Storage"],
    githubUrl: "https://github.com/yamatoeth/cv-generator",
    liveUrl: "https://cv-generator-demo.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Chat App en Temps Réel",
    description: "Application de messagerie instantanée avec rooms, notifications push et partage de fichiers.",
    image: "/images/chat-app.png",
    technologies: ["Socket.io", "Node.js", "React", "MongoDB", "JWT"],
    githubUrl: "https://github.com/yamatoeth/realtime-chat",
    liveUrl: "https://chat-app-demo.herokuapp.com",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio Personnel",
    description: "Site portfolio responsive avec animations fluides, mode sombre et optimisations SEO.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/yamatoeth/portfolio",
    liveUrl: "https://mon-portfolio.vercel.app",
    featured: false
  }
];

// Fonction utilitaire pour récupérer un projet par ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Fonction utilitaire pour récupérer les projets vedettes
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Fonction utilitaire pour récupérer les projets par technologie
export const getProjectsByTechnology = (technology) => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
