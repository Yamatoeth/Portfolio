
import projectFilespy from '@/assets/project-filespy.png';
import projectFolderly from '@/assets/project-folderly.png';
import projectWF from '@/assets/project-wf.png';
import projectBurkett from '@/assets/project-burkett.png';
import projectSolwatcher from '@/assets/project-solwatcher.png';
import projectGLC from '@/assets/project-glc.png';
import projectCoupalConstruction from '@/assets/project-coupal-construction.png';
import projectBonkFeast from '@/assets/project-bonkfeast.png';
import projectTeclisScientifique from '@/assets/project-teclis-scientifique.png';
import projectwrldtokendapp from '@/assets/project-wrldtokendapp.png';
import projectjuicewrldnft from '@/assets/project-juicewrldnft.png';
import projectgenixishop from '@/assets/project-genixishop.png';
import projectarbifever from '@/assets/project-arbifever.jpeg';
import projectlendingapp from '@/assets/project-lendingapp.png';


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: 'main' | 'web3' | 'ongoing' | 'classic';
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [

  // Main Featured Projects
  
  {
    id: 'Project-1',
    title: 'NFT Smart Contract',
    description: 'ERC 1155 NFT Minting Dapp on Sepolia Network',
    image: projectjuicewrldnft,
    link: 'https://juice-wrld-nft.vercel.app/',
    category: 'main',
    technologies: ['React', 'ThirdWeb SDK', 'Solidity', 'TypeScript'],
    featured: true
  },
  {
    id: 'project-2',
    title: 'ERC20 Token with Staking Interface',
    description: 'ERC20 custom contract built with Remix IDE and deployed on Sepolia Network',
    image: projectwrldtokendapp,
    link: 'https://wrld-sepolia-dapp.vercel.app/',
    category: 'main',
    technologies: ['React', 'Solidity', 'Remix', 'ethers.js'],
    featured: true
  },
  {
    id: 'project-3',
    title: 'Sepolia Lending/Borrowing Dapp Demo',
    description: 'Demo of a lending/borrowing dapp on Sepolia Network',
    image: projectlendingapp,
    link: 'https://sepolia-lend-borrow-demo.vercel.app/',
    category: 'main',
    technologies: ['React', 'Typescript', 'Hardhat', 'Ethersjs'],
  },
  
  // Web3 Projects // 

  {
    id: 'web3-1',
    title: 'ArbiFever',
    description: 'Infection Token on Arbitrum, presale, burn, staking functions',
    image: projectarbifever,
    link: 'https://x.com/ArbiFever',
    category: 'web3',
    technologies: ['React', 'Smart Contracts', 'TypeScript']
  },
  {
    id: 'web3-2',
    title: 'SolWatcher',
    description: 'Solana dashboard to track wallet balance, tokens held, and recent transactions. Uses the Helius API for on-chain data and Supabase for storage.',
    image: projectSolwatcher,
    link: 'https://solwatcher-silk.vercel.app/',
    category: 'main',
    technologies: ['React', 'Supabase', 'Solana', 'Helius API'],
  },
  {
      id: 'web3-3',
      title: 'MemeCoin Website',
      description: 'Landing page and info site for a fun meme cryptocurrency project',
      image: projectBonkFeast,
      link: 'https://bonkfeast.fun/',
      category: 'web3',
      technologies: ['html', 'css', 'js',]
  },

  // Classic / Non-Web3 Projects
  
  {
    id: 'classic-1',
    title: 'WF Design Agency',
    description: 'showcase of a design agency website built with React and TailwindCSS',
    image: projectWF, // tu peux ajouter une image dédiée
    link: 'https://yamatoeth.github.io/WF/',
    category: 'classic',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'TailwindCSS'],
    featured: false
  },
  {
    id: 'classic-2',
    title: 'Burkett & Co',
    description: 'Web platform for accounting firm with client management and professional services. Modern and secure interface.',
    image: projectBurkett,
    link: 'https://yamatoeth.github.io/Burkett-Co',
    category: 'classic',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'classic-3',
    title: 'GLC Solutions',
    description: 'Website for technology solutions company with service presentation and portfolio showcase.',
    image: projectGLC,
    link: 'https://yamatoeth.github.io/GlcSolutions',
    category: 'classic',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Vercel'],
  },
  {
    id: 'classic-4',
    title: 'Coupal Construction',
    description: 'Showcase website for construction company with project gallery and online quote form.',
    image: projectCoupalConstruction,
    link: 'https://yamatoeth.github.io/CoupalConstruction',
    category: 'classic',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'Netlify'],
  },
  {
    id: 'classic-5',
    title: 'Ecommerce Shop',
    description: 'Ecommerce platform for a retail business with product catalog, shopping cart, and payment integration.',
    image: projectgenixishop,
    link: 'https://genixi.store/products/whitening-strips',
    category: 'classic',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads']
  },

  // Ongoing Projects
  {
    id: 'ongoing-1',
    title: 'FileSpy',
    description: 'Advanced file analysis tool with AI-powered insights',
    image: projectFilespy,
    link: 'https://file-spy.vercel.app/',
    category: 'ongoing',
    technologies: ['Electron', 'React', 'Python', 'Machine Learning']
  },
  {
    id: 'ongoing-2',
    title: 'Folderly',
    description: 'Intelligent folder organization system with automated categorization',
    image: projectFolderly,
    link: 'https://tidy-file-lab.vercel.app/',
    category: 'ongoing',
    technologies: ['React', 'Node.js', 'AI/ML', 'python']
  }
  //{
  // id: 'ongoing-3',
  //  title: 'Teclis Scientifique',
  //  description: 'Website for a scientific equipment company with product catalog and inquiry form. Revamp from Wix to React.',
  //  image: projectTeclisScientifique,
  //  link: 'https://example.com',
  //  category: 'ongoing',
  //  technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript']
  //},
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = () => {
  return projects;
};

export const getClassicProjects = () => {
  return projects.filter(project => project.category === 'classic');
};