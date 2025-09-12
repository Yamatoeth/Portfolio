'use client';

import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './animations';

interface ToolCardProps {
  category: string;
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ category, tools, icon: Icon }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl mr-4 transition-colors duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
          {getCategoryDescription(category)}
        </p>
        
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool: string, index: number) => (
            <motion.span 
              key={tool}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/70 whitespace-nowrap"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get category description
const getCategoryDescription = (category: string) => {
  const descriptions: Record<string, string> = {
    'languages': 'Programming languages I use to build applications',
    'frontend': 'Technologies for building modern and responsive user interfaces',
    'backend': 'Server-side technologies and frameworks I work with',
    'database': 'Database systems I have experience with',
    'devops': 'Tools and platforms for deployment and infrastructure',
    'design': 'Design tools I use for UI/UX and graphics',
    'blockchain': 'Blockchain technologies and frameworks I work with',
    'other': 'Additional tools and technologies in my toolkit'
  };
  return descriptions[category] || 'Various tools and technologies I work with';
};

const TechTools = () => {
  // Define categories with their respective icons
  const categories = [
    {
      id: 'languages',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'frontend',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'backend',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 'blockchain',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'database',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      id: 'devops',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 'design',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 'other',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
    },
  ];

  // Define tools for each category
  const toolsByCategory: Record<string, string[]> = {
    'languages': ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'Rust'],
    'frontend': ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'],
    'backend': ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI'],
    'database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    'devops': ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform'],
    'design': ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
    'blockchain': ['Ethereum', 'Hardhat', 'Truffle', 'Web3.js', 'Ethers.js'],
    'other': ['Git', 'Jest', 'Cypress', 'Storybook', 'Postman']
  };

  return (
    <section id="tech-tools" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 overflow-hidden">
          <ScaleIn>
            <motion.span 
              className="inline-block px-4 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Tech Stack
            </motion.span>
          </ScaleIn>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies & Tools
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={0.1 * index} className="h-full">
              <ToolCard 
                category={category.id}
                tools={toolsByCategory[category.id] || []}
                icon={category.icon}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
