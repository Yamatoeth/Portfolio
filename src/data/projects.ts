import projectWF from '@/assets/project-wf.webp';
import projectBurkett from '@/assets/project-burkett.webp';
import projectSolwatcher from '@/assets/project-solwatcher.webp';
import projectGLC from '@/assets/project-glc.webp';
import projectCoupalConstruction from '@/assets/project-coupal-construction.webp';
import projectBonkFeast from '@/assets/project-bonkfeast.webp';
import projectwrldtokendapp from '@/assets/project-wrldtokendapp.webp';
import projectjuicewrldnft from '@/assets/project-juicewrldnft.webp';
import projectgenixishop from '@/assets/project-genixishop.webp';
import projectlendingapp from '@/assets/project-lendingapp.webp';
import projectSolStake from '@/assets/project-solstake.webp';
import projectNFTMarketplace from '@/assets/project-nftmarketplace.webp';
import projectERC4337 from '@/assets/project-erc4337.webp';
import projectteclis from '@/assets/optimized/project-teclis-optimized.webp'
import projectmamamouchou from '@/assets/project-mamamouchou.webp'
import projectkalissea from '@/assets/project-kalissea.webp'
import projectUpArena from '@/assets/optimized/project-uparena-optimized.webp'
import projectvilla88 from '@/assets/project-villa88.webp'
import projectterrathread from '@/assets/terrathread.webp'
import projectLatelier from '@/assets/atelierparisien.webp'
import projectPaint from '@/assets/paint.webp'
import projectWoodWork from '@/assets/woodwork.webp'
import projectalplomberie from '@/assets/alplomberie.webp'
import projecthairsalon from '@/assets/hairsalon.webp'
import projectblueinstruments from '@/assets/music.webp'
import projectviced from '@/assets/viced.webp'
import projectvinhaKitchen from '@/assets/kitchen.webp'
import projectmiengPizzeria from '@/assets/mieng.webp'
import projectAnalytics from '@/assets/project-analytics.webp'
import projectFilespy from '@/assets/optimized/project-filespy-optimized.webp'

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  githubLink?: string;
  category: 'main' | 'web3' | 'ongoing' | 'classic'| 'shopify'| 'landing page'| 'full-stack website';
  technologies: string[];
  featured?: boolean;
  problem?: string;
  role?: string;
  outcome?: string;
}

