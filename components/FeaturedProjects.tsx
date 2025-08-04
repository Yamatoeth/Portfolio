'use client';

import { useTranslation } from 'react-i18next';
import { FadeIn, SlideInLeft, SlideInRight } from './animations';
import { getFeaturedProjects } from '../data/projectsTranslated';
import { useState, useEffect } from 'react';
// Custom SVG icons to avoid heroicons compatibility issues
const EyeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  client: string;
  category: string;
  color: string;
  logo: string;
  etherscanUrl?: string;
}

export default function FeaturedProjects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const featuredProjects = getFeaturedProjects(i18n.language);
    setProjects(featuredProjects);
  }, [i18n.language]);

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('projects.featuredSection.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('projects.featuredSection.subtitle')}{' '}
              <a 
                href="/contact" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {t('projects.featuredSection.emailLink')}
              </a>
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                opacity-0 translate-y-8
              `}
              style={{
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div 
                className={`
                  relative group cursor-pointer h-64 rounded-2xl 
                  bg-gradient-to-br ${project.color}
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl
                  overflow-hidden
                `}
                onClick={() => handleProjectClick(project.liveUrl)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Subtle geometric pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  {/* Logo/Title */}
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2 group-hover:scale-105 transition-transform">
                      {project.logo.length <= 3 ? (
                        <span className="text-4xl">{project.logo}</span>
                      ) : (
                        project.logo
                      )}
                    </h3>
                    {project.logo !== project.title && (
                      <p className="text-white/90 text-sm font-medium">
                        {project.category}
                      </p>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <EyeIcon className="w-12 h-12 text-white mx-auto" />
                      <p className="text-white font-medium">
                        {t('projects.featuredSection.viewProject')}
                      </p>
                    </div>
                  </div>

                  {/* Technologies badge */}
                  <div className="self-end">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <p className="text-white text-xs font-medium">
                        {project.technologies.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* External link icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Project info below card */}
              <div className="mt-4 px-2">
                                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <EyeIcon />
                      <span>{t('projects.viewProject')}</span>
                    </div>
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    <div className="flex items-center gap-1">
                      <ExternalLinkIcon />
                      <span>{t('projects.github')}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.8}>
          <div className="text-center mt-16">
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
            >
              Voir tous mes projets →
            </a>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
