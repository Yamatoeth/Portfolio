'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedButton } from './animations';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
  client: string;
  etherscanUrl?: string;
}

interface ProjectSearchProps {
  projects: Project[];
  onProjectsFiltered: (filtered: Project[]) => void;
}

const ProjectSearch = ({ projects, onProjectsFiltered }: ProjectSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { t } = useTranslation();

  useEffect(() => {
    let filtered = projects;

    // Apply category filter
    if (filter !== 'all') {
      if (filter === 'featured') {
        filtered = filtered.filter(project => project.featured);
      } else if (filter === 'web3') {
        filtered = filtered.filter(project => 
          project.category?.toLowerCase().includes('blockchain') ||
          project.category?.toLowerCase().includes('defi') ||
          project.category?.toLowerCase().includes('web3')
        );
      } else {
        filtered = filtered.filter(project => 
          project.category?.toLowerCase().includes(filter.toLowerCase())
        );
      }
    }

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    onProjectsFiltered(filtered);
  }, [searchTerm, filter, projects, onProjectsFiltered]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const categories = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'featured', label: t('projects.filters.featured') },
    { key: 'web3', label: t('projects.filters.web3') },
    { key: 'web', label: t('projects.filters.web') },
    { key: 'wordpress', label: t('projects.filters.wordpress') }
  ];

  return (
    <div className="mb-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <AnimatedButton
            key={category.key}
            onClick={() => setFilter(category.key)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === category.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </AnimatedButton>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={t('projects.search.placeholder')}
            className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
          />
          
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label={t('projects.search.clear')}
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Results Count */}
        {searchTerm && (
          <div className="absolute -bottom-6 left-0 text-sm text-gray-500">
            {t('projects.search.searching')}: &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;
