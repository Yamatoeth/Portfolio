export const projects = [
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
    featured: true,
    client: "Magasin de déco à Hanoï",
    category: "Application web"
  },
  {
    id: 3,
    title: "Smart contract de mint NFT + intégration front",
    description: "Projet Web3 complet permettant aux utilisateurs de minter des NFT uniques depuis une interface web moderne. Smart contract déployé sur testnet avec vérification Etherscan.",
    image: "/images/nft-mint.png",
    technologies: ["Solidity", "Hardhat", "React", "Wagmi", "Ethers.js"],
    githubUrl: "https://github.com/yamatoeth/nft-mint-contract",
    liveUrl: "https://nft-mint-demo.vercel.app",
    featured: true,
    client: "Projet personnel / Web3",
    category: "Blockchain",
    etherscanUrl: "https://sepolia.etherscan.io/address/0x..."
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