export const projects: Project[] = [

  // Main Featured Projects
  {
    id: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant',
    description: 'Voice-first AI assistant with a low-latency STT/LLM/TTS pipeline.',
    image: projectFilespy,
    githubLink: 'https://github.com/Yamatoeth/mobileapp',
    category: 'ongoing',
    technologies: ['React Native', 'Expo', 'FastAPI', 'Python', 'Deepgram', 'Groq', 'PostgreSQL', 'Redis', 'Docker'],
    featured: true,
    problem: 'Voice AI assistants need fast spoken responses and a backend that can coordinate audio, context, and model calls reliably.',
    role: 'Built the mobile client and backend-owned voice pipeline around speech-to-text, LLM response generation, text-to-speech, persistence, and local fallbacks.',
    outcome: 'Functional spoken question-to-answer workflow with around 2 seconds latency in the target path.'
  },
  {
    id: 'convai-speech-analysis',
    title: 'ConvAI Speech Analysis Agent',
    description: 'Reusable workflow that turns raw speech recordings into structured summaries and extracted insights.',
    image: projectAnalytics,
    category: 'main',
    technologies: ['Python', 'LLM APIs', 'Speech AI', 'Automation', 'JSON Outputs'],
    featured: true,
    problem: 'Speech recordings are hard to review, search, summarize, and reuse without a repeatable analysis pipeline.',
    role: 'Designed an ingestion and analysis workflow that converts audio into structured outputs suitable for automation.',
    outcome: 'Raw recordings become actionable summaries, extracted insights, and machine-readable JSON.'
  },
  
  {
    id: 'Project-2',
    title: 'NFT Smart Contract',
    description: 'ERC 1155 NFT Minting Dapp on Sepolia Network',
    image: projectjuicewrldnft,
    link: 'https://juice-wrld-nft.vercel.app/',
    category: 'main',
    technologies: ['React', 'ThirdWeb SDK', 'Solidity', 'TypeScript'],
    featured: false,
    problem: 'NFT minting flows need clear contract state, network feedback, and wallet interaction handling.',
    role: 'Built the minting interface and contract integration on Sepolia.',
    outcome: 'Working ERC-1155 minting dapp demo with wallet-based execution.'
  },
  {
    id: 'project-3',
    title: 'ERC20 Token with Staking Interface',
    description: 'ERC20 custom contract built with Remix IDE and deployed on Sepolia Network',
    image: projectwrldtokendapp,
    link: 'https://wrld-sepolia-dapp.vercel.app/',
    category: 'main',
    technologies: ['React', 'Solidity', 'Remix', 'ethers.js'],
    featured: false
  },
  {
    id: 'project-1',
    title: 'Sepolia Lending/Borrowing Dapp Demo',
    description: 'Demo of a lending/borrowing dapp on Sepolia Network',
    image: projectlendingapp,
    link: 'https://sepolia-lend-borrow-demo.vercel.app/',
    category: 'main',
    technologies: ['React', 'Typescript', 'Hardhat', 'Ethersjs'],
    featured: false
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
    featured: false,
    problem: 'Solana users need a readable way to inspect wallet balance, token holdings, and recent activity.',
    role: 'Built a dashboard integrating Helius API data with Supabase-backed persistence.',
    outcome: 'Wallet activity became easier to scan without manually checking multiple explorers.'
  },
  {
    id: 'web3-3',
    title: 'BonkFeast',
    description: 'Landing page and info site for a fun meme cryptocurrency project',
    image: projectBonkFeast,
    link: 'https://bonkfeast.fun/',
    category: 'web3',
    technologies: ['html', 'css', 'js',],
    featured: false
  },
  {
    id: 'web3-4',
    title: 'ERC 4337 Account Abstraction Demo',
    description: 'Demo of an ERC 4337 account abstraction on Sepolia Network',
    image: projectERC4337,
    category: 'web3',
    technologies: ['hardhat', 'react', 'ethers.js', 'typescript'],
    featured: false
  },
  {
    id: 'web3-5',
    title: 'SolStake',
    description: 'Turn your SOL into yield with SolStake',
    image: projectSolStake,
    category: 'web3',
    technologies: ['anchor', 'react', 'ethers.js', 'typescript'],
    featured: false
 },
  {
    id: 'web3-6',
    title: 'Neon MarketPlace',
    description: 'NFT MarketPlace for NFTs on Solana',
    image: projectNFTMarketplace,
    category: 'web3',
    technologies: ['anchor', 'react', 'ethers.js', 'typescript'],
    featured: false
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
    featured: true,
    problem: 'A legacy Wix system was difficult to maintain and too limited for international content operations.',
    role: 'Revamped the platform with Next.js, Sanity CMS, multilingual routing, SEO structure, and maintainable content workflows.',
    outcome: 'Expanded multilingual support from 3 to 10 languages and made the site easier to scale and maintain.'
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
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: false
  },
  {
    id: 'classic-3',
    title: 'GLC Solutions',
    description: 'Website for technology solutions company with service presentation and portfolio showcase.',
    image: projectGLC,
    link: 'https://yamatoeth.github.io/GlcSolutions',
    category: 'landing page',
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'Vercel'],
    featured: false
  },
  {
    id: 'classic-4',
    title: 'Coupal Construction',
    description: 'Showcase website for construction company with project gallery and online quote form.',
    image: projectCoupalConstruction,
    link: 'https://yamatoeth.github.io/CoupalConstruction',
    category: 'landing page',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'Netlify'],
    featured: false
  },
  {
    id: 'classic-5',
    title: 'Genixi',
    description: 'Ecommerce platform for a retail business with product catalog, shopping cart, and payment integration.',
    image: projectgenixishop,
    link: 'https://genixi.store/products/whitening-strips',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads'],
    featured: false
  },
  {
    id: 'classic-6',
    title: 'Mamamouchou',
    description: 'Designed and Developed a shopify store for a client. Was in charge of visual creation, Ads Management, website optimisation, shopify maintenance and updates.',
    image: projectmamamouchou,
    link: 'https://mamamouchou.com/',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads', 'Canva'],
    featured: false
  },
  {
    id: 'classic-7',
    title: 'Kalissea',
    description: 'Designed and Developed a shopify store for a client. Was in charge of visual creation, Ads Management, website optimisation, shopify maintenance and updates.',
    image: projectkalissea,
    link: 'https://kalissea.com/',
    category: 'shopify',
    technologies: ['Shopify', 'Custom Liquid', 'Facebook Ads', 'Canva'],
    featured: false
  },
  {
    id: 'classic-8',
    title: 'Villa 88',
    description: 'Website for a hostel in Hoi An, Vietnam',
    image: projectvilla88,
    link: 'https://villa88.vercel.app/',
    category: 'shopify',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'Vercel', 'Vite'],
    featured: false
  },
  {
    id: 'classic-9',
    title: 'Terra & Thread',
    description: 'Landing page for a small hand made crafts in Vietnam',
    image: projectterrathread,
    link: 'https://terraandthread.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TailwindCSS', 'TypeScript', 'Vercel', 'Vite'],
    featured: false
  },
  {
    id: 'ongoing-3',
    title: 'UpArena',
    description: 'Platform unifying streaming and prediction, where users can predicts the outcome of game streams and earn rewards.',
    image: projectUpArena,
    link: 'https://www.uparena.io/',
    category: 'ongoing',
    technologies: ['React', 'Node.js', 'TypeScript', 'Drizzle', 'PostgreSQL', 'Supabase', 'NFTs', 'Web3', ],
    featured: true,
    problem: 'Prediction products need simple onboarding, clear wallet actions, and understandable user feedback.',
    role: 'Worked on the interface direction for streaming, prediction, wallet, and Web3 transaction flows.',
    outcome: 'A more Web2-friendly product direction for blockchain-backed prediction mechanics.'
  },
  {
    id: 'classic-10',
    title: "L'atelier Parisien",
    description: 'Website for a high quality restaurant in Paris. Reservation system, menu showcase, and contact form.',
    image: projectLatelier,
    link: 'https://latelier-parisien.vercel.app/',
    category: 'classic',
    technologies: ['Vite', 'React', 'TailwindCSS', 'TypeScript', 'Vercel'],
    featured: false
  },
  {
    id: 'classic-11',
    title: 'WoodWork',
    description: 'Showcase website for a woodworking company with project gallery and online quote form.',
    image: projectWoodWork,
    link: 'paris-woodworks-pro.vercel.app',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
    featured: false
  },
  {
    id: 'classic-12',
    title: 'Peinture Lyon',
    description: 'Website for a painting company in Lyon, France',
    image: projectPaint,
    link: 'https://lyon-painter-pro.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
    featured: false
  },
  {
    id: 'classic-13',
    title: 'Mieng Pizzeria',
    description: 'Website for a pizzeria in Lyon, France',
    image: projectmiengPizzeria,
    link: 'https://mieng-restaurant.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
  },
  {
    id: 'classic-14',
    title: 'Vi Nha Kitchen',
    description: 'Website for a restaurant in Da Nang, Vietnam',
    image: projectvinhaKitchen,
    link: 'https://vi-nha-kitchen.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
  },
  {
    id: 'classic-15',
    title: 'Al Plomberie',
    description: 'Website for a plumbing company in Paris, France',
    image: projectalplomberie,
    link: 'https://al-plomberie.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
  },
  {
    id: 'classic-16',
    title: 'Blue Instruments',
    description: 'Website for a music instruments shop in Paris, France',
    image: projectblueinstruments,
    link: 'https://blue-instruments.vercel.app',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
  },
  {
    id: 'classic-17',
    title: 'HairSalon',
    description: 'Aesthetic website for a hair salon in Marseille, France',
    image: projecthairsalon,
    link: 'https://hairsalon-website.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
    featured: false
  },
  {
    id: 'classic-18',
    title: 'Viced',
    description: 'Premium website for a weed brand',
    image: projectviced,
    link: 'https://viced.vercel.app/',
    category: 'landing page',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vercel', 'Nextjs'],
    featured: false
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
