'use client';

import { useState, useEffect, useCallback } from 'react';
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

const ProjectSearch: React.FC<ProjectSearchProps> = ({ projects, onProjectsFiltered }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  const filterProjects = useCallback((term: string, techFilter: string) => {
    let filtered = [...projects];

    // Apply search term filter
    if (term) {
      filtered = filtered.filter((project: Project) => 
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies.some((tech: string) => 
          tech.toLowerCase().includes(term)
        )
      );
    }

    // Apply technology filter
    if (techFilter !== 'all') {
      filtered = filtered.filter((project: Project) => 
        project.technologies.some((tech: string) => 
          tech.toLowerCase() === techFilter.toLowerCase()
        )
      );
    }

    onProjectsFiltered(filtered);
  }, [projects, onProjectsFiltered]);

  // Apply filters when search term or filter changes
  useEffect(() => {
    filterProjects(searchTerm, filter);
  }, [searchTerm, filter, filterProjects]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleFilter = (tech: string) => {
    setFilter(tech);
  };

  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Filter by Technology
        </h3>
        <div className="flex flex-wrap gap-2">
          <AnimatedButton
            onClick={() => handleFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </AnimatedButton>
          {uniqueTechnologies.map((tech) => (
            <AnimatedButton
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tech}
            </AnimatedButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSearch;
