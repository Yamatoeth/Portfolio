'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from './animations';

interface ToolCardProps {
  category: string;
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const ToolCard: React.FC<ToolCardProps> = ({ category, tools, icon: Icon }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl mr-4 transition-colors duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/60">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">
            {t(`tools.categories.${category}.title`)}
          </h3>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
          {t(`tools.categories.${category}.description`)}
        </p>
        
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool: string, index: number) => (
            <motion.span 
              key={tool}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/70"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechTools = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      id: 'development',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'design',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.486M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 'productivity',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      id: 'web3',
      icon: (props: { className?: string }) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

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
              {t('tools.title')}
            </motion.span>
          </ScaleIn>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('tools.subtitle')}
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={0.1 * index}>
              <ToolCard 
                category={category.id}
                tools={t(`tools.categories.${category.id}.tools`, { returnObjects: true }) as string[]}
                icon={category.icon}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTools;
