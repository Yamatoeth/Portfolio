export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  details: string;
  technologies: string[];
}

export const experiences: Experience[] = [

  
    {
      id: 'exp-1',
      year: '2022 - Present',
      role: 'Full Stack Web3 Developer',
      company: 'Freelance',
      description: '3 years of progressive experience in blockchain and Web3 development',
      details: 'Building dApps, smart contracts, and data aggregation tools for wallets and transactions. Contributed to open-source projects and explored multiple blockchain platforms.',
      technologies: ['React', 'Node.js', 'Solidity', 'TypeScript', 'ThirdWeb', 'OpenZeppelin', 'ethers.js', 'Hardhat']
    },
    {
      id: 'exp-2',
      year: '2024',
      role: 'Web Developer & Entrepreneur',
      company: 'Freelance',
      description: 'Web development, crypto trading, and Shopify e-commerce',
      details: 'Built static websites and small applications, traded cryptocurrencies, launched ~15 Shopify stores across SE Asia, applied data-driven strategies for online business growth',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'CMS', 'Facebook Ads', 'Dropshipping', 'Web Design']
    },
    {
      id: 'exp-3',
      year: '2021 - 2022',
      role: 'Crypto & Blockchain Enthusiast / Bot Developer',
      company: 'Self-Driven',
      description: 'Immersion in crypto ecosystem and early automation',
      details: 'Learned blockchain, DeFi protocols, airdrop farming, and built on-chain trading bots to automate airdrop farming and launch sniping. Started coding to prepare for full Web3 development.',
      technologies: ['Blockchain', 'DeFi', 'Community Management', 'Airdrop Farming', 'Python', 'Node.js', 'ethers.js']
    }
  ];
