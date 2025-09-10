export const projects = [
  {
    id: 1,
    title: "WF Design + Build",
    description: "Professional showcase website for a design and construction agency. Modern architecture and elegant user interface.",
    image: "/images/projects/wf.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/yamatoeth/WF",
    liveUrl: "https://yamatoeth.github.io/WF/",
    featured: true,
    client: "WF Design",
    category: "Showcase website",
    color: "from-blue-900 to-blue-600",
    logo: "WF"
  },
  {
    id: 2,
    title: "Burkett & Co",
    description: "Web platform for accounting firm with client management and professional services. Modern and secure interface.",
    image: "/images/projects/burkett.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yamatoeth/Burkett-Co",
    liveUrl: "https://yamatoeth.github.io/Burkett-Co",
    featured: true,
    client: "Burkett & Co",
    category: "Web Application",
    color: "from-teal-600 to-teal-400",
    logo: "Burkett & Co"
  },
  {
    id: 3,
    title: "SolWatcher",
    description: "Solana dashboard to track wallet balance, tokens held, and recent transactions. Uses the Helius API for on-chain data and Supabase for storage.",
    image: "/images/projects/solwatcher.png",
    technologies: ["React", "Helius API", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/yamatoeth/SolWatcher",
    liveUrl: "https://solwatcher-silk.vercel.app/",
    featured: true,
    client: "Community Tool",
    category: "Blockchain",
    color: "from-purple-600 to-blue-500",
    logo: "SolWatcher"
  },
  {
    id: 4,
    title: "GLC Solutions",
    description: "Website for technology solutions company with service presentation and portfolio showcase.",
    image: "/images/projects/glc.png",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/yamatoeth/GlcSolutions",
    liveUrl: "https://yamatoeth.github.io/GlcSolutions/",
    featured: true,
    client: "GLC Solutions",
    category: "Corporate website",
    color: "from-gray-800 to-gray-600",
    logo: "GLC"
  },
  {
    id: 5,
    title: "Coupal Construction",
    description: "Showcase website for construction company with project gallery and online quote form.",
    image: "/images/projects/coupalconstruction.png",
    technologies: ["WordPress", "Elementor", "WooCommerce", "CSS"],
    githubUrl: "https://github.com/yamatoeth/CoupalConstruction",
    liveUrl: "https://yamatoeth.github.io/CoupalConstruction",
    featured: true,
    client: "Coupal",
    category: "Showcase website",
    color: "from-red-600 to-orange-500",
    logo: "COUPAL"
  },
  {
    id: 6,
    title: "NFT Smart Contract",
    description: "ERC1155 NFT minting DApp on Ethereum Sepolia. Modern interface for creating and managing NFT collections with smart contracts.",
    image: "/images/projects/juicewrld.png",
    technologies: ["React", "Solidity", "Web3.js", "Ethereum"],
    githubUrl: "https://github.com/Yamatoeth/JuiceWrldNFT",
    liveUrl: "https://juice-wrld-nft.vercel.app/",
    featured: true,
    client: "NFT Project",
    category: "Blockchain DApp",
    color: "from-purple-700 to-pink-500",
    logo: "NFT"
  },
  {
    id: 7,
    title: "Folderly",
    description: "AI agent for file organization and optimization",
    image: "/images/projects/in-development.png",
    technologies: ["Python", "AI", "autonomous agents", "NodeJs"],
    githubUrl: "https://github.com/Yamatoeth/Folderly",
    liveUrl: "https://juice-wrld-nft.vercel.app/",
    featured: true,
    client: "Personnal Project",
    category: "Saas",
    color: "from-purple-700 to-pink-500",
    logo: "Folderly"
  },
  {
    id: 8,
    title: "FileScanner",
    description: "Saas for file scanning and analysis",
    image: "/images/projects/in-development.png",
    technologies: ["", "Solidity", "Web3.js", "Ethereum"],
    githubUrl: "https://github.com/Yamatoeth/Filescanner",
    liveUrl: "https://juice-wrld-nft.vercel.app/",
    featured: true,
    client: "Personnal Project",
    category: "Saas",
    color: "from-purple-700 to-pink-500",
    logo: "FileScanner"
  },
  


];

// Utility function to get a project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Utility function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Utility function to get projects by technology
export const getProjectsByTechnology = (technology) => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
