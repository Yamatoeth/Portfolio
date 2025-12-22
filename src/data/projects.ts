
import projectFilespy from '@/assets/project-filespy.png';
import projectFolderly from '@/assets/project-folderly.png';
import projectWF from '@/assets/project-wf.png';
import projectBurkett from '@/assets/project-burkett.png';
import projectSolwatcher from '@/assets/project-solwatcher.png';
import projectGLC from '@/assets/project-glc.png';
import projectCoupalConstruction from '@/assets/project-coupal-construction.png';
import projectBonkFeast from '@/assets/project-bonkfeast.png';
import projectwrldtokendapp from '@/assets/project-wrldtokendapp.png';
import projectjuicewrldnft from '@/assets/project-juicewrldnft.png';
import projectgenixishop from '@/assets/project-genixishop.png';
import projectlendingapp from '@/assets/project-lendingapp.png';
import projectSolStake from '@/assets/project-solstake.png';
import projectNFTMarketplace from '@/assets/project-nftmarketplace.png';
import projectERC4337 from '@/assets/project-erc4337.png';
import projectteclis from '@/assets/project-teclis.png'
import projectmamamouchou from '@/assets/project-mamamouchou.png'
import projectkalissea from '@/assets/project-kalissea.png'
import projectUpArena from '@/assets/project-uparena.png'


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  category: 'main' | 'web3' | 'ongoing' | 'classic'| 'shopify'| 'landing page'| 'full-stack website';
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [

  // Main Featured Projects
  
  {
    id: 'Project-2',
    title: 'NFT Smart Contract',
    description: 'ERC 1155 NFT Minting Dapp on Sepolia Network',
    image: projectjuicewrldnft,
    link: 'https://juice-wrld-nft.vercel.app/',
    category: 'main',
    technologies: ['React', 'ThirdWeb SDK', 'Solidity', 'TypeScript'],
    featured: false
  },
  {
    id: 'project-3',
    title: 'ERC20 Token with Staking Interface',
    description: 'ERC20 custom contract built with Remix IDE and deployed on Sepolia Network',
    image: projectwrldtokendapp,
    link: 'https://wrld-sepolia-dapp.vercel.app/',
    category: 'main',
    technologies: ['React', 'Solidity', 'Remix', 'ethers.js'],
    featured: true
  },
  {
    id: 'project-1',
    title: 'Sepolia Lending/Borrowing Dapp Demo',
    description: 'Demo of a lending/borrowing dapp on Sepolia Network',
    image: projectlendingapp,
    link: 'https://sepolia-lend-borrow-demo.vercel.app/',
    category: 'main',
    technologies: ['React', 'Typescript', 'Hardhat', 'Ethersjs'],
    featured: true
  },
  
  // Web3 Projects // 

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
    title: 'BonkFeast',
    description: 'Landing page and info site for a fun meme cryptocurrency project',
    image: projectBonkFeast,
    link: 'https://bonkfeast.fun/',
    category: 'web3',
    technologies: ['html', 'css', 'js',]
  },
  {
    id: 'web3-4',
    title: 'ERC 4337 Account Abstraction Demo',
    description: 'Demo of an ERC 4337 account abstraction on Sepolia Network',
    image: projectERC4337,
    category: 'web3',
    technologies: ['hardhat', 'react', 'ethers.js', 'typescript']
  },
  {
    id: 'web3-5',
    title: 'SolStake',
    description: 'Turn your SOL into yield with SolStake',
    image: projectSolStake,
    category: 'web3',
    technologies: ['anchor', 'react', 'ethers.js', 'typescript']
 },
  {
    id: 'web3-6',
    title: 'Neon MarketPlace',
    description: 'NFT MarketPlace for NFTs on Solana',
    image: projectNFTMarketplace,
    category: 'web3',
    technologies: ['anchor', 'react', 'ethers.js', 'typescript']
  },

  // Classic / Non-Web3 Projects
  
  {
    id: 'classic-1',
    title: 'Teclis Scientific',
    description: 'Website for a Leading manufacturer of cutting-edge scientific instruments.',
    image: projectteclis, 
    link: 'https://teclis-nextjs.vercel.app/en',
    category: 'full-stack website',
    technologies: ['Nextjs', 'TailwindCSS', 'TypeScript', 'React', 'Vercel', 'Sanity CMS', 'REST API', 'SEO', 'Multilanguage'],
    featured: true
  },
  {
    id: 'classic-6',
    title: 'WF Design Agency',
    description: 'showcase of a design agency website built with React and TailwindCSS',
    image: projectWF, 
    link: 'https://yamatoeth.github.io/WF/',
    category: 'landing page',
    technologies: ['React', 'TailwindCSS', 'TypeScript', ],
    featured: false
  },
  {
    id: 'classic-2',
    title: 'Burkett & Co',
    description: 'Web platform for accounting firm with client management and professional services. Modern and secure interface.',
    image: projectBurkett,
    link: 'https://yamatoeth.github.io/Burkett-Co',
    category: 'landing page',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'classic-3',
    title: 'GLC Solutions',
    description: 'Website for technology solutions company with service presentation and portfolio showcase.',
    image: projectGLC,
    link: 'https://yamatoeth.github.io/GlcSolutions',
    category: 'landing page',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Vercel'],
  },
  {
    id: 'classic-4',
    title: 'Coupal Construction',
    description: 'Showcase website for construction company with project gallery and online quote form.',
    image: projectCoupalConstruction,
    link: 'https://yamatoeth.github.io/CoupalConstruction',
    category: 'landing page',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'Netlify'],
  },
  {
    id: 'classic-5',
    title: 'Ecommerce Shop',
    description: 'Ecommerce platform for a retail business with product catalog, shopping cart, and payment integration.',
    image: projectgenixishop,
    link: 'https://genixi.store/products/whitening-strips',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads']
  },
  {
    id: 'classic-6',
    title: 'Mamamouchou',
    description: 'Designed and Developed a shopify store for a client. Was in charge of visual creation, Ads Management, website optimisation, shopify maintenance and updates.',
    image: projectmamamouchou,
    link: 'https://mamamouchou.com/',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads', 'Canva']
  },
  {
    id: 'classic-7',
    title: 'Kalissea',
    description: 'Designed and Developed a shopify store for a client. Was in charge of visual creation, Ads Management, website optimisation, shopify maintenance and updates.',
    image: projectkalissea,
    link: 'https://kalissea.com/',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads', 'Canva']
  },

  // Ongoing Projects
  // {
  //   id: 'ongoing-1',
  //   title: 'FileSpy',
  //   description: 'Advanced file analysis tool with AI-powered insights',
  //   image: projectFilespy,
  //   link: 'https://file-spy.vercel.app/',
  //   category: 'ongoing',
  //   technologies: ['Electron', 'React', 'Python', 'Machine Learning']
  // },
  // {
  //   id: 'ongoing-2',
  //   title: 'Folderly',
  //   description: 'Intelligent folder organization system with automated categorization',
  //   image: projectFolderly,
  //   link: 'https://tidy-file-lab.vercel.app/',
  //   category: 'ongoing',
  //   technologies: ['React', 'Node.js', 'AI/ML', 'python']
  // },
  {
    id: 'ongoing-3',
    title: 'UpArena',
    description: 'Platform unifying streaming and prediction, where users can predicts the outcome of game streams and earn rewards.',
    image: projectUpArena,
    link: 'https://www.uparena.io/',
    category: 'ongoing',
    technologies: ['React', 'Node.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Supabase', 'NFTs', 'Web3', ]
  }
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