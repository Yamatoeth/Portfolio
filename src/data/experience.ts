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
    year: 'April 2022 - April 2024',
    role: 'Permanent Contract - Web Developer',
    company: 'Saniteo',
    description: 'Modernized and stabilized company digital presence with secure builds, improved UX, and SEO foundations.',
    details: 'Worked full-time to restructure UX, implement secure builds, reduce technical inconsistencies, and strengthen brand reliability.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'CMS']
  },
  {
    id: 'exp-2',
    year: 'April 2022 - Ongoing',
    role: 'Developer',
    company: 'Self-Driven',
    description: 'Developed bots and analytics tools for Web3, including wallet analysis and launch sniping.',
    details: 'During free time, created automation tools for analyzing wallets, snipe launches, and optimize Web3 strategies.',
    technologies: ['Python', 'bots', 'analytics tools', 'automation', 'scrapping']
  },
  {
    id: 'exp-3',
    year: '2023 - 2024',
    role: 'E-commerce',
    company: 'Freelance / Shopify',
    description: 'Built and customized Shopify stores with front-end coding and custom liquid.',
    details: 'Launched multiple stores, applied data-driven strategies for sales optimization, coded custom liquid functionalities and UI components.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 'exp-4',
    year: 'April 2024 - Present',
    role: 'Freelance - Web Developer',
    company: 'Self-Employed',
    description: 'Developed landing pages, websites, and custom web solutions for various clients.',
    details: 'Projects include: Telegram bot (June - August 2024), landing page for Coupal Construction (September 2024), landing page for GLC Solutions (December 2024).',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'CMS', 'Telegram API']
  },
  {
    id: 'exp-5',
    year: 'February 2025',
    role: 'Web3 Programmer',
    company: 'Personal Project',
    description: 'Created a lending/borrowing decentralized application on testnet.',
    details: 'Designed smart contracts and front-end for lending/borrowing functionalities, tested on Camp Network testnet.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat', 'TypeScript']
  },
  {
    id: 'exp-6',
    year: 'August 2025 - October 2025',
    role: 'Freelance - Web Developer',
    company: 'Teclis Scientific',
    description: 'Migrated legacy Wix site to modern Next.js application.',
    details: 'Revamped website for improved UI/UX, performance, and maintainability, implementing Next.js, React, and TailwindCSS.',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'HTML', 'CSS', 'API', 'SEO', 'CMS']
  },
  {
    id: 'exp-7',
    year: 'October 2025 - Ongoing',
    role: 'Developer',
    company: 'UpArena',
    description: 'Development of a Web3 platform focused on competitive gaming and tournaments.',
    details: 'Building smart contracts, backend infrastructure, and frontend interfaces to support user interactions, NFT integrations, and tournament mechanics.',
    technologies: ['React', 'Next.js', 'Chakra UI', 'PostgreSQL', 'Node.js', 'TypeScript', 'Supabase', 'Drizzle',]
  },
  {
    id: 'exp-8',
    year: '2026 - Ongoing',
    role: '3D Web Developer',
    company: 'Liquid Lab',
    description: 'Built a browser-native high-fidelity 3D experience with real-time performance at scale.',
    details: 'Designed a custom THREE.js/WebGL render pipeline with procedural animation, GPU-optimized asset delivery, and immersive interaction architecture, resulting in stable 60fps browser rendering without plugins.',
    technologies: ['THREE.js', 'WebGL', 'GLSL', 'React', 'TypeScript', '3D', 'Procedural']
  },
  {
    id: 'exp-9',
    year: '2026 - Ongoing',
    role: 'Mobile AI Developer',
    company: 'Jarvis',
    description: 'Built a unified AI voice assistant with customized data, combining voice, automation, and real-time reasoning.',
    details: 'Implemented OpenAI API integration, a Python-powered NLP pipeline, voice I/O, Redis-backed context storage, a Unicorv service layer, and a task automation engine to enable natural language task execution with hands-free workflows.',
    technologies: ['React Native', 'OpenAI', 'Python', 'Redis', 'Unicorn', 'NLP', 'Voice', 'TypeScript', 'Automation']
  }
];